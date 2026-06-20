import fs from 'node:fs/promises';

const path = 'main.html';
const original = await fs.readFile(path, 'utf8');

const oldBlock = `      const defaultWeaponSort = (a, b) => {
        const aTr = Number(a.tr);
        const bTr = Number(b.tr);
        if (Number.isFinite(aTr) && Number.isFinite(bTr) && aTr !== bTr) return aTr - bTr;
        return (a.displayName || '').localeCompare(b.displayName || '');
      };`;

const newBlock = `      const tierSortOrder = {
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
      };`;

if (!original.includes(oldBlock)) {
  throw new Error('Could not find the expected defaultWeaponSort block in main.html. No changes made.');
}

const next = original.replace(oldBlock, newBlock);
await fs.writeFile(path, next);
console.log('Patched main.html default sort: tier first, type second, per-class rank third.');
