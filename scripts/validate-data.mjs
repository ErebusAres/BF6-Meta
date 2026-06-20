import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const dataDir = path.join(root, 'data');

async function readJson(file) {
  const full = path.join(dataDir, file);
  try {
    return JSON.parse(await fs.readFile(full, 'utf8'));
  } catch (error) {
    throw new Error(`Failed to read ${file}: ${error.message}`);
  }
}

const toKey = (value) => String(value || '').trim().toUpperCase();
const isObject = (value) => value && typeof value === 'object' && !Array.isArray(value);

const metadata = await readJson('metadata.json');
const ranking = await readJson('ranking.json');
const builds = await readJson('builds-main.json');
const mastery = await readJson('builds-mastery.json');
const attachments = await readJson('attachments.json');

const errors = [];
const warnings = [];

const metaByKey = new Map(Object.keys(metadata || {}).map((name) => [toKey(name), metadata[name]]));
const buildByKey = new Map((Array.isArray(builds) ? builds : []).map((entry) => [toKey(entry.dbname || entry.name || entry.id), entry]));
const attachmentByKey = new Map(Object.keys(attachments || {}).map((name) => [toKey(name), attachments[name]]));
const baselineMap = mastery.weapon_baseline || mastery.baseline || {};
const changesMap = mastery.weapon_changes || mastery.changes || {};

if (!Array.isArray(ranking)) errors.push('ranking.json must be an array.');
if (!Array.isArray(builds)) errors.push('builds-main.json must be an array.');

const rankedNames = new Set();
for (const group of Array.isArray(ranking) ? ranking : []) {
  if (!group || !group.type) {
    errors.push('Ranking group is missing type.');
    continue;
  }
  const seenTr = new Map();
  for (const entry of group.entries || []) {
    const key = toKey(entry.dbname || entry.id);
    if (!key) {
      errors.push(`Ranking group ${group.type} has an entry with no dbname/id.`);
      continue;
    }
    rankedNames.add(key);
    if (!metaByKey.has(key)) errors.push(`Ranked weapon missing metadata: ${entry.dbname}`);
    if (!buildByKey.has(key)) warnings.push(`Ranked weapon missing builds-main entry: ${entry.dbname}`);
    if (!entry.rank) errors.push(`Ranked weapon missing tier/rank: ${entry.dbname}`);
    const tr = Number(entry.tr);
    if (!Number.isFinite(tr) || tr <= 0) warnings.push(`Ranked weapon missing positive per-type tr: ${entry.dbname}`);
    if (Number.isFinite(tr)) {
      const prev = seenTr.get(tr);
      if (prev) errors.push(`Duplicate tr ${tr} in ${group.type}: ${prev} and ${entry.dbname}`);
      seenTr.set(tr, entry.dbname);
    }
  }
}

for (const [key, meta] of metaByKey) {
  const name = meta.name || key;
  if (!rankedNames.has(key)) warnings.push(`Metadata weapon is not ranked: ${name}`);
  if (!buildByKey.has(key)) warnings.push(`Metadata weapon missing builds-main entry: ${name}`);
  if (!meta.type) errors.push(`Metadata weapon missing type: ${name}`);
  if (!meta.image) warnings.push(`Metadata weapon missing image filename: ${name}`);
  if (!meta.maxLevel) warnings.push(`Metadata weapon missing maxLevel: ${name}`);
  if (!meta.apMax && !meta.apmax) warnings.push(`Metadata weapon missing apMax: ${name}`);
}

const buildKeysToIgnore = new Set(['id', 'name', 'dbname', 'rank', 'tr', 'typeRating', 'range', 'lastUpdated', 'baseline', 'changes']);
const attachmentNameSetByWeapon = new Map();
for (const [weaponKey, attachEntry] of attachmentByKey) {
  const names = new Set();
  const groups = attachEntry?.attachments || {};
  Object.values(groups).forEach((att) => {
    if (att?.name) names.add(toKey(att.name));
  });
  attachmentNameSetByWeapon.set(weaponKey, names);
}

for (const [key, build] of buildByKey) {
  const name = build.dbname || build.name || key;
  if (!metaByKey.has(key)) warnings.push(`Build weapon missing metadata: ${name}`);
  if (!rankedNames.has(key)) warnings.push(`Build weapon is not ranked: ${name}`);

  const hasBaseline = baselineMap[name] || baselineMap[key];
  const hasChanges = changesMap[name] || changesMap[key];
  if (!hasBaseline && !hasChanges) warnings.push(`Build weapon missing mastery data: ${name}`);

  const knownAttachments = attachmentNameSetByWeapon.get(key);
  if (!knownAttachments || knownAttachments.size === 0) {
    warnings.push(`Build weapon missing attachments.json lookup data: ${name}`);
  }

  for (const [field, value] of Object.entries(build)) {
    if (buildKeysToIgnore.has(field)) continue;
    if (!Array.isArray(value)) continue;
    for (const item of value) {
      if (typeof item === 'string') {
        if (knownAttachments && knownAttachments.size && !knownAttachments.has(toKey(item))) {
          warnings.push(`Attachment name not found for ${name} / ${field}: ${item}`);
        }
      } else if (isObject(item) && item.name) {
        if (knownAttachments && knownAttachments.size && !knownAttachments.has(toKey(item.name))) {
          warnings.push(`Attachment object name not found for ${name} / ${field}: ${item.name}`);
        }
      }
    }
  }
}

const report = {
  ok: errors.length === 0,
  errorCount: errors.length,
  warningCount: warnings.length,
  errors,
  warnings
};

await fs.mkdir(path.join(root, 'reports'), { recursive: true });
await fs.writeFile(path.join(root, 'reports', 'data-validation-report.json'), JSON.stringify(report, null, 2) + '\n');

if (errors.length) {
  console.error(`Data validation failed: ${errors.length} error(s), ${warnings.length} warning(s).`);
  errors.forEach((entry) => console.error(`ERROR: ${entry}`));
  warnings.slice(0, 50).forEach((entry) => console.warn(`WARN: ${entry}`));
  if (warnings.length > 50) console.warn(`WARN: ...${warnings.length - 50} more warning(s)`);
  process.exit(1);
}

console.log(`Data validation passed with ${warnings.length} warning(s).`);
warnings.slice(0, 100).forEach((entry) => console.warn(`WARN: ${entry}`));
if (warnings.length > 100) console.warn(`WARN: ...${warnings.length - 100} more warning(s)`);
