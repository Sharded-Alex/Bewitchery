/**
 * @param typeId - The item's typeId
 * @param mainEffects - The main effects that this ingredient provides when brewed.
 * @param aidEffects - How this ingredient affects the main effects of a potion.
 * @param increaseAmount - Tells how much the specific effect's duration is increased by.
 */
 
export const herbList = [
  {
    "typeId": "bw:dandelion_dust",
    "id": '01',
    "element": "Sky",
    "rgb": [0.98, 0.965, 0.18],
    "mainEffects": [
      {
        "effect": "Saturation",
        "amplifier": 0,
        "duration": 2
      },
      {
        "effect": "Speed",
        "amplifier": 0,
        "duration": 60
      }
    ],
    "aidEffects": {
      "type": "amplifier",
      "aidWith": {
        "effect": ["Speed", "Haste", "Levitation"]
      }
    }
  }, // Dandelion Dust
  {
    "typeId": "bw:poppy_dust",
    "id": '02',
    "element": "Solar",
    "rgb": [0.941, 0.082, 0.208],
    "mainEffects": [
      {
        "effect": "Night Vision",
        "amplifier": 0,
        "duration": 60
      },
      {
        "effect": "Nausea",
        "amplifier": 1,
        "duration": 30
      },
      {
        "effect": "Regeneration",
        "amplifier": 0,
        "duration": 30
      }
    ],
    "aidEffects": {
      "type": "extender",
      "aidWith": {
        "effect": ["Absorption", "Regeneration", "Nausea", "Weakness"],
        "increaseAmount": 60
      }
    }
  }, // Poppy Dust
  {
    "typeId": "bw:blue_orchid_dust",
    "id": '03',
    "element": "Lunar",
    "rgb": [0.318, 0.549, 0.851],
    "mainEffects": [
      {
        "effect": "Saturation",
        "amplifier": 1,
        "duration": 3
      },
      {
        "effect": "Slowness",
        "amplifier": 1,
        "duration": 45
      },
      {
        "effect": "Levitation",
        "amplifier": 0,
        "duration": 10
      }
    ],
    "aidEffects": {
      "type": "nullifier",
      "aidWith": {
        "effect": ["Slowness", "Weakness"]
      }
    }
  }, // Blue Orchid Dust
  {
    "typeId": "minecraft:fermented_spider_eye",
    "id": '04',
    "element": "Ender",
    "rgb": [0.388, 0.012, 0.122],
    "mainEffects": [
      {
        "effect": "Poison",
        "amplifier": 1,
        "duration": 30
      },
      {
        "effect": "Weakness",
        "amplifier": 1,
        "duration": 30
      }
    ],
    "aidEffects": {
      "type": "corruptor",
      "aidWith": {
        "effect": ["Regeneration", "Instant Health", "Strength", "Haste", "Levitation"]
      }
    }
  }, // Fermented Spider's Eye
  {
    "typeId": "bw:cornflower_dust",
    "id": '05',
    "element": "Sky",
    "rgb": [0.078, 0.443, 0.949],
    "mainEffects": [
      {
        "effect": "Jump Boost",
        "amplifier": 1,
        "duration": 60
      },
      {
        "effect": "Weakness",
        "amplifier": 0,
        "duration": 60
      },
      {
        "effect": "Slow Falling",
        "amplifier": 0,
        "duration": 60
      }
    ],
    "aidEffects": {
      "type": "extender",
      "aidWith": {
        "effect": ["Weakness", "Slow Falling", "Slowness", "Mining Fatigue"],
        "increaseAmount": 90
      }
    }
  }, // Cornflower Dust
  {
    "typeId": "bw:oxeye_daisy_dust",
    "id": '06',
    "element": "Solar",
    "rgb": [0.933, 0.941, 0.741],
    "mainEffects": [
      {
        "effect": "Regeneration",
        "amplifier": 0,
        "duration": 50
      },
      {
        "effect": "Weakness",
        "amplifier": 1,
        "duration": 40
      }
    ],
    "aidEffects": {
      "type": "amplifier",
      "aidWith": {
        "effect": ["Regeneration", "Instant Health", "Slowness", "Weakness"]
      }
    }
  }, // Oxeye Daisy Dust
  {
    "typeId": "minecraft:wither_rose",
    "id": '07',
    "element": "Ender",
    "rgb": [0.22, 0.176, 0.176],
    "mainEffects": [
      {
        "effect": "Wither",
        "amplifier": 1,
        "duration": 15
      },
      {
        "effect": "Instant Damage",
        "amplifier": 0,
        "duration": 1
      }
    ],
    "aidEffects": {
      "type": "extender",
      "aidWith": {
        "effect": ["Wither", "Poison"],
        "increaseAmount": 15
      }
    }
  }, // Wither Rose
  {
    "typeId": "bw:coal_dust",
    "id": '10',
    "element": "Earth",
    "rgb": [0.176, 0.176, 0.176],
    "mainEffects": [
      {
        "effect": "Blindness",
        "amplifier": 0,
        "duration": 45
      },
      {
        "effect": "Darkness",
        "amplifier": 0,
        "duration": 30
      }
    ],
    "aidEffects": {
      "type": "nullifier",
      "aidWith": {
        "effect": ["Wither", "Poison"],
      }
    }
  }, // Crushed Coal
  {
    "typeId": "minecraft:feather",
    "id": '11',
    "element": "Sky",
    "rgb": [0.996, 1, 0.961],
    "mainEffects": [
      {
        "effect": "Slow Falling",
        "amplifier": 0,
        "duration": 90
      },
      {
        "effect": "Levitation",
        "amplifier": 0,
        "duration": 20
      },
      {
        "effect": "Slowness",
        "amplifier": 0,
        "duration": 90
      }
    ],
    "aidEffects": {
      "type": "amplifier",
      "aidWith": {
        "effect": ["Jump Boost", "Levitation", "Slowness"],
      }
    }
  }, // Feather
  {
    "typeId": "minecraft:phantom_membrane",
    "id": '12',
    "element": "Sky",
    "rgb": [0.89, 0.87, 0.89],
    "mainEffects": [
      {
        "effect": "Slow Falling",
        "amplifier": 0,
        "duration": 90
      },
      {
        "effect": "Night Vision",
        "amplifier": 0,
        "duration": 90
      },
      {
        "effect": "Poison",
        "amplifier": 0,
        "duration": 30
      }
    ],
    "aidEffects": {
      "type": "extender",
      "aidWith": {
        "effect": ["Slow Falling", "Jump Boost"],
        "increaseAmount": 45
      }
    }
  }, // Phantom Membrane
  {
    "typeId": "minecraft:gold_ingot",
    "id": '13',
    "element": "Earth",
    "rgb": [0.969, 0.753, 0.055],
    "mainEffects": [
      {
        "effect": "Absorption",
        "amplifier": 0,
        "duration": 60
      },
      {
        "effect": "Resistance",
        "amplifier": 0,
        "duration": 60
      },
      {
        "effect": "Slowness",
        "amplifier": 1,
        "duration": 105
      }
    ],
    "aidEffects": {
      "type": "corruptor",
      "aidWith": {
        "effect": ["Weakness", "Poison", "Slowness"]
      }
    }
  }, // Gold Ingot
  {
    "typeId": "minecraft:iron_ingot",
    "id": '14',
    "element": "Earth",
    "rgb": [0.659, 0.659, 0.659],
    "mainEffects": [
      {
        "effect": "Resistance",
        "amplifier": 0,
        "duration": 30
      },
      {
        "effect": "Strength",
        "amplifier": 0,
        "duration": 40
      },
      {
        "effect": "Slowness",
        "amplifier": 1,
        "duration": 60
      }
    ],
    "aidEffects": {
      "type": "extender",
      "aidWith": {
        "effect": ["Resistance", "Strength", "Slowness"],
        "increaseAmount": 60
      }
    }
  }, // Iron Ingot
  {
    "typeId": "minecraft:scute",
    "id": '15',
    "element": "Lunar",
    "rgb": [0.11, 0.80, 0.32],
    "mainEffects": [
      {
        "effect": "Water Breathing",
        "amplifier": 0,
        "duration": 90
      },
      {
        "effect": "Speed",
        "amplifier": 0,
        "duration": 90
      }
    ],
    "aidEffects": {
      "type": "amplifier",
      "aidWith": {
        "effect": ["Resistance", "Absorption", "Slowness"]
      }
    }
  }, // Scute
  {
    "typeId": "minecraft:prismarine_crystals",
    "id": '16',
    "element": "Lunar",
    "rgb": [0.145, 0.58, 0.506],
    "mainEffects": [
      {
        "effect": "Conduit Power",
        "amplifier": 0,
        "duration": 75
      },
      {
        "effect": "Mining Fatigue",
        "amplifier": 0,
        "duration": 75
      }
    ],
    "aidEffects": {
      "type": "corruptor",
      "aidWith": {
        "effect": ["Haste", "Speed", "Instant Health", "Regeneration"]
      }
    }
  }, // Prismarine Crystals
  {
    "typeId": "minecraft:nautilus_shell",
    "id": '17',
    "element": "Lunar",
    "rgb": [0.941, 0.831, 0.627],
    "mainEffects": [
      {
        "effect": "Water Breathing",
        "amplifier": 0,
        "duration": 60
      },
      {
        "effect": "Speed",
        "amplifier": 1,
        "duration": 45
      },
      {
        "effect": "Health Boost",
        "amplifier": 0,
        "duration": 60
      }
    ],
    "aidEffects": {
      "type": "nullifier",
      "aidWith": {
        "effect": ["Mining Fatigue", "Wither", "Absorption"]
      }
    }
  }, // Nautilus Shell
  {
    "typeId": "minecraft:ghast_tear",
    "id": '20',
    "element": "Solar",
    "rgb": [0.933, 0.841, 0.791],
    "mainEffects": [
      {
        "effect": "Regeneration",
        "amplifier": 1,
        "duration": 60
      },
      {
        "effect": "Health Boost",
        "amplifier": 1,
        "duration": 45
      },
      {
        "effect": "Instant Health",
        "amplifier": 0,
        "duration": 1
      }
    ],
    "aidEffects": {
      "type": "corruptor",
      "aidWith": {
        "effect": ["Mining Fatigue", "Wither", "Slowness", "Instant Damage", "Weakness"]
      }
    }
  }, // Ghast Tear
  {
    "typeId": "minecraft:echo_shard",
    "id": '21',
    "element": "Ender",
    "rgb": [0.039, 0.353, 0.225],
    "mainEffects": [
      {
        "effect": "Darkness",
        "amplifier": 0,
        "duration": 90
      },
      {
        "effect": "Weakness",
        "amplifier": 1,
        "duration": 45
      }
    ],
    "aidEffects": {
      "type": "amplifier",
      "aidWith": {
        "effect": ["Weakness", "Blindness", "Darkness"]
      }
    }
  }, // Echo Shard
  {
    "typeId": "bw:amethyst_dust",
    "id": '22',
    "element": "Ender",
    "rgb": [0.624, 0.251, 0.859],
    "mainEffects": [
      {
        "effect": "Haste",
        "amplifier": 1,
        "duration": 60
      },
      {
        "effect": "Slowness",
        "amplifier": 0,
        "duration": 45
      }
    ],
    "aidEffects": {
      "type": "amplifier",
      "aidWith": {
        "effect": ["Mining Fatigue", "Speed", "Jump Boost"]
      }
    }
  }, // Amethyst Dust
  {
    "typeId": "minecraft:magma_cream",
    "id": '23',
    "element": "Solar",
    "rgb": [0.949, 0.475, 0.047],
    "mainEffects": [
      {
        "effect": "Fire Resistance",
        "amplifier": 0,
        "duration": 90
      },
      {
        "effect": "Weakness",
        "amplifier": 1,
        "duration": 45
      }
    ],
    "aidEffects": {
      "type": "extender",
      "aidWith": {
        "effect": ["Fire Resistance", "Resistance", "Slowness"],
        "increaseAmount": 75
      }
    }
  }, // Magma Cream
];