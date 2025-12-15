# BF6 Meta

Live site: https://erebusares.github.io/BF6-Meta/main.html

A lightweight GitHub Pages reference for BF6 weapon builds, attachment unlock paths, and ranking data. The site is fully data-driven from the JSON in `/data` (`builds-main.json`, `builds-mastery.json`, `attachments.json`, `ranking.json`, and `metadata.json`). Mastery unlocks (baseline/changes) live only in `builds-mastery.json`; `builds-main.json` is reserved for build loadouts, notes, and related metadata.

## Disclaimer
- Unofficial, community-maintained reference; use at your own risk.
- Attachment values, unlock paths, and ranks can change with patches, so info may be stale at any time.
- Parts of the site were built with AI - I'm a hobbyist, not a professional developer.
- This won't improve your aim or game sense; it just gives you builds to try.
- Confirm in-game details and recent patch notes when something looks off.

## Contributing
- Anyone can contribute - open a PR with fixes, new builds, balance notes, or layout tweaks.
- Keep formatting consistent with the existing entries and prefer plain ASCII characters.

## Adding a new build
1. Open `data/builds-main.json` and locate the weapon entry.
2. Add or edit the build arrays you want to expose (`versatile`, `close`, `long`, `sniper`, `custom`, etc.). Each array is an ordered list of attachments. Optional objects in the list:
   - `{ "Notes": "Short blurb" }` renders in the notes box.
   - `{ "Updated": "MM/DD/YYYY" }` shows a last-updated stamp.
   - `{ "name": "Attachment Name", "level": 12 }` lets you include unlock level metadata (falls back to `attachments.json` data if omitted).
3. If the weapon is missing mastery unlocks, add a matching entry to `data/builds-mastery.json` (baseline/changes). Do not add `baseline` or `changes` to `builds-main.json`; the app pulls them from `builds-mastery.json`.
4. To adjust ranking or metadata, update `data/ranking.json` and/or `data/metadata.json`. Ranks and type ranks are sourced only from `data/ranking.json` (do not add `rank`/`tr` fields to `builds-main.json`).
5. Reload `main.html` locally to confirm the build renders as expected.

## Adding a custom/community build name
- Add a `custom` array to the weapon in `data/builds-main.json`. Start with an object that names the build, then optional notes/updated entries, then the attachments.
- Example:
```json
"custom": [
  { "custom": "Community" },
  { "Notes": "Crowdsourced favorite setup." },
  { "Updated": "12/15/2025" },
  "Double-Port Brake",
  "415MM Prototype",
  "Stippled Stubby",
  "36RND Magazine",
  "Frangible",
  "CQ RDS 1.25X"
]
```
