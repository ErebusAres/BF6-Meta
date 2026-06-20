import fs from 'node:fs/promises';

const path = 'main.html';
let content = await fs.readFile(path, 'utf8');
let changed = false;

function replaceOnce(haystack, needle, replacement, label) {
  if (!haystack.includes(needle)) {
    console.warn(`Skipped ${label}: expected block not found, maybe already patched.`);
    return haystack;
  }
  changed = true;
  return haystack.replace(needle, replacement);
}

const oldSortBlock = `      const defaultWeaponSort = (a, b) => {
        const aTr = Number(a.tr);
        const bTr = Number(b.tr);
        if (Number.isFinite(aTr) && Number.isFinite(bTr) && aTr !== bTr) return aTr - bTr;
        return (a.displayName || '').localeCompare(b.displayName || '');
      };`;

const newSortBlock = `      const tierSortOrder = {
        meta: 0,
        s: 0,
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        f: 5
      };
      const typeSortOrder = {
        'SMG': 0,
        'ASSAULT': 1,
        'CARBINE': 2,
        'LMG': 3,
        'SNIPER RIFLE': 4,
        'DMR': 5,
        'SECONDARY': 6,
        'SHOTGUN': 7
      };
      const defaultWeaponSort = (a, b) => {
        const aTier = tierSortOrder[normalizeRank(a.rank)] ?? 99;
        const bTier = tierSortOrder[normalizeRank(b.rank)] ?? 99;
        if (aTier !== bTier) return aTier - bTier;

        const aType = typeSortOrder[toKey(a.type)] ?? 99;
        const bType = typeSortOrder[toKey(b.type)] ?? 99;
        if (aType !== bType) return aType - bType;

        const aTr = Number(a.tr);
        const bTr = Number(b.tr);
        if (Number.isFinite(aTr) && Number.isFinite(bTr) && aTr !== bTr) return aTr - bTr;
        return (a.displayName || '').localeCompare(b.displayName || '');
      };

      const getTierLabel = (rank) => {
        const tier = normalizeRank(rank);
        if (tier === 'meta' || tier === 's') return 'META / S-TIER';
        if (tier === 'a') return 'A-TIER';
        if (tier === 'b') return 'B-TIER';
        if (tier === 'c') return 'C-TIER';
        if (tier === 'd') return 'D-TIER';
        if (tier === 'f') return 'F-TIER';
        return 'UNRANKED';
      };

      const createTierHeader = (rank) => {
        const tier = normalizeRank(rank) || 'unknown';
        const header = document.createElement('div');
        header.className = `tier-section-header tier-section-${tier}`;
        header.innerHTML = `<span class="tier-section-title">${getTierLabel(tier)}</span><span class="tier-section-rule"></span>`;
        return header;
      };`;

content = replaceOnce(content, oldSortBlock, newSortBlock, 'tier-aware defaultWeaponSort');

const oldRenderChunkStart = `          const CHUNK_SIZE = 18;
          const renderChunk = (startIndex = 0) => {`;

const newRenderChunkStart = `          const CHUNK_SIZE = 18;
          let lastRenderedTier = '';
          const showTierHeaders = !currentTypeFilter;
          const renderChunk = (startIndex = 0) => {`;

content = replaceOnce(content, oldRenderChunkStart, newRenderChunkStart, 'tier-header render state');

const oldWeaponLoopStart = `              const weapon = filtered[i];
              try {`;

const newWeaponLoopStart = `              const weapon = filtered[i];
              try {
                if (showTierHeaders) {
                  const tierKey = normalizeRank(weapon.rank) || 'unknown';
                  if (tierKey !== lastRenderedTier) {
                    frag.appendChild(createTierHeader(tierKey));
                    lastRenderedTier = tierKey;
                  }
                }`;

content = replaceOnce(content, oldWeaponLoopStart, newWeaponLoopStart, 'tier header insertion');

const oldStyleAnchor = `  <link rel="stylesheet" href="style/styles.css" />`;
const styleBlock = `  <link rel="stylesheet" href="style/styles.css" />
  <style>
    .tier-section-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 18px 0 8px;
      color: rgba(255,255,255,0.88);
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-size: 0.82rem;
    }
    .tier-section-title {
      padding: 5px 10px;
      border: 1px solid rgba(255,255,255,0.18);
      border-radius: 999px;
      background: rgba(255,255,255,0.06);
      white-space: nowrap;
    }
    .tier-section-rule {
      height: 1px;
      flex: 1;
      background: linear-gradient(90deg, rgba(255,255,255,0.22), rgba(255,255,255,0));
    }
  </style>`;

if (!content.includes('tier-section-header')) {
  content = replaceOnce(content, oldStyleAnchor, styleBlock, 'tier section header styles');
}

if (!changed) {
  console.log('No changes made; main.html may already be patched.');
} else {
  await fs.writeFile(path, content);
  console.log('Patched main.html: tier-first all-weapons sort, preserved per-class rank pills, and added tier section headers.');
}
