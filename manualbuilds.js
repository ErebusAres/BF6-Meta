const KORD_BASELINE = ['415MM FACTORY', 'FOLDING VERTICAL', 'FMJ', 'SINGLE-PORT BRAKE', '30RND MAGAZINE', 'CCO 2.00X'];
const KORD_CHANGES = {
  2: ['FLASHLIGHT'],
  3: [
    {
      name: 'ALLOY VERTICAL',
      replaced: ['FOLDING VERTICAL']
    }
  ],
  6: [
    {
      name: 'RIBBED VERTICAL',
      replaced: ['ALLOY VERTICAL']
    }
  ],
  7: [
    {
      name: '415MM PROTOTYPE',
      replaced: ['415MM FACTORY']
    }
  ],
  8: [
    {
      name: '6H64 VERTICAL',
      replaced: ['RIBBED VERTICAL']
    }
  ],
  12: [
    {
      name: 'RED LASER',
      replaced: ['FLASHLIGHT']
    }
  ],
  13: [
    {
      name: '36RND MAGAZINE',
      replaced: ['30RND MAGAZINE']
    }
  ],
  15: [
    {
      name: '3VZR 1.75X',
      replaced: ['CCO 2.00X']
    }
  ],
  16: [
    {
      name: 'CLASSIC VERTICAL',
      replaced: ['6H64 VERTICAL']
    },
    {
      name: 'RO-M 1.75X',
      replaced: ['3VZR 1.75X']
    }
  ],
  20: [
    {
      name: 'COMPENSATED BRAKE',
      replaced: ['SINGLE-PORT BRAKE']
    },
    { remove: 'FLASHLIGHT' }
  ],
  24: [
    {
      name: 'STANDARD SUPPRESSOR',
      replaced: ['COMPENSATED BRAKE']
    }
  ],
  32: [
    {
      name: 'LONG SUPPRESSOR',
      replaced: ['STANDARD SUPPRESSOR']
    }
  ]
};

const USG90_BASELINE = [ 'SU-231 1.50X', 'Flash Hider', '264MM FACTORY', '50RND MAGAZINE', 'FMJ' ];
const USG90_CHANGES = {
  1: [
    { name: 'Single-Port Brake',
      replaced: ['Flash Hider']
    }
  ],
  4: [
    { name: 'OSA-7 1.00X',
      replaced: ['SU-231 1.50X']
    }
  ],
  5: [
    { name: '5 MW RED' }
  ],
  11: [
    { name: 'Double-Port Brake',
      replaced: ['Single-Port Brake']
    }
  ],
  12: [
    { name: '5 MW GREEN',
      replaced: ['5 MW RED']
    }
  ],
  13: [
    { name: 'Improved Mag Catch' }
  ],
  16: [
    { name: 'Compensated Brake',
      replaced: ['Double-Port Brake']
    }
  ],
  17: [
    { name: 'Polymer Case',
      replaced: ['FMJ']
    }
  ],
  18: [
    { name: '50 MW GREEN',
      replaced: ['5 MW GREEN']
    }
  ],
  36: [
    { name: '120 MW BLUE',
      replaced: ['50 MW GREEN']
    }
  ],
  38: [
    { name: 'Lightened Suppressor',
      replaced: ['Compensated Brake']
    }
  ]
};

const PW5A3_BASELINE = ['225MM FACTORY', 'FOLDING VERTICAL', 'FMJ', '30RND MAGAZINE', 'IRON SIGHTS'];
const PW5A3_CHANGES = {
  3: [
    {
      name: 'ALLOY VERTICAL',
      replaced: ['FOLDING VERTICAL']
    }
  ],
  5: [
    {
      name: '30RND FAST MAG',
      replaced: ['30RND MAGAZINE']
    }
  ],
  6: [
    {
      name: 'RIBBED VERTICAL',
      replaced: ['ALLOY VERTICAL']
    }
  ],
  9: ['STANDARD SUPPRESSOR'],
  12: ['245MM CUSTOM', 'IMPROVED MAG CATCH'],
  14: [
    {
      name: '6H64 VERTICAL',
      replaced: ['RIBBED VERTICAL']
    }
  ],
  21: [
    {
      name: 'CLASSIC VERTICAL',
      replaced: ['6H64 VERTICAL']
    }
  ],
  28: [
    {
      name: '6H64 VERTICAL',
      replaced: ['CLASSIC VERTICAL']
    },
    {
      name: '40RND MAGAZINE',
      replaced: ['30RND FAST MAG']
    }
  ]
};
const RPKM_BASELINE = ['590MM FACTORY', 'FOLDING VERTICAL', 'FMJ', 'FLASH HIDER', '40RND MAGAZINE', 'MINI FLEX 1.00X'];
const RPKM_CHANGES = {
  2: [
    {
      name: 'RO-M 1.75X',
      replaced: ['MINI FLEX 1.00X']
    }
  ],
  4: [
    {
      name: 'ALLOY VERTICAL',
      replaced: ['FOLDING VERTICAL']
    }
  ],
  5: ['5 MW RED'],
  6: [
    {
      name: 'RIBBED VERTICAL',
      replaced: ['ALLOY VERTICAL']
    }
  ],
  8: ['FLASHLIGHT'],
  9: [
    {
      name: 'FOLDING STUBBY',
      replaced: ['RIBBED VERTICAL']
    }
  ],
  12: [
    {
      name: '5 MW GREEN',
      replaced: ['5 MW RED']
    }
  ],
  18: [
    {
      name: 'SLIM ANGLED',
      replaced: ['FOLDING STUBBY']
    },
    { remove: 'FLASHLIGHT' }
  ],
  21: [
    {
      name: '600MM TABUK',
      replaced: ['590MM FACTORY']
    }
  ],
  23: [
    {
      name: 'CANTED STUBBY',
      replaced: ['SLIM ANGLED']
    },
    { remove: '5 MW GREEN' }
  ],
  25: [
    {
      name: 'FULL ANGLED',
      replaced: ['CANTED STUBBY']
    },
    {
      name: 'POLYMER CASE',
      replaced: ['FMJ']
    }
  ],
  35: [
    {
      name: 'STIPPLED STUBBY',
      replaced: ['FULL ANGLED']
    },
    {
      name: 'FMJ',
      replaced: ['POLYMER CASE']
    }
  ],
  38: [
    {
      name: '590MM FACTORY',
      replaced: ['600MM TABUK']
    },
    {
      name: 'ADJUSTABLE ANGLED',
      replaced: ['STIPPLED STUBBY']
    },
    {
      name: 'SYNTHETIC TIP',
      replaced: ['FMJ']
    },
    {
      name: 'LIGHTENED SUPPRESSOR',
      replaced: ['FLASH HIDER']
    }
  ]
};

const NVO228E_BASELINE = ['Flash Hider', '409mm Factory', 'Iron Sights', '30RND Magazine', 'FMJ'];
const NVO228E_CHANGES = {
  2: [
    { name: "Folding Vertical" },  // Underbarrel (Level 2 unlock) Ã¢â‚¬â€œ adds recoil control
    { name: "Mini Flex 1.00x", replaced: "Iron Sights" }  // Optic (Level 2 reflex sight) Ã¢â‚¬â€œ clearer picture
  ],
  3: [
    { name: "30RND Fast Mag", replaced: "30RND Magazine" } // Magazine (Level 3 unlock) Ã¢â‚¬â€œ faster reloads:contentReference[oaicite:35]{index=35}
  ],
  4: [
    { name: "Single-Port Brake", replaced: "Flash Hider" } // Muzzle (Level 4) Ã¢â‚¬â€œ +2 recoil control:contentReference[oaicite:36]{index=36}
  ],
  6: [
    { name: "5 MW Green" }          // Right Accessory (Level 6) Ã¢â‚¬â€œ improves hip-fire accuracy:contentReference[oaicite:37]{index=37}
  ],
  9: [
    { name: "Alloy Vertical", replaced: "Folding Vertical" } // Underbarrel (Level 9) Ã¢â‚¬â€œ same control, no mobility penalty:contentReference[oaicite:38]{index=38}
  ],
  10: [
    { name: "458mm Custom", replaced: "409mm Factory" } // Barrel (Level 10) Ã¢â‚¬â€œ +167m/s velocity for range:contentReference[oaicite:39]{index=39}
  ],
  11: [
    { name: "Double-Port Brake", replaced: "Single-Port Brake" } // Muzzle (Level 11) Ã¢â‚¬â€œ further recoil reduction:contentReference[oaicite:40]{index=40}
  ],
  16: [
    { name: "6H64 Vertical", replaced: "Alloy Vertical" } // Underbarrel (Level 16) Ã¢â‚¬â€œ major recoil control upgrade:contentReference[oaicite:41]{index=41}
  ],
  17: [
    { name: "Baker 3.00x", replaced: "Mini Flex 1.00x" } // Optic (Level 17) Ã¢â‚¬â€œ 3Ãƒâ€” scope for mid-long range precision
  ],
  22: [
    { name: "50 MW Green", replaced: "5 MW Green" } // Right Accessory (Level 22) Ã¢â‚¬â€œ max hip-fire boost (+22):contentReference[oaicite:42]{index=42}
  ],
  32: [
    { name: "120 MW Blue", replaced: "50 MW Green" } // Right Accessory (Level 32) Ã¢â‚¬â€œ +22 hip-fire *and* +4 mobility:contentReference[oaicite:43]{index=43}
  ],
  38: [
    { name: "Compensated Brake", replaced: "Double-Port Brake" } // Muzzle (Level 38) Ã¢â‚¬â€œ top-tier recoil control:contentReference[oaicite:44]{index=44}
  ]
};

const M87A1_BASELINE = ['20" FACTORY', 'BUCKSHOT', '7 SHELL TUBE', 'IRON SIGHTS'];
const M87A1_CHANGES = {
  4: ['5 MW RED'],
  5: ['RIBBED STUBBY'],
  10: [
    {
      name: 'SLIM ANGLED',
      replaced: ['RIBBED STUBBY']
    }
  ],
  13: ['FLASHLIGHT'],
  15: [
    {
      name: '50 MW BLUE',
      replaced: ['5 MW RED']
    }
  ],
  18: [
    {
      name: 'FOLDING STUBBY',
      replaced: ['SLIM ANGLED']
    },
    'CQB SUPPRESSOR',
    { remove: 'FLASHLIGHT' }
  ],
  19: [
    {
      name: 'ADJUSTABLE ANGLED',
      replaced: ['FOLDING STUBBY']
    }
  ],
  22: [
    'FLASHLIGHT',
    {
      name: '5 MW GREEN',
      replaced: ['50 MW BLUE']
    }
  ],
  26: [
    {
      name: 'FLECHETTE',
      replaced: ['BUCKSHOT']
    },
    { remove: '5 MW GREEN' },
    { remove: 'FLASHLIGHT' }
  ]
};
const GGH_22_BASELINE = ['114MM FACTORY', '5 MW RED', 'FMJ', '15RND MAGAZINE', 'IRON SIGHTS'];
const GGH_22_CHANGES = {
  2: [
    {
      name: 'ROX 1.50X',
      replaced: ['IRON SIGHTS']
    }
  ],
  4: ['IMPROVED MAG CATCH'],
  5: [
    {
      name: '5 MW GREEN',
      replaced: ['5 MW RED']
    }
  ],
  7: ['SINGLE-PORT BRAKE'],
  9: [
    {
      name: '114MM PENCIL',
      replaced: ['114MM FACTORY']
    },
    { remove: 'IMPROVED MAG CATCH' }
  ],
  12: [
    {
      name: '114MM FACTORY',
      replaced: ['114MM PENCIL']
    },
    'IMPROVED MAG CATCH',
    {
      name: '20RND MAGAZINE',
      replaced: ['15RND MAGAZINE']
    },
    { remove: '5 MW GREEN' }
  ],
  15: [
    {
      name: '114MM PENCIL',
      replaced: ['114MM FACTORY']
    },
    {
      name: 'STANDARD SUPPRESSOR',
      replaced: ['SINGLE-PORT BRAKE']
    },
    {
      name: '15RND MAGAZINE',
      replaced: ['20RND MAGAZINE']
    },
    { remove: 'IMPROVED MAG CATCH' }
  ],
  18: [
    {
      name: 'A-P2 1.75X',
      replaced: ['ROX 1.50X']
    }
  ]
};
const L110_BASELINE = ['349MM SB', 'CLASSIC GRIP POD', 'FMJ', '5 MW GREEN', '100RND BELT POUCH', 'R4T 2.00X'];
const L110_CHANGES = {
  2: ['SINGLE-PORT BRAKE'],
  3: [
    {
      name: '465MM LB',
      replaced: ['349MM SB']
    }
  ],
  5: [
    {
      name: 'RO-M 1.75X',
      replaced: ['R4T 2.00X']
    }
  ],
  7: [
    {
      name: 'LINEAR COMP',
      replaced: ['SINGLE-PORT BRAKE']
    }
  ],
  8: ['FLASHLIGHT'],
  9: [
    {
      name: 'FOLDING STUBBY',
      replaced: ['CLASSIC GRIP POD']
    }
  ],
  15: [
    {
      name: 'HOLLOW POINT',
      replaced: ['FMJ']
    }
  ],
  16: [
    {
      name: 'SLIM ANGLED',
      replaced: ['FOLDING STUBBY']
    }
  ],
  17: [
    {
      name: 'FMJ',
      replaced: ['HOLLOW POINT']
    },
    {
      name: 'COMPENSATED BRAKE',
      replaced: ['LINEAR COMP']
    }
  ],
  18: [
    {
      name: '50 MW GREEN',
      replaced: ['5 MW GREEN']
    },
    { remove: 'FLASHLIGHT' }
  ],
  21: [
    {
      name: 'CANTED STUBBY',
      replaced: ['SLIM ANGLED']
    }
  ],
  23: [
    {
      name: 'STANDARD SUPPRESSOR',
      replaced: ['COMPENSATED BRAKE']
    }
  ],
  24: [
    {
      name: 'FULL ANGLED',
      replaced: ['CANTED STUBBY']
    }
  ],
  28: [
    {
      name: 'LONG SUPPRESSOR',
      replaced: ['STANDARD SUPPRESSOR']
    }
  ],
  35: [
    {
      name: 'STIPPLED STUBBY',
      replaced: ['FULL ANGLED']
    },
    {
      name: '5 MW GREEN',
      replaced: ['50 MW GREEN']
    }
  ],
  37: [
    {
      name: '349MM FLUTED',
      replaced: ['465MM LB']
    },
    { remove: '50 MW GREEN' }
  ],
  39: [
    {
      name: 'FULL ANGLED',
      replaced: ['STIPPLED STUBBY']
    },
    {
      name: 'LIGHTENED SUPPRESSOR',
      replaced: ['LONG SUPPRESSOR']
    }
  ]
};
const m2010ESR_BASELINE = ['FMJ', '5RND MAGAZINE', 'SU-230 LPVO'];
const M2010ESR_CHANGES = {
  2: ['24" FLUTED', 'FULL ANGLED', 'RANGE FINDER', '5 MW RED', { name: 'S-VPS 6.00X', replaced: ['SU-230 LPVO'] }],
  3: [
    {
      name: 'MATCH GRADE',
      replaced: ['FMJ']
    }
  ],
  7: [
    {
      name: '5 MW GREEN',
      replaced: ['5 MW RED']
    }
  ],
  10: [
    {
      name: 'SSDS 6.00X',
      replaced: ['S-VPS 6.00X']
    }
  ],
  13: ['DLC BOLT', { remove: '5 MW GREEN' }],
  15: [
    {
      name: '5RND FAST MAG',
      replaced: ['5RND MAGAZINE']
    }
  ],
  16: [
    {
      name: '26" CARBON',
      replaced: ['24" FLUTED']
    }
  ],
  36: ['ANTI-GLARE COATING', { name: '5RND MAGAZINE', replaced: ['5RND FAST MAG'] }]
};
const miniscout_baseline = ['16" FACTORY', 'FMJ', '10RND MAGAZINE', 'DVO LPVO'];
const miniscout_changes = {
  2: ['FULL ANGLED'],
  3: ['5 MW RED'],
  4: [
    {
      name: '18" EXTENDED',
      replaced: ['16" FACTORY']
    }
  ],
  6: [{ name: 'FLASHLIGHT', slot: 8 }],
  8: [
    {
      name: '10RND FAST MAG',
      replaced: ['10RND MAGAZINE']
    }
  ],
  12: [
    {
      name: '5 MW GREEN',
      replaced: ['5 MW RED']
    }
  ],
  19: ['STANDARD SUPPRESSOR'],
  24: ['RANGE FINDER', { remove: '5 MW GREEN' }],
  40: ['ANTI-GLARE COATING', '5 MW GREEN', { remove: 'STANDARD SUPPRESSOR' }]
};
const umg40_baseline = ['200MM FACTORY', 'FOLDING VERTICAL', 'FMJ', '30RND MAGAZINE', 'R4T 2.00X'];
const umg40_changes = {
  3: ['5 MW RED'],
  7: [
    {
      name: 'ALLOY VERTICAL',
      replaced: ['FOLDING VERTICAL']
    },
    {
      name: 'A-P2 1.75X',
      replaced: ['R4T 2.00X']
    }
  ],
  8: ['LINEAR COMP'],
  11: [
    {
      name: 'RIBBED VERTICAL',
      replaced: ['ALLOY VERTICAL']
    }
  ],
  12: [
    {
      name: '5 MW GREEN',
      replaced: ['5 MW RED']
    }
  ],
  14: [
    {
      name: 'FOLDING STUBBY',
      replaced: ['RIBBED VERTICAL']
    },
    'RO-M 1.75X'
  ],
  17: [
    {
      name: 'SLIM ANGLED',
      replaced: ['FOLDING STUBBY']
    }
  ],
  18: [
    {
      name: 'HOLLOW POINT',
      replaced: ['FMJ']
    }
  ],
  19: [
    {
      name: 'COMPENSATED BRAKE',
      replaced: ['LINEAR COMP']
    }
  ],
  22: [
    {
      name: 'FMJ',
      replaced: ['HOLLOW POINT']
    },
    { name: 'FLASHLIGHT', slot: 8 }
  ],
  23: ['50 MW GREEN'],
  24: [
    {
      name: 'STANDARD SUPPRESSOR',
      replaced: ['COMPENSATED BRAKE']
    }
  ],
  26: [
    {
      name: '305MM CUSTOM',
      replaced: ['200MM FACTORY']
    },
    { remove: 'FLASHLIGHT' }
  ],
  28: [
    {
      name: 'LONG SUPPRESSOR',
      replaced: ['STANDARD SUPPRESSOR']
    }
  ],
  29: [
    {
      name: 'CANTED STUBBY',
      replaced: ['SLIM ANGLED']
    },
    {
      name: '5 MW GREEN',
      replaced: ['50 MW GREEN']
    }
  ],
  36: [
    {
      name: 'STIPPLED STUBBY',
      replaced: ['CANTED STUBBY']
    },
    { remove: '5 MW GREEN' }
  ],
  37: [
    {
      name: 'LIGHTENED SUPPRESSOR',
      replaced: ['LONG SUPPRESSOR']
    }
  ],
  39: [
    {
      name: 'SLIM ANGLED',
      replaced: ['STIPPLED STUBBY']
    },
    {
      name: 'SYNTHETIC TIP',
      replaced: ['FMJ']
    },
    {
      name: 'STANDARD SUPPRESSOR',
      replaced: ['LIGHTENED SUPPRESSOR']
    }
  ]
};
const qbz_192_baseline = ['10.5" FACTORY', 'FOLDING VERTICAL', 'FMJ', '36RND MAGAZINE', 'CCO 2.00X', 'RAIL COVER'];
const qbz_192_changes = {
  2: ['LINEAR COMP'],
  3: [
    {
      name: 'ALLOY VERTICAL',
      replaced: ['FOLDING VERTICAL']
    },
    {
      name: 'RO-M 1.75X',
      replaced: ['CCO 2.00X']
    }
  ],
  5: ['5 MW RED'],
  6: [
    {
      name: 'RIBBED VERTICAL',
      replaced: ['ALLOY VERTICAL']
    }
  ],
  8: [{ name: 'FLASHLIGHT', slot: 5 }],
  9: [
    {
      name: 'FOLDING STUBBY',
      replaced: ['RIBBED VERTICAL']
    }
  ],
  12: [
    {
      name: '5 MW GREEN',
      replaced: ['5 MW RED']
    }
  ],
  14: [
    {
      name: 'POLYMER CASE',
      replaced: ['FMJ']
    }
  ],
  16: [
    {
      name: '14.5" COMMON',
      replaced: ['10.5" FACTORY']
    },
    { remove: '5 MW GREEN' }
  ],
  18: [
    {
      name: 'SLIM ANGLED',
      replaced: ['FOLDING STUBBY']
    }
  ],
  23: [
    {
      name: 'CANTED STUBBY',
      replaced: ['SLIM ANGLED']
    },
    {
      name: 'FMJ',
      replaced: ['POLYMER CASE']
    }
  ],
  25: [
    {
      name: 'FULL ANGLED',
      replaced: ['CANTED STUBBY']
    },
    {
      name: 'POLYMER CASE',
      replaced: ['FMJ']
    }
  ],
  36: [
    {
      name: 'STIPPLED STUBBY',
      replaced: ['FULL ANGLED']
    },
    { remove: '5 MW GREEN' }
  ],
  39: [
    {
      name: 'LOW-PROFILE STUBBY',
      replaced: ['STIPPLED STUBBY']
    },
    {
      name: 'FMJ',
      replaced: ['POLYMER CASE']
    },
    { remove: 'RAIL COVER' }
  ]
};

/* RANK KEY:
S Meta (On Fire) = s
Meta = m
Contender = a
Very Good = b
Viable = c
*/

// Centralized rank/type-rating definitions so we can keep the ordering in one place.
// Edit the entries below (or add new ones) to update rank/TR for each weapon.
const MANUAL_RANKING_GROUPS = [
  {
    type: 'Assault Rifle',
    entries: [
      { dbname: 'NVO-228E', rank: 's' },
      { dbname: 'KORD 6P67', rank: 's' },
      { dbname: 'M433', rank: 'a' },
      { dbname: 'B36A4', rank: 'a' },
      { dbname: 'L85A3', rank: 'b' },
      { dbname: 'SOR-556 MK2', rank: 'b' },
      { dbname: 'AK4D', rank: 'c' },
      { dbname: 'TR-7', rank: 'd' }
    ]
  },
  {
    type: 'Carbine',
    entries: [
      { dbname: 'M4A1', rank: 's' },
      { dbname: 'SG 553R', rank: 'a' },
      { dbname: 'GRT-BC', rank: 'b' },
      { dbname: 'QBZ-192', rank: 'b' },
      { dbname: 'M277', rank: 'c' },
      { dbname: 'SOR-300SC', rank: 'c' },
      { dbname: 'AK-205', rank: 'c' },
      { dbname: 'M417 A2', rank: 'd' }
    ]
  },
  {
    type: 'LMG',
    entries: [
      { dbname: 'DRS-IAR', rank: 's' },
      { dbname: 'KTS100 MK8', rank: 'a' },
      { dbname: 'M250', rank: 'a' },
      { dbname: 'L110', rank: 'a' },
      { dbname: 'RPKM', rank: 'b' },
      { dbname: 'M240L', rank: 'c' },
      { dbname: 'M60', rank: 'c' },
      { dbname: 'M123K', rank: 'c' }
    ]
  },
  {
    type: 'SMG',
    entries: [
      { dbname: 'USG-90', rank: 's' },
      { dbname: 'PW5A3', rank: 's' },
      { dbname: 'SGX', rank: 'a' },
      { dbname: 'SCW-10', rank: 'a' },
      { dbname: 'UMG-40', rank: 'b' },
      { dbname: 'PW7A2', rank: 'b' },
      { dbname: 'SL9', rank: 'b' },
      { dbname: 'KV9', rank: 'c' }
    ]
  },
  {
    type: 'Sniper Rifle',
    entries: [
      { dbname: 'M2010 ESR', rank: 's' },
      { dbname: 'SV-98', rank: 'b' },
      { dbname: 'PSR', rank: 'c' },
      { dbname: 'Mini Scout', rank: 'c' }
    ]
  },
  {
    type: 'DMR',
    entries: [
      { dbname: 'M39 EMR', rank: 'c' },
      { dbname: 'SVDM', rank: 'c' },
      { dbname: 'SVK-8.6', rank: 'c' },
      { dbname: 'LMR27', rank: 'd' }
    ]
  },
  {
    type: 'Shotgun',
    entries: [
      { dbname: 'DB-12', rank: 'd' },
      { dbname: 'M87A1', rank: 'd' },
      { dbname: 'M1014', rank: 'd' },
      { dbname: '18.5KS-K', rank: 'd' }
    ]
  },
  {
    type: 'Secondary',
    entries: [
      { dbname: 'M357 TRAIT', rank: 'b' },
      { dbname: 'M44', rank: 'c' },
      { dbname: 'P18', rank: 'd' },
      { dbname: 'ES 5.7', rank: 'd' },
      { dbname: 'GGH-22', rank: 'd' },
      { dbname: 'M45A1', rank: 'd' }
    ]
  }
];

function normalizeManualRankKey(value) {
  if (!value) return '';
  return value.toString().toLowerCase().replace(/[^a-z0-9]/g, '');
}

function buildManualRankLookup(groups) {
  const lookup = new Map();
  if (!Array.isArray(groups)) return lookup;
  groups.forEach((group) => {
    const entries = Array.isArray(group && group.entries) ? group.entries : [];
    entries.forEach((entry, index) => {
      if (!entry) return;
      // Force TR to follow top-to-bottom placement so reordering updates the type ranking automatically.
      const manualRecord = {
        rank: typeof entry.rank === 'string' ? entry.rank : '',
        tr: String(index + 1)
      };
      const key = normalizeManualRankKey(entry.dbname);
      if (key) {
        lookup.set(key, manualRecord);
      }
    });
  });
  return lookup;
}

function applyManualRankings(configs, lookup) {
  if (!Array.isArray(configs) || !(lookup instanceof Map)) return;
  configs.forEach((weapon) => {
    if (!weapon) return;
    const key = normalizeManualRankKey(weapon.dbname);
    if (!key) return;
    const manual = lookup.get(key);
    if (!manual) return;
    weapon.rank = manual.rank;
    weapon.tr = manual.tr;
  });
}

const manualRankLookup = buildManualRankLookup(MANUAL_RANKING_GROUPS);

const weaponConfigs = [
  {
    id: 'kord-6p67',
    dbname: 'KORD 6P67',
    lastUpdated: '12/06/2025',
    versatile: [
      { Notes: "Despite it's blistering fire rate, the <c>Kord</c> is a highly dependable lethal <b>AR</b> that shines <i>even without attachments</i>." },
      { Updated: '12/06/2025' },
      'Long Suppressor',
      '415MM Prototype',
      '50 MW Blue',
      'Slim Angled',
      '30RND Magazine',
      'FMJ',
      'RO-M 1.75X'
    ],
    close: [
      { Notes: "Despite it's blistering fire rate, the <c>Kord</c> is a highly dependable lethal <b>AR</b> that shines <i>even without attachments</i>." },
      { Updated: '12/01/2025' },
      'Standard Suppressor',
      '415MM Fluted',
      '5 MW Green',
      'Slim Angled',
      '30RND FAST MAG',
      'FMJ',
      'Mini Flex 1.00X'
    ],
    custom: [
      { custom: 'Community' },
      'Double-Port Brake',
      '415MM Prototype',
      'Stippled Stubby',
      '36RND Magazine',
      'Frangible',
      'CQ RDS 1.25X'
    ],
    baseline: KORD_BASELINE,
    changes: KORD_CHANGES
  },
  {
    id: 'b36a4',
    dbname: 'b36a4',
    lastUpdated: '12/06/2025',
    versatile: [
      { Notes: "A decent, versatile AR that performs well over range with careful burst firing." },
      { Updated: '12/06/2025' },
      'Long Suppressor',
      '510MM DMR',
      '50 MW Blue',
      'Slim Angled',
      '30RND Magazine',
      'FMJ',
      'RO-M 1.75X'
    ],
    close: [
      { Notes: "A decent, versatile AR that performs well over range with careful burst firing." },
      { Updated: '12/01/2025' },
      'Long Suppressor',
      '480MM Fluted',
      '5 MW Green',
      'Slim Angled',
      '30RND Fast Mag',
      'FMJ',
      'Iron Sights'
    ]
  },
  {
    id: 'sor-556 mk2',
    dbname: 'sor-556 mk2',
    lastUpdated: '12/06/2025',
    versatile: [
      { Notes: "A hard-hitting powerhouse that boasts increadible accuracy, but is extremely sensitive to player movement. Be sure not to move when firing." },
      { Updated: '12/06/2025' },
      'Long Suppressor',
      '18\" Custom',
      '50 MW Blue',
      'Slim Angled',
      '30RND Magazine',
      'FMJ',
      'RO-M 1.75X'
    ],
    close: [
      { Notes: "A hard-hitting powerhouse that boasts increadible accuracy, but is extremely sensitive to player movement. Be sure not to move when firing." },
      { Updated: '12/01/2025' },
      'Long Suppressor',
      '14.5" Factory',
      '5 MW Green',
      'Slim Angled',
      '30RND Fast Mag',
      'FMJ',
      'Mini Flex 1.00X'
    ]
  },
  {
    id: 'nvo-228e',
    dbname: 'nvo-228e',
    lastUpdated: '12/06/2025',
    versatile: [
      { Notes: 
        "A high-damage AR with tons of potential, but extremely prone to spread. <b>Fire Carefully</b>."
      },
      { Updated: '12/06/2025' },
      'Lightened Suppressor',
      '458MM Custom',
      '5 MW Green',
      'Slim Angled',
      '30RND Magazine',
      'FMJ',
      'RO-M 1.75X'
    ],
    close: [
      { Notes: 
        "A high-damage AR with tons of potential, but extremely prone to spread. <b>Fire Carefully</b>."
      },
      { Updated: '12/01/2025' },
      'Long Suppressor',
      '409mm Fluted',
      '5 MW Green',
      'Slim Angled',
      '30RND Magazine',
      'FMJ',
      'Mini Flex 1.00x'      
    ],
    baseline: NVO228E_BASELINE,
    changes: NVO228E_CHANGES
  },
  {
    id: 'm433',
    dbname: 'M433',
    lastUpdated: '12/06/2025',
    versatile: [
      { Notes: "An inconsistent, difficult-to-control AR that leads the AR category in TTK but struggles with any engagement beyond midrange." },
      { Updated: '12/06/2025' },
      'Long Suppressor',
      '18.9\" Prototype',
      '50 MW Blue',
      'Slim Angled',
      '30RND Magazine',
      'FMJ',
      'Iron Sights'
    ],
    close: [
      { Notes: "An inconsistent, difficult-to-control AR that leads the AR category in TTK but struggles with any engagement beyond midrange." },
      { Updated: '12/01/2025' },
      'Long Suppressor',
      '16.5" Fluted',
      '5 MW Green',
      'Slim Angled',
      '30RND Fast Mag',
      'FMJ',
      'Iron Sights'
    ]
  },
  {
    id: 'm4a1',
    dbname: 'm4a1',
    lastUpdated: '12/06/2025',
    versatile: [
      { Notes:
        "With curvaceous but controllable recoil, the <c>M4A1</c> rewards competent recoil management with a very fast TTK."
      },
      { Updated: '12/06/2025' },
      'Long Suppressor',
      '14.5" Carbine',
      '5 MW Green',
      'Slim Angled',
      '30RND Fast Mag',
      'FMJ',
      'RO-M 1.75X'
    ],
    close: [
      { Notes:
        "With curvaceous but controllable recoil, the <c>M4A1</c> rewards competent recoil management with a very fast TTK."
      },
      { Updated: '12/01/2025' },
      'Long Suppressor',
      '12.5\" Fluted',
      '5 MW Green',
      'Slim Angled',
      '30RND Fast Mag',
      'FMJ',
      'Iron Sights'
    ]
  },
  {
    id: 'grt-bc',
    dbname: 'GRT-BC',
    lastUpdated: '12/06/2025',
    versatile: [
      { Notes: "A satisfying-feeling bullpup with reliable accuracy and easily controllable recoil." },
      { Updated: '12/06/2025' },
      'Lightened Suppressor',
      '14.5" ALT',
      '5 MW Green',
      'Ribbed Stubby',
      '30RND Magazine',
      'FMJ',
      'RO-M 1.75X'
    ],
    close: [
      { Notes: "A satisfying-feeling bullpup with reliable accuracy and easily controllable recoil." },
      { Updated: '12/01/2025' },
      'Standard Suppressor',
      '10" Factory',
      '50 MW Blue',
      'Ribbed Stubby',
      '30RND Magazine',
      'FMJ',
      'Mini Flex 1.00X'
    ]
  },
  {
    id: 'sg 553r',
    dbname: 'sg 553r',
    lastUpdated: '12/06/2025',
    versatile: [
      { Notes: 
        "A decently-fast fire rate mixed with moderate recoil and spread make the <c>SG</c> difficult to wield at distance, but undeniable in close quarters."
      },
      { Updated: '12/06/2025' },
      'Standard Suppressor',
      '303MM LB',
      '5 MW Green',
      'Slim Angled',
      '30RND Fast Mag',
      'FMJ',
      'RO-M 1.75X'
    ],
    close: [
      { Notes: 
        "A decently-fast fire rate mixed with moderate recoil and spread make the <c>SG</c> difficult to wield at distance, but undeniable in close quarters."
      },
      { Updated: '12/01/2025' },
      'Long Suppressor',
      '240MM Fluted',
      '5 MW Green',
      'Slim Angled',
      '30RND Fast Mag',
      'FMJ',
      'Iron Sights'
    ]
  },
  {
    id: 'qbz-192',
    dbname: 'QBZ-192',
    lastUpdated: '12/06/2025',
    versatile: [
      { Notes: 
        "The <c>QBZ</c> offers a fast fire rate and great accuracy, giving it a high ceiling with good recoil management."
      },
      { Updated: '12/06/2025' },
      'Standard Suppressor',
      '14.5\" Common',
      '50 MW Blue',
      'Slim Angled',
      '30RND Magazine',
      'FMJ',
      'RO-M 1.75X'
    ],
    close: [
      { Notes: 
        "The <c>QBZ</c> offers a fast fire rate and great accuracy, giving it a high ceiling with good recoil management."
      },
      { Updated: '12/01/2025' },
      'Standard Suppressor',
      '10.5\" Factory',
      '50 MW Blue',
      'Slim Angled',
      '30RND Fast Mag',
      'FMJ',
      'Mini Flex 1.00X'
    ],
    baseline: qbz_192_baseline,
    changes: qbz_192_changes
  },
  {
    id: 'm277',
    dbname: 'M277',
    lastUpdated: '12/06/2025',
    versatile: [
      { Notes: "While entirely unimpressive in full-auto, the <c>M277</c>'s true potential lies in its DMR-like performance in semi-auto." },
      { Updated: '12/06/2025' },
      'Long Suppressor',
      '16" Custom',
      '5 MW Green',
      'Slim Angled',
      '20RND Fast Mag',
      'FMJ',
      'Improved Mag Catch',
      'RO-M 1.75X'
    ],
    close: [
      { Notes: "While entirely unimpressive in full-auto, the <c>M277</c>'s true potential lies in its DMR-like performance in semi-auto." },
      { Updated: '12/01/2025' },
      'Long Suppressor',
      '13\" Fluted',
      '5 MW Green',
      'Slim Angled',
      '20RND Fast Mag',
      'FMJ',
      'Iron Sights'
    ]
  },
  {
    id: 'sor-300sc',
    dbname: 'SOR-300SC',
    lastUpdated: '12/06/2025',
    versatile: [
      { Notes: "The <c>SOR</c> is extremely accurate, but has some of the most punishing damage drop-offs at range. Expect great accuracy, but long TTKs." },
      { Updated: '12/06/2025' },
      'Long Suppressor',
      '10.5\" Custom',
      '5 MW Green',
      'Slim Angled',
      '30RND Fast Mag',
      'FMJ',
      'RO-M 1.75X'
    ],
    close: [
      { Notes: "The <c>SOR</c> is extremely accurate, but has some of the most punishing damage drop-offs at range. Expect great accuracy, but long TTKs." },
      { Updated: '12/01/2025' },
      'Standard Suppressor',
      '9" Fluted',
      '5 MW Green',
      'Slim Angled',
      '30RND Fast Mag',
      'FMJ',
      'Mini Flex 1.00X'
    ]
  },
  {
    id: 'ak-205',
    dbname: 'AK-205',
    lastUpdated: '12/06/2025',
    versatile: [
      { Notes: "One of the most accurate weapons counterbalanced by having some of the least damage and most punishing range dropoffs. Guaranteed to hit its shots, but not guaranteed to win the gunfights." },
      { Updated: '12/06/2025' },
      'Standard Suppressor',
      '314MM Prototype',
      '50 MW Blue',
      'Slim Angled',
      '30RND Fast Mag',
      'FMJ',
      'RO-M 1.75X'
    ],
    close: [
      { Notes: "One of the most accurate weapons counterbalanced by having some of the least damage and most punishing range dropoffs. Guaranteed to hit its shots, but not guaranteed to win the gunfights." },
      { Updated: '12/01/2025' },
      'Standard Suppressor',
      '314MM Factory',
      '50 MW Blue',
      'Slim Angled',
      '30RND Fast Mag',
      'FMJ',
      'Mini Flex 1.00X'
    ]
  },
  {
    id: 'm417 a2',
    dbname: 'M417 A2',
    lastUpdated: '12/06/2025',
    versatile: [
      { Notes: "A hard-hitting but spiky and magazine-limited weapon that has potential that is difficult to unearth. Handle with care." },
      { Updated: '12/06/2025' },
      'Long Suppressor',
      '16.5" Rifle',
      '5 MW Green',
      'Slim Angled',
      '20RND Fast Mag',
      'FMJ',
      'RO-M 1.75X'
    ],
    close: [
      { Notes: "A hard-hitting but spiky and magazine-limited weapon that has potential that is difficult to unearth. Handle with care." },
      { Updated: '12/01/2025' },
      'Long Suppressor',
      '12" Assaulter',
      '5 MW Green',
      'Slim Angled',
      '25RND Magazine',
      'FMJ',
      'Iron Sights'
    ]
  },
  {
    id: 'l85a3',
    dbname: 'L85A3',
    lastUpdated: '12/06/2025',
    versatile: [
      { Notes: "A middle of the pack AR that does not excel in any particular area, but tends to hit its shots." },
      { Updated: '12/06/2025' },
      'Long Suppressor',
      '646MM LSW',
      '50 MW Blue',
      'Slim Angled',
      '30RND Magazine',
      'FMJ',
      'RO-M 1.75X'
    ],
    close: [
      { Notes: "A middle of the pack AR that does not excel in any particular area, but tends to hit its shots." },
      { Updated: '12/01/2025' },
      'Long Suppressor',
      '518MM Fluted',
      '5 MW Green',
      'Slim Angled',
      '30RND Fast Mag',
      'FMJ',
      'Iron Sights'
    ]
  },
  {
    id: 'ak4d',
    dbname: 'AK4D',
    lastUpdated: '12/01/2025',
    versatile: [
      { Notes: "A low-capacity, high-damage AR that performs moderately well. Requires constant reload maintenance." },
      { Updated: '11/18/2025' },
      'Double-Port Brake',
      '600MM Fluted',
      'Folding Stubby',
      '30RND Magazine',
      'FMJ',
      'RO-S 1.25X'
    ],
    close: [
      { Notes: "A low-capacity, high-damage AR that performs moderately well. Requires constant reload maintenance." },
      { Updated: '12/01/2025' },
      'Lightened Suppressor',
      '409MM US',
      '5 MW Green',
      'Slim Angled',
      '20RND Fast Mag',
      'FMJ',
      'Iron Sights'
    ]
  },
  {
    id: 'tr-7',
    dbname: 'TR-7',
    lastUpdated: '12/01/2025',
    versatile: [
      { Notes: "A close-range slaughterhouse with incredible TTK, but enormous recoil and plenty of spread limits this AR's midrange capability." },
      { Updated: '11/18/2025' },
      'Double-Port Brake',
      '432MM Fluted',
      'Ribbed Stubby',
      '25RND Fast Mag',
      'FMJ',
      'RO-S 1.25X'
    ],
    close: [
      { Notes: "A close-range slaughterhouse with incredible TTK, but enormous recoil and plenty of spread limits this AR's midrange capability." },
      { Updated: '12/01/2025' },
      'Long Suppressor',
      '432MM Fluted',
      '5 MW Green',
      'Slim Angled',
      '20RND Magazine',
      'FMJ',
      'Mini Flex 1.00X'
    ]
  },
  {
    id: 'm39 emr',
    dbname: 'm39 emr',
    lastUpdated: '12/06/2025',
    versatile: [
      { Notes: "Any operator that can control the spiky, jumpy vertical recoil will be rewarded for their accuracy. <i>high potential</i>." 
      },
      { Updated: '12/06/2025' },
      'Lightened Suppressor',
      '22" Factory',
      'Slim Angled',
      '20RND Fast Mag',
      'Match Grade',
      'PVQ-31.4.00X'
    ],
    close: [
      { Notes: "Any operator that can control the spiky, jumpy vertical recoil will be rewarded for their accuracy. <i>high potential</i>." 
      },
      { Updated: '12/01/2025' },
      'Long Suppressor',
      '18\" EBR',
      '50 MW Blue',
      'Slim Angled',
      '20RND Magazine',
      'FMJ',
      'Mini Flex 1.00X'
    ]
  },
  {
    id: 'svdm',
    dbname: 'svdm',
    lastUpdated: '12/06/2025',
    versatile: [
    { Notes: 
      "Capable of two-tapping and dropping enemies before they can react, the <c>SVDM</c> is highly rewarding in the right hands."
    },
      { Updated: '12/06/2025' },
      'Lightened Suppressor',
      '620MM Classic',
      'Slim Angled',
      '10RND Fast Mag',
      'Match Grade',
      'PVQ-31.4.00X'
    ],
    close: [
    { Notes: 
      "Capable of two-tapping and dropping enemies before they can react, the <c>SVDM</c> is highly rewarding in the right hands."
    },
      { Updated: '12/01/2025' },
      'Long Suppressor',
      '565MM Fluted',
      '5 MW Green',
      'Slim Angled',
      '10RND Fast Mag',
      'FMJ',
      'Mini Flex 1.00X'
    ]
  },
  {
    id: 'svk-8.6',
    dbname: 'svk-8.6',
    lastUpdated: '12/06/2025',
    versatile: [
      { Notes: "Capable of one-shot headshot kills with Hollow Point rounds, the <c>SVK</c> stays true to its role as a light, lean marksman's tool." },
      { Updated: '12/06/2025' },
      'Lightened Suppressor',
      '560MM Factory',
      'Slim Angled',
      '10RND Fast Mag',
      'Match Grade',
      'PVQ-31.4.00X'
    ],
    close: [
      { Notes: "Capable of one-shot headshot kills with Hollow Point rounds, the <c>SVK</c> stays true to its role as a light, lean marksman's tool." },
      { Updated: '12/01/2025' },
      'Long Suppressor',
      '457MM Urban',
      '5 MW Green',
      'Slim Angled',
      '10RND Fast Mag',
      'FMJ',
      'Mini Flex 1.00X'
    ]
  },
  {
    id: 'lmr27',
    dbname: 'LMR27',
    lastUpdated: '12/06/2025',
    versatile: [
      { Notes: "With a fast fire rate, low damage, small magazine, and a punishing reload, the <c>LMR27</c> is high risk for low reward. Difficult." },
      { Updated: '12/06/2025' },
      'Lightened Suppressor',
      '24\" Extended',
      'Factory Angled',
      '15RND Magazine',
      'FMJ',
      'RO-M 1.75X'
    ],
    close: [
      { Notes: "With a fast fire rate, low damage, small magazine, and a punishing reload, the <c>LMR27</c> is high risk for low reward. Difficult." },
      { Updated: '12/01/2025' },
      'Long Suppressor',
      '21.5\" Fluted',
      'Factory Angled',
      '10RND Fast Mag',
      'FMJ',
      'Improved Mag Catch',
      'Mini Flex 1.00X'
    ]
  },
// LMGs
  { id: 'drs-iar',
    dbname: 'drs-iar',
    lastUpdated: '12/06/2025',
    long: [
      { Notes: "A modular and extremely lethal, versatile battle piece. Shreds over range and single-fires anything over long distance." },
      { Updated: '11/22/2025' },
      'Compensated Brake',
      '20" SDM-R',
      'Low-Profile Stubby',
      '30RND Fast Mag',
      'FMJ',
      'CCO 2.00X'
    ],
    versatile: [
      { Notes: "A modular and extremely lethal, versatile battle piece. Shreds over range and single-fires anything over long distance." },
      { Updated: '12/06/2025' },
      'Long Suppressor',
      '20" SDM-R',
      '50 MW Blue',
      'Slim Angled',
      '30RND Magazine',
      'FMJ',
      'RO-M 1.75X'
    ],
    close: [
      { Notes: "A modular and extremely lethal, versatile battle piece. Shreds over range and single-fires anything over long distance." },
      { Updated: '12/01/2025' },
      'Long Suppressor',
      '16.5\" Fluted',
      '5 MW Green',
      'Slim Angled',
      '30RND Fast Mag',
      'FMJ',
      'Iron Sights'
    ]
  },
  { id: 'kts100 mk8',
    dbname: 'kts100 mk8',
    lastUpdated: '12/01/2025',
    long: [
      { Notes: "The ultimate reliable & dependable weapon that maintains accuracy over range with outstanding velocity." },
      { Updated: '11/22/2025' },
      'Compensated Brake',
      '508MM MK8',
      'Low-Profile Stubby',
      '45RND Fast Mag',
      'FMJ',
      'CCO 2.00X'
    ],
    versatile: [
      { Notes: "The ultimate reliable & dependable weapon that maintains accuracy over range with outstanding velocity." },
      { Updated: '11/22/2025' },
      'CQB Suppressor',
      '508MM MK8',
      'Ribbed Stubby',
      '45RND Fast Mag',
      'Polymer Case',
      'RO-S 1.25X'
    ],
    close: [
      { Notes: "The ultimate reliable & dependable weapon that maintains accuracy over range with outstanding velocity." },
      { Updated: '12/01/2025' },
      'Standard Suppressor',
      '330MM MK3',
      '50 MW Blue',
      'Slim Angled',
      '45RND Magazine',
      'FMJ',
      'Mini Flex 1.00X'
    ]
  },
  { id: 'm250',
    dbname: 'm250',
    lastUpdated: '12/06/2025',
    long: [
      { Notes: "With no damage dropoff at all, the <c>M250</c> carries the same TTK at any distance - it's just up to the operator to hit their shots to achieve the breakneck TTK." },
      { Updated: '11/22/2025' },
      'Compensated Brake',
      '556MM Prototype',
      'Low-Profile Stubby',
      '50RND Belt Pouch',
      'FMJ',
      'CCO 2.00X'
    ],
    versatile: [
      { Notes: "With no damage dropoff at all, the <c>M250</c> carries the same TTK at any distance - it's just up to the operator to hit their shots to achieve the breakneck TTK." },
      { Updated: '12/06/2025' },
      'Long Suppressor',
      '556MM Prototype',
      '50 MW Blue',
      'Slim Angled',
      '50RND Belt Pouch',
      'FMJ',
      'RO-M 1.75X'
    ],
    close: [
      { Notes: "With no damage dropoff at all, the <c>M250</c> carries the same TTK at any distance - it's just up to the operator to hit their shots to achieve the breakneck TTK." },
      { Updated: '12/01/2025' },
      'Long Suppressor',
      '556MM Prototype',
      '50 MW Blue',
      'Slim Angled',
      '50RND Belt Pouch',
      'FMJ',
      'Mini Flex 1.00X'
    ]
  },
  { id: 'rpkm', dbname: 'RPKM',
    lastUpdated: '12/06/2025',
    long: [
      { Notes: "An extremely accurate LMG that packs marksman-level accuracy with decent magazine capacity." },
      { Updated: '11/22/2025' },
      'Compensated Brake',
      '590MM Factory',
      'Low-Profile Stubby',
      '30RND Fast Mag',
      'FMJ',
      'CCO 2.00X'
    ],
    versatile: [
      { Notes: "An extremely accurate LMG that packs marksman-level accuracy with decent magazine capacity." },
      { Updated: '12/06/2025' },
      'Standard Suppressor',
      '590MM Factory',
      '50 MW Blue',
      'Slim Angled',
      '30RND Fast Mag',
      'FMJ',
      'RO-M 1.75X'
    ],
    close: [
      { Notes: "An extremely accurate LMG that packs marksman-level accuracy with decent magazine capacity." },
      { Updated: '12/01/2025' },
      'Standard Suppressor',
      '521MM Boar-F',
      '5 MW Blue',
      'Slim Angled',
      '30RND Fast Mag',
      'FMJ',
      'Mini Flex 1.00X'
    ],
    recommended: [
      'A-P2 1.75X',
      'LONG SUPPRESSOR',
      '590MM FACTORY',
      'FOLDING STUBBY',
      '40RND MAGAZINE',
      'SYNTHETIC TIP'
    ],
    baseline: RPKM_BASELINE,
    changes: RPKM_CHANGES
  },
  { id: 'l110',
    dbname: 'L110',
    lastUpdated: '12/06/2025',
    long: [
      { Notes: "A classic 100-round suppressive monster with moderate accuracy." },
      { Updated: '11/22/2025' },
      'Compensated Brake',
      '465MM LB',
      'Low-Profile Stubby',
      '100RND Belt Pouch',
      'FMJ',
      'CCO 2.00X'
    ],
    versatile: [
      { Notes: "A classic 100-round suppressive monster with moderate accuracy." },
      { Updated: '12/06/2025' },
      'Long Suppressor',
      '465MM LB',
      '50 MW Blue',
      'Slim Angled',
      '100RND Belt Pouch',
      'FMJ',
      'RO-M 1.75X'
    ],
    close: [
      { Notes: "A classic 100-round suppressive monster with moderate accuracy." },
      { Updated: '12/01/2025' },
      'Long Suppressor',
      '349MM Fluted',
      '5 MW Green',
      'Slim Angled',
      '100RND Belt Pouch',
      'FMJ',
      'Mini Flex 1.00X'
    ],
    baseline: L110_BASELINE,
    changes: L110_CHANGES
  },
  { id: 'm240l',
    dbname: 'M240L',
    lastUpdated: '12/01/2025',
    long: [
      { Notes: "Hard-hitting but shaky, the <c>M240L</c> requires handling with care. Does not excel in any category." },
      { Updated: '11/22/2025' },
      'Compensated Brake',
      '24\" Bravo',
      'Low-Profile Stubby',
      '75RND Belt Box',
      'FMJ',
      'CCO 2.00X'
    ],
    versatile: [
      { Notes: "Hard-hitting but shaky, the <c>M240L</c> requires handling with care. Does not excel in any category." },
      { Updated: '11/22/2025' },
      'Compensated Brake',
      '20\" OH',
      'Ribbed Stubby',
      '75RND Belt Box',
      'FMJ',
      'RO-S 1.25X'
    ],
    close: [
      { Notes: "Hard-hitting but shaky, the <c>M240L</c> requires handling with care. Does not excel in any category." },
      { Updated: '12/01/2025' },
      'Long Suppressor',
      '20\" OH',
      '5 MW Green',
      'Slim Angled',
      '50RND Loose Belt',
      'FMJ',
      'Mini Flex 1.00X'
    ]
  },
  { id: 'm60',
    dbname: 'M60',
    lastUpdated: '12/06/2025',
    long: [
      { Notes: "Heavy, bulky, and powerful, the <c>M/60</c> can shine when fired carefully with an operator who can control the recoil." },
      { Updated: '11/22/2025' },
      'Compensated Brake',
      '22\" E3 Long',
      'Low-Profile Stubby',
      '50RND Loose Belt',
      'FMJ',
      'CCO 2.00X'
    ],
    versatile: [
      { Notes: "Heavy, bulky, and powerful, the <c>M/60</c> can shine when fired carefully with an operator who can control the recoil." },
      { Updated: '12/06/2025' },
      'Long Suppressor',
      '22\" E3 Long',
      '50 MW Blue',
      'Slim Angled',
      '100RND Belt Pouch',
      'FMJ',
      'RO-M 1.75X'
    ],
    close: [
      { Notes: "Heavy, bulky, and powerful, the <c>M/60</c> can shine when fired carefully with an operator who can control the recoil." },
      { Updated: '12/01/2025' },
      'Long Suppressor',
      '17\" Fluted',
      '5 MW Green',
      'Slim Angled',
      '50RND Loose Belt',
      'FMJ',
      'Mini Flex 1.00X'
    ]
  },
  { id: 'm123k',
    dbname: 'M123K',
    lastUpdated: '12/06/2025',
    long: [
      { Notes: "A close-range powerhouse that shreds anything up to midrange, but struggles at long-range engagements." },
      { Updated: '11/22/2025' },
      'Compensated Brake',
      '612MM VMW',
      'Low-Profile Stubby',
      '100RND Belt Pouch',
      'FMJ',
      'CCO 2.00X'
    ],
    versatile: [
      { Notes: "A close-range powerhouse that shreds anything up to midrange, but struggles at long-range engagements." },
      { Updated: '12/06/2025' },
      'Compensated Brake',
      '370MM Compact',
      'Low-Profile Stubby',
      '100RND Belt Pouch',
      'FMJ',
      'RO-M 1.75X'
    ],
    close: [
      { Notes: "A close-range powerhouse that shreds anything up to midrange, but struggles at long-range engagements." },
      { Updated: '12/01/2025' },
      'Long Suppressor',
      '370MM Compact',
      '5 MW Green',
      'Ribbed Stubby',
      '100RND Belt Pouch',
      'FMJ',
      'Mini Flex 1.00X'
    ]
  },
  // Secondaries
  {
    id: 'm357 trait',
    dbname: 'm357 trait',
    lastUpdated: '12/06/2025',
    versatile: [
      {
        Notes: "An eight-round revolver with a decent fire rate. Kills in a minimum of two shots in Multiplayer, regardless of head or body shot."
      },
      { Updated: '12/06/2025' },
      '5" Factory',
      'Laser/Light Combo Green',
      '8RND Moon Clip',
      'FMJ',
      'Mini Flex 1.00X'
    ]
  },
  {
    id: 'p18',
    dbname: 'p18',
    lastUpdated: '12/06/2025',
    versatile: [
      { Notes: 
        "The stock pistol offers moderate damage and a fast fire rate, but complicating muzzle rise may obscure targets."
      },
      { Updated: '12/06/2025' },
      'Standard Suppressor',
      '3.9" Factory',
      'Flashlight',
      '17RND Magazine',
      'FMJ',
      'RO-S 1.25X'
    ]
  },
  {
    id: 'm44',
    dbname: 'm44',
    lastUpdated: '12/06/2025',
    versatile: [
      { Notes: 
        "The six-shooting backup pocket rocket offers excellent hipfire and a devastating one-two punch, but harshly punishes any missed shots."
      },
      { Updated: '12/06/2025' },
      '5.12\" Compact',
      '6RND Speedloader',
      'Hollow Point',
      'Mini Flex 1.00X'
    ]
  },
  {
    id: 'm45a1',
    dbname: 'M45A1',
    lastUpdated: '11/18/2025',
    versatile: [
      { Notes: "Guaranteed to grant style points, the <c>M45A1</c> packs high damage but demands high accuracy to compensate for its low magazine capacity." },
      { Updated: '11/18/2025' },
      'Single-Port Brake',
      '5\" Factory',
      '11RND Magazine',
      'FMJ',
      'Improved Mag Catch',
      'Iron Sights'
    ]
  },
  {
    id: 'es 5.7',
    dbname: 'ES 5.7',
    lastUpdated: '11/18/2025',
    versatile: [
      { Notes: "A low-damage, fast-firing implement that really falls behind TTK-wise." },
      { Updated: '11/18/2025' },
      'Standard Suppressor',
      '122MM Factory',
      '5 MW Green',
      '20RND Magazine',
      'FMJ',
      'Improved Mag Catch',
      'Iron Sights'
    ]
  },
  {
    id: 'ggh-22',
    dbname: 'GGH-22',
    lastUpdated: '12/06/2025',
    versatile: [
      { Notes: "An enthusiastic choice that excels in no category, but offers the familiar, satisfying feeling and performance." },
      { Updated: '12/06/2025' },
      'Standard Suppressor',
      '114MM Factory',
      'Flashlight',
      '15RND Magazine',
      'FMJ',
      'Improved Mag Catch',
      'Iron Sights'
    ],
    baseline: GGH_22_BASELINE,
    changes: GGH_22_CHANGES
  },
  {
    id: 'db-12',
    dbname: 'db-12',
    lastUpdated: '12/01/2025',
    versatile: [
      {
        Notes: "An extremely strong semi-auto shotgun that is able to deal significant damage with two rapid shots before pumping."
      },
      { Updated: '11/18/2025' },
      'CQB Suppressor',
      '18.9" Factory',
      '50 MW Green',
      '7 Shell Dual Tubes',
      'Buckshot',
      'OSA-7 1.00X'
    ],
    close: [
      {
        Notes: "An extremely strong semi-auto shotgun that is able to deal significant damage with two rapid shots before pumping."
      },
      { Updated: '12/01/2025' },
      'CQB Suppressor',
      '18.9" Factory',
      '50 MW Blue',
      '7 Shell Dual Tubes',
      'Buckshot',
      'Mini Flex 1.00X'      
    ]
  },
  {
    id: 'm1014',
    dbname: 'm1014',
    lastUpdated: '12/01/2025',
    versatile: [
      {
        Notes: "A shotgun enthusiast's choice, the <c>M1014</c> delivers devastating semi-auto performance."
      },
      { Updated: '11/27/2025' },
      'CQB Suppressor',
      '18.5" Factory',
      '50 MW Blue',
      'Adjustable Angled',
      '6 Shell Tube',
      'Buckshot',
      'Iron Sights'
    ],
    close: [
      {
        Notes: "A shotgun enthusiast's choice, the <c>M1014</c> delivers devastating semi-auto performance."
      },
      { Updated: '12/01/2025' },
      'CQB Suppressor',
      '18.5" Factory',
      '50 MW Blue',
      'Slim Handstop',
      '6 Shell Tube',
      'Buckshot',
      'Mini Flex 1.00X'
    ]
  },
  {
    id: '18.5ks-k',
    dbname: '18.5ks-k',
    lastUpdated: '12/01/2025',
    versatile: [
      { Updated: '11/18/2025' },
      'CQB Suppressor',
      '430MM Cut',
      '50 MW Blue',
      'Folding Stubby',
      '8RND Magazine',
      'Buckshot',
      'Iron Sights'
    ],
    close: [
      { Updated: '12/01/2025' },
      'Flash Hider',
      '430MM Factory',
      'Slim Handstop',
      '8RND Fast Mag',
      'Slugs',
      'Mini Flex 1.00X'
    ]
  },
  {
    id: 'm87a1',
    dbname: 'M87A1',
    lastUpdated: '12/01/2025',
    versatile: [
      { Notes: "A highly consistent pump-action room clearer, guaranteed to drop enemies over impressive range in ADS." },
      { Updated: '11/18/2025' },
      'CQB Suppressor',
      '20" Factory',
      '50 MW Green',
      'Adjustable Angled',
      '5 Shell Tube',
      'Buckshot',
      'Mini Flex 1.00X'
    ],
    close: [
      { Notes: "A highly consistent pump-action room clearer, guaranteed to drop enemies over impressive range in ADS." },
      { Updated: '12/01/2025' },
      'CQB Suppressor',
      '20" Factory',
      '50 MW Blue',
      'Slim Handstop',
      '5 Shell Tube',
      'Buckshot',
      'Mini Flex 1.00X'
    ]
  },
  {
    id: 'sgx',
    dbname: 'sgx',
    lastUpdated: '12/06/2025',
    versatile: [
      { Notes: "An extremely easy-to-use powerhouse that excels in <b>CQC</b> but packs enough accuracy to perform well at midrange." },
      { Updated: '12/06/2025' },
      'Long Suppressor',
      '8\" Extended',
      '50 MW Blue',
      'Slim Angled',
      '30RND Magazine',
      'FMJ',
      'Mini Flex 1.00X'
    ],
    close: [
      { Notes: "An extremely easy-to-use powerhouse that excels in <b>CQC</b> but packs enough accuracy to perform well at midrange." },
      { Updated: '12/01/2025' },
      'Long Suppressor',
      '6\" Fluted',
      '50 MW Blue',
      'Slim Angled',
      '30RND Magazine',
      'FMJ',
      'Iron Sights'
    ]
  },
  {
    id: 'usg-90',
    dbname: 'USG-90',
    baselineUpdated: '12/06/2025',
    changesUpdated: '12/06/2025',
    versatile: [
    { Notes: 
      "With a 50-round base magazine and excellent accuracy, the <c>USG</c> is an incredibly capable and versatile slayer." 
    },
      { Updated: '12/06/2025' },
      'Lightened Suppressor',
      '407MM CIV-S',
      '120 MW Blue',
      '50RND Magazine',
      'Polymer Case',
      'Improved Mag Catch',
      'Mini Flex 1.00X'
    ],
    close: [ 
    { Notes: 
      "With a 50-round base magazine and excellent accuracy, the <c>USG</c> is an incredibly capable and versatile slayer." 
    },
      { Updated: '12/01/2025' },
      'Long Suppressor',
      '264MM Fluted',
      '120 MW Blue',
      '50RND MAGAZINE',
      'FMJ',
      'Improved Mag Catch',
      'Mini Flex 1.00X'
    ],
    baseline: USG90_BASELINE,
    changes: USG90_CHANGES
  },
  {
    id: 'pw5a3',
    dbname: 'PW5A3',
    baseline: PW5A3_BASELINE,
    changes: PW5A3_CHANGES,
    lastUpdated: '12/06/2025',
    versatile: [
      {
        Notes:
        "The familiar-feeling <c>MP5</c> packs excellent accuracy with a midrange TTK, making it extremely dependable even in midrange."
      },
      { Updated: '12/06/2025' },
      'Long Suppressor',
      '245MM Custom',
      '50 MW Blue',
      'Slim Angled',
      '30RND Fast Mag',
      'FMJ',
      'Iron Sights'
    ],
    close: [
      {
        Notes:
        "The familiar-feeling <c>MP5</c> packs excellent accuracy with a midrange TTK, making it extremely dependable even in midrange."
      },
      { Updated: '12/01/2025' },
      'Standard Suppressor',
      '225MM Factory',
      '120 MW Blue',
      'Slim Angled',
      '30RND Fast Mag',
      'FMJ',
      'Iron Sights'      
    ]
  },
  {
    id: 'pw7a2',
    dbname: 'PW7A2',
    lastUpdated: '12/06/2025',
    versatile: [
      { Notes: "The <c>PW7A2</c> makes up for its extremely low damage with an incredible fire rate and competitive TTK. You'll constantly be reloading, but constantly piling bodies." },
      { Updated: '12/06/2025' },
      'Long Suppressor',
      '180MM Prototype',
      '50 MW Blue',
      'Slim Angled',
      '30RND Fast Mag',
      'FMJ',
      'Mini Flex 1.00X'
    ],
    close: [
      { Notes: "The <c>PW7A2</c> makes up for its extremely low damage with an incredible fire rate and competitive TTK. You'll constantly be reloading, but constantly piling bodies." },
      { Updated: '12/01/2025' },
      'Long Suppressor',
      '180MM Prototype',
      '50 MW Blue',
      'Slim Angled',
      '30RND Fast Mag',
      'FMJ',
      'Improved Mag Catch',
      'Iron Sights'
    ]
  },
  {
    id: 'sl9',
    dbname: 'sl9',
    lastUpdated: '12/06/2025',
    versatile: [
      { Notes: 
        "An ultra-accurate <b>SMG</b> that barely spreads at distance over sustained fire, but has the slowest <b>SMG TTK</b>. Configurable to pack 60 rounds, the <c>SL9</c> has great potential per reload."
      },
      { Updated: '12/06/2025' },
      'Lightened Suppressor',
      '11" Heavy',
      '50 MW Blue',
      'Factory Angled',
      '30RND Magazine',
      'FMJ',
      'Mini Flex 1.00X'
    ],
    close: [
      { Notes: 
        "An ultra-accurate <b>SMG</b> that barely spreads at distance over sustained fire, but has the slowest <b>SMG TTK</b>. Configurable to pack 60 rounds, the <c>SL9</c> has great potential per reload."
      },
      { Updated: '12/01/2025' },
      'Standard Suppressor',
      '9" Factory',
      '60RND Magazine',
      'FMJ',
      'Mini Flex 1.00X'
    ]
  },
  {
    id: 'kv9',
    dbname: 'KV9',
    lastUpdated: '12/06/2025',
    versatile: [
      { Notes: "With a Mach-5 fire rate but so little magazine capacity, the <c>KV9</c> can shred exactly one or two opponents before forcing a reload. Requires very thoughtful and tactical use." },
      { Updated: '12/06/2025' },
      'Long Suppressor',
      '6.5\" Extended',
      'Slim Angled',
      '23RND Magazine',
      'FMJ',
      'Mini Flex 1.00X'
    ],
    close: [
      { Notes: "With a Mach-5 fire rate but so little magazine capacity, the <c>KV9</c> can shred exactly one or two opponents before forcing a reload. Requires very thoughtful and tactical use." },
      { Updated: '12/01/2025' },
      'Flash Hider',
      '5.5\" Factory',
      'Slim Angled',
      '27RND Magazine',
      'FMJ',
      'Mini Flex 1.00X'
    ]
  },
  {
    id: 'umg40',
    dbname: 'UMG-40',
    baseline: umg40_baseline,
    changes: umg40_changes,
    lastUpdated: '12/06/2025',
    versatile: [
      {
        Notes:
          'The classic UMP boasts impressive accuracy, but one of the slowest TTKs in the SMG category, which is fine - because sometimes hitting your shots is a lot better than missing due to spread.',
      },
      { Updated: '12/06/2025' },
      'Long Suppressor',
      '305MM Custom-H',
      'Slim Angled',
      '36RND Magazine',
      'FMJ',
      'CQB Sights'
    ],
    close: [
      {
        Notes:
          'The classic UMP boasts impressive accuracy, but one of the slowest TTKs in the SMG category, which is fine - because sometimes hitting your shots is a lot better than missing due to spread.',
      },
      { Updated: '12/01/2025' },
      'Standard Suppressor',
      '200MM Fluted',
      '50 MW Blue',
      'Slim Angled',
      '30RND Fast Mag',
      'FMJ',
      'CQB Sights'
    ]
  },
  {
    id: 'scw-10',
    dbname: 'scw-10',
    lastUpdated: '12/06/2025',
    versatile: [
      {
        Notes: "The <c>SCW</c> may pack a tiny magazine, but makes up for it with an excellent TTK and outstanding accuracy."
      },
      { Updated: '12/06/2025' },
      'Lightened Suppressor',
      '200MM Custom-H',
      'Slim Angled',
      '20RND Magazine',
      'FMJ',
      'Mini Flex 1.00X'
    ],
    close: [
      {
        Notes: "The <c>SCW</c> may pack a tiny magazine, but makes up for it with an excellent TTK and outstanding accuracy."
      },
      { Updated: '12/01/2025' },
      'Flash Hider',
      '6.8" Factory',
      'Slim Angled',
      '25RND Magazine',
      'FMJ',
      'Mini Flex 1.00X'
    ]
  },
  /* Test Build 
  {
  id: 'scw-10-2',
  dbname: 'scw-10',
  close: [
    'SU-230 LPVO'
  ]
  }*/
];

applyManualRankings(weaponConfigs, manualRankLookup);

if (typeof window !== 'undefined' && window.autoBuilds && typeof window.autoBuilds.applyToWeaponConfigs === 'function') {
  const runAutoBuilds = () => {
    window.autoBuilds.applyToWeaponConfigs(weaponConfigs);
    applyManualRankings(weaponConfigs, manualRankLookup);
  };
  runAutoBuilds();
  window.addEventListener('autobuilds:updated', runAutoBuilds);
}

