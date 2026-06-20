import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const dataDir = path.join(root, 'data');
const buildsPath = path.join(dataDir, 'builds-main.json');
const overlayPath = path.join(dataDir, 'battlefinity-official-builds-2026-06-15.json');

const normalizeKey = (value) => String(value || '').trim().toUpperCase();
const titleToId = (value) => String(value || '')
  .trim()
  .toLowerCase()
  .replace(/[^a-z0-9.]+/g, '-')
  .replace(/^-+|-+$/g, '');

const builds = JSON.parse(await fs.readFile(buildsPath, 'utf8'));
const overlay = JSON.parse(await fs.readFile(overlayPath, 'utf8'));
const byName = new Map(builds.map((entry, index) => [normalizeKey(entry.dbname || entry.name || entry.id), { entry, index }]));

for (const [name, payload] of Object.entries(overlay.weapons || {})) {
  const key = normalizeKey(name);
  const existing = byName.get(key);
  const buildEntries = payload.builds || {};
  const target = existing?.entry || {
    id: titleToId(name),
    dbname: name
  };

  target.lastUpdated = payload.lastUpdated || target.lastUpdated || overlay.recordedOn;

  for (const [buildKey, buildValue] of Object.entries(buildEntries)) {
    target[buildKey] = buildValue;
  }

  if (!existing) {
    builds.push(target);
    byName.set(key, { entry: target, index: builds.length - 1 });
  }
}

await fs.writeFile(buildsPath, JSON.stringify(builds, null, 2) + '\n');
console.log(`Merged ${Object.keys(overlay.weapons || {}).length} Battlefinity weapon build entries into data/builds-main.json`);
