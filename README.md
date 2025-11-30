# BF6 Meta

Live site: https://erebusares.github.io/BF6-Meta/main.html

A lightweight GitHub Pages reference for BF6 weapon builds, attachment unlock paths, and ranking data. Everything on the site is driven by the data in `manualbuilds.js`.

## Disclaimer
This is an unofficial, community-maintained reference. Use at your own risk. Attachment values, unlock paths, and ranks can change with patches, so the information may be stale at any time. This won’t improve your aim or game sense—it just gives you builds to try. Confirm in-game details and recent patch notes when something looks off.

## Contributing
- Anyone can contribute - open a PR with fixes, new builds, balance notes, or layout tweaks.
- Keep formatting consistent with the existing entries and prefer plain ASCII characters.

## Adding a new build
1. Open `manualbuilds.js` and duplicate a nearby weapon block inside the `weaponConfigs` array.
2. Update the basics: `id` (slug), `dbname` (display name), and the build arrays you want to expose (`versatile`, `close`, `long`, `sniper`, etc.), each listing attachments in order.
3. Add `baseline` and `changes` arrays if you want the unlock-tracking flow like the other weapons.
4. If you want the weapon ranked, add it to the right group in `MANUAL_RANKING_GROUPS`.
5. Refresh `main.html` locally to confirm the build renders as expected.

## Naming a custom build
- To display a custom/community build title, add a `custom` array to the weapon and start it with an object holding the label, then list the attachments.
- Example:
```js
custom: [
  { custom: 'My Build Name' },
  'Double-Port Brake',
  '415MM Prototype',
  'Stippled Stubby'
]
```
