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
      { dbname: 'SG 553R', rank: 'a' },
      { dbname: 'M4A1', rank: 'b' },
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
      { dbname: 'UMG-40', rank: 'b' },
      { dbname: 'PW7A2', rank: 'b' },
      { dbname: 'SL9', rank: 'b' },
      { dbname: 'KV9', rank: 'c' },
      { dbname: 'SCW-10', rank: 'd' }
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
    versatile: [
      { Notes: "Despite it's blistering fire rate, the <c>Kord</c> is a highly dependable lethal <b>AR</b> that shines <i>even without attachments</i>." },
      'Standard Suppressor',
      '415MM Factory',
      'Ribbed Stubby',
      '40RND Magazine',
      'FMJ',
      'RO-S 1.25X'
    ],
    close: [
      { Notes: "Despite it's blistering fire rate, the <c>Kord</c> is a highly dependable lethal <b>AR</b> that shines <i>even without attachments</i>." },
      'Linear Comp',
      '415MM Factory',
      '50 MW Blue',
      'Ribbed Stubby',
      '30RND FAST MAG',
      'Polymer Case',
      'OSA-7 1.00X'
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
    versatile: [
      { Notes: "A decent, versatile AR that performs well over range with careful burst firing." },
      'Standard Suppressor',
      '480MM Factory',
      'Ribbed Stubby',
      '40RND Magazine',
      'FMJ',
      'RO-S 1.25X'
    ],
    close: [
      { Notes: "A decent, versatile AR that performs well over range with careful burst firing." },
      'Linear Comp',
      '391MM CQB',
      '50 MW Blue',
      'Ribbed Stubby',
      '30RND Magazine',
      'Polymer Case',
      'OSA-7 1.00X'
    ]
  },
  {
    id: 'sor-556 mk2',
    dbname: 'sor-556 mk2',
    versatile: [
      { Notes: "A hard-hitting powerhouse that boasts increadible accuracy, but is extremely sensitive to player movement. Be sure not to move when firing." },
      'Standard Suppressor',
      '16" US',
      'Ribbed Stubby',
      '40RND Magazine',
      'FMJ',
      'RO-S 1.25X'
    ],
    close: [
      { Notes: "A hard-hitting powerhouse that boasts increadible accuracy, but is extremely sensitive to player movement. Be sure not to move when firing." },
      'Linear Comp',
      '14.5" Factory',
      '50 MW Blue',
      'Ribbed Stubby',
      '30RND Magazine',
      'Polymer Case',
      'OSA-7 1.00X'
    ]
  },
  {
    id: 'nvo-228e',
    dbname: 'nvo-228e',
    versatile: [
      { Notes: 
        "A high-damage AR with tons of potential, but extremely prone to spread. <b>Fire Carefully</b>."
      },
      'Standard Suppressor',
      '409MM Factory',
      'Ribbed Stubby',
      '40RND Magazine',
      'FMJ',
      'RO-S 1.25X'
    ],
    close: [
      { Notes: 
        "A high-damage AR with tons of potential, but extremely prone to spread. <b>Fire Carefully</b>."
      },
      'Linear Comp',
      '409MM Cut',
      '50 MW Blue',
      'Ribbed Stubby',
      '30RND Magazine',
      'Polymer Case',
      'OSA-7 1.00X'      
    ]
  },
  {
    id: 'm433',
    dbname: 'M433',
    versatile: [
      { Notes: "An inconsistent, difficult-to-control AR that leads the AR category in TTK but struggles with any engagement beyond midrange." },
      'Standard Suppressor',
      '16.5" Rifle',
      'Stippled Stubby',
      '36RND Magazine',
      'FMJ',
      'RO-S 1.25X'
    ],
    close: [
      { Notes: "An inconsistent, difficult-to-control AR that leads the AR category in TTK but struggles with any engagement beyond midrange." },
      'Linear Comp',
      '14.5" Standard',
      '50 MW Blue',
      'Ribbed Stubby',
      '30RND Magazine',
      'Polymer Case',
      'OSA-7 1.00X'
    ]
  },
  {
    id: 'm4a1',
    dbname: 'm4a1',
    versatile: [
      { Notes:
        "With curvaceous but controllable recoil, the <c>M4A1</c> rewards competent recoil management with a very fast TTK."
      },
      'Compensated Brake',
      '12.5" Mid',
      '50 MW Blue',
      'Ribbed Stubby',
      '30RND Magazine',
      'FMJ',
      'RO-S 1.25X'
    ],
    close: [
      { Notes:
        "With curvaceous but controllable recoil, the <c>M4A1</c> rewards competent recoil management with a very fast TTK."
      },
      'Linear Comp',
      '11.5" Commando',
      '50 MW Blue',
      'Ribbed Stubby',
      '30RND Magazine',
      'Polymer Case',
      'OSA-7 1.00X'
    ],
    long: [
      { Notes:
        "With curvaceous but controllable recoil, the <c>M4A1</c> rewards competent recoil management with a very fast TTK."
      },
      'Standard Suppressor',
      '14.5" Carbine',
      'Classic Vertical',
      '36RND Magazine',
      'FMJ',
      'Baker 3.00X'
    ]
  },
  {
    id: 'sg 553r',
    dbname: 'sg 553r',
    versatile: [
      { Notes: 
        "A decently-fast fire rate mixed with moderate recoil and spread make the <c>SG</c> difficult to wield at distance, but undeniable in close quarters."
      },
      'Standard Suppressor',
      '240MM SB',
      'Ribbed Stubby',
      '40RND Magazine',
      'FMJ',
      'RO-S 1.25X'
    ],
    close: [
      { Notes: 
        "A decently-fast fire rate mixed with moderate recoil and spread make the <c>SG</c> difficult to wield at distance, but undeniable in close quarters."
      },
      'Linear Comp',
      '240MM SB',
      '50 MW Blue',
      'Ribbed Stubby',
      '30RND Fast Mag',
      'Polymer Case',
      'OSA-7 1.00X'
    ]
  },
  {
    id: 'qbz-192',
    dbname: 'QBZ-192',
    long: [
      { Notes: 
        "The <c>QBZ</c> offers a fast fire rate and great accuracy, giving it a high ceiling with good recoil management."
      },
      'Standard Suppressor',
      '14.5" Common',
      '6H64 Vertical',
      '40RND Magazine',
      'FMJ',
      'Baker 3.00x'
    ],
    baseline: qbz_192_baseline,
    changes: qbz_192_changes
  },
  {
    id: 'm39 emr',
    dbname: 'm39 emr',
    versatile: [
      { Notes: "Any operator that can control the spiky, jumpy vertical recoil will be rewarded for their accuracy. <i>high potential</i>." 
      },
      'Lightened Suppressor',
      '22" Factory',
      'Stippled Stubby',
      '15RND Magazine',
      'FMJ',
      'R4T 2.00X'
    ]
  },
  {
    id: 'svdm',
    dbname: 'svdm',
    versatile: [
    { Notes: 
      "Capable of two-tapping and dropping enemies before they can react, the <c>SVDM</c> is highly rewarding in the right hands."
    },
    'Double-Port Brake',
    '556MM Para',
    'Folding Stubby',
    '20RND Fast Mag',
    'FMJ',
    'R4T 2.00X'
    ]
  },
// LMGs
  { id: 'drs-iar',
    dbname: 'drs-iar',
    long: [
      { Notes: "A modular and extremely lethal, versatile battle piece. Shreds over range and single-fires anything over long distance." },
      'Compensated Brake',
      '20" SDM-R',
      'Low-Profile Stubby',
      '30RND Fast Mag',
      'FMJ',
      'CCO 2.00X'
    ],
    versatile: [
      { Notes: "A modular and extremely lethal, versatile battle piece. Shreds over range and single-fires anything over long distance." },
      'Compensated Brake',
      '16.5" Fluted',
      'Ribbed Stubby',
      '36RND Magazine',
      'FMJ',
      'RO-S 1.25X'
    ]
  },
  { id: 'kts100 mk8',
    dbname: 'kts100 mk8',
    long: [
      { Notes: "The ultimate reliable & dependable weapon that maintains accuracy over range with outstanding velocity." },
      'Compensated Brake',
      '508MM MK8',
      'Low-Profile Stubby',
      '45RND Fast Mag',
      'FMJ',
      'CCO 2.00X'
    ],
    versatile: [
      { Notes: "The ultimate reliable & dependable weapon that maintains accuracy over range with outstanding velocity." },
      'CQB Suppressor',
      '508MM MK8',
      'Ribbed Stubby',
      '45RND Fast Mag',
      'Polymer Case',
      'RO-S 1.25X'
    ]
  },
  { id: 'm250',
    dbname: 'm250',
    long: [
      { Notes: "With no damage dropoff at all, the <c>M250</c> carries the same TTK at any distance - it's just up to the operator to hit their shots to achieve the breakneck TTK." },
      'Compensated Brake',
      '556MM Prototype',
      'Low-Profile Stubby',
      '50RND Belt Pouch',
      'FMJ',
      'CCO 2.00X'
    ],
    versatile: [
      { Notes: "With no damage dropoff at all, the <c>M250</c> carries the same TTK at any distance - it's just up to the operator to hit their shots to achieve the breakneck TTK." },
      'CQB Suppressor',
      '556MM Prototype',
      '5 MW Red',
      'Ribbed Stubby',
      '50RND Belt Pouch',
      'FMJ',
      'RO-S 1.25X'
    ]
  },
  { id: 'rpkm', dbname: 'RPKM',
    long: [
      { Notes: "An extremely accurate LMG that packs marksman-level accuracy with decent magazine capacity." },
      'Compensated Brake',
      '590MM Factory',
      'Low-Profile Stubby',
      '30RND Fast Mag',
      'FMJ',
      'CCO 2.00X'
    ],
    versatile: [
      { Notes: "An extremely accurate LMG that packs marksman-level accuracy with decent magazine capacity." },
      'CQB Suppressor',
      '600MM Tabuk',
      'Ribbed Stubby',
      '30RND Fast Mag',
      'FMJ',
      'RO-S 1.25X'
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
    long: [
      { Notes: "A classic 100-round suppressive monster with moderate accuracy." },
      'Compensated Brake',
      '465MM LB',
      'Low-Profile Stubby',
      '100RND Belt Pouch',
      'FMJ',
      'CCO 2.00X'
    ],
    versatile: [
      { Notes: "A classic 100-round suppressive monster with moderate accuracy." },
      'Compensated Brake',
      '349MM Fluted',
      'Stippled Stubby',
      '100RND Belt Pouch',
      'FMJ',
      'RO-S 1.25X'
    ],
    baseline: L110_BASELINE,
    changes: L110_CHANGES
  },
  // Secondaries
  {
    id: 'm357 trait',
    dbname: 'm357 trait',
    versatile: [
      {
        Notes: "An eight-round revolver with a decent fire rate. Kills in a minimum of two shots in Multiplayer, regardless of head or body shot."
      },
      '5" Factory',
      'Laser Light Combo Green',
      '8RND Moon Clip',
      'FMJ',
      'OSA-7 1.00X',
    ],
    close: [
      {
        Notes: "An eight-round revolver with a decent fire rate. Kills in a minimum of two shots in Multiplayer, regardless of head or body shot."
      },
      '5" Factory',
      'Laser Light Combo Green',
      '8RND Moon Clip',
      'FMJ',
      'OSA-7 1.00X',
    ]
  },
  {
    id: 'p18',
    dbname: 'p18',
    versatile: [
      { Notes: 
        "The stock pistol offers moderate damage and a fast fire rate, but complicating muzzle rise may obscure targets."
      },
      'Single-Port Brake',
      '3.9" Factory',
      '5 MW Green',
      '17RND Magazine',
      'FMJ',
      'Improved Mag Catch',
      'Iron Sights'
    ]
  },
  {
    id: 'm44',
    dbname: 'm44',
    versatile: [
      { Notes: 
        "The six-shooting backup pocket rocket offers excellent hipfire and a devastating one-two punch, but harshly punishes any missed shots."
      },
      '8.37" Long',
      '6RND Speedloader',
      'Hollow Point',
      'Iron Sights'
    ]
  },
  {
    id: 'ggh-22',
    dbname: 'GGH-22',
    baseline: GGH_22_BASELINE,
    changes: GGH_22_CHANGES
  },
  {
    id: 'db-12',
    dbname: 'db-12',
    versatile: [
      {
        Notes: "An extremely strong semi-auto shotgun that is able to deal significant damage with two rapid shots before pumping."
      },
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
      'CQB Suppressor',
      '18.9" Factory',
      '50 MW Green',
      '7 Shell Dual Tubes',
      'Buckshot',
      'OSA-7 1.00X'      
    ]
  },
  {
    id: '18.5ks-k',
    dbname: '18.5ks-k',
    versatile: [
      'CQB Suppressor',
      '430MM Cut',
      '50 MW Blue',
      'Folding Stubby',
      '8RND Magazine',
      'Buckshot',
      'Iron Sights'
    ]
  },
  {
    id: 'm87a1',
    dbname: 'M87A1',
    versatile: [
      { Notes: "A highly consistent pump-action room clearer, guaranteed to drop enemies over impressive range in ADS." },
      'CQB SUPPRESSOR',
      '20" FACTORY',
      '50 MW GREEN',
      'Adjustable Angled',
      '5 SHELL TUBE',
      'Buckshot',
      'Mini Flex 1.00X'
    ],
    baseline: M87A1_BASELINE,
    changes: M87A1_CHANGES
  },
  {
    id: 'sgx',
    dbname: 'sgx',
    versatile: [
      { Notes: "An extremely easy-to-use powerhouse that excels in <b>CQC</b> but packs enough accuracy to perform well at midrange." },
      'Compensated Brake',
      '6" Fluted',
      'Slim Angled',
      '41RND Magazine',
      'FMJ',
      'OSA-7 1.00X'
    ],
    close: [
      { Notes: "An extremely easy-to-use powerhouse that excels in <b>CQC</b> but packs enough accuracy to perform well at midrange." },
      'Linear Comp',
      '8" Extended',
      '50 MW Blue',
      'Ribbed Stubby',
      '36RND Magazine',
      'FMJ',
      'IRON SIGHTS'
    ]
  },
  {
    id: 'usg-90',
    dbname: 'USG-90',
    versatile: [
    { Notes: 
      "With a 50-round base magazine and excellent accuracy, the <c>USG</c> is an incredibly capable and versatile slayer." 
    },
      'CQB Suppressor',
      '264MM Fluted',
      '50 MW Green',
      '50RND Magazine',
      'Polymer Case',
      'Improved Mag Catch',
      'RO-S 1.25X'
    ],
    close: [ 
    { Notes: 
      "With a 50-round base magazine and excellent accuracy, the <c>USG</c> is an incredibly capable and versatile slayer." 
    },
      'Linear Comp',
      '264MM Factory',
      '50 MW Blue',
      '50RND MAGAZINE',
      'Polymer Case',
      'Improved Mag Catch',
      'OSA-7 1.00X'
    ]
  },
  {
    id: 'pw5a3',
    dbname: 'PW5A3',
    baseline: PW5A3_BASELINE,
    changes: PW5A3_CHANGES,
    versatile: [
      {
        Notes:
        "The familiar-feeling <c>MP5</c> packs excellent accuracy with a midrange TTK, making it extremely dependable even in midrange."
      },
      'Double-Port Brake',
      '245MM Custom',
      '50 MW Blue',
      'Ribbed Stubby',
      '30RND Fast Mag',
      'FMJ',
      'Iron Sights'
    ],
    close: [
      {
        Notes:
        "The familiar-feeling <c>MP5</c> packs excellent accuracy with a midrange TTK, making it extremely dependable even in midrange."
      },
      'Linear Comp',
      '245MM Custom',
      '50 MW Blue',
      'Ribbed Stubby',
      '30RND Fast Mag',
      'FMJ',
      'Improved Mag Catch',
      'Iron Sights'      
    ]
  },
  {
    id: 'sl9',
    dbname: 'sl9',
    versatile: [
      { Notes: 
        "An ultra-accurate <b>SMG</b> that barely spreads at distance over sustained fire, but has the slowest <b>SMG TTK</b>. Configurable to pack 60 rounds, the <c>SL9</c> has great potential per reload."
      },
      '11" Heavy',
      'Factory Angled',
      '60RND Magazine',
      'FMJ',
      'RO-S 1.25X'
    ],
    close: [
      { Notes: 
        "An ultra-accurate <b>SMG</b> that barely spreads at distance over sustained fire, but has the slowest <b>SMG TTK</b>. Configurable to pack 60 rounds, the <c>SL9</c> has great potential per reload."
      },
      'Single-Port Brake',
      '3.9" Factory',
      '50 MW Blue',
      '60RND Magazine',
      'FMJ',
      'Iron Sights'
    ]
  },
  {
    id: 'umg40',
    dbname: 'UMG-40',
    baseline: umg40_baseline,
    changes: umg40_changes,
     versatile: [
    {
      Notes:
        'The classic UMP boasts impressive accuracy, but one of the slowest TTKs in the SMG category, which is fine – because sometimes hitting your shots is a lot better than missing due to spread.',
    },
    'CQB Suppressor',
    '305MM Custom',
    'Ribbed Stubby',
    '36RND Magazine',
    'FMJ',
    'CQB Sights'
  ],

  close: [
    {
      Notes:
        'The classic UMP boasts impressive accuracy, but one of the slowest TTKs in the SMG category, which is fine – because sometimes hitting your shots is a lot better than missing due to spread.',
    },
    'Linear Comp',
    '305MM Custom',
    '50 MW Blue',
    'Ribbed Stubby',
    '36RND Magazine',
    'FMJ',
    'CQB Sights'
  ]
  },
  {
    id: 'm2010esr',
    dbname: 'M2010 ESR',
    sniper: [
      { Notes: "The flagship <b>Sniper Rifle</b> with second-best velocity but best lethality, the <c>M2010 ESR</c> is your first and best choice. <b>Sweet Spot: 75-120m</b>." },
      '26" CARBON',
      'Range Finder',
      'Anti-Glare Coating',
      'Full Angled',
      '5RND MAGAZINE',
      'MATCH GRADE',
      'DLC BOLT',
      'S-VPS 6.00X'
    ],
    recommended: [
      'S-VPS 6.00X',
      '26" CARBON',
      'ANTI-GLARE COATING',
      'RANGE FINDER',
      '5RND MAGAZINE',
      'DLC BOLT',
      'MATCH GRADE'
    ],
    baseline: m2010ESR_BASELINE,
    changes: M2010ESR_CHANGES
  },
  {
    id: 'miniscout',
    dbname: 'Mini Scout',
    baseline: miniscout_baseline,
    changes: miniscout_changes
  },
  {
    id: 'scw-10',
    dbname: 'scw-10',
    versatile: [
      {
        Notes: "The <c>SCW</c> may pack a tiny magazine, but makes up for it with an excellent TTK and outstanding accuracy."
      },
      '6.8" Factory',
      'Ribbed Stubby',
      '25RND Magazine',
      'FMJ',
      'RO-S 1.25X'
    ],
    close: [
      {
        Notes: "The <c>SCW</c> may pack a tiny magazine, but makes up for it with an excellent TTK and outstanding accuracy."
      },
    'Extended Barrel',
    '5 MW Green',
    'Slim Angled',
    '25RND Magazine',
    'FMJ',
    'Iron Sights'
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

