(function attachWeaponDatabase(globalScope) {
  const target =
    globalScope && globalScope.weaponDatabase && typeof globalScope.weaponDatabase === 'object'
      ? { ...globalScope.weaponDatabase }
      : {};

  const weaponMetadata = {
    'KORD 6P67': { name: 'KORD 6P67', type: 'Assault Rifle', image: 'kord.avif', maxLevel: 40, apMax: 100 },
    'SOR-556 MK2': { name: 'SOR-556 MK2', type: 'Assault Rifle', image: 'sor-556.avif', maxLevel: 40, apMax: 100 },
    B36A4: { name: 'B36A4', type: 'Assault Rifle', image: 'b36a4.avif', maxLevel: 40, apMax: 100 },
    L85A3: { name: 'L85A3', type: 'Assault Rifle', image: 'l85a3.avif', maxLevel: 40, apMax: 100 },
    M433: { name: 'M433', type: 'Assault Rifle', image: 'm433.avif', maxLevel: 40, apMax: 100 },
    'NVO-228E': { name: 'NVO-228E', type: 'Assault Rifle', image: 'nvo-228e.avif', maxLevel: 40, apMax: 100 },
    AK4D: { name: 'AK4D', type: 'Assault Rifle', image: 'ak4d.avif', maxLevel: 40, apMax: 100 },
    'TR-7': { name: 'TR-7', type: 'Assault Rifle', image: 'tr-7.avif', maxLevel: 40, apMax: 100 },
    M4A1: { name: 'M4A1', type: 'Carbine', image: 'm4a1.avif', maxLevel: 40, apMax: 100 },
    M277: { name: 'M277', type: 'Carbine', image: 'm277.avif', maxLevel: 40, apMax: 100 },
    'AK-205': { name: 'AK-205', type: 'Carbine', image: 'ak-205.avif', maxLevel: 40, apMax: 100 },
    'M417 A2': { name: 'M417 A2', type: 'Carbine', image: 'm417a2.avif', maxLevel: 40, apMax: 100 },
    'GRT-BC': { name: 'GRT-BC', type: 'Carbine', image: 'grt-bc.avif', maxLevel: 40, apMax: 100 },
    'QBZ-192': { name: 'QBZ-192', type: 'Carbine', image: 'qbz-192.avif', maxLevel: 40, apMax: 100 },
    'SG 553R': { name: 'SG 553R', type: 'Carbine', image: 'sg-553r.avif', maxLevel: 40, apMax: 100 },
    'SOR-300SC': { name: 'SOR-300SC', type: 'Carbine', image: 'sor-300sc.avif', maxLevel: 40, apMax: 100 },
    RPKM: { name: 'RPKM', type: 'LMG', image: 'rpkm.avif', maxLevel: 40, apMax: 100 },
    L110: { name: 'L110', type: 'LMG', image: 'l110.avif', maxLevel: 40, apMax: 100 },
    'DRS-IAR': { name: 'DRS-IAR', type: 'LMG', image: 'drs-iar.avif', maxLevel: 40, apMax: 100 },
    M60: { name: 'M60', type: 'LMG', image: 'm60.avif', maxLevel: 40, apMax: 100 },
    M123K: { name: 'M123K', type: 'LMG', image: 'm123k.avif', maxLevel: 40, apMax: 100 },
    'KTS100 MK8': { name: 'KTS100 MK8', type: 'LMG', image: 'kts100.avif', maxLevel: 40, apMax: 100 },
    M240L: { name: 'M240L', type: 'LMG', image: 'm240l.avif', maxLevel: 40, apMax: 100 },
    M250: { name: 'M250', type: 'LMG', image: 'm250.avif', maxLevel: 40, apMax: 100 },
    PW5A3: { name: 'PW5A3', type: 'SMG', image: 'pw5a3.avif', maxLevel: 40, apMax: 100 },
    'UMG-40': { name: 'UMG-40', type: 'SMG', image: 'umg-40.avif', maxLevel: 40, apMax: 100 },
    SGX: { name: 'SGX', type: 'SMG', image: 'sgx.avif', maxLevel: 40, apMax: 100 },
    'SCW-10': { name: 'SCW-10', type: 'SMG', image: 'scw-10.avif', maxLevel: 40, apMax: 100 },
    SL9: { name: 'SL9', type: 'SMG', image: 'sl9.avif', maxLevel: 40, apMax: 100 },
    PW7A2: { name: 'PW7A2', type: 'SMG', image: 'pw7a2.avif', maxLevel: 40, apMax: 100 },
    KV9: { name: 'KV9', type: 'SMG', image: 'kv9.avif', maxLevel: 40, apMax: 100 },
    'USG-90': { name: 'USG-90', type: 'SMG', image: 'usg-90.avif', maxLevel: 40, apMax: 100 },
    'M2010 ESR': { name: 'M2010 ESR', type: 'Sniper Rifle', image: 'm2010-esr.avif', maxLevel: 40, apMax: 100 },
    'Mini Scout': { name: 'Mini Scout', type: 'Sniper Rifle', image: 'miniscout.avif', maxLevel: 40, apMax: 100 },
    PSR: { name: 'PSR', type: 'Sniper Rifle', image: 'psr.avif', maxLevel: 40, apMax: 100 },
    'SV-98': { name: 'SV-98', type: 'Sniper Rifle', image: 'sv-98.avif', maxLevel: 40, apMax: 100 },
    'M39 EMR': { name: 'M39 EMR', type: 'DMR', image: 'm39-emr.avif', maxLevel: 40, apMax: 100 },
    SVDM: { name: 'SVDM', type: 'DMR', image: 'svdm.avif', maxLevel: 40, apMax: 100 },
    'SVK-8.6': { name: 'SVK-8.6', type: 'DMR', image: 'svk-86.avif', maxLevel: 40, apMax: 100 },
    LMR27: { name: 'LMR27', type: 'DMR', image: 'lmr27.avif', maxLevel: 40, apMax: 100 },
    M87A1: { name: 'M87A1', type: 'Shotgun', image: 'm87a1.avif', maxLevel: 40, apMax: 100 },
    M1014: { name: 'M1014', type: 'Shotgun', image: 'm1014.avif', maxLevel: 40, apMax: 100 },
    '18.5KS-K': { name: '18.5KS-K', type: 'Shotgun', image: '18.5ks-k.avif', maxLevel: 40, apMax: 100 },
    'GGH-22': { name: 'GGH-22', type: 'Secondary', image: 'ggh-22.avif', maxLevel: 40, apMax: 60 },
    P18: { name: 'P18', type: 'Secondary', image: 'p18.avif', maxLevel: 40, apMax: 60 },
    'ES 5.7': { name: 'ES 5.7', type: 'Secondary', image: 'es5.7.avif', maxLevel: 40, apMax: 60 },
    M45A1: { name: 'M45A1', type: 'Secondary', image: 'm45a1.avif', maxLevel: 40, apMax: 60 },
    M44: { name: 'M44', type: 'Secondary', image: 'm44.avif', maxLevel: 40, apMax: 60 }
  };

  // Assault Rifles
  target['KORD 6P67'] = {
    attachments: {
      // Scopes
      'Iron Sights': { name: 'Iron Sights', type: 'Scope', pts: 5, unlockLevel: 0 },
      'CCO 2.00X': { name: 'CCO 2.00X', type: 'Scope', pts: 10, unlockLevel: 0 },
      'OSA-7 1.00X': { name: 'OSA-7 1.00X', type: 'Scope', pts: 10, unlockLevel: 1 },
      '2PRO 1.25x': { name: '2PRO 1.25X', type: 'Scope', pts: 10, unlockLevel: 2 },
      'Mini Flex 1.00x': { name: 'Mini Flex 1.00x', type: 'Scope', pts: 10, unlockLevel: 4 },
      'SU-231 1.50x': { name: 'SU-231 1.50x', type: 'Scope', pts: 10, unlockLevel: 5 },
      'PVQ-31 4.00x': { name: 'PVQ-31 4.00x', type: 'Scope', pts: 10, unlockLevel: 7 },
      'Baker 3.00x': { name: 'Baker 3.00x', type: 'Scope', pts: 10, unlockLevel: 8 },
      'R-MR 1.00x': { name: 'R-MR 1.00x', type: 'Scope', pts: 10, unlockLevel: 10 },
      'CQ RDS 1.25x': { name: 'CQ RDS 1.25x', type: 'Scope', pts: 10, unlockLevel: 11 },
      '1P87 1.50x': { name: '1P87 1.50x', type: 'Scope', pts: 10, unlockLevel: 14 },
      '3VZR 1.75x': { name: '3VZR 1.75x', type: 'Scope', pts: 10, unlockLevel: 15 },
      'RO-M 1.75x': { name: 'RO-M 1.75x', type: 'Scope', pts: 10, unlockLevel: 16 },
      'R4T 2.00x': { name: 'R4T 2.00x', type: 'Scope', pts: 10, unlockLevel: 18 },
      'RO-S 1.25x': { name: 'RO-S 1.25x', type: 'Scope', pts: 10, unlockLevel: 19 },
      'ST Prisim 5.00x': { name: 'ST Prisim 5.00x', type: 'Scope', pts: 10, unlockLevel: 21 },
      'SDO 3.50x': { name: 'SDO 3.50x', type: 'Scope', pts: 10, unlockLevel: 22 },
      'LDS 4.50x': { name: 'LDS 4.50x', type: 'Scope', pts: 10, unlockLevel: 25 },
      'BF-2M 2.50x': { name: 'BF-2M 2.50x', type: 'Scope', pts: 10, unlockLevel: 27 },
      'ROX 1.50x': { name: 'ROX 1.50x', type: 'Scope', pts: 10, unlockLevel: 28 },
      'SF-G2 5.00x': { name: 'SF-G2 5.00x', type: 'Scope', pts: 10, unlockLevel: 29 },
      'DVO LPVO': { name: 'DVO LPVO', type: 'Scope', pts: 25, unlockLevel: 31 },
      'Mars-F LPVO': { name: 'Mars-F LPVO', type: 'Scope', pts: 25, unlockLevel: 33 },
      'Grim 1.50x': { name: 'Grim 1.50x', type: 'Scope', pts: 25, unlockLevel: 34 },
      'A-P2 1.75x': { name: 'A-P2 1.75x', type: 'Scope', pts: 10, unlockLevel: 36 },
      'MC-CO LPVO': { name: 'MC-CO LPVO', type: 'Scope', pts: 25, unlockLevel: 38 },
      'PAS-35 3.00x': { name: 'PAS-35 3.00x', type: 'Scope', pts: 25, unlockLevel: 39 },
      'SU-230 LPVO': { name: 'SU-230 LPVO', type: 'Scope', pts: 20, unlockLevel: 'Season 1 Hardware 1 Assignment' },

      // Optic Accessories
      'None-Optic Accessory': { name: 'None', type: 'Optic Accessory', pts: 0, unlockLevel: 0 },
      'Piggyback Reflex': { name: 'Piggyback Reflex', type: 'Optic Accessory', pts: 10, unlockLevel: 9 },
      'Canted Iron Sights': { name: 'Canted Iron Sights', type: 'Optic Accessory', pts: 5, unlockLevel: 23 },
      'Canted Reflex': { name: 'Canted Reflex', type: 'Optic Accessory', pts: 10, unlockLevel: 31 },

      // Right Accessories
      'None-Right Accessory': { name: 'None', type: 'Right Accessory', pts: 0, unlockLevel: 0 },
      'FLASHLIGHT': { name: 'FLASHLIGHT', type: 'Right Accessory', pts: 10, unlockLevel: 2 },
      '5 MW RED': { name: '5 MW RED', type: 'Right Accessory', pts: 10, unlockLevel: 6 },
      '5 MW GREEN': { name: '5 MW GREEN', type: 'Right Accessory', pts: 10, unlockLevel: 12 },
      '120 MW BLUE': { name: '120 MW BLUE', type: 'Right Accessory', pts: 30, unlockLevel: 26 },
      '50 MW GREEN': { name: '50 MW GREEN', type: 'Right Accessory', pts: 20, unlockLevel: 28 },
      'Laser/Light Combo Green': { name: 'Laser/Light Combo Green', type: 'Right Accessory', pts: 20, unlockLevel: 34 },
      '50 MW BLUE': { name: '50 MW BLUE', type: 'Right Accessory', pts: 25, unlockLevel: 37 },

      // Muzzles
      'None-Muzzle': { name: 'None', type: 'Muzzle', pts: 0, unlockLevel: 0 },
      'Single-Port Brake': { name: 'Single-Port Brake', type: 'Muzzle', pts: 5, unlockLevel: 0 },
      'Flash Hider': { name: 'Flash Hider', type: 'Muzzle', pts: 10, unlockLevel: 5 },
      'Linear Comp': { name: 'Linear Comp', type: 'Muzzle', pts: 10, unlockLevel: 9 },
      'Double-Port Brake': { name: 'Double-Port Brake', type: 'Muzzle', pts: 10, unlockLevel: 15 },
      'Compensated Brake': { name: 'Compensated Brake', type: 'Muzzle', pts: 20, unlockLevel: 20 },
      'Standard Suppressor': { name: 'Standard Suppressor', type: 'Muzzle', pts: 20, unlockLevel: 24 },
      'CQB Suppressor': { name: 'CQB Suppressor', type: 'Muzzle', pts: 30, unlockLevel: 27 },
      'Long Suppressor': { name: 'Long Suppressor', type: 'Muzzle', pts: 25, unlockLevel: 32 },
      'Lightened Suppressor': { name: 'Lightened Suppressor', type: 'Muzzle', pts: 30, unlockLevel: 40 },

      // Barrels
      '415MM FACTORY': { name: '415MM FACTORY', type: 'Barrel', pts: 10, unlockLevel: 1 },
      '415MM PROTOTYPE': { name: '415MM PROTOTYPE', type: 'Barrel', pts: 10, unlockLevel: 7 },
      '415MM FLUTED': { name: '415MM FLUTED', type: 'Barrel', pts: 20, unlockLevel: 29 },

      // Underbarrels
      'None-Underbarrel': { name: 'None', type: 'Underbarrel', pts: 0, unlockLevel: 0 },
      'FOLDING VERTICAL': { name: 'FOLDING VERTICAL', type: 'Underbarrel', pts: 10, unlockLevel: 0 },
      'ALLOY VERTICAL': { name: 'ALLOY VERTICAL', type: 'Underbarrel', pts: 20, unlockLevel: 3 },
      'RIBBED VERTICAL': { name: 'RIBBED VERTICAL', type: 'Underbarrel', pts: 20, unlockLevel: 6 },
      '6H64 VERTICAL': { name: '6H64 VERTICAL', type: 'Underbarrel', pts: 20, unlockLevel: 8 },
      'FOLDING STUBBY': { name: 'FOLDING STUBBY', type: 'Underbarrel', pts: 25, unlockLevel: 11 },
      'RIBBED STUBBY': { name: 'RIBBED STUBBY', type: 'Underbarrel', pts: 30, unlockLevel: 13 },
      'CLASSIC VERTICAL': { name: 'CLASSIC VERTICAL', type: 'Underbarrel', pts: 35, unlockLevel: 16 },
      'CANTED STUBBY': { name: 'CANTED STUBBY', type: 'Underbarrel', pts: 30, unlockLevel: 17 },
      'STIPPLED STUBBY': { name: 'STIPPLED STUBBY', type: 'Underbarrel', pts: 35, unlockLevel: 19 },
      'SLIM ANGLED': { name: 'SLIM ANGLED', type: 'Underbarrel', pts: 25, unlockLevel: 23 },
      'FULL ANGLED': { name: 'FULL ANGLED', type: 'Underbarrel', pts: 25, unlockLevel: 26 },
      'PTT GRIP POD': { name: 'PTT GRIP POD', type: 'Underbarrel', pts: 20, unlockLevel: 30 },
      'BIPOD': { name: 'BIPOD', type: 'Underbarrel', pts: 10, unlockLevel: 32 },
      'QD GRIP POD': { name: 'QD GRIP POD', type: 'Underbarrel', pts: 30, unlockLevel: 33 },
      'CLASSIC GRIP POD': { name: 'CLASSIC GRIP POD', type: 'Underbarrel', pts: 30, unlockLevel: 35 },
      'LOW-PROFILE STUBBY': { name: 'LOW-PROFILE STUBBY', type: 'Underbarrel', pts: 45, unlockLevel: 39 },

      // Magazines
      '30RND MAGAZINE': { name: '30RND MAGAZINE', type: 'Magazine', pts: 5, unlockLevel: 1 },
      '30RND FAST MAG': { name: '30RND FAST MAG', type: 'Magazine', pts: 10, unlockLevel: 4 },
      '36RND MAGAZINE': { name: '36RND MAGAZINE', type: 'Magazine', pts: 15, unlockLevel: 13 },
      '40RND MAGAZINE': { name: '40RND MAGAZINE', type: 'Magazine', pts: 25, unlockLevel: 21 },
      '45RND MAGAZINE': { name: '45RND MAGAZINE', type: 'Magazine', pts: 35, unlockLevel: 30 },
      '40RND FAST MAG': { name: '40RND FAST MAG', type: 'Magazine', pts: 30, unlockLevel: 36 },
      '45RND FAST MAG': { name: '45RND FAST MAG', type: 'Magazine', pts: 40, unlockLevel: 40 },

      // Ergonomics
      'None-Ergonomics': { name: 'None', type: 'Ergonomics', pts: 0, unlockLevel: 0 },
      'MATCH TRIGGER': { name: 'MATCH TRIGGER', type: 'Ergonomics', pts: 15, unlockLevel: 18 },

      // Ammunition
      'FMJ': { name: 'FMJ', type: 'Ammunition', pts: 5, unlockLevel: 0 },
      'FRANGIBLE': { name: 'FRANGIBLE', type: 'Ammunition', pts: 20, unlockLevel: 14 },
      'TUNGSTEN CORE': { name: 'TUNGSTEN CORE', type: 'Ammunition', pts: 5, unlockLevel: 17 },
      'HOLLOW POINT': { name: 'HOLLOW POINT', type: 'Ammunition', pts: 20, unlockLevel: 25 },
      'POLYMER CASE': { name: 'POLYMER CASE', type: 'Ammunition', pts: 10, unlockLevel: 38 }
    }
  };
  target['SOR-556 MK2'] = {
    attachments: {
      // Scopes
      'Iron Sights': { name: 'Iron Sights', type: 'Scope', pts: 5, unlockLevel: 0 },
      'PVQ-31 4.00x': { name: 'PVQ-31 4.00x', type: 'Scope', pts: 10, unlockLevel: 0 },
      '3VZR 1.75x': { name: '3VZR 1.75x', type: 'Scope', pts: 10, unlockLevel: 1 },
      '2PRO 1.25x': { name: '2PRO 1.25x', type: 'Scope', pts: 10, unlockLevel: 4 },
      'OSA-7 1.00x': { name: 'OSA-7 1.00x', type: 'Scope', pts: 10, unlockLevel: 6 },
      'R4T 2.00x': { name: 'R4T 2.00x', type: 'Scope', pts: 10, unlockLevel: 7 },
      'Mini Flex 1.00x': { name: 'Mini Flex 1.00x', type: 'Scope', pts: 10, unlockLevel: 9 },
      'SU-231 1.50x': { name: 'SU-231 1.50x', type: 'Scope', pts: 10, unlockLevel: 13 },
      'R-MR 1.00x': { name: 'R-MR 1.00x', type: 'Scope', pts: 10, unlockLevel: 14 },
      'CCO 2.00x': { name: 'CCO 2.00x', type: 'Scope', pts: 10, unlockLevel: 14 },
      'Baker 3.00x': { name: 'Baker 3.00x', type: 'Scope', pts: 10, unlockLevel: 15 },
      'SDO 3.50x': { name: 'SDO 3.50x', type: 'Scope', pts: 10, unlockLevel: 16 },
      'CQ RDS 1.25x': { name: 'CQ RDS 1.25x', type: 'Scope', pts: 10, unlockLevel: 17 },
      '1P87 1.50x': { name: '1P87 1.50x', type: 'Scope', pts: 10, unlockLevel: 18 },
      'RO-M 1.75x': { name: 'RO-M 1.75x', type: 'Scope', pts: 10, unlockLevel: 19 },
      'ST Prism 5.00x': { name: 'ST Prism 5.00x', type: 'Scope', pts: 10, unlockLevel: 21 },
      'DVO LPVO': { name: 'DVO LPVO', type: 'Scope', pts: 25, unlockLevel: 22 },
      'BF-2M 2.50x': { name: 'BF-2M 2.50x', type: 'Scope', pts: 10, unlockLevel: 23 },
      'RO-S 1.25x': { name: 'RO-S 1.25x', type: 'Scope', pts: 10, unlockLevel: 24 },
      'NGFC LPVO': { name: 'NGFC LPVO', type: 'Scope', pts: 25, unlockLevel: 26 },
      'LDS 4.50x': { name: 'LDS 4.50x', type: 'Scope', pts: 10, unlockLevel: 27 },
      'ROX 1.50x': { name: 'ROX 1.50x', type: 'Scope', pts: 10, unlockLevel: 29 },
      'MC-CO LPVO': { name: 'MC-CO LPVO', type: 'Scope', pts: 25, unlockLevel: 31 },
      'Grim 1.50x': { name: 'Grim 1.50x', type: 'Scope', pts: 25, unlockLevel: 35 },
      'A-P2 1.75x': { name: 'A-P2 1.75x', type: 'Scope', pts: 10, unlockLevel: 36 },
      'SF-G2 5.00x': { name: 'SF-G2 5.00x', type: 'Scope', pts: 10, unlockLevel: 37 },
      'PAS-35 3.00x': { name: 'PAS-35 3.00x', type: 'Scope', pts: 25, unlockLevel: 40 },

      // Optic Accessories
      'None-Optic Accessory': { name: 'None', type: 'Optic Accessory', pts: 0, unlockLevel: 0 },
      'Canted Iron Sights': { name: 'Canted Iron Sights', type: 'Optic Accessory', pts: 5, unlockLevel: 13 },
      'Canted Reflex': { name: 'Canted Reflex', type: 'Optic Accessory', pts: 10, unlockLevel: 21 },

      // Top Accessories
      'None-Top Accessory': { name: 'None', type: 'Top Accessory', pts: 0, unlockLevel: 0 },
      '5 MW Red': { name: '5 MW Red', type: 'Top Accessory', pts: 10, unlockLevel: 4 },
      '5 MW Green': { name: '5 MW Green', type: 'Top Accessory', pts: 10, unlockLevel: 8 },
      '50 MW Green': { name: '50 MW Green', type: 'Top Accessory', pts: 20, unlockLevel: 32 },
      '50 MW Blue': { name: '50 MW Blue', type: 'Top Accessory', pts: 20, unlockLevel: 34 },
      '120 MW Blue': { name: '120 MW Blue', type: 'Top Accessory', pts: 30, unlockLevel: 36 },
      // Right Accessories
      'None-Right Accessory': { name: 'None', type: 'Right Accessory', pts: 0, unlockLevel: 0 },
      'Flashlight': { name: 'Flashlight', type: 'Right Accessory', pts: 10, unlockLevel: 2 },

      // Muzzles
      'None-Muzzle': { name: 'None', type: 'Muzzle', pts: 0, unlockLevel: 0 },
      'Single-Port Brake': { name: 'Single-Port Brake', type: 'Muzzle', pts: 5, unlockLevel: 0 },
      'Flash Hider': { name: 'Flash Hider', type: 'Muzzle', pts: 10, unlockLevel: 0 },
      'Linear Comp': { name: 'Linear Comp', type: 'Muzzle', pts: 10, unlockLevel: 5 },
      'Double-Port Brake': { name: 'Double-Port Brake', type: 'Muzzle', pts: 10, unlockLevel: 9 },
      'Compensated Brake': { name: 'Compensated Brake', type: 'Muzzle', pts: 20, unlockLevel: 15 },
      'Standard Suppressor': { name: 'Standard Suppressor', type: 'Muzzle', pts: 20, unlockLevel: 20 },
      'CQB Suppressor': { name: 'CQB Suppressor', type: 'Muzzle', pts: 30, unlockLevel: 24 },
      'Long Suppressor': { name: 'Long Suppressor', type: 'Muzzle', pts: 25, unlockLevel: 27 },
      'Lightened Suppressor': { name: 'Lightened Suppressor', type: 'Muzzle', pts: 30, unlockLevel: 32 },
      // Barrels
      '14.5" Factory': { name: '14.5" Factory', type: 'Barrel', pts: 15, unlockLevel: 0 },
      '16" US': { name: '16" US', type: 'Barrel', pts: 10, unlockLevel: 3 },
      '18" US-LB': { name: '18" US-LB', type: 'Barrel', pts: 15, unlockLevel: 9 },
      '18" Custom': { name: '18" Custom', type: 'Barrel', pts: 10, unlockLevel: 28 },
      
      // Underbarrels
      'None-Underbarrel': { name: 'None', type: 'Underbarrel', pts: 0, unlockLevel: 0 },
      'Underslung Mount': { name: 'Underslung Mount', type: 'Underbarrel', pts: 10, unlockLevel: 0 },
      'Folding Vertical': { name: 'Folding Vertical', type: 'Underbarrel', pts: 10, unlockLevel: 1 },
      'Alloy Vertical': { name: 'Alloy Vertical', type: 'Underbarrel', pts: 20, unlockLevel: 2 },
      'Ribbed Vertical': { name: 'Ribbed Vertical', type: 'Underbarrel', pts: 20, unlockLevel: 5 },
      '6H64 Vertical': { name: '6H64 Vertical', type: 'Underbarrel', pts: 25, unlockLevel: 8 },
      'Folding Stubby': { name: 'Folding Stubby', type: 'Underbarrel', pts: 20, unlockLevel: 11 },
      'Ribbed Stubby': { name: 'Ribbed Stubby', type: 'Underbarrel', pts: 30, unlockLevel: 12 },
      'Canted Stubby': { name: 'Canted Stubby', type: 'Underbarrel', pts: 30, unlockLevel: 17 },
      'Stippled Stubby': { name: 'Stippled Stubby', type: 'Underbarrel', pts: 35, unlockLevel: 23 },
      'PTT Grip Pod': { name: 'PTT Grip Pod', type: 'Underbarrel', pts: 20, unlockLevel: 25 },
      'QD Grip Pod': { name: 'QD Grip Pod', type: 'Underbarrel', pts: 30, unlockLevel: 27 },
      'Adjustable Angled': { name: 'Adjustable Angled', type: 'Underbarrel', pts: 15, unlockLevel: 29 },
      'Full Angled': { name: 'Full Angled', type: 'Underbarrel', pts: 25, unlockLevel: 30 },
      'Bipod': { name: 'Bipod', type: 'Underbarrel', pts: 10, unlockLevel: 32 },
      'Classic Vertical': { name: 'Classic Vertical', type: 'Underbarrel', pts: 35, unlockLevel: 33 },
      'Low-Profile Stubby': { name: 'Low-Profile Stubby', type: 'Underbarrel', pts: 45, unlockLevel: 37 },
      'Slim Angled': { name: 'Slim Angled', type: 'Underbarrel', pts: 25, unlockLevel: 38 },
      'Classic Grip Pod': { name: 'Classic Grip Pod', type: 'Underbarrel', pts: 30, unlockLevel: 40 },

      // Magazines
      '30RND Magazine': { name: '30RND Magazine', type: 'Magazine', pts: 5, unlockLevel: 0 },
      '40RND Magazine': { name: '40RND Magazine', type: 'Magazine', pts: 25, unlockLevel: 5 },
      '36RND Magazine': { name: '36RND Magazine', type: 'Magazine', pts: 15, unlockLevel: 12 },
      '20RND Fast Mag': { name: '20RND Fast Mag', type: 'Magazine', pts: 5, unlockLevel: 18 },
      '20RND Magazine': { name: '20RND Magazine', type: 'Magazine', pts: 5, unlockLevel: 20 },
      '30RND Fast Mag': { name: '30RND Fast Mag', type: 'Magazine', pts: 10, unlockLevel: 24 },
      '40RND Fast Mag': { name: '40RND Fast Mag', type: 'Magazine', pts: 30, unlockLevel: 26 },
      '45RND Fast Mag': { name: '45RND Fast Mag', type: 'Magazine', pts: 40, unlockLevel: 33 },
      '45RND Magazine': { name: '45RND Magazine', type: 'Magazine', pts: 35, unlockLevel: 39 },

      // Ergonomics
      'None-Ergonomics': { name: 'None', type: 'Ergonomics', pts: 0, unlockLevel: 0 },
      'Magwell Flare': { name: 'Magwell Flare', type: 'Ergonomics', pts: 10, unlockLevel: 10 },
      'Match Trigger': { name: 'Match Trigger', type: 'Ergonomics', pts: 15, unlockLevel: 11 },
      'Rail Cover': { name: 'Rail Cover', type: 'Ergonomics', pts: 5, unlockLevel: 'Season 1 Hardware 2 assignment' },

      // Ammunition
      'FMJ': { name: 'FMJ', type: 'Ammunition', pts: 5, unlockLevel: 0 },
      'Hollow Point': { name: 'Hollow Point', type: 'Ammunition', pts: 20, unlockLevel: 10 },
      'Tungsten Core': { name: 'Tungsten Core', type: 'Ammunition', pts: 5, unlockLevel: 19 },
      'Synthetic Tip': { name: 'Synthetic Tip', type: 'Ammunition', pts: 30, unlockLevel: 25 },
      'Polymer Case': { name: 'Polymer Case', type: 'Ammunition', pts: 10, unlockLevel: 30 },
      'Frangible': { name: 'Frangible', type: 'Ammunition', pts: 20, unlockLevel: 39 },
    }
  };
  target['B36A4'] = {
    attachments: {
      // Scopes
      'Iron Sights': { name: 'Iron Sights', type: 'Scope', pts: 5, unlockLevel: 0 },
      'CCO 2.00x': { name: 'CCO 2.00x', type: 'Scope', pts: 10, unlockLevel: 0 },
      '2PRO 1.25x': { name: '2PRO 1.25x', type: 'Scope', pts: 10, unlockLevel: 1 },
      'Mini Flex 1.00x': { name: 'Mini Flex 1.00x', type: 'Scope', pts: 10, unlockLevel: 2 },
      'OSA-7 1.00x': { name: 'OSA-7 1.00x', type: 'Scope', pts: 10, unlockLevel: 3 },
      'SU-231 1.50x': { name: 'SU-231 1.50x', type: 'Scope', pts: 10, unlockLevel: 6 },
      'R-MR 1.00x': { name: 'R-MR 1.00x', type: 'Scope', pts: 10, unlockLevel: 7 },
      '3VZR 1.75x': { name: '3VZR 1.75x', type: 'Scope', pts: 10, unlockLevel: 7 },
      '1P87 1.50x': { name: '1P87 1.50x', type: 'Scope', pts: 10, unlockLevel: 10 },
      'R4T 2.00x': { name: 'R4T 2.00x', type: 'Scope', pts: 10, unlockLevel: 11 },
      'SDO 3.50x': { name: 'SDO 3.50x', type: 'Scope', pts: 10, unlockLevel: 12 },
      'CQ RDS 1.25x': { name: 'CQ RDS 1.25x', type: 'Scope', pts: 10, unlockLevel: 14 },
      'RO-M 1.75x': { name: 'RO-M 1.75x', type: 'Scope', pts: 10, unlockLevel: 16 },
      'Baker 3.00x': { name: 'Baker 3.00x', type: 'Scope', pts: 10, unlockLevel: 17 },
      'Mars-F LPVO': { name: 'Mars-F LPVO', type: 'Scope', pts: 25, unlockLevel: 18 },
      'ST Prisim 5.00x': { name: 'ST Prisim 5.00x', type: 'Scope', pts: 10, unlockLevel: 20 },
      'BF-2M 2.50x': { name: 'BF-2M 2.50x', type: 'Scope', pts: 10, unlockLevel: 22 },
      'RO-S 1.25x': { name: 'RO-S 1.25x', type: 'Scope', pts: 10, unlockLevel: 25 },
      'PVQ-31 4.00x': { name: 'PVQ-31 4.00x', type: 'Scope', pts: 10, unlockLevel: 27 },
      'ROX 1.50x': { name: 'ROX 1.50x', type: 'Scope', pts: 10, unlockLevel: 29 },
      'PAS-35 3.00x': { name: 'PAS-35 3.00x', type: 'Scope', pts: 25, unlockLevel: 30 },
      'LDS 4.50x': { name: 'LDS 4.50x', type: 'Scope', pts: 10, unlockLevel: 32 },
      'SF-G2 5.00x': { name: 'SF-G2 5.00x', type: 'Scope', pts: 10, unlockLevel: 33 },
      'DVO LPVO': { name: 'DVO LPVO', type: 'Scope', pts: 25, unlockLevel: 34 },
      'A-P2 1.75x': { name: 'A-P2 1.75x', type: 'Scope', pts: 10, unlockLevel: 35 },
      'Grim 1.50x': { name: 'Grim 1.50x', type: 'Scope', pts: 25, unlockLevel: 37 },
      'MC-CO LPVO': { name: 'MC-CO LPVO', type: 'Scope', pts: 25, unlockLevel: 39 },
      'SU-230 LPVO': { name: 'SU-230 LPVO', type: 'Scope', pts: 20, unlockLevel: 'Season 1 Hardware 1 Assignment' },
      
      // Optic Accessories
      'None-Optic Accessory': { name: 'None', type: 'Optic Accessory', pts: 0, unlockLevel: 0 },
      'Canted Iron Sights': { name: 'Canted Iron Sights', type: 'Optic Accessory', pts: 5, unlockLevel: 0 },
      'Canted Reflex': { name: 'Canted Reflex', type: 'Optic Accessory', pts: 10, unlockLevel: 24 },
      'Piggyback Reflex': { name: 'Piggyback Reflex', type: 'Optic Accessory', pts: 10, unlockLevel: 38 },

      // Top Accessories
      'None-Top Accessory': { name: 'None', type: 'Top Accessory', pts: 0, unlockLevel: 0 },
      '5 MW Red': { name: '5 MW Red', type: 'Top Accessory', pts: 10, unlockLevel: 15 },
      '5 MW Green': { name: '5 MW Green', type: 'Top Accessory', pts: 10, unlockLevel: 17 },
      '50 MW Green': { name: '50 MW Green', type: 'Top Accessory', pts: 20, unlockLevel: 22 },
      '50 MW Blue': { name: '50 MW Blue', type: 'Top Accessory', pts: 20, unlockLevel: 33 },
      '120 MW Blue': { name: '120 MW Blue', type: 'Top Accessory', pts: 30, unlockLevel: 33 },
      
      // Right Accessories
      'None-Right Accessory': { name: 'None', type: 'Right Accessory', pts: 0, unlockLevel: 0 },
      'Flashlight': { name: 'Flashlight', type: 'Right Accessory', pts: 10, unlockLevel: 3 },

      // Muzzles
      'None-Muzzle': { name: 'None', type: 'Muzzle', pts: 0, unlockLevel: 0 },
      'Flash Hider': { name: 'Flash Hider', type: 'Muzzle', pts: 10, unlockLevel: 0 },
      'Linear Comp': { name: 'Linear Comp', type: 'Muzzle', pts: 10, unlockLevel: 4 },
      'Double-Port Brake': { name: 'Double-Port Brake', type: 'Muzzle', pts: 10, unlockLevel: 9 },
      'Standard Suppressor': { name: 'Standard Suppressor', type: 'Muzzle', pts: 20, unlockLevel: 13 },
      'Compensated Brake': { name: 'Compensated Brake', type: 'Muzzle', pts: 20, unlockLevel: 15 },
      'Long Suppressor': { name: 'Long Suppressor', type: 'Muzzle', pts: 25, unlockLevel: 28 },
      'Lightened Suppressor': { name: 'Lightened Suppressor', type: 'Muzzle', pts: 30, unlockLevel: 35 },
      'CQB Suppressor': { name: 'CQB Suppressor', type: 'Muzzle', pts: 30, unlockLevel: 40 },

      // Barrels
      '480mm Factory': { name: '480mm Factory', type: 'Barrel', pts: 10, unlockLevel: 0 },
      '510mm Fluted': { name: '510mm Fluted', type: 'Barrel', pts: 15, unlockLevel: 5 },
      '480mm MG': { name: '480mm MG', type: 'Barrel', pts: 20, unlockLevel: 14 },
      '480mm Fluted': { name: '480mm Fluted', type: 'Barrel', pts: 20, unlockLevel: 21 },
      '510mm DMR': { name: '510mm DMR', type: 'Barrel', pts: 10, unlockLevel: 26 },
      '391mm CQB': { name: '391mm CQB', type: 'Barrel', pts: 15, unlockLevel: 36 },

      // Underbarrels
      'None-Underbarrel': { name: 'None', type: 'Underbarrel', pts: 0, unlockLevel: 0 },
      'Underslung Mount': { name: 'Underslung Mount', type: 'Underbarrel', pts: 10, unlockLevel: 0 },
      'Folding Vertical': { name: 'Folding Vertical', type: 'Underbarrel', pts: 10, unlockLevel: 1 },
      'Alloy Vertical': { name: 'Alloy Vertical', type: 'Underbarrel', pts: 20, unlockLevel: 2 },
      'Ribbed Vertical': { name: 'Ribbed Vertical', type: 'Underbarrel', pts: 20, unlockLevel: 4 },
      '6H64 Vertical': { name: '6H64 Vertical', type: 'Underbarrel', pts: 25, unlockLevel: 8 },
      'Classic Vertical': { name: 'Classic Vertical', type: 'Underbarrel', pts: 35, unlockLevel: 13 },
      'Folding Stubby': { name: 'Folding Stubby', type: 'Underbarrel', pts: 20, unlockLevel: 18 },
      'Ribbed Stubby': { name: 'Ribbed Stubby', type: 'Underbarrel', pts: 30, unlockLevel: 19 },
      'Canted Stubby': { name: 'Canted Stubby', type: 'Underbarrel', pts: 30, unlockLevel: 21 },
      'Stippled Stubby': { name: 'Stippled Stubby', type: 'Underbarrel', pts: 35, unlockLevel: 23 },
      'Low-Profile Stubby': { name: 'Low-Profile Stubby', type: 'Underbarrel', pts: 45, unlockLevel: 24 },
      'Adjustable Angled': { name: 'Adjustable Angled', type: 'Underbarrel', pts: 15, unlockLevel: 25 },
      'Slim Angled': { name: 'Slim Angled', type: 'Underbarrel', pts: 25, unlockLevel: 29 },
      'Full Angled': { name: 'Full Angled', type: 'Underbarrel', pts: 25, unlockLevel: 31 },
      'Bipod': { name: 'Bipod', type: 'Underbarrel', pts: 10, unlockLevel: 32 },
      'Classic Grip Pod': { name: 'Classic Grip Pod', type: 'Underbarrel', pts: 30, unlockLevel: 34 },
      'PTT Grip Pod': { name: 'PTT Grip Pod', type: 'Underbarrel', pts: 20, unlockLevel: 36 },
      'QD Grip Pod': { name: 'QD Grip Pod', type: 'Underbarrel', pts: 30, unlockLevel: 38 },
      // Magazines
      '30RND Magazine': { name: '30RND Magazine', type: 'Magazine', pts: 5, unlockLevel: 0 },
      '30RND Fast Mag': { name: '30RND Fast Mag', type: 'Magazine', pts: 10, unlockLevel: 5 },
      '20RND Fast Mag': { name: '20RND Fast Mag', type: 'Magazine', pts: 5, unlockLevel: 8 },
      '20RND Magazine': { name: '20RND Magazine', type: 'Magazine', pts: 5, unlockLevel: 9 },
      '40RND Magazine': { name: '40RND Magazine', type: 'Magazine', pts: 25, unlockLevel: 12 },
      '45RND Magazine': { name: '45RND Magazine', type: 'Magazine', pts: 35, unlockLevel: 16 },
      '36RND Magazine': { name: '36RND Magazine', type: 'Magazine', pts: 15, unlockLevel: 18 },
      '40RND Fast Mag': { name: '40RND Fast Mag', type: 'Magazine', pts: 30, unlockLevel: 27 },
      '45RND Fast Mag': { name: '45RND Fast Mag', type: 'Magazine', pts: 40, unlockLevel: 40 },

      // Ergonomics
      'None-Ergonomics': { name: 'None', type: 'Ergonomics', pts: 0, unlockLevel: 0 },
      'Match Trigger': { name: 'Match Trigger', type: 'Ergonomics', pts: 15, unlockLevel: 28 },

      // Ammunition
      'FMJ': { name: 'FMJ', type: 'Ammunition', pts: 5, unlockLevel: 0 },
      'Tungsten Core': { name: 'Tungsten Core', type: 'Ammunition', pts: 5, unlockLevel: 11 },
      'Hollow Point': { name: 'Hollow Point', type: 'Ammunition', pts: 20, unlockLevel: 20 },
      'Frangible': { name: 'Frangible', type: 'Ammunition', pts: 20, unlockLevel: 26 },
      'Synthetic Tip': { name: 'Synthetic Tip', type: 'Ammunition', pts: 30, unlockLevel: 31 },
      'Polymer Case': { name: 'Polymer Case', type: 'Ammunition', pts: 10, unlockLevel: 37 },
    }
  };
  target['L85A3'] = {
  attachments: {
    // Scopes
    'Iron Sights':           { name: 'Iron Sights',           type: 'Scope',              pts: 5,  unlockLevel: 0 },
    'SDO 3.50x':             { name: 'SDO 3.50x',             type: 'Scope',              pts: 10, unlockLevel: 0 },
    '1P87 1.50x':            { name: '1P87 1.50x',            type: 'Scope',              pts: 10, unlockLevel: 1 },
    'Mini Flex 1.00x':       { name: 'Mini Flex 1.00x',       type: 'Scope',              pts: 10, unlockLevel: 2 },
    'R-MR 1.00x':            { name: 'R-MR 1.00x',            type: 'Scope',              pts: 10, unlockLevel: 3 },
    'OSA-7 1.00x':           { name: 'OSA-7 1.00x',           type: 'Scope',              pts: 10, unlockLevel: 4 },
    '2PRO 1.25x':            { name: '2PRO 1.25x',            type: 'Scope',              pts: 10, unlockLevel: 6 },
    'CQ RDS 1.25x':          { name: 'CQ RDS 1.25x',          type: 'Scope',              pts: 10, unlockLevel: 7 },
    'SU-231 1.50x':          { name: 'SU-231 1.50x',          type: 'Scope',              pts: 10, unlockLevel: 8 },
    'RO-S 1.25x':            { name: 'RO-S 1.25x',            type: 'Scope',              pts: 10, unlockLevel: 13 },
    '3VZR 1.75x':            { name: '3VZR 1.75x',           type: 'Scope',              pts: 10, unlockLevel: 14 },
    'Baker 3.00x':           { name: 'Baker 3.00x',           type: 'Scope',              pts: 10, unlockLevel: 15 },
    'RO-M 1.75x':            { name: 'RO-M 1.75x',            type: 'Scope',              pts: 10, unlockLevel: 18 },
    'BF-2M 2.50x':           { name: 'BF-2M 2.50x',           type: 'Scope',              pts: 10, unlockLevel: 19 },
    'R4T 2.00x':             { name: 'R4T 2.00x',             type: 'Scope',              pts: 10, unlockLevel: 20 },
    'PVQ-31 4.00x':          { name: 'PVQ-31 4.00x',          type: 'Scope',              pts: 10, unlockLevel: 22 },
    'ST Prism 5.00x':        { name: 'ST Prism 5.00x',        type: 'Scope',              pts: 10, unlockLevel: 23 },
    'CCO 2.00x':             { name: 'CCO 2.00x',             type: 'Scope',              pts: 10, unlockLevel: 26 },
    'LDS 4.50x':             { name: 'LDS 4.50x',             type: 'Scope',              pts: 10, unlockLevel: 28 },
    'ROX 1.50x':             { name: 'ROX 1.50x',             type: 'Scope',              pts: 10, unlockLevel: 29 },
    'Grim 1.50x':            { name: 'Grim 1.50x',            type: 'Scope',              pts: 25, unlockLevel: 31 },
    'A-P2 1.75x':            { name: 'A-P2 1.75x',            type: 'Scope',              pts: 10, unlockLevel: 34 },
    'MC-CO LPVO':            { name: 'MC-CO LPVO',            type: 'Scope',              pts: 25, unlockLevel: 35 },
    'PAS-35 3.00x':          { name: 'PAS-35 3.00x',          type: 'Scope',              pts: 25, unlockLevel: 36 },
    'DVO LPVO':              { name: 'DVO LPVO',              type: 'Scope',              pts: 25, unlockLevel: 37 },
    'SF-G2 5.00x':           { name: 'SF-G2 5.00x',           type: 'Scope',              pts: 10, unlockLevel: 38 },
    'Mars-F LPVO':           { name: 'Mars-F LPVO',           type: 'Scope',              pts: 25, unlockLevel: 39 },
    'SU-230 LPVO':           { name: 'SU-230 LPVO',           type: 'Scope',              pts: 20, unlockLevel: 'Season 1 Hardware 1' },

    // Optic Accessories
    'None-Optic Accessory':                   { name: 'None',                   type: 'Optic Accessory',    pts: 0,  unlockLevel: 0 },
    'Piggyback Reflex':       { name: 'Piggyback Reflex',       type: 'Optic Accessory',    pts: 10, unlockLevel: 15 },
    'Canted Iron Sights':     { name: 'Canted Iron Sights',     type: 'Optic Accessory',    pts: 5,  unlockLevel: 20 },
    'Canted Reflex':          { name: 'Canted Reflex',          type: 'Optic Accessory',    pts: 10, unlockLevel: 23 },

    // Top Accessories
    'None-Top Accessory':                   { name: 'None',                   type: 'Top Accessory',       pts: 0,  unlockLevel: 0 },
    '5 MW Red':               { name: '5 MW Red',               type: 'Top Accessory',       pts: 10, unlockLevel: 8 },
    '5 MW Green':             { name: '5 MW Green',             type: 'Top Accessory',       pts: 10, unlockLevel: 27 },
    '50 MW Green':            { name: '50 MW Green',            type: 'Top Accessory',       pts: 20, unlockLevel: 33 },
    '50 MW Blue':             { name: '50 MW Blue',             type: 'Top Accessory',       pts: 20, unlockLevel: 36 },
    '120 MW Blue':            { name: '120 MW Blue',            type: 'Top Accessory',       pts: 30, unlockLevel: 38 },

    // Right Accessories
    'None-Right Accessory':                   { name: 'None',                   type: 'Right Accessory',     pts: 0,  unlockLevel: 0 },
    'Flashlight':             { name: 'Flashlight',             type: 'Right Accessory',     pts: 10, unlockLevel: 4 },

    // Muzzles
    'None-Muzzle':                   { name: 'None',                   type: 'Muzzle',              pts: 0,  unlockLevel: 0 },
    'Flash Hider':            { name: 'Flash Hider',            type: 'Muzzle',              pts: 10, unlockLevel: 0 },
    'Single-Port Brake':      { name: 'Single-Port Brake',      type: 'Muzzle',              pts: 5,  unlockLevel: 7 },
    'Linear Comp':            { name: 'Linear Comp',            type: 'Muzzle',              pts: 10, unlockLevel: 9 },
    'Double-Port Brake':      { name: 'Double-Port Brake',      type: 'Muzzle',              pts: 10, unlockLevel: 13 },
    'Standard Suppressor':    { name: 'Standard Suppressor',    type: 'Muzzle',              pts: 20, unlockLevel: 16 },
    'CQB Suppressor':         { name: 'CQB Suppressor',         type: 'Muzzle',              pts: 30, unlockLevel: 21 },
    'Long Suppressor':        { name: 'Long Suppressor',        type: 'Muzzle',              pts: 25, unlockLevel: 27 },
    'Lightened Suppressor':   { name: 'Lightened Suppressor',   type: 'Muzzle',              pts: 30, unlockLevel: 32 },
    'Compensated Brake':      { name: 'Compensated Brake',      type: 'Muzzle',              pts: 20, unlockLevel: 33 },

    // Barrels
    '518mm Factory':          { name: '518mm Factory',          type: 'Barrel',              pts: 10, unlockLevel: 0 },
    '646mm Cut':              { name: '646mm Cut',              type: 'Barrel',              pts: 10, unlockLevel: 3 },
    '646mm Fluted':           { name: '646mm Fluted',           type: 'Barrel',              pts: 15, unlockLevel: 10 },
    '442 mm CQB':             { name: '442 mm CQB',             type: 'Barrel',              pts: 15, unlockLevel: 17 },
    '646mm LSW':              { name: '646mm LSW',              type: 'Barrel',              pts: 10, unlockLevel: 30 },
    '518mm Fluted':           { name: '518mm Fluted',           type: 'Barrel',              pts: 20, unlockLevel: 39 },

    // Underbarrels
    'None-Underbarrel':                   { name: 'None',                   type: 'Underbarrel',         pts: 0,  unlockLevel: 0 },
    'Underslung Mount':        { name: 'Underslung Mount',        type: 'Underbarrel',         pts: 10, unlockLevel: 0 },
    'Folding Vertical':        { name: 'Folding Vertical',        type: 'Underbarrel',         pts: 10, unlockLevel: 1 },
    'Alloy Vertical':          { name: 'Alloy Vertical',          type: 'Underbarrel',         pts: 20, unlockLevel: 2 },
    'Ribbed Vertical':         { name: 'Ribbed Vertical',         type: 'Underbarrel',         pts: 20, unlockLevel: 5 },
    '6H64 Vertical':           { name: '6H64 Vertical',           type: 'Underbarrel',         pts: 25, unlockLevel: 12 },
    'Adjustable Angled':       { name: 'Adjustable Angled',       type: 'Underbarrel',         pts: 15, unlockLevel: 16 },
    'Classic Vertical':        { name: 'Classic Vertical',        type: 'Underbarrel',         pts: 35, unlockLevel: 17 },
    'Stippled Stubby':         { name: 'Stippled Stubby',         type: 'Underbarrel',         pts: 35, unlockLevel: 18 },
    'Folding Stubby':          { name: 'Folding Stubby',          type: 'Underbarrel',         pts: 20, unlockLevel: 19 },
    'PTT Grip Pod':            { name: 'PTT Grip Pod',            type: 'Underbarrel',         pts: 20, unlockLevel: 22 },
    'Ribbed Stubby':           { name: 'Ribbed Stubby',           type: 'Underbarrel',         pts: 30, unlockLevel: 24 },
    'Low-Profile Stubby':       { name: 'Low-Profile Stubby',       type: 'Underbarrel',         pts: 45, unlockLevel: 26 },
    'Canted Stubby':            { name: 'Canted Stubby',            type: 'Underbarrel',         pts: 30, unlockLevel: 28 },
    'Slim Angled':              { name: 'Slim Angled',              type: 'Underbarrel',         pts: 25, unlockLevel: 29 },
    'QD Grip Pod':               { name: 'QD Grip Pod',               type: 'Underbarrel',         pts: 30, unlockLevel: 31 },
    'Bipod':                     { name: 'Bipod',                     type: 'Underbarrel',         pts: 10, unlockLevel: 32 },
    'Classic Grip Pod':          { name: 'Classic Grip Pod',          type: 'Underbarrel',         pts: 30, unlockLevel: 35 },
    'Full Angled':               { name: 'Full Angled',               type: 'Underbarrel',         pts: 25, unlockLevel: 40 },

    // Magazines
    '30RND Magazine':         { name: '30RND Magazine',         type: 'Magazine',            pts: 5,  unlockLevel: 0 },
    '20RND Magazine':         { name: '20RND Magazine',         type: 'Magazine',            pts: 5,  unlockLevel: 6 },
    '30RND Fast Mag':         { name: '30RND Fast Mag',         type: 'Magazine',            pts: 10, unlockLevel: 9 },
    '20RND Fast Mag':         { name: '20RND Fast Mag',         type: 'Magazine',            pts: 5,  unlockLevel: 11 },
    '36RND Magazine':         { name: '36RND Magazine',         type: 'Magazine',            pts: 15, unlockLevel: 12 },
    '40RND Magazine':         { name: '40RND Magazine',         type: 'Magazine',            pts: 25, unlockLevel: 21 },
    '40RND Fast Mag':         { name: '40RND Fast Mag',         type: 'Magazine',            pts: 30, unlockLevel: 25 },
    '45RND Magazine':         { name: '45RND Magazine',         type: 'Magazine',            pts: 35, unlockLevel: 34 },
    '45RND Fast Mag':         { name: '45RND Fast Mag',         type: 'Magazine',            pts: 40, unlockLevel: 40 },

    // Ergonomics
    'None-Ergonomics':        { name: 'None',                   type: 'Ergonomics',           pts: 0,  unlockLevel: 0 },
    'Match Trigger':          { name: 'Match Trigger',           type: 'Ergonomics',           pts: 15, unlockLevel: 24 },

    // Ammunition
    'FMJ':                    { name: 'FMJ',                    type: 'Ammunition',          pts: 5,  unlockLevel: 0 },
    'Tungsten Core':           { name: 'Tungsten Core',           type: 'Ammunition',          pts: 5,  unlockLevel: 11 },
    'Hollow Point':            { name: 'Hollow Point',            type: 'Ammunition',          pts: 20, unlockLevel: 14 },
    'Polymer Case':            { name: 'Polymer Case',            type: 'Ammunition',          pts: 10, unlockLevel: 25 },
    'Frangible':                { name: 'Frangible',                type: 'Ammunition',          pts: 20, unlockLevel: 37 },
    'Synthetic Tip':            { name: 'Synthetic Tip',            type: 'Ammunition',          pts: 30, unlockLevel: 30 },
  }
  };
  target['M433'] = {
  attachments: {
    // Scopes
    'Iron Sights':        { name: 'Iron Sights',       type: 'Scope',              pts: 5,  unlockLevel: 0 },
    'SU-231 1.50x':       { name: 'SU-231 1.50x',       type: 'Scope',              pts: 10, unlockLevel: 0 },
    '2PRO 1.25x':         { name: '2PRO 1.25x',         type: 'Scope',              pts: 10, unlockLevel: 1 },
    'OSA-7 1.00x':        { name: 'OSA-7 1.00x',        type: 'Scope',              pts: 10, unlockLevel: 2 },
    '1P87 1.50x':         { name: '1P87 1.50x',         type: 'Scope',              pts: 10, unlockLevel: 3 },
    'R-MR 1.00x':         { name: 'R-MR 1.00x',         type: 'Scope',              pts: 10, unlockLevel: 5 },
    'CCO 2.00x':          { name: 'CCO 2.00x',          type: 'Scope',              pts: 10, unlockLevel: 7 },
    'SDO 3.50x':          { name: 'SDO 3.50x',          type: 'Scope',              pts: 10, unlockLevel: 10 },
    'CQ RDS 1.25x':       { name: 'CQ RDS 1.25x',       type: 'Scope',              pts: 10, unlockLevel: 11 },
    'Mini Flex 1.00x':    { name: 'Mini Flex 1.00x',    type: 'Scope',              pts: 10, unlockLevel: 12 },
    '3VZR 1.75x':         { name: '3VZR 1.75x',         type: 'Scope',              pts: 10, unlockLevel: 12 },
    'Baker 3.00x':        { name: 'Baker 3.00x',        type: 'Scope',              pts: 10, unlockLevel: 13 },
    'R4T 2.00x':          { name: 'R4T 2.00x',          type: 'Scope',              pts: 10, unlockLevel: 15 },
    'DVO LPVO':           { name: 'DVO LPVO',          type: 'Scope',              pts: 25, unlockLevel: 19 },
    'RO-M 1.75x':         { name: 'RO-M 1.75x',         type: 'Scope',              pts: 10, unlockLevel: 21 },
    'ST Prism 5.00x':     { name: 'ST Prism 5.00x',     type: 'Scope',              pts: 10, unlockLevel: 22 },
    'ROX 1.50x':          { name: 'ROX 1.50x',          type: 'Scope',              pts: 10, unlockLevel: 23 },
    'BF-2M 2.50x':        { name: 'BF-2M 2.50x',        type: 'Scope',              pts: 10, unlockLevel: 24 },
    'Mars-F LPVO':        { name: 'Mars-F LPVO',       type: 'Scope',              pts: 25, unlockLevel: 26 },
    'PVQ-31 4.00x':       { name: 'PVQ-31 4.00x',       type: 'Scope',              pts: 10, unlockLevel: 27 },
    'RO-S 1.25x':         { name: 'RO-S 1.25x',         type: 'Scope',              pts: 10, unlockLevel: 29 },
    'MC-CO LPVO':         { name: 'MC-CO LPVO',        type: 'Scope',              pts: 25, unlockLevel: 32 },
    'LDS 4.50x':          { name: 'LDS 4.50x',          type: 'Scope',              pts: 10, unlockLevel: 34 },
    'PAS-35 3.00x':       { name: 'PAS-35 3.00x',       type: 'Scope',              pts: 25, unlockLevel: 36 },
    'A-P2 1.75x':         { name: 'A-P2 1.75x',         type: 'Scope',              pts: 10, unlockLevel: 37 },
    'SF-G2 5.00x':        { name: 'SF-G2 5.00x',        type: 'Scope',              pts: 10, unlockLevel: 38 },
    'Grim 1.50x':         { name: 'Grim 1.50x',         type: 'Scope',              pts: 25, unlockLevel: 40 },
    'SU-230 LPVO':        { name: 'SU-230 LPVO',        type: 'Scope',              pts: 20, unlockLevel: 'Season1Hardware1' },

    // Optic Accessories
    'None-Optic Accessory':  { name: 'None',                  type: 'Optic Accessory',     pts: 0,  unlockLevel: 0 },
    'Piggyback Reflex':      { name: 'Piggyback Reflex',      type: 'Optic Accessory',     pts: 10, unlockLevel: 9 },
    'Canted Iron Sights':    { name: 'Canted Iron Sights',    type: 'Optic Accessory',     pts: 5,  unlockLevel: 15 },
    'Canted Reflex':         { name: 'Canted Reflex',         type: 'Optic Accessory',     pts: 10, unlockLevel: 27 },

    // Top Accessories
    'None-Top Accessory':    { name: 'None',                  type: 'Top Accessory',        pts: 0,  unlockLevel: 0 },
    '5 MW Green':            { name: '5 MW Green',            type: 'Top Accessory',        pts: 10, unlockLevel: 2 },
    '5 MW Red':              { name: '5 MW Red',              type: 'Top Accessory',        pts: 10, unlockLevel: 6 },
    '50 MW Green':           { name: '50 MW Green',           type: 'Top Accessory',        pts: 20, unlockLevel: 17 },
    '50 MW Blue':            { name: '50 MW Blue',            type: 'Top Accessory',        pts: 20, unlockLevel: 33 },
    '120 MW Blue':           { name: '120 MW Blue',           type: 'Top Accessory',        pts: 30, unlockLevel: 37 },

    // Right Accessories
    'None-Right Accessory':  { name: 'None',                  type: 'Right Accessory',      pts: 0,  unlockLevel: 0 },
    'Flashlight':            { name: 'Flashlight',            type: 'Right Accessory',      pts: 10, unlockLevel: 3 },

    // Muzzles
    'None-Muzzle':           { name: 'None',                  type: 'Muzzle',               pts: 0,  unlockLevel: 0 },
    'Flash Hider':           { name: 'Flash Hider',           type: 'Muzzle',               pts: 10, unlockLevel: 0 },
    'Linear Comp':           { name: 'Linear Comp',           type: 'Muzzle',               pts: 10, unlockLevel: 6 },
    'Standard Suppressor':   { name: 'Standard Suppressor',   type: 'Muzzle',               pts: 20, unlockLevel: 8 },
    'CQB Suppressor':        { name: 'CQB Suppressor',        type: 'Muzzle',               pts: 30, unlockLevel: 18 },
    'Double-Port Brake':     { name: 'Double-Port Brake',     type: 'Muzzle',               pts: 10, unlockLevel: 20 },
    'Long Suppressor':       { name: 'Long Suppressor',       type: 'Muzzle',               pts: 25, unlockLevel: 25 },
    'Compensated Brake':     { name: 'Compensated Brake',     type: 'Muzzle',               pts: 20, unlockLevel: 30 },
    'Lightened Suppressor':  { name: 'Lightened Suppressor',  type: 'Muzzle',               pts: 30, unlockLevel: 35 },

    // Barrels
    '14.5" Standard':        { name: '14.5" Standard',        type: 'Barrel',              pts: 15, unlockLevel: 0 },
    '18.9" Prototype':       { name: '18.9" Prototype',       type: 'Barrel',              pts: 15, unlockLevel: 5 },
    '16.5" Rifle':           { name: '16.5" Rifle',           type: 'Barrel',              pts: 10, unlockLevel: 20 },
    '16.5" Fluted':          { name: '16.5" Fluted',          type: 'Barrel',              pts: 20, unlockLevel: 29 },

    // Underbarrels
    'None-Underbarrel':      { name: 'None',                  type: 'Underbarrel',          pts: 0,  unlockLevel: 0 },
    'Classic Vertical':      { name: 'Classic Vertical',      type: 'Underbarrel',          pts: 35, unlockLevel: 0 },
    'Underslung Mount':      { name: 'Underslung Mount',      type: 'Underbarrel',          pts: 10, unlockLevel: 0 },
    'Folding Vertical':      { name: 'Folding Vertical',      type: 'Underbarrel',          pts: 10, unlockLevel: 1 },
    'Alloy Vertical':        { name: 'Alloy Vertical',        type: 'Underbarrel',          pts: 20, unlockLevel: 4 },
    'Ribbed Vertical':       { name: 'Ribbed Vertical',       type: 'Underbarrel',          pts: 20, unlockLevel: 7 },
    '6H64 Vertical':         { name: '6H64 Vertical',         type: 'Underbarrel',          pts: 25, unlockLevel: 9 },
    'Folding Stubby':        { name: 'Folding Stubby',        type: 'Underbarrel',          pts: 20, unlockLevel: 14 },
    'Ribbed Stubby':         { name: 'Ribbed Stubby',         type: 'Underbarrel',          pts: 30, unlockLevel: 16 },
    'Canted Stubby':         { name: 'Canted Stubby',         type: 'Underbarrel',          pts: 30, unlockLevel: 17 },
    'Full Angled':           { name: 'Full Angled',           type: 'Underbarrel',          pts: 25, unlockLevel: 22 },
    'Stippled Stubby':       { name: 'Stippled Stubby',       type: 'Underbarrel',          pts: 35, unlockLevel: 23 },
    'PTT Grip Pod':          { name: 'PTT Grip Pod',          type: 'Underbarrel',          pts: 20, unlockLevel: 26 },
    'Adjustable Angled':     { name: 'Adjustable Angled',     type: 'Underbarrel',          pts: 15, unlockLevel: 28 },
    'Low-Profile Stubby':    { name: 'Low-Profile Stubby',    type: 'Underbarrel',          pts: 45, unlockLevel: 30 },
    'Slim Angled':           { name: 'Slim Angled',           type: 'Underbarrel',          pts: 25, unlockLevel: 33 },
    'QD Grip Pod':           { name: 'QD Grip Pod',           type: 'Underbarrel',          pts: 30, unlockLevel: 35 },
    'Bipod':                 { name: 'Bipod',                 type: 'Underbarrel',          pts: 10, unlockLevel: 32 },
    'Classic Grip Pod':      { name: 'Classic Grip Pod',      type: 'Underbarrel',          pts: 30, unlockLevel: 39 },

    // Magazines
    '30RND Magazine':        { name: '30RND Magazine',        type: 'Magazine',            pts: 5,   unlockLevel: 0 },
    '30RND Fast Mag':        { name: '30RND Fast Mag',        type: 'Magazine',            pts: 10,  unlockLevel: 11 },
    '20RND Fast Mag':        { name: '20RND Fast Mag',        type: 'Magazine',            pts: 5,   unlockLevel: 14 },
    '20RND Magazine':        { name: '20RND Magazine',        type: 'Magazine',            pts: 5,   unlockLevel: 19 },
    '40RND Fast Mag':        { name: '40RND Fast Mag',        type: 'Magazine',            pts: 30,  unlockLevel: 24 },
    '36RND Magazine':        { name: '36RND Magazine',        type: 'Magazine',            pts: 15,  unlockLevel: 31 },
    '40RND Magazine':        { name: '40RND Magazine',        type: 'Magazine',            pts: 25,  unlockLevel: 36 },
    '45RND Magazine':        { name: '45RND Magazine',        type: 'Magazine',            pts: 35,  unlockLevel: 34 },
    '45RND Fast Mag':        { name: '45RND Fast Mag',        type: 'Magazine',            pts: 40,  unlockLevel: 40 },

    // Ergonomics
    'None-Ergonomics':       { name: 'None',                  type: 'Ergonomics',           pts: 0,   unlockLevel: 0 },
    'Magwell Flare':         { name: 'Magwell Flare',         type: 'Ergonomics',           pts: 10,  unlockLevel: 13 },
    'Match Trigger':         { name: 'Match Trigger',         type: 'Ergonomics',           pts: 15,  unlockLevel: 31 },

    // Ammunition
    'FMJ':                   { name: 'FMJ',                   type: 'Ammunition',           pts: 5,   unlockLevel: 0 },
    'Tungsten Core':         { name: 'Tungsten Core',         type: 'Ammunition',           pts: 5,   unlockLevel: 16 },
    'Hollow Point':          { name: 'Hollow Point',          type: 'Ammunition',           pts: 20,  unlockLevel: 25 },
    'Frangible':             { name: 'Frangible',             type: 'Ammunition',           pts: 20,  unlockLevel: 34 },
    'Polymer Case':          { name: 'Polymer Case',          type: 'Ammunition',           pts: 10,  unlockLevel: 39 },
    'Synthetic Tip':         { name: 'Synthetic Tip',         type: 'Ammunition',           pts: 30,  unlockLevel: 30 },
  }
  };
  target['NVO-228E'] = {
  attachments: {
    // Scopes
    'Iron Sights': { name:'Iron Sights', type:'Scope', pts:5, unlockLevel:0 },
    'CCO 2.00x': { name:'CCO 2.00x', type:'Scope', pts:10, unlockLevel:0 },
    'SU-231 1.50x': { name:'SU-231 1.50x', type:'Scope', pts:10, unlockLevel:1 },
    'Mini Flex 1.00x': { name:'Mini Flex 1.00x', type:'Scope', pts:10, unlockLevel:2 },
    '2PRO 1.25x': { name:'2PRO 1.25x', type:'Scope', pts:10, unlockLevel:3 },
    'R-MR 1.00x': { name:'R-MR 1.00x', type:'Scope', pts:10, unlockLevel:4 },
    '1P87 1.50x': { name:'1P87 1.50x', type:'Scope', pts:10, unlockLevel:5 },
    'OSA-7 1.00x': { name:'OSA-7 1.00x', type:'Scope', pts:10, unlockLevel:6 },
    'R4T 2.00x': { name:'R4T 2.00x', type:'Scope', pts:10, unlockLevel:8 },
    'CQ RDS 1.25x': { name:'CQ RDS 1.25x', type:'Scope', pts:10, unlockLevel:9 },
    '3VZR 1.75x': { name:'3VZR 1.75x', type:'Scope', pts:10, unlockLevel:12 },
    'LDS 4.50x': { name:'LDS 4.50x', type:'Scope', pts:10, unlockLevel:13 },
    'RO-S 1.25x': { name:'RO-S 1.25x', type:'Scope', pts:10, unlockLevel:14 },
    'DVO LPVO': { name:'DVO LPVO', type:'Scope', pts:25, unlockLevel:15 },
    'Baker 3.00x': { name:'Baker 3.00x', type:'Scope', pts:10, unlockLevel:17 },
    'ST Prisim 5.00x': { name:'ST Prisim 5.00x', type:'Scope', pts:10, unlockLevel:18 },
    'SDO 3.50x': { name:'SDO 3.50x', type:'Scope', pts:10, unlockLevel:19 },
    'ROX 1.50x': { name:'ROX 1.50x', type:'Scope', pts:10, unlockLevel:23 },
    'PVQ-31 4.00x': { name:'PVQ-31 4.00x', type:'Scope', pts:10, unlockLevel:24 },
    'BF-2M 2.50x': { name:'BF-2M 2.50x', type:'Scope', pts:10, unlockLevel:26 },
    'RO-M 1.75x': { name:'RO-M 1.75x', type:'Scope', pts:10, unlockLevel:27 },
    'Grim 1.50x': { name:'Grim 1.50x', type:'Scope', pts:25, unlockLevel:31 },
    'MC-CO LPVO': { name:'MC-CO LPVO', type:'Scope', pts:25, unlockLevel:32 },
    'SF-G2 5.00x': { name:'SF-G2 5.00x', type:'Scope', pts:10, unlockLevel:33 },
    'A-P2 1.75x': { name:'A-P2 1.75x', type:'Scope', pts:10, unlockLevel:35 },
    'Mars-F LPVO': { name:'Mars-F LPVO', type:'Scope', pts:25, unlockLevel:36 },
    'PAS-35 3.00x': { name:'PAS-35 3.00x', type:'Scope', pts:25, unlockLevel:37 },
    'SU-230 LPVO': { name:'SU-230 LPVO', type:'Scope', pts:20, unlockLevel:'Season 1 Hardware 1' },

    // Optic Accessories
    'None–Optic Accessory': { name:'None', type:'Optic Accessory', pts:0, unlockLevel:0 },
    'Canted Iron Sights': { name:'Canted Iron Sights', type:'Optic Accessory', pts:5, unlockLevel:8 },
    'Canted Reflex': { name:'Canted Reflex', type:'Optic Accessory', pts:10, unlockLevel:17 },

    // Right Accessories
    'None–Right Accessory': { name:'None', type:'Right Accessory', pts:0, unlockLevel:0 },
    '5 MW Red': { name:'5 MW Red', type:'Right Accessory', pts:10, unlockLevel:1 },
    '5 MW Green': { name:'5 MW Green', type:'Right Accessory', pts:10, unlockLevel:6 },
    '50 MW Green': { name:'50 MW Green', type:'Right Accessory', pts:20, unlockLevel:22 },
    '120 MW Blue': { name:'120 MW Blue', type:'Right Accessory', pts:30, unlockLevel:32 },
    '50 MW Blue': { name:'50 MW Blue', type:'Right Accessory', pts:20, unlockLevel:39 },

    // Left Accessories
    'None–Left Accessory': { name:'None', type:'Left Accessory', pts:0, unlockLevel:0 },
    'Flashlight': { name:'Flashlight', type:'Left Accessory', pts:10, unlockLevel:5 },

    // Muzzles
    'None–Muzzle': { name:'None', type:'Muzzle', pts:0, unlockLevel:0 },
    'Flash Hider': { name:'Flash Hider', type:'Muzzle', pts:10, unlockLevel:0 },
    'Single-Port Brake': { name:'Single-Port Brake', type:'Muzzle', pts:5, unlockLevel:4 },
    'Linear Comp': { name:'Linear Comp', type:'Muzzle', pts:10, unlockLevel:7 },
    'Double-Port Brake': { name:'Double-Port Brake', type:'Muzzle', pts:10, unlockLevel:11 },
    'Standard Suppressor': { name:'Standard Suppressor', type:'Muzzle', pts:20, unlockLevel:23 },
    'CQB Suppressor': { name:'CQB Suppressor', type:'Muzzle', pts:30, unlockLevel:28 },
    'Long Suppressor': { name:'Long Suppressor', type:'Muzzle', pts:25, unlockLevel:29 },
    'Lightened Suppressor': { name:'Lightened Suppressor', type:'Muzzle', pts:30, unlockLevel:36 },
    'Compensated Brake': { name:'Compensated Brake', type:'Muzzle', pts:20, unlockLevel:38 },

    // Barrels
    '409mm Factory': { name:'409mm Factory', type:'Barrel', pts:10, unlockLevel:0 },
    '458mm Custom': { name:'458mm Custom', type:'Barrel', pts:15, unlockLevel:10 },
    '409mm Cut': { name:'409mm Cut', type:'Barrel', pts:15, unlockLevel:20 },
    '409mm Fluted': { name:'409mm Fluted', type:'Barrel', pts:20, unlockLevel:30 },

    // Underbarrels
    'None–Underbarrel': { name:'None', type:'Underbarrel', pts:0, unlockLevel:0 },
    'Folding Vertical': { name:'Folding Vertical', type:'Underbarrel', pts:10, unlockLevel:2 },
    'Alloy Vertical': { name:'Alloy Vertical', type:'Underbarrel', pts:20, unlockLevel:9 },
    'Slim Angled': { name:'Slim Angled', type:'Underbarrel', pts:25, unlockLevel:11 },
    'Ribbed Vertical': { name:'Ribbed Vertical', type:'Underbarrel', pts:20, unlockLevel:14 },
    '6H64 Vertical': { name:'6H64 Vertical', type:'Underbarrel', pts:25, unlockLevel:16 },
    'Classic Vertical': { name:'Classic Vertical', type:'Underbarrel', pts:35, unlockLevel:21 },
    'Folding Stubby': { name:'Folding Stubby', type:'Underbarrel', pts:20, unlockLevel:22 },
    'Full Angled': { name:'Full Angled', type:'Underbarrel', pts:25, unlockLevel:24 },
    'Ribbed Stubby': { name:'Ribbed Stubby', type:'Underbarrel', pts:30, unlockLevel:25 },
    'Canted Stubby': { name:'Canted Stubby', type:'Underbarrel', pts:30, unlockLevel:28 },
    'Bipod': { name:'Bipod', type:'Underbarrel', pts:10, unlockLevel:33 },
    'Stippled Stubby': { name:'Stippled Stubby', type:'Underbarrel', pts:35, unlockLevel:34 },
    'Low-Profile Stubby': { name:'Low-Profile Stubby', type:'Underbarrel', pts:45, unlockLevel:34 },
    'PTT Grip Pod': { name:'PTT Grip Pod', type:'Underbarrel', pts:20, unlockLevel:37 },
    'QD Grip Pod': { name:'QD Grip Pod', type:'Underbarrel', pts:30, unlockLevel:38 },
    'Classic Grip Pod': { name:'Classic Grip Pod', type:'Underbarrel', pts:30, unlockLevel:40 },

    // Magazines
    '30RND Magazine': { name:'30RND Magazine', type:'Magazine', pts:5, unlockLevel:0 },
    '30RND Fast Mag': { name:'30RND Fast Mag', type:'Magazine', pts:10, unlockLevel:3 },
    '20RND Fast Mag': { name:'20RND Fast Mag', type:'Magazine', pts:5, unlockLevel:10 },
    '40RND Fast Mag': { name:'40RND Fast Mag', type:'Magazine', pts:30, unlockLevel:18 },
    '36RND Magazine': { name:'36RND Magazine', type:'Magazine', pts:15, unlockLevel:25 },
    '20RND Magazine': { name:'20RND Magazine', type:'Magazine', pts:5, unlockLevel:30 },
    '40RND Magazine': { name:'40RND Magazine', type:'Magazine', pts:25, unlockLevel:40 },

    // Ergonomics
    'None–Ergonomics': { name:'None', type:'Ergonomics', pts:0, unlockLevel:0 },
    'Match Trigger': { name:'Match Trigger', type:'Ergonomics', pts:15, unlockLevel:21 },

    // Ammunition
    'FMJ': { name:'FMJ', type:'Ammunition', pts:5, unlockLevel:0 },
    'Hollow Point': { name:'Hollow Point', type:'Ammunition', pts:20, unlockLevel:15 },
    'Polymer Case': { name:'Polymer Case', type:'Ammunition', pts:10, unlockLevel:20 },
    'Frangible': { name:'Frangible', type:'Ammunition', pts:20, unlockLevel:27 },
    'Tungsten Core': { name:'Tungsten Core', type:'Ammunition', pts:5, unlockLevel:35 },
  }
  };
  target['AK4D'] = {
    attachments: {
      // Scopes
      'Iron Sights': { name:'Iron Sights', type:'Scope', pts:5, unlockLevel:0 },
      'CCO 2.00x': { name:'CCO 2.00x', type:'Scope', pts:10, unlockLevel:0 },
      '2PRO 1.25x': { name:'2PRO 1.25x', type:'Scope', pts:10, unlockLevel:1 },
      'R-MR 1.00x': { name:'R-MR 1.00x', type:'Scope', pts:10, unlockLevel:2 },
      'Mini Flex 1.00x': { name:'Mini Flex 1.00x', type:'Scope', pts:10, unlockLevel:4 },
      'PVQ-31 4.00x': { name:'PVQ-31 4.00x', type:'Scope', pts:10, unlockLevel:5 },
      '3VZR 1.75x': { name:'3VZR 1.75x', type:'Scope', pts:10, unlockLevel:7 },
      'CQ RDS 1.25x': { name:'CQ RDS 1.25x', type:'Scope', pts:10, unlockLevel:8 },
      'SU-231 1.50x': { name:'SU-231 1.50x', type:'Scope', pts:10, unlockLevel:9 },
      'BF-2M 2.50x': { name:'BF-2M 2.50x', type:'Scope', pts:10, unlockLevel:10 },
      'OSA-7 1.00x': { name:'OSA-7 1.00x', type:'Scope', pts:10, unlockLevel:11 },
      'RO-S 1.25x': { name:'RO-S 1.25x', type:'Scope', pts:10, unlockLevel:12 },
      '1P87 1.50x': { name:'1P87 1.50x', type:'Scope', pts:10, unlockLevel:14 },
      'SDO 3.50x': { name:'SDO 3.50x', type:'Scope', pts:10, unlockLevel:16 },
      'RO-M 1.75x': { name:'RO-M 1.75x', type:'Scope', pts:10, unlockLevel:18 },
      'ROX 1.50x': { name:'ROX 1.50x', type:'Scope', pts:10, unlockLevel:19 },
      'ST Prisim 5.00x': { name:'ST Prisim 5.00x', type:'Scope', pts:10, unlockLevel:19 },
      'Mars-F LPVO': { name:'Mars-F LPVO', type:'Scope', pts:25, unlockLevel:21 },
      'R4T 2.00x': { name:'R4T 2.00x', type:'Scope', pts:10, unlockLevel:23 },
      'A-P2 1.75x': { name:'A-P2 1.75x', type:'Scope', pts:10, unlockLevel:24 },
      'Grim 1.50x': { name:'Grim 1.50x', type:'Scope', pts:25, unlockLevel:27 },
      'LDS 4.50x': { name:'LDS 4.50x', type:'Scope', pts:10, unlockLevel:28 },
      'Baker 3.00x': { name:'Baker 3.00x', type:'Scope', pts:10, unlockLevel:31 },
      'SF-G2 5.00x': { name:'SF-G2 5.00x', type:'Scope', pts:10, unlockLevel:33 },
      'DVO LPVO': { name:'DVO LPVO', type:'Scope', pts:25, unlockLevel:36 },
      'MC-CO LPVO': { name:'MC-CO LPVO', type:'Scope', pts:25, unlockLevel:37 },
      'PAS-35 3.00x': { name:'PAS-35 3.00x', type:'Scope', pts:25, unlockLevel:40 },
      'SU-230 LPVO': { name:'SU-230 LPVO', type:'Scope', pts:20, unlockLevel:'Season1Hardware1' },

      // Optic Accessories
      'None–Optic Accessory': { name:'None', type:'Optic Accessory', pts:0, unlockLevel:0 },
      'Piggyback Reflex': { name:'Piggyback Reflex', type:'Optic Accessory', pts:10, unlockLevel:10 },
      'Canted Iron Sights': { name:'Canted Iron Sights', type:'Optic Accessory', pts:5, unlockLevel:23 },
      'Canted Reflex': { name:'Canted Reflex', type:'Optic Accessory', pts:10, unlockLevel:36 },

      // Right Accessories
      'None–Right Accessory': { name:'None', type:'Right Accessory', pts:0, unlockLevel:0 },
      '5 MW Red': { name:'5 MW Red', type:'Right Accessory', pts:10, unlockLevel:3 },
      '5 MW Green': { name:'5 MW Green', type:'Right Accessory', pts:10, unlockLevel:5 },
      '50 MW Green': { name:'50 MW Green', type:'Right Accessory', pts:20, unlockLevel:31 },
      '50 MW Blue': { name:'50 MW Blue', type:'Right Accessory', pts:20, unlockLevel:33 },
      '120 MW Blue': { name:'120 MW Blue', type:'Right Accessory', pts:30, unlockLevel:38 },

      // Left Accessories
      'None–Left Accessory': { name:'None', type:'Left Accessory', pts:0, unlockLevel:0 },
      'Flashlight': { name:'Flashlight', type:'Left Accessory', pts:10, unlockLevel:17 },

      // Muzzles
      'None–Muzzle': { name:'None', type:'Muzzle', pts:0, unlockLevel:0 },
      'Flash Hider': { name:'Flash Hider', type:'Muzzle', pts:10, unlockLevel:0 },
      'Single-Port Brake': { name:'Single-Port Brake', type:'Muzzle', pts:5, unlockLevel:4 },
      'Linear Comp': { name:'Linear Comp', type:'Muzzle', pts:10, unlockLevel:12 },
      'Long Suppressor': { name:'Long Suppressor', type:'Muzzle', pts:25, unlockLevel:13 },
      'Double-Port Brake': { name:'Double-Port Brake', type:'Muzzle', pts:10, unlockLevel:20 },
      'Standard Suppressor': { name:'Standard Suppressor', type:'Muzzle', pts:20, unlockLevel:22 },
      'Lightened Suppressor': { name:'Lightened Suppressor', type:'Muzzle', pts:30, unlockLevel:25 },
      'CQB Suppressor': { name:'CQB Suppressor', type:'Muzzle', pts:30, unlockLevel:32 },
      'Compensated Brake': { name:'Compensated Brake', type:'Muzzle', pts:20, unlockLevel:35 },

      // Barrels
      '450mm Factory': { name:'450mm Factory', type:'Barrel', pts:10, unlockLevel:0 },
      '600mm Cut': { name:'600mm Cut', type:'Barrel', pts:10, unlockLevel:4 },
      '600mm Fluted': { name:'600mm Fluted', type:'Barrel', pts:15, unlockLevel:9 },
      '409mm US': { name:'409mm US', type:'Barrel', pts:15, unlockLevel:15 },
      '600mm DMR': { name:'600mm DMR', type:'Barrel', pts:10, unlockLevel:40 },

      // Underbarrels
      'None–Underbarrel': { name:'None', type:'Underbarrel', pts:0, unlockLevel:0 },
      'Folding Vertical': { name:'Folding Vertical', type:'Underbarrel', pts:10, unlockLevel:1 },
      'Alloy Vertical': { name:'Alloy Vertical', type:'Underbarrel', pts:20, unlockLevel:2 },
      'Ribbed Vertical': { name:'Ribbed Vertical', type:'Underbarrel', pts:20, unlockLevel:3 },
      '6H64 Vertical': { name:'6H64 Vertical', type:'Underbarrel', pts:25, unlockLevel:6 },
      'Classic Vertical': { name:'Classic Vertical', type:'Underbarrel', pts:35, unlockLevel:7 },
      'Folding Stubby': { name:'Folding Stubby', type:'Underbarrel', pts:20, unlockLevel:13 },
      'Stippled Stubby': { name:'Stippled Stubby', type:'Underbarrel', pts:35, unlockLevel:17 },
      'Ribbed Stubby': { name:'Ribbed Stubby', type:'Underbarrel', pts:30, unlockLevel:18 },
      'Low-Profile Stubby': { name:'Low-Profile Stubby', type:'Underbarrel', pts:45, unlockLevel:21 },
      'Canted Stubby': { name:'Canted Stubby', type:'Underbarrel', pts:30, unlockLevel:26 },
      'QD Grip Pod': { name:'QD Grip Pod', type:'Underbarrel', pts:30, unlockLevel:27 },
      'Slim Angled': { name:'Slim Angled', type:'Underbarrel', pts:25, unlockLevel:28 },
      'Adjustable Angled': { name:'Adjustable Angled', type:'Underbarrel', pts:15, unlockLevel:29 },
      'Bipod': { name:'Bipod', type:'Underbarrel', pts:10, unlockLevel:32 },
      'PTT Grip Pod': { name:'PTT Grip Pod', type:'Underbarrel', pts:20, unlockLevel:34 },
      'Full Angled': { name:'Full Angled', type:'Underbarrel', pts:25, unlockLevel:38 },
      'Classic Grip Pod': { name:'Classic Grip Pod', type:'Underbarrel', pts:30, unlockLevel:39 },

      // Magazines
      '20RND Magazine': { name:'20RND Magazine', type:'Magazine', pts:5, unlockLevel:0 },
      '15RND Magazine': { name:'15RND Magazine', type:'Magazine', pts:5, unlockLevel:8 },
      '20RND Fast Mag': { name:'20RND Fast Mag', type:'Magazine', pts:10, unlockLevel:15 },
      '30RND Magazine': { name:'30RND Magazine', type:'Magazine', pts:40, unlockLevel:30 },
      '15RND Fast Mag': { name:'15RND Fast Mag', type:'Magazine', pts:10, unlockLevel:35 },

      // Ergonomics
      'None–Ergonomics': { name:'None', type:'Ergonomics', pts:0, unlockLevel:0 },
      'Match Trigger': { name:'Match Trigger', type:'Ergonomics', pts:15, unlockLevel:22 },

      // Ammunition
      'FMJ': { name:'FMJ', type:'Ammunition', pts:5, unlockLevel:0 },
      'Frangible': { name:'Frangible', type:'Ammunition', pts:20, unlockLevel:16 },
      'Tungsten Core': { name:'Tungsten Core', type:'Ammunition', pts:5, unlockLevel:24 },
      'Hollow Point': { name:'Hollow Point', type:'Ammunition', pts:20, unlockLevel:25 },
      'Polymer Case': { name:'Polymer Case', type:'Ammunition', pts:10, unlockLevel:34 },
    }
  };
  target['TR-7'] = {
    attachments: {
      // Scopes
      'Iron Sights': { name:'Iron Sights', type:'Scope', pts:5, unlockLevel:0 },
      '2PRO 1.25x': { name:'2PRO 1.25x', type:'Scope', pts:10, unlockLevel:0 },
      'OSA-7 1.00x': { name:'OSA-7 1.00x', type:'Scope', pts:10, unlockLevel:1 },
      'Mini Flex 1.00x': { name:'Mini Flex 1.00x', type:'Scope', pts:10, unlockLevel:2 },
      '3VZR 1.75x': { name:'3VZR 1.75x', type:'Scope', pts:10, unlockLevel:4 },
      '1P87 1.50x': { name:'1P87 1.50x', type:'Scope', pts:10, unlockLevel:6 },
      'PVQ-31 4.00x': { name:'PVQ-31 4.00x', type:'Scope', pts:10, unlockLevel:8 },
      'R-MR 1.00x': { name:'R-MR 1.00x', type:'Scope', pts:10, unlockLevel:9 },
      'SU-231 1.50x': { name:'SU-231 1.50x', type:'Scope', pts:10, unlockLevel:12 },
      'RO-M 1.75x': { name:'RO-M 1.75x', type:'Scope', pts:10, unlockLevel:13 },
      'CCO 2.00x': { name:'CCO 2.00x', type:'Scope', pts:10, unlockLevel:15 },
      'R4T 2.00x': { name:'R4T 2.00x', type:'Scope', pts:10, unlockLevel:16 },
      'CQ RDS 1.25x': { name:'CQ RDS 1.25x', type:'Scope', pts:10, unlockLevel:17 },
      'DVO LPVO': { name:'DVO LPVO', type:'Scope', pts:25, unlockLevel:18 },
      'Baker 3.00x': { name:'Baker 3.00x', type:'Scope', pts:10, unlockLevel:20 },
      'RO-S 1.25x': { name:'RO-S 1.25x', type:'Scope', pts:10, unlockLevel:21 },
      'ROX 1.50x': { name:'ROX 1.50x', type:'Scope', pts:10, unlockLevel:26 },
      'Mars-F LPVO': { name:'Mars-F LPVO', type:'Scope', pts:25, unlockLevel:27 },
      'SDO 3.50x': { name:'SDO 3.50x', type:'Scope', pts:10, unlockLevel:28 },
      'PAS-35 3.00x': { name:'PAS-35 3.00x', type:'Scope', pts:25, unlockLevel:29 },
      'A-P2 1.75x': { name:'A-P2 1.75x', type:'Scope', pts:10, unlockLevel:30 },
      'ST Prisim 5.00x': { name:'ST Prisim 5.00x', type:'Scope', pts:10, unlockLevel:31 },
      'BF-2M 2.50x': { name:'BF-2M 2.50x', type:'Scope', pts:10, unlockLevel:34 },
      'SF-G2 5.00x': { name:'SF-G2 5.00x', type:'Scope', pts:10, unlockLevel:37 },
      'MC-CO LPVO': { name:'MC-CO LPVO', type:'Scope', pts:25, unlockLevel:38 },
      'LDS 4.50x': { name:'LDS 4.50x', type:'Scope', pts:10, unlockLevel:39 },
      'Grim 1.50x': { name:'Grim 1.50x', type:'Scope', pts:25, unlockLevel:40 },
      'SU-230 LPVO': { name:'SU-230 LPVO', type:'Scope', pts:20, unlockLevel:'Season 1 Hardware 1' },

      // Optic Accessories
      'None–Optic Accessory': { name:'None', type:'Optic Accessory', pts:0, unlockLevel:0 },
      'Canted Iron Sights': { name:'Canted Iron Sights', type:'Optic Accessory', pts:5, unlockLevel:16 },
      'Canted Reflex': { name:'Canted Reflex', type:'Optic Accessory', pts:10, unlockLevel:36 },

      // Top Accessories
      'None–Top Accessory': { name:'None', type:'Top Accessory', pts:0, unlockLevel:0 },
      '5 MW Red': { name:'5 MW Red', type:'Top Accessory', pts:10, unlockLevel:6 },
      '5 MW Green': { name:'5 MW Green', type:'Top Accessory', pts:10, unlockLevel:11 },
      '50 MW Green': { name:'50 MW Green', type:'Top Accessory', pts:20, unlockLevel:18 },
      '50 MW Blue': { name:'50 MW Blue', type:'Top Accessory', pts:20, unlockLevel:22 },
      '120 MW Blue': { name:'120 MW Blue', type:'Top Accessory', pts:30, unlockLevel:33 },

      // Right Accessories
      'None–Right Accessory': { name:'None', type:'Right Accessory', pts:0, unlockLevel:0 },
      'Flashlight': { name:'Flashlight', type:'Right Accessory', pts:10, unlockLevel:2 },

      // Muzzles
      'None–Muzzle': { name:'None', type:'Muzzle', pts:0, unlockLevel:0 },
      'Double-Port Brake': { name:'Double-Port Brake', type:'Muzzle', pts:10, unlockLevel:0 },
      'Flash Hider': { name:'Flash Hider', type:'Muzzle', pts:10, unlockLevel:4 },
      'Standard Suppressor': { name:'Standard Suppressor', type:'Muzzle', pts:20, unlockLevel:14 },
      'Linear Comp': { name:'Linear Comp', type:'Muzzle', pts:10, unlockLevel:19 },
      'Single-Port Brake': { name:'Single-Port Brake', type:'Muzzle', pts:5, unlockLevel:23 },
      'CQB Suppressor': { name:'CQB Suppressor', type:'Muzzle', pts:30, unlockLevel:24 },
      'Long Suppressor': { name:'Long Suppressor', type:'Muzzle', pts:25, unlockLevel:29 },
      'Compensated Brake': { name:'Compensated Brake', type:'Muzzle', pts:20, unlockLevel:31 },
      'Lightened Suppressor': { name:'Lightened Suppressor', type:'Muzzle', pts:30, unlockLevel:34 },

      // Barrels
      '17" Factory': { name:'17" Factory', type:'Barrel', pts:10, unlockLevel:0 },
      '20" Long': { name:'20" Long', type:'Barrel', pts:15, unlockLevel:7 },
      '432mm Fluted': { name:'432mm Fluted', type:'Barrel', pts:20, unlockLevel:25 },
      '17" Cut': { name:'17" Cut', type:'Barrel', pts:15, unlockLevel:40 },

      // Underbarrels
      'None–Underbarrel': { name:'None', type:'Underbarrel', pts:0, unlockLevel:0 },
      'Folding Vertical': { name:'Folding Vertical', type:'Underbarrel', pts:10, unlockLevel:1 },
      'Alloy Vertical': { name:'Alloy Vertical', type:'Underbarrel', pts:20, unlockLevel:3 },
      'Ribbed Vertical': { name:'Ribbed Vertical', type:'Underbarrel', pts:20, unlockLevel:5 },
      '6H64 Vertical': { name:'6H64 Vertical', type:'Underbarrel', pts:25, unlockLevel:9 },
      'Folding Stubby': { name:'Folding Stubby', type:'Underbarrel', pts:20, unlockLevel:11 },
      'Ribbed Stubby': { name:'Ribbed Stubby', type:'Underbarrel', pts:30, unlockLevel:15 },
      'Classic Vertical': { name:'Classic Vertical', type:'Underbarrel', pts:35, unlockLevel:19 },
      'PTT Grip Pod': { name:'PTT Grip Pod', type:'Underbarrel', pts:20, unlockLevel:21 },
      'Low-Profile Stubby': { name:'Low-Profile Stubby', type:'Underbarrel', pts:45, unlockLevel:24 },
      'QD Grip Pod': { name:'QD Grip Pod', type:'Underbarrel', pts:30, unlockLevel:28 },
      'Bipod': { name:'Bipod', type:'Underbarrel', pts:10, unlockLevel:32 },
      'Stippled Stubby': { name:'Stippled Stubby', type:'Underbarrel', pts:35, unlockLevel:39 },
      'Canted Stubby': { name:'Canted Stubby', type:'Underbarrel', pts:30, unlockLevel:37 },

      // Magazines
      '20RND Magazine': { name:'20RND Magazine', type:'Magazine', pts:5, unlockLevel:0 },
      '20RND Fast Mag': { name:'20RND Fast Mag', type:'Magazine', pts:10, unlockLevel:10 },
      '15RND Magazine': { name:'15RND Magazine', type:'Magazine', pts:5, unlockLevel:12 },
      '10RND Fast Mag': { name:'10RND Fast Mag', type:'Magazine', pts:5, unlockLevel:17 },
      '25RND Magazine': { name:'25RND Magazine', type:'Magazine', pts:20, unlockLevel:26 },
      '30RND Magazine': { name:'30RND Magazine', type:'Magazine', pts:40, unlockLevel:30 },
      '25RND Fast Mag': { name:'25RND Fast Mag', type:'Magazine', pts:25, unlockLevel:35 },

      // Ergonomics
      'None–Ergonomics': { name:'None', type:'Ergonomics', pts:0, unlockLevel:0 },
      'Improved Mag Catch': { name:'Improved Mag Catch', type:'Ergonomics', pts:5, unlockLevel:23 },
      'Match Trigger': { name:'Match Trigger', type:'Ergonomics', pts:15, unlockLevel:25 },

      // Ammunition
      'FMJ': { name:'FMJ', type:'Ammunition', pts:5, unlockLevel:0 },
      'Tungsten Core': { name:'Tungsten Core', type:'Ammunition', pts:5, unlockLevel:13 },
      'Frangible': { name:'Frangible', type:'Ammunition', pts:20, unlockLevel:14 },
      'Hollow Point': { name:'Hollow Point', type:'Ammunition', pts:20, unlockLevel:22 },
      'Polymer Case': { name:'Polymer Case', type:'Ammunition', pts:10, unlockLevel:32 },
    }
  };

  // Carbines
  target['M4A1'] = {
    attachments: {
      // Scopes
      'Iron Sights':        { name:'Iron Sights',        type:'Scope', pts:5,  unlockLevel:0 },
      'SU-231 1.50x':       { name:'SU-231 1.50x',       type:'Scope', pts:10, unlockLevel:0 },
      'Baker 3.00x':        { name:'Baker 3.00x',        type:'Scope', pts:10, unlockLevel:1 },
      'Mini Flex 1.00x':    { name:'Mini Flex 1.00x',    type:'Scope', pts:10, unlockLevel:2 },
      'RO-M 1.75x':         { name:'RO-M 1.75x',         type:'Scope', pts:10, unlockLevel:4 },
      'PVQ-31 4.00x':       { name:'PVQ-31 4.00x',       type:'Scope', pts:10, unlockLevel:6 },
      'A-P2 1.75x':         { name:'A-P2 1.75x',         type:'Scope', pts:10, unlockLevel:7 },
      '2PRO 1.25x':         { name:'2PRO 1.25x',         type:'Scope', pts:10, unlockLevel:8 },
      'CCO 2.00x':          { name:'CCO 2.00x',          type:'Scope', pts:10, unlockLevel:9 },
      'OSA-7 1.00x':        { name:'OSA-7 1.00x',        type:'Scope', pts:10, unlockLevel:12 },
      'SDO 3.50x':          { name:'SDO 3.50x',          type:'Scope', pts:10, unlockLevel:14 },
      'ROX 1.50x':          { name:'ROX 1.50x',          type:'Scope', pts:10, unlockLevel:16 },
      'ST Prisim 5.00x':    { name:'ST Prisim 5.00x',    type:'Scope', pts:10, unlockLevel:17 },
      '1P87 1.50x':         { name:'1P87 1.50x',         type:'Scope', pts:10, unlockLevel:19 },
      'Grim 1.50x':         { name:'Grim 1.50x',         type:'Scope', pts:25, unlockLevel:22 },
      'R4T 2.00x':          { name:'R4T 2.00x',          type:'Scope', pts:10, unlockLevel:23 },
      'R-MR 1.00x':         { name:'R-MR 1.00x',         type:'Scope', pts:10, unlockLevel:24 },
      'BF-2M 2.50x':        { name:'BF-2M 2.50x',        type:'Scope', pts:10, unlockLevel:26 },
      '3VZR 1.75x':         { name:'3VZR 1.75x',         type:'Scope', pts:10, unlockLevel:27 },
      'NGFC LPVO':          { name:'NGFC LPVO',          type:'Scope', pts:25, unlockLevel:32 },
      'RO-S 1.25x':         { name:'RO-S 1.25x',         type:'Scope', pts:10, unlockLevel:33 },
      'LDS 4.50x':          { name:'LDS 4.50x',          type:'Scope', pts:10, unlockLevel:35 },
      'PAS-35 3.00x':       { name:'PAS-35 3.00x',       type:'Scope', pts:25, unlockLevel:36 },
      'CQ RDS 1.25x':       { name:'CQ RDS 1.25x',       type:'Scope', pts:10, unlockLevel:38 },
      'SF-G2 5.00x':        { name:'SF-G2 5.00x',        type:'Scope', pts:10, unlockLevel:40 },
      // Season 1 Hardware 1 assignment
      'SU-230 LPVO':        { name:'SU-230 LPVO',        type:'Scope', pts:20, unlockLevel:0 },

      // Optic Accessories
      'None–Optic Accessory':  { name:'None',               type:'Optic Accessory', pts:0,  unlockLevel:0 },
      'Canted Iron Sights':    { name:'Canted Iron Sights', type:'Optic Accessory', pts:5,  unlockLevel:10 },
      'Canted Reflex':         { name:'Canted Reflex',      type:'Optic Accessory', pts:10, unlockLevel:20 },
      'Piggyback Reflex':      { name:'Piggyback Reflex',   type:'Optic Accessory', pts:10, unlockLevel:30 },

      // Top Accessories
      'None–Top Accessory':    { name:'None',          type:'Top Accessory', pts:0,  unlockLevel:0 },
      '5 MW Red':              { name:'5 MW Red',      type:'Top Accessory', pts:10, unlockLevel:5 },
      '5 MW Green':            { name:'5 MW Green',    type:'Top Accessory', pts:10, unlockLevel:12 },
      '50 MW Green':           { name:'50 MW Green',   type:'Top Accessory', pts:20, unlockLevel:19 },
      '50 MW Blue':            { name:'50 MW Blue',    type:'Top Accessory', pts:20, unlockLevel:26 },
      '120 MW Blue':           { name:'120 MW Blue',   type:'Top Accessory', pts:30, unlockLevel:33 },

      // Right Accessories
      'None–Right Accessory':  { name:'None',        type:'Right Accessory', pts:0,  unlockLevel:0 },
      'Flashlight':            { name:'Flashlight',  type:'Right Accessory', pts:10, unlockLevel:8 },

      // Muzzles
      'None–Muzzle':           { name:'None',               type:'Muzzle', pts:0,  unlockLevel:0 },
      'Flash Hider':           { name:'Flash Hider',        type:'Muzzle', pts:10, unlockLevel:0 },
      'Single-Port Brake':     { name:'Single-Port Brake',  type:'Muzzle', pts:5,  unlockLevel:2 },
      'Linear Comp':           { name:'Linear Comp',        type:'Muzzle', pts:10, unlockLevel:7 },
      'Double-Port Brake':     { name:'Double-Port Brake',  type:'Muzzle', pts:10, unlockLevel:15 },
      'Compensated Brake':     { name:'Compensated Brake',  type:'Muzzle', pts:20, unlockLevel:21 },
      'Standard Suppressor':   { name:'Standard Suppressor',type:'Muzzle', pts:20, unlockLevel:24 },
      'Long Suppressor':       { name:'Long Suppressor',    type:'Muzzle', pts:25, unlockLevel:29 },
      'CQB Suppressor':        { name:'CQB Suppressor',     type:'Muzzle', pts:30, unlockLevel:35 },
      'Lightened Suppressor':  { name:'Lightened Suppressor',type:'Muzzle',pts:30, unlockLevel:39 },

      // Barrels
      '11.5" Commando':        { name:'11.5" Commando', type:'Barrel', pts:15, unlockLevel:0 },
      '12.5" Mid':             { name:'12.5" Mid',      type:'Barrel', pts:10, unlockLevel:3 },
      '14.5" Carbine':         { name:'14.5" Carbine',  type:'Barrel', pts:15, unlockLevel:13 },
      '12.5" Fluted':          { name:'12.5" Fluted',   type:'Barrel', pts:20, unlockLevel:25 },

      // Underbarrels
      'None–Underbarrel':      { name:'None',               type:'Underbarrel', pts:0,  unlockLevel:0 },
      'Underslung Mount':      { name:'Underslung Mount',   type:'Underbarrel', pts:10, unlockLevel:0 },
      'Folding Vertical':      { name:'Folding Vertical',   type:'Underbarrel', pts:10, unlockLevel:1 },
      'Alloy Vertical':        { name:'Alloy Vertical',     type:'Underbarrel', pts:20, unlockLevel:3 },
      'Ribbed Vertical':       { name:'Ribbed Vertical',    type:'Underbarrel', pts:20, unlockLevel:9 },
      'Folding Stubby':        { name:'Folding Stubby',     type:'Underbarrel', pts:20, unlockLevel:11 },
      'PTT Grip Pod':          { name:'PTT Grip Pod',       type:'Underbarrel', pts:20, unlockLevel:13 },
      'Classic Vertical':      { name:'Classic Vertical',   type:'Underbarrel', pts:35, unlockLevel:15 },
      '6H64 Vertical':         { name:'6H64 Vertical',      type:'Underbarrel', pts:25, unlockLevel:18 },
      'Adjustable Angled':     { name:'Adjustable Angled',  type:'Underbarrel', pts:15, unlockLevel:21 },
      'Slim Angled':           { name:'Slim Angled',        type:'Underbarrel', pts:25, unlockLevel:23 },
      'Ribbed Stubby':         { name:'Ribbed Stubby',      type:'Underbarrel', pts:30, unlockLevel:25 },
      'Canted Stubby':         { name:'Canted Stubby',      type:'Underbarrel', pts:30, unlockLevel:27 },
      'Full Angled':           { name:'Full Angled',        type:'Underbarrel', pts:25, unlockLevel:29 },
      'QD Grip Pod':           { name:'QD Grip Pod',        type:'Underbarrel', pts:30, unlockLevel:31 },
      'Bipod':                 { name:'Bipod',              type:'Underbarrel', pts:10, unlockLevel:34 },
      'Classic Grip Pod':      { name:'Classic Grip Pod',   type:'Underbarrel', pts:30, unlockLevel:36 },
      'Stippled Stubby':       { name:'Stippled Stubby',    type:'Underbarrel', pts:35, unlockLevel:37 },
      'Low-Profile Stubby':    { name:'Low-Profile Stubby', type:'Underbarrel', pts:45, unlockLevel:39 },

      // Magazines
      '30RND Magazine':        { name:'30RND Magazine',   type:'Magazine', pts:5,  unlockLevel:0 },
      '20RND Fast Mag':        { name:'20RND Fast Mag',   type:'Magazine', pts:5,  unlockLevel:6 },
      '20RND Magazine':        { name:'20RND Magazine',   type:'Magazine', pts:5,  unlockLevel:14 },
      '30RND Fast Mag':        { name:'30RND Fast Mag',   type:'Magazine', pts:10, unlockLevel:22 },
      '36RND Magazine':        { name:'36RND Magazine',   type:'Magazine', pts:15, unlockLevel:31 },
      '40RND Magazine':        { name:'40RND Magazine',   type:'Magazine', pts:25, unlockLevel:34 },
      '40RND Fast Mag':        { name:'40RND Fast Mag',   type:'Magazine', pts:30, unlockLevel:38 },

      // Ergonomics
      'None–Ergonomics':       { name:'None',             type:'Ergonomics', pts:0,  unlockLevel:0 },
      'Improved Mag Catch':    { name:'Improved Mag Catch', type:'Ergonomics', pts:5,  unlockLevel:4 },
      'Magwell Flare':         { name:'Magwell Flare',    type:'Ergonomics', pts:10, unlockLevel:16 },
      'Match Trigger':         { name:'Match Trigger',    type:'Ergonomics', pts:15, unlockLevel:32 },
      // Season 1 Hardware 2 assignment
      'Rail Cover':            { name:'Rail Cover',       type:'Ergonomics', pts:5,  unlockLevel:0 },

      // Ammunition
      'FMJ':                   { name:'FMJ',           type:'Ammunition', pts:5,  unlockLevel:0 },
      'Tungsten Core':         { name:'Tungsten Core', type:'Ammunition', pts:5,  unlockLevel:11 },
      'Polymer Case':          { name:'Polymer Case',  type:'Ammunition', pts:10, unlockLevel:18 },
      'Hollow Point':          { name:'Hollow Point',  type:'Ammunition', pts:20, unlockLevel:28 },
      'Frangible':             { name:'Frangible',     type:'Ammunition', pts:20, unlockLevel:37 },
    }
  };
  target['M277'] = {
    attachments: {
      // Scopes
      'Iron Sights':        { name:'Iron Sights',        type:'Scope', pts:5,  unlockLevel:0 },
      'NGFC LPVO':          { name:'NGFC LPVO',          type:'Scope', pts:25, unlockLevel:0 },
      'Baker 3.00x':        { name:'Baker 3.00x',        type:'Scope', pts:10, unlockLevel:1 },
      'Mini Flex 1.00x':    { name:'Mini Flex 1.00x',    type:'Scope', pts:10, unlockLevel:2 },
      'RO-M 1.75x':         { name:'RO-M 1.75x',         type:'Scope', pts:10, unlockLevel:3 },
      'PVQ-31 4.00x':       { name:'PVQ-31 4.00x',       type:'Scope', pts:10, unlockLevel:4 },
      'A-P2 1.75x':         { name:'A-P2 1.75x',         type:'Scope', pts:10, unlockLevel:6 },
      '2PRO 1.25x':         { name:'2PRO 1.25x',         type:'Scope', pts:10, unlockLevel:8 },
      'CCO 2.00x':          { name:'CCO 2.00x',          type:'Scope', pts:10, unlockLevel:9 },
      'OSA-7 1.00x':        { name:'OSA-7 1.00x',        type:'Scope', pts:10, unlockLevel:12 },
      'SDO 3.50x':          { name:'SDO 3.50x',          type:'Scope', pts:10, unlockLevel:14 },
      'ROX 1.50x':          { name:'ROX 1.50x',          type:'Scope', pts:10, unlockLevel:16 },
      'ST Prisim 5.00x':    { name:'ST Prisim 5.00x',    type:'Scope', pts:10, unlockLevel:17 },
      '1P87 1.50x':         { name:'1P87 1.50x',         type:'Scope', pts:10, unlockLevel:19 },
      'Grim 1.50x':         { name:'Grim 1.50x',         type:'Scope', pts:25, unlockLevel:22 },
      'R4T 2.00x':          { name:'R4T 2.00x',          type:'Scope', pts:10, unlockLevel:23 },
      'R-MR 1.00x':         { name:'R-MR 1.00x',         type:'Scope', pts:10, unlockLevel:24 },
      'BF-2M 2.50x':        { name:'BF-2M 2.50x',        type:'Scope', pts:10, unlockLevel:26 },
      '3VZR 1.75x':         { name:'3VZR 1.75x',         type:'Scope', pts:10, unlockLevel:28 },
      'SU-231 1.50x':       { name:'SU-231 1.50x',       type:'Scope', pts:10, unlockLevel:29 },
      'RO-S 1.25x':         { name:'RO-S 1.25x',         type:'Scope', pts:10, unlockLevel:32 },
      'LDS 4.50x':          { name:'LDS 4.50x',          type:'Scope', pts:10, unlockLevel:34 },
      'PAS-35 3.00x':       { name:'PAS-35 3.00x',       type:'Scope', pts:25, unlockLevel:36 },
      'CQ RDS 1.25x':       { name:'CQ RDS 1.25x',       type:'Scope', pts:10, unlockLevel:38 },
      'SF-G2 5.00x':        { name:'SF-G2 5.00x',        type:'Scope', pts:10, unlockLevel:40 },
      // Season 1 Hardware 1 assignment
      'SU-230 LPVO':        { name:'SU-230 LPVO',        type:'Scope', pts:20, unlockLevel:0 },

      // Optic Accessories
      'None–Optic Accessory':  { name:'None',               type:'Optic Accessory', pts:0,  unlockLevel:0 },
      'Canted Iron Sights':    { name:'Canted Iron Sights', type:'Optic Accessory', pts:5,  unlockLevel:10 },
      'Canted Reflex':         { name:'Canted Reflex',      type:'Optic Accessory', pts:10, unlockLevel:20 },
      'Piggyback Reflex':      { name:'Piggyback Reflex',   type:'Optic Accessory', pts:10, unlockLevel:30 },

      // Top Accessories
      'None–Top Accessory':    { name:'None',          type:'Top Accessory', pts:0,  unlockLevel:0 },
      '5 MW Red':              { name:'5 MW Red',      type:'Top Accessory', pts:10, unlockLevel:5 },
      '5 MW Green':            { name:'5 MW Green',    type:'Top Accessory', pts:10, unlockLevel:12 },
      '50 MW Green':           { name:'50 MW Green',   type:'Top Accessory', pts:20, unlockLevel:19 },
      '50 MW Blue':            { name:'50 MW Blue',    type:'Top Accessory', pts:20, unlockLevel:26 },
      '120 MW Blue':           { name:'120 MW Blue',   type:'Top Accessory', pts:30, unlockLevel:33 },

      // Right Accessories
      'None–Right Accessory':  { name:'None',        type:'Right Accessory', pts:0,  unlockLevel:0 },
      'Flashlight':            { name:'Flashlight',  type:'Right Accessory', pts:10, unlockLevel:8 },

      // Muzzles
      'None–Muzzle':           { name:'None',                  type:'Muzzle', pts:0,  unlockLevel:0 },
      'Lightened Suppressor':  { name:'Lightened Suppressor',  type:'Muzzle', pts:30, unlockLevel:0 },
      'Single-Port Brake':     { name:'Single-Port Brake',     type:'Muzzle', pts:5,  unlockLevel:2 },
      'Flash Hider':           { name:'Flash Hider',           type:'Muzzle', pts:10, unlockLevel:11 },
      'Linear Comp':           { name:'Linear Comp',           type:'Muzzle', pts:10, unlockLevel:17 },
      'Double-Port Brake':     { name:'Double-Port Brake',     type:'Muzzle', pts:10, unlockLevel:22 },
      'Compensated Brake':     { name:'Compensated Brake',     type:'Muzzle', pts:20, unlockLevel:28 },
      'Standard Suppressor':   { name:'Standard Suppressor',   type:'Muzzle', pts:20, unlockLevel:34 },
      'Long Suppressor':       { name:'Long Suppressor',       type:'Muzzle', pts:25, unlockLevel:37 },
      'CQB Suppressor':        { name:'CQB Suppressor',        type:'Muzzle', pts:30, unlockLevel:39 },

      // Barrels
      '13" Factory':           { name:'13" Factory',   type:'Barrel', pts:10, unlockLevel:0 },
      '13" Prototype':         { name:'13" Prototype', type:'Barrel', pts:10, unlockLevel:3 },
      '16" Custom':            { name:'16" Custom',    type:'Barrel', pts:10, unlockLevel:7 },
      '16" Rifle':             { name:'16" Rifle',     type:'Barrel', pts:15, unlockLevel:18 },
      '13" Fluted':            { name:'13" Fluted',    type:'Barrel', pts:20, unlockLevel:35 },

      // Underbarrels
      'None–Underbarrel':      { name:'None',               type:'Underbarrel', pts:0,  unlockLevel:0 },
      'Underslung Mount':      { name:'Underslung Mount',   type:'Underbarrel', pts:10, unlockLevel:0 },
      'Folding Vertical':      { name:'Folding Vertical',   type:'Underbarrel', pts:10, unlockLevel:1 },
      'Alloy Vertical':        { name:'Alloy Vertical',     type:'Underbarrel', pts:20, unlockLevel:5 },
      'Ribbed Vertical':       { name:'Ribbed Vertical',    type:'Underbarrel', pts:20, unlockLevel:9 },
      'Folding Stubby':        { name:'Folding Stubby',     type:'Underbarrel', pts:20, unlockLevel:11 },
      'PTT Grip Pod':          { name:'PTT Grip Pod',       type:'Underbarrel', pts:20, unlockLevel:13 },
      '6H64 Vertical':         { name:'6H64 Vertical',      type:'Underbarrel', pts:25, unlockLevel:15 },
      'Adjustable Angled':     { name:'Adjustable Angled',  type:'Underbarrel', pts:15, unlockLevel:18 },
      'Slim Angled':           { name:'Slim Angled',        type:'Underbarrel', pts:25, unlockLevel:21 },
      'Ribbed Stubby':         { name:'Ribbed Stubby',      type:'Underbarrel', pts:30, unlockLevel:23 },
      'Canted Stubby':         { name:'Canted Stubby',      type:'Underbarrel', pts:30, unlockLevel:25 },
      'Full Angled':           { name:'Full Angled',        type:'Underbarrel', pts:25, unlockLevel:27 },
      'QD Grip Pod':           { name:'QD Grip Pod',        type:'Underbarrel', pts:30, unlockLevel:29 },
      'Classic Grip Pod':      { name:'Classic Grip Pod',   type:'Underbarrel', pts:30, unlockLevel:31 },
      'Bipod':                 { name:'Bipod',              type:'Underbarrel', pts:10, unlockLevel:33 },
      'Classic Vertical':      { name:'Classic Vertical',   type:'Underbarrel', pts:35, unlockLevel:35 },
      'Stippled Stubby':       { name:'Stippled Stubby',    type:'Underbarrel', pts:35, unlockLevel:37 },
      'Low-Profile Stubby':    { name:'Low-Profile Stubby', type:'Underbarrel', pts:45, unlockLevel:39 },

      // Magazines
      '20RND Magazine':        { name:'20RND Magazine',   type:'Magazine', pts:5,  unlockLevel:0 },
      '15RND Magazine':        { name:'15RND Magazine',   type:'Magazine', pts:5,  unlockLevel:6 },
      '20RND Fast Mag':        { name:'20RND Fast Mag',   type:'Magazine', pts:10, unlockLevel:16 },
      '25RND Magazine':        { name:'25RND Magazine',   type:'Magazine', pts:20, unlockLevel:25 },
      '25RND Fast Mag':        { name:'25RND Fast Mag',   type:'Magazine', pts:25, unlockLevel:32 },
      '30RND Magazine':        { name:'30RND Magazine',   type:'Magazine', pts:40, unlockLevel:38 },

      // Ergonomics
      'None–Ergonomics':       { name:'None',             type:'Ergonomics', pts:0,  unlockLevel:0 },
      'Improved Mag Catch':    { name:'Improved Mag Catch', type:'Ergonomics', pts:5,  unlockLevel:4 },
      'Magwell Flare':         { name:'Magwell Flare',    type:'Ergonomics', pts:10, unlockLevel:15 },
      'Match Trigger':         { name:'Match Trigger',    type:'Ergonomics', pts:15, unlockLevel:24 },

      // Ammunition
      'FMJ':                   { name:'FMJ',           type:'Ammunition', pts:5,  unlockLevel:0 },
      'Tungsten Core':         { name:'Tungsten Core', type:'Ammunition', pts:5,  unlockLevel:14 },
      'Hollow Point':          { name:'Hollow Point',  type:'Ammunition', pts:20, unlockLevel:21 },
      'Frangible':             { name:'Frangible',     type:'Ammunition', pts:20, unlockLevel:31 },
    }
  };
  target['AK-205'] = {
    attachments: {
      // Scopes
      'Iron Sights':        { name:'Iron Sights',        type:'Scope', pts:5,  unlockLevel:0 },
      'Baker 3.00x':        { name:'Baker 3.00x',        type:'Scope', pts:10, unlockLevel:0 },
      'Mini Flex 1.00x':    { name:'Mini Flex 1.00x',    type:'Scope', pts:10, unlockLevel:1 },
      'RO-M 1.75x':         { name:'RO-M 1.75x',         type:'Scope', pts:10, unlockLevel:2 },
      'PVQ-31 4.00x':       { name:'PVQ-31 4.00x',       type:'Scope', pts:10, unlockLevel:3 },
      'RO-S 1.25x':         { name:'RO-S 1.25x',         type:'Scope', pts:10, unlockLevel:5 },
      'CCO 2.00x':          { name:'CCO 2.00x',          type:'Scope', pts:10, unlockLevel:6 },
      'A-P2 1.75x':         { name:'A-P2 1.75x',         type:'Scope', pts:10, unlockLevel:8 },
      'OSA-7 1.00x':        { name:'OSA-7 1.00x',        type:'Scope', pts:10, unlockLevel:9 },
      'LDS 4.50x':          { name:'LDS 4.50x',          type:'Scope', pts:10, unlockLevel:12 },
      'CQ RDS 1.25x':       { name:'CQ RDS 1.25x',       type:'Scope', pts:10, unlockLevel:13 },
      'SU-231 1.50x':       { name:'SU-231 1.50x',       type:'Scope', pts:10, unlockLevel:16 },
      'SDO 3.50x':          { name:'SDO 3.50x',          type:'Scope', pts:10, unlockLevel:17 },
      '3VZR 1.75x':         { name:'3VZR 1.75x',         type:'Scope', pts:10, unlockLevel:18 },
      'ST Prisim 5.00x':    { name:'ST Prisim 5.00x',    type:'Scope', pts:10, unlockLevel:21 },
      'R4T 2.00x':          { name:'R4T 2.00x',          type:'Scope', pts:10, unlockLevel:24 },
      'Grim 1.50x':         { name:'Grim 1.50x',         type:'Scope', pts:25, unlockLevel:26 },
      'Mars-F LPVO':        { name:'Mars-F LPVO',        type:'Scope', pts:25, unlockLevel:29 },
      '1P87 1.50x':         { name:'1P87 1.50x',         type:'Scope', pts:10, unlockLevel:32 },
      '2PRO 1.25x':         { name:'2PRO 1.25x',         type:'Scope', pts:10, unlockLevel:33 },
      'BF-2M 2.50x':        { name:'BF-2M 2.50x',        type:'Scope', pts:10, unlockLevel:34 },
      'ROX 1.50x':          { name:'ROX 1.50x',          type:'Scope', pts:10, unlockLevel:35 },
      'PAS-35 3.00x':       { name:'PAS-35 3.00x',       type:'Scope', pts:25, unlockLevel:36 },
      'R-MR 1.00x':         { name:'R-MR 1.00x',         type:'Scope', pts:10, unlockLevel:39 },
      'SF-G2 5.00x':        { name:'SF-G2 5.00x',        type:'Scope', pts:10, unlockLevel:40 },
      // Season 1 Hardware 1 assignment
      'SU-230 LPVO':        { name:'SU-230 LPVO',        type:'Scope', pts:20, unlockLevel:0 },

      // Optic Accessories
      'None–Optic Accessory':  { name:'None',               type:'Optic Accessory', pts:0,  unlockLevel:0 },
      'Canted Iron Sights':    { name:'Canted Iron Sights', type:'Optic Accessory', pts:5,  unlockLevel:10 },
      'Canted Reflex':         { name:'Canted Reflex',      type:'Optic Accessory', pts:10, unlockLevel:20 },
      'Piggyback Reflex':      { name:'Piggyback Reflex',   type:'Optic Accessory', pts:10, unlockLevel:30 },

      // Top Accessories
      'None–Top Accessory':    { name:'None',          type:'Top Accessory', pts:0,  unlockLevel:0 },
      '5 MW Red':              { name:'5 MW Red',      type:'Top Accessory', pts:10, unlockLevel:5 },
      '5 MW Green':            { name:'5 MW Green',    type:'Top Accessory', pts:10, unlockLevel:12 },
      '50 MW Green':           { name:'50 MW Green',   type:'Top Accessory', pts:20, unlockLevel:19 },
      '50 MW Blue':            { name:'50 MW Blue',    type:'Top Accessory', pts:20, unlockLevel:26 },
      '120 MW Blue':           { name:'120 MW Blue',   type:'Top Accessory', pts:30, unlockLevel:33 },

      // Right Accessories
      'None–Right Accessory':  { name:'None',        type:'Right Accessory', pts:0,  unlockLevel:0 },
      'Flashlight':            { name:'Flashlight',  type:'Right Accessory', pts:10, unlockLevel:8 },

      // Muzzles
      'None–Muzzle':           { name:'None',                  type:'Muzzle', pts:0,  unlockLevel:0 },
      'Flash Hider':           { name:'Flash Hider',           type:'Muzzle', pts:10, unlockLevel:0 },
      'Linear Comp':           { name:'Linear Comp',           type:'Muzzle', pts:10, unlockLevel:2 },
      'Double-Port Brake':     { name:'Double-Port Brake',     type:'Muzzle', pts:5,  unlockLevel:7 },
      'Compensated Brake':     { name:'Compensated Brake',     type:'Muzzle', pts:20, unlockLevel:13 },
      'Standard Suppressor':   { name:'Standard Suppressor',   type:'Muzzle', pts:20, unlockLevel:18 },
      'Long Suppressor':       { name:'Long Suppressor',       type:'Muzzle', pts:25, unlockLevel:24 },
      'CQB Suppressor':        { name:'CQB Suppressor',        type:'Muzzle', pts:30, unlockLevel:28 },
      'Lightened Suppressor':  { name:'Lightened Suppressor',  type:'Muzzle', pts:30, unlockLevel:38 },

      // Barrels
      '314mm Factory':         { name:'314mm Factory',   type:'Barrel', pts:10, unlockLevel:0 },
      '314mm Prototype':       { name:'314mm Prototype', type:'Barrel', pts:10, unlockLevel:3 },
      '314mm Fluted':          { name:'314mm Fluted',    type:'Barrel', pts:20, unlockLevel:37 },

      // Underbarrels
      'None–Underbarrel':      { name:'None',               type:'Underbarrel', pts:0,  unlockLevel:0 },
      'Folding Vertical':      { name:'Folding Vertical',   type:'Underbarrel', pts:10, unlockLevel:0 },
      'Alloy Vertical':        { name:'Alloy Vertical',     type:'Underbarrel', pts:20, unlockLevel:1 },
      'Ribbed Vertical':       { name:'Ribbed Vertical',    type:'Underbarrel', pts:20, unlockLevel:4 },
      'Folding Stubby':        { name:'Folding Stubby',     type:'Underbarrel', pts:20, unlockLevel:7 },
      '6H64 Vertical':         { name:'6H64 Vertical',      type:'Underbarrel', pts:25, unlockLevel:11 },
      'Slim Angled':           { name:'Slim Angled',        type:'Underbarrel', pts:25, unlockLevel:15 },
      'Ribbed Stubby':         { name:'Ribbed Stubby',      type:'Underbarrel', pts:30, unlockLevel:19 },
      'Canted Stubby':         { name:'Canted Stubby',      type:'Underbarrel', pts:30, unlockLevel:22 },
      'Full Angled':           { name:'Full Angled',        type:'Underbarrel', pts:25, unlockLevel:25 },
      'Stippled Stubby':       { name:'Stippled Stubby',    type:'Underbarrel', pts:35, unlockLevel:29 },
      'Classic Vertical':      { name:'Classic Vertical',   type:'Underbarrel', pts:35, unlockLevel:31 },
      'Low-Profile Stubby':    { name:'Low-Profile Stubby', type:'Underbarrel', pts:45, unlockLevel:38 },

      // Magazines
      '30RND Magazine':        { name:'30RND Magazine',   type:'Magazine', pts:5,  unlockLevel:0 },
      '30RND Fast Mag':        { name:'30RND Fast Mag',   type:'Magazine', pts:10, unlockLevel:4 },
      '36RND Magazine':        { name:'36RND Magazine',   type:'Magazine', pts:15, unlockLevel:14 },
      '40RND Magazine':        { name:'40RND Magazine',   type:'Magazine', pts:25, unlockLevel:17 },
      '40RND Fast Mag':        { name:'40RND Fast Mag',   type:'Magazine', pts:30, unlockLevel:22 },
      '45RND Magazine':        { name:'45RND Magazine',   type:'Magazine', pts:35, unlockLevel:25 },
      '45RND Fast Mag':        { name:'45RND Fast Mag',   type:'Magazine', pts:40, unlockLevel:27 },
      '50RND Fast Mag':        { name:'50RND Fast Mag',   type:'Magazine', pts:45, unlockLevel:35 },

      // Ergonomics
      'None–Ergonomics':       { name:'None',             type:'Ergonomics', pts:0,  unlockLevel:0 },
      'Improved Mag Catch':    { name:'Improved Mag Catch', type:'Ergonomics', pts:5,  unlockLevel:6 },
      'Magwell Flare':         { name:'Magwell Flare',    type:'Ergonomics', pts:10, unlockLevel:16 },
      'Match Trigger':         { name:'Match Trigger',    type:'Ergonomics', pts:15, unlockLevel:28 },

      // Ammunition
      'FMJ':                   { name:'FMJ',           type:'Ammunition', pts:5,  unlockLevel:0 },
      'Tungsten Core':         { name:'Tungsten Core', type:'Ammunition', pts:5,  unlockLevel:9 },
      'Polymer Case':          { name:'Polymer Case',  type:'Ammunition', pts:10, unlockLevel:15 },
      'Hollow Point':          { name:'Hollow Point',  type:'Ammunition', pts:20, unlockLevel:23 },
      'Frangible':             { name:'Frangible',     type:'Ammunition', pts:20, unlockLevel:32 },
      'Synthetic Tip':         { name:'Synthetic Tip', type:'Ammunition', pts:30, unlockLevel:39 },
    }
  };
  target['M417 A2'] = {
    attachments: {
      // Scopes
      'Iron Sights':      { name:'Iron Sights',      type:'Scope', pts:5,  unlockLevel:0 },
      'SU-231 1.50x':     { name:'SU-231 1.50x',     type:'Scope', pts:10, unlockLevel:0 },
      'Baker 3.00x':      { name:'Baker 3.00x',      type:'Scope', pts:10, unlockLevel:1 },
      'Mini Flex 1.00x':  { name:'Mini Flex 1.00x',  type:'Scope', pts:10, unlockLevel:2 },
      'RO-M 1.75x':       { name:'RO-M 1.75x',       type:'Scope', pts:10, unlockLevel:3 },
      'PVQ-31 4.00x':     { name:'PVQ-31 4.00x',     type:'Scope', pts:10, unlockLevel:5 },
      'ROX 1.50x':        { name:'ROX 1.50x',        type:'Scope', pts:10, unlockLevel:7 },
      'BF-2M 2.50x':      { name:'BF-2M 2.50x',      type:'Scope', pts:10, unlockLevel:8 },
      '2PRO 1.25x':       { name:'2PRO 1.25x',       type:'Scope', pts:10, unlockLevel:9 },
      'LDS 4.50x':        { name:'LDS 4.50x',        type:'Scope', pts:10, unlockLevel:11 },
      'CCO 2.00x':        { name:'CCO 2.00x',        type:'Scope', pts:10, unlockLevel:13 },
      'CQ RDS 1.25x':     { name:'CQ RDS 1.25x',     type:'Scope', pts:10, unlockLevel:15 },
      'Grim 1.50x':       { name:'Grim 1.50x',       type:'Scope', pts:25, unlockLevel:17 },
      'OSA-7 1.00x':      { name:'OSA-7 1.00x',      type:'Scope', pts:10, unlockLevel:19 },
      'A-P2 1.75x':       { name:'A-P2 1.75x',       type:'Scope', pts:10, unlockLevel:23 },
      'ST Prisim 5.00x':  { name:'ST Prisim 5.00x',  type:'Scope', pts:10, unlockLevel:26 },
      'NGFC LPVO':        { name:'NGFC LPVO',        type:'Scope', pts:25, unlockLevel:27 },
      'R-MR 1.00x':       { name:'R-MR 1.00x',       type:'Scope', pts:10, unlockLevel:31 },
      'SDO 3.50x':        { name:'SDO 3.50x',        type:'Scope', pts:10, unlockLevel:32 },
      '1P87 1.50x':       { name:'1P87 1.50x',       type:'Scope', pts:10, unlockLevel:33 },
      'R4T 2.00x':        { name:'R4T 2.00x',        type:'Scope', pts:10, unlockLevel:35 },
      'PAS-35 3.00x':     { name:'PAS-35 3.00x',     type:'Scope', pts:25, unlockLevel:36 },
      'RO-S 1.25x':       { name:'RO-S 1.25x',       type:'Scope', pts:10, unlockLevel:37 },
      '3VZR 1.75x':       { name:'3VZR 1.75x',       type:'Scope', pts:10, unlockLevel:39 },
      'SF-G2 5.00x':      { name:'SF-G2 5.00x',      type:'Scope', pts:10, unlockLevel:40 },
      // Season 1 Hardware 1
      'SU-230 LPVO':      { name:'SU-230 LPVO',      type:'Scope', pts:20, unlockLevel:0 },

      // Optic Accessories
      'None–Optic Accessory': { name:'None',               type:'Optic Accessory', pts:0,  unlockLevel:0 },
      'Canted Iron Sights':   { name:'Canted Iron Sights', type:'Optic Accessory', pts:5,  unlockLevel:10 },
      'Canted Reflex':        { name:'Canted Reflex',      type:'Optic Accessory', pts:10, unlockLevel:20 },
      'Piggyback Reflex':     { name:'Piggyback Reflex',   type:'Optic Accessory', pts:10, unlockLevel:30 },

      // Top Accessories
      'None–Top Accessory':   { name:'None',          type:'Top Accessory', pts:0,  unlockLevel:0 },
      '5 MW Red':             { name:'5 MW Red',      type:'Top Accessory', pts:10, unlockLevel:4 },
      '5 MW Green':           { name:'5 MW Green',    type:'Top Accessory', pts:10, unlockLevel:11 },
      '50 MW Green':          { name:'50 MW Green',   type:'Top Accessory', pts:20, unlockLevel:19 },
      '50 MW Blue':           { name:'50 MW Blue',    type:'Top Accessory', pts:20, unlockLevel:26 },
      '120 MW Blue':          { name:'120 MW Blue',   type:'Top Accessory', pts:30, unlockLevel:33 },

      // Right Accessories
      'None–Right Accessory': { name:'None',         type:'Right Accessory', pts:0,  unlockLevel:0 },
      'Flashlight':           { name:'Flashlight',   type:'Right Accessory', pts:10, unlockLevel:7 },

      // Muzzles
      'None–Muzzle':          { name:'None',                 type:'Muzzle', pts:0,  unlockLevel:0 },
      'Flash Hider':          { name:'Flash Hider',          type:'Muzzle', pts:10, unlockLevel:0 },
      'Linear Comp':          { name:'Linear Comp',          type:'Muzzle', pts:10, unlockLevel:0 },
      'Double-Port Brake':    { name:'Double-Port Brake',    type:'Muzzle', pts:10, unlockLevel:1 },
      'Compensated Brake':    { name:'Compensated Brake',    type:'Muzzle', pts:20, unlockLevel:6 },
      'Standard Suppressor':  { name:'Standard Suppressor',  type:'Muzzle', pts:20, unlockLevel:14 },
      'Long Suppressor':      { name:'Long Suppressor',      type:'Muzzle', pts:25, unlockLevel:28 },
      'Lightened Suppressor': { name:'Lightened Suppressor', type:'Muzzle', pts:30, unlockLevel:32 },
      'CQB Suppressor':       { name:'CQB Suppressor',       type:'Muzzle', pts:30, unlockLevel:38 },

      // Barrels
      '13" Commando':         { name:'13" Commando',   type:'Barrel', pts:10, unlockLevel:0 },
      '16.5" Rifle':          { name:'16.5" Rifle',    type:'Barrel', pts:15, unlockLevel:5 },
      '12" Assaulter':        { name:'12" Assaulter',  type:'Barrel', pts:15, unlockLevel:22 },

      // Underbarrels
      'None–Underbarrel':     { name:'None',               type:'Underbarrel', pts:0,  unlockLevel:0 },
      'Underslung Mount':     { name:'Underslung Mount',   type:'Underbarrel', pts:10, unlockLevel:0 },
      'Folding Vertical':     { name:'Folding Vertical',   type:'Underbarrel', pts:10, unlockLevel:0 },
      'Alloy Vertical':       { name:'Alloy Vertical',     type:'Underbarrel', pts:20, unlockLevel:2 },
      'Ribbed Vertical':      { name:'Ribbed Vertical',    type:'Underbarrel', pts:20, unlockLevel:6 },
      'PTT Grip Pod':         { name:'PTT Grip Pod',       type:'Underbarrel', pts:20, unlockLevel:8 },
      'Classic Vertical':     { name:'Classic Vertical',   type:'Underbarrel', pts:35, unlockLevel:14 },
      'Folding Stubby':       { name:'Folding Stubby',     type:'Underbarrel', pts:20, unlockLevel:16 },
      '6H64 Vertical':        { name:'6H64 Vertical',      type:'Underbarrel', pts:25, unlockLevel:18 },
      'Adjustable Angled':    { name:'Adjustable Angled',  type:'Underbarrel', pts:15, unlockLevel:21 },
      'Slim Angled':          { name:'Slim Angled',        type:'Underbarrel', pts:25, unlockLevel:23 },
      'Ribbed Stubby':        { name:'Ribbed Stubby',      type:'Underbarrel', pts:30, unlockLevel:25 },
      'Canted Stubby':        { name:'Canted Stubby',      type:'Underbarrel', pts:30, unlockLevel:27 },
      'Full Angled':          { name:'Full Angled',        type:'Underbarrel', pts:25, unlockLevel:29 },
      'QD Grip Pod':          { name:'QD Grip Pod',        type:'Underbarrel', pts:30, unlockLevel:31 },
      'Classic Grip Pod':     { name:'Classic Grip Pod',   type:'Underbarrel', pts:30, unlockLevel:34 },
      'Bipod':                { name:'Bipod',              type:'Underbarrel', pts:10, unlockLevel:34 },
      'Stippled Stubby':      { name:'Stippled Stubby',    type:'Underbarrel', pts:35, unlockLevel:37 },
      'Low-Profile Stubby':   { name:'Low-Profile Stubby', type:'Underbarrel', pts:45, unlockLevel:39 },

      // Magazines
      '20RND Magazine':       { name:'20RND Magazine',   type:'Magazine', pts:5,  unlockLevel:0 },
      '10RND Magazine':       { name:'10RND Magazine',   type:'Magazine', pts:5,  unlockLevel:15 },
      '20RND Fast Mag':       { name:'20RND Fast Mag',   type:'Magazine', pts:10, unlockLevel:24 },
      '25RND Magazine':       { name:'25RND Magazine',   type:'Magazine', pts:15, unlockLevel:29 },

      // Ergonomics
      'None–Ergonomics':      { name:'None',            type:'Ergonomics', pts:0,  unlockLevel:0 },
      'Magwell Flare':        { name:'Magwell Flare',   type:'Ergonomics', pts:10, unlockLevel:0 },
      'Match Trigger':        { name:'Match Trigger',   type:'Ergonomics', pts:15, unlockLevel:3 },

      // Ammunition
      'FMJ':                  { name:'FMJ',            type:'Ammunition', pts:5,  unlockLevel:0 },
      'Tungsten Core':        { name:'Tungsten Core',  type:'Ammunition', pts:5,  unlockLevel:9 },
      'Polymer Case':         { name:'Polymer Case',   type:'Ammunition', pts:10, unlockLevel:16 },
      'Hollow Point':         { name:'Hollow Point',   type:'Ammunition', pts:20, unlockLevel:25 },
      'Frangible':            { name:'Frangible',      type:'Ammunition', pts:20, unlockLevel:35 },
    }
  };
  target['GRT-BC'] = {
    attachments: {
      // Scopes
      'Iron Sights':      { name:'Iron Sights',      type:'Scope', pts:5,  unlockLevel:0 },
      'RO-M 1.75x':       { name:'RO-M 1.75x',       type:'Scope', pts:10, unlockLevel:0 },
      'SDO 3.50x':        { name:'SDO 3.50x',        type:'Scope', pts:10, unlockLevel:1 },
      'Mini Flex 1.00x':  { name:'Mini Flex 1.00x',  type:'Scope', pts:10, unlockLevel:2 },
      'BF-2M 2.50x':      { name:'BF-2M 2.50x',      type:'Scope', pts:10, unlockLevel:3 },
      '2PRO 1.25x':       { name:'2PRO 1.25x',       type:'Scope', pts:10, unlockLevel:5 },
      'LDS 4.50x':        { name:'LDS 4.50x',        type:'Scope', pts:10, unlockLevel:6 },
      'ROX 1.50x':        { name:'ROX 1.50x',        type:'Scope', pts:10, unlockLevel:7 },
      'CCO 2.00x':        { name:'CCO 2.00x',        type:'Scope', pts:10, unlockLevel:9 },
      'PVQ-31 4.00x':     { name:'PVQ-31 4.00x',     type:'Scope', pts:10, unlockLevel:11 },
      'CQ RDS 1.25x':     { name:'CQ RDS 1.25x',     type:'Scope', pts:10, unlockLevel:13 },
      'SU-231 1.50x':     { name:'SU-231 1.50x',     type:'Scope', pts:10, unlockLevel:16 },
      'ST Prisim 5.00x':  { name:'ST Prisim 5.00x',  type:'Scope', pts:10, unlockLevel:18 },
      'A-P2 1.75x':       { name:'A-P2 1.75x',       type:'Scope', pts:10, unlockLevel:21 },
      'Baker 3.00x':      { name:'Baker 3.00x',      type:'Scope', pts:10, unlockLevel:23 },
      'R-MR 1.00x':       { name:'R-MR 1.00x',       type:'Scope', pts:10, unlockLevel:25 },
      'Grim 1.50x':       { name:'Grim 1.50x',       type:'Scope', pts:25, unlockLevel:27 },
      'R4T 2.00x':        { name:'R4T 2.00x',        type:'Scope', pts:10, unlockLevel:29 },
      'RO-S 1.25x':       { name:'RO-S 1.25x',       type:'Scope', pts:10, unlockLevel:31 },
      'OSA-7 1.00x':      { name:'OSA-7 1.00x',      type:'Scope', pts:10, unlockLevel:33 },
      '1P87 1.50x':       { name:'1P87 1.50x',       type:'Scope', pts:10, unlockLevel:35 },
      'PAS-35 3.00x':     { name:'PAS-35 3.00x',     type:'Scope', pts:25, unlockLevel:36 },
      'Mars-F LPVO':      { name:'Mars-F LPVO',      type:'Scope', pts:25, unlockLevel:37 },
      'SF-G2 5.00x':      { name:'SF-G2 5.00x',      type:'Scope', pts:10, unlockLevel:38 },
      '3VZR 1.75x':       { name:'3VZR 1.75x',       type:'Scope', pts:10, unlockLevel:40 },
      // Season 1 Hardware 1
      'SU-230 LPVO':      { name:'SU-230 LPVO',      type:'Scope', pts:20, unlockLevel:0 },

      // Optic Accessories
      'None–Optic Accessory': { name:'None',               type:'Optic Accessory', pts:0,  unlockLevel:0 },
      'Canted Iron Sights':   { name:'Canted Iron Sights', type:'Optic Accessory', pts:5,  unlockLevel:10 },
      'Canted Reflex':        { name:'Canted Reflex',      type:'Optic Accessory', pts:10, unlockLevel:20 },
      'Piggyback Reflex':     { name:'Piggyback Reflex',   type:'Optic Accessory', pts:10, unlockLevel:30 },

      // Right Accessories
      'None–Right Accessory':      { name:'None',                    type:'Right Accessory', pts:0,  unlockLevel:0 },
      '5 MW Red':                  { name:'5 MW Red',                type:'Right Accessory', pts:10, unlockLevel:5 },
      'Flashlight':                { name:'Flashlight',              type:'Right Accessory', pts:10, unlockLevel:8 },
      '5 MW Green':                { name:'5 MW Green',              type:'Right Accessory', pts:10, unlockLevel:12 },
      'Laser/Light Combo Red':     { name:'Laser/Light Combo Red',   type:'Right Accessory', pts:20, unlockLevel:15 },
      '50 MW Green':               { name:'50 MW Green',             type:'Right Accessory', pts:20, unlockLevel:19 },
      '50 MW Blue':                { name:'50 MW Blue',              type:'Right Accessory', pts:20, unlockLevel:26 },
      'Laser/Light Combo Green':   { name:'Laser/Light Combo Green', type:'Right Accessory', pts:20, unlockLevel:28 },
      '120 MW Blue':               { name:'120 MW Blue',             type:'Right Accessory', pts:30, unlockLevel:33 },

      // Muzzles
      'None–Muzzle':          { name:'None',                 type:'Muzzle', pts:0,  unlockLevel:0 },
      'Flash Hider':          { name:'Flash Hider',          type:'Muzzle', pts:10, unlockLevel:0 },
      'Single-Port Brake':    { name:'Single-Port Brake',    type:'Muzzle', pts:5,  unlockLevel:2 },
      'Linear Comp':          { name:'Linear Comp',          type:'Muzzle', pts:10, unlockLevel:7 },
      'Double-Port Brake':    { name:'Double-Port Brake',    type:'Muzzle', pts:10, unlockLevel:14 },
      'Compensated Brake':    { name:'Compensated Brake',    type:'Muzzle', pts:20, unlockLevel:18 },
      'Standard Suppressor':  { name:'Standard Suppressor',  type:'Muzzle', pts:20, unlockLevel:23 },
      'Long Suppressor':      { name:'Long Suppressor',      type:'Muzzle', pts:25, unlockLevel:28 },
      'CQB Suppressor':       { name:'CQB Suppressor',       type:'Muzzle', pts:30, unlockLevel:32 },
      'Lightened Suppressor': { name:'Lightened Suppressor', type:'Muzzle', pts:30, unlockLevel:39 },

      // Barrels
      '10" Factory':          { name:'10" Factory',   type:'Barrel', pts:20, unlockLevel:0 },
      '10" Full':             { name:'10" Full',      type:'Barrel', pts:10, unlockLevel:4 },
      '14.5" Alt':            { name:'14.5" Alt',     type:'Barrel', pts:15, unlockLevel:16 },

      // Underbarrels
      'None–Underbarrel':     { name:'None',               type:'Underbarrel', pts:0,  unlockLevel:0 },
      'Folding Vertical':     { name:'Folding Vertical',   type:'Underbarrel', pts:10, unlockLevel:1 },
      'Ribbed Vertical':      { name:'Ribbed Vertical',    type:'Underbarrel', pts:20, unlockLevel:3 },
      'Alloy Vertical':       { name:'Alloy Vertical',     type:'Underbarrel', pts:20, unlockLevel:9 },
      'Folding Stubby':       { name:'Folding Stubby',     type:'Underbarrel', pts:20, unlockLevel:13 },
      '6H64 Vertical':        { name:'6H64 Vertical',      type:'Underbarrel', pts:25, unlockLevel:17 },
      'Compact Handstop':     { name:'Compact Handstop',   type:'Underbarrel', pts:10, unlockLevel:19 },
      'Ribbed Stubby':        { name:'Ribbed Stubby',      type:'Underbarrel', pts:30, unlockLevel:21 },
      'Canted Stubby':        { name:'Canted Stubby',      type:'Underbarrel', pts:30, unlockLevel:25 },
      'Classic Vertical':     { name:'Classic Vertical',   type:'Underbarrel', pts:35, unlockLevel:29 },
      'Stippled Stubby':      { name:'Stippled Stubby',    type:'Underbarrel', pts:35, unlockLevel:34 },
      'Low-Profile Stubby':   { name:'Low-Profile Stubby', type:'Underbarrel', pts:45, unlockLevel:38 },

      // Magazines
      '30RND Magazine':       { name:'30RND Magazine',   type:'Magazine', pts:5,  unlockLevel:0 },
      '30RND Fast Mag':       { name:'30RND Fast Mag',   type:'Magazine', pts:10, unlockLevel:8 },
      '36RND Magazine':       { name:'36RND Magazine',   type:'Magazine', pts:15, unlockLevel:15 },
      '45RND Magazine':       { name:'45RND Magazine',   type:'Magazine', pts:35, unlockLevel:24 },
      '45RND Fast Mag':       { name:'45RND Fast Mag',   type:'Magazine', pts:40, unlockLevel:37 },

      // Ergonomics
      'None–Ergonomics':      { name:'None',            type:'Ergonomics', pts:0,  unlockLevel:0 },
      'Improved Mag Catch':   { name:'Improved Mag Catch', type:'Ergonomics', pts:5,  unlockLevel:6 },
      'Match Trigger':        { name:'Match Trigger',   type:'Ergonomics', pts:15, unlockLevel:27 },

      // Ammunition
      'FMJ':                  { name:'FMJ',            type:'Ammunition', pts:5,  unlockLevel:0 },
      'Tungsten Core':        { name:'Tungsten Core',  type:'Ammunition', pts:5,  unlockLevel:11 },
      'Polymer Case':         { name:'Polymer Case',   type:'Ammunition', pts:10, unlockLevel:22 },
      'Hollow Point':         { name:'Hollow Point',   type:'Ammunition', pts:20, unlockLevel:31 },
      'Frangible':            { name:'Frangible',      type:'Ammunition', pts:20, unlockLevel:35 },
    }
  };
  target['QBZ-192'] = {
    attachments: {
      // Scopes
      'Iron Sights':     { name:'Iron Sights',     type:'Scope', pts:5,  unlockLevel:0 },
      'CCO 2.00x':       { name:'CCO 2.00x',       type:'Scope', pts:10, unlockLevel:0 },
      'Mini Flex 1.00x': { name:'Mini Flex 1.00x', type:'Scope', pts:10, unlockLevel:1 },
      'Baker 3.00x':     { name:'Baker 3.00x',     type:'Scope', pts:10, unlockLevel:2 },
      'RO-M 1.75x':      { name:'RO-M 1.75x',      type:'Scope', pts:10, unlockLevel:3 },
      'OSA-7 1.00x':     { name:'OSA-7 1.00x',     type:'Scope', pts:10, unlockLevel:5 },
      'PVQ-31 4.00x':    { name:'PVQ-31 4.00x',    type:'Scope', pts:10, unlockLevel:6 },
      'ROX 1.50x':       { name:'ROX 1.50x',       type:'Scope', pts:10, unlockLevel:7 },
      'SU-231 1.50x':    { name:'SU-231 1.50x',    type:'Scope', pts:10, unlockLevel:9 },
      'CQ RDS 1.25x':    { name:'CQ RDS 1.25x',    type:'Scope', pts:10, unlockLevel:11 },
      'LDS 4.50x':       { name:'LDS 4.50x',       type:'Scope', pts:10, unlockLevel:12 },
      'R4T 2.00x':       { name:'R4T 2.00x',       type:'Scope', pts:10, unlockLevel:13 },
      'Grim 1.50x':      { name:'Grim 1.50x',      type:'Scope', pts:25, unlockLevel:15 },
      'ST Prisim 5.00x': { name:'ST Prisim 5.00x', type:'Scope', pts:10, unlockLevel:17 },
      'R-MR 1.00x':      { name:'R-MR 1.00x',      type:'Scope', pts:10, unlockLevel:19 },
      'BF-2M 2.50x':     { name:'BF-2M 2.50x',     type:'Scope', pts:10, unlockLevel:21 },
      '3VZR 1.75x':      { name:'3VZR 1.75x',      type:'Scope', pts:10, unlockLevel:23 },
      'Mars-F LPVO':     { name:'Mars-F LPVO',     type:'Scope', pts:25, unlockLevel:25 },
      '2PRO 1.25x':      { name:'2PRO 1.25x',      type:'Scope', pts:10, unlockLevel:27 },
      'A-P2 1.75x':      { name:'A-P2 1.75x',      type:'Scope', pts:10, unlockLevel:29 },
      'PAS-35 3.00x':    { name:'PAS-35 3.00x',    type:'Scope', pts:25, unlockLevel:32 },
      'RO-S 1.25x':      { name:'RO-S 1.25x',      type:'Scope', pts:10, unlockLevel:35 },
      'SDO 3.50x':       { name:'SDO 3.50x',       type:'Scope', pts:10, unlockLevel:37 },
      '1P87 1.50x':      { name:'1P87 1.50x',      type:'Scope', pts:10, unlockLevel:39 },

      // Season 1 Hardware 1
      'SU-230 LPVO':     { name:'SU-230 LPVO',     type:'Scope', pts:20, unlockLevel:0 },

      // Optic Accessories
      'None–Optic Accessory': { name:'None',               type:'Optic Accessory', pts:0,  unlockLevel:0 },
      'Canted Iron Sights':   { name:'Canted Iron Sights', type:'Optic Accessory', pts:5,  unlockLevel:10 },
      'Canted Reflex':        { name:'Canted Reflex',      type:'Optic Accessory', pts:10, unlockLevel:20 },
      'Piggyback Reflex':     { name:'Piggyback Reflex',   type:'Optic Accessory', pts:10, unlockLevel:30 },

      // Top Accessories
      'None–Top Accessory': { name:'None',            type:'Top Accessory', pts:0,  unlockLevel:0 },
      '5 MW Red':           { name:'5 MW Red',        type:'Top Accessory', pts:10, unlockLevel:5 },
      '5 MW Green':         { name:'5 MW Green',      type:'Top Accessory', pts:10, unlockLevel:12 },
      '50 MW Green':        { name:'50 MW Green',     type:'Top Accessory', pts:20, unlockLevel:19 },
      '50 MW Blue':         { name:'50 MW Blue',      type:'Top Accessory', pts:20, unlockLevel:26 },
      '120 MW Blue':        { name:'120 MW Blue',     type:'Top Accessory', pts:30, unlockLevel:33 },

      // Right Accessories
      'None–Right Accessory': { name:'None',        type:'Right Accessory', pts:0,  unlockLevel:0 },
      'Flashlight':           { name:'Flashlight',  type:'Right Accessory', pts:10, unlockLevel:8 },

      // Muzzles
      'None–Muzzle':        { name:'None',               type:'Muzzle', pts:0,  unlockLevel:0 },
      'Flash Hider':        { name:'Flash Hider',        type:'Muzzle', pts:10, unlockLevel:0 },
      'Linear Comp':        { name:'Linear Comp',        type:'Muzzle', pts:10, unlockLevel:2 },
      'Standard Suppressor':{ name:'Standard Suppressor',type:'Muzzle', pts:20, unlockLevel:17 },

      // Barrels
      '10.5" Factory':      { name:'10.5" Factory',  type:'Barrel', pts:10, unlockLevel:0 },
      '14.5" Common':       { name:'14.5" Common',   type:'Barrel', pts:10, unlockLevel:16 },

      // Underbarrels
      'None–Underbarrel':   { name:'None',               type:'Underbarrel', pts:0,  unlockLevel:0 },
      'PTT Grip Pod':       { name:'PTT Grip Pod',       type:'Underbarrel', pts:20, unlockLevel:0 },
      'Folding Vertical':   { name:'Folding Vertical',   type:'Underbarrel', pts:10, unlockLevel:1 },
      'Alloy Vertical':     { name:'Alloy Vertical',     type:'Underbarrel', pts:20, unlockLevel:3 },
      'Ribbed Vertical':    { name:'Ribbed Vertical',    type:'Underbarrel', pts:20, unlockLevel:6 },
      'Folding Stubby':     { name:'Folding Stubby',     type:'Underbarrel', pts:20, unlockLevel:9 },
      '6H64 Vertical':      { name:'6H64 Vertical',      type:'Underbarrel', pts:25, unlockLevel:13 },
      'Adjustable Angled':  { name:'Adjustable Angled',  type:'Underbarrel', pts:15, unlockLevel:15 },
      'Slim Angled':        { name:'Slim Angled',        type:'Underbarrel', pts:25, unlockLevel:18 },
      'Ribbed Stubby':      { name:'Ribbed Stubby',      type:'Underbarrel', pts:30, unlockLevel:21 },
      'Canted Stubby':      { name:'Canted Stubby',      type:'Underbarrel', pts:30, unlockLevel:23 },
      'Full Angled':        { name:'Full Angled',        type:'Underbarrel', pts:25, unlockLevel:25 },
      'QD Grip Pod':        { name:'QD Grip Pod',        type:'Underbarrel', pts:30, unlockLevel:28 },
      'Classic Grip Pod':   { name:'Classic Grip Pod',   type:'Underbarrel', pts:30, unlockLevel:31 },
      'Classic Vertical':   { name:'Classic Vertical',   type:'Underbarrel', pts:35, unlockLevel:34 },
      'Stippled Stubby':    { name:'Stippled Stubby',    type:'Underbarrel', pts:35, unlockLevel:36 },
      'Low-Profile Stubby': { name:'Low-Profile Stubby', type:'Underbarrel', pts:45, unlockLevel:39 },

      // Magazines
      '30RND Magazine':     { name:'30RND Magazine',   type:'Magazine', pts:5,  unlockLevel:0 },
      '30RND Fast Mag':     { name:'30RND Fast Mag',   type:'Magazine', pts:10, unlockLevel:7 },
      '36RND Magazine':     { name:'36RND Magazine',   type:'Magazine', pts:15, unlockLevel:24 },
      '40RND Magazine':     { name:'40RND Magazine',   type:'Magazine', pts:25, unlockLevel:35 },

      // Ergonomics
      'None–Ergonomics':    { name:'None',           type:'Ergonomics', pts:0,  unlockLevel:0 },
      'Match Trigger':      { name:'Match Trigger',  type:'Ergonomics', pts:15, unlockLevel:27 },

      // Ammunition
      'FMJ':                { name:'FMJ',            type:'Ammunition', pts:5,  unlockLevel:0 },
      'Tungsten Core':      { name:'Tungsten Core',  type:'Ammunition', pts:5,  unlockLevel:4 },
      'Polymer Case':       { name:'Polymer Case',   type:'Ammunition', pts:10, unlockLevel:14 },
      'Hollow Point':       { name:'Hollow Point',   type:'Ammunition', pts:20, unlockLevel:22 },
      'Frangible':          { name:'Frangible',      type:'Ammunition', pts:20, unlockLevel:29 },
      'Synthetic Tip':      { name:'Synthetic Tip',  type:'Ammunition', pts:30, unlockLevel:38 },
    }
  };
  target['SG 553R'] = {
    attachments: {
      // Scopes
      'Iron Sights':     { name:'Iron Sights',     type:'Scope', pts:5,  unlockLevel:0 },
      '3VZR 1.75x':      { name:'3VZR 1.75x',      type:'Scope', pts:10, unlockLevel:0 },
      'Baker 3.00x':     { name:'Baker 3.00x',     type:'Scope', pts:10, unlockLevel:1 },
      'Mini Flex 1.00x': { name:'Mini Flex 1.00x', type:'Scope', pts:10, unlockLevel:2 },
      'CCO 2.00x':       { name:'CCO 2.00x',       type:'Scope', pts:10, unlockLevel:3 },
      'PVQ-31 4.00x':    { name:'PVQ-31 4.00x',    type:'Scope', pts:10, unlockLevel:6 },
      '2PRO 1.25x':      { name:'2PRO 1.25x',      type:'Scope', pts:10, unlockLevel:9 },
      'A-P2 1.75x':      { name:'A-P2 1.75x',      type:'Scope', pts:10, unlockLevel:11 },
      'LDS 4.50x':       { name:'LDS 4.50x',       type:'Scope', pts:10, unlockLevel:13 },
      'CQ RDS 1.25x':    { name:'CQ RDS 1.25x',    type:'Scope', pts:10, unlockLevel:15 },
      'SU-231 1.50x':    { name:'SU-231 1.50x',    type:'Scope', pts:10, unlockLevel:17 },
      'Grim 1.50x':      { name:'Grim 1.50x',      type:'Scope', pts:25, unlockLevel:18 },
      'ST Prisim 5.00x': { name:'ST Prisim 5.00x', type:'Scope', pts:10, unlockLevel:21 },
      'ROX 1.50x':       { name:'ROX 1.50x',       type:'Scope', pts:10, unlockLevel:22 },
      'R4T 2.00x':       { name:'R4T 2.00x',       type:'Scope', pts:10, unlockLevel:25 },
      'OSA-7 1.00x':     { name:'OSA-7 1.00x',     type:'Scope', pts:10, unlockLevel:26 },
      'SDO 3.50x':       { name:'SDO 3.50x',       type:'Scope', pts:10, unlockLevel:28 },
      'Mars-F LPVO':     { name:'Mars-F LPVO',     type:'Scope', pts:25, unlockLevel:29 },
      '1P87 1.50x':      { name:'1P87 1.50x',      type:'Scope', pts:10, unlockLevel:32 },
      'BF-2M 2.50x':     { name:'BF-2M 2.50x',     type:'Scope', pts:10, unlockLevel:34 },
      'RO-M 1.75x':      { name:'RO-M 1.75x',      type:'Scope', pts:10, unlockLevel:35 },
      'PAS-35 3.00x':    { name:'PAS-35 3.00x',    type:'Scope', pts:25, unlockLevel:36 },
      'R-MR 1.00x':      { name:'R-MR 1.00x',      type:'Scope', pts:10, unlockLevel:37 },
      'SF-G2 5.00x':     { name:'SF-G2 5.00x',     type:'Scope', pts:10, unlockLevel:38 },
      'RO-S 1.25x':      { name:'RO-S 1.25x',      type:'Scope', pts:10, unlockLevel:39 },

      // Season 1 Hardware 1
      'SU-230 LPVO':     { name:'SU-230 LPVO',     type:'Scope', pts:20, unlockLevel:0 },

      // Optic Accessories
      'None–Optic Accessory': { name:'None',               type:'Optic Accessory', pts:0,  unlockLevel:0 },
      'Canted Iron Sights':   { name:'Canted Iron Sights', type:'Optic Accessory', pts:5,  unlockLevel:10 },
      'Canted Reflex':        { name:'Canted Reflex',      type:'Optic Accessory', pts:10, unlockLevel:20 },
      'Piggyback Reflex':     { name:'Piggyback Reflex',   type:'Optic Accessory', pts:10, unlockLevel:30 },

      // Right Accessories
      'None–Right Accessory': { name:'None',          type:'Right Accessory', pts:0,  unlockLevel:0 },
      '5 MW Red':             { name:'5 MW Red',      type:'Right Accessory', pts:10, unlockLevel:5 },
      '5 MW Green':           { name:'5 MW Green',    type:'Right Accessory', pts:10, unlockLevel:12 },
      '50 MW Green':          { name:'50 MW Green',   type:'Right Accessory', pts:20, unlockLevel:19 },
      '50 MW Blue':           { name:'50 MW Blue',    type:'Right Accessory', pts:20, unlockLevel:26 },
      '120 MW Blue':          { name:'120 MW Blue',   type:'Right Accessory', pts:30, unlockLevel:33 },

      // Left Accessories
      'None–Left Accessory':  { name:'None',        type:'Left Accessory', pts:0,  unlockLevel:0 },
      'Flashlight':           { name:'Flashlight',  type:'Left Accessory', pts:10, unlockLevel:8 },

      // Muzzles
      'None–Muzzle':          { name:'None',               type:'Muzzle', pts:0,  unlockLevel:0 },
      'Flash Hider':          { name:'Flash Hider',        type:'Muzzle', pts:10, unlockLevel:0 },
      'Linear Comp':          { name:'Linear Comp',        type:'Muzzle', pts:10, unlockLevel:0 },
      'Double-Port Brake':    { name:'Double-Port Brake',  type:'Muzzle', pts:10, unlockLevel:9 },
      'Compensated Brake':    { name:'Compensated Brake',  type:'Muzzle', pts:20, unlockLevel:14 },
      'Single-Port Brake':    { name:'Single-Port Brake',  type:'Muzzle', pts:5,  unlockLevel:16 },
      'Standard Suppressor':  { name:'Standard Suppressor',type:'Muzzle', pts:20, unlockLevel:23 },
      'Long Suppressor':      { name:'Long Suppressor',    type:'Muzzle', pts:25, unlockLevel:28 },
      'CQB Suppressor':       { name:'CQB Suppressor',     type:'Muzzle', pts:30, unlockLevel:32 },
      'Lightened Suppressor': { name:'Lightened Suppressor',type:'Muzzle',pts:30, unlockLevel:38 },

      // Barrels
      '240mm SB':        { name:'240mm SB',       type:'Barrel', pts:10, unlockLevel:0 },
      '303mm LB':        { name:'303mm LB',       type:'Barrel', pts:15, unlockLevel:2 },
      '240mm Fluted':    { name:'240mm Fluted',   type:'Barrel', pts:20, unlockLevel:24 },

      // Underbarrels
      'None–Underbarrel':   { name:'None',             type:'Underbarrel', pts:0,  unlockLevel:0 },
      'Folding Vertical':   { name:'Folding Vertical', type:'Underbarrel', pts:10, unlockLevel:1 },
      'Alloy Vertical':     { name:'Alloy Vertical',   type:'Underbarrel', pts:20, unlockLevel:4 },
      'Ribbed Vertical':    { name:'Ribbed Vertical',  type:'Underbarrel', pts:20, unlockLevel:7 },
      'Folding Stubby':     { name:'Folding Stubby',   type:'Underbarrel', pts:20, unlockLevel:11 },
      '6H64 Vertical':      { name:'6H64 Vertical',    type:'Underbarrel', pts:25, unlockLevel:14 },
      'Slim Angled':        { name:'Slim Angled',      type:'Underbarrel', pts:25, unlockLevel:17 },
      'Ribbed Stubby':      { name:'Ribbed Stubby',    type:'Underbarrel', pts:30, unlockLevel:21 },
      'Canted Stubby':      { name:'Canted Stubby',    type:'Underbarrel', pts:30, unlockLevel:24 },
      'Full Angled':        { name:'Full Angled',      type:'Underbarrel', pts:25, unlockLevel:27 },
      'Classic Vertical':   { name:'Classic Vertical', type:'Underbarrel', pts:35, unlockLevel:31 },
      'Stippled Stubby':    { name:'Stippled Stubby',  type:'Underbarrel', pts:35, unlockLevel:35 },
      'Low-Profile Stubby': { name:'Low-Profile Stubby',type:'Underbarrel',pts:45, unlockLevel:40 },

      // Magazines
      '30RND Magazine':    { name:'30RND Magazine',   type:'Magazine', pts:5,  unlockLevel:0 },
      '20RND Fast Mag':    { name:'20RND Fast Mag',   type:'Magazine', pts:5,  unlockLevel:7 },
      '20RND Magazine':    { name:'20RND Magazine',   type:'Magazine', pts:5,  unlockLevel:15 },
      '30RND Fast Mag':    { name:'30RND Fast Mag',   type:'Magazine', pts:10, unlockLevel:22 },
      '36RND Magazine':    { name:'36RND Magazine',   type:'Magazine', pts:15, unlockLevel:29 },
      '40RND Magazine':    { name:'40RND Magazine',   type:'Magazine', pts:25, unlockLevel:34 },
      '40RND Fast Mag':    { name:'40RND Fast Mag',   type:'Magazine', pts:30, unlockLevel:39 },

      // Ergonomics
      'None–Ergonomics':   { name:'None',           type:'Ergonomics', pts:0,  unlockLevel:0 },
      'Improved Mag Catch':{ name:'Improved Mag Catch', type:'Ergonomics', pts:5,  unlockLevel:3 },
      'Match Trigger':     { name:'Match Trigger',  type:'Ergonomics', pts:15, unlockLevel:31 },

      // Ammunition
      'FMJ':               { name:'FMJ',           type:'Ammunition', pts:5,  unlockLevel:0 },
      'Tungsten Core':     { name:'Tungsten Core', type:'Ammunition', pts:5,  unlockLevel:6 },
      'Polymer Case':      { name:'Polymer Case',  type:'Ammunition', pts:10, unlockLevel:13 },
      'Hollow Point':      { name:'Hollow Point',  type:'Ammunition', pts:20, unlockLevel:25 },
      'Frangible':         { name:'Frangible',     type:'Ammunition', pts:20, unlockLevel:37 },
    }
  };
  target['SOR-300SC'] = {
    attachments: {
      // Scopes
      'Iron Sights':      { name:'Iron Sights',      type:'Scope', pts:5,  unlockLevel:0 },
      'CCO 2.00x':        { name:'CCO 2.00x',        type:'Scope', pts:10, unlockLevel:0 },
      'Mini Flex 1.00x':  { name:'Mini Flex 1.00x',  type:'Scope', pts:10, unlockLevel:1 },
      'SDO 3.50x':        { name:'SDO 3.50x',        type:'Scope', pts:10, unlockLevel:2 },
      'RO-M 1.75x':       { name:'RO-M 1.75x',       type:'Scope', pts:10, unlockLevel:3 },
      'CQ RDS 1.25x':     { name:'CQ RDS 1.25x',     type:'Scope', pts:10, unlockLevel:5 },
      'BF-2M 2.50x':      { name:'BF-2M 2.50x',      type:'Scope', pts:10, unlockLevel:7 },
      'SU-231 1.50x':     { name:'SU-231 1.50x',     type:'Scope', pts:10, unlockLevel:9 },
      'A-P2 1.75x':       { name:'A-P2 1.75x',       type:'Scope', pts:10, unlockLevel:12 },
      'LDS 4.50x':        { name:'LDS 4.50x',        type:'Scope', pts:10, unlockLevel:13 },
      'OSA-7 1.00x':      { name:'OSA-7 1.00x',      type:'Scope', pts:10, unlockLevel:14 },
      'ROX 1.50x':        { name:'ROX 1.50x',        type:'Scope', pts:10, unlockLevel:16 },
      'NGFC LPVO':        { name:'NGFC LPVO',        type:'Scope', pts:25, unlockLevel:17 },
      'R4T 2.00x':        { name:'R4T 2.00x',        type:'Scope', pts:10, unlockLevel:19 },
      'R-MR 1.00x':       { name:'R-MR 1.00x',       type:'Scope', pts:10, unlockLevel:22 },
      'ST Prism 5.00x':   { name:'ST Prism 5.00x',   type:'Scope', pts:10, unlockLevel:23 },
      'Grim 1.50x':       { name:'Grim 1.50x',       type:'Scope', pts:25, unlockLevel:25 },
      'Baker 3.00x':      { name:'Baker 3.00x',      type:'Scope', pts:10, unlockLevel:26 },
      '3VZR 1.75x':       { name:'3VZR 1.75x',       type:'Scope', pts:10, unlockLevel:27 },
      'RO-S 1.25x':       { name:'RO-S 1.25x',       type:'Scope', pts:10, unlockLevel:29 },
      'PVQ-31 4.00x':     { name:'PVQ-31 4.00x',     type:'Scope', pts:10, unlockLevel:32 },
      '2PRO 1.25x':       { name:'2PRO 1.25x',       type:'Scope', pts:10, unlockLevel:34 },
      'PAS-35 3.00x':     { name:'PAS-35 3.00x',     type:'Scope', pts:25, unlockLevel:36 },
      '1P87 1.50x':       { name:'1P87 1.50x',       type:'Scope', pts:10, unlockLevel:38 },
      'SF-G2 5.00x':      { name:'SF-G2 5.00x',      type:'Scope', pts:10, unlockLevel:39 },

      // Season 1 Hardware 1
      'SU-230 LPVO':      { name:'SU-230 LPVO',      type:'Scope', pts:20, unlockLevel:0 },

      // Optic Accessories
      'None–Optic Accessory': { name:'None',              type:'Optic Accessory', pts:0,  unlockLevel:0 },
      'Canted Iron Sight':    { name:'Canted Iron Sight', type:'Optic Accessory', pts:5,  unlockLevel:10 },
      'Canted Reflex':        { name:'Canted Reflex',     type:'Optic Accessory', pts:10, unlockLevel:20 },
      'Piggyback Reflex':     { name:'Piggyback Reflex',  type:'Optic Accessory', pts:10, unlockLevel:30 },

      // Top Accessories
      'None–Top Accessory':   { name:'None',          type:'Top Accessory', pts:0,  unlockLevel:0 },
      '5 MW Red':             { name:'5 MW Red',      type:'Top Accessory', pts:10, unlockLevel:3 },
      '5 MW Green':           { name:'5 MW Green',    type:'Top Accessory', pts:10, unlockLevel:9 },
      '50 MW Green':          { name:'50 MW Green',   type:'Top Accessory', pts:20, unlockLevel:18 },
      '50 MW Blue':           { name:'50 MW Blue',    type:'Top Accessory', pts:20, unlockLevel:25 },
      '120 MW Blue':          { name:'120 MW Blue',   type:'Top Accessory', pts:30, unlockLevel:34 },

      // Right Accessories
      'None–Right Accessory': { name:'None',         type:'Right Accessory', pts:0,  unlockLevel:0 },
      'Flashlight':           { name:'Flashlight',   type:'Right Accessory', pts:10, unlockLevel:15 },

      // Muzzles
      'None–Muzzle':          { name:'None',               type:'Muzzle', pts:0,  unlockLevel:0 },
      'Flash Hider':          { name:'Flash Hider',        type:'Muzzle', pts:10, unlockLevel:0 },
      'Single-Port Brake':    { name:'Single-Port Brake',  type:'Muzzle', pts:5,  unlockLevel:2 },
      'Linear Comp':          { name:'Linear Comp',        type:'Muzzle', pts:10, unlockLevel:7 },
      'Double-Port Brake':    { name:'Double-Port Brake',  type:'Muzzle', pts:10, unlockLevel:12 },
      'Compensated Brake':    { name:'Compensated Brake',  type:'Muzzle', pts:20, unlockLevel:17 },
      'Standard Suppressor':  { name:'Standard Suppressor',type:'Muzzle', pts:20, unlockLevel:22 },
      'Long Suppressor':      { name:'Long Suppressor',    type:'Muzzle', pts:25, unlockLevel:27 },
      'CQB Suppressor':       { name:'CQB Suppressor',     type:'Muzzle', pts:30, unlockLevel:32 },
      'Lightened Suppressor': { name:'Lightened Suppressor',type:'Muzzle',pts:30, unlockLevel:37 },

      // Barrels
      '9" Factory':       { name:'9" Factory',      type:'Barrel', pts:10, unlockLevel:0 },
      '10.5" Custom':     { name:'10.5" Custom',    type:'Barrel', pts:15, unlockLevel:5 },
      '7.5" Custom':      { name:'7.5" Custom',     type:'Barrel', pts:15, unlockLevel:13 },
      '9" Fluted':        { name:'9" Fluted',       type:'Barrel', pts:20, unlockLevel:24 },

      // Underbarrels
      'None–Underbarrel':    { name:'None',             type:'Underbarrel', pts:0,  unlockLevel:0 },
      'Folding Vertical':    { name:'Folding Vertical', type:'Underbarrel', pts:10, unlockLevel:1 },
      'Compact Handstop':    { name:'Compact Handstop', type:'Underbarrel', pts:10, unlockLevel:4 },
      'Alloy Vertical':      { name:'Alloy Vertical',   type:'Underbarrel', pts:20, unlockLevel:6 },
      'Ribbed Vertical':     { name:'Ribbed Vertical',  type:'Underbarrel', pts:20, unlockLevel:8 },
      'Folding Stubby':      { name:'Folding Stubby',   type:'Underbarrel', pts:20, unlockLevel:11 },
      'Adjustable Angled':   { name:'Adjustable Angled',type:'Underbarrel', pts:15, unlockLevel:15 },
      '6H64 Vertical':       { name:'6H64 Vertical',    type:'Underbarrel', pts:25, unlockLevel:16 },
      'Slim Angled':         { name:'Slim Angled',      type:'Underbarrel', pts:25, unlockLevel:18 },
      'Full Angled':         { name:'Full Angled',      type:'Underbarrel', pts:25, unlockLevel:21 },
      'Ribbed Stubby':       { name:'Ribbed Stubby',    type:'Underbarrel', pts:30, unlockLevel:24 },
      'Canted Stubby':       { name:'Canted Stubby',    type:'Underbarrel', pts:30, unlockLevel:26 },
      'Classic Vertical':    { name:'Classic Vertical', type:'Underbarrel', pts:35, unlockLevel:33 },
      'Stippled Stubby':     { name:'Stippled Stubby',  type:'Underbarrel', pts:35, unlockLevel:36 },
      'Low-Profile Stubby':  { name:'Low-Profile Stubby',type:'Underbarrel',pts:45, unlockLevel:39 },

      // Magazines
      '30RND Magazine':    { name:'30RND Magazine',   type:'Magazine', pts:5,  unlockLevel:0 },
      '20RND Fast Mag':    { name:'20RND Fast Mag',   type:'Magazine', pts:5,  unlockLevel:6 },
      '20RND Magazine':    { name:'20RND Magazine',   type:'Magazine', pts:5,  unlockLevel:14 },
      '30RND Fast Mag':    { name:'30RND Fast Mag',   type:'Magazine', pts:10, unlockLevel:21 },
      '36RND Magazine':    { name:'36RND Magazine',   type:'Magazine', pts:15, unlockLevel:28 },
      '40RND Magazine':    { name:'40RND Magazine',   type:'Magazine', pts:25, unlockLevel:35 },
      '40RND Fast Mag':    { name:'40RND Fast Mag',   type:'Magazine', pts:30, unlockLevel:40 },

      // Ergonomics
      'None–Ergonomics':   { name:'None',           type:'Ergonomics', pts:0,  unlockLevel:0 },
      'Magwell Flare':     { name:'Magwell Flare',  type:'Ergonomics', pts:10, unlockLevel:19 },
      'Match Trigger':     { name:'Match Trigger',  type:'Ergonomics', pts:15, unlockLevel:29 },
      'Rail Cover':        { name:'Rail Cover',     type:'Ergonomics', pts:5,  unlockLevel:0 },

      // Ammunition
      'FMJ':               { name:'FMJ',           type:'Ammunition', pts:5,  unlockLevel:0 },
      'Tungsten Core':     { name:'Tungsten Core', type:'Ammunition', pts:5,  unlockLevel:8 },
      'Polymer Case':      { name:'Polymer Case',  type:'Ammunition', pts:10, unlockLevel:23 },
      'Frangible':         { name:'Frangible',     type:'Ammunition', pts:20, unlockLevel:31 },
      'Hollow Point':      { name:'Hollow Point',  type:'Ammunition', pts:20, unlockLevel:38 },
    }
  };


  // LMGs
  target['RPKM'] = {
    attachments: {
      // Scopes
      'Iron Sights': { name:'Iron Sights', type:'Scope', pts:5, unlockLevel:0 },
      'BF-2M 2.50x': { name:'BF-2M 2.50x', type:'Scope', pts:10, unlockLevel:0 },
      'Mini Flex 1.00x': { name:'Mini Flex 1.00x', type:'Scope', pts:10, unlockLevel:1 },
      'RO-M 1.75x': { name:'RO-M 1.75x', type:'Scope', pts:10, unlockLevel:2 },
      'SDO 3.50x': { name:'SDO 3.50x', type:'Scope', pts:10, unlockLevel:3 },
      '2PRO 1.25x': { name:'2PRO 1.25x', type:'Scope', pts:10, unlockLevel:5 },
      'ROX 1.50x': { name:'ROX 1.50x', type:'Scope', pts:10, unlockLevel:7 },
      'PVQ-31 4.00x': { name:'PVQ-31 4.00x', type:'Scope', pts:10, unlockLevel:8 },
      'CCO 2.00x': { name:'CCO 2.00x', type:'Scope', pts:10, unlockLevel:9 },
      'CQ RDS 1.25x': { name:'CQ RDS 1.25x', type:'Scope', pts:10, unlockLevel:12 },
      'ST Prisim 5.00x': { name:'ST Prisim 5.00x', type:'Scope', pts:10, unlockLevel:14 },
      'SU-231 1.50x': { name:'SU-231 1.50x', type:'Scope', pts:10, unlockLevel:15 },
      'Baker 3.00x': { name:'Baker 3.00x', type:'Scope', pts:10, unlockLevel:16 },
      'A-P2 1.75x': { name:'A-P2 1.75x', type:'Scope', pts:10, unlockLevel:17 },
      'Mars-F LPVO': { name:'Mars-F LPVO', type:'Scope', pts:25, unlockLevel:19 },
      'OSA-7 1.00x': { name:'OSA-7 1.00x', type:'Scope', pts:10, unlockLevel:22 },
      'Grim 1.50x': { name:'Grim 1.50x', type:'Scope', pts:25, unlockLevel:23 },
      'LDS 4.50x': { name:'LDS 4.50x', type:'Scope', pts:10, unlockLevel:24 },
      'R-MR 1.00x': { name:'R-MR 1.00x', type:'Scope', pts:10, unlockLevel:26 },
      '3VZR 1.75x': { name:'3VZR 1.75x', type:'Scope', pts:10, unlockLevel:28 },
      'MC-CO LPVO': { name:'MC-CO LPVO', type:'Scope', pts:25, unlockLevel:31 },
      'R4T 2.00x': { name:'R4T 2.00x', type:'Scope', pts:10, unlockLevel:33 },
      'RO-S 1.25x': { name:'RO-S 1.25x', type:'Scope', pts:10, unlockLevel:34 },
      'PAS-35 3.00x': { name:'PAS-35 3.00x', type:'Scope', pts:25, unlockLevel:36 },
      'SF-G2 5.00x': { name:'SF-G2 5.00x', type:'Scope', pts:10, unlockLevel:37 },
      '1P87 1.50x': { name:'1P87 1.50x', type:'Scope', pts:10, unlockLevel:39 },
      'DVO LPVO': { name:'DVO LPVO', type:'Scope', pts:25, unlockLevel:40 },
      'SU-230 LPVO': { name:'SU-230 LPVO', type:'Scope', pts:20, unlockLevel:'Season 1 Hardware 1' },

      // Optic Accessories
      'None–Optic Accessory': { name:'None', type:'Optic Accessory', pts:0, unlockLevel:0 },
      'Canted Iron Sights': { name:'Canted Iron Sights', type:'Optic Accessory', pts:5, unlockLevel:10 },
      'Canted Reflex': { name:'Canted Reflex', type:'Optic Accessory', pts:10, unlockLevel:20 },
      'Piggyback Reflex': { name:'Piggyback Reflex', type:'Optic Accessory', pts:10, unlockLevel:30 },

      // Right Accessories
      'None–Right Accessory': { name:'None', type:'Right Accessory', pts:0, unlockLevel:0 },
      '5 MW Red': { name:'5 MW Red', type:'Right Accessory', pts:10, unlockLevel:5 },
      '5 MW Green': { name:'5 MW Green', type:'Right Accessory', pts:10, unlockLevel:12 },
      '50 MW Green': { name:'50 MW Green', type:'Right Accessory', pts:20, unlockLevel:19 },
      '50 MW Blue': { name:'50 MW Blue', type:'Right Accessory', pts:20, unlockLevel:26 },
      '120 MW Blue': { name:'120 MW Blue', type:'Right Accessory', pts:30, unlockLevel:33 },

      // Left Accessories
      'None–Left Accessory': { name:'None', type:'Left Accessory', pts:0, unlockLevel:0 },
      'Flashlight': { name:'Flashlight', type:'Left Accessory', pts:10, unlockLevel:8 },

      // Muzzles
      'None–Muzzle': { name:'None', type:'Muzzle', pts:0, unlockLevel:0 },
      'Flash Hider': { name:'Flash Hider', type:'Muzzle', pts:10, unlockLevel:0 },
      'Slant Brake': { name:'Slant Brake', type:'Muzzle', pts:5, unlockLevel:2 },
      'Linear Comp': { name:'Linear Comp', type:'Muzzle', pts:10, unlockLevel:7 },
      'Double-Port Brake': { name:'Double-Port Brake', type:'Muzzle', pts:10, unlockLevel:13 },
      'Compensated Brake': { name:'Compensated Brake', type:'Muzzle', pts:20, unlockLevel:17 },
      'Standard Suppressor': { name:'Standard Suppressor', type:'Muzzle', pts:20, unlockLevel:22 },
      'Long Suppressor': { name:'Long Suppressor', type:'Muzzle', pts:25, unlockLevel:27 },
      'CQB Suppressor': { name:'CQB Suppressor', type:'Muzzle', pts:30, unlockLevel:31 },
      'Lightened Suppressor': { name:'Lightened Suppressor', type:'Muzzle', pts:30, unlockLevel:37 },

      // Barrels
      '590mm Factory': { name:'590mm Factory', type:'Barrel', pts:10, unlockLevel:0 },
      '521mm Boar-F': { name:'521mm Boar-F', type:'Barrel', pts:10, unlockLevel:3 },
      '521mm Boar': { name:'521mm Boar', type:'Barrel', pts:10, unlockLevel:11 },
      '600mm Tabuk': { name:'600mm Tabuk', type:'Barrel', pts:15, unlockLevel:21 },
      '419mm Boar-F': { name:'419mm Boar-F', type:'Barrel', pts:15, unlockLevel:28 },

      // Underbarrels
      'None–Underbarrel': { name:'None', type:'Underbarrel', pts:0, unlockLevel:0 },
      'Bipod': { name:'Bipod', type:'Underbarrel', pts:10, unlockLevel:0 },
      'Folding Vertical': { name:'Folding Vertical', type:'Underbarrel', pts:10, unlockLevel:1 },
      'Alloy Vertical': { name:'Alloy Vertical', type:'Underbarrel', pts:20, unlockLevel:4 },
      'Ribbed Vertical': { name:'Ribbed Vertical', type:'Underbarrel', pts:20, unlockLevel:6 },
      'Folding Stubby': { name:'Folding Stubby', type:'Underbarrel', pts:20, unlockLevel:9 },
      'PTT Grip Pod': { name:'PTT Grip Pod', type:'Underbarrel', pts:20, unlockLevel:11 },
      '6H64 Vertical': { name:'6H64 Vertical', type:'Underbarrel', pts:25, unlockLevel:13 },
      'Adjustable Angled': { name:'Adjustable Angled', type:'Underbarrel', pts:15, unlockLevel:16 },
      'Slim Angled': { name:'Slim Angled', type:'Underbarrel', pts:25, unlockLevel:18 },
      'Ribbed Stubby': { name:'Ribbed Stubby', type:'Underbarrel', pts:30, unlockLevel:21 },
      'Canted Stubby': { name:'Canted Stubby', type:'Underbarrel', pts:30, unlockLevel:23 },
      'Full Angled': { name:'Full Angled', type:'Underbarrel', pts:25, unlockLevel:25 },
      'QD Grip Pod': { name:'QD Grip Pod', type:'Underbarrel', pts:30, unlockLevel:27 },
      'Classic Vertical': { name:'Classic Vertical', type:'Underbarrel', pts:35, unlockLevel:29 },
      'Low-Profile Stubby': { name:'Low-Profile Stubby', type:'Underbarrel', pts:45, unlockLevel:32 },
      'Classic Grip Pod': { name:'Classic Grip Pod', type:'Underbarrel', pts:30, unlockLevel:30 },

      // Magazines
      '40RND Magazine': { name:'40RND Magazine', type:'Magazine', pts:5, unlockLevel:0 },
      '30RND Magazine': { name:'30RND Magazine', type:'Magazine', pts:5, unlockLevel:6 },
      '36RND Magazine': { name:'36RND Magazine', type:'Magazine', pts:5, unlockLevel:15 },
      '40RND Fast Mag': { name:'40RND Fast Mag', type:'Magazine', pts:10, unlockLevel:24 },
      '30RND Fast Mag': { name:'30RND Fast Mag', type:'Magazine', pts:10, unlockLevel:32 },
      '60RND Magazine': { name:'60RND Magazine', type:'Magazine', pts:30, unlockLevel:35 },
      '75RND Drum': { name:'75RND Drum', type:'Magazine', pts:50, unlockLevel:39 },

      // Ergonomics
      'None–Ergonomics': { name:'None', type:'Ergonomics', pts:0, unlockLevel:0 },
      'Magwell Flare': { name:'Magwell Flare', type:'Ergonomics', pts:10, unlockLevel:4 },
      'Match Trigger': { name:'Match Trigger', type:'Ergonomics', pts:15, unlockLevel:18 },

      // Ammunition
      'FMJ': { name:'FMJ', type:'Ammunition', pts:5, unlockLevel:0 },
      'Tungsten Core': { name:'Tungsten Core', type:'Ammunition', pts:5, unlockLevel:14 },
      'Polymer Case': { name:'Polymer Case', type:'Ammunition', pts:10, unlockLevel:25 },
      'Hollow Point': { name:'Hollow Point', type:'Ammunition', pts:20, unlockLevel:29 },
      'Synthetic Tip': { name:'Synthetic Tip', type:'Ammunition', pts:30, unlockLevel:38 },
    }
  };
  target['L110'] = {
    attachments: {
      // Scopes
      'Iron Sights': { name:'Iron Sights', type:'Scope', pts:5, unlockLevel:0 },
      'R4T 2.00x': { name:'R4T 2.00x', type:'Scope', pts:10, unlockLevel:0 },
      'CQ RDS 1.25x': { name:'CQ RDS 1.25x', type:'Scope', pts:10, unlockLevel:1 },
      'Baker 3.00x': { name:'Baker 3.00x', type:'Scope', pts:10, unlockLevel:2 },
      'Mini Flex 1.00x': { name:'Mini Flex 1.00x', type:'Scope', pts:10, unlockLevel:3 },
      'RO-M 1.75x': { name:'RO-M 1.75x', type:'Scope', pts:10, unlockLevel:5 },
      'PVQ-31 4.00x': { name:'PVQ-31 4.00x', type:'Scope', pts:10, unlockLevel:6 },
      '2PRO 1.25x': { name:'2PRO 1.25x', type:'Scope', pts:10, unlockLevel:7 },
      'A-P2 1.75x': { name:'A-P2 1.75x', type:'Scope', pts:10, unlockLevel:9 },
      'SDO 3.50x': { name:'SDO 3.50x', type:'Scope', pts:10, unlockLevel:11 },
      'SU-231 1.50x': { name:'SU-231 1.50x', type:'Scope', pts:10, unlockLevel:12 },
      'CCO 2.00x': { name:'CCO 2.00x', type:'Scope', pts:10, unlockLevel:13 },
      'ROX 1.50x': { name:'ROX 1.50x', type:'Scope', pts:10, unlockLevel:16 },
      'OSA-7 1.00x': { name:'OSA-7 1.00x', type:'Scope', pts:10, unlockLevel:17 },
      'Grim 1.50x': { name:'Grim 1.50x', type:'Scope', pts:25, unlockLevel:19 },
      'ST Prisim 5.00x': { name:'ST Prisim 5.00x', type:'Scope', pts:10, unlockLevel:22 },
      'RO-S 1.25x': { name:'RO-S 1.25x', type:'Scope', pts:10, unlockLevel:23 },
      'MC-CO LPVO': { name:'MC-CO LPVO', type:'Scope', pts:25, unlockLevel:25 },
      'R-MR 1.00x': { name:'R-MR 1.00x', type:'Scope', pts:10, unlockLevel:27 },
      'BF-2M 2.50x': { name:'BF-2M 2.50x', type:'Scope', pts:10, unlockLevel:29 },
      'Mars-F LPVO': { name:'Mars-F LPVO', type:'Scope', pts:25, unlockLevel:31 },
      '3VZR 1.75x': { name:'3VZR 1.75x', type:'Scope', pts:10, unlockLevel:32 },
      'LDS 4.50x': { name:'LDS 4.50x', type:'Scope', pts:10, unlockLevel:34 },
      'PAS-35 3.00x': { name:'PAS-35 3.00x', type:'Scope', pts:25, unlockLevel:36 },
      '1P87 1.50x': { name:'1P87 1.50x', type:'Scope', pts:10, unlockLevel:37 },
      'SF-G2 5.00x': { name:'SF-G2 5.00x', type:'Scope', pts:10, unlockLevel:39 },
      'DVO LPVO': { name:'DVO LPVO', type:'Scope', pts:25, unlockLevel:40 },
      'SU-230 LPVO': { name:'SU-230 LPVO', type:'Scope', pts:20, unlockLevel:'Season 1 Hardware 1' },

      // Optic Accessories
      'None–Optic Accessory': { name:'None', type:'Optic Accessory', pts:0, unlockLevel:0 },
      'Canted Iron Sights': { name:'Canted Iron Sights', type:'Optic Accessory', pts:5, unlockLevel:10 },
      'Canted Reflex': { name:'Canted Reflex', type:'Optic Accessory', pts:10, unlockLevel:20 },
      'Piggyback Reflex': { name:'Piggyback Reflex', type:'Optic Accessory', pts:10, unlockLevel:30 },

      // Right Accessories
      'None–Right Accessory': { name:'None', type:'Right Accessory', pts:0, unlockLevel:0 },
      '5 MW Green': { name:'5 MW Green', type:'Right Accessory', pts:10, unlockLevel:0 },
      '5 MW Red': { name:'5 MW Red', type:'Right Accessory', pts:10, unlockLevel:5 },
      '50 MW Green': { name:'50 MW Green', type:'Right Accessory', pts:20, unlockLevel:18 },
      '50 MW Blue': { name:'50 MW Blue', type:'Right Accessory', pts:20, unlockLevel:26 },
      '120 MW Blue': { name:'120 MW Blue', type:'Right Accessory', pts:30, unlockLevel:33 },

      // Left Accessories
      'None–Left Accessory': { name:'None', type:'Left Accessory', pts:0, unlockLevel:0 },
      'Flashlight': { name:'Flashlight', type:'Left Accessory', pts:10, unlockLevel:8 },

      // Muzzles
      'None–Muzzle': { name:'None', type:'Muzzle', pts:0, unlockLevel:0 },
      'Flash Hider': { name:'Flash Hider', type:'Muzzle', pts:10, unlockLevel:0 },
      'Single-Port Brake': { name:'Single-Port Brake', type:'Muzzle', pts:5, unlockLevel:2 },
      'Linear Comp': { name:'Linear Comp', type:'Muzzle', pts:10, unlockLevel:7 },
      'Double-Port Brake': { name:'Double-Port Brake', type:'Muzzle', pts:10, unlockLevel:13 },
      'Compensated Brake': { name:'Compensated Brake', type:'Muzzle', pts:20, unlockLevel:17 },
      'Standard Suppressor': { name:'Standard Suppressor', type:'Muzzle', pts:20, unlockLevel:23 },
      'Long Suppressor': { name:'Long Suppressor', type:'Muzzle', pts:25, unlockLevel:28 },
      'CQB Suppressor': { name:'CQB Suppressor', type:'Muzzle', pts:30, unlockLevel:34 },
      'Lightened Suppressor': { name:'Lightened Suppressor', type:'Muzzle', pts:30, unlockLevel:39 },

      // Barrels
      '394mm SB': { name:'394mm SB', type:'Barrel', pts:10, unlockLevel:0 },
      '465mm LB': { name:'465mm LB', type:'Barrel', pts:10, unlockLevel:3 },
      '349mm Fluted': { name:'349mm Fluted', type:'Barrel', pts:20, unlockLevel:37 },

      // Underbarrels
      'None–Underbarrel': { name:'None', type:'Underbarrel', pts:0, unlockLevel:0 },
      'Bipod': { name:'Bipod', type:'Underbarrel', pts:10, unlockLevel:0 },
      'Classic Grip Pod': { name:'Classic Grip Pod', type:'Underbarrel', pts:30, unlockLevel:0 },
      'Folding Vertical': { name:'Folding Vertical', type:'Underbarrel', pts:10, unlockLevel:1 },
      'Alloy Vertical': { name:'Alloy Vertical', type:'Underbarrel', pts:20, unlockLevel:4 },
      'Ribbed Vertical': { name:'Ribbed Vertical', type:'Underbarrel', pts:20, unlockLevel:6 },
      'Folding Stubby': { name:'Folding Stubby', type:'Underbarrel', pts:20, unlockLevel:9 },
      'PTT Grip Pod': { name:'PTT Grip Pod', type:'Underbarrel', pts:20, unlockLevel:11 },
      '6H64 Vertical': { name:'6H64 Vertical', type:'Underbarrel', pts:25, unlockLevel:14 },
      'Slim Angled': { name:'Slim Angled', type:'Underbarrel', pts:25, unlockLevel:16 },
      'Ribbed Stubby': { name:'Ribbed Stubby', type:'Underbarrel', pts:30, unlockLevel:18 },
      'Canted Stubby': { name:'Canted Stubby', type:'Underbarrel', pts:30, unlockLevel:21 },
      'Full Angled': { name:'Full Angled', type:'Underbarrel', pts:25, unlockLevel:24 },
      'QD Grip Pod': { name:'QD Grip Pod', type:'Underbarrel', pts:30, unlockLevel:27 },
      'Classic Vertical': { name:'Classic Vertical', type:'Underbarrel', pts:35, unlockLevel:29 },
      'Low-Profile Stubby': { name:'Low-Profile Stubby', type:'Underbarrel', pts:45, unlockLevel:32 },

      // Magazines
      '100RND Belt Pouch': { name:'100RND Belt Pouch', type:'Magazine', pts:5, unlockLevel:0 },
      '200RND Belt Box': { name:'200RND Belt Box', type:'Magazine', pts:55, unlockLevel:25 },

      // Ammunition
      'FMJ': { name:'FMJ', type:'Ammunition', pts:5, unlockLevel:0 },
      'Tungsten Core': { name:'Tungsten Core', type:'Ammunition', pts:5, unlockLevel:4 },
      'Hollow Point': { name:'Hollow Point', type:'Ammunition', pts:20, unlockLevel:15 },
      'Frangible': { name:'Frangible', type:'Ammunition', pts:20, unlockLevel:31 },
    }
  };
  target['DRS-IAR'] = {
    attachments: {
      // Scopes
      'Iron Sights': { name:'Iron Sights', type:'Scope', pts:5, unlockLevel:0 },
      'SDO 3.50x': { name:'SDO 3.50x', type:'Scope', pts:10, unlockLevel:0 },
      'Mini Flex 1.00x': { name:'Mini Flex 1.00x', type:'Scope', pts:10, unlockLevel:1 },
      'RO-M 1.75x': { name:'RO-M 1.75x', type:'Scope', pts:10, unlockLevel:2 },
      'PVQ-31 4.00x': { name:'PVQ-31 4.00x', type:'Scope', pts:10, unlockLevel:4 },
      'CCO 2.00x': { name:'CCO 2.00x', type:'Scope', pts:10, unlockLevel:6 },
      'CQ RDS 1.25x': { name:'CQ RDS 1.25x', type:'Scope', pts:10, unlockLevel:7 },
      'ROX 1.50x': { name:'ROX 1.50x', type:'Scope', pts:10, unlockLevel:9 },
      'OSA-7 1.00x': { name:'OSA-7 1.00x', type:'Scope', pts:10, unlockLevel:10 },
      'A-P2 1.75x': { name:'A-P2 1.75x', type:'Scope', pts:10, unlockLevel:14 },
      'SU-231 1.50x': { name:'SU-231 1.50x', type:'Scope', pts:10, unlockLevel:16 },
      'Baker 3.00x': { name:'Baker 3.00x', type:'Scope', pts:10, unlockLevel:17 },
      'R-MR 1.00x': { name:'R-MR 1.00x', type:'Scope', pts:10, unlockLevel:19 },
      'Grim 1.50x': { name:'Grim 1.50x', type:'Scope', pts:25, unlockLevel:22 },
      'LDS 4.50x': { name:'LDS 4.50x', type:'Scope', pts:10, unlockLevel:23 },
      '3VZR 1.75x': { name:'3VZR 1.75x', type:'Scope', pts:10, unlockLevel:24 },
      'MC-CO LPVO': { name:'MC-CO LPVO', type:'Scope', pts:25, unlockLevel:26 },
      'R4T 2.00x': { name:'R4T 2.00x', type:'Scope', pts:10, unlockLevel:27 },
      'RO-S 1.25x': { name:'RO-S 1.25x', type:'Scope', pts:10, unlockLevel:29 },
      'SF-G2 5.00x': { name:'SF-G2 5.00x', type:'Scope', pts:10, unlockLevel:30 },
      '2PRO 1.25x': { name:'2PRO 1.25x', type:'Scope', pts:10, unlockLevel:32 },
      'DVO LPVO': { name:'DVO LPVO', type:'Scope', pts:25, unlockLevel:34 },
      '1P87 1.50x': { name:'1P87 1.50x', type:'Scope', pts:10, unlockLevel:35 },
      'PAS-35 3.00x': { name:'PAS-35 3.00x', type:'Scope', pts:25, unlockLevel:36 },
      'ST PRISIM 5.00X': { name:'ST PRISIM 5.00X', type:'Scope', pts:10, unlockLevel:37 },
      'BF-2M 2.50x': { name:'BF-2M 2.50x', type:'Scope', pts:10, unlockLevel:38 },
      'Mars-F LPVO': { name:'Mars-F LPVO', type:'Scope', pts:25, unlockLevel:40 },
      'SU-230 LPVO': { name:'SU-230 LPVO', type:'Scope', pts:20, unlockLevel:'Season 1 Hardware 1' },

      // Optic Accessories
      'None–Optic Accessory': { name:'None', type:'Optic Accessory', pts:0, unlockLevel:0 },
      'Canted Iron Sights': { name:'Canted Iron Sights', type:'Optic Accessory', pts:5, unlockLevel:10 },
      'Canted Reflex': { name:'Canted Reflex', type:'Optic Accessory', pts:10, unlockLevel:20 },
      'Piggyback Reflex': { name:'Piggyback Reflex', type:'Optic Accessory', pts:10, unlockLevel:30 },

      // Top Accessories
      'None–Top Accessory': { name:'None', type:'Top Accessory', pts:0, unlockLevel:0 },
      '5 MW Red': { name:'5 MW Red', type:'Top Accessory', pts:10, unlockLevel:5 },
      '5 MW Green': { name:'5 MW Green', type:'Top Accessory', pts:10, unlockLevel:12 },
      '50 MW Green': { name:'50 MW Green', type:'Top Accessory', pts:20, unlockLevel:19 },
      '50 MW Blue': { name:'50 MW Blue', type:'Top Accessory', pts:20, unlockLevel:26 },
      '120 MW Blue': { name:'120 MW Blue', type:'Top Accessory', pts:30, unlockLevel:33 },

      // Right Accessories
      'None–Right Accessory': { name:'None', type:'Right Accessory', pts:0, unlockLevel:0 },
      'Flashlight': { name:'Flashlight', type:'Right Accessory', pts:10, unlockLevel:8 },

      // Muzzles
      'None–Muzzle': { name:'None', type:'Muzzle', pts:0, unlockLevel:0 },
      'Flash Hider': { name:'Flash Hider', type:'Muzzle', pts:10, unlockLevel:0 },
      'Single-Port Brake': { name:'Single-Port Brake', type:'Muzzle', pts:5, unlockLevel:2 },
      'Linear Comp': { name:'Linear Comp', type:'Muzzle', pts:10, unlockLevel:7 },
      'Double-Port Brake': { name:'Double-Port Brake', type:'Muzzle', pts:10, unlockLevel:13 },
      'Compensated Brake': { name:'Compensated Brake', type:'Muzzle', pts:20, unlockLevel:18 },
      'Standard Suppressor': { name:'Standard Suppressor', type:'Muzzle', pts:20, unlockLevel:24 },
      'Long Suppressor': { name:'Long Suppressor', type:'Muzzle', pts:25, unlockLevel:29 },
      'CQB Suppressor': { name:'CQB Suppressor', type:'Muzzle', pts:30, unlockLevel:34 },
      'Lightened Suppressor': { name:'Lightened Suppressor', type:'Muzzle', pts:30, unlockLevel:39 },

      // Barrels
      '16.5" LSW': { name:'16.5" LSW', type:'Barrel', pts:10, unlockLevel:0 },
      '16.5" Basic': { name:'16.5" Basic', type:'Barrel', pts:10, unlockLevel:3 },
      '20" LE': { name:'20" LE', type:'Barrel', pts:15, unlockLevel:11 },
      '20" SDM-R': { name: '20" SDM-R', type: 'Barrel', pts:10, unlockLevel: 14},
      '14.5" Carbine': { name:'14.5" Carbine', type:'Barrel', pts:15, unlockLevel:28 },
      '16.5" Fluted': { name:'16.5" Fluted', type:'Barrel', pts:20, unlockLevel:37 },

      // Underbarrels
      'None–Underbarrel': { name:'None', type:'Underbarrel', pts:0, unlockLevel:0 },
      'Bipod': { name:'Bipod', type:'Underbarrel', pts:10, unlockLevel:0 },
      'Folding Vertical': { name:'Folding Vertical', type:'Underbarrel', pts:10, unlockLevel:1 },
      'Alloy Vertical': { name:'Alloy Vertical', type:'Underbarrel', pts:20, unlockLevel:3 },
      'Ribbed Vertical': { name:'Ribbed Vertical', type:'Underbarrel', pts:20, unlockLevel:5 },
      'Folding Stubby': { name:'Folding Stubby', type:'Underbarrel', pts:20, unlockLevel:9 },
      'PTT Grip Pod': { name:'PTT Grip Pod', type:'Underbarrel', pts:20, unlockLevel:11 },
      '6H64 Vertical': { name:'6H64 Vertical', type:'Underbarrel', pts:25, unlockLevel:13 },
      'Adjustable Angled': { name:'Adjustable Angled', type:'Underbarrel', pts:15, unlockLevel:15 },
      'Slim Angled': { name:'Slim Angled', type:'Underbarrel', pts:25, unlockLevel:18 },
      'Ribbed Stubby': { name:'Ribbed Stubby', type:'Underbarrel', pts:30, unlockLevel:21 },
      'Canted Stubby': { name:'Canted Stubby', type:'Underbarrel', pts:30, unlockLevel:23 },
      'Full Angled': { name:'Full Angled', type:'Underbarrel', pts:25, unlockLevel:25 },
      'QD Grip Pod': { name:'QD Grip Pod', type:'Underbarrel', pts:30, unlockLevel:28 },
      'Classic Grip Pod': { name:'Classic Grip Pod', type:'Underbarrel', pts:30, unlockLevel:31 },
      'Classic Vertical': { name:'Classic Vertical', type:'Underbarrel', pts:35, unlockLevel:33 },
      'Stippled Stubby': { name: 'Stippled Stubby', type:'Underbarrel', pts:35, unlockLevel: 36 },
      'Low-Profile Stubby': { name:'Low-Profile Stubby', type:'Underbarrel', pts:45, unlockLevel:39 },

      // Magazines
      '30RND Magazine': { name:'30RND Magazine', type:'Magazine', pts:5, unlockLevel:0 },
      '30RND Fast Mag': { name:'30RND Fast Mag', type:'Magazine', pts:10, unlockLevel:9 },
      '36RND Magazine': { name:'36RND Magazine', type:'Magazine', pts:15, unlockLevel:12 },
      '40RND Magazine': { name:'40RND Magazine', type:'Magazine', pts:25, unlockLevel:17 },
      '40RND Fast Mag': { name:'40RND Fast Mag', type:'Magazine', pts:30, unlockLevel:22 },
      '45RND Magazine': { name:'45RND Magazine', type:'Magazine', pts:35, unlockLevel:27 },
      '45RND Fast Mag': { name:'45RND Fast Mag', type:'Magazine', pts:40, unlockLevel:31 },
      '50RND Magazine': { name:'50RND Magazine', type:'Magazine', pts:45, unlockLevel:35 },
      '60RND Magazine': { name:'60RND Magazine', type:'Magazine', pts:55, unlockLevel:40 },

      // Ergonomics
      'None–Ergonomics': { name:'None', type:'Ergonomics', pts:0, unlockLevel:0 },
      'Magwell Flare': { name:'Magwell Flare', type:'Ergonomics', pts:10, unlockLevel:4 },
      'Match Trigger': { name:'Match Trigger', type:'Ergonomics', pts:15, unlockLevel:16 },
      'Rail Cover': { name:'Rail Cover', type:'Ergonomics', pts:5, unlockLevel:'Season 1 Hardware 2' },

      // Ammunition
      'FMJ': { name:'FMJ', type:'Ammunition', pts:5, unlockLevel:0 },
      'Tungsten Core': { name:'Tungsten Core', type:'Ammunition', pts:5, unlockLevel:9 },
      'Polymer Case': { name:'Polymer Case', type:'Ammunition', pts:10, unlockLevel:15 },
      'Hollow Point': { name:'Hollow Point', type:'Ammunition', pts:20, unlockLevel:25 },
      'Frangible': { name:'Frangible', type:'Ammunition', pts:20, unlockLevel:32 },
      'Synthetic Tip': { name:'Synthetic Tip', type:'Ammunition', pts:30, unlockLevel:38 },
    }
  };
  target['M60'] = {
    attachments: {
      // Scopes
      'Iron Sights': { name:'Iron Sights', type:'Scope', pts:5, unlockLevel:0 },
      'Baker 3.00x': { name:'Baker 3.00x', type:'Scope', pts:10, unlockLevel:0 },
      'Mini Flex 1.00x': { name:'Mini Flex 1.00x', type:'Scope', pts:10, unlockLevel:1 },
      'RO-M 1.75x': { name:'RO-M 1.75x', type:'Scope', pts:10, unlockLevel:2 },
      'PVQ-31 4.00x': { name:'PVQ-31 4.00x', type:'Scope', pts:10, unlockLevel:3 },
      'CQ RDS 1.25x': { name:'CQ RDS 1.25x', type:'Scope', pts:10, unlockLevel:5 },
      'CCO 2.00x': { name:'CCO 2.00x', type:'Scope', pts:10, unlockLevel:6 },
      'SDO 3.50x': { name:'SDO 3.50x', type:'Scope', pts:10, unlockLevel:7 },
      'SU-231 1.50x': { name:'SU-231 1.50x', type:'Scope', pts:10, unlockLevel:9 },
      'BF-2M 2.50x': { name:'BF-2M 2.50x', type:'Scope', pts:10, unlockLevel:11 },
      'OSA-7 1.00x': { name:'OSA-7 1.00x', type:'Scope', pts:10, unlockLevel:12 },
      'Mars-F LPVO': { name:'Mars-F LPVO', type:'Scope', pts:25, unlockLevel:14 },
      'A-P2 1.75x': { name:'A-P2 1.75x', type:'Scope', pts:10, unlockLevel:15 },
      'ST Prisim 5.00x': { name:'ST Prisim 5.00x', type:'Scope', pts:10, unlockLevel:16 },
      'ROX 1.50x': { name:'ROX 1.50x', type:'Scope', pts:10, unlockLevel:17 },
      'R4T 2.00x': { name:'R4T 2.00x', type:'Scope', pts:10, unlockLevel:19 },
      'LDS 4.50x': { name:'LDS 4.50x', type:'Scope', pts:10, unlockLevel:21 },
      'Grim 1.50x': { name:'Grim 1.50x', type:'Scope', pts:25, unlockLevel:23 },
      'R-MR 1.00x': { name:'R-MR 1.00x', type:'Scope', pts:10, unlockLevel:25 },
      'MC-CO LPVO': { name:'MC-CO LPVO', type:'Scope', pts:25, unlockLevel:27 },
      '3VZR 1.75x': { name:'3VZR 1.75x', type:'Scope', pts:10, unlockLevel:29 },
      'SF-G2 5.00x': { name:'SF-G2 5.00x', type:'Scope', pts:10, unlockLevel:31 },
      'RO-S 1.25x': { name:'RO-S 1.25x', type:'Scope', pts:10, unlockLevel:33 },
      'PAS-35 3.00x': { name:'PAS-35 3.00x', type:'Scope', pts:25, unlockLevel:36 },
      '2PRO 1.25x': { name:'2PRO 1.25x', type:'Scope', pts:10, unlockLevel:37 },
      '1P87 1.50x': { name:'1P87 1.50x', type:'Scope', pts:10, unlockLevel:39 },
      'DVO LPVO': { name:'DVO LPVO', type:'Scope', pts:25, unlockLevel:40 },
      'SU-230 LPVO': { name:'SU-230 LPVO', type:'Scope', pts:20, unlockLevel:'Season 1 Hardware 1' },

      // Optic Accessories
      'None–Optic Accessory': { name:'None', type:'Optic Accessory', pts:0, unlockLevel:0 },
      'Canted Iron Sights': { name:'Canted Iron Sights', type:'Optic Accessory', pts:5, unlockLevel:10 },
      'Canted Reflex': { name:'Canted Reflex', type:'Optic Accessory', pts:10, unlockLevel:20 },
      'Piggyback Reflex': { name:'Piggyback Reflex', type:'Optic Accessory', pts:10, unlockLevel:30 },

      // Right Accessories
      'None–Right Accessory': { name:'None', type:'Right Accessory', pts:0, unlockLevel:0 },
      '5 MW Red': { name:'5 MW Red', type:'Right Accessory', pts:10, unlockLevel:5 },
      '5 MW Green': { name:'5 MW Green', type:'Right Accessory', pts:10, unlockLevel:12 },
      '50 MW Green': { name:'50 MW Green', type:'Right Accessory', pts:20, unlockLevel:19 },
      '50 MW Blue': { name:'50 MW Blue', type:'Right Accessory', pts:20, unlockLevel:26 },
      '120 MW Blue': { name:'120 MW Blue', type:'Right Accessory', pts:30, unlockLevel:33 },

      // Left Accessories
      'None–Left Accessory': { name:'None', type:'Left Accessory', pts:0, unlockLevel:0 },
      'Flashlight': { name:'Flashlight', type:'Left Accessory', pts:10, unlockLevel:8 },

      // Muzzles
      'None–Muzzle': { name:'None', type:'Muzzle', pts:0, unlockLevel:0 },
      'Flash Hider': { name:'Flash Hider', type:'Muzzle', pts:10, unlockLevel:0 },
      'Linear Comp': { name:'Linear Comp', type:'Muzzle', pts:10, unlockLevel:7 },
      'Double-Port Brake': { name:'Double-Port Brake', type:'Muzzle', pts:10, unlockLevel:13 },
      'Compensated Brake': { name:'Compensated Brake', type:'Muzzle', pts:20, unlockLevel:17 },
      'Standard Suppressor': { name:'Standard Suppressor', type:'Muzzle', pts:20, unlockLevel:22 },
      'Single-Port Brake': { name:'Single-Port Brake', type:'Muzzle', pts:10, unlockLevel:24 },
      'Long Suppressor': { name:'Long Suppressor', type:'Muzzle', pts:25, unlockLevel:27 },
      'CQB Suppressor': { name:'CQB Suppressor', type:'Muzzle', pts:30, unlockLevel:32 },
      'Lightened Suppressor': { name:'Lightened Suppressor', type:'Muzzle', pts:30, unlockLevel:38 },

      // Barrels
      '17" Factory': { name:'17" Factory', type:'Barrel', pts:10, unlockLevel:0 },
      '22" E3 Long': { name:'22" E3 Long', type:'Barrel', pts:10, unlockLevel:4 },
      '17" Fluted': { name:'17" Fluted', type:'Barrel', pts:20, unlockLevel:29 },

      // Underbarrels
      'None–Underbarrel': { name:'None', type:'Underbarrel', pts:0, unlockLevel:0 },
      'Bipod': { name:'Bipod', type:'Underbarrel', pts:10, unlockLevel:0 },
      'Folding Vertical': { name:'Folding Vertical', type:'Underbarrel', pts:10, unlockLevel:1 },
      'Alloy Vertical': { name:'Alloy Vertical', type:'Underbarrel', pts:20, unlockLevel:4 },
      'Ribbed Vertical': { name:'Ribbed Vertical', type:'Underbarrel', pts:20, unlockLevel:6 },
      'Folding Stubby': { name:'Folding Stubby', type:'Underbarrel', pts:20, unlockLevel:9 },
      'PTT Grip Pod': { name:'PTT Grip Pod', type:'Underbarrel', pts:20, unlockLevel:11 },
      '6H64 Vertical': { name:'6H64 Vertical', type:'Underbarrel', pts:25, unlockLevel:14 },
      'Adjustable Angled': { name:'Adjustable Angled', type:'Underbarrel', pts:15, unlockLevel:16 },
      'Slim Angled': { name:'Slim Angled', type:'Underbarrel', pts:25, unlockLevel:18 },
      'Ribbed Stubby': { name:'Ribbed Stubby', type:'Underbarrel', pts:30, unlockLevel:21 },
      'Canted Stubby': { name:'Canted Stubby', type:'Underbarrel', pts:30, unlockLevel:23 },
      'Full Angled': { name:'Full Angled', type:'Underbarrel', pts:25, unlockLevel:25 },
      'QD Grip Pod': { name:'QD Grip Pod', type:'Underbarrel', pts:30, unlockLevel:28 },
      'Classic Vertical': { name:'Classic Vertical', type:'Underbarrel', pts:35, unlockLevel:29 },
      'Low-Profile Stubby': { name:'Low-Profile Stubby', type:'Underbarrel', pts:45, unlockLevel:32 },

      // Magazines
      '100RND Belt Pouch': { name:'100RND Belt Pouch', type:'Magazine', pts:5, unlockLevel:0 },
      '50RND Loose Belt': { name:'50RND Loose Belt', type:'Magazine', pts:5, unlockLevel:5 },

      // Ammunition
      'FMJ': { name:'FMJ', type:'Ammunition', pts:5, unlockLevel:0 },
      'Tungsten Core': { name:'Tungsten Core', type:'Ammunition', pts:5, unlockLevel:3 },
      'Hollow Point': { name:'Hollow Point', type:'Ammunition', pts:20, unlockLevel:15 },
      'Frangible': { name:'Frangible', type:'Ammunition', pts:20, unlockLevel:35 },
    }
  };
  target['M123K'] = {
    attachments: {
      // Scopes
      'Iron Sights': { name:'Iron Sights', type:'Scope', pts:5, unlockLevel:0 },
      'SU-231 1.50x': { name:'SU-231 1.50x', type:'Scope', pts:10, unlockLevel:0 },
      'SDO 3.50x': { name:'SDO 3.50x', type:'Scope', pts:10, unlockLevel:1 },
      'Mini Flex 1.00x': { name:'Mini Flex 1.00x', type:'Scope', pts:10, unlockLevel:2 },
      'CCO 2.00x': { name:'CCO 2.00x', type:'Scope', pts:10, unlockLevel:3 },
      'PVQ-31 4.00x': { name:'PVQ-31 4.00x', type:'Scope', pts:10, unlockLevel:5 },
      'CQ RDS 1.25x': { name:'CQ RDS 1.25x', type:'Scope', pts:10, unlockLevel:6 },
      'RO-M 1.75x': { name:'RO-M 1.75x', type:'Scope', pts:10, unlockLevel:7 },
      'BF-2M 2.50x': { name:'BF-2M 2.50x', type:'Scope', pts:10, unlockLevel:9 },
      '2PRO 1.25x': { name:'2PRO 1.25x', type:'Scope', pts:10, unlockLevel:11 },
      'A-P2 1.75x': { name:'A-P2 1.75x', type:'Scope', pts:10, unlockLevel:12 },
      'LDS 4.50x': { name:'LDS 4.50x', type:'Scope', pts:10, unlockLevel:13 },
      'ROX 1.50x': { name:'ROX 1.50x', type:'Scope', pts:10, unlockLevel:15 },
      'Mars-F LPVO': { name:'Mars-F LPVO', type:'Scope', pts:25, unlockLevel:16 },
      'OSA-7 1.00x': { name:'OSA-7 1.00x', type:'Scope', pts:10, unlockLevel:17 },
      'Baker 3.00x': { name:'Baker 3.00x', type:'Scope', pts:10, unlockLevel:19 },
      'Grim 1.50x': { name:'Grim 1.50x', type:'Scope', pts:25, unlockLevel:21 },
      'ST Prisim 5.00x': { name:'ST Prisim 5.00x', type:'Scope', pts:10, unlockLevel:23 },
      'R-MR 1.00x': { name:'R-MR 1.00x', type:'Scope', pts:10, unlockLevel:25 },
      'R4T 2.00x': { name:'R4T 2.00x', type:'Scope', pts:10, unlockLevel:27 },
      'MC-CO LPVO': { name:'MC-CO LPVO', type:'Scope', pts:25, unlockLevel:29 },
      '1P87 1.50x': { name:'1P87 1.50x', type:'Scope', pts:10, unlockLevel:31 },
      'RO-S 1.25x': { name:'RO-S 1.25x', type:'Scope', pts:10, unlockLevel:33 },
      '3VZR 1.75x': { name:'3VZR 1.75x', type:'Scope', pts:10, unlockLevel:36 },
      'PAS-35 3.00x': { name:'PAS-35 3.00x', type:'Scope', pts:25, unlockLevel:37 },
      'SF-G2 5.00x': { name:'SF-G2 5.00x', type:'Scope', pts:10, unlockLevel:39 },
      'DVO LPVO': { name:'DVO LPVO', type:'Scope', pts:25, unlockLevel:40 },
      'SU-230 LPVO': { name:'SU-230 LPVO', type:'Scope', pts:20, unlockLevel:'Season 1 Hardware 1' },

      // Optic Accessories
      'None–Optic Accessory': { name:'None', type:'Optic Accessory', pts:0, unlockLevel:0 },
      'Canted Iron Sights': { name:'Canted Iron Sights', type:'Optic Accessory', pts:5, unlockLevel:10 },
      'Canted Reflex': { name:'Canted Reflex', type:'Optic Accessory', pts:10, unlockLevel:20 },
      'Piggyback Reflex': { name:'Piggyback Reflex', type:'Optic Accessory', pts:10, unlockLevel:30 },

      // Right Accessories
      'None–Right Accessory': { name:'None', type:'Right Accessory', pts:0, unlockLevel:0 },
      '5 MW Red': { name:'5 MW Red', type:'Right Accessory', pts:10, unlockLevel:5 },
      '5 MW Green': { name:'5 MW Green', type:'Right Accessory', pts:10, unlockLevel:12 },
      '50 MW Green': { name:'50 MW Green', type:'Right Accessory', pts:20, unlockLevel:19 },
      '50 MW Blue': { name:'50 MW Blue', type:'Right Accessory', pts:20, unlockLevel:26 },
      '120 MW Blue': { name:'120 MW Blue', type:'Right Accessory', pts:30, unlockLevel:33 },

      // Left Accessories
      'None–Left Accessory': { name:'None', type:'Left Accessory', pts:0, unlockLevel:0 },
      'Flashlight': { name:'Flashlight', type:'Left Accessory', pts:10, unlockLevel:8 },

      // Muzzles
      'None–Muzzle': { name:'None', type:'Muzzle', pts:0, unlockLevel:0 },
      'Flash Hider': { name:'Flash Hider', type:'Muzzle', pts:10, unlockLevel:0 },
      'Single-Port Brake': { name:'Single-Port Brake', type:'Muzzle', pts:5, unlockLevel:2 },
      'Linear Comp': { name:'Linear Comp', type:'Muzzle', pts:10, unlockLevel:6 },
      'Compensated Brake': { name:'Compensated Brake', type:'Muzzle', pts:20, unlockLevel:13 },
      'Standard Suppressor': { name:'Standard Suppressor', type:'Muzzle', pts:20, unlockLevel:17 },
      'Long Suppressor': { name:'Long Suppressor', type:'Muzzle', pts:25, unlockLevel:23 },
      'CQB Suppressor': { name:'CQB Suppressor', type:'Muzzle', pts:30, unlockLevel:28 },
      'Lightened Suppressor': { name:'Lightened Suppressor', type:'Muzzle', pts:30, unlockLevel:34 },

      // Barrels
      '370 mm Compact': { name:'370mm Compact', type:'Barrel', pts:15, unlockLevel:0 },
      '450 mm Standard': { name:'450mm Standard', type:'Barrel', pts:10, unlockLevel:3 },
      '612 mm VMW': { name:'612mm VMW', type:'Barrel', pts:10, unlockLevel:22 },

      // Underbarrels
      'None–Underbarrel': { name:'None', type:'Underbarrel', pts:0, unlockLevel:0 },
      'Bipod': { name:'Bipod', type:'Underbarrel', pts:10, unlockLevel:0 },
      'Folding Vertical': { name:'Folding Vertical', type:'Underbarrel', pts:10, unlockLevel:1 },
      'Alloy Vertical': { name:'Alloy Vertical', type:'Underbarrel', pts:20, unlockLevel:4 },
      'Ribbed Vertical': { name:'Ribbed Vertical', type:'Underbarrel', pts:20, unlockLevel:7 },
      'Folding Stubby': { name:'Folding Stubby', type:'Underbarrel', pts:20, unlockLevel:11 },
      'PTT Grip Pod': { name:'PTT Grip Pod', type:'Underbarrel', pts:20, unlockLevel:14 },
      '6H64 Vertical': { name:'6H64 Vertical', type:'Underbarrel', pts:25, unlockLevel:16 },
      'Ribbed Stubby': { name:'Ribbed Stubby', type:'Underbarrel', pts:30, unlockLevel:18 },
      'Canted Stubby': { name:'Canted Stubby', type:'Underbarrel', pts:30, unlockLevel:21 },
      'Full Angled': { name:'Full Angled', type:'Underbarrel', pts:25, unlockLevel:24 },
      'QD Grip Pod': { name:'QD Grip Pod', type:'Underbarrel', pts:30, unlockLevel:27 },
      'Classic Vertical': { name:'Classic Vertical', type:'Underbarrel', pts:35, unlockLevel:29 },
      'Low-Profile Stubby': { name:'Low-Profile Stubby', type:'Underbarrel', pts:45, unlockLevel:32 },

      // Magazines
      '100RND Belt Pouch': { name:'100RND Belt Pouch', type:'Magazine', pts:5, unlockLevel:0 },
      '200RND Belt Box': { name:'200RND Belt Box', type:'Magazine', pts:55, unlockLevel:15 },

      // Ammunition
      'FMJ': { name:'FMJ', type:'Ammunition', pts:5, unlockLevel:0 },
      'Tungsten Core': { name:'Tungsten Core', type:'Ammunition', pts:5, unlockLevel:9 },
      'Hollow Point': { name:'Hollow Point', type:'Ammunition', pts:20, unlockLevel:25 },
      'Frangible': { name:'Frangible', type:'Ammunition', pts:20, unlockLevel:39 },
    }
  };
  target['KTS100 MK8'] = {
    attachments: {
      // Scopes
      'Iron Sights': { name:'Iron Sights', type:'Scope', pts:5, unlockLevel:0 },
      'PVQ-31 4.00x': { name:'PVQ-31 4.00x', type:'Scope', pts:10, unlockLevel:0 },
      'Mini Flex 1.00x': { name:'Mini Flex 1.00x', type:'Scope', pts:10, unlockLevel:1 },
      'RO-M 1.75x': { name:'RO-M 1.75x', type:'Scope', pts:10, unlockLevel:2 },
      'CCO 2.00x': { name:'CCO 2.00x', type:'Scope', pts:10, unlockLevel:3 },
      'LDS 4.50x': { name:'LDS 4.50x', type:'Scope', pts:10, unlockLevel:5 },
      '2PRO 1.25x': { name:'2PRO 1.25x', type:'Scope', pts:10, unlockLevel:6 },
      'A-P2 1.75x': { name:'A-P2 1.75x', type:'Scope', pts:10, unlockLevel:7 },
      'RO-S 1.25x': { name:'RO-S 1.25x', type:'Scope', pts:10, unlockLevel:8 },
      'Baker 3.00x': { name:'Baker 3.00x', type:'Scope', pts:10, unlockLevel:9 },
      'Mars-F LPVO': { name:'Mars-F LPVO', type:'Scope', pts:25, unlockLevel:13 },
      'CQ RDS 1.25x': { name:'CQ RDS 1.25x', type:'Scope', pts:10, unlockLevel:14 },
      'BF-2M 2.50x': { name:'BF-2M 2.50x', type:'Scope', pts:10, unlockLevel:17 },
      'SU-231 1.50x': { name:'SU-231 1.50x', type:'Scope', pts:10, unlockLevel:18 },
      'R-MR 1.00x': { name:'R-MR 1.00x', type:'Scope', pts:10, unlockLevel:19 },
      'ST Prisim 5.00x': { name:'ST Prisim 5.00x', type:'Scope', pts:10, unlockLevel:22 },
      'Grim 1.50x': { name:'Grim 1.50x', type:'Scope', pts:25, unlockLevel:24 },
      'R4T 2.00x': { name:'R4T 2.00x', type:'Scope', pts:10, unlockLevel:26 },
      'ROX 1.50x': { name:'ROX 1.50x', type:'Scope', pts:10, unlockLevel:28 },
      'MC-CO LPVO': { name:'MC-CO LPVO', type:'Scope', pts:25, unlockLevel:29 },
      'OSA-7 1.00x': { name:'OSA-7 1.00x', type:'Scope', pts:10, unlockLevel:32 },
      'SDO 3.50x': { name:'SDO 3.50x', type:'Scope', pts:10, unlockLevel:33 },
      '3VZR 1.75x': { name:'3VZR 1.75x', type:'Scope', pts:10, unlockLevel:35 },
      'PAS-35 3.00x': { name:'PAS-35 3.00x', type:'Scope', pts:25, unlockLevel:36 },
      'SF-G2 5.00x': { name:'SF-G2 5.00x', type:'Scope', pts:10, unlockLevel:38 },
      '1P87 1.50x': { name:'1P87 1.50x', type:'Scope', pts:10, unlockLevel:39 },
      'DVO LPVO': { name:'DVO LPVO', type:'Scope', pts:25, unlockLevel:40 },
      'SU-230 LPVO': { name:'SU-230 LPVO', type:'Scope', pts:20, unlockLevel:'Season 1 Hardware 1' },

      // Optic Accessories
      'None–Optic Accessory': { name:'None', type:'Optic Accessory', pts:0, unlockLevel:0 },
      'Canted Iron Sights': { name:'Canted Iron Sights', type:'Optic Accessory', pts:5, unlockLevel:10 },
      'Canted Reflex': { name:'Canted Reflex', type:'Optic Accessory', pts:10, unlockLevel:20 },
      'Piggyback Reflex': { name:'Piggyback Reflex', type:'Optic Accessory', pts:10, unlockLevel:30 },

      // Right Accessories
      'None–Right Accessory': { name:'None', type:'Right Accessory', pts:0, unlockLevel:0 },
      '5 MW Red': { name:'5 MW Red', type:'Right Accessory', pts:10, unlockLevel:5 },
      'Flashlight': { name:'Flashlight', type:'Right Accessory', pts:10, unlockLevel:8 },
      '5 MW Green': { name:'5 MW Green', type:'Right Accessory', pts:10, unlockLevel:12 },
      '50 MW Green': { name:'50 MW Green', type:'Right Accessory', pts:20, unlockLevel:19 },
      'Laser/Light Combo Red': { name:'Laser/Light Combo Red', type:'Right Accessory', pts:20, unlockLevel:22 },
      '50 MW Blue': { name:'50 MW Blue', type:'Right Accessory', pts:20, unlockLevel:26 },
      '120 MW Blue': { name:'120 MW Blue', type:'Right Accessory', pts:30, unlockLevel:33 },
      'Laser/Light Combo Green': { name:'Laser/Light Combo Green', type:'Right Accessory', pts:20, unlockLevel:34 },

      // Muzzles
      'None–Muzzle': { name:'None', type:'Muzzle', pts:0, unlockLevel:0 },
      'Flash Hider': { name:'Flash Hider', type:'Muzzle', pts:10, unlockLevel:0 },
      'Single-Port Brake': { name:'Single-Port Brake', type:'Muzzle', pts:5, unlockLevel:3 },
      'Linear Comp': { name:'Linear Comp', type:'Muzzle', pts:10, unlockLevel:9 },
      'Double-Port Brake': { name:'Double-Port Brake', type:'Muzzle', pts:10, unlockLevel:13 },
      'Compensated Brake': { name:'Compensated Brake', type:'Muzzle', pts:20, unlockLevel:17 },
      'Standard Suppressor': { name:'Standard Suppressor', type:'Muzzle', pts:20, unlockLevel:23 },
      'Long Suppressor': { name:'Long Suppressor', type:'Muzzle', pts:25, unlockLevel:27 },
      'CQB Suppressor': { name:'CQB Suppressor', type:'Muzzle', pts:30, unlockLevel:32 },
      'Lightened Suppressor': { name:'Lightened Suppressor', type:'Muzzle', pts:30, unlockLevel:37 },

      // Barrels
      '508mm MK8': { name:'508mm MK8', type:'Barrel', pts:10, unlockLevel:0 },
      '457mm MK9': { name:'457mm MK9', type:'Barrel', pts:10, unlockLevel:2 },
      '330mm MK3': { name:'330mm MK3', type:'Barrel', pts:15, unlockLevel:24 },

      // Underbarrels
      'None–Underbarrel': { name:'None', type:'Underbarrel', pts:0, unlockLevel:0 },
      'QD Grip Pod': { name:'QD Grip Pod', type:'Underbarrel', pts:30, unlockLevel:0 },
      'Folding Vertical': { name:'Folding Vertical', type:'Underbarrel', pts:10, unlockLevel:1 },
      'Bipod': { name:'Bipod', type:'Underbarrel', pts:10, unlockLevel:4 },
      'Alloy Vertical': { name:'Alloy Vertical', type:'Underbarrel', pts:20, unlockLevel:7 },
      'Ribbed Vertical': { name:'Ribbed Vertical', type:'Underbarrel', pts:20, unlockLevel:11 },
      'Folding Stubby': { name:'Folding Stubby', type:'Underbarrel', pts:20, unlockLevel:14 },
      'PTT Grip Pod': { name:'PTT Grip Pod', type:'Underbarrel', pts:20, unlockLevel:16 },
      '6H64 Vertical': { name:'6H64 Vertical', type:'Underbarrel', pts:25, unlockLevel:18 },
      'Slim Angled': { name:'Slim Angled', type:'Underbarrel', pts:25, unlockLevel:21 },
      'Ribbed Stubby': { name:'Ribbed Stubby', type:'Underbarrel', pts:30, unlockLevel:23 },
      'Canted Stubby': { name:'Canted Stubby', type:'Underbarrel', pts:30, unlockLevel:25 },
      'Full Angled': { name:'Full Angled', type:'Underbarrel', pts:25, unlockLevel:28 },
      'Classic Grip Pod': { name:'Classic Grip Pod', type:'Underbarrel', pts:30, unlockLevel:31 },
      'Classic Vertical': { name:'Classic Vertical', type:'Underbarrel', pts:35, unlockLevel:34 },
      'Stippled Stubby': { name:'Stippled Stubby', type:'Underbarrel', pts:35, unlockLevel:37 },
      'Low-Profile Stubby': { name:'Low-Profile Stubby', type:'Underbarrel', pts:45, unlockLevel:39 },

      // Magazines
      '60RND Drum Mag': { name:'60RND Drum Mag', type:'Magazine', pts:5, unlockLevel:0 },
      '45RND Magazine': { name:'45RND Magazine', type:'Magazine', pts:5, unlockLevel:4 },
      '50RND Magazine': { name:'50RND Magazine', type:'Magazine', pts:5, unlockLevel:11 },
      '60RND Magazine': { name:'60RND Magazine', type:'Magazine', pts:10, unlockLevel:21 },
      '45RND Fast Mag': { name:'45RND Fast Mag', type:'Magazine', pts:10, unlockLevel:29 },
      '100RND Drum Mag': { name:'100RND Drum Mag', type:'Magazine', pts:45, unlockLevel:35 },

      // Ergonomics
      'None–Ergonomics': { name:'None', type:'Ergonomics', pts:0, unlockLevel:0 },
      'Match Trigger': { name:'Match Trigger', type:'Ergonomics', pts:15, unlockLevel:16 },
      'Rail Cover': { name:'Rail Cover', type:'Ergonomics', pts:5, unlockLevel:'Season 1 Hardware 2' },

      // Ammunition
      'FMJ': { name:'FMJ', type:'Ammunition', pts:5, unlockLevel:0 },
      'Tungsten Core': { name:'Tungsten Core', type:'Ammunition', pts:5, unlockLevel:6 },
      'Polymer Case': { name:'Polymer Case', type:'Ammunition', pts:10, unlockLevel:15 },
      'Hollow Point': { name:'Hollow Point', type:'Ammunition', pts:20, unlockLevel:25 },
      'Frangible': { name:'Frangible', type:'Ammunition', pts:20, unlockLevel:31 },
      'Synthetic Tip': { name:'Synthetic Tip', type:'Ammunition', pts:5, unlockLevel:38 },
    }
  };
  target['M240L'] = {
    attachments: {
      // Scopes
      'Iron Sights': { name:'Iron Sights', type:'Scope', pts:5, unlockLevel:0 },
      'SU-231 1.50x': { name:'SU-231 1.50x', type:'Scope', pts:10, unlockLevel:0 },
      'SDO 3.50x': { name:'SDO 3.50x', type:'Scope', pts:10, unlockLevel:1 },
      'Mini Flex 1.00x': { name:'Mini Flex 1.00x', type:'Scope', pts:10, unlockLevel:2 },
      'CCO 2.00x': { name:'CCO 2.00x', type:'Scope', pts:10, unlockLevel:3 },
      'CQ RDS 1.25x': { name:'CQ RDS 1.25x', type:'Scope', pts:10, unlockLevel:5 },
      'PVQ-31 4.00x': { name:'PVQ-31 4.00x', type:'Scope', pts:10, unlockLevel:6 },
      'OSA-7 1.00x': { name:'OSA-7 1.00x', type:'Scope', pts:10, unlockLevel:7 },
      'RO-M 1.75x': { name:'RO-M 1.75x', type:'Scope', pts:10, unlockLevel:9 },
      'NGFC LPVO': { name:'NGFC LPVO', type:'Scope', pts:25, unlockLevel:11 },
      'A-P2 1.75x': { name:'A-P2 1.75x', type:'Scope', pts:10, unlockLevel:12 },
      'BF-2M 2.50x': { name:'BF-2M 2.50x', type:'Scope', pts:10, unlockLevel:13 },
      'ROX 1.50x': { name:'ROX 1.50x', type:'Scope', pts:10, unlockLevel:15 },
      'LDS 4.50x': { name:'LDS 4.50x', type:'Scope', pts:10, unlockLevel:16 },
      'Grim 1.50x': { name:'Grim 1.50x', type:'Scope', pts:25, unlockLevel:17 },
      'ST Prisim 5.00x': { name:'ST Prisim 5.00x', type:'Scope', pts:10, unlockLevel:19 },
      '2PRO 1.25x': { name:'2PRO 1.25x', type:'Scope', pts:10, unlockLevel:21 },
      'R4T 2.00x': { name:'R4T 2.00x', type:'Scope', pts:10, unlockLevel:23 },
      'MC-CO LPVO': { name:'MC-CO LPVO', type:'Scope', pts:25, unlockLevel:25 },
      'R-MR 1.00x': { name:'R-MR 1.00x', type:'Scope', pts:10, unlockLevel:27 },
      'Baker 3.00x': { name:'Baker 3.00x', type:'Scope', pts:10, unlockLevel:29 },
      'RO-S 1.25x': { name:'RO-S 1.25x', type:'Scope', pts:10, unlockLevel:31 },
      'SF-G2 5.00x': { name:'SF-G2 5.00x', type:'Scope', pts:10, unlockLevel:33 },
      '1P87 1.50x': { name:'1P87 1.50x', type:'Scope', pts:10, unlockLevel:35 },
      'PAS-35 3.00x': { name:'PAS-35 3.00x', type:'Scope', pts:25, unlockLevel:36 },
      '3VZR 1.75x': { name:'3VZR 1.75x', type:'Scope', pts:10, unlockLevel:38 },
      'DVO LPVO': { name:'DVO LPVO', type:'Scope', pts:25, unlockLevel:40 },
      'SU-230 LPVO': { name:'SU-230 LPVO', type:'Scope', pts:20, unlockLevel:'Season 1 Hardware 1' },

      // Optic Accessories
      'None–Optic Accessory': { name:'None', type:'Optic Accessory', pts:0, unlockLevel:0 },
      'Canted Iron Sights': { name:'Canted Iron Sights', type:'Optic Accessory', pts:5, unlockLevel:10 },
      'Canted Reflex': { name:'Canted Reflex', type:'Optic Accessory', pts:10, unlockLevel:20 },
      'Piggyback Reflex': { name:'Piggyback Reflex', type:'Optic Accessory', pts:10, unlockLevel:30 },

      // Right Accessories
      'None–Right Accessory': { name:'None', type:'Right Accessory', pts:0, unlockLevel:0 },
      '5 MW Red': { name:'5 MW Red', type:'Right Accessory', pts:10, unlockLevel:5 },
      '5 MW Green': { name:'5 MW Green', type:'Right Accessory', pts:10, unlockLevel:12 },
      '50 MW Green': { name:'50 MW Green', type:'Right Accessory', pts:20, unlockLevel:19 },
      '50 MW Blue': { name:'50 MW Blue', type:'Right Accessory', pts:20, unlockLevel:26 },
      '120 MW Blue': { name:'120 MW Blue', type:'Right Accessory', pts:30, unlockLevel:33 },

      // Left Accessories
      'None–Left Accessory': { name:'None', type:'Left Accessory', pts:0, unlockLevel:0 },
      'Flashlight': { name:'Flashlight', type:'Left Accessory', pts:10, unlockLevel:8 },

      // Muzzles
      'None–Muzzle': { name:'None', type:'Muzzle', pts:0, unlockLevel:0 },
      'Flash Hider': { name:'Flash Hider', type:'Muzzle', pts:10, unlockLevel:0 },
      'Linear Comp': { name:'Linear Comp', type:'Muzzle', pts:10, unlockLevel:2 },
      'Double-Port Brake': { name:'Double-Port Brake', type:'Muzzle', pts:10, unlockLevel:7 },
      'Compensated Brake': { name:'Compensated Brake', type:'Muzzle', pts:20, unlockLevel:15 },
      'Standard Suppressor': { name:'Standard Suppressor', type:'Muzzle', pts:20, unlockLevel:22 },
      'Long Suppressor': { name:'Long Suppressor', type:'Muzzle', pts:25, unlockLevel:28 },
      'CQB Suppressor': { name:'CQB Suppressor', type:'Muzzle', pts:30, unlockLevel:34 },
      'Lightened Suppressor': { name:'Lightened Suppressor', type:'Muzzle', pts:30, unlockLevel:39 },

      // Barrels
      '20" Lima': { name:'20" Lima', type:'Barrel', pts:10, unlockLevel:0 },
      '24" Bravo': { name:'24" Bravo', type:'Barrel', pts:10, unlockLevel:4 },
      '20" OH': { name:'20" OH', type:'Barrel', pts:20, unlockLevel:23 },

      // Underbarrels
      'None–Underbarrel': { name:'None', type:'Underbarrel', pts:0, unlockLevel:0 },
      'Bipod': { name:'Bipod', type:'Underbarrel', pts:10, unlockLevel:0 },
      'Folding Vertical': { name:'Folding Vertical', type:'Underbarrel', pts:10, unlockLevel:1 },
      'Alloy Vertical': { name:'Alloy Vertical', type:'Underbarrel', pts:20, unlockLevel:3 },
      'Ribbed Vertical': { name:'Ribbed Vertical', type:'Underbarrel', pts:20, unlockLevel:6 },
      'Folding Stubby': { name:'Folding Stubby', type:'Underbarrel', pts:20, unlockLevel:9 },
      'PTT Grip Pod': { name:'PTT Grip Pod', type:'Underbarrel', pts:20, unlockLevel:11 },
      '6H64 Vertical': { name:'6H64 Vertical', type:'Underbarrel', pts:25, unlockLevel:14 },
      'Slim Angled': { name:'Slim Angled', type:'Underbarrel', pts:25, unlockLevel:16 },
      'Ribbed Stubby': { name:'Ribbed Stubby', type:'Underbarrel', pts:30, unlockLevel:18 },
      'Canted Stubby': { name:'Canted Stubby', type:'Underbarrel', pts:30, unlockLevel:21 },
      'Full Angled': { name:'Full Angled', type:'Underbarrel', pts:25, unlockLevel:24 },
      'QD Grip Pod': { name:'QD Grip Pod', type:'Underbarrel', pts:30, unlockLevel:27 },
      'Classic Grip Pod': { name:'Classic Grip Pod', type:'Underbarrel', pts:30, unlockLevel:29 },
      'Classic Vertical': { name:'Classic Vertical', type:'Underbarrel', pts:35, unlockLevel:32 },
      'Stippled Stubby': { name:'Stippled Stubby', type:'Underbarrel', pts:35, unlockLevel:35 },
      'Low-Profile Stubby': { name:'Low-Profile Stubby', type:'Underbarrel', pts:45, unlockLevel:38 },

      // Magazines
      '50RND Loose Belt': { name:'50RND Loose Belt', type:'Magazine', pts:5, unlockLevel:0 },
      '75RND Belt Box': { name:'75RND Belt Box', type:'Magazine', pts:10, unlockLevel:17 },
      '100RND Belt Box': { name:'100RND Belt Box', type:'Magazine', pts:25, unlockLevel:31 },

      // Ergonomics
      'None–Ergonomics': { name:'None', type:'Ergonomics', pts:0, unlockLevel:0 },
      'Rail Cover': { name:'Rail Cover', type:'Ergonomics', pts:5, unlockLevel:'Season 1 Hardware 2' },

      // Ammunition
      'FMJ': { name:'FMJ', type:'Ammunition', pts:5, unlockLevel:0 },
      'Tungsten Core': { name:'Tungsten Core', type:'Ammunition', pts:5, unlockLevel:13 },
      'Hollow Point': { name:'Hollow Point', type:'Ammunition', pts:20, unlockLevel:25 },
      'Frangible': { name:'Frangible', type:'Ammunition', pts:20, unlockLevel:37 },
    }
  };
  target['M250'] = {
    attachments: {
      // Scopes
      'Iron Sights': { name:'Iron Sights', type:'Scope', pts:5, unlockLevel:0 },
      'NGFC LPVO': { name:'NGFC LPVO', type:'Scope', pts:25, unlockLevel:0 },
      'SU-231 1.50x': { name:'SU-231 1.50x', type:'Scope', pts:10, unlockLevel:0 },
      'Baker 3.00x': { name:'Baker 3.00x', type:'Scope', pts:10, unlockLevel:1 },
      'Mini Flex 1.00x': { name:'Mini Flex 1.00x', type:'Scope', pts:10, unlockLevel:2 },
      'CCO 2.00x': { name:'CCO 2.00x', type:'Scope', pts:10, unlockLevel:3 },
      'PVQ-31 4.00x': { name:'PVQ-31 4.00x', type:'Scope', pts:10, unlockLevel:5 },
      'A-P2 1.75x': { name:'A-P2 1.75x', type:'Scope', pts:10, unlockLevel:6 },
      'OSA-7 1.00x': { name:'OSA-7 1.00x', type:'Scope', pts:10, unlockLevel:7 },
      'BF-2M 2.50x': { name:'BF-2M 2.50x', type:'Scope', pts:10, unlockLevel:9 },
      'CQ RDS 1.25x': { name:'CQ RDS 1.25x', type:'Scope', pts:10, unlockLevel:11 },
      'LDS 4.50x': { name:'LDS 4.50x', type:'Scope', pts:10, unlockLevel:12 },
      'RO-M 1.75x': { name:'RO-M 1.75x', type:'Scope', pts:10, unlockLevel:13 },
      'SDO 3.50x': { name:'SDO 3.50x', type:'Scope', pts:10, unlockLevel:15 },
      'Grim 1.50x': { name:'Grim 1.50x', type:'Scope', pts:25, unlockLevel:16 },
      'ST Prisim 5.00x': { name:'ST Prisim 5.00x', type:'Scope', pts:10, unlockLevel:17 },
      'MC-CO LPVO': { name:'MC-CO LPVO', type:'Scope', pts:25, unlockLevel:19 },
      'ROX 1.50x': { name:'ROX 1.50x', type:'Scope', pts:10, unlockLevel:21 },
      'R4T 2.00x': { name:'R4T 2.00x', type:'Scope', pts:10, unlockLevel:23 },
      '2PRO 1.25x': { name:'2PRO 1.25x', type:'Scope', pts:10, unlockLevel:25 },
      'SF-G2 5.00x': { name:'SF-G2 5.00x', type:'Scope', pts:10, unlockLevel:27 },
      'R-MR 1.00x': { name:'R-MR 1.00x', type:'Scope', pts:10, unlockLevel:29 },
      'DVO LPVO': { name:'DVO LPVO', type:'Scope', pts:25, unlockLevel:31 },
      '1P87 1.50x': { name:'1P87 1.50x', type:'Scope', pts:10, unlockLevel:33 },
      'PAS-35 3.00x': { name:'PAS-35 3.00x', type:'Scope', pts:25, unlockLevel:35 },
      'RO-S 1.25x': { name:'RO-S 1.25x', type:'Scope', pts:10, unlockLevel:36 },
      '3VZR 1.75x': { name:'3VZR 1.75x', type:'Scope', pts:10, unlockLevel:38 },
      'SU-230 LPVO': { name:'SU-230 LPVO', type:'Scope', pts:20, unlockLevel:'Season 1 Hardware 1' },

      // Optic Accessories
      'None–Optic Accessory': { name:'None', type:'Optic Accessory', pts:0, unlockLevel:0 },
      'Canted Iron Sights': { name:'Canted Iron Sights', type:'Optic Accessory', pts:5, unlockLevel:10 },
      'Canted Reflex': { name:'Canted Reflex', type:'Optic Accessory', pts:10, unlockLevel:20 },
      'Piggyback Reflex': { name:'Piggyback Reflex', type:'Optic Accessory', pts:10, unlockLevel:30 },

      // Top Accessories
      'None–Top Accessory': { name:'None', type:'Top Accessory', pts:0, unlockLevel:0 },
      '5 MW Red': { name:'5 MW Red', type:'Top Accessory', pts:10, unlockLevel:5 },
      '5 MW Green': { name:'5 MW Green', type:'Top Accessory', pts:10, unlockLevel:12 },
      '50 MW Green': { name:'50 MW Green', type:'Top Accessory', pts:20, unlockLevel:19 },
      '50 MW Blue': { name:'50 MW Blue', type:'Top Accessory', pts:20, unlockLevel:26 },
      '120 MW Blue': { name:'120 MW Blue', type:'Top Accessory', pts:30, unlockLevel:33 },

      // Right Accessories
      'None–Right Accessory': { name:'None', type:'Right Accessory', pts:0, unlockLevel:0 },
      'Flashlight': { name:'Flashlight', type:'Right Accessory', pts:10, unlockLevel:8 },

      // Muzzles
      'None–Muzzle': { name:'None', type:'Muzzle', pts:0, unlockLevel:0 },
      'Lightened Suppressor': { name:'Lightened Suppressor', type:'Muzzle', pts:30, unlockLevel:0 },
      'Flash Hider': { name:'Flash Hider', type:'Muzzle', pts:10, unlockLevel:4 },
      'Linear Comp': { name:'Linear Comp', type:'Muzzle', pts:10, unlockLevel:7 },
      'Double-Port Brake': { name:'Double-Port Brake', type:'Muzzle', pts:10, unlockLevel:14 },
      'Single-Port Brake': { name:'Single-Port Brake', type:'Muzzle', pts:10, unlockLevel:18 },
      'Compensated Brake': { name:'Compensated Brake', type:'Muzzle', pts:20, unlockLevel:22 },
      'Standard Suppressor': { name:'Standard Suppressor', type:'Muzzle', pts:20, unlockLevel:27 },
      'Long Suppressor': { name:'Long Suppressor', type:'Muzzle', pts:25, unlockLevel:32 },
      'CQB Suppressor': { name:'CQB Suppressor', type:'Muzzle', pts:30, unlockLevel:38 },

      // Barrels
      '406mm Standard': { name:'406mm Standard', type:'Barrel', pts:10, unlockLevel:0 },
      '556mm Prototype': { name:'556mm Prototype', type:'Barrel', pts:10, unlockLevel:3 },

      // Underbarrels
      'None–Underbarrel': { name:'None', type:'Underbarrel', pts:0, unlockLevel:0 },
      'Bipod': { name:'Bipod', type:'Underbarrel', pts:10, unlockLevel:0 },
      'Folding Vertical': { name:'Folding Vertical', type:'Underbarrel', pts:10, unlockLevel:1 },
      'Alloy Vertical': { name:'Alloy Vertical', type:'Underbarrel', pts:20, unlockLevel:4 },
      'Ribbed Vertical': { name:'Ribbed Vertical', type:'Underbarrel', pts:20, unlockLevel:6 },
      'Folding Stubby': { name:'Folding Stubby', type:'Underbarrel', pts:20, unlockLevel:9 },
      'PTT Grip Pod': { name:'PTT Grip Pod', type:'Underbarrel', pts:20, unlockLevel:11 },
      '6H64 Vertical': { name:'6H64 Vertical', type:'Underbarrel', pts:25, unlockLevel:13 },
      'Adjustable Angled': { name:'Adjustable Angled', type:'Underbarrel', pts:15, unlockLevel:15 },
      'Slim Angled': { name:'Slim Angled', type:'Underbarrel', pts:25, unlockLevel:18 },
      'Ribbed Stubby': { name:'Ribbed Stubby', type:'Underbarrel', pts:30, unlockLevel:21 },
      'Canted Stubby': { name:'Canted Stubby', type:'Underbarrel', pts:30, unlockLevel:23 },
      'Full Angled': { name:'Full Angled', type:'Underbarrel', pts:25, unlockLevel:25 },
      'QD Grip Pod': { name:'QD Grip Pod', type:'Underbarrel', pts:30, unlockLevel:28 },
      'Classic Grip Pod': { name:'Classic Grip Pod', type:'Underbarrel', pts:30, unlockLevel:31 },
      'Classic Vertical': { name:'Classic Vertical', type:'Underbarrel', pts:35, unlockLevel:34 },
      'Stippled Stubby': { name:'Stippled Stubby', type:'Underbarrel', pts:35, unlockLevel:37 },
      'Low-Profile Stubby': { name:'Low-Profile Stubby', type:'Underbarrel', pts:45, unlockLevel:39 },

      // Magazines
      '50RND Belt Pouch': { name:'50RND Belt Pouch', type:'Magazine', pts:5, unlockLevel:0 },
      '100RND Belt Pouch': { name:'100RND Belt Pouch', type:'Magazine', pts:55, unlockLevel:22 },

      // Ammunition
      'FMJ': { name:'FMJ', type:'Ammunition', pts:5, unlockLevel:0 },
      'Tungsten Core': { name:'Tungsten Core', type:'Ammunition', pts:5, unlockLevel:16 },
      'Hollow Point': { name:'Hollow Point', type:'Ammunition', pts:20, unlockLevel:24 },
      'Frangible': { name:'Frangible', type:'Ammunition', pts:20, unlockLevel:35 },
    }
  };

  // SMGs
  target['PW5A3'] = {
    attachments: {
      // Scopes
      'Iron Sights': { name:'Iron Sights', type:'Scope', pts:5, unlockLevel:0 },
      '3VZR 1.75x': { name:'3VZR 1.75x', type:'Scope', pts:10, unlockLevel:0 },
      '2PRO 1.25x': { name:'2PRO 1.25x', type:'Scope', pts:10, unlockLevel:0 },
      'SDO 3.50x': { name:'SDO 3.50x', type:'Scope', pts:10, unlockLevel:1 },
      'R-MR 1.00x': { name:'R-MR 1.00x', type:'Scope', pts:10, unlockLevel:3 },
      'BF-2M 2.50x': { name:'BF-2M 2.50x', type:'Scope', pts:10, unlockLevel:4 },
      'SU-231 1.50x': { name:'SU-231 1.50x', type:'Scope', pts:10, unlockLevel:6 },
      'Mini Flex 1.00x': { name:'Mini Flex 1.00x', type:'Scope', pts:10, unlockLevel:7 },
      'LDS 4.50x': { name:'LDS 4.50x', type:'Scope', pts:10, unlockLevel:9 },
      'CQ RDS 1.25x': { name:'CQ RDS 1.25x', type:'Scope', pts:10, unlockLevel:11 },
      'PVQ-31 4.00x': { name:'PVQ-31 4.00x', type:'Scope', pts:10, unlockLevel:14 },
      '1P87 1.50x': { name:'1P87 1.50x', type:'Scope', pts:10, unlockLevel:16 },
      'Mars-F LPVO': { name:'Mars-F LPVO', type:'Scope', pts:25, unlockLevel:17 },
      'OSA-7 1.00x': { name:'OSA-7 1.00x', type:'Scope', pts:10, unlockLevel:18 },
      'CCO 2.00x': { name:'CCO 2.00x', type:'Scope', pts:10, unlockLevel:19 },
      'Baker 3.00x': { name:'Baker 3.00x', type:'Scope', pts:10, unlockLevel:21 },
      'RO-S 1.25x': { name:'RO-S 1.25x', type:'Scope', pts:10, unlockLevel:22 },
      'R4T 2.00x': { name:'R4T 2.00x', type:'Scope', pts:10, unlockLevel:24 },
      'ST Prisim 5.00x': { name:'ST Prisim 5.00x', type:'Scope', pts:10, unlockLevel:27 },
      'ROX 1.50x': { name:'ROX 1.50x', type:'Scope', pts:10, unlockLevel:29 },
      'RO-M 1.75x': { name:'RO-M 1.75x', type:'Scope', pts:10, unlockLevel:31 },
      'Grim 1.50x': { name:'Grim 1.50x', type:'Scope', pts:25, unlockLevel:32 },
      'A-P2 1.75x': { name:'A-P2 1.75x', type:'Scope', pts:10, unlockLevel:34 },
      'SF-G2 5.00x': { name:'SF-G2 5.00x', type:'Scope', pts:10, unlockLevel:35 },
      'PAS-35 3.00x': { name:'PAS-35 3.00x', type:'Scope', pts:25, unlockLevel:37 },
      'SU-230 LPVO': { name:'SU-230 LPVO', type:'Scope', pts:20, unlockLevel:'Season 1 Hardware 1' },

      // Optic Accessories
      'None–Optic Accessory': { name:'None', type:'Optic Accessory', pts:0, unlockLevel:0 },
      'Canted Iron Sights': { name:'Canted Iron Sights', type:'Optic Accessory', pts:5, unlockLevel:10 },
      'Canted Reflex': { name:'Canted Reflex', type:'Optic Accessory', pts:10, unlockLevel:20 },

      // Right Accessories
      'None–Right Accessory': { name:'None', type:'Right Accessory', pts:0, unlockLevel:0 },
      '5 MW Red': { name:'5 MW Red', type:'Right Accessory', pts:10, unlockLevel:8 },
      '5 MW Green': { name:'5 MW Green', type:'Right Accessory', pts:10, unlockLevel:17 },
      '50 MW Green': { name:'50 MW Green', type:'Right Accessory', pts:20, unlockLevel:22 },
      '50 MW Blue': { name:'50 MW Blue', type:'Right Accessory', pts:20, unlockLevel:27 },
      '120 MW Blue': { name:'120 MW Blue', type:'Right Accessory', pts:30, unlockLevel:35 },

      // Left Accessories
      'None–Left Accessory': { name:'None', type:'Left Accessory', pts:0, unlockLevel:0 },
      'Flashlight': { name:'Flashlight', type:'Left Accessory', pts:10, unlockLevel:2 },

      // Muzzles
      'None–Muzzle': { name:'None', type:'Muzzle', pts:0, unlockLevel:0 },
      'Flash Hider': { name:'Flash Hider', type:'Muzzle', pts:10, unlockLevel:5 },
      'Standard Suppressor': { name:'Standard Suppressor', type:'Muzzle', pts:20, unlockLevel:9 },
      'Linear Comp': { name:'Linear Comp', type:'Muzzle', pts:10, unlockLevel:11 },
      'Double-Port Brake': { name:'Double-Port Brake', type:'Muzzle', pts:10, unlockLevel:13 },
      'CQB Suppressor': { name:'CQB Suppressor', type:'Muzzle', pts:30, unlockLevel:16 },
      'Long Suppressor': { name:'Long Suppressor', type:'Muzzle', pts:25, unlockLevel:24 },
      'Compensated Brake': { name:'Compensated Brake', type:'Muzzle', pts:20, unlockLevel:28 },
      'Lightened Suppressor': { name:'Lightened Suppressor', type:'Muzzle', pts:30, unlockLevel:37 },

      // Barrels
      '225 mm Factory': { name:'225mm Factory', type:'Barrel', pts:10, unlockLevel:0 },
      '245 mm Custom': { name:'245mm Custom', type:'Barrel', pts:15, unlockLevel:12 },

      // Underbarrels
      'None–Underbarrel': { name:'None', type:'Underbarrel', pts:0, unlockLevel:0 },
      'Folding Vertical': { name:'Folding Vertical', type:'Underbarrel', pts:10, unlockLevel:1 },
      'Alloy Vertical': { name:'Alloy Vertical', type:'Underbarrel', pts:20, unlockLevel:3 },
      'Ribbed Vertical': { name:'Ribbed Vertical', type:'Underbarrel', pts:20, unlockLevel:6 },
      '6H64 Vertical': { name:'6H64 Vertical', type:'Underbarrel', pts:25, unlockLevel:14 },
      'Classic Vertical': { name:'Classic Vertical', type:'Underbarrel', pts:35, unlockLevel:21 },
      'Folding Stubby': { name:'Folding Stubby', type:'Underbarrel', pts:20, unlockLevel:23 },
      'Ribbed Stubby': { name:'Ribbed Stubby', type:'Underbarrel', pts:30, unlockLevel:26 },
      'Canted Stubby': { name:'Canted Stubby', type:'Underbarrel', pts:30, unlockLevel:29 },
      'Stippled Stubby': { name:'Stippled Stubby', type:'Underbarrel', pts:35, unlockLevel:31 },
      'Low-Profile Stubby': { name:'Low-Profile Stubby', type:'Underbarrel', pts:45, unlockLevel:33 },
      'Compact Handstop': { name:'Compact Handstop', type:'Underbarrel', pts:10, unlockLevel:36 },
      'Slim Angled': { name:'Slim Angled', type:'Underbarrel', pts:25, unlockLevel:38 },

      // Magazines
      '30RND Magazine': { name:'30RND Magazine', type:'Magazine', pts:5, unlockLevel:0 },
      '30RND Fast Mag': { name:'30RND Fast Mag', type:'Magazine', pts:10, unlockLevel:5 },
      '20RND Magazine': { name:'20RND Magazine', type:'Magazine', pts:5, unlockLevel:18 },
      '40RND Magazine': { name:'40RND Magazine', type:'Magazine', pts:25, unlockLevel:28 },

      // Ergonomics
      'None': { name:'None', type:'Ergonomics', pts:0, unlockLevel:0 },
      'Improved Mag Catch': { name:'Improved Mag Catch', type:'Ergonomics', pts:5, unlockLevel:12 },

      // Ammunition
      'FMJ': { name:'FMJ', type:'Ammunition', pts:5, unlockLevel:0 },
      'Tungsten Core': { name:'Tungsten Core', type:'Ammunition', pts:5, unlockLevel:15 },
      'Hollow Point': { name:'Hollow Point', type:'Ammunition', pts:20, unlockLevel:25 },
      'Frangible': { name:'Frangible', type:'Ammunition', pts:20, unlockLevel:33 },
      'Synthetic Tip': { name:'Synthetic Tip', type:'Ammunition', pts:30, unlockLevel:40 },
    }
  };
  target['UMG-40'] = {
    attachments: {
      // Scopes
      'Aperture Sights': { name:'Aperture Sights', type:'Scope', pts:5, unlockLevel:0 },
      'CQB Sights': { name:'CQB Sights', type:'Scope', pts:5, unlockLevel:0 },
      'R4T 2.00x': { name:'R4T 2.00x', type:'Scope', pts:10, unlockLevel:0 },
      'Mini Flex 1.00x': { name:'Mini Flex 1.00x', type:'Scope', pts:10, unlockLevel:1 },
      'Baker 3.00x': { name:'Baker 3.00x', type:'Scope', pts:10, unlockLevel:2 },
      '2PRO 1.25x': { name:'2PRO 1.25x', type:'Scope', pts:10, unlockLevel:4 },
      'PVQ-31 4.00x': { name:'PVQ-31 4.00x', type:'Scope', pts:10, unlockLevel:5 },
      'A-P2 1.75x': { name:'A-P2 1.75x', type:'Scope', pts:10, unlockLevel:7 },
      'SU-231 1.50x': { name:'SU-231 1.50x', type:'Scope', pts:10, unlockLevel:9 },
      'BF-2M 2.50x': { name:'BF-2M 2.50x', type:'Scope', pts:10, unlockLevel:11 },
      'OSA-7 1.00x': { name:'OSA-7 1.00x', type:'Scope', pts:10, unlockLevel:12 },
      'RO-M 1.75x': { name:'RO-M 1.75x', type:'Scope', pts:10, unlockLevel:14 },
      'ST Prisim 5.00x': { name:'ST Prisim 5.00x', type:'Scope', pts:10, unlockLevel:15 },
      'Grim 1.50x': { name:'Grim 1.50x', type:'Scope', pts:25, unlockLevel:17 },
      'SDO 3.50x': { name:'SDO 3.50x', type:'Scope', pts:10, unlockLevel:19 },
      'CQ RDS 1.25x': { name:'CQ RDS 1.25x', type:'Scope', pts:10, unlockLevel:21 },
      'CCO 2.00x': { name:'CCO 2.00x', type:'Scope', pts:10, unlockLevel:22 },
      'R-MR 1.00x': { name:'R-MR 1.00x', type:'Scope', pts:10, unlockLevel:24 },
      'SF-G2 5.00x': { name:'SF-G2 5.00x', type:'Scope', pts:10, unlockLevel:26 },
      'Mars-F LPVO': { name:'Mars-F LPVO', type:'Scope', pts:25, unlockLevel:28 },
      '1P87 1.50x': { name:'1P87 1.50x', type:'Scope', pts:10, unlockLevel:29 },
      'RO-S 1.25x': { name:'RO-S 1.25x', type:'Scope', pts:10, unlockLevel:31 },
      'LDS 4.50x': { name:'LDS 4.50x', type:'Scope', pts:10, unlockLevel:33 },
      '3VZR 1.75x': { name:'3VZR 1.75x', type:'Scope', pts:10, unlockLevel:35 },
      'PAS-35 3.00x': { name:'PAS-35 3.00x', type:'Scope', pts:25, unlockLevel:37 },
      'ROX 1.50x': { name:'ROX 1.50x', type:'Scope', pts:10, unlockLevel:39 },
      'SU-230 LPVO': { name:'SU-230 LPVO', type:'Scope', pts:20, unlockLevel:'Season 1 Hardware 1' },

      // Optic Accessories
      'None–Optic Accessory': { name:'None', type:'Optic Accessory', pts:0, unlockLevel:0 },
      'Canted Iron Sights': { name:'Canted Iron Sights', type:'Optic Accessory', pts:5, unlockLevel:10 },
      'Canted Reflex': { name:'Canted Reflex', type:'Optic Accessory', pts:10, unlockLevel:20 },
      'Piggyback Reflex': { name:'Piggyback Reflex', type:'Optic Accessory', pts:10, unlockLevel:30 },

      // Right Accessories
      'None–Right Accessory': { name:'None', type:'Right Accessory', pts:0, unlockLevel:0 },
      '5 MW Red': { name:'5 MW Red', type:'Right Accessory', pts:10, unlockLevel:3 },
      '5 MW Green': { name:'5 MW Green', type:'Right Accessory', pts:10, unlockLevel:12 },
      '50 MW Green': { name:'50 MW Green', type:'Right Accessory', pts:20, unlockLevel:23 },
      '50 MW Blue': { name:'50 MW Blue', type:'Right Accessory', pts:20, unlockLevel:31 },
      '120 MW Blue': { name:'120 MW Blue', type:'Right Accessory', pts:30, unlockLevel:38 },

      // Left Accessories
      'None–Left Accessory': { name:'None', type:'Left Accessory', pts:0, unlockLevel:0 },
      'Flashlight': { name:'Flashlight', type:'Left Accessory', pts:10, unlockLevel:22 },

      // Muzzles
      'None–Muzzle': { name:'None', type:'Muzzle', pts:0, unlockLevel:0 },
      'Flash Hider': { name:'Flash Hider', type:'Muzzle', pts:10, unlockLevel:0 },
      'Linear Comp': { name:'Linear Comp', type:'Muzzle', pts:10, unlockLevel:2 },
      'Double-Port Brake': { name:'Double-Port Brake', type:'Muzzle', pts:10, unlockLevel:8 },
      'Compensated Brake': { name:'Compensated Brake', type:'Muzzle', pts:20, unlockLevel:13 },
      'Standard Suppressor': { name:'Standard Suppressor', type:'Muzzle', pts:20, unlockLevel:19 },
      'Long Suppressor': { name:'Long Suppressor', type:'Muzzle', pts:25, unlockLevel:24 },
      'CQB Suppressor': { name:'CQB Suppressor', type:'Muzzle', pts:30, unlockLevel:28 },
      'Lightened Suppressor': { name:'Lightened Suppressor', type:'Muzzle', pts:30, unlockLevel:37 },

      // Barrels
      '200 mm Factory': { name:'200mm Factory', type:'Barrel', pts:10, unlockLevel:0 },
      '200 mm Custom-H': { name:'200mm Custom-H', type:'Barrel', pts:10, unlockLevel:5 },
      '305 mm Custom-H': { name:'305mm Custom-H', type:'Barrel', pts:10, unlockLevel:16 },
      '305 mm Custom': { name:'305mm Custom', type:'Barrel', pts:15, unlockLevel:26 },
      '200 mm Custom': { name:'200mm Custom', type:'Barrel', pts:20, unlockLevel:34 },

      // Underbarrels
      'None–Underbarrel': { name:'None', type:'Underbarrel', pts:0, unlockLevel:0 },
      'Folding Vertical': { name:'Folding Vertical', type:'Underbarrel', pts:10, unlockLevel:1 },
      'Compact Handstop': { name:'Compact Handstop', type:'Underbarrel', pts:10, unlockLevel:4 },
      'Alloy Vertical': { name:'Alloy Vertical', type:'Underbarrel', pts:20, unlockLevel:7 },
      'Ribbed Vertical': { name:'Ribbed Vertical', type:'Underbarrel', pts:20, unlockLevel:11 },
      'Folding Stubby': { name:'Folding Stubby', type:'Underbarrel', pts:20, unlockLevel:14 },
      'Slim Angled': { name:'Slim Angled', type:'Underbarrel', pts:20, unlockLevel:17 },
      '6H64 Vertical': { name:'6H64 Vertical', type:'Underbarrel', pts:25, unlockLevel:21 },
      'Ribbed Stubby': { name:'Ribbed Stubby', type:'Underbarrel', pts:30, unlockLevel:25 },
      'Canted Stubby': { name:'Canted Stubby', type:'Underbarrel', pts:30, unlockLevel:29 },
      'Classic Vertical': { name:'Classic Vertical', type:'Underbarrel', pts:35, unlockLevel:33 },
      'Stippled Stubby': { name:'Stippled Stubby', type:'Underbarrel', pts:35, unlockLevel:36 },
      'Low-Profile Stubby': { name:'Low-Profile Stubby', type:'Underbarrel', pts:45, unlockLevel:40 },

      // Magazines
      '30RND Magazine': { name:'30RND Magazine', type:'Magazine', pts:5, unlockLevel:0 },
      '25RND Magazine': { name:'25RND Magazine', type:'Magazine', pts:5, unlockLevel:6 },
      '30RND Fast Mag': { name:'30RND Fast Mag', type:'Magazine', pts:10, unlockLevel:15 },
      '25RND Fast Mag': { name:'25RND Fast Mag', type:'Magazine', pts:10, unlockLevel:25 },
      '36RND Magazine': { name:'36RND Magazine', type:'Magazine', pts:15, unlockLevel:35 },

      // Ammunition
      'FMJ': { name:'FMJ', type:'Ammunition', pts:5, unlockLevel:0 },
      'Tungsten Core': { name:'Tungsten Core', type:'Ammunition', pts:5, unlockLevel:9 },
      'Hollow Point': { name:'Hollow Point', type:'Ammunition', pts:20, unlockLevel:18 },
      'Frangible': { name:'Frangible', type:'Ammunition', pts:20, unlockLevel:27 },
      'Synthetic Tip': { name:'Synthetic Tip', type:'Ammunition', pts:30, unlockLevel:39 },
    }
  };
  target['SGX'] = {
    attachments: {
      // Scopes
      'Iron Sights': { name:'Iron Sights', type:'Scope', pts:5, unlockLevel:0 },
      'ROX 1.50x': { name:'ROX 1.50x', type:'Scope', pts:10, unlockLevel:0 },
      '1P87 1.50x': { name:'1P87 1.50x', type:'Scope', pts:10, unlockLevel:0 },
      'OSA-7 1.00x': { name:'OSA-7 1.00x', type:'Scope', pts:10, unlockLevel:4 },
      'R-MR 1.00x': { name:'R-MR 1.00x', type:'Scope', pts:10, unlockLevel:6 },
      '3VZR 1.75x': { name:'3VZR 1.75x', type:'Scope', pts:10, unlockLevel:8 },
      '2PRO 1.25x': { name:'2PRO 1.25x', type:'Scope', pts:10, unlockLevel:9 },
      'RO-S 1.25x': { name:'RO-S 1.25x', type:'Scope', pts:10, unlockLevel:10 },
      'Baker 3.00x': { name:'Baker 3.00x', type:'Scope', pts:10, unlockLevel:12 },
      'SU-231 1.50x': { name:'SU-231 1.50x', type:'Scope', pts:10, unlockLevel:14 },
      'Mini Flex 1.00x': { name:'Mini Flex 1.00x', type:'Scope', pts:10, unlockLevel:15 },
      'PVQ-31 4.00x': { name:'PVQ-31 4.00x', type:'Scope', pts:10, unlockLevel:16 },
      'RO-M 1.75x': { name:'RO-M 1.75x', type:'Scope', pts:10, unlockLevel:17 },
      'ST Prisim 5.00x': { name:'ST Prisim 5.00x', type:'Scope', pts:10, unlockLevel:19 },
      'CQ RDS 1.25x': { name:'CQ RDS 1.25x', type:'Scope', pts:10, unlockLevel:20 },
      'LDS 4.50x': { name:'LDS 4.50x', type:'Scope', pts:10, unlockLevel:22 },
      'R4T 2.00x': { name:'R4T 2.00x', type:'Scope', pts:10, unlockLevel:24 },
      'SF-G2 5.00x': { name:'SF-G2 5.00x', type:'Scope', pts:10, unlockLevel:25 },
      'CCO 2.00x': { name:'CCO 2.00x', type:'Scope', pts:10, unlockLevel:26 },
      'Mars-F LPVO': { name:'Mars-F LPVO', type:'Scope', pts:25, unlockLevel:28 },
      'A-P2 1.75x': { name:'A-P2 1.75x', type:'Scope', pts:10, unlockLevel:30 },
      'SDO 3.50x': { name:'SDO 3.50x', type:'Scope', pts:10, unlockLevel:34 },
      'BF-2M 2.50x': { name:'BF-2M 2.50x', type:'Scope', pts:10, unlockLevel:36 },
      'PAS-35 3.00x': { name:'PAS-35 3.00x', type:'Scope', pts:25, unlockLevel:38 },
      'Grim 1.50x': { name:'Grim 1.50x', type:'Scope', pts:25, unlockLevel:40 },

      // Optic Accessories
      'None–Optic Accessory': { name:'None', type:'Optic Accessory', pts:0, unlockLevel:0 },
      'Canted Iron Sights': { name:'Canted Iron Sights', type:'Optic Accessory', pts:5, unlockLevel:18 },
      'Canted Reflex': { name:'Canted Reflex', type:'Optic Accessory', pts:10, unlockLevel:39 },
      'Piggyback Reflex': { name:'Piggyback Reflex', type:'Optic Accessory', pts:10, unlockLevel:31 },

      // Top Accessories
      'None–Top Accessory': { name:'None', type:'Top Accessory', pts:0, unlockLevel:0 },
      '5 MW Red': { name:'5 MW Red', type:'Top Accessory', pts:10, unlockLevel:4 },
      '50 MW Green': { name:'50 MW Green', type:'Top Accessory', pts:20, unlockLevel:12 },
      '5 MW Green': { name:'5 MW Green', type:'Top Accessory', pts:10, unlockLevel:19 },
      '120 MW Blue': { name:'120 MW Blue', type:'Top Accessory', pts:30, unlockLevel:26 },
      '50 MW Blue': { name:'50 MW Blue', type:'Top Accessory', pts:20, unlockLevel:27 },

      // Right Accessories
      'None–Right Accessory': { name:'None', type:'Right Accessory', pts:0, unlockLevel:0 },
      'Flashlight': { name:'Flashlight', type:'Right Accessory', pts:10, unlockLevel:0 },

      // Muzzles
      'None–Muzzle': { name:'None', type:'Muzzle', pts:0, unlockLevel:0 },
      'Flash Hider': { name:'Flash Hider', type:'Muzzle', pts:10, unlockLevel:0 },
      'Single-Port Brake': { name:'Single-Port Brake', type:'Muzzle', pts:5, unlockLevel:3 },
      'Linear Comp': { name:'Linear Comp', type:'Muzzle', pts:10, unlockLevel:5 },
      'Standard Suppressor': { name:'Standard Suppressor', type:'Muzzle', pts:20, unlockLevel:14 },
      'Double-Port Brake': { name:'Double-Port Brake', type:'Muzzle', pts:10, unlockLevel:23 },
      'CQB Suppressor': { name:'CQB Suppressor', type:'Muzzle', pts:30, unlockLevel:25 },
      'Long Suppressor': { name:'Long Suppressor', type:'Muzzle', pts:25, unlockLevel:29 },
      'Lightened Suppressor': { name:'Lightened Suppressor', type:'Muzzle', pts:30, unlockLevel:36 },
      'Compensated Brake': { name:'Compensated Brake', type:'Muzzle', pts:20, unlockLevel:39 },

      // Barrels
      '6" Standard': { name:'6" Standard', type:'Barrel', pts:10, unlockLevel:0 },
      '4.5" Compact': { name:'4.5" Compact', type:'Barrel', pts:15, unlockLevel:8 },
      '8" Extended': { name:'8" Extended', type:'Barrel', pts:15, unlockLevel:16 },
      '6" Fluted': { name:'6" Fluted', type:'Barrel', pts:20, unlockLevel:34 },

      // Underbarrels
      'None–Underbarrel': { name:'None', type:'Underbarrel', pts:0, unlockLevel:0 },
      'Ribbed Stubby': { name:'Ribbed Stubby', type:'Underbarrel', pts:30, unlockLevel:0 },
      'Folding Vertical': { name:'Folding Vertical', type:'Underbarrel', pts:21, unlockLevel:2 },
      'Alloy Vertical': { name:'Alloy Vertical', type:'Underbarrel', pts:20, unlockLevel:7 },
      'Ribbed Vertical': { name:'Ribbed Vertical', type:'Underbarrel', pts:20, unlockLevel:11 },
      '6H64 Vertical': { name:'6H64 Vertical', type:'Underbarrel', pts:25, unlockLevel:13 },
      'Folding Stubby': { name:'Folding Stubby', type:'Underbarrel', pts:20, unlockLevel:18 },
      'Classic Vertical': { name:'Classic Vertical', type:'Underbarrel', pts:35, unlockLevel:24 },
      'Low-Profile Stubby': { name:'Low-Profile Stubby', type:'Underbarrel', pts:45, unlockLevel:27 },
      'Canted Stubby': { name:'Canted Stubby', type:'Underbarrel', pts:30, unlockLevel:31 },
      'Compact Handstop': { name:'Compact Handstop', type:'Underbarrel', pts:10, unlockLevel:33 },
      'Slim Angled': { name:'Slim Angled', type:'Underbarrel', pts:20, unlockLevel:35 },
      'Stippled Stubby': { name:'Stippled Stubby', type:'Underbarrel', pts:35, unlockLevel:38 },

      // Magazines
      '30RND Magazine': { name:'30RND Magazine', type:'Magazine', pts:5, unlockLevel:0 },
      '36RND Magazine': { name:'36RND Magazine', type:'Magazine', pts:15, unlockLevel:10 },
      '30RND Fast Mag': { name:'30RND Fast Mag', type:'Magazine', pts:10, unlockLevel:22 },
      '41RND Magazine': { name:'41RND Magazine', type:'Magazine', pts:25, unlockLevel:32 },

      // Ammunition
      'FMJ': { name:'FMJ', type:'Ammunition', pts:5, unlockLevel:0 },
      'Frangible': { name:'Frangible', type:'Ammunition', pts:20, unlockLevel:6 },
      'Tungsten Core': { name:'Tungsten Core', type:'Ammunition', pts:5, unlockLevel:21 },
      'Hollow Point': { name:'Hollow Point', type:'Ammunition', pts:20, unlockLevel:37 },
    }
  };
  target['SCW-10'] = {
    attachments: {
      // Scopes
      'Iron Sights': { name:'Iron Sights', type:'Scope', pts:5, unlockLevel:0 },
      '2PRO 1.25x': { name:'2PRO 1.25x', type:'Scope', pts:10, unlockLevel:0 },
      'Mars-F LPVO': { name:'Mars-F LPVO', type:'Scope', pts:25, unlockLevel:1 },
      'R-MR 1.00x': { name:'R-MR 1.00x', type:'Scope', pts:10, unlockLevel:3 },
      'Mini Flex 1.00x': { name:'Mini Flex 1.00x', type:'Scope', pts:10, unlockLevel:5 },
      'SU-231 1.50x': { name:'SU-231 1.50x', type:'Scope', pts:10, unlockLevel:8 },
      '3VZR 1.75x': { name:'3VZR 1.75x', type:'Scope', pts:10, unlockLevel:9 },
      'CQ RDS 1.25x': { name:'CQ RDS 1.25x', type:'Scope', pts:10, unlockLevel:10 },
      '1P87 1.50x': { name:'1P87 1.50x', type:'Scope', pts:10, unlockLevel:12 },
      'RO-S 1.25x': { name:'RO-S 1.25x', type:'Scope', pts:10, unlockLevel:15 },
      'OSA-7 1.00x': { name:'OSA-7 1.00x', type:'Scope', pts:10, unlockLevel:17 },
      'R4T 2.00x': { name:'R4T 2.00x', type:'Scope', pts:10, unlockLevel:19 },
      'BF-2M 2.50x': { name:'BF-2M 2.50x', type:'Scope', pts:10, unlockLevel:22 },
      'ROX 1.50x': { name:'ROX 1.50x', type:'Scope', pts:10, unlockLevel:25 },
      'RO-M 1.75x': { name:'RO-M 1.75x', type:'Scope', pts:10, unlockLevel:27 },
      'Baker 3.00x': { name:'Baker 3.00x', type:'Scope', pts:10, unlockLevel:29 },
      'LDS 4.50x': { name:'LDS 4.50x', type:'Scope', pts:10, unlockLevel:30 },
      'CCO 2.00x': { name:'CCO 2.00x', type:'Scope', pts:10, unlockLevel:32 },
      'SDO 3.50x': { name:'SDO 3.50x', type:'Scope', pts:10, unlockLevel:33 },
      'PVQ-31 4.00x': { name:'PVQ-31 4.00x', type:'Scope', pts:10, unlockLevel:34 },
      'ST Prisim 5.00x': { name:'ST Prisim 5.00x', type:'Scope', pts:10, unlockLevel:36 },
      'PAS-35 3.00x': { name:'PAS-35 3.00x', type:'Scope', pts:25, unlockLevel:37 },
      'SF-G2 5.00x': { name:'SF-G2 5.00x', type:'Scope', pts:10, unlockLevel:38 },
      'Grim 1.50x': { name:'Grim 1.50x', type:'Scope', pts:25, unlockLevel:39 },
      'A-P2 1.75x': { name:'A-P2 1.75x', type:'Scope', pts:10, unlockLevel:40 },

      // Optic Accessories
      'None–Optic Accessory': { name:'None', type:'Optic Accessory', pts:0, unlockLevel:0 },
      'Canted Iron Sights': { name:'Canted Iron Sights', type:'Optic Accessory', pts:5, unlockLevel:24 },
      'Canted Reflex': { name:'Canted Reflex', type:'Optic Accessory', pts:10, unlockLevel:31 },

      // Top Accessories
      'None–Top Accessory': { name:'None', type:'Top Accessory', pts:0, unlockLevel:0 },
      '5 MW Red': { name:'5 MW Red', type:'Top Accessory', pts:10, unlockLevel:6 },
      '5 MW Green': { name:'5 MW Green', type:'Top Accessory', pts:10, unlockLevel:18 },
      '50 MW Green': { name:'50 MW Green', type:'Top Accessory', pts:20, unlockLevel:23 },
      '50 MW Blue': { name:'50 MW Blue', type:'Top Accessory', pts:20, unlockLevel:28 },
      '120 MW Blue': { name:'120 MW Blue', type:'Top Accessory', pts:30, unlockLevel:32 },

      // Left Accessories
      'None–Left Accessory': { name:'None', type:'Left Accessory', pts:0, unlockLevel:0 },
      'Flashlight': { name:'Flashlight', type:'Left Accessory', pts:10, unlockLevel:12 },

      // Muzzles
      'None–Muzzle': { name:'None', type:'Muzzle', pts:0, unlockLevel:0 },
      'Flash Hider': { name:'Flash Hider', type:'Muzzle', pts:10, unlockLevel:0 },
      'Linear Comp': { name:'Linear Comp', type:'Muzzle', pts:10, unlockLevel:4 },
      'Standard Suppressor': { name:'Standard Suppressor', type:'Muzzle', pts:20, unlockLevel:7 },
      'Double-Port Brake': { name:'Double-Port Brake', type:'Muzzle', pts:10, unlockLevel:14 },
      'Compensated Brake': { name:'Compensated Brake', type:'Muzzle', pts:20, unlockLevel:15 },
      'CQB Suppressor': { name:'CQB Suppressor', type:'Muzzle', pts:30, unlockLevel:16 },
      'Long Suppressor': { name:'Long Suppressor', type:'Muzzle', pts:25, unlockLevel:20 },
      'Lightened Suppressor': { name:'Lightened Suppressor', type:'Muzzle', pts:30, unlockLevel:26 },

      // Barrels
      '6.8" Factory': { name:'6.8" Factory', type:'Barrel', pts:10, unlockLevel:0 },
      'Extended Barrel': { name:'Extended Barrel', type:'Barrel', pts:15, unlockLevel:1 },
      '6.8" Fluted': { name:'6.8" Fluted', type:'Barrel', pts:20, unlockLevel:14 },

      // Underbarrels
      'None–Underbarrel': { name:'None', type:'Underbarrel', pts:0, unlockLevel:0 },
      'Folding Vertical': { name:'Folding Vertical', type:'Underbarrel', pts:10, unlockLevel:2 },
      'Classic Vertical': { name:'Classic Vertical', type:'Underbarrel', pts:35, unlockLevel:8 },
      'Ribbed Vertical': { name:'Ribbed Vertical', type:'Underbarrel', pts:20, unlockLevel:11 },
      'Low-Profile Stubby': { name:'Low-Profile Stubby', type:'Underbarrel', pts:45, unlockLevel:13 },
      '6H64 Vertical': { name:'6H64 Vertical', type:'Underbarrel', pts:25, unlockLevel:16 },
      'Alloy Vertical': { name:'Alloy Vertical', type:'Underbarrel', pts:20, unlockLevel:18 },
      'Folding Stubby': { name:'Folding Stubby', type:'Underbarrel', pts:20, unlockLevel:21 },
      'Ribbed Stubby': { name:'Ribbed Stubby', type:'Underbarrel', pts:30, unlockLevel:25 },
      'Canted Stubby': { name:'Canted Stubby', type:'Underbarrel', pts:30, unlockLevel:29 },
      'Stippled Stubby': { name:'Stippled Stubby', type:'Underbarrel', pts:35, unlockLevel:31 },
      'Compact Handstop': { name:'Compact Handstop', type:'Underbarrel', pts:10, unlockLevel:36 },
      'Slim Angled': { name:'Slim Angled', type:'Underbarrel', pts:25, unlockLevel:38 },

      // Magazines
      '15RND Magazine': { name:'15RND Magazine', type:'Magazine', pts:5, unlockLevel:0 },
      '15RND Fast Mag': { name:'15RND Fast Mag', type:'Magazine', pts:10, unlockLevel:13 },
      '20RND Magazine': { name:'20RND Magazine', type:'Magazine', pts:20, unlockLevel:22 },
      '25RND Magazine': { name:'25RND Magazine', type:'Magazine', pts:45, unlockLevel:27 },

      // Ergonomics
      'None–Ergonomics': { name:'None', type:'Ergonomics', pts:0, unlockLevel:0 },
      'Improved Mag Catch': { name:'Improved Mag Catch', type:'Ergonomics', pts:5, unlockLevel:21 },

      // Ammunition
      'FMJ': { name:'FMJ', type:'Ammunition', pts:5, unlockLevel:0 },
      'Frangible': { name:'Frangible', type:'Ammunition', pts:20, unlockLevel:17 },
      'Tungsten Core': { name:'Tungsten Core', type:'Ammunition', pts:5, unlockLevel:23 },
      'Hollow Point': { name:'Hollow Point', type:'Ammunition', pts:20, unlockLevel:33 },
    }
  };
  target['SL9'] = {
    attachments: {
      // Scopes
      'Iron Sights': { name:'Iron Sights', type:'Scope', pts:5, unlockLevel:0 },
      'R4T 2.00x': { name:'R4T 2.00x', type:'Scope', pts:10, unlockLevel:0 },
      '2PRO 1.25x': { name:'2PRO 1.25x', type:'Scope', pts:10, unlockLevel:1 },
      'Mini Flex 1.00x': { name:'Mini Flex 1.00x', type:'Scope', pts:10, unlockLevel:5 },
      'CCO 2.00x': { name:'CCO 2.00x', type:'Scope', pts:10, unlockLevel:5 },
      'ST Prisim 5.00x': { name:'ST Prisim 5.00x', type:'Scope', pts:10, unlockLevel:8 },
      'R-MR 1.00x': { name:'R-MR 1.00x', type:'Scope', pts:10, unlockLevel:9 },
      'Mars-F LPVO': { name:'Mars-F LPVO', type:'Scope', pts:25, unlockLevel:11 },
      'OSA-7 1.00x': { name:'OSA-7 1.00x', type:'Scope', pts:10, unlockLevel:12 },
      'CQ RDS 1.25x': { name:'CQ RDS 1.25x', type:'Scope', pts:10, unlockLevel:17 },
      'SDO 3.50x': { name:'SDO 3.50x', type:'Scope', pts:10, unlockLevel:18 },
      'SU-231 1.50x': { name:'SU-231 1.50x', type:'Scope', pts:10, unlockLevel:19 },
      'BF-2M 2.50x': { name:'BF-2M 2.50x', type:'Scope', pts:10, unlockLevel:20 },
      'PVQ-31 4.00x': { name:'PVQ-31 4.00x', type:'Scope', pts:10, unlockLevel:21 },
      'RO-S 1.25x': { name:'RO-S 1.25x', type:'Scope', pts:10, unlockLevel:22 },
      'LDS 4.50x': { name:'LDS 4.50x', type:'Scope', pts:10, unlockLevel:25 },
      'SF-G2 5.00x': { name:'SF-G2 5.00x', type:'Scope', pts:10, unlockLevel:26 },
      '1P87 1.50x': { name:'1P87 1.50x', type:'Scope', pts:10, unlockLevel:28 },
      'RO-M 1.75x': { name:'RO-M 1.75x', type:'Scope', pts:10, unlockLevel:29 },
      'ROX 1.50x': { name:'ROX 1.50x', type:'Scope', pts:10, unlockLevel:30 },
      'Baker 3.00x': { name:'Baker 3.00x', type:'Scope', pts:10, unlockLevel:32 },
      '3VZR 1.75x': { name:'3VZR 1.75x', type:'Scope', pts:10, unlockLevel:34 },
      'Grim 1.50x': { name:'Grim 1.50x', type:'Scope', pts:25, unlockLevel:35 },
      'A-P2 1.75x': { name:'A-P2 1.75x', type:'Scope', pts:10, unlockLevel:37 },
      'PAS-35 3.00x': { name:'PAS-35 3.00x', type:'Scope', pts:25, unlockLevel:40 },
      'SU-230 LPVO': { name:'SU-230 LPVO', type:'Scope', pts:20, unlockLevel:'Season 1 Hardware 1' },

      // Optic Accessories
      'None–Optic Accessory': { name:'None', type:'Optic Accessory', pts:0, unlockLevel:0 },
      'Canted Iron Sights': { name:'Canted Iron Sights', type:'Optic Accessory', pts:5, unlockLevel:14 },
      'Canted Reflex': { name:'Canted Reflex', type:'Optic Accessory', pts:10, unlockLevel:27 },

      // Right Accessories
      'None–Right Accessory': { name:'None', type:'Right Accessory', pts:0, unlockLevel:0 },
      '5 MW Red': { name:'5 MW Red', type:'Right Accessory', pts:10, unlockLevel:9 },
      '5 MW Green': { name:'5 MW Green', type:'Right Accessory', pts:10, unlockLevel:15 },
      'Flashlight': { name:'Flashlight', type:'Right Accessory', pts:10, unlockLevel:17 },
      '50 MW Green': { name:'50 MW Green', type:'Right Accessory', pts:20, unlockLevel:21 },
      '50 MW Blue': { name:'50 MW Blue', type:'Right Accessory', pts:20, unlockLevel:24 },
      'Laser/Light Combo Red': { name:'Laser/Light Combo Red', type:'Right Accessory', pts:20, unlockLevel:29 },
      '120 MW Blue': { name:'120 MW Blue', type:'Right Accessory', pts:30, unlockLevel:36 },
      'Laser/Light Combo Green': { name:'Laser/Light Combo Green', type:'Right Accessory', pts:20, unlockLevel:39 },

      // Muzzles
      'None–Muzzle': { name:'None', type:'Muzzle', pts:0, unlockLevel:0 },
      'Flash Hider': { name:'Flash Hider', type:'Muzzle', pts:10, unlockLevel:0 },
      'Linear Comp': { name:'Linear Comp', type:'Muzzle', pts:10, unlockLevel:3 },
      'Standard Suppressor': { name:'Standard Suppressor', type:'Muzzle', pts:20, unlockLevel:7 },
      'Single-Port Brake': { name:'Single-Port Brake', type:'Muzzle', pts:10, unlockLevel:13 },
      'CQB Suppressor': { name:'CQB Suppressor', type:'Muzzle', pts:30, unlockLevel:16 },
      'Long Suppressor': { name:'Long Suppressor', type:'Muzzle', pts:25, unlockLevel:22 },
      'Double-Port Brake': { name:'Double-Port Brake', type:'Muzzle', pts:10, unlockLevel:23 },
      'Compensated Brake': { name:'Compensated Brake', type:'Muzzle', pts:20, unlockLevel:32 },
      'Lightened Suppressor': { name:'Lightened Suppressor', type:'Muzzle', pts:30, unlockLevel:37 },

      // Barrels
      '9" Factory': { name:'9" Factory', type:'Barrel', pts:10, unlockLevel:0 },
      '9" Fluted': { name:'9" Fluted', type:'Barrel', pts:20, unlockLevel:10 },
      '11" Extended': { name:'11" Extended', type:'Barrel', pts:15, unlockLevel:20 },
      '9" Heavy': { name:'9" Heavy', type:'Barrel', pts:10, unlockLevel:28 },
      '11" Heavy': { name:'11" Heavy', type:'Barrel', pts:10, unlockLevel:34 },

      // Underbarrels
      'None–Underbarrel': { name:'None', type:'Underbarrel', pts:0, unlockLevel:0 },
      'Factory Angled': { name:'Factory Angled', type:'Underbarrel', pts:15, unlockLevel:0 },
      'Folding Vertical': { name:'Folding Vertical', type:'Underbarrel', pts:10, unlockLevel:2 },
      'Alloy Vertical': { name:'Alloy Vertical', type:'Underbarrel', pts:20, unlockLevel:4 },
      'Ribbed Vertical': { name:'Ribbed Vertical', type:'Underbarrel', pts:20, unlockLevel:6 },
      'Classic Vertical': { name:'Classic Vertical', type:'Underbarrel', pts:35, unlockLevel:8 },
      '6H64 Vertical': { name:'6H64 Vertical', type:'Underbarrel', pts:25, unlockLevel:11 },
      'Folding Stubby': { name:'Folding Stubby', type:'Underbarrel', pts:20, unlockLevel:14 },
      'Low-Profile Stubby': { name:'Low-Profile Stubby', type:'Underbarrel', pts:45, unlockLevel:19 },
      'Ribbed Stubby': { name:'Ribbed Stubby', type:'Underbarrel', pts:30, unlockLevel:27 },
      'Canted Stubby': { name:'Canted Stubby', type:'Underbarrel', pts:30, unlockLevel:33 },
      'Stippled Stubby': { name:'Stippled Stubby', type:'Underbarrel', pts:35, unlockLevel:38 },
      'Compact Handstop': { name:'Compact Handstop', type:'Underbarrel', pts:10, unlockLevel:39 },

      // Magazines
      '30RND Magazine': { name:'30RND Magazine', type:'Magazine', pts:5, unlockLevel:0 },
      '60RND Magazine': { name:'60RND Magazine', type:'Magazine', pts:55, unlockLevel:30 },

      // Ergonomics
      'None–Ergonomics': { name:'None', type:'Ergonomics', pts:0, unlockLevel:0 },
      'Improved Mag Catch': { name:'Improved Mag Catch', type:'Ergonomics', pts:5, unlockLevel:31 },

      // Ammunition
      'FMJ': { name:'FMJ', type:'Ammunition', pts:5, unlockLevel:0 },
      'Frangible': { name:'Frangible', type:'Ammunition', pts:20, unlockLevel:6 },
      'Tungsten Core': { name:'Tungsten Core', type:'Ammunition', pts:5, unlockLevel:15 },
      'Hollow Point': { name:'Hollow Point', type:'Ammunition', pts:20, unlockLevel:25 },
      'Synthetic Tip': { name:'Synthetic Tip', type:'Ammunition', pts:20, unlockLevel:36 },
    }
  };
  target['PW7A2'] = {
    attachments: {
      // Scopes
      'Iron Sights':        { name:'Iron Sights',        type:'Scope', pts:5,  unlockLevel:0 },
      'RO-M 1.75x':         { name:'RO-M 1.75x',         type:'Scope', pts:10, unlockLevel:0 },
      'Mini Flex 1.00x':    { name:'Mini Flex 1.00x',    type:'Scope', pts:10, unlockLevel:0 },
      'R4T 2.00x':          { name:'R4T 2.00x',          type:'Scope', pts:10, unlockLevel:1 },
      'SDO 3.50x':          { name:'SDO 3.50x',          type:'Scope', pts:10, unlockLevel:2 },
      '2PRO 1.25x':         { name:'2PRO 1.25x',         type:'Scope', pts:10, unlockLevel:5 },
      '3VZR 1.75x':         { name:'3VZR 1.75x',         type:'Scope', pts:10, unlockLevel:6 },
      'LDS 4.50x':          { name:'LDS 4.50x',          type:'Scope', pts:10, unlockLevel:7 },
      'OSA-7 1.00x':        { name:'OSA-7 1.00x',        type:'Scope', pts:10, unlockLevel:9 },
      'SU-231 1.50x':       { name:'SU-231 1.50x',       type:'Scope', pts:10, unlockLevel:11 },
      'BF-2M 2.50x':        { name:'BF-2M 2.50x',        type:'Scope', pts:10, unlockLevel:13 },
      'CQ RDS 1.25x':       { name:'CQ RDS 1.25x',       type:'Scope', pts:10, unlockLevel:15 },
      'Mars-F LPVO':        { name:'Mars-F LPVO',        type:'Scope', pts:25, unlockLevel:17 },
      'ROX 1.50x':          { name:'ROX 1.50x',          type:'Scope', pts:10, unlockLevel:19 },
      'ST Prisim 5.00x':    { name:'ST Prisim 5.00x',    type:'Scope', pts:10, unlockLevel:21 },
      'A-P2 1.75x':         { name:'A-P2 1.75x',         type:'Scope', pts:10, unlockLevel:23 },
      'Grim 1.50x':         { name:'Grim 1.50x',         type:'Scope', pts:25, unlockLevel:25 },
      'CCO 2.00x':          { name:'CCO 2.00x',          type:'Scope', pts:10, unlockLevel:27 },
      'R-MR 1.00x':         { name:'R-MR 1.00x',         type:'Scope', pts:10, unlockLevel:29 },
      'PVQ-31 4.00x':       { name:'PVQ-31 4.00x',       type:'Scope', pts:10, unlockLevel:31 },
      'Baker 3.00x':        { name:'Baker 3.00x',        type:'Scope', pts:10, unlockLevel:32 },
      'RO-S 1.25x':         { name:'RO-S 1.25x',         type:'Scope', pts:10, unlockLevel:34 },
      'SF-G2 5.00x':        { name:'SF-G2 5.00x',        type:'Scope', pts:10, unlockLevel:36 },
      '1P87 1.50x':         { name:'1P87 1.50x',         type:'Scope', pts:10, unlockLevel:38 },
      'PAS-35 3.00x':       { name:'PAS-35 3.00x',       type:'Scope', pts:25, unlockLevel:39 },
      'SU-230 LPVO':        { name:'SU-230 LPVO',        type:'Scope', pts:20, unlockLevel:'Season 1 Hardware 1' },

      // Optic Accessories
      'None–Optic Accessory': { name:'None',               type:'Optic Accessory', pts:0,  unlockLevel:0 },
      'Canted Iron Sights':   { name:'Canted Iron Sights', type:'Optic Accessory', pts:5,  unlockLevel:10 },
      'Canted Reflex':        { name:'Canted Reflex',      type:'Optic Accessory', pts:10, unlockLevel:20 },
      'Piggyback Reflex':     { name:'Piggyback Reflex',   type:'Optic Accessory', pts:10, unlockLevel:30 },

      // Right Accessories
      'None–Right Accessory': { name:'None',           type:'Right Accessory', pts:0,  unlockLevel:0 },
      '5 MW Red':             { name:'5 MW Red',       type:'Right Accessory', pts:10, unlockLevel:5 },
      '5 MW Green':           { name:'5 MW Green',     type:'Right Accessory', pts:10, unlockLevel:12 },
      '50 MW Green':          { name:'50 MW Green',    type:'Right Accessory', pts:20, unlockLevel:19 },
      '50 MW Blue':           { name:'50 MW Blue',     type:'Right Accessory', pts:20, unlockLevel:26 },
      '120 MW Blue':          { name:'120 MW Blue',    type:'Right Accessory', pts:30, unlockLevel:33 },

      // Left Accessories
      'None–Left Accessory':  { name:'None',       type:'Left Accessory', pts:0,  unlockLevel:0 },
      'Flashlight':           { name:'Flashlight', type:'Left Accessory', pts:10, unlockLevel:8 },

      // Muzzles
      'None–Muzzle':          { name:'None',               type:'Muzzle', pts:0,  unlockLevel:0 },
      'Flash Hider':          { name:'Flash Hider',        type:'Muzzle', pts:10, unlockLevel:0 },
      'Single-Port Brake':    { name:'Single-Port Brake',  type:'Muzzle', pts:5,  unlockLevel:2 },
      'Linear Comp':          { name:'Linear Comp',        type:'Muzzle', pts:10, unlockLevel:6 },
      'Double-Port Brake':    { name:'Double-Port Brake',  type:'Muzzle', pts:10, unlockLevel:11 },
      'Compensated Brake':    { name:'Compensated Brake',  type:'Muzzle', pts:20, unlockLevel:16 },
      'Standard Suppressor':  { name:'Standard Suppressor',type:'Muzzle', pts:20, unlockLevel:23 },
      'Long Suppressor':      { name:'Long Suppressor',    type:'Muzzle', pts:25, unlockLevel:27 },
      'CQB Suppressor':       { name:'CQB Suppressor',     type:'Muzzle', pts:30, unlockLevel:31 },
      'Lightened Suppressor': { name:'Lightened Suppressor',type:'Muzzle',pts:30, unlockLevel:36 },

      // Barrels
      '180 mm Standard':      { name:'180mm Standard',   type:'Barrel', pts:10, unlockLevel:0 },
      '180 mm Prototype':     { name:'180mm Prototype',  type:'Barrel', pts:10, unlockLevel:14 },

      // Underbarrels
      'None–Underbarrel':     { name:'None',              type:'Underbarrel', pts:0,  unlockLevel:0 },
      'Folding Vertical':     { name:'Folding Vertical',  type:'Underbarrel', pts:10, unlockLevel:1 },
      'Compact Handstop':     { name:'Compact Handstop',  type:'Underbarrel', pts:10, unlockLevel:4 },
      'Alloy Vertical':       { name:'Alloy Vertical',    type:'Underbarrel', pts:20, unlockLevel:7 },
      'Ribbed Vertical':      { name:'Ribbed Vertical',   type:'Underbarrel', pts:20, unlockLevel:9 },
      'Folding Stubby':       { name:'Folding Stubby',    type:'Underbarrel', pts:20, unlockLevel:13 },
      'Slim Angled':          { name:'Slim Angled',       type:'Underbarrel', pts:20, unlockLevel:17 },
      '6H64 Vertical':        { name:'6H64 Vertical',     type:'Underbarrel', pts:25, unlockLevel:21 },
      'Ribbed Stubby':        { name:'Ribbed Stubby',     type:'Underbarrel', pts:30, unlockLevel:25 },
      'Canted Stubby':        { name:'Canted Stubby',     type:'Underbarrel', pts:30, unlockLevel:29 },
      'Classic Vertical':     { name:'Classic Vertical',  type:'Underbarrel', pts:35, unlockLevel:33 },
      'Stippled Stubby':      { name:'Stippled Stubby',   type:'Underbarrel', pts:35, unlockLevel:37 },
      'Low-Profile Stubby':   { name:'Low-Profile Stubby',type:'Underbarrel', pts:45, unlockLevel:40 },

      // Magazines
      '30RND Magazine':       { name:'30RND Magazine',  type:'Magazine', pts:5,  unlockLevel:0 },
      '30RND Fast Mag':       { name:'30RND Fast Mag',  type:'Magazine', pts:10, unlockLevel:15 },
      '20RND Magazine':       { name:'20RND Magazine',  type:'Magazine', pts:5,  unlockLevel:24 },
      '40RND Magazine':       { name:'40RND Magazine',  type:'Magazine', pts:25, unlockLevel:34 },

      // Ergonomics
      'None–Ergonomics':      { name:'None',              type:'Ergonomics', pts:0, unlockLevel:0 },
      'Improved Mag Catch':   { name:'Improved Mag Catch',type:'Ergonomics', pts:5, unlockLevel:22 },

      // Ammunition
      'FMJ':                  { name:'FMJ',            type:'Ammunition', pts:5,  unlockLevel:0 },
      'Tungsten Core':        { name:'Tungsten Core',  type:'Ammunition', pts:5,  unlockLevel:3 },
      'Frangible':            { name:'Frangible',      type:'Ammunition', pts:20, unlockLevel:18 },
      'Hollow Point':         { name:'Hollow Point',   type:'Ammunition', pts:20, unlockLevel:28 },
      'Synthetic Tip':        { name:'Synthetic Tip',  type:'Ammunition', pts:30, unlockLevel:38 },
    }
  };
  target['KV9'] = {
    attachments: {
      // Scopes
      'Iron Sights':      { name:'Iron Sights',      type:'Scope', pts:5,  unlockLevel:0 },
      'OSA-7 1.00x':      { name:'OSA-7 1.00x',      type:'Scope', pts:10, unlockLevel:0 },
      'SU-231 1.50x':     { name:'SU-231 1.50x',     type:'Scope', pts:10, unlockLevel:0 },
      'Baker 3.00x':      { name:'Baker 3.00x',      type:'Scope', pts:10, unlockLevel:1 },
      'R-MR 1.00x':       { name:'R-MR 1.00x',       type:'Scope', pts:10, unlockLevel:3 },
      '2PRO 1.25x':       { name:'2PRO 1.25x',       type:'Scope', pts:10, unlockLevel:4 },
      'LDS 4.50x':        { name:'LDS 4.50x',        type:'Scope', pts:10, unlockLevel:6 },
      '3VZR 1.75x':       { name:'3VZR 1.75x',       type:'Scope', pts:10, unlockLevel:7 },
      'CQ RDS 1.25x':     { name:'CQ RDS 1.25x',     type:'Scope', pts:10, unlockLevel:9 },
      '1P87 1.50x':       { name:'1P87 1.50x',       type:'Scope', pts:10, unlockLevel:10 },
      'SDO 3.50x':        { name:'SDO 3.50x',        type:'Scope', pts:10, unlockLevel:13 },
      'BF-2M 2.50x':      { name:'BF-2M 2.50x',      type:'Scope', pts:10, unlockLevel:15 },
      'RO-M 1.75x':       { name:'RO-M 1.75x',       type:'Scope', pts:10, unlockLevel:16 },
      'Mini Flex 1.00x':  { name:'Mini Flex 1.00x',  type:'Scope', pts:10, unlockLevel:17 },
      'SF-G2 5.00x':      { name:'SF-G2 5.00x',      type:'Scope', pts:10, unlockLevel:18 },
      'CCO 2.00x':        { name:'CCO 2.00x',        type:'Scope', pts:10, unlockLevel:21 },
      'PVQ-31 4.00x':     { name:'PVQ-31 4.00x',     type:'Scope', pts:10, unlockLevel:22 },
      'ROX 1.50x':        { name:'ROX 1.50x',        type:'Scope', pts:10, unlockLevel:23 },
      'Mars-F LPVO':      { name:'Mars-F LPVO',      type:'Scope', pts:25, unlockLevel:24 },
      'R4T 2.00x':        { name:'R4T 2.00x',        type:'Scope', pts:10, unlockLevel:25 },
      'RO-S 1.25x':       { name:'RO-S 1.25x',       type:'Scope', pts:10, unlockLevel:27 },
      'ST Prisim 5.00x':  { name:'ST Prisim 5.00x',  type:'Scope', pts:10, unlockLevel:28 },
      'PAS-35 3.00x':     { name:'PAS-35 3.00x',     type:'Scope', pts:25, unlockLevel:31 },
      'A-P2 1.75x':       { name:'A-P2 1.75x',       type:'Scope', pts:10, unlockLevel:33 },
      'Grim 1.50x':       { name:'Grim 1.50x',       type:'Scope', pts:25, unlockLevel:34 },
      'SU-230 LPVO':      { name:'SU-230 LPVO',      type:'Scope', pts:20, unlockLevel:'Season 1 Hardware 1' },

      // Optic Accessories
      'None–Optic Accessory': { name:'None',               type:'Optic Accessory', pts:0,  unlockLevel:0 },
      'Canted Iron Sights':   { name:'Canted Iron Sights', type:'Optic Accessory', pts:5,  unlockLevel:19 },
      'Canted Reflex':        { name:'Canted Reflex',      type:'Optic Accessory', pts:10, unlockLevel:36 },

      // Top Accessories
      'None–Top Accessory': { name:'None',          type:'Top Accessory', pts:0,  unlockLevel:0 },
      '5 MW Red':           { name:'5 MW Red',      type:'Top Accessory', pts:10, unlockLevel:0 },
      '5 MW Green':         { name:'5 MW Green',    type:'Top Accessory', pts:10, unlockLevel:14 },
      '50 MW Green':        { name:'50 MW Green',   type:'Top Accessory', pts:20, unlockLevel:21 },
      '50 MW Blue':         { name:'50 MW Blue',    type:'Top Accessory', pts:20, unlockLevel:30 },
      '120 MW Blue':        { name:'120 MW Blue',   type:'Top Accessory', pts:30, unlockLevel:32 },

      // Right Accessories
      'None–Right Accessory': { name:'None',       type:'Right Accessory', pts:0,  unlockLevel:0 },
      'Flashlight':           { name:'Flashlight', type:'Right Accessory', pts:10, unlockLevel:4 },

      // Muzzles
      'None–Muzzle':          { name:'None',                type:'Muzzle', pts:0,  unlockLevel:0 },
      'Flash Hider':          { name:'Flash Hider',         type:'Muzzle', pts:10, unlockLevel:0 },
      'Standard Suppressor':  { name:'Standard Suppressor', type:'Muzzle', pts:20, unlockLevel:1 },
      'Single-Port Brake':    { name:'Single-Port Brake',   type:'Muzzle', pts:5,  unlockLevel:5 },
      'Linear Comp':          { name:'Linear Comp',         type:'Muzzle', pts:10, unlockLevel:8 },
      'CQB Suppressor':       { name:'CQB Suppressor',      type:'Muzzle', pts:30, unlockLevel:11 },
      'Double-Port Brake':    { name:'Double-Port Brake',   type:'Muzzle', pts:10, unlockLevel:18 },
      'Long Suppressor':      { name:'Long Suppressor',     type:'Muzzle', pts:25, unlockLevel:23 },
      'Lightened Suppressor': { name:'Lightened Suppressor',type:'Muzzle', pts:30, unlockLevel:28 },
      'Compensated Brake':    { name:'Compensated Brake',   type:'Muzzle', pts:20, unlockLevel:34 },

      // Barrels
      '5.5" Factory':   { name:'5.5" Factory',   type:'Barrel', pts:10, unlockLevel:0 },
      '6.5" Extended':  { name:'6.5" Extended',  type:'Barrel', pts:15, unlockLevel:10 },
      '5.5" Fluted':    { name:'5.5" Fluted',    type:'Barrel', pts:20, unlockLevel:31 },

      // Underbarrels
      'None–Underbarrel':   { name:'None',              type:'Underbarrel', pts:0,  unlockLevel:0 },
      'Folding Vertical':   { name:'Folding Vertical',  type:'Underbarrel', pts:10, unlockLevel:0 },
      'Alloy Vertical':     { name:'Alloy Vertical',    type:'Underbarrel', pts:20, unlockLevel:2 },
      'Ribbed Vertical':    { name:'Ribbed Vertical',   type:'Underbarrel', pts:20, unlockLevel:7 },
      '6H64 Vertical':      { name:'6H64 Vertical',     type:'Underbarrel', pts:25, unlockLevel:12 },
      'Folding Stubby':     { name:'Folding Stubby',    type:'Underbarrel', pts:20, unlockLevel:16 },
      'Low-Profile Stubby': { name:'Low-Profile Stubby',type:'Underbarrel', pts:45, unlockLevel:19 },
      'Ribbed Stubby':      { name:'Ribbed Stubby',     type:'Underbarrel', pts:30, unlockLevel:22 },
      'Classic Vertical':   { name:'Classic Vertical',  type:'Underbarrel', pts:35, unlockLevel:24 },
      'Canted Stubby':      { name:'Canted Stubby',     type:'Underbarrel', pts:30, unlockLevel:26 },
      'Stippled Stubby':    { name:'Stippled Stubby',   type:'Underbarrel', pts:35, unlockLevel:29 },
      'Compact Handstop':   { name:'Compact Handstop',  type:'Underbarrel', pts:10, unlockLevel:30 },
      'Slim Angled':        { name:'Slim Angled',       type:'Underbarrel', pts:25, unlockLevel:35 },

      // Magazines
      '17RND Magazine':   { name:'17RND Magazine',   type:'Magazine', pts:5,  unlockLevel:0 },
      '17RND Fast Mag':   { name:'17RND Fast Mag',   type:'Magazine', pts:10, unlockLevel:0 },
      '23RND Magazine':   { name:'23RND Magazine',   type:'Magazine', pts:25, unlockLevel:15 },
      '27RND Magazine':   { name:'27RND Magazine',   type:'Magazine', pts:45, unlockLevel:26 },

      // Ammunition
      'FMJ':            { name:'FMJ',           type:'Ammunition', pts:5,  unlockLevel:0 },
      'Frangible':      { name:'Frangible',     type:'Ammunition', pts:20, unlockLevel:0 },
      'Hollow Point':   { name:'Hollow Point',  type:'Ammunition', pts:20, unlockLevel:12 },
      'Tungsten Core':  { name:'Tungsten Core', type:'Ammunition', pts:5,  unlockLevel:20 },
    }
  };
  target['USG-90'] = {
    attachments: {
      // Scopes
      'Iron Sights':     { name:'Iron Sights',     type:'Scope', pts:5,  unlockLevel:0 },
      'SU-231 1.50x':    { name:'SU-231 1.50x',    type:'Scope', pts:10, unlockLevel:0 },
      'R-MR 1.00x':      { name:'R-MR 1.00x',      type:'Scope', pts:10, unlockLevel:1 },
      'R4T 2.00x':       { name:'R4T 2.00x',       type:'Scope', pts:10, unlockLevel:2 },
      'Baker 3.00x':     { name:'Baker 3.00x',     type:'Scope', pts:10, unlockLevel:3 },
      'OSA-7 1.00x':     { name:'OSA-7 1.00x',     type:'Scope', pts:10, unlockLevel:4 },
      'RO-M 1.75x':      { name:'RO-M 1.75x',      type:'Scope', pts:10, unlockLevel:6 },
      'PVQ-31 4.00x':    { name:'PVQ-31 4.00x',    type:'Scope', pts:10, unlockLevel:7 },
      'A-P2 1.75x':      { name:'A-P2 1.75x',      type:'Scope', pts:10, unlockLevel:8 },
      'CQ RDS 1.25x':    { name:'CQ RDS 1.25x',    type:'Scope', pts:10, unlockLevel:9 },
      'BF-2M 2.50x':     { name:'BF-2M 2.50x',     type:'Scope', pts:10, unlockLevel:11 },
      'ROX 1.50x':       { name:'ROX 1.50x',       type:'Scope', pts:10, unlockLevel:13 },
      'Mars-F LPVO':     { name:'Mars-F LPVO',     type:'Scope', pts:25, unlockLevel:14 },
      'ST Prisim 5.00x': { name:'ST Prisim 5.00x', type:'Scope', pts:10, unlockLevel:16 },
      'Mini Flex 1.00x': { name:'Mini Flex 1.00x', type:'Scope', pts:10, unlockLevel:19 },
      'CCO 2.00x':       { name:'CCO 2.00x',       type:'Scope', pts:10, unlockLevel:22 },
      '3VZR 1.75x':      { name:'3VZR 1.75x',      type:'Scope', pts:10, unlockLevel:23 },
      'Grim 1.50x':      { name:'Grim 1.50x',      type:'Scope', pts:25, unlockLevel:24 },
      'SDO 3.50x':       { name:'SDO 3.50x',       type:'Scope', pts:10, unlockLevel:27 },
      '1P87 1.50x':      { name:'1P87 1.50x',      type:'Scope', pts:10, unlockLevel:29 },
      '2PRO 1.25x':      { name:'2PRO 1.25x',      type:'Scope', pts:10, unlockLevel:31 },
      'LDS 4.50x':       { name:'LDS 4.50x',       type:'Scope', pts:10, unlockLevel:33 },
      'PAS-35 3.00x':    { name:'PAS-35 3.00x',    type:'Scope', pts:25, unlockLevel:35 },
      'RO-S 1.25x':      { name:'RO-S 1.25x',      type:'Scope', pts:10, unlockLevel:37 },
      'SF-G2 5.00x':     { name:'SF-G2 5.00x',     type:'Scope', pts:10, unlockLevel:39 },
      'SU-230 LPVO':     { name:'SU-230 LPVO',     type:'Scope', pts:20, unlockLevel:'Season 1 Hardware 1' },

      // Optic Accessories
      'None–Optic Accessory': { name:'None',               type:'Optic Accessory', pts:0,  unlockLevel:0 },
      'Canted Iron Sights':   { name:'Canted Iron Sights', type:'Optic Accessory', pts:5,  unlockLevel:10 },
      'Canted Reflex':        { name:'Canted Reflex',      type:'Optic Accessory', pts:10, unlockLevel:20 },
      'Piggyback Reflex':     { name:'Piggyback Reflex',   type:'Optic Accessory', pts:10, unlockLevel:30 },

      // Left Accessories
      'None–Left Accessory': { name:'None',          type:'Left Accessory', pts:0,  unlockLevel:0 },
      '5 MW Red':            { name:'5 MW Red',      type:'Left Accessory', pts:10, unlockLevel:5 },
      '5 MW Green':          { name:'5 MW Green',    type:'Left Accessory', pts:10, unlockLevel:12 },
      '50 MW Green':         { name:'50 MW Green',   type:'Left Accessory', pts:20, unlockLevel:18 },
      '50 MW Blue':          { name:'50 MW Blue',    type:'Left Accessory', pts:20, unlockLevel:25 },
      '120 MW Blue':         { name:'120 MW Blue',   type:'Left Accessory', pts:30, unlockLevel:36 },

      // Right Accessories
      'None–Right Accessory': { name:'None',       type:'Right Accessory', pts:0,  unlockLevel:0 },
      'Flashlight':           { name:'Flashlight', type:'Right Accessory', pts:10, unlockLevel:23 },

      // Muzzles
      'None–Muzzle':          { name:'None',                type:'Muzzle', pts:0,  unlockLevel:0 },
      'Single-Port Brake':    { name:'Single-Port Brake',   type:'Muzzle', pts:5,  unlockLevel:0 },
      'Linear Comp':          { name:'Linear Comp',         type:'Muzzle', pts:10, unlockLevel:1 },
      'Double-Port Brake':    { name:'Double-Port Brake',   type:'Muzzle', pts:10, unlockLevel:6 },
      'Compensated Brake':    { name:'Compensated Brake',   type:'Muzzle', pts:20, unlockLevel:11 },
      'Standard Suppressor':  { name:'Standard Suppressor', type:'Muzzle', pts:20, unlockLevel:16 },
      'Long Suppressor':      { name:'Long Suppressor',     type:'Muzzle', pts:25, unlockLevel:21 },
      'CQB Suppressor':       { name:'CQB Suppressor',      type:'Muzzle', pts:30, unlockLevel:26 },
      'Flash Hider':          { name:'Flash Hider',         type:'Muzzle', pts:10, unlockLevel:32 },
      'Lightened Suppressor': { name:'Lightened Suppressor',type:'Muzzle', pts:30, unlockLevel:36 },

      // Barrels
      '246mm Factory':   { name:'246mm Factory',   type:'Barrel', pts:10, unlockLevel:0 },
      '264mm Prototype': { name:'264mm Prototype', type:'Barrel', pts:10, unlockLevel:3 },
      '407mm CIV-S':     { name:'407mm CIV-S',     type:'Barrel', pts:10, unlockLevel:15 },
      '264mm Fluted':    { name:'264mm Fluted',    type:'Barrel', pts:20, unlockLevel:34 },

      // Magazines
      '50RND Magazine': { name:'50RND Magazine', type:'Magazine', pts:5, unlockLevel:0 },

      // Ergonomics
      'None–Ergonomics':     { name:'None',               type:'Ergonomics', pts:0, unlockLevel:0 },
      'Improved Mag Catch':  { name:'Improved Mag Catch', type:'Ergonomics', pts:5, unlockLevel:13 },

      // Ammunition
      'FMJ':           { name:'FMJ',           type:'Ammunition', pts:5,  unlockLevel:0 },
      'Tungsten Core': { name:'Tungsten Core', type:'Ammunition', pts:5,  unlockLevel:8 },
      'Polymer Case':  { name:'Polymer Case',  type:'Ammunition', pts:10, unlockLevel:17 },
      'Hollow Point':  { name:'Hollow Point',  type:'Ammunition', pts:20, unlockLevel:40 },
      'Frangible':     { name:'Frangible',     type:'Ammunition', pts:20, unlockLevel:28 },
    }
  };

  // Sniper Rifles
  target['M2010 ESR'] = {
    attachments: {
      // Scopes
      'Iron Sights':            { name:'Iron Sights',            type:'Scope', pts:15, unlockLevel:0 },
      'S-VPS 6.00x':            { name:'S-VPS 6.00x',            type:'Scope', pts:10, unlockLevel:0 },
      'Baker 3.00x':            { name:'Baker 3.00x',            type:'Scope', pts:10, unlockLevel:1 },
      'R-MR 1.00x':             { name:'R-MR 1.00x',             type:'Scope', pts:10, unlockLevel:4 },
      'PVQ-31 4.00x':           { name:'PVQ-31 4.00x',           type:'Scope', pts:10, unlockLevel:6 },
      'CQ RDS 1.25x':           { name:'CQ RDS 1.25x',           type:'Scope', pts:10, unlockLevel:8 },
      'SSDS 6.00x':             { name:'SSDS 6.00x',             type:'Scope', pts:10, unlockLevel:10 },
      'CCO 2.00x':              { name:'CCO 2.00x',              type:'Scope', pts:10, unlockLevel:12 },
      'NGFC LPVO':              { name:'NGFC LPVO',              type:'Scope', pts:25, unlockLevel:14 },
      'Grim 1.50x':             { name:'Grim 1.50x',             type:'Scope', pts:25, unlockLevel:15 },
      'ST Prisim 5.00x':        { name:'ST Prisim 5.00x',        type:'Scope', pts:10, unlockLevel:16 },
      'BF-2M 2.50x':            { name:'BF-2M 2.50x',            type:'Scope', pts:10, unlockLevel:17 },
      'MC-CO LPVO':             { name:'MC-CO LPVO',             type:'Scope', pts:25, unlockLevel:18 },
      '2PRO 1.25x':             { name:'2PRO 1.25x',             type:'Scope', pts:10, unlockLevel:19 },
      'SDO 3.50x':              { name:'SDO 3.50x',              type:'Scope', pts:10, unlockLevel:20 },
      'A-P2 1.75x':             { name:'A-P2 1.75x',             type:'Scope', pts:10, unlockLevel:21 },
      'NFX 8.00x':              { name:'NFX 8.00x',              type:'Scope', pts:10, unlockLevel:22 },
      'ROX 1.50x':              { name:'ROX 1.50x',              type:'Scope', pts:10, unlockLevel:23 },
      'SF-G2 5.00x':            { name:'SF-G2 5.00x',            type:'Scope', pts:10, unlockLevel:24 },
      'OSA-7 1.00x':            { name:'OSA-7 1.00x',            type:'Scope', pts:10, unlockLevel:25 },
      'LERT 8.00x':             { name:'LERT 8.00x',             type:'Scope', pts:10, unlockLevel:26 },
      'PAS-35 3.00x':           { name:'PAS-35 3.00x',           type:'Scope', pts:25, unlockLevel:27 },
      'RO-S 1.25x':             { name:'RO-S 1.25x',             type:'Scope', pts:10, unlockLevel:28 },
      'R4T 2.00x':              { name:'R4T 2.00x',              type:'Scope', pts:10, unlockLevel:29 },
      'R-VPS 10.00x':           { name:'R-VPS 10.00x',           type:'Scope', pts:10, unlockLevel:30 },
      'Mini Flex 1.00x':        { name:'Mini Flex 1.00x',        type:'Scope', pts:10, unlockLevel:31 },
      'DVO LPVO':               { name:'DVO LPVO',               type:'Scope', pts:25, unlockLevel:32 },
      'SU-231 1.50x':           { name:'SU-231 1.50x',           type:'Scope', pts:10, unlockLevel:33 },
      'SM Rifle Variable':      { name:'SM Rifle Variable',      type:'Scope', pts:25, unlockLevel:34 },
      '3VZR 1.75x':             { name:'3VZR 1.75x',             type:'Scope', pts:10, unlockLevel:35 },
      'LDS 4.50x':              { name:'LDS 4.50x',              type:'Scope', pts:10, unlockLevel:36 },
      'RO-M 1.75x':             { name:'RO-M 1.75x',             type:'Scope', pts:10, unlockLevel:37 },
      'TS-HD 6.00x':            { name:'TS-HD 6.00x',            type:'Scope', pts:25, unlockLevel:38 },
      '1P87 1.50x':             { name:'1P87 1.50x',             type:'Scope', pts:10, unlockLevel:39 },
      '1P88 Variable':          { name:'1P88 Variable',          type:'Scope', pts:25, unlockLevel:40 },
      'SU-230 LPVO':            { name:'SU-230 LPVO',            type:'Scope', pts:20, unlockLevel:'Season 1 Hardware 1' },

      // Optic Accessories
      'None–Optic Accessory':           { name:'None',                          type:'Optic Accessory', pts:0,  unlockLevel:0 },
      'Canted Reflex':                  { name:'Canted Reflex',                 type:'Optic Accessory', pts:10, unlockLevel:0 },
      'Piggyback Reflex':               { name:'Piggyback Reflex',              type:'Optic Accessory', pts:10, unlockLevel:0 },
      'Canted Iron Sight':              { name:'Canted Iron Sight',             type:'Optic Accessory', pts:5,  unlockLevel:4 },
      'Adjustable Magnification 2.00x': { name:'Adjustable Magnification 2.00x',type:'Optic Accessory', pts:10, unlockLevel:10 },
      'Adjustable Magnification 3.00x': { name:'Adjustable Magnification 3.00x',type:'Optic Accessory', pts:10, unlockLevel:19 },
      'Adjustable Magnification 4.00x': { name:'Adjustable Magnification 4.00x',type:'Optic Accessory', pts:10, unlockLevel:23 },
      'Anti-Glare Coating':             { name:'Anti-Glare Coating',            type:'Optic Accessory', pts:10, unlockLevel:31 },

      // Top Accessories
      'None–Top Accessory':  { name:'None',         type:'Top Accessory', pts:0,  unlockLevel:0 },
      '5 MW Red':            { name:'5 MW Red',     type:'Top Accessory', pts:10, unlockLevel:2 },
      '5 MW Green':          { name:'5 MW Green',   type:'Top Accessory', pts:10, unlockLevel:7 },
      '50 MW Green':         { name:'50 MW Green',  type:'Top Accessory', pts:20, unlockLevel:18 },
      '50 MW Blue':          { name:'50 MW Blue',   type:'Top Accessory', pts:20, unlockLevel:29 },
      '120 MW Blue':         { name:'120 MW Blue',  type:'Top Accessory', pts:30, unlockLevel:33 },

      // Left Accessories
      'None–Left Accessory': { name:'None',          type:'Left Accessory', pts:0,  unlockLevel:0 },
      'Range Finder':        { name:'Range Finder',  type:'Left Accessory', pts:15, unlockLevel:0 },
      'Flashlight':          { name:'Flashlight',    type:'Left Accessory', pts:10, unlockLevel:0 },

      // Muzzles
      'None–Muzzle':          { name:'None',                type:'Muzzle', pts:0,  unlockLevel:0 },
      'Single-Port Brake':    { name:'Single-Port Brake',   type:'Muzzle', pts:5,  unlockLevel:0 },
      'Compensated Brake':    { name:'Compensated Brake',   type:'Muzzle', pts:20, unlockLevel:0 },
      'Flash Hider':          { name:'Flash Hider',         type:'Muzzle', pts:10, unlockLevel:7 },
      'Double-Port Brake':    { name:'Double-Port Brake',   type:'Muzzle', pts:10, unlockLevel:9 },
      'Standard Suppressor':  { name:'Standard Suppressor', type:'Muzzle', pts:20, unlockLevel:12 },
      'Long Suppressor':      { name:'Long Suppressor',     type:'Muzzle', pts:25, unlockLevel:21 },
      'CQB Suppressor':       { name:'CQB Suppressor',      type:'Muzzle', pts:30, unlockLevel:28 },
      'Lightened Suppressor': { name:'Lightened Suppressor',type:'Muzzle', pts:30, unlockLevel:34 },

      // Barrels
      '24" Fluted':  { name:'24" Fluted',  type:'Barrel', pts:20, unlockLevel:0 },
      '24" Full':    { name:'24" Full',    type:'Barrel', pts:10, unlockLevel:11 },
      '26" Carbon':  { name:'26" Carbon',  type:'Barrel', pts:15, unlockLevel:16 },

      // Underbarrels
      'None–Underbarrel':     { name:'None',                type:'Underbarrel', pts:0,  unlockLevel:0 },
      'Bipod':                { name:'Bipod',              type:'Underbarrel', pts:10, unlockLevel:0 },
      'Full Angled':          { name:'Full Angled',        type:'Underbarrel', pts:5,  unlockLevel:0 },
      'Low-Profile Stubby':   { name:'Low-Profile Stubby', type:'Underbarrel', pts:10, unlockLevel:1 },
      'Slim Angled':          { name:'Slim Angled',        type:'Underbarrel', pts:15, unlockLevel:14 },
      'QD Grip Pod':          { name:'QD Grip Pod',        type:'Underbarrel', pts:10, unlockLevel:22 },
      'Classic Grip Pod':     { name:'Classic Grip Pod',   type:'Underbarrel', pts:20, unlockLevel:37 },

      // Magazines
      '5RND Magazine': { name:'5RND Magazine', type:'Magazine', pts:5, unlockLevel:0 },
      '5RND Fast Mag': { name:'5RND Fast Mag', type:'Magazine', pts:10, unlockLevel:15 },
      '8RND Magazine': { name:'8RND Magazine', type:'Magazine', pts:25, unlockLevel:24 },

      // Ergonomics
      'None–Ergonomics': { name:'None',     type:'Ergonomics', pts:0, unlockLevel:0 },
      'DLC Bolt':        { name:'DLC Bolt', type:'Ergonomics', pts:30, unlockLevel:13 },

      // Ammunition
      'FMJ':          { name:'FMJ',          type:'Ammunition', pts:5,  unlockLevel:0 },
      'Match Grade':  { name:'Match Grade',  type:'Ammunition', pts:10, unlockLevel:0 },
      'Tungsten Core':{ name:'Tungsten Core',type:'Ammunition', pts:5,  unlockLevel:3 },
      'Frangible':    { name:'Frangible',    type:'Ammunition', pts:20, unlockLevel:26 },
    }
  };
  target['Mini Scout'] = {
    attachments: {
      // Scopes
      'Iron Sights':           { name:'Iron Sights',           type:'Scope', pts:15, unlockLevel:0 },
      'DVO LPVO':              { name:'DVO LPVO',              type:'Scope', pts:25, unlockLevel:0 },
      'CCO 2.00x':             { name:'CCO 2.00x',             type:'Scope', pts:10, unlockLevel:1 },
      'ST Prism 5.00x':        { name:'ST Prism 5.00x',        type:'Scope', pts:10, unlockLevel:2 },
      'SU-231 1.50x':          { name:'SU-231 1.50x',          type:'Scope', pts:10, unlockLevel:3 },
      'Mars-F LPVO':           { name:'Mars-F LPVO',           type:'Scope', pts:25, unlockLevel:5 },
      'Baker 3.00x':           { name:'Baker 3.00x',           type:'Scope', pts:10, unlockLevel:6 },
      'RO-S 1.25x':            { name:'RO-S 1.25x',            type:'Scope', pts:10, unlockLevel:7 },
      'RO-M 1.75x':            { name:'RO-M 1.75x',            type:'Scope', pts:10, unlockLevel:8 },
      'S-VPS 6.00x':           { name:'S-VPS 6.00x',           type:'Scope', pts:10, unlockLevel:9 },
      'PVQ-31 4.00x':          { name:'PVQ-31 4.00x',          type:'Scope', pts:10, unlockLevel:11 },
      'OSA-7 1.00x':           { name:'OSA-7 1.00x',           type:'Scope', pts:10, unlockLevel:12 },
      'Grim 1.50x':            { name:'Grim 1.50x',            type:'Scope', pts:25, unlockLevel:14 },
      'BF-2M 2.50x':           { name:'BF-2M 2.50x',           type:'Scope', pts:10, unlockLevel:15 },
      '2PRO 1.25x':            { name:'2PRO 1.25x',            type:'Scope', pts:10, unlockLevel:17 },
      'NFX 8.00x':             { name:'NFX 8.00x',             type:'Scope', pts:10, unlockLevel:18 },
      'Mini Flex 1.00x':       { name:'Mini Flex 1.00x',       type:'Scope', pts:10, unlockLevel:19 },
      'R4T 2.00x':             { name:'R4T 2.00x',             type:'Scope', pts:10, unlockLevel:21 },
      'MC-CO LPVO':            { name:'MC-CO LPVO',            type:'Scope', pts:25, unlockLevel:22 },
      'SSDS 6.00x':            { name:'SSDS 6.00x',            type:'Scope', pts:10, unlockLevel:23 },
      'CQ RDS 1.25x':          { name:'CQ RDS 1.25x',          type:'Scope', pts:10, unlockLevel:24 },
      'LDS 4.50x':             { name:'LDS 4.50x',             type:'Scope', pts:10, unlockLevel:25 },
      '1P87 1.50x':            { name:'1P87 1.50x',            type:'Scope', pts:10, unlockLevel:26 },
      'PAS-35 3.00x':          { name:'PAS-35 3.00x',          type:'Scope', pts:25, unlockLevel:27 },
      'R-MR 1.00x':            { name:'R-MR 1.00x',            type:'Scope', pts:10, unlockLevel:28 },
      'SM Rifle Variable':     { name:'SM Rifle Variable',     type:'Scope', pts:25, unlockLevel:29 },
      'LERT 8.00x':            { name:'LERT 8.00x',            type:'Scope', pts:10, unlockLevel:31 },
      'A-P2 1.75x':            { name:'A-P2 1.75x',            type:'Scope', pts:10, unlockLevel:32 },
      'R-VPS 10.00x':          { name:'R-VPS 10.00x',          type:'Scope', pts:10, unlockLevel:33 },
      '3VZR 1.75x':            { name:'3VZR 1.75x',            type:'Scope', pts:10, unlockLevel:34 },
      'SF-G2 5.00x':           { name:'SF-G2 5.00x',           type:'Scope', pts:10, unlockLevel:35 },
      'ROX 1.50x':             { name:'ROX 1.50x',             type:'Scope', pts:10, unlockLevel:36 },
      'SDO 3.50x':             { name:'SDO 3.50x',             type:'Scope', pts:10, unlockLevel:37 },
      '1P88 Variable':         { name:'1P88 Variable',         type:'Scope', pts:25, unlockLevel:38 },
      'TS-HD 6.00x':           { name:'TS-HD 6.00x',           type:'Scope', pts:25, unlockLevel:40 },
      'SU-230 LPVO':           { name:'SU-230 LPVO',           type:'Scope', pts:20, unlockLevel:'Season 1 Hardware 1' },

      // Optic Accessories
      'None–Optic Accessory':  { name:'None',                  type:'Optic Accessory', pts:0,  unlockLevel:0 },
      'Canted Iron Sight':     { name:'Canted Iron Sight',     type:'Optic Accessory', pts:5,  unlockLevel:10 },
      'Canted Reflex':         { name:'Canted Reflex',         type:'Optic Accessory', pts:10, unlockLevel:20 },
      'Anti-Glare Coating':    { name:'Anti-Glare Coating',    type:'Optic Accessory', pts:10, unlockLevel:40 },

      // Right Accessories
      'None–Right Accessory':  { name:'None',            type:'Right Accessory', pts:0,  unlockLevel:0 },
      '5 MW Red':              { name:'5 MW Red',        type:'Right Accessory', pts:10, unlockLevel:3 },
      '5 MW Green':            { name:'5 MW Green',      type:'Right Accessory', pts:10, unlockLevel:12 },
      '50 MW Green':           { name:'50 MW Green',     type:'Right Accessory', pts:20, unlockLevel:21 },
      '50 MW Blue':            { name:'50 MW Blue',      type:'Right Accessory', pts:20, unlockLevel:28 },
      '120 MW Blue':           { name:'120 MW Blue',     type:'Right Accessory', pts:30, unlockLevel:36 },

      // Left Accessories
      'None–Left Accessory':   { name:'None',            type:'Left Accessory', pts:0,  unlockLevel:0 },
      'Flashlight':            { name:'Flashlight',      type:'Left Accessory', pts:10, unlockLevel:6 },
      'Range Finder':          { name:'Range Finder',    type:'Left Accessory', pts:15, unlockLevel:24 },

      // Muzzles
      'None–Muzzle':           { name:'None',                type:'Muzzle', pts:0,  unlockLevel:0 },
      'Flash Hider':           { name:'Flash Hider',         type:'Muzzle', pts:10, unlockLevel:0 },
      'Single-Port Brake':     { name:'Single-Port Brake',   type:'Muzzle', pts:5,  unlockLevel:1 },
      'Double-Port Brake':     { name:'Double-Port Brake',   type:'Muzzle', pts:10, unlockLevel:7 },
      'Compensated Brake':     { name:'Compensated Brake',   type:'Muzzle', pts:20, unlockLevel:13 },
      'Standard Suppressor':   { name:'Standard Suppressor', type:'Muzzle', pts:20, unlockLevel:19 },
      'Long Suppressor':       { name:'Long Suppressor',     type:'Muzzle', pts:25, unlockLevel:26 },
      'CQB Suppressor':        { name:'CQB Suppressor',      type:'Muzzle', pts:30, unlockLevel:32 },
      'Lightened Suppressor':  { name:'Lightened Suppressor',type:'Muzzle', pts:30, unlockLevel:39 },

      // Barrels
      '16" Factory':   { name:'16" Factory',   type:'Barrel', pts:10, unlockLevel:0 },
      '18" Extended':  { name:'18" Extended',  type:'Barrel', pts:15, unlockLevel:4 },
      '16" Pencil':    { name:'16" Pencil',    type:'Barrel', pts:20, unlockLevel:14 },
      '12" SBR':       { name:'12" SBR',       type:'Barrel', pts:15, unlockLevel:22 },

      // Underbarrels
      'None–Underbarrel':      { name:'None',               type:'Underbarrel', pts:0,  unlockLevel:0 },
      'Full Angled':           { name:'Full Angled',        type:'Underbarrel', pts:5,  unlockLevel:2 },
      'Low-Profile Stubby':    { name:'Low-Profile Stubby', type:'Underbarrel', pts:10, unlockLevel:9 },
      'Bipod':                 { name:'Bipod',              type:'Underbarrel', pts:10, unlockLevel:16 },
      'QD Grip Pod':           { name:'QD Grip Pod',        type:'Underbarrel', pts:10, unlockLevel:23 },
      'Slim Angled':           { name:'Slim Angled',        type:'Underbarrel', pts:15, unlockLevel:31 },
      'Classic Grip Pod':      { name:'Classic Grip Pod',   type:'Underbarrel', pts:20, unlockLevel:37 },

      // Magazines
      '10RND Magazine':   { name:'10RND Magazine',   type:'Magazine', pts:5,  unlockLevel:0 },
      '10RND Fast Mag':   { name:'10RND Fast Mag',   type:'Magazine', pts:10, unlockLevel:8 },
      '15RND Magazine':   { name:'15RND Magazine',   type:'Magazine', pts:30, unlockLevel:17 },
      '15RND Fast Mag':   { name:'15RND Fast Mag',   type:'Magazine', pts:35, unlockLevel:27 },
      '20RND Magazine':   { name:'20RND Magazine',   type:'Magazine', pts:55, unlockLevel:34 },
      '20RND Fast Mag':   { name:'20RND Fast Mag',   type:'Magazine', pts:60, unlockLevel:38 },

      // Ammunition
      'FMJ':            { name:'FMJ',            type:'Ammunition', pts:5,  unlockLevel:0 },
      'Tungsten Core':  { name:'Tungsten Core',  type:'Ammunition', pts:5,  unlockLevel:11 },
      'Frangible':      { name:'Frangible',      type:'Ammunition', pts:20, unlockLevel:29 },
    }
  };
  target['PSR'] = {
    attachments: {
      // Scopes
      'Iron Sights':        { name:'Iron Sights',        type:'Scope', pts:15, unlockLevel:0 },
      'R-VPS 10.00x':       { name:'R-VPS 10.00x',       type:'Scope', pts:10, unlockLevel:0 },
      'Baker 3.00x':        { name:'Baker 3.00x',        type:'Scope', pts:10, unlockLevel:2 },
      'R-MR 1.00x':         { name:'R-MR 1.00x',         type:'Scope', pts:10, unlockLevel:4 },
      'PVQ-31 4.00x':       { name:'PVQ-31 4.00x',       type:'Scope', pts:10, unlockLevel:6 },
      'CQ RDS 1.25x':       { name:'CQ RDS 1.25x',       type:'Scope', pts:10, unlockLevel:8 },
      'ST Prisim 5.00x':    { name:'ST Prisim 5.00x',    type:'Scope', pts:10, unlockLevel:10 },
      'CCO 2.00x':          { name:'CCO 2.00x',          type:'Scope', pts:10, unlockLevel:12 },
      'NGFC LPVO':          { name:'NGFC LPVO',          type:'Scope', pts:25, unlockLevel:14 },
      'Grim 1.50x':         { name:'Grim 1.50x',         type:'Scope', pts:25, unlockLevel:15 },
      'BF-2M 2.50x':        { name:'BF-2M 2.50x',        type:'Scope', pts:10, unlockLevel:16 },
      'SSDS 6.00x':         { name:'SSDS 6.00x',         type:'Scope', pts:10, unlockLevel:17 },
      'NFX 8.00x':          { name:'NFX 8.00x',          type:'Scope', pts:10, unlockLevel:18 },
      '2PRO 1.25x':         { name:'2PRO 1.25x',         type:'Scope', pts:10, unlockLevel:19 },
      'SDO 3.50x':          { name:'SDO 3.50x',          type:'Scope', pts:10, unlockLevel:20 },
      'A-P2 1.75x':         { name:'A-P2 1.75x',         type:'Scope', pts:10, unlockLevel:21 },
      'LERT 8.00x':         { name:'LERT 8.00x',         type:'Scope', pts:10, unlockLevel:22 },
      'ROX 1.50x':          { name:'ROX 1.50x',          type:'Scope', pts:10, unlockLevel:23 },
      'SF-G2 5.00x':        { name:'SF-G2 5.00x',        type:'Scope', pts:10, unlockLevel:24 },
      'OSA-7 1.00x':        { name:'OSA-7 1.00x',        type:'Scope', pts:10, unlockLevel:25 },
      'S-VPS 6.00x':        { name:'S-VPS 6.00x',        type:'Scope', pts:10, unlockLevel:26 },
      'PAS-35 3.00x':       { name:'PAS-35 3.00x',       type:'Scope', pts:25, unlockLevel:27 },
      'RO-S 1.25x':         { name:'RO-S 1.25x',         type:'Scope', pts:10, unlockLevel:28 },
      'R4T 2.00x':          { name:'R4T 2.00x',          type:'Scope', pts:10, unlockLevel:29 },
      'MC-CO LPVO':         { name:'MC-CO LPVO',         type:'Scope', pts:25, unlockLevel:30 },
      'Mini Flex 1.00x':    { name:'Mini Flex 1.00x',    type:'Scope', pts:10, unlockLevel:31 },
      'SM Rifle Variable':  { name:'SM Rifle Variable',  type:'Scope', pts:25, unlockLevel:32 },
      'SU-231 1.50x':       { name:'SU-231 1.50x',       type:'Scope', pts:10, unlockLevel:33 },
      'DVO LPVO':           { name:'DVO LPVO',           type:'Scope', pts:25, unlockLevel:34 },
      '3VZR 1.75x':         { name:'3VZR 1.75x',         type:'Scope', pts:10, unlockLevel:35 },
      'LDS 4.50x':          { name:'LDS 4.50x',          type:'Scope', pts:10, unlockLevel:36 },
      'RO-M 1.75x':         { name:'RO-M 1.75x',         type:'Scope', pts:10, unlockLevel:37 },
      '1P88 Variable':      { name:'1P88 Variable',      type:'Scope', pts:25, unlockLevel:38 },
      '1P87 1.50x':         { name:'1P87 1.50x',         type:'Scope', pts:10, unlockLevel:39 },
      'TS-HD 6.00x':        { name:'TS-HD 6.00x',        type:'Scope', pts:25, unlockLevel:40 },
      'SU-230 LPVO':        { name:'SU-230 LPVO',        type:'Scope', pts:20, unlockLevel:'Season 1 Hardware 1' },

      // Optic Accessories
      'None–Optic Accessory':           { name:'None',                         type:'Optic Accessory', pts:0,  unlockLevel:0 },
      'Piggyback Reflex':               { name:'Piggyback Reflex',             type:'Optic Accessory', pts:10, unlockLevel:5 },
      'Canted Iron Sight':              { name:'Canted Iron Sight',            type:'Optic Accessory', pts:5,  unlockLevel:10 },
      'Canted Reflex':                  { name:'Canted Reflex',                type:'Optic Accessory', pts:10, unlockLevel:15 },
      'Adjustable Magnification 2.00x': { name:'Adjustable Magnification 2.00x', type:'Optic Accessory', pts:10, unlockLevel:19 },
      'Adjustable Magnification 3.00x': { name:'Adjustable Magnification 3.00x', type:'Optic Accessory', pts:10, unlockLevel:23 },
      'Adjustable Magnification 4.00x': { name:'Adjustable Magnification 4.00x', type:'Optic Accessory', pts:10, unlockLevel:31 },
      'Anti-Glare Coating':             { name:'Anti-Glare Coating',           type:'Optic Accessory', pts:10, unlockLevel:36 },

      // Top Accessories
      'None–Top Accessory': { name:'None',           type:'Top Accessory', pts:0,  unlockLevel:0 },
      '5 MW Red':           { name:'5 MW Red',       type:'Top Accessory', pts:10, unlockLevel:0 },
      '5 MW Green':         { name:'5 MW Green',     type:'Top Accessory', pts:10, unlockLevel:1 },
      '50 MW Green':        { name:'50 MW Green',    type:'Top Accessory', pts:20, unlockLevel:12 },
      '50 MW Blue':         { name:'50 MW Blue',     type:'Top Accessory', pts:20, unlockLevel:18 },
      '120 MW Blue':        { name:'120 MW Blue',    type:'Top Accessory', pts:30, unlockLevel:29 },

      // Left Accessories
      'None–Left Accessory': { name:'None',         type:'Left Accessory', pts:0,  unlockLevel:0 },
      'Range Finder':        { name:'Range Finder', type:'Left Accessory', pts:15, unlockLevel:0 },
      'Flashlight':          { name:'Flashlight',   type:'Left Accessory', pts:10, unlockLevel:27 },

      // Muzzles
      'None–Muzzle':         { name:'None',                type:'Muzzle', pts:0,  unlockLevel:0 },
      'Double-Port Brake':   { name:'Double-Port Brake',   type:'Muzzle', pts:10, unlockLevel:0 },
      'Flash Hider':         { name:'Flash Hider',         type:'Muzzle', pts:10, unlockLevel:0 },
      'Compensated Brake':   { name:'Compensated Brake',   type:'Muzzle', pts:20, unlockLevel:3 },
      'Single-Port Brake':   { name:'Single-Port Brake',   type:'Muzzle', pts:5,  unlockLevel:7 },
      'Standard Suppressor': { name:'Standard Suppressor', type:'Muzzle', pts:20, unlockLevel:11 },
      'Long Suppressor':     { name:'Long Suppressor',     type:'Muzzle', pts:25, unlockLevel:20 },
      'CQB Suppressor':      { name:'CQB Suppressor',      type:'Muzzle', pts:30, unlockLevel:28 },
      'Lightened Suppressor':{ name:'Lightened Suppressor',type:'Muzzle', pts:30, unlockLevel:39 },

      // Barrels
      '27" MK22':     { name:'27" MK22',     type:'Barrel', pts:15, unlockLevel:0 },
      '26" Factory':  { name:'26" Factory',  type:'Barrel', pts:10, unlockLevel:11 },

      // Underbarrels
      'None–Underbarrel':   { name:'None',               type:'Underbarrel', pts:0,  unlockLevel:0 },
      'Low-Profile Stubby': { name:'Low-Profile Stubby', type:'Underbarrel', pts:10, unlockLevel:1 },
      'Full Angled':        { name:'Full Angled',        type:'Underbarrel', pts:5,  unlockLevel:9 },
      'Slim Angled':        { name:'Slim Angled',        type:'Underbarrel', pts:15, unlockLevel:22 },
      'Bipod':              { name:'Bipod',              type:'Underbarrel', pts:10, unlockLevel:24 },
      'QD Grip Pod':        { name:'QD Grip Pod',        type:'Underbarrel', pts:10, unlockLevel:30 },
      'Classic Grip Pod':   { name:'Classic Grip Pod',   type:'Underbarrel', pts:20, unlockLevel:37 },

      // Magazines
      '10RND Magazine': { name:'10RND Magazine', type:'Magazine', pts:5, unlockLevel:0 },
      '7RND Magazine':  { name:'7RND Magazine',  type:'Magazine', pts:5, unlockLevel:9 },

      // Ergonomics
      'None–Ergonomics':     { name:'None',         type:'Ergonomics', pts:0,  unlockLevel:0 },
      'DLC Bolt':            { name:'DLC Bolt',     type:'Ergonomics', pts:30, unlockLevel:13 },
      'Improved Mag Catch':  { name:'Improved Mag Catch', type:'Ergonomics', pts:5, unlockLevel:17 },

      // Ammunition
      'FMJ':          { name:'FMJ',          type:'Ammunition', pts:5,  unlockLevel:0 },
      'Match Grade':  { name:'Match Grade',  type:'Ammunition', pts:10, unlockLevel:3 },
      'Tungsten Core':{ name:'Tungsten Core',type:'Ammunition', pts:5,  unlockLevel:26 },
      'Frangible':    { name:'Frangible',    type:'Ammunition', pts:20, unlockLevel:35 },
    }
  };
  target['SV-98'] = {
    attachments: {
      // Scopes
      'Iron Sights':        { name:'Iron Sights',        type:'Scope', pts:15, unlockLevel:0 },
      'S-VPS 6.00x':        { name:'S-VPS 6.00x',        type:'Scope', pts:10, unlockLevel:0 },
      'Baker 3.00x':        { name:'Baker 3.00x',        type:'Scope', pts:10, unlockLevel:2 },
      'R-MR 1.00x':         { name:'R-MR 1.00x',         type:'Scope', pts:10, unlockLevel:4 },
      'PVQ-31 4.00x':       { name:'PVQ-31 4.00x',       type:'Scope', pts:10, unlockLevel:6 },
      'CQ RDS 1.25x':       { name:'CQ RDS 1.25x',       type:'Scope', pts:10, unlockLevel:8 },
      'SSDS 6.00x':         { name:'SSDS 6.00x',         type:'Scope', pts:10, unlockLevel:10 },
      'CCO 2.00x':          { name:'CCO 2.00x',          type:'Scope', pts:10, unlockLevel:12 },
      '3VZR 1.75x':         { name:'3VZR 1.75x',         type:'Scope', pts:10, unlockLevel:14 },
      'Grim 1.50x':         { name:'Grim 1.50x',         type:'Scope', pts:25, unlockLevel:15 },
      'ST Prisim 5.00x':    { name:'ST Prisim 5.00x',    type:'Scope', pts:10, unlockLevel:16 },
      'BF-2M 2.50x':        { name:'BF-2M 2.50x',        type:'Scope', pts:10, unlockLevel:17 },
      'NFX 8.00x':          { name:'NFX 8.00x',          type:'Scope', pts:10, unlockLevel:18 },
      '2PRO 1.25x':         { name:'2PRO 1.25x',         type:'Scope', pts:10, unlockLevel:19 },
      'SDO 3.50x':          { name:'SDO 3.50x',          type:'Scope', pts:10, unlockLevel:20 },
      'A-P2 1.75x':         { name:'A-P2 1.75x',         type:'Scope', pts:10, unlockLevel:21 },
      'LERT 8.00x':         { name:'LERT 8.00x',         type:'Scope', pts:10, unlockLevel:22 },
      'ROX 1.50x':          { name:'ROX 1.50x',          type:'Scope', pts:10, unlockLevel:23 },
      'SF-G2 5.00x':        { name:'SF-G2 5.00x',        type:'Scope', pts:10, unlockLevel:24 },
      'OSA-7 1.00x':        { name:'OSA-7 1.00x',        type:'Scope', pts:10, unlockLevel:25 },
      'MC-CO LPVO':         { name:'MC-CO LPVO',         type:'Scope', pts:25, unlockLevel:26 },
      'PAS-35 3.00x':       { name:'PAS-35 3.00x',       type:'Scope', pts:25, unlockLevel:27 },
      'RO-S 1.25x':         { name:'RO-S 1.25x',         type:'Scope', pts:10, unlockLevel:28 },
      'R4T 2.00x':          { name:'R4T 2.00x',          type:'Scope', pts:10, unlockLevel:29 },
      'R-VPS 10.00x':       { name:'R-VPS 10.00x',       type:'Scope', pts:10, unlockLevel:30 },
      'Mini Flex 1.00x':    { name:'Mini Flex 1.00x',    type:'Scope', pts:10, unlockLevel:31 },
      'DVO LPVO':           { name:'DVO LPVO',           type:'Scope', pts:25, unlockLevel:32 },
      'SU-231 1.50x':       { name:'SU-231 1.50x',       type:'Scope', pts:10, unlockLevel:33 },
      'Mars-F LPVO':        { name:'Mars-F LPVO',        type:'Scope', pts:25, unlockLevel:34 },
      '1P88 Variable':      { name:'1P88 Variable',      type:'Scope', pts:25, unlockLevel:35 },
      'LDS 4.50x':          { name:'LDS 4.50x',          type:'Scope', pts:10, unlockLevel:36 },
      '1P87 1.50x':         { name:'1P87 1.50x',         type:'Scope', pts:10, unlockLevel:37 },
      'SM Rifle Variable':  { name:'SM Rifle Variable',  type:'Scope', pts:25, unlockLevel:38 },
      'RO-M 1.75x':         { name:'RO-M 1.75x',         type:'Scope', pts:10, unlockLevel:39 },
      'TS-HD 6.00x':        { name:'TS-HD 6.00x',        type:'Scope', pts:25, unlockLevel:40 },
      'SU-230 LPVO':        { name:'SU-230 LPVO',        type:'Scope', pts:20, unlockLevel:'Season 1 Hardware 1' },

      // Optic Accessories
      'None–Optic Accessory':           { name:'None',                         type:'Optic Accessory', pts:0,  unlockLevel:0 },
      'Piggyback Reflex':               { name:'Piggyback Reflex',             type:'Optic Accessory', pts:10, unlockLevel:5 },
      'Canted Iron Sight':              { name:'Canted Iron Sight',            type:'Optic Accessory', pts:5,  unlockLevel:10 },
      'Canted Reflex':                  { name:'Canted Reflex',                type:'Optic Accessory', pts:10, unlockLevel:15 },
      'Adjustable Magnification 2.00x': { name:'Adjustable Magnification 2.00x', type:'Optic Accessory', pts:10, unlockLevel:19 },
      'Adjustable Magnification 3.00x': { name:'Adjustable Magnification 3.00x', type:'Optic Accessory', pts:10, unlockLevel:26 },
      'Adjustable Magnification 4.00x': { name:'Adjustable Magnification 4.00x', type:'Optic Accessory', pts:10, unlockLevel:31 },
      'Anti-Glare Coating':             { name:'Anti-Glare Coating',           type:'Optic Accessory', pts:10, unlockLevel:36 },

      // Right Accessories
      'None–Right Accessory': { name:'None',           type:'Right Accessory', pts:0,  unlockLevel:0 },
      '5 MW Red':             { name:'5 MW Red',       type:'Right Accessory', pts:10, unlockLevel:1 },
      '50 MW Green':          { name:'50 MW Green',    type:'Right Accessory', pts:20, unlockLevel:13 },
      '5 MW Green':           { name:'5 MW Green',     type:'Right Accessory', pts:10, unlockLevel:14 },
      '50 MW Blue':           { name:'50 MW Blue',     type:'Right Accessory', pts:20, unlockLevel:29 },
      '120 MW Blue':          { name:'120 MW Blue',    type:'Right Accessory', pts:30, unlockLevel:33 },

      // Left Accessories
      'None–Left Accessory':  { name:'None',         type:'Left Accessory', pts:0,  unlockLevel:0 },
      'Range Finder':         { name:'Range Finder', type:'Left Accessory', pts:15, unlockLevel:7 },
      'Flashlight':           { name:'Flashlight',   type:'Left Accessory', pts:10, unlockLevel:25 },

      // Muzzles
      'None–Muzzle':        { name:'None',               type:'Muzzle', pts:0,  unlockLevel:0 },
      'Double-Port Brake':  { name:'Double-Port Brake',  type:'Muzzle', pts:10, unlockLevel:0 },
      'Thread Protector':   { name:'Thread Protector',   type:'Muzzle', pts:5,  unlockLevel:3 },
      'Compensated Brake':  { name:'Compensated Brake',  type:'Muzzle', pts:20, unlockLevel:11 },
      'Long Suppressor':    { name:'Long Suppressor',    type:'Muzzle', pts:25, unlockLevel:35 },

      // Barrels
      '650mm Factory':  { name:'650mm Factory',  type:'Barrel', pts:10, unlockLevel:0 },
      '730mm 3LR':      { name:'730mm 3LR',      type:'Barrel', pts:15, unlockLevel:9 },
      '650mm Fluted':   { name:'650mm Fluted',   type:'Barrel', pts:20, unlockLevel:17 },
      '514mm Carbine':  { name:'514mm Carbine',  type:'Barrel', pts:15, unlockLevel:34 },

      // Underbarrels
      'None–Underbarrel':   { name:'None',               type:'Underbarrel', pts:0,  unlockLevel:0 },
      'Low-Profile Stubby': { name:'Low-Profile Stubby', type:'Underbarrel', pts:10, unlockLevel:1 },
      'Full Angled':        { name:'Full Angled',        type:'Underbarrel', pts:5,  unlockLevel:7 },
      'Slim Angled':        { name:'Slim Angled',        type:'Underbarrel', pts:15, unlockLevel:22 },
      'Bipod':              { name:'Bipod',              type:'Underbarrel', pts:10, unlockLevel:23 },
      'QD Grip Pod':        { name:'QD Grip Pod',        type:'Underbarrel', pts:10, unlockLevel:30 },
      'Classic Grip Pod':   { name:'Classic Grip Pod',   type:'Underbarrel', pts:20, unlockLevel:37 },

      // Magazines
      '10RND Magazine': { name:'10RND Magazine', type:'Magazine', pts:5, unlockLevel:0 },

      // Ergonomics
      'None–Ergonomics':     { name:'None',               type:'Ergonomics', pts:0,  unlockLevel:0 },
      'Improved Mag Catch':  { name:'Improved Mag Catch', type:'Ergonomics', pts:5,  unlockLevel:5 },
      'DLC Bolt':            { name:'DLC Bolt',           type:'Ergonomics', pts:30, unlockLevel:13 },

      // Ammunition
      'FMJ':          { name:'FMJ',          type:'Ammunition', pts:5,  unlockLevel:0 },
      'Match Grade':  { name:'Match Grade',  type:'Ammunition', pts:10, unlockLevel:3 },
      'Tungsten Core':{ name:'Tungsten Core',type:'Ammunition', pts:5,  unlockLevel:21 },
      'Frangible':    { name:'Frangible',    type:'Ammunition', pts:20, unlockLevel:28 },
    }
  };

  // DMRs
  target['M39 EMR'] = {
  attachments: {
    // Scopes
    'Iron Sights':       { name:'Iron Sights',       type:'Scope', pts:5,  unlockLevel:0 },
    'PVQ-31 4.00x':      { name:'PVQ-31 4.00x',      type:'Scope', pts:10, unlockLevel:0 },
    'R4T 2.00x':         { name:'R4T 2.00x',         type:'Scope', pts:10, unlockLevel:1 },
    'CCO 2.00x':         { name:'CCO 2.00x',         type:'Scope', pts:10, unlockLevel:3 },
    'OSA-7 1.00x':       { name:'OSA-7 1.00x',       type:'Scope', pts:10, unlockLevel:4 },
    'Baker 3.00x':       { name:'Baker 3.00x',       type:'Scope', pts:10, unlockLevel:5 },
    'Mars-F LPVO':       { name:'Mars-F LPVO',       type:'Scope', pts:25, unlockLevel:8 },
    'S-VPS 6.00x':       { name:'S-VPS 6.00x',       type:'Scope', pts:10, unlockLevel:9 },
    'Mini Flex 1.00x':   { name:'Mini Flex 1.00x',   type:'Scope', pts:10, unlockLevel:10 },
    '2PRO 1.25x':        { name:'2PRO 1.25x',        type:'Scope', pts:10, unlockLevel:11 },
    'BF-2M 2.50x':       { name:'BF-2M 2.50x',       type:'Scope', pts:10, unlockLevel:12 },
    'SU-231 1.50x':      { name:'SU-231 1.50x',      type:'Scope', pts:10, unlockLevel:13 },
    'SDO 3.50x':         { name:'SDO 3.50x',         type:'Scope', pts:10, unlockLevel:14 },
    'LDS 4.50x':         { name:'LDS 4.50x',         type:'Scope', pts:10, unlockLevel:15 },
    'MC-CO LPVO':        { name:'MC-CO LPVO',        type:'Scope', pts:25, unlockLevel:16 },
    '1P87 1.50x':        { name:'1P87 1.50x',        type:'Scope', pts:10, unlockLevel:17 },
    'SSDS 6.00x':        { name:'SSDS 6.00x',        type:'Scope', pts:10, unlockLevel:18 },
    'R-MR 1.00x':        { name:'R-MR 1.00x',        type:'Scope', pts:10, unlockLevel:19 },
    'SF-G2 5.00x':       { name:'SF-G2 5.00x',       type:'Scope', pts:10, unlockLevel:21 },
    'RO-M 1.75x':        { name:'RO-M 1.75x',        type:'Scope', pts:10, unlockLevel:22 },
    'LERT 8.00x':        { name:'LERT 8.00x',        type:'Scope', pts:10, unlockLevel:23 },
    'Grim 1.50x':        { name:'Grim 1.50x',        type:'Scope', pts:25, unlockLevel:25 },
    'CQ RDS 1.25x':      { name:'CQ RDS 1.25x',      type:'Scope', pts:10, unlockLevel:26 },
    'ST Prisim 5.00x':   { name:'ST Prisim 5.00x',   type:'Scope', pts:10, unlockLevel:26 },
    '1P88 Variable':     { name:'1P88 Variable',     type:'Scope', pts:25, unlockLevel:30 },
    'DVO LPVO':          { name:'DVO LPVO',          type:'Scope', pts:25, unlockLevel:31 },
    'A-P2 1.75x':        { name:'A-P2 1.75x',        type:'Scope', pts:10, unlockLevel:32 },
    'ROX 1.50x':         { name:'ROX 1.50x',         type:'Scope', pts:10, unlockLevel:33 },
    '3VZR 1.75x':        { name:'3VZR 1.75x',        type:'Scope', pts:10, unlockLevel:34 },
    'SM Rifle Variable': { name:'SM Rifle Variable', type:'Scope', pts:25, unlockLevel:35 },
    'NFX 8.00x':         { name:'NFX 8.00x',         type:'Scope', pts:10, unlockLevel:36 },
    'RO-S 1.25x':        { name:'RO-S 1.25x',        type:'Scope', pts:10, unlockLevel:37 },
    'TS-HD 6.00x':       { name:'TS-HD 6.00x',       type:'Scope', pts:25, unlockLevel:38 },
    'R-VPS 10.00x':      { name:'R-VPS 10.00x',      type:'Scope', pts:10, unlockLevel:39 },
    'PAS-35 3.00x':      { name:'PAS-35 3.00x',      type:'Scope', pts:25, unlockLevel:40 },
    'SU-230 LPVO':       { name:'SU-230 LPVO',       type:'Scope', pts:20, unlockLevel:'Season 1 Hardware 1' },

    // Optic Accessories
    'None–Optic Accessory':           { name:'None',                         type:'Optic Accessory', pts:0,  unlockLevel:0 },
    'Piggyback Reflex':               { name:'Piggyback Reflex',             type:'Optic Accessory', pts:10, unlockLevel:4 },
    'Canted Iron Sight':              { name:'Canted Iron Sight',            type:'Optic Accessory', pts:5,  unlockLevel:9 },
    'Canted Reflex':                  { name:'Canted Reflex',                type:'Optic Accessory', pts:10, unlockLevel:14 },
    'Adjustable Magnification 2.00x': { name:'Adjustable Magnification 2.00x', type:'Optic Accessory', pts:10, unlockLevel:16 },
    'Adjustable Magnification 4.00x': { name:'Adjustable Magnification 4.00x', type:'Optic Accessory', pts:10, unlockLevel:31 },
    'Adjustable Magnification 3.00x': { name:'Adjustable Magnification 3.00x', type:'Optic Accessory', pts:10, unlockLevel:22 },

    // Right Accessories
    'None–Right Accessory': { name:'None',           type:'Right Accessory', pts:0,  unlockLevel:0 },
    '5 MW Red':             { name:'5 MW Red',       type:'Right Accessory', pts:10, unlockLevel:2 },
    '5 MW Green':           { name:'5 MW Green',     type:'Right Accessory', pts:10, unlockLevel:13 },
    '50 MW Green':          { name:'50 MW Green',    type:'Right Accessory', pts:20, unlockLevel:18 },
    '50 MW Blue':           { name:'50 MW Blue',     type:'Right Accessory', pts:20, unlockLevel:24 },
    '120 MW Blue':          { name:'120 MW Blue',    type:'Right Accessory', pts:30, unlockLevel:29 },

    // Left Accessories
    'None–Left Accessory':  { name:'None',         type:'Left Accessory', pts:0,  unlockLevel:0 },
    'Flashlight':           { name:'Flashlight',   type:'Left Accessory', pts:10, unlockLevel:2 },
    'Range Finder':         { name:'Range Finder', type:'Left Accessory', pts:15, unlockLevel:26 },

    // Muzzles
    'None–Muzzle':          { name:'None',                type:'Muzzle', pts:0,  unlockLevel:0 },
    'Flash Hider':          { name:'Flash Hider',         type:'Muzzle', pts:10, unlockLevel:0 },
    'Single-Port Brake':    { name:'Single-Port Brake',   type:'Muzzle', pts:5,  unlockLevel:4 },
    'Lightened Suppressor': { name:'Lightened Suppressor',type:'Muzzle', pts:30, unlockLevel:6 },
    'Standard Suppressor':  { name:'Standard Suppressor', type:'Muzzle', pts:20, unlockLevel:7 },
    'Linear Comp':          { name:'Linear Comp',         type:'Muzzle', pts:10, unlockLevel:8 },
    'CQB Suppressor':       { name:'CQB Suppressor',      type:'Muzzle', pts:30, unlockLevel:19 },
    'Double-Port Brake':    { name:'Double-Port Brake',   type:'Muzzle', pts:10, unlockLevel:24 },
    'Long Suppressor':      { name:'Long Suppressor',     type:'Muzzle', pts:25, unlockLevel:28 },
    'Compensated Brake':    { name:'Compensated Brake',   type:'Muzzle', pts:20, unlockLevel:38 },

    // Barrels
    '18" EBR':      { name:'18" EBR',      type:'Barrel', pts:10, unlockLevel:0 },
    '22" Factory':  { name:'22" Factory',  type:'Barrel', pts:10, unlockLevel:0 },
    '16" Short':    { name:'16" Short',    type:'Barrel', pts:15, unlockLevel:20 },

    // Underbarrels
    'None–Underbarrel':    { name:'None',               type:'Underbarrel', pts:0,  unlockLevel:0 },
    'Folding Vertical':    { name:'Folding Vertical',   type:'Underbarrel', pts:10, unlockLevel:1 },
    'Alloy Vertical':      { name:'Alloy Vertical',     type:'Underbarrel', pts:20, unlockLevel:3 },
    'Ribbed Vertical':     { name:'Ribbed Vertical',    type:'Underbarrel', pts:20, unlockLevel:7 },
    'PTT Grip Pod':        { name:'PTT Grip Pod',       type:'Underbarrel', pts:20, unlockLevel:11 },
    '6H64 Vertical':       { name:'6H64 Vertical',      type:'Underbarrel', pts:25, unlockLevel:15 },
    'Bipod':               { name:'Bipod',              type:'Underbarrel', pts:10, unlockLevel:17 },
    'Classic Vertical':    { name:'Classic Vertical',   type:'Underbarrel', pts:35, unlockLevel:21 },
    'Folding Stubby':      { name:'Folding Stubby',     type:'Underbarrel', pts:20, unlockLevel:23 },
    'Ribbed Stubby':       { name:'Ribbed Stubby',      type:'Underbarrel', pts:30, unlockLevel:25 },
    'Canted Stubby':       { name:'Canted Stubby',      type:'Underbarrel', pts:30, unlockLevel:27 },
    'Stippled Stubby':     { name:'Stippled Stubby',    type:'Underbarrel', pts:35, unlockLevel:29 },
    'Low-Profile Stubby':  { name:'Low-Profile Stubby', type:'Underbarrel', pts:45, unlockLevel:32 },
    'QD Grip Pod':         { name:'QD Grip Pod',        type:'Underbarrel', pts:30, unlockLevel:33 },
    'Adjustable Angled':   { name:'Adjustable Angled',  type:'Underbarrel', pts:15, unlockLevel:33 },
    'Classic Grip Pod':    { name:'Classic Grip Pod',   type:'Underbarrel', pts:30, unlockLevel:35 },
    'Full Angled':         { name:'Full Angled',        type:'Underbarrel', pts:25, unlockLevel:37 },
    'Slim Angled':         { name:'Slim Angled',        type:'Underbarrel', pts:25, unlockLevel:39 },

    // Magazines
    '20RND Magazine':   { name:'20RND Magazine',   type:'Magazine', pts:5,  unlockLevel:0 },
    '20RND Fast Mag':   { name:'20RND Fast Mag',   type:'Magazine', pts:10, unlockLevel:0 },
    '15RND Fast Mag':   { name:'15RND Fast Mag',   type:'Magazine', pts:10, unlockLevel:6 },
    '15RND Magazine':   { name:'15RND Magazine',   type:'Magazine', pts:5,  unlockLevel:12 },
    '25RND Magazine':   { name:'25RND Magazine',   type:'Magazine', pts:20, unlockLevel:37 },

    // Ergonomics
    'None–Ergonomics':     { name:'None',               type:'Ergonomics', pts:0,  unlockLevel:0 },
    'Improved Mag Catch':  { name:'Improved Mag Catch', type:'Ergonomics', pts:5,  unlockLevel:19 },

    // Ammunition
    'FMJ':          { name:'FMJ',          type:'Ammunition', pts:5,  unlockLevel:0 },
    'Tungsten Core':{ name:'Tungsten Core',type:'Ammunition', pts:5,  unlockLevel:10 },
    'Frangible':    { name:'Frangible',    type:'Ammunition', pts:20, unlockLevel:20 },
    'Match Grade':  { name:'Match Grade',  type:'Ammunition', pts:10, unlockLevel:28 },
    'Polymer Case': { name:'Polymer Case', type:'Ammunition', pts:10, unlockLevel:30 },
    'Hollow Point': { name:'Hollow Point', type:'Ammunition', pts:20, unlockLevel:40 },
  }
  };
  target['SVDM'] = {
    attachments: {
      // Scopes
      'Iron Sights':        { name:'Iron Sights',        type:'Scope', pts:5,  unlockLevel:0 },
      'BF-2M 2.50x':        { name:'BF-2M 2.50x',        type:'Scope', pts:10, unlockLevel:0 },
      '3VZR 1.75x':         { name:'3VZR 1.75x',         type:'Scope', pts:10, unlockLevel:2 },
      'CCO 2.00x':          { name:'CCO 2.00x',          type:'Scope', pts:10, unlockLevel:3 },
      'PVQ-31 4.00x':       { name:'PVQ-31 4.00x',       type:'Scope', pts:10, unlockLevel:5 },
      'OSA-7 1.00x':        { name:'OSA-7 1.00x',        type:'Scope', pts:10, unlockLevel:7 },
      'RO-M 1.75x':         { name:'RO-M 1.75x',         type:'Scope', pts:10, unlockLevel:9 },
      'SDO 3.50x':          { name:'SDO 3.50x',          type:'Scope', pts:10, unlockLevel:10 },
      'R4T 2.00x':          { name:'R4T 2.00x',          type:'Scope', pts:10, unlockLevel:11 },
      'Baker 3.00x':        { name:'Baker 3.00x',        type:'Scope', pts:10, unlockLevel:12 },
      '2PRO 1.25x':         { name:'2PRO 1.25x',         type:'Scope', pts:10, unlockLevel:13 },
      'CQ RDS 1.25x':       { name:'CQ RDS 1.25x',       type:'Scope', pts:10, unlockLevel:16 },
      'A-P2 1.75x':         { name:'A-P2 1.75x',         type:'Scope', pts:10, unlockLevel:17 },
      'ST Prisim 5.00x':    { name:'ST Prisim 5.00x',    type:'Scope', pts:10, unlockLevel:18 },
      'SF-G2 5.00x':        { name:'SF-G2 5.00x',        type:'Scope', pts:10, unlockLevel:19 },
      'LDS 4.50x':          { name:'LDS 4.50x',          type:'Scope', pts:10, unlockLevel:20 },
      'R-MR 1.00x':         { name:'R-MR 1.00x',         type:'Scope', pts:10, unlockLevel:21 },
      'SU-231 1.50x':       { name:'SU-231 1.50x',       type:'Scope', pts:10, unlockLevel:22 },
      'SSDS 6.00x':         { name:'SSDS 6.00x',         type:'Scope', pts:10, unlockLevel:23 },
      '1P87 1.50x':         { name:'1P87 1.50x',         type:'Scope', pts:10, unlockLevel:24 },
      'ROX 1.50x':          { name:'ROX 1.50x',          type:'Scope', pts:10, unlockLevel:25 },
      'Mars-F LPVO':        { name:'Mars-F LPVO',        type:'Scope', pts:25, unlockLevel:26 },
      'S-VPS 6.00x':        { name:'S-VPS 6.00x',        type:'Scope', pts:10, unlockLevel:28 },
      'PAS-35 3.00x':       { name:'PAS-35 3.00x',       type:'Scope', pts:25, unlockLevel:29 },
      'MC-CO LPVO':         { name:'MC-CO LPVO',         type:'Scope', pts:25, unlockLevel:30 },
      'RO-S 1.25x':         { name:'RO-S 1.25x',         type:'Scope', pts:10, unlockLevel:31 },
      'NFX 8.00x':          { name:'NFX 8.00x',          type:'Scope', pts:10, unlockLevel:32 },
      'Mini Flex 1.00x':    { name:'Mini Flex 1.00x',    type:'Scope', pts:10, unlockLevel:33 },
      'TS-HD 6.00x':        { name:'TS-HD 6.00x',        type:'Scope', pts:25, unlockLevel:34 },
      'DVO LPVO':           { name:'DVO LPVO',           type:'Scope', pts:25, unlockLevel:35 },
      'R-VPS 10.00x':       { name:'R-VPS 10.00x',       type:'Scope', pts:10, unlockLevel:36 },
      '1P88 Variable':      { name:'1P88 Variable',      type:'Scope', pts:25, unlockLevel:37 },
      'LERT 8.00x':         { name:'LERT 8.00x',         type:'Scope', pts:10, unlockLevel:38 },
      'Grim 1.50x':         { name:'Grim 1.50x',         type:'Scope', pts:25, unlockLevel:39 },
      'SM Rifle Variable':  { name:'SM Rifle Variable',  type:'Scope', pts:25, unlockLevel:40 },
      'SU-230 LPVO':        { name:'SU-230 LPVO',        type:'Scope', pts:20, unlockLevel:'Season 1 Hardware 1' },

      // Optic Accessories
      'None–Optic Accessory': { name:'None',             type:'Optic Accessory', pts:0,  unlockLevel:0 },
      'Piggyback Reflex':     { name:'Piggyback Reflex', type:'Optic Accessory', pts:10, unlockLevel:8 },
      'Canted Iron Sight':    { name:'Canted Iron Sight',type:'Optic Accessory', pts:5,  unlockLevel:13 },
      'Canted Reflex':        { name:'Canted Reflex',    type:'Optic Accessory', pts:10, unlockLevel:22 },

      // Top Accessories
      'None–Top Accessory': { name:'None',           type:'Top Accessory', pts:0,  unlockLevel:0 },
      '5 MW Red':           { name:'5 MW Red',       type:'Top Accessory', pts:10, unlockLevel:2 },
      '5 MW Green':         { name:'5 MW Green',     type:'Top Accessory', pts:10, unlockLevel:6 },
      '50 MW Green':        { name:'50 MW Green',    type:'Top Accessory', pts:20, unlockLevel:15 },
      '50 MW Blue':         { name:'50 MW Blue',     type:'Top Accessory', pts:20, unlockLevel:26 },
      '120 MW Blue':        { name:'120 MW Blue',    type:'Top Accessory', pts:30, unlockLevel:38 },

      // Left Accessories
      'None–Left Accessory': { name:'None',         type:'Left Accessory', pts:0,  unlockLevel:0 },
      'Flashlight':          { name:'Flashlight',   type:'Left Accessory', pts:10, unlockLevel:3 },
      'Range Finder':        { name:'Range Finder', type:'Left Accessory', pts:15, unlockLevel:21 },

      // Muzzles
      'None–Muzzle':          { name:'None',                type:'Muzzle', pts:0,  unlockLevel:0 },
      'Flash Hider':          { name:'Flash Hider',         type:'Muzzle', pts:10, unlockLevel:0 },
      'CQB Suppressor':       { name:'CQB Suppressor',      type:'Muzzle', pts:30, unlockLevel:5 },
      'Linear Comp':          { name:'Linear Comp',         type:'Muzzle', pts:10, unlockLevel:6 },
      'Standard Suppressor':  { name:'Standard Suppressor', type:'Muzzle', pts:20, unlockLevel:9 },
      'Single-Port Brake':    { name:'Single-Port Brake',   type:'Muzzle', pts:10, unlockLevel:10 },
      'Long Suppressor':      { name:'Long Suppressor',     type:'Muzzle', pts:25, unlockLevel:11 },
      'Double-Port Brake':    { name:'Double-Port Brake',   type:'Muzzle', pts:10, unlockLevel:19 },
      'Compensated Brake':    { name:'Compensated Brake',   type:'Muzzle', pts:20, unlockLevel:31 },
      'Lightened Suppressor': { name:'Lightened Suppressor',type:'Muzzle', pts:30, unlockLevel:39 },

      // Barrels
      '550mm Factory':  { name:'550mm Factory',  type:'Barrel', pts:15, unlockLevel:0 },
      '556mm Para':     { name:'556mm Para',     type:'Barrel', pts:10, unlockLevel:1 },
      '620mm Classic':  { name:'620mm Classic',  type:'Barrel', pts:15, unlockLevel:15 },
      '565mm Fluted':   { name:'565mm Fluted',   type:'Barrel', pts:20, unlockLevel:30 },

      // Underbarrels
      'None–Underbarrel':    { name:'None',               type:'Underbarrel', pts:0,  unlockLevel:0 },
      'Folding Vertical':    { name:'Folding Vertical',   type:'Underbarrel', pts:10, unlockLevel:1 },
      'Alloy Vertical':      { name:'Alloy Vertical',     type:'Underbarrel', pts:20, unlockLevel:4 },
      'PTT Grip Pod':        { name:'PTT Grip Pod',       type:'Underbarrel', pts:20, unlockLevel:7 },
      'Ribbed Vertical':     { name:'Ribbed Vertical',    type:'Underbarrel', pts:20, unlockLevel:8 },
      '6H64 Vertical':       { name:'6H64 Vertical',      type:'Underbarrel', pts:25, unlockLevel:12 },
      'Classic Vertical':    { name:'Classic Vertical',   type:'Underbarrel', pts:35, unlockLevel:16 },
      'Folding Stubby':      { name:'Folding Stubby',     type:'Underbarrel', pts:20, unlockLevel:17 },
      'Bipod':               { name:'Bipod',              type:'Underbarrel', pts:10, unlockLevel:17 },
      'QD Grip Pod':         { name:'QD Grip Pod',        type:'Underbarrel', pts:30, unlockLevel:20 },
      'Ribbed Stubby':       { name:'Ribbed Stubby',      type:'Underbarrel', pts:30, unlockLevel:21 },
      'Canted Stubby':       { name:'Canted Stubby',      type:'Underbarrel', pts:30, unlockLevel:23 },
      'Stippled Stubby':     { name:'Stippled Stubby',    type:'Underbarrel', pts:35, unlockLevel:27 },
      'Low-Profile Stubby':  { name:'Low-Profile Stubby', type:'Underbarrel', pts:45, unlockLevel:32 },
      'Adjustable Angled':   { name:'Adjustable Angled',  type:'Underbarrel', pts:15, unlockLevel:33 },
      'Classic Grip Pod':    { name:'Classic Grip Pod',   type:'Underbarrel', pts:30, unlockLevel:34 },
      'Slim Angled':         { name:'Slim Angled',        type:'Underbarrel', pts:25, unlockLevel:37 },
      'Full Angled':         { name:'Full Angled',        type:'Underbarrel', pts:25, unlockLevel:40 },

      // Magazines
      '10RND Magazine':   { name:'10RND Magazine',   type:'Magazine', pts:5,  unlockLevel:0 },
      '5RND Fast Mag':    { name:'5RND Fast Mag',    type:'Magazine', pts:5,  unlockLevel:14 },
      '10RND Fast Mag':   { name:'10RND Fast Mag',   type:'Magazine', pts:10, unlockLevel:16 },
      '20RND Fast Mag':   { name:'20RND Fast Mag',   type:'Magazine', pts:45, unlockLevel:25 },

      // Ergonomics
      'None–Ergonomics':    { name:'None',               type:'Ergonomics', pts:0,  unlockLevel:0 },
      'Improved Mag Catch': { name:'Improved Mag Catch', type:'Ergonomics', pts:5,  unlockLevel:25 },

      // Ammunition
      'FMJ':          { name:'FMJ',          type:'Ammunition', pts:5,  unlockLevel:0 },
      'Tungsten Core':{ name:'Tungsten Core',type:'Ammunition', pts:5,  unlockLevel:14 },
      'Match Grade':  { name:'Match Grade',  type:'Ammunition', pts:10, unlockLevel:24 },
      'Frangible':    { name:'Frangible',    type:'Ammunition', pts:20, unlockLevel:29 },
      'Hollow Point': { name:'Hollow Point', type:'Ammunition', pts:20, unlockLevel:36 },
    }
  };
  target['SVK-8.6'] = {
    attachments: {
      // Scopes
      'Iron Sights':       { name:'Iron Sights',       type:'Scope', pts:5,  unlockLevel:0 },
      'LDS 4.50x':         { name:'LDS 4.50x',         type:'Scope', pts:10, unlockLevel:0 },
      'CCO 2.00x':         { name:'CCO 2.00x',         type:'Scope', pts:10, unlockLevel:1 },
      '2PRO 1.25x':        { name:'2PRO 1.25x',        type:'Scope', pts:10, unlockLevel:2 },
      'OSA-7 1.00x':       { name:'OSA-7 1.00x',       type:'Scope', pts:10, unlockLevel:3 },
      'Baker 3.00x':       { name:'Baker 3.00x',       type:'Scope', pts:10, unlockLevel:6 },
      'CQ RDS 1.25x':      { name:'CQ RDS 1.25x',      type:'Scope', pts:10, unlockLevel:7 },
      '3VZR 1.75x':        { name:'3VZR 1.75x',        type:'Scope', pts:10, unlockLevel:8 },
      'ST Prisim 5.00x':   { name:'ST Prisim 5.00x',   type:'Scope', pts:10, unlockLevel:9 },
      'SU-231 1.50x':      { name:'SU-231 1.50x',      type:'Scope', pts:10, unlockLevel:11 },
      'R4T 2.00x':         { name:'R4T 2.00x',         type:'Scope', pts:10, unlockLevel:12 },
      'BF-2M 2.50x':       { name:'BF-2M 2.50x',       type:'Scope', pts:10, unlockLevel:12 },
      '1P87 1.50x':        { name:'1P87 1.50x',        type:'Scope', pts:10, unlockLevel:13 },
      'ROX 1.50x':         { name:'ROX 1.50x',         type:'Scope', pts:10, unlockLevel:14 },
      'SF-G2 5.00x':       { name:'SF-G2 5.00x',       type:'Scope', pts:10, unlockLevel:16 },
      'S-VPS 6.00x':       { name:'S-VPS 6.00x',       type:'Scope', pts:10, unlockLevel:18 },
      'RO-M 1.75x':        { name:'RO-M 1.75x',        type:'Scope', pts:10, unlockLevel:19 },
      'SDO 3.50x':         { name:'SDO 3.50x',         type:'Scope', pts:10, unlockLevel:21 },
      'PVQ-31 4.00x':      { name:'PVQ-31 4.00x',      type:'Scope', pts:10, unlockLevel:22 },
      'Mini Flex 1.00x':   { name:'Mini Flex 1.00x',   type:'Scope', pts:10, unlockLevel:23 },
      'SSDS 6.00x':        { name:'SSDS 6.00x',        type:'Scope', pts:10, unlockLevel:24 },
      'Grim 1.50x':        { name:'Grim 1.50x',        type:'Scope', pts:25, unlockLevel:25 },
      'Mars-F LPVO':       { name:'Mars-F LPVO',       type:'Scope', pts:25, unlockLevel:26 },
      'R-MR 1.00x':        { name:'R-MR 1.00x',        type:'Scope', pts:10, unlockLevel:27 },
      'NFX 8.00x':         { name:'NFX 8.00x',         type:'Scope', pts:10, unlockLevel:28 },
      'MC-CO LPVO':        { name:'MC-CO LPVO',        type:'Scope', pts:25, unlockLevel:29 },
      'PAS-35 3.00x':      { name:'PAS-35 3.00x',      type:'Scope', pts:25, unlockLevel:31 },
      'RO-S 1.25x':        { name:'RO-S 1.25x',        type:'Scope', pts:10, unlockLevel:32 },
      '1P88 Variable':     { name:'1P88 Variable',     type:'Scope', pts:25, unlockLevel:33 },
      'LERT 8.00x':        { name:'LERT 8.00x',        type:'Scope', pts:10, unlockLevel:34 },
      'R-VPS 10.00x':      { name:'R-VPS 10.00x',      type:'Scope', pts:10, unlockLevel:35 },
      'DVO LPVO':          { name:'DVO LPVO',          type:'Scope', pts:25, unlockLevel:37 },
      'SM Rifle Variable': { name:'SM Rifle Variable', type:'Scope', pts:25, unlockLevel:38 },
      'A-P2 1.75x':        { name:'A-P2 1.75x',        type:'Scope', pts:10, unlockLevel:39 },
      'TS-HD 6.00x':       { name:'TS-HD 6.00x',       type:'Scope', pts:25, unlockLevel:40 },
      'SU-230 LPVO':       { name:'SU-230 LPVO',       type:'Scope', pts:20, unlockLevel:'Season 1 Hardware 1' },

      // Optic Accessories
      'None–Optic Accessory':          { name:'None',                     type:'Optic Accessory', pts:0,  unlockLevel:0 },
      'Canted Iron Sight':             { name:'Canted Iron Sight',        type:'Optic Accessory', pts:5,  unlockLevel:4 },
      'Canted Reflex':                 { name:'Canted Reflex',            type:'Optic Accessory', pts:10, unlockLevel:16 },
      'Adjustable Magnification 2.00x':{ name:'Adjustable Magnification 2.00x', type:'Optic Accessory', pts:10, unlockLevel:24 },
      'Adjustable Magnification 3.00x':{ name:'Adjustable Magnification 3.00x', type:'Optic Accessory', pts:10, unlockLevel:28 },
      'Adjustable Magnification 4.00x':{ name:'Adjustable Magnification 4.00x', type:'Optic Accessory', pts:10, unlockLevel:35 },

      // Top Accessories
      'None–Top Accessory': { name:'None',           type:'Top Accessory', pts:0,  unlockLevel:0 },
      '5 MW Red':           { name:'5 MW Red',       type:'Top Accessory', pts:10, unlockLevel:3 },
      '5 MW Green':         { name:'5 MW Green',     type:'Top Accessory', pts:10, unlockLevel:18 },
      '50 MW Green':        { name:'50 MW Green',    type:'Top Accessory', pts:20, unlockLevel:26 },
      '50 MW Blue':         { name:'50 MW Blue',     type:'Top Accessory', pts:20, unlockLevel:33 },
      '120 MW Blue':        { name:'120 MW Blue',    type:'Top Accessory', pts:30, unlockLevel:36 },

      // Left Accessories
      'None–Left Accessory': { name:'None',         type:'Left Accessory', pts:0,  unlockLevel:0 },
      'Flashlight':          { name:'Flashlight',   type:'Left Accessory', pts:10, unlockLevel:6 },
      'Range Finder':        { name:'Range Finder', type:'Left Accessory', pts:15, unlockLevel:38 },

      // Muzzles
      'None–Muzzle':          { name:'None',                type:'Muzzle', pts:0,  unlockLevel:0 },
      'Single-Port Brake':    { name:'Single-Port Brake',   type:'Muzzle', pts:10, unlockLevel:0 },
      'Triple-Port Brake':    { name:'Triple-Port Brake',   type:'Muzzle', pts:10, unlockLevel:0 },
      'Standard Suppressor':  { name:'Standard Suppressor', type:'Muzzle', pts:20, unlockLevel:1 },
      'Flash Hider':          { name:'Flash Hider',         type:'Muzzle', pts:10, unlockLevel:5 },
      'Linear Comp':          { name:'Linear Comp',         type:'Muzzle', pts:10, unlockLevel:7 },
      'CQB Suppressor':       { name:'CQB Suppressor',      type:'Muzzle', pts:30, unlockLevel:14 },
      'Compensated Brake':    { name:'Compensated Brake',   type:'Muzzle', pts:20, unlockLevel:20 },
      'Long Suppressor':      { name:'Long Suppressor',     type:'Muzzle', pts:25, unlockLevel:21 },
      'Lightened Suppressor': { name:'Lightened Suppressor',type:'Muzzle', pts:30, unlockLevel:30 },

      // Barrels
      '560mm Factory': { name:'560mm Factory', type:'Barrel', pts:15, unlockLevel:0 },
      '560mm Cut':     { name:'560mm Cut',     type:'Barrel', pts:10, unlockLevel:10 },
      '457mm Urban':   { name:'457mm Urban',   type:'Barrel', pts:15, unlockLevel:39 },

      // Underbarrels
      'None–Underbarrel':   { name:'None',               type:'Underbarrel', pts:0,  unlockLevel:0 },
      'Folding Vertical':   { name:'Folding Vertical',   type:'Underbarrel', pts:10, unlockLevel:2 },
      'Alloy Vertical':     { name:'Alloy Vertical',     type:'Underbarrel', pts:20, unlockLevel:4 },
      'Ribbed Vertical':    { name:'Ribbed Vertical',    type:'Underbarrel', pts:20, unlockLevel:8 },
      '6H64 Vertical':      { name:'6H64 Vertical',      type:'Underbarrel', pts:25, unlockLevel:11 },
      'Classic Vertical':   { name:'Classic Vertical',   type:'Underbarrel', pts:35, unlockLevel:13 },
      'PTT Grip Pod':       { name:'PTT Grip Pod',       type:'Underbarrel', pts:20, unlockLevel:15 },
      'Folding Stubby':     { name:'Folding Stubby',     type:'Underbarrel', pts:20, unlockLevel:17 },
      'Bipod':              { name:'Bipod',              type:'Underbarrel', pts:10, unlockLevel:17 },
      'Ribbed Stubby':      { name:'Ribbed Stubby',      type:'Underbarrel', pts:30, unlockLevel:19 },
      'Canted Stubby':      { name:'Canted Stubby',      type:'Underbarrel', pts:30, unlockLevel:22 },
      'Stippled Stubby':    { name:'Stippled Stubby',    type:'Underbarrel', pts:35, unlockLevel:23 },
      'Low-Profile Stubby': { name:'Low-Profile Stubby', type:'Underbarrel', pts:45, unlockLevel:27 },
      'QD Grip Pod':        { name:'QD Grip Pod',        type:'Underbarrel', pts:30, unlockLevel:29 },
      'Slim Angled':        { name:'Slim Angled',        type:'Underbarrel', pts:25, unlockLevel:32 },
      'Classic Grip Pod':   { name:'Classic Grip Pod',   type:'Underbarrel', pts:30, unlockLevel:36 },
      'Full Angled':        { name:'Full Angled',        type:'Underbarrel', pts:25, unlockLevel:40 },

      // Magazines
      '10RND Magazine':  { name:'10RND Magazine',  type:'Magazine', pts:5,  unlockLevel:0 },
      '10RND Fast Mag':  { name:'10RND Fast Mag',  type:'Magazine', pts:10, unlockLevel:25 },

      // Ammunition
      'FMJ':           { name:'FMJ',           type:'Ammunition', pts:5,  unlockLevel:0 },
      'Tungsten Core': { name:'Tungsten Core', type:'Ammunition', pts:5,  unlockLevel:15 },
      'Frangible':     { name:'Frangible',     type:'Ammunition', pts:20, unlockLevel:20 },
      'Hollow Point':  { name:'Hollow Point',  type:'Ammunition', pts:20, unlockLevel:30 },
      'Match Grade':   { name:'Match Grade',   type:'Ammunition', pts:10, unlockLevel:37 },
    }
  };
  target['LMR27'] = {
    attachments: {
      // Scopes
      'Iron Sights':        { name:'Iron Sights',        type:'Scope', pts:5,  unlockLevel:0 },
      'Baker 3.00x':        { name:'Baker 3.00x',        type:'Scope', pts:10, unlockLevel:0 },
      'OSA-7 1.00x':        { name:'OSA-7 1.00x',        type:'Scope', pts:10, unlockLevel:1 },
      '2PRO 1.25x':         { name:'2PRO 1.25x',         type:'Scope', pts:10, unlockLevel:2 },
      'CCO 2.00x':          { name:'CCO 2.00x',          type:'Scope', pts:10, unlockLevel:4 },
      'BF-2M 2.50x':        { name:'BF-2M 2.50x',        type:'Scope', pts:10, unlockLevel:6 },
      '3VZR 1.75x':         { name:'3VZR 1.75x',         type:'Scope', pts:10, unlockLevel:8 },
      'SU-231 1.50x':       { name:'SU-231 1.50x',       type:'Scope', pts:10, unlockLevel:9 },
      'ST Prisim 5.00x':    { name:'ST Prisim 5.00x',    type:'Scope', pts:10, unlockLevel:10 },
      'R4T 2.00x':          { name:'R4T 2.00x',          type:'Scope', pts:10, unlockLevel:12 },
      'SDO 3.50x':          { name:'SDO 3.50x',          type:'Scope', pts:10, unlockLevel:13 },
      'A-P2 1.75x':         { name:'A-P2 1.75x',         type:'Scope', pts:10, unlockLevel:14 },
      'Mini Flex 1.00x':    { name:'Mini Flex 1.00x',    type:'Scope', pts:10, unlockLevel:15 },
      'ROX 1.50x':          { name:'ROX 1.50x',          type:'Scope', pts:10, unlockLevel:16 },
      'PVQ-31 4.00x':       { name:'PVQ-31 4.00x',       type:'Scope', pts:10, unlockLevel:17 },
      'SF-G2 5.00x':        { name:'SF-G2 5.00x',        type:'Scope', pts:10, unlockLevel:18 },
      'Mars-F LPVO':        { name:'Mars-F LPVO',        type:'Scope', pts:25, unlockLevel:20 },
      'RO-M 1.75x':         { name:'RO-M 1.75x',         type:'Scope', pts:10, unlockLevel:21 },
      'DVO LPVO':           { name:'DVO LPVO',           type:'Scope', pts:25, unlockLevel:22 },
      'S-VPS 6.00x':        { name:'S-VPS 6.00x',        type:'Scope', pts:10, unlockLevel:23 },
      'LDS 4.50x':          { name:'LDS 4.50x',          type:'Scope', pts:10, unlockLevel:24 },
      'R-VPS 10.00x':       { name:'R-VPS 10.00x',       type:'Scope', pts:10, unlockLevel:25 },
      'MC-CO LPVO':         { name:'MC-CO LPVO',         type:'Scope', pts:25, unlockLevel:26 },
      'SSDS 6.00x':         { name:'SSDS 6.00x',         type:'Scope', pts:10, unlockLevel:27 },
      'R-MR 1.00x':         { name:'R-MR 1.00x',         type:'Scope', pts:10, unlockLevel:28 },
      'RO-S 1.25x':         { name:'RO-S 1.25x',         type:'Scope', pts:10, unlockLevel:29 },
      '1P88 Variable':      { name:'1P88 Variable',      type:'Scope', pts:25, unlockLevel:30 },
      'CQ RDS 1.25x':       { name:'CQ RDS 1.25x',       type:'Scope', pts:10, unlockLevel:31 },
      'NFX 8.00x':          { name:'NFX 8.00x',          type:'Scope', pts:10, unlockLevel:32 },
      'LERT 8.00x':         { name:'LERT 8.00x',         type:'Scope', pts:10, unlockLevel:33 },
      '1P87 1.50x':         { name:'1P87 1.50x',         type:'Scope', pts:10, unlockLevel:34 },
      'PAS-35 3.00x':       { name:'PAS-35 3.00x',       type:'Scope', pts:25, unlockLevel:35 },
      'SM Rifle Variable':  { name:'SM Rifle Variable',  type:'Scope', pts:25, unlockLevel:38 },
      'TS-HD 6.00x':        { name:'TS-HD 6.00x',        type:'Scope', pts:25, unlockLevel:39 },
      'Grim 1.50x':         { name:'Grim 1.50x',         type:'Scope', pts:25, unlockLevel:40 },
      'SU-230 LPVO':        { name:'SU-230 LPVO',        type:'Scope', pts:20, unlockLevel:'Season 1 Hardware 1' },

      // Optic Accessories
      'None–Optic Accessory':   { name:'None',              type:'Optic Accessory', pts:0,  unlockLevel:0 },
      'Canted Iron Sight':      { name:'Canted Iron Sight', type:'Optic Accessory', pts:5,  unlockLevel:8 },
      'Piggyback Reflex':       { name:'Piggyback Reflex',  type:'Optic Accessory', pts:10, unlockLevel:14 },
      'Canted Reflex':          { name:'Canted Reflex',     type:'Optic Accessory', pts:10, unlockLevel:22 },

      // Right Accessories
      'None–Right Accessory': { name:'None',         type:'Right Accessory', pts:0,  unlockLevel:0 },
      '5 MW Red':             { name:'5 MW Red',     type:'Right Accessory', pts:10, unlockLevel:1 },
      '5 MW Green':           { name:'5 MW Green',   type:'Right Accessory', pts:10, unlockLevel:5 },
      '50 MW Green':          { name:'50 MW Green',  type:'Right Accessory', pts:20, unlockLevel:16 },
      '50 MW Blue':           { name:'50 MW Blue',   type:'Right Accessory', pts:20, unlockLevel:28 },
      '120 MW Blue':          { name:'120 MW Blue',  type:'Right Accessory', pts:30, unlockLevel:34 },

      // Left Accessories
      'None–Left Accessory': { name:'None',        type:'Left Accessory', pts:0,  unlockLevel:0 },
      'Flashlight':          { name:'Flashlight',  type:'Left Accessory', pts:10, unlockLevel:3 },
      'Range Finder':        { name:'Range Finder',type:'Left Accessory', pts:15, unlockLevel:27 },

      // Muzzles
      'None–Muzzle':          { name:'None',                type:'Muzzle', pts:0,  unlockLevel:0 },
      'Flash Hider':          { name:'Flash Hider',         type:'Muzzle', pts:10, unlockLevel:0 },
      'Linear Comp':          { name:'Linear Comp',         type:'Muzzle', pts:10, unlockLevel:3 },
      'Single-Port Brake':    { name:'Single-Port Brake',   type:'Muzzle', pts:5,  unlockLevel:6 },
      'Standard Suppressor':  { name:'Standard Suppressor', type:'Muzzle', pts:20, unlockLevel:9 },
      'CQB Suppressor':       { name:'CQB Suppressor',      type:'Muzzle', pts:30, unlockLevel:17 },
      'Long Suppressor':      { name:'Long Suppressor',     type:'Muzzle', pts:25, unlockLevel:20 },
      'Double-Port Brake':    { name:'Double-Port Brake',   type:'Muzzle', pts:10, unlockLevel:30 },
      'Lightened Suppressor': { name:'Lightened Suppressor',type:'Muzzle', pts:30, unlockLevel:36 },
      'Compensated Brake':    { name:'Compensated Brake',   type:'Muzzle', pts:20, unlockLevel:37 },

      // Barrels
      '21.5" Factory': { name:'21.5" Factory', type:'Barrel', pts:10, unlockLevel:0 },
      '24" Extended':  { name:'24" Extended',  type:'Barrel', pts:15, unlockLevel:15 },
      '21.5" Fluted':  { name:'21.5" Fluted',  type:'Barrel', pts:20, unlockLevel:40 },

      // Underbarrels
      'None–Underbarrel':   { name:'None',               type:'Underbarrel', pts:0,  unlockLevel:0 },
      'Factory Angled':     { name:'Factory Angled',     type:'Underbarrel', pts:25, unlockLevel:0 },
      'Bipod':              { name:'Bipod',              type:'Underbarrel', pts:10, unlockLevel:0 },
      'Folding Vertical':   { name:'Folding Vertical',   type:'Underbarrel', pts:10, unlockLevel:2 },
      'Alloy Vertical':     { name:'Alloy Vertical',     type:'Underbarrel', pts:20, unlockLevel:7 },
      'Ribbed Vertical':    { name:'Ribbed Vertical',    type:'Underbarrel', pts:20, unlockLevel:11 },
      '6H64 Vertical':      { name:'6H64 Vertical',      type:'Underbarrel', pts:25, unlockLevel:13 },
      'PTT Grip Pod':       { name:'PTT Grip Pod',       type:'Underbarrel', pts:20, unlockLevel:15 },
      'Classic Vertical':   { name:'Classic Vertical',   type:'Underbarrel', pts:35, unlockLevel:16 },
      'Folding Stubby':     { name:'Folding Stubby',     type:'Underbarrel', pts:20, unlockLevel:21 },
      'Ribbed Stubby':      { name:'Ribbed Stubby',      type:'Underbarrel', pts:30, unlockLevel:24 },
      'QD Grip Pod':        { name:'QD Grip Pod',        type:'Underbarrel', pts:30, unlockLevel:25 },
      'Canted Stubby':      { name:'Canted Stubby',      type:'Underbarrel', pts:30, unlockLevel:26 },
      'Stippled Stubby':    { name:'Stippled Stubby',    type:'Underbarrel', pts:35, unlockLevel:29 },
      'Low-Profile Stubby': { name:'Low-Profile Stubby', type:'Underbarrel', pts:45, unlockLevel:31 },
      'Adjustable Angled':  { name:'Adjustable Angled',  type:'Underbarrel', pts:15, unlockLevel:33 },
      'Classic Grip Pod':   { name:'Classic Grip Pod',   type:'Underbarrel', pts:30, unlockLevel:35 },
      'Full Angled':        { name:'Full Angled',        type:'Underbarrel', pts:25, unlockLevel:36 },

      // Magazines
      '10RND Magazine':  { name:'10RND Magazine',  type:'Magazine', pts:5,  unlockLevel:0 },
      '10RND Fast Mag':  { name:'10RND Fast Mag',  type:'Magazine', pts:10, unlockLevel:5 },
      '15RND Magazine':  { name:'15RND Magazine',  type:'Magazine', pts:20, unlockLevel:14 },
      '15RND Fast Mag':  { name:'15RND Fast Mag',  type:'Magazine', pts:25, unlockLevel:19 },
      '20RND Magazine':  { name:'20RND Magazine',  type:'Magazine', pts:45, unlockLevel:28 },
      '20RND Fast Mag':  { name:'20RND Fast Mag',  type:'Magazine', pts:50, unlockLevel:39 },

      // Ergonomics
      'None–Ergonomics':   { name:'None',              type:'Ergonomics', pts:0,  unlockLevel:0 },
      'Improved Mag Catch':{ name:'Improved Mag Catch',type:'Ergonomics', pts:5,  unlockLevel:4 },

      // Ammunition
      'FMJ':           { name:'FMJ',           type:'Ammunition', pts:5,  unlockLevel:0 },
      'Tungsten Core': { name:'Tungsten Core', type:'Ammunition', pts:5,  unlockLevel:7 },
      'Frangible':     { name:'Frangible',     type:'Ammunition', pts:20, unlockLevel:19 },
      'Hollow Point':  { name:'Hollow Point',  type:'Ammunition', pts:20, unlockLevel:11 },
      'Synthetic Tip': { name:'Synthetic Tip', type:'Ammunition', pts:30, unlockLevel:38 },
    }
  };
 
  // Shotguns
  target['M87A1'] = {
    attachments: {
      // Scopes
      'Iron Sights':   { name:'Iron Sights',   type:'Scope', pts:5,  unlockLevel:0 },
      '2PRO 1.25x':    { name:'2PRO 1.25x',    type:'Scope', pts:10, unlockLevel:1 },
      'CCO 2.00x':     { name:'CCO 2.00x',     type:'Scope', pts:10, unlockLevel:2 },
      'R4T 2.00x':     { name:'R4T 2.00x',     type:'Scope', pts:10, unlockLevel:3 },
      'R-MR 1.00x':    { name:'R-MR 1.00x',    type:'Scope', pts:10, unlockLevel:5 },
      'A-P2 1.75x':    { name:'A-P2 1.75x',    type:'Scope', pts:10, unlockLevel:7 },
      'PVQ-31 4.00x':  { name:'PVQ-31 4.00x',  type:'Scope', pts:10, unlockLevel:9 },
      'RO-M 1.75x':    { name:'RO-M 1.75x',    type:'Scope', pts:10, unlockLevel:11 },
      'CQ RDS 1.25x':  { name:'CQ RDS 1.25x',  type:'Scope', pts:10, unlockLevel:12 },
      'SF-G2 5.00x':   { name:'SF-G2 5.00x',   type:'Scope', pts:10, unlockLevel:14 },
      'Baker 3.00x':   { name:'Baker 3.00x',   type:'Scope', pts:10, unlockLevel:16 },
      'Grim 1.50x':    { name:'Grim 1.50x',    type:'Scope', pts:25, unlockLevel:17 },
      'Mini Flex 1.00x':{name:'Mini Flex 1.00x',type:'Scope', pts:10, unlockLevel:19 },
      '3VZR 1.75x':    { name:'3VZR 1.75x',    type:'Scope', pts:10, unlockLevel:20 },
      'OSA-7 1.00x':   { name:'OSA-7 1.00x',   type:'Scope', pts:10, unlockLevel:21 },
      'BF-2M 2.50x':   { name:'BF-2M 2.50x',   type:'Scope', pts:10, unlockLevel:23 },
      'LDS 4.50x':     { name:'LDS 4.50x',     type:'Scope', pts:10, unlockLevel:25 },
      'RO-S 1.25x':    { name:'RO-S 1.25x',    type:'Scope', pts:10, unlockLevel:27 },
      'SDO 3.50x':     { name:'SDO 3.50x',     type:'Scope', pts:10, unlockLevel:29 },
      'SU-231 1.50x':  { name:'SU-231 1.50x',  type:'Scope', pts:10, unlockLevel:30 },
      'ST Prisim 5.00x':{name:'ST Prisim 5.00x',type:'Scope', pts:10, unlockLevel:32 },
      'ROX 1.50x':     { name:'ROX 1.50x',     type:'Scope', pts:10, unlockLevel:34 },
      'PAS-35 3.00x':  { name:'PAS-35 3.00x',  type:'Scope', pts:25, unlockLevel:36 },
      'Mars-F LPVO':   { name:'Mars-F LPVO',   type:'Scope', pts:25, unlockLevel:37 },
      '1P87 1.50x':    { name:'1P87 1.50x',    type:'Scope', pts:10, unlockLevel:39 },

      // Optic Accessories
      'None–Optic Accessory': { name:'None',               type:'Optic Accessory', pts:0,  unlockLevel:0 },
      'Canted Iron Sights':   { name:'Canted Iron Sights',type:'Optic Accessory', pts:5,  unlockLevel:12 },

      // Right Accessories
      'None–Right Accessory': { name:'None',          type:'Right Accessory', pts:0,  unlockLevel:0 },
      '5 MW Red':             { name:'5 MW Red',      type:'Right Accessory', pts:10, unlockLevel:4 },
      '50 MW Blue':           { name:'50 MW Blue',    type:'Right Accessory', pts:20, unlockLevel:15 },
      '5 MW Green':           { name:'5 MW Green',    type:'Right Accessory', pts:10, unlockLevel:22 },
      '50 MW Green':          { name:'50 MW Green',   type:'Right Accessory', pts:20, unlockLevel:35 },
      '120 MW Blue':          { name:'120 MW Blue',   type:'Right Accessory', pts:30, unlockLevel:40 },

      // Left Accessories
      'None–Left Accessory':  { name:'None',        type:'Left Accessory', pts:0,  unlockLevel:0 },
      'Flashlight':           { name:'Flashlight',  type:'Left Accessory', pts:10, unlockLevel:13 },

      // Muzzles
      'None–Muzzle':          { name:'None',               type:'Muzzle', pts:0,  unlockLevel:0 },
      'CQB Suppressor':       { name:'CQB Suppressor',     type:'Muzzle', pts:30, unlockLevel:18 },
      'Lightened Suppressor': { name:'Lightened Suppressor',type:'Muzzle',pts:30, unlockLevel:37 },

      // Barrels
      '20\" Factory': { name:'20" Factory', type:'Barrel', pts:10, unlockLevel:0 },

      // Underbarrels
      'None–Underbarrel':   { name:'None',               type:'Underbarrel', pts:0,  unlockLevel:0 },
      'Alloy Vertical':     { name:'Alloy Vertical',     type:'Underbarrel', pts:20, unlockLevel:2 },
      'Ribbed Stubby':      { name:'Ribbed Stubby',      type:'Underbarrel', pts:30, unlockLevel:5 },
      'Stippled Stubby':    { name:'Stippled Stubby',    type:'Underbarrel', pts:35, unlockLevel:7 },
      'Slim Angled':        { name:'Slim Angled',        type:'Underbarrel', pts:25, unlockLevel:10 },
      'Folding Vertical':   { name:'Folding Vertical',   type:'Underbarrel', pts:10, unlockLevel:14 },
      'Folding Stubby':     { name:'Folding Stubby',     type:'Underbarrel', pts:20, unlockLevel:17 },
      'Adjustable Angled':  { name:'Adjustable Angled',  type:'Underbarrel', pts:15, unlockLevel:19 },
      '6H64 Vertical':      { name:'6H64 Vertical',      type:'Underbarrel', pts:25, unlockLevel:21 },
      'Canted Stubby':      { name:'Canted Stubby',      type:'Underbarrel', pts:30, unlockLevel:24 },
      'Ribbed Vertical':    { name:'Ribbed Vertical',    type:'Underbarrel', pts:20, unlockLevel:28 },
      'Classic Vertical':   { name:'Classic Vertical',   type:'Underbarrel', pts:35, unlockLevel:31 },
      'Low-Profile Stubby': { name:'Low-Profile Stubby', type:'Underbarrel', pts:45, unlockLevel:34 },
      'Full Angled':        { name:'Full Angled',        type:'Underbarrel', pts:25, unlockLevel:38 },

      // Magazines
      '7 Shell Tube': { name:'7 Shell Tube', type:'Magazine', pts:5, unlockLevel:0 },
      '5 Shell Tube': { name:'5 Shell Tube', type:'Magazine', pts:5, unlockLevel:6 },
      '6 Shell Tube': { name:'6 Shell Tube', type:'Magazine', pts:5, unlockLevel:33 },

      // Ammunition
      'Buckshot':  { name:'Buckshot',  type:'Ammunition', pts:10, unlockLevel:0 },
      'Slugs':     { name:'Slugs',     type:'Ammunition', pts:40, unlockLevel:8 },
      'Flechette': { name:'Flechette', type:'Ammunition', pts:30, unlockLevel:26 },
    }
  };
  target['M1014'] = {
    attachments: {
      // Scopes
      'Iron Sights':    { name:'Iron Sights',    type:'Scope', pts:5,  unlockLevel:0 },
      '2PRO 1.25x':     { name:'2PRO 1.25x',     type:'Scope', pts:10, unlockLevel:1 },
      'CCO 2.00x':      { name:'CCO 2.00x',      type:'Scope', pts:10, unlockLevel:2 },
      'R4T 2.00x':      { name:'R4T 2.00x',      type:'Scope', pts:10, unlockLevel:3 },
      'R-MR 1.00x':     { name:'R-MR 1.00x',     type:'Scope', pts:10, unlockLevel:5 },
      'A-P2 1.75x':     { name:'A-P2 1.75x',     type:'Scope', pts:10, unlockLevel:7 },
      'PVQ-31 4.00x':   { name:'PVQ-31 4.00x',   type:'Scope', pts:10, unlockLevel:9 },
      'RO-M 1.75x':     { name:'RO-M 1.75x',     type:'Scope', pts:10, unlockLevel:11 },
      'CQ RDS 1.25x':   { name:'CQ RDS 1.25x',   type:'Scope', pts:10, unlockLevel:12 },
      'SF-G2 5.00x':    { name:'SF-G2 5.00x',    type:'Scope', pts:10, unlockLevel:14 },
      'Baker 3.00x':    { name:'Baker 3.00x',    type:'Scope', pts:10, unlockLevel:16 },
      'Grim 1.50x':     { name:'Grim 1.50x',     type:'Scope', pts:25, unlockLevel:17 },
      'Mini Flex 1.00x':{ name:'Mini Flex 1.00x',type:'Scope', pts:10, unlockLevel:19 },
      '3VZR 1.75x':     { name:'3VZR 1.75x',     type:'Scope', pts:10, unlockLevel:20 },
      'OSA-7 1.00x':    { name:'OSA-7 1.00x',    type:'Scope', pts:10, unlockLevel:22 },
      'BF-2M 2.50x':    { name:'BF-2M 2.50x',    type:'Scope', pts:10, unlockLevel:24 },
      'LDS 4.50x':      { name:'LDS 4.50x',      type:'Scope', pts:10, unlockLevel:26 },
      'RO-S 1.25x':     { name:'RO-S 1.25x',     type:'Scope', pts:10, unlockLevel:28 },
      'SDO 3.50x':      { name:'SDO 3.50x',      type:'Scope', pts:10, unlockLevel:30 },
      'SU-231 1.50x':   { name:'SU-231 1.50x',   type:'Scope', pts:10, unlockLevel:31 },
      'ST Prisim 5.00x':{ name:'ST Prisim 5.00x',type:'Scope', pts:10, unlockLevel:33 },
      'ROX 1.50x':      { name:'ROX 1.50x',      type:'Scope', pts:10, unlockLevel:35 },
      'Mars-F LPVO':    { name:'Mars-F LPVO',    type:'Scope', pts:25, unlockLevel:36 },
      '1P87 1.50x':     { name:'1P87 1.50x',     type:'Scope', pts:10, unlockLevel:38 },
      'PAS-35 3.00x':   { name:'PAS-35 3.00x',   type:'Scope', pts:25, unlockLevel:39 },

      // Optic Accessories
      'None–Optic Accessory': { name:'None',               type:'Optic Accessory', pts:0, unlockLevel:0 },
      'Canted Iron Sights':   { name:'Canted Iron Sights', type:'Optic Accessory', pts:5, unlockLevel:12 },
      'Canted Reflex':        { name:'Canted Reflex',      type:'Optic Accessory', pts:5, unlockLevel:24 },
      'Piggyback Reflex':     { name:'Piggyback Reflex',   type:'Optic Accessory', pts:10, unlockLevel:31 },

      // Right Accessories
      'None–Right Accessory': { name:'None',          type:'Right Accessory', pts:0,  unlockLevel:0 },
      '5 MW Red':             { name:'5 MW Red',      type:'Right Accessory', pts:10, unlockLevel:4 },
      '50 MW Blue':           { name:'50 MW Blue',    type:'Right Accessory', pts:20, unlockLevel:15 },
      '5 MW Green':           { name:'5 MW Green',    type:'Right Accessory', pts:10, unlockLevel:23 },
      '50 MW Green':          { name:'50 MW Green',   type:'Right Accessory', pts:20, unlockLevel:34 },
      '120 MW Blue':          { name:'120 MW Blue',   type:'Right Accessory', pts:30, unlockLevel:40 },

      // Left Accessories
      'None–Left Accessory':  { name:'None',        type:'Left Accessory', pts:0,  unlockLevel:0 },
      'Flashlight':           { name:'Flashlight',  type:'Left Accessory', pts:10, unlockLevel:13 },

      // Muzzles
      'None–Muzzle':          { name:'None',               type:'Muzzle', pts:0,  unlockLevel:0 },
      'CQB Suppressor':       { name:'CQB Suppressor',     type:'Muzzle', pts:30, unlockLevel:18 },
      'Lightened Suppressor': { name:'Lightened Suppressor',type:'Muzzle',pts:30, unlockLevel:37 },

      // Barrels
      '18.5\" Factory': { name:'18.5" Factory', type:'Barrel', pts:10, unlockLevel:0 },

      // Underbarrels
      'None–Underbarrel':   { name:'None',               type:'Underbarrel', pts:0,  unlockLevel:0 },
      'Alloy Vertical':     { name:'Alloy Vertical',     type:'Underbarrel', pts:20, unlockLevel:2 },
      'Ribbed Stubby':      { name:'Ribbed Stubby',      type:'Underbarrel', pts:30, unlockLevel:5 },
      'Stippled Stubby':    { name:'Stippled Stubby',    type:'Underbarrel', pts:35, unlockLevel:7 },
      'Slim Angled':        { name:'Slim Angled',        type:'Underbarrel', pts:25, unlockLevel:10 },
      'Folding Vertical':   { name:'Folding Vertical',   type:'Underbarrel', pts:10, unlockLevel:14 },
      'Folding Stubby':     { name:'Folding Stubby',     type:'Underbarrel', pts:20, unlockLevel:17 },
      'Adjustable Angled':  { name:'Adjustable Angled',  type:'Underbarrel', pts:15, unlockLevel:19 },
      '6H64 Vertical':      { name:'6H64 Vertical',      type:'Underbarrel', pts:25, unlockLevel:21 },
      'Canted Stubby':      { name:'Canted Stubby',      type:'Underbarrel', pts:30, unlockLevel:25 },
      'Ribbed Vertical':    { name:'Ribbed Vertical',    type:'Underbarrel', pts:20, unlockLevel:29 },
      'Classic Vertical':   { name:'Classic Vertical',   type:'Underbarrel', pts:35, unlockLevel:32 },
      'Low-Profile Stubby': { name:'Low-Profile Stubby', type:'Underbarrel', pts:45, unlockLevel:36 },
      'Full Angled':        { name:'Full Angled',        type:'Underbarrel', pts:25, unlockLevel:39 },

      // Magazines
      '6 Shell Tube': { name:'6 Shell Tube', type:'Magazine', pts:5, unlockLevel:0 },
      '4 Shell Tube': { name:'4 Shell Tube', type:'Magazine', pts:5, unlockLevel:6 },

      // Ammunition
      'Buckshot':  { name:'Buckshot',  type:'Ammunition', pts:10, unlockLevel:0 },
      'Slugs':     { name:'Slugs',     type:'Ammunition', pts:40, unlockLevel:8 },
      'Flechette': { name:'Flechette', type:'Ammunition', pts:30, unlockLevel:27 },
    }
  };
  target['18.5KS-K'] = {
    attachments: {
      // Scopes
      'Iron Sights':        { name:'Iron Sights',        type:'Scope', pts:5,  unlockLevel:0 },
      'OSA-7 1.00x':        { name:'OSA-7 1.00x',        type:'Scope', pts:10, unlockLevel:0 },
      '2PRO 1.25x':         { name:'2PRO 1.25x',         type:'Scope', pts:10, unlockLevel:0 },
      'CCO 2.00x':          { name:'CCO 2.00x',          type:'Scope', pts:10, unlockLevel:1 },
      'R4T 2.00x':          { name:'R4T 2.00x',          type:'Scope', pts:10, unlockLevel:2 },
      'R-MR 1.00x':         { name:'R-MR 1.00x',         type:'Scope', pts:10, unlockLevel:3 },
      'A-P2 1.75x':         { name:'A-P2 1.75x',         type:'Scope', pts:10, unlockLevel:5 },
      'PVQ-31 4.00x':       { name:'PVQ-31 4.00x',       type:'Scope', pts:10, unlockLevel:7 },
      'RO-M 1.75x':         { name:'RO-M 1.75x',         type:'Scope', pts:10, unlockLevel:9 },
      'CQ RDS 1.25x':       { name:'CQ RDS 1.25x',       type:'Scope', pts:10, unlockLevel:10 },
      'SF-G2 5.00x':        { name:'SF-G2 5.00x',        type:'Scope', pts:10, unlockLevel:12 },
      'Baker 3.00x':        { name:'Baker 3.00x',        type:'Scope', pts:10, unlockLevel:14 },
      'Grim 1.50x':         { name:'Grim 1.50x',         type:'Scope', pts:25, unlockLevel:16 },
      'Mini Flex 1.00x':    { name:'Mini Flex 1.00x',    type:'Scope', pts:10, unlockLevel:17 },
      '3VZR 1.75x':         { name:'3VZR 1.75x',         type:'Scope', pts:10, unlockLevel:19 },
      'BF-2M 2.50x':        { name:'BF-2M 2.50x',        type:'Scope', pts:10, unlockLevel:21 },
      'LDS 4.50x':          { name:'LDS 4.50x',          type:'Scope', pts:10, unlockLevel:23 },
      'RO-S 1.25x':         { name:'RO-S 1.25x',         type:'Scope', pts:10, unlockLevel:25 },
      'SDO 3.50x':          { name:'SDO 3.50x',          type:'Scope', pts:10, unlockLevel:27 },
      'SU-231 1.50x':       { name:'SU-231 1.50x',       type:'Scope', pts:10, unlockLevel:28 },
      'ST Prisim 5.00x':    { name:'ST Prisim 5.00x',    type:'Scope', pts:10, unlockLevel:30 },
      'ROX 1.50x':          { name:'ROX 1.50x',          type:'Scope', pts:10, unlockLevel:32 },
      'PAS-35 3.00x':       { name:'PAS-35 3.00x',       type:'Scope', pts:25, unlockLevel:34 },
      'Mars-F LPVO':        { name:'Mars-F LPVO',        type:'Scope', pts:25, unlockLevel:36 },
      '1P87 1.50x':         { name:'1P87 1.50x',         type:'Scope', pts:10, unlockLevel:37 },

      // Optic Accessories
      'None–Optic Accessory':   { name:'None',                type:'Optic Accessory', pts:0,  unlockLevel:0 },
      'Canted Iron Sights':     { name:'Canted Iron Sights',  type:'Optic Accessory', pts:5,  unlockLevel:12 },
      'Canted Reflex':          { name:'Canted Reflex',       type:'Optic Accessory', pts:5,  unlockLevel:23 },

      // Right Accessories
      'None–Right Accessory':   { name:'None',          type:'Right Accessory', pts:0,  unlockLevel:0 },
      '5 MW Red':               { name:'5 MW Red',      type:'Right Accessory', pts:10, unlockLevel:4 },
      '50 MW Blue':             { name:'50 MW Blue',    type:'Right Accessory', pts:20, unlockLevel:15 },
      '5 MW Green':             { name:'5 MW Green',    type:'Right Accessory', pts:10, unlockLevel:22 },
      '50 MW Green':            { name:'50 MW Green',   type:'Right Accessory', pts:20, unlockLevel:35 },
      '120 MW Blue':            { name:'120 MW Blue',   type:'Right Accessory', pts:30, unlockLevel:40 },

      // Left Accessories
      'None–Left Accessory':    { name:'None',        type:'Left Accessory', pts:0,  unlockLevel:0 },
      'Flashlight':             { name:'Flashlight',   type:'Left Accessory', pts:10, unlockLevel:11 },

      // Muzzles
      'None–Muzzle':            { name:'None',               type:'Muzzle', pts:0,  unlockLevel:0 },
      'Flash Hider':            { name:'Flash Hider',        type:'Muzzle', pts:10, unlockLevel:0 },
      'Double-Port Brake':      { name:'Double-Port Brake',  type:'Muzzle', pts:10, unlockLevel:0 },
      'CQB Suppressor':         { name:'CQB Suppressor',     type:'Muzzle', pts:30, unlockLevel:13 },
      'Lightened Suppressor':   { name:'Lightened Suppressor',type:'Muzzle',pts:30, unlockLevel:18 },

      // Barrels
      '430mm Cut':              { name:'430mm Cut',     type:'Barrel', pts:10, unlockLevel:0 },
      '430mm Factory':          { name:'430mm Factory', type:'Barrel', pts:15, unlockLevel:29 },

      // Underbarrels
      'None–Underbarrel':       { name:'None',               type:'Underbarrel', pts:0,  unlockLevel:0 },
      'Alloy Vertical':         { name:'Alloy Vertical',     type:'Underbarrel', pts:20, unlockLevel:2 },
      'Ribbed Stubby':          { name:'Ribbed Stubby',      type:'Underbarrel', pts:30, unlockLevel:5 },
      'Stippled Stubby':        { name:'Stippled Stubby',    type:'Underbarrel', pts:35, unlockLevel:7 },
      'Slim Angled':            { name:'Slim Angled',        type:'Underbarrel', pts:25, unlockLevel:10 },
      'Folding Vertical':       { name:'Folding Vertical',   type:'Underbarrel', pts:10, unlockLevel:14 },
      'Folding Stubby':         { name:'Folding Stubby',     type:'Underbarrel', pts:20, unlockLevel:17 },
      '6H64 Vertical':          { name:'6H64 Vertical',      type:'Underbarrel', pts:25, unlockLevel:21 },
      'Canted Stubby':          { name:'Canted Stubby',      type:'Underbarrel', pts:30, unlockLevel:24 },
      'Ribbed Vertical':        { name:'Ribbed Vertical',    type:'Underbarrel', pts:20, unlockLevel:28 },
      'Classic Vertical':       { name:'Classic Vertical',   type:'Underbarrel', pts:35, unlockLevel:31 },
      'Low-Profile Stubby':     { name:'Low-Profile Stubby', type:'Underbarrel', pts:45, unlockLevel:34 },
      'Full Angled':            { name:'Full Angled',        type:'Underbarrel', pts:25, unlockLevel:38 },

      // Magazines
      '8RND Magazine':          { name:'8RND Magazine',   type:'Magazine', pts:5,  unlockLevel:0 },
      '4RND Magazine':          { name:'4RND Magazine',   type:'Magazine', pts:5,  unlockLevel:6 },
      '8RND Fast Mag':          { name:'8RND Fast Mag',   type:'Magazine', pts:10, unlockLevel:20 },
      '4RND Fast Mag':          { name:'4RND Fast Mag',   type:'Magazine', pts:10, unlockLevel:33 },

      // Ammunition
      'Buckshot':               { name:'Buckshot',  type:'Ammunition', pts:10, unlockLevel:0 },
      'Slugs':                  { name:'Slugs',     type:'Ammunition', pts:40, unlockLevel:8 },
      'Flechette':              { name:'Flechette', type:'Ammunition', pts:30, unlockLevel:26 },
    }
  };
  
  // Secondaries
  target['GGH-22'] = {
    attachments: {
      // Scopes
      'Iron Sights':     { name:'Iron Sights',    type:'Scope', pts:5,  unlockLevel:0 },
      'ROX 1.50x':       { name:'ROX 1.50x',      type:'Scope', pts:10, unlockLevel:2 },
      'Mini Flex 1.00x': { name:'Mini Flex 1.00x',type:'Scope', pts:10, unlockLevel:6 },
      'CQ RDS 1.25x':    { name:'CQ RDS 1.25x',   type:'Scope', pts:10, unlockLevel:11 },
      'R-MR 1.00x':      { name:'R-MR 1.00x',     type:'Scope', pts:10, unlockLevel:14 },
      'A-P2 1.75x':      { name:'A-P2 1.75x',     type:'Scope', pts:10, unlockLevel:18 },
      'RO-S 1.25x':      { name:'RO-S 1.25x',     type:'Scope', pts:10, unlockLevel:21 },

      // Muzzles
      'None–Muzzle':       { name:'None',              type:'Muzzle', pts:0,  unlockLevel:0 },
      'Flash Hider':       { name:'Flash Hider',       type:'Muzzle', pts:10, unlockLevel:3 },
      'Single-Port Brake': { name:'Single-Port Brake', type:'Muzzle', pts:10, unlockLevel:7 },
      'Standard Suppressor':{name:'Standard Suppressor',type:'Muzzle',pts:20, unlockLevel:15 },
      'CQB Suppressor':    { name:'CQB Suppressor',    type:'Muzzle', pts:30, unlockLevel:22 },

      // Barrels
      '114mm Factory': { name:'114mm Factory', type:'Barrel', pts:10, unlockLevel:0 },
      '114mm Pencil':  { name:'114mm Pencil',  type:'Barrel', pts:20, unlockLevel:9 },

      // Underbarrels (lights / lasers)
      'None–Underbarrel':        { name:'None',                  type:'Underbarrel', pts:0,  unlockLevel:0 },
      '5 MW Red':                { name:'5 MW Red',              type:'Underbarrel', pts:10, unlockLevel:1 },
      '5 MW Green':              { name:'5 MW Green',            type:'Underbarrel', pts:10, unlockLevel:5 },
      'Flashlight':              { name:'Flashlight',            type:'Underbarrel', pts:10, unlockLevel:10 },
      '50 MW Green':             { name:'50 MW Green',           type:'Underbarrel', pts:20, unlockLevel:13 },
      'Laser Light Combo Red':   { name:'Laser Light Combo Red', type:'Underbarrel', pts:20, unlockLevel:17 },
      'Laser Light Combo Green': { name:'Laser Light Combo Green',type:'Underbarrel',pts:20, unlockLevel:20 },

      // Magazines
      '15RND Magazine':  { name:'15RND Magazine', type:'Magazine', pts:5,  unlockLevel:0 },
      '20RND Magazine':  { name:'20RND Magazine', type:'Magazine', pts:20, unlockLevel:12 },
      '22RND Magazine':  { name:'22RND Magazine', type:'Magazine', pts:30, unlockLevel:19 },

      // Ergonomics
      'None–Ergonomics':  { name:'None',              type:'Ergonomics', pts:0, unlockLevel:0 },
      'Improved Mag Catch':{name:'Improved Mag Catch',type:'Ergonomics', pts:5, unlockLevel:4 },

      // Ammunition
      'FMJ':          { name:'FMJ',          type:'Ammunition', pts:5,  unlockLevel:0 },
      'Tungsten Core':{ name:'Tungsten Core',type:'Ammunition', pts:5,  unlockLevel:8 },
      'Frangible':    { name:'Frangible',    type:'Ammunition', pts:20, unlockLevel:16 },
      'Hollow Point': { name:'Hollow Point', type:'Ammunition', pts:20, unlockLevel:23 },
    }
  };
  target['P18'] = {
    attachments: {
      // Scopes
      'Iron Sights':     { name:'Iron Sights',    type:'Scope', pts:5,  unlockLevel:0 },
      'R-MR 1.00x':      { name:'R-MR 1.00x',     type:'Scope', pts:10, unlockLevel:0 },
      'Mini Flex 1.00x': { name:'Mini Flex 1.00x',type:'Scope', pts:10, unlockLevel:0 },
      'CQ RDS 1.25x':    { name:'CQ RDS 1.25x',   type:'Scope', pts:10, unlockLevel:3 },
      'ROX 1.50x':       { name:'ROX 1.50x',      type:'Scope', pts:10, unlockLevel:7 },
      'RO-S 1.25x':      { name:'RO-S 1.25x',     type:'Scope', pts:10, unlockLevel:11 },
      'A-P2 1.75x':      { name:'A-P2 1.75x',     type:'Scope', pts:10, unlockLevel:19 },

      // Muzzles
      'None–Muzzle':       { name:'None',              type:'Muzzle', pts:0,  unlockLevel:0 },
      'Single-Port Brake': { name:'Single-Port Brake', type:'Muzzle', pts:10, unlockLevel:0 },
      'Flash Hider':       { name:'Flash Hider',       type:'Muzzle', pts:10, unlockLevel:1 },
      'Standard Suppressor':{name:'Standard Suppressor',type:'Muzzle',pts:20, unlockLevel:8 },
      'CQB Suppressor':    { name:'CQB Suppressor',    type:'Muzzle', pts:30, unlockLevel:14 },

      // Barrels
      '3.9" Factory': { name:'3.9" Factory', type:'Barrel', pts:10, unlockLevel:0 },
      '3.9" Pencil':  { name:'3.9" Pencil',  type:'Barrel', pts:20, unlockLevel:5 },

      // Underbarrels (lights / lasers)
      'None–Underbarrel':        { name:'None',                  type:'Underbarrel', pts:0,  unlockLevel:0 },
      '5 MW Red':                { name:'5 MW Red',              type:'Underbarrel', pts:10, unlockLevel:0 },
      '5 MW Green':              { name:'5 MW Green',            type:'Underbarrel', pts:10, unlockLevel:2 },
      'Laser Light Combo Red':   { name:'Laser Light Combo Red', type:'Underbarrel', pts:20, unlockLevel:6 },
      'Laser Light Combo Green': { name:'Laser Light Combo Green',type:'Underbarrel',pts:20, unlockLevel:10 },
      '50 MW Green':             { name:'50 MW Green',           type:'Underbarrel', pts:20, unlockLevel:13 },
      'Flashlight':              { name:'Flashlight',            type:'Underbarrel', pts:10, unlockLevel:18 },

      // Magazines
      '17RND Magazine': { name:'17RND Magazine', type:'Magazine', pts:5,  unlockLevel:0 },
      '21RND Magazine': { name:'21RND Magazine', type:'Magazine', pts:15, unlockLevel:9 },

      // Ergonomics
      'None–Ergonomics':  { name:'None',              type:'Ergonomics', pts:0, unlockLevel:0 },
      'Improved Mag Catch':{name:'Improved Mag Catch',type:'Ergonomics', pts:5, unlockLevel:0 },

      // Ammunition
      'FMJ':          { name:'FMJ',          type:'Ammunition', pts:5,  unlockLevel:0 },
      'Tungsten Core':{ name:'Tungsten Core',type:'Ammunition', pts:5,  unlockLevel:0 },
      'Frangible':    { name:'Frangible',    type:'Ammunition', pts:20, unlockLevel:4 },
      'Hollow Point': { name:'Hollow Point', type:'Ammunition', pts:20, unlockLevel:12 },
    }
  };
  target['ES 5.7'] = {
    attachments: {
      // Scopes
      'Iron Sights':     { name:'Iron Sights',    type:'Scope', pts:5,  unlockLevel:0 },
      'Mini Flex 1.00x': { name:'Mini Flex 1.00x',type:'Scope', pts:10, unlockLevel:0 },
      'CQ RDS 1.25x':    { name:'CQ RDS 1.25x',   type:'Scope', pts:10, unlockLevel:3 },
      'ROX 1.50x':       { name:'ROX 1.50x',      type:'Scope', pts:10, unlockLevel:7 },
      'R-MR 1.00x':      { name:'R-MR 1.00x',     type:'Scope', pts:10, unlockLevel:11 },
      'RO-S 1.25x':      { name:'RO-S 1.25x',     type:'Scope', pts:10, unlockLevel:16 },
      'A-P2 1.75x':      { name:'A-P2 1.75x',     type:'Scope', pts:10, unlockLevel:22 },

      // Muzzles
      'None–Muzzle':        { name:'None',              type:'Muzzle', pts:0,  unlockLevel:0 },
      'Single-Port Brake':  { name:'Single-Port Brake', type:'Muzzle', pts:10, unlockLevel:0 },
      'Flash Hider':        { name:'Flash Hider',       type:'Muzzle', pts:10, unlockLevel:1 },
      'Standard Suppressor':{ name:'Standard Suppressor',type:'Muzzle',pts:20, unlockLevel:8 },
      'CQB Suppressor':     { name:'CQB Suppressor',    type:'Muzzle', pts:30, unlockLevel:15 },

      // Barrels
      '122mm Factory': { name:'122mm Factory', type:'Barrel', pts:10, unlockLevel:0 },
      '122mm Pencil':  { name:'122mm Pencil',  type:'Barrel', pts:20, unlockLevel:5 },

      // Underbarrels (lights / lasers)
      'None–Underbarrel':        { name:'None',                  type:'Underbarrel', pts:0,  unlockLevel:0 },
      '5 MW Red':                { name:'5 MW Red',              type:'Underbarrel', pts:10, unlockLevel:0 },
      '5 MW Green':              { name:'5 MW Green',            type:'Underbarrel', pts:10, unlockLevel:2 },
      'Laser Light Combo Red':   { name:'Laser Light Combo Red', type:'Underbarrel', pts:20, unlockLevel:6 },
      'Laser Light Combo Green': { name:'Laser Light Combo Green',type:'Underbarrel',pts:20, unlockLevel:10 },
      '50 MW Green':             { name:'50 MW Green',           type:'Underbarrel', pts:20, unlockLevel:13 },
      'Flashlight':              { name:'Flashlight',            type:'Underbarrel', pts:10, unlockLevel:17 },

      // Magazines
      '20RND Magazine': { name:'20RND Magazine', type:'Magazine', pts:5,  unlockLevel:0 },
      '30RND Magazine': { name:'30RND Magazine', type:'Magazine', pts:40, unlockLevel:9 },

      // Ergonomics
      'None–Ergonomics':      { name:'None',              type:'Ergonomics', pts:0, unlockLevel:0 },
      'Improved Mag Catch':   { name:'Improved Mag Catch',type:'Ergonomics', pts:5, unlockLevel:12 },

      // Ammunition
      'FMJ':          { name:'FMJ',          type:'Ammunition', pts:5,  unlockLevel:0 },
      'Tungsten Core':{ name:'Tungsten Core',type:'Ammunition', pts:5,  unlockLevel:0 },
      'Frangible':    { name:'Frangible',    type:'Ammunition', pts:20, unlockLevel:4 },
      'Hollow Point': { name:'Hollow Point', type:'Ammunition', pts:20, unlockLevel:14 },
    }
  };
  target['M45A1'] = {
    attachments: {
      // Scopes
      'Iron Sights':     { name:'Iron Sights',    type:'Scope', pts:5,  unlockLevel:0 },
      'Mini Flex 1.00x': { name:'Mini Flex 1.00x',type:'Scope', pts:10, unlockLevel:0 },
      'CQ RDS 1.25x':    { name:'CQ RDS 1.25x',   type:'Scope', pts:10, unlockLevel:3 },
      'ROX 1.50x':       { name:'ROX 1.50x',      type:'Scope', pts:10, unlockLevel:7 },
      'R-MR 1.00x':      { name:'R-MR 1.00x',     type:'Scope', pts:10, unlockLevel:11 },
      'RO-S 1.25x':      { name:'RO-S 1.25x',     type:'Scope', pts:10, unlockLevel:15 },
      'A-P2 1.75x':      { name:'A-P2 1.75x',     type:'Scope', pts:10, unlockLevel:19 },

      // Muzzles
      'None–Muzzle':        { name:'None',              type:'Muzzle', pts:0,  unlockLevel:0 },
      'Single-Port Brake':  { name:'Single-Port Brake', type:'Muzzle', pts:10, unlockLevel:0 },
      'Flash Hider':        { name:'Flash Hider',       type:'Muzzle', pts:10, unlockLevel:1 },
      'Standard Suppressor':{ name:'Standard Suppressor',type:'Muzzle',pts:20, unlockLevel:8 },
      'CQB Suppressor':     { name:'CQB Suppressor',    type:'Muzzle', pts:30, unlockLevel:16 },

      // Barrels
      '5\" Factory': { name:'5\" Factory', type:'Barrel', pts:10, unlockLevel:0 },
      '5\" Pencil':  { name:'5\" Pencil',  type:'Barrel', pts:20, unlockLevel:5 },

      // Underbarrels (lights/lasers)
      'None–Underbarrel':        { name:'None',                  type:'Underbarrel', pts:0,  unlockLevel:0 },
      '5 MW Red':                { name:'5 MW Red',              type:'Underbarrel', pts:10, unlockLevel:0 },
      '5 MW Green':              { name:'5 MW Green',            type:'Underbarrel', pts:10, unlockLevel:2 },
      'Laser Light Combo Red':   { name:'Laser Light Combo Red', type:'Underbarrel', pts:20, unlockLevel:6 },
      'Laser Light Combo Green': { name:'Laser Light Combo Green',type:'Underbarrel',pts:20, unlockLevel:10 },
      '50 MW Green':             { name:'50 MW Green',           type:'Underbarrel', pts:20, unlockLevel:14 },
      'Flashlight':              { name:'Flashlight',            type:'Underbarrel', pts:10, unlockLevel:18 },

      // Magazines
      '7RND Magazine':  { name:'7RND Magazine',  type:'Magazine', pts:5,  unlockLevel:0 },
      '11RND Magazine': { name:'11RND Magazine', type:'Magazine', pts:25, unlockLevel:9 },

      // Ergonomics
      'None–Ergonomics':    { name:'None',              type:'Ergonomics', pts:0, unlockLevel:0 },
      'Improved Mag Catch': { name:'Improved Mag Catch',type:'Ergonomics', pts:5, unlockLevel:12 },

      // Ammunition
      'FMJ':          { name:'FMJ',          type:'Ammunition', pts:5,  unlockLevel:0 },
      'Tungsten Core':{ name:'Tungsten Core',type:'Ammunition', pts:5,  unlockLevel:0 },
      'Frangible':    { name:'Frangible',    type:'Ammunition', pts:20, unlockLevel:4 },
      'Hollow Point': { name:'Hollow Point', type:'Ammunition', pts:20, unlockLevel:13 },
    }
  };
  target['M44'] = {
    attachments: {
      // Scopes
      'Iron Sights':     { name:'Iron Sights',    type:'Scope', pts:5,  unlockLevel:0 },
      'OSA-7 1.00x':     { name:'OSA-7 1.00x',    type:'Scope', pts:10, unlockLevel:0 },
      'CCO 2.00x':       { name:'CCO 2.00x',      type:'Scope', pts:10, unlockLevel:1 },
      'Baker 3.00x':     { name:'Baker 3.00x',    type:'Scope', pts:10, unlockLevel:2 },
      'Mini Flex 1.00x': { name:'Mini Flex 1.00x',type:'Scope', pts:10, unlockLevel:3 },
      'SU-231 1.50x':    { name:'SU-231 1.50x',   type:'Scope', pts:10, unlockLevel:4 },
      '3VZR 1.75x':      { name:'3VZR 1.75x',     type:'Scope', pts:10, unlockLevel:6 },
      'CQ RDS 1.25x':    { name:'CQ RDS 1.25x',   type:'Scope', pts:10, unlockLevel:7 },
      'SDO 3.50x':       { name:'SDO 3.50x',      type:'Scope', pts:10, unlockLevel:8 },
      '2PRO 1.25x':      { name:'2PRO 1.25x',     type:'Scope', pts:10, unlockLevel:9 },
      '1P87 1.50x':      { name:'1P87 1.50x',     type:'Scope', pts:10, unlockLevel:11 },
      'BF-2M 2.50x':     { name:'BF-2M 2.50x',    type:'Scope', pts:10, unlockLevel:12 },
      'RO-M 1.75x':      { name:'RO-M 1.75x',     type:'Scope', pts:10, unlockLevel:13 },
      'RO-S 1.25x':      { name:'RO-S 1.25x',     type:'Scope', pts:10, unlockLevel:15 },
      'R4T 2.00x':       { name:'R4T 2.00x',      type:'Scope', pts:10, unlockLevel:16 },
      'ST Prisim 5.00x': { name:'ST Prisim 5.00x',type:'Scope', pts:10, unlockLevel:17 },
      'PVQ-31 4.00x':    { name:'PVQ-31 4.00x',   type:'Scope', pts:10, unlockLevel:18 },
      'A-P2 1.75x':      { name:'A-P2 1.75x',     type:'Scope', pts:10, unlockLevel:20 },
      'LDS 4.50x':       { name:'LDS 4.50x',      type:'Scope', pts:10, unlockLevel:21 },
      'SF-G2 5.00x':     { name:'SF-G2 5.00x',    type:'Scope', pts:10, unlockLevel:22 },
      'R-MR 1.00x':      { name:'R-MR 1.00x',     type:'Scope', pts:10, unlockLevel:23 },
      'ROX 1.50x':       { name:'ROX 1.50x',      type:'Scope', pts:10, unlockLevel:25 },

      // Barrels
      '6.75\" Factory': { name:'6.75\" Factory', type:'Barrel', pts:10, unlockLevel:0 },
      '8.37\" Long':    { name:'8.37\" Long',    type:'Barrel', pts:15, unlockLevel:0 },
      '5.12\" Compact': { name:'5.12\" Compact', type:'Barrel', pts:15, unlockLevel:5 },

      // Magazines
      '6RND Speedloader': { name:'6RND Speedloader', type:'Magazine', pts:5, unlockLevel:0 },

      // Ammunition
      'FMJ':          { name:'FMJ',          type:'Ammunition', pts:5,  unlockLevel:0 },
      'Tungsten Core':{ name:'Tungsten Core',type:'Ammunition', pts:5,  unlockLevel:0 },
      'Frangible':    { name:'Frangible',    type:'Ammunition', pts:20, unlockLevel:10 },
      'Hollow Point': { name:'Hollow Point', type:'Ammunition', pts:20, unlockLevel:19 },
    }
  };


  for (const [name, meta] of Object.entries(weaponMetadata)) {
    if (!meta || typeof meta !== 'object') continue;
    const existing = target[name] && typeof target[name] === 'object' ? target[name] : {};
    target[name] = { ...meta, ...existing };
  }

  // Continue Code Execution Here
  globalScope.weaponDatabase = target;
})(
  typeof window !== 'undefined'
    ? window
    : typeof globalThis !== 'undefined'
    ? globalThis
    : typeof self !== 'undefined'
    ? self
    : this
);
