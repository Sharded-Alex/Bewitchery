export const ceremonies = [
  // Weather
  {
    "id": "Blessing of Rain",
    "itemArray": ["bw:cornflower_dust", "bw:crushed_fern", "bw:sky_imbued_quartz", "bw:lunar_imbued_quartz", "minecraft:potion"],
    "validCircle": "Urrican's Spiral",
    "particles": [
      {
        "name": "bwitch:storm_cloud",
        "xOffset": 0,
        "yOffset": 8,
        "zOffset": 0,
        "delay": 20
      },
      {
        "name": "bwitch:raining",
        "xOffset": 0,
        "yOffset": 8,
        "zOffset": 0,
        "delay": 50
      },
      {
        "name": "bwitch:waterBurst_particle",
        "xOffset": 0,
        "yOffset": 3,
        "zOffset": 0,
        "delay": 320
      }
    ],
    "ritualEffects": [
      {
        "type": "command",
        "commands": [
          "weather rain"
        ]
      }
    ]
  },
  {
    "id": "Clearing of the Clouds",
    "itemArray": ["bw:oxeye_daisy_dust", "bw:crushed_fern", "bw:sky_imbued_quartz", "bw:solar_imbued_quartz", "minecraft:double_plant"],
    "validCircle": "Urrican's Spiral",
    "particles": [
      {
        "name": "bwitch:clear_particle1",
        "xOffset": 0.5,
        "yOffset": 0.5,
        "zOffset": 0.5,
        "delay": 20
      },
      {
        "name": "bwitch:clear_particle2",
        "xOffset": 0.5,
        "yOffset": 0.5,
        "zOffset": 0.5,
        "delay": 80
      },
      {
        "name": "bwitch:clear_particle3",
        "xOffset": 0.5,
        "yOffset": 0.5,
        "zOffset": 0.5,
        "delay": 100
      },
      {
        "name": "bwitch:clear_particle4",
        "xOffset": 0.5,
        "yOffset": 1.5,
        "zOffset": 0.5,
        "delay": 130
      }
    ],
    "ritualEffects": [
      {
        "type": "command",
        "commands": [
          "weather clear"
        ]
      }
    ]
  },
  {
    "id": "Howling of the Anemoi",
    "itemArray": ["minecraft:copper_ingot", "bw:sky_imbued_quartz", "bw:crushed_fern", "bw:dandelion_dust", "bw:cornflower_dust"],
    "validCircle": "Urrican's Spiral",
    "particles": [
      {
        "name": "bwitch:storm_cloud",
        "xOffset": 0,
        "yOffset": 8,
        "zOffset": 0,
        "delay": 20
      },
      {
        "name": "bwitch:raining",
        "xOffset": 0,
        "yOffset": 8,
        "zOffset": 0,
        "delay": 50
      },
      {
        "name": "bwitch:clear_particle4",
        "xOffset": 0.5,
        "yOffset": 1.5,
        "zOffset": 0.5,
        "delay": 320
      }
    ],
    "ritualEffects": [
      {
        "type": "command",
        "commands": [
          "weather thunder"
        ]
      }
    ]
  },
  
  // Coven
  {
    "id": "Rite of the Chain",
    "itemArray": ["minecraft:chain", "bw:natural_ash", "minecraft:diamond"],
    "namedItem": "minecraft:chain",
    "validCircle": "Higher Binding Circle of the Conclave",
    "particles": [
      {
        "name": "bwitch:binding_soulfire",
        "xOffset": -6,
        "yOffset": 0,
        "zOffset": 7,
        "delay": 30
      },
      {
        "name": "bwitch:binding_soulfire",
        "xOffset": -2,
        "yOffset": 0,
        "zOffset": 7,
        "delay": 30
      },
      {
        "name": "bwitch:binding_soulfire",
        "xOffset": 3,
        "yOffset": 0,
        "zOffset": 7,
        "delay": 30
      },
      {
        "name": "bwitch:binding_soulfire",
        "xOffset": 7,
        "yOffset": 0,
        "zOffset": 7,
        "delay": 30
      },
      {
        "name": "bwitch:binding_soulfire",
        "xOffset": 6,
        "yOffset": 0,
        "zOffset": 3,
        "delay": 30
      },
      {
        "name": "bwitch:binding_soulfire",
        "xOffset": 6,
        "yOffset": 0,
        "zOffset": -1,
        "delay": 30
      },
      {
        "name": "bwitch:binding_soulfire",
        "xOffset": 6,
        "yOffset": 0,
        "zOffset": -5,
        "delay": 30
      },
      {
        "name": "bwitch:binding_soulfire",
        "xOffset": 2,
        "yOffset": 0,
        "zOffset": -6,
        "delay": 30
      },
      {
        "name": "bwitch:binding_soulfire",
        "xOffset": -2,
        "yOffset": 0,
        "zOffset": -6,
        "delay": 30
      },
      {
        "name": "bwitch:binding_soulfire",
        "xOffset": -6,
        "yOffset": 0,
        "zOffset": -6,
        "delay": 30
      },
      {
        "name": "bwitch:binding_soulfire",
        "xOffset": -6,
        "yOffset": 0,
        "zOffset": -2,
        "delay": 30
      },
      {
        "name": "bwitch:binding_soulfire",
        "xOffset": -6,
        "yOffset": 0,
        "zOffset": 2,
        "delay": 30
      },
      {
        "name": "bwitch:binding_soulfire",
        "xOffset": 0.5,
        "yOffset": 0,
        "zOffset": 0.5,
        "delay": 30
      },
    ],
    "ritualEffects": [
      {
        "type": "coven",
        "covenEffect": "create"
      }
    ]
  },
  {
    "id": "Chain Severing Ritual",
    "itemArray": ["minecraft:shears", "bw:natural_ash", "minecraft:diamond"],
    "validCircle": "Higher Binding Circle of the Conclave",
    "particles": [
      {
        "name": "bwitch:clear_particle4",
        "xOffset": 0.5,
        "yOffset": 1,
        "zOffset": 0.5,
        "delay": 40
      }
    ],
    "ritualEffects": [
      {
        "type": "coven",
        "covenEffect": "destroy"
      }
    ]
  },
  
  // Cleansing
  {
    "id": "Lesser Rite of Cleansing",
    "itemArray": ["bw:oxeye_daisy_dust", "bw:blood_vial", "bw:solar_imbued_quartz", "minecraft:milk_bucket"],
    "namedItem": "bw:blood_vial",
    "validCircle": "Circle of Duality",
    "particles": [
      {
        "name": "bwRitual:cleanseSmoke",
        "xOffset": 0.5,
        "yOffset": 0,
        "zOffset": 0.5,
        "delay": 10
      },
      {
        "name": "bwRitual:cleanseSmokeOutwards",
        "xOffset": 0.5,
        "yOffset": 0,
        "zOffset": 0.5,
        "delay": 70
      }
    ],
    "ritualEffects": [
      {
        "type": "cleansing",
        "power": "lesser"
      }
    ]
  },
  {
    "id": "Greater Rite of Cleansing",
    "itemArray": ["minecraft:glowstone_dust", "bw:solar_imbued_quartz", "bw:blood_vial", "minecraft:milk_bucket",  "minecraft:diamond"],
    "namedItem": "bw:blood_vial",
    "validCircle": "Circle of Duality",
    "particles": [
      {
        "name": "bwRitual:cleanseSmoke",
        "xOffset": 0.5,
        "yOffset": 0,
        "zOffset": 0.5,
        "delay": 10
      },
      {
        "name": "bwRitual:cleanseSmokeOutwards",
        "xOffset": 0.5,
        "yOffset": 0,
        "zOffset": 0.5,
        "delay": 70
      }
    ],
    "ritualEffects": [
      {
        "type": "cleansing",
        "power": "greater"
      }
    ]
  },
  
  // Cursing
  {
    "id": "Hexing Rite of Sinking",
    "itemArray": ["minecraft:nautilus_shell", "minecraft:prismarine_crystals", "minecraft:seagrass",  "bw:blood_vial"],
    "namedItem": "bw:blood_vial",
    "validCircle": "Circle of Duality",
    "particles": [
      {
        "name": "bwitch:clear_particle4",
        "xOffset": 0.5,
        "yOffset": 1,
        "zOffset": 0.5,
        "delay": 20
      }
    ],
    "ritualEffects": [
      {
        "type": "cursing",
        "curse": "ocean_hold"
      }
    ]
  },
  {
    "id": "Hexing Rite of Ignition",
    "itemArray": ["minecraft:blaze_powder", "minecraft:fire_charge", "bw:blood_vial"],
    "namedItem": "bw:blood_vial",
    "validCircle": "Circle of Duality",
    "particles": [
      {
        "name": "bwitch:clear_particle4",
        "xOffset": 0.5,
        "yOffset": 1,
        "zOffset": 0.5,
        "delay": 20
      }
    ],
    "ritualEffects": [
      {
        "type": "cursing",
        "curse": "random_burn"
      }
    ]
  },
  {
    "id": "Hexing Rite of the Enderman",
    "itemArray": ["minecraft:warped_fungus", "minecraft:chorus_fruit", "bw:blood_vial"],
    "namedItem": "bw:blood_vial",
    "validCircle": "Circle of Duality",
    "particles": [
      {
        "name": "bwitch:clear_particle4",
        "xOffset": 0.5,
        "yOffset": 1,
        "zOffset": 0.5,
        "delay": 20
      }
    ],
    "ritualEffects": [
      {
        "type": "cursing",
        "curse": "random_teleport"
      }
    ]
  },
  {
    "id": "Hexing Rite of the Creeper",
    "itemArray": ["minecraft:gunpowder", "minecraft:sand", "bw:blood_vial"],
    "namedItem": "bw:blood_vial",
    "validCircle": "Circle of Duality",
    "particles": [
      {
        "name": "bwitch:clear_particle4",
        "xOffset": 0.5,
        "yOffset": 1,
        "zOffset": 0.5,
        "delay": 20
      }
    ],
    "ritualEffects": [
      {
        "type": "cursing",
        "curse": "creeper_hex"
      }
    ]
  },
  
  // Summoning
  {
    "id": "Call Through The End",
    "itemArray": ["minecraft:ender_pearl", "minecraft:amethyst_shard", "bw:ender_imbued_quartz", "bw:blood_vial"],
    "namedItem": "bw:blood_vial",
    "keptItems": ["minecraft:ender_pearl"],
    "validCircle": "Nathe's Formation",
    "particles": [
      {
        "name": "bwitch:clear_particle4",
        "xOffset": 0.5,
        "yOffset": 1,
        "zOffset": 0.5,
        "delay": 20
      }
    ],
    "ritualEffects": [
      {
        "type": "tpEntity"
      }
    ]
  },
  {
    "id": "Conjuring By The Spacial Crossroads",
    "itemArray": ["minecraft:ender_pearl", "minecraft:diamond", "bw:ender_imbued_quartz", "bw:blood_vial"],
    "namedItem": "bw:blood_vial",
    "keptItems": ["minecraft:ender_pearl"],
    "validCircle": "Nathe's Formation",
    "particles": [
      {
        "name": "bwitch:clear_particle4",
        "xOffset": 0.5,
        "yOffset": 1,
        "zOffset": 0.5,
        "delay": 20
      }
    ],
    "ritualEffects": [
      {
        "type": "summon"
      }
    ]
  },
  {
    "id": "Call of the Wild",
    "itemArray": ["minecraft:wheat", "minecraft:wheat_seeds", "minecraft:beetroot"],
    "validCircle": "Nathe's Formation",
    "particles": [
      {
        "name": "bwitch:clear_particle4",
        "xOffset": 0.5,
        "yOffset": 1,
        "zOffset": 0.5,
        "delay": 20
      }
    ],
    "ritualEffects": [
      {
        "type": "command",
        "commands": [
          "tp @e[family=mob, family =!monster, r=100] ~~~"
        ]
      }
    ]
  },
  {
    "id": "Rite of Traveling",
    "itemArray": ["minecraft:ender_pearl", "bw:ender_imbued_quartz"],
    "namedItem": "minecraft:ender_pearl",
    "validCircle": "Nathe's Formation",
    "particles": [
      {
        "name": "bwitch:clear_particle4",
        "xOffset": 0.5,
        "yOffset": 1,
        "zOffset": 0.5,
        "delay": 120
      }
    ],
    "ritualEffects": [
      {
        "type": "warpTravel"
      }
    ]
  },
  
  // Communing
  {
    "id": "Commune With The Wood",
    "itemArray": ["minecraft:bread", "minecraft:honey_bottle", "minecraft:apple"],
    "validCircle": "Nathe's Formation",
    "particles": [
      {
        "name": "bwRitual:summonCircle",
        "xOffset": 0.5,
        "yOffset": 0.45,
        "zOffset": 0.5,
        "delay": 10
      },
      {
        "name": "bw:empty",
        "xOffset": 0.5,
        "yOffset": 0.45,
        "zOffset": 0.5,
        "delay": 200
      }
    ],
    "ritualEffects": [
      {
        "type": "commune",
        "power": "lesser",
        "spiritType": "fae"
      }
    ]
  },
  {
    "id": "Offering to the Spirits",
    "itemArray": ["bw:natural_ash", "minecraft:apple", "minecraft:milk_bucket", "minecraft:paper"],
    "namedItem": "minecraft:paper",
    "keptItems": ["minecraft:paper"],
    "validCircle": "Nathe's Formation",
    "particles": [
      {
        "name": "bwRitual:summonCircle",
        "xOffset": 0.5,
        "yOffset": 0.45,
        "zOffset": 0.5,
        "delay": 10
      },
      {
        "name": "bw:empty",
        "xOffset": 0.5,
        "yOffset": 0.45,
        "zOffset": 0.5,
        "delay": 200
      }
    ],
    "ritualEffects": [
      {
        "type": "offering"
      }
    ]
  },
  {
    "id": "Severing of Fae Bonds",
    "itemArray": ["minecraft:iron_sword", "bw:obsidian_dust", "minecraft:paper"],
    "namedItem": "minecraft:paper",
    "keptItems": ["minecraft:iron_sword"],
    "validCircle": "Nathe's Formation",
    "particles": [
      {
        "name": "bwitch:clear_particle4",
        "xOffset": 0.5,
        "yOffset": 1.5,
        "zOffset": 0.5,
        "delay": 20
      }
    ],
    "ritualEffects": [
      {
        "type": "cutPact"
      }
    ]
  },
  {
    "id": "Severing of Bonds",
    "itemArray": ["minecraft:iron_sword", "bw:obsidian_dust", "bw:blood_vial"],
    "namedItem": "bw:blood_vial",
    "keptItems": ["minecraft:iron_sword"],
    "validCircle": "Nathe's Formation",
    "particles": [
      {
        "name": "bwitch:clear_particle4",
        "xOffset": 0.5,
        "yOffset": 1.5,
        "zOffset": 0.5,
        "delay": 20
      }
    ],
    "ritualEffects": [
      {
        "type": "severBond"
      }
    ]
  },
  
  // Transmutative
  {
    "id": "Equin's Heralding of Autumn",
    "itemArray": ["minecraft:bone_meal", "bw:crushed_fern", "bw:earth_imbued_quartz", "minecraft:rotten_flesh"],
    "validCircle": "Transmutation Crest",
    "particles": [
      {
        "name": "bwRitual:plantCirculate_1",
        "xOffset": 0.5,
        "yOffset": 0.5,
        "zOffset": 0.5,
        "delay": 20
      },
      {
        "name": "bwRitual:plantCirculate_2",
        "xOffset": 0.5,
        "yOffset": 0.5,
        "zOffset": 0.5,
        "delay": 0
      },
      {
        "name": "bwRitual:plantWave",
        "xOffset": 0.5,
        "yOffset": 0.5,
        "zOffset": 0.5,
        "delay": 60
      }
    ],
    "ritualEffects": [
      {
        "type": "growth",
        "blocks": [
          "minecraft:wheat",
          "minecraft:potatoes",
          "minecraft:carrots",
          "minecraft:beetroot",
          "minecraft:sweet_berry_bush",
          "minecraft:melon_stem",
          "minecraft:pumpkin_stem"
        ]
      }
    ]
  },
  {
    "id": "Mineral Exchange Rite",
    "itemArray": ["bw:natural_ash", "bw:earth_imbued_quartz", "minecraft:honey_bottle"],
    "validCircle": "Transmutation Crest",
    "particles": [
      {
        "name": "bwitch:clear_particle4",
        "xOffset": 0.5,
        "yOffset": 1.5,
        "zOffset": 0.5,
        "delay": 20
      }
    ],
    "ritualEffects": [
      {
        "type": "transmute",
        "replaceBlock": [
          {
            "replace": "minecraft:stone",
            "block": "minecraft:coal_ore"
          },
          {
            "replace": "minecraft:raw_copper_block",
            "block": "minecraft:iron_ore"
          },
          {
            "replace": "minecraft:raw_iron_block",
            "block": "minecraft:gold_ore"
          },
          {
            "replace": "minecraft:raw_gold_block",
            "block": "minecraft:emerald_ore"
          },
          {
            "replace": "minecraft:emerald_block",
            "block": "minecraft:diamond_ore"
          },
          {
            "replace": "minecraft:redstone_block",
            "block": "minecraft:glowstone"
          },
          {
            "replace": "minecraft:netherrack",
            "block": "minecraft:quartz_ore"
          },
          {
            "replace": "minecraft:coal_block",
            "block": "minecraft:lapis_ore"
          }
        ]
      }
    ]
  },
  {
    "id": "Rite of Droughts",
    "itemArray": ["minecraft:sponge", "minecraft:sand", "bw:solar_imbued_quartz", "bw:coal_powder"],
    "validCircle": "Transmutation Crest",
    "keptItems": ["minecraft:sponge"],
    "particles": [
      {
        "name": "bwitch:clear_particle4",
        "xOffset": 0.5,
        "yOffset": 1.5,
        "zOffset": 0.5,
        "delay": 20
      }
    ],
    "ritualEffects": [
      {
        "type": "transmute",
        "replaceBlock": [
          {
            "replace": "minecraft:flowing_water",
            "block": "minecraft:air"
          },
          {
            "replace": "minecraft:water",
            "block": "minecraft:air"
          }
        ]
      }
    ]
  },
  {
    "id": "Rite of Sanctuary",
    "itemArray": ["minecraft:wheat_seeds", "minecraft:glass", "bw:natural_ash"],
    "validCircle": "Transmutation Crest",
    "particles": [
      {
        "name": "bwitch:clear_particle4",
        "xOffset": 0.5,
        "yOffset": 1.5,
        "zOffset": 0.5,
        "delay": 100
      }
    ],
    "ritualEffects": [
      {
        "type": "outline",
        "blacklistedItems": [
          "minecraft:diamond_block",
          "minecraft:emerald_block",
          "minecraft:iron_block",
          "minecraft:coal_block",
          "minecraft:amethyst_block",
          "minecraft:bedrock",
          "minecraft:redstone_block",
          "minecraft:obsidian",
          "minecraft:crying_obsidian",
        ]
      }
    ]
  }, // * Sanctuary
  {
    "id": "Rite of Dowsing",
    "itemArray": ["bw:coal_dust", "bw:natural_ash", "bw:earth_imbued_quartz", "bw:dandelion_dust"],
    "validCircle": "Transmutation Crest",
    "particles": [
      {
        "name": "bwitch:clear_particle4",
        "xOffset": 0.5,
        "yOffset": 1.5,
        "zOffset": 0.5,
        "delay": 20
      }
    ],
    "ritualEffects": [
      {
        "type": "detectBlockInArea",
        "blockArray": [
          {
            "block": "minecraft:coal_ore",
            "rgba": {
              "r": 0.1,
              "g": 0.1,
              "b": 0.1,
              "a": 1
            }
          },
          {
            "block": "minecraft:deepslate_coal_ore",
            "rgba": {
              "r": 0.1,
              "g": 0.1,
              "b": 0.1,
              "a": 1
            }
          },
          {
            "block": "minecraft:copper_ore",
            "rgba": {
              "r": 0.902,
              "g": 0.541,
              "b": 0.11,
              "a": 1
            }
          },
          {
            "block": "minecraft:deepslate_copper_ore",
            "rgba": {
              "r": 0.902,
              "g": 0.541,
              "b": 0.11,
              "a": 1
            }
          },
          {
            "block": "minecraft:iron_ore",
            "rgba": {
              "r": 0.859,
              "g": 0.804,
              "b": 0.698,
              "a": 1
            }
          },
          {
            "block": "minecraft:deepslate_iron_ore",
            "rgba": {
              "r": 0.859,
              "g": 0.804,
              "b": 0.698,
              "a": 1
            }
          },
          {
            "block": "minecraft:gold_ore",
            "rgba": {
              "r": 0.949,
              "g": 0.847,
              "b": 0.153,
              "a": 1
            }
          },
          {
            "block": "minecraft:deepslate_gold_ore",
            "rgba": {
              "r": 0.949,
              "g": 0.847,
              "b": 0.153,
              "a": 1
            }
          },
          {
            "block": "minecraft:redstone_ore",
            "rgba": {
              "r": 1,
              "g": 0.071,
              "b": 0.121,
              "a": 1
            }
          },
          {
            "block": "minecraft:deepslate_redstone_ore",
            "rgba": {
              "r": 1,
              "g": 0.071,
              "b": 0.121,
              "a": 1
            }
          },
          {
            "block": "minecraft:diamond_ore",
            "rgba": {
              "r": 0.161,
              "g": 0.871,
              "b": 0.929,
              "a": 1
            }
          },
          {
            "block": "minecraft:deepslate_diamond_ore",
            "rgba": {
              "r": 0.161,
              "g": 0.871,
              "b": 0.929,
              "a": 1
            }
          },
          {
            "block": "minecraft:emerald_ore",
            "rgba": {
              "r": 0.224,
              "g": 0.851,
              "b": 0.212,
              "a": 1
            }
          },
          {
            "block": "minecraft:deepslate_emerald_ore",
            "rgba": {
              "r": 0.224,
              "g": 0.851,
              "b": 0.212,
              "a": 1
            }
          },
          {
            "block": "minecraft:quartz_ore",
            "rgba": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            }
          },
        ],
        "areaSize": {
          "x": 10,
          "y": 30,
          "z": 10
        }
      }
    ]
  },
  {
    "id": "Rite of Warding",
    "itemArray": ["minecraft:redstone", "minecraft:iron_ingot", "bw:earth_imbued_quartz", "minecraft:gold_ingot", "minecraft:quartz"],
    "validCircle": "Transmutation Crest",
    "particles": [
      {
        "name": "bwitch:clear_particle4",
        "xOffset": 0.5,
        "yOffset": 1.5,
        "zOffset": 0.5,
        "delay": 20
      }
    ],
    "ritualEffects": [
      {
        "type": "ward"
      }
    ]
  },
  
  // Enchantment & Binding
  {
    "id": "Enchant",
    "itemArray": ["minecraft:book", "minecraft:lapis_lazuli", "bw:lunar_imbued_quartz"],
    "validCircle": "Hebayan Mark",
    "particles": [
      {
        "name": "bwRitual:enchantment_spiral",
        "xOffset": 0.5,
        "yOffset": 0.0,
        "zOffset": 0.5,
        "delay": 0
      },
      {
        "name": "bwRitual:enchanted_burst",
        "xOffset": 0.5,
        "yOffset": 1.5,
        "zOffset": 0.5,
        "delay": 100
      }
    ],
    "ritualEffects": [
      {
        "type": "command",
        "commands": [
          "loot spawn ~~~ loot \"enchanted_book\""
        ]
      }
    ]
  },
  {
    "id": "Witch's Pact",
    "itemArray": ["minecraft:leather", "minecraft:lead", "bw:blood_vial"],
    "namedItem": "bw:blood_vial",
    "validCircle": "Hebayan Mark",
    "particles": [
      {
        "name": "bwitch:clear_particle4",
        "xOffset": 0.5,
        "yOffset": 1.5,
        "zOffset": 0.5,
        "delay": 20
      }
    ],
    "ritualEffects": [
      {
        "type": "addBond"
      }
    ]
  },
  {
    "id": "Hebayan Marking Rite",
    "itemArray": ["minecraft:leather", "minecraft:lead", "bw:coal_dust", "bw:soul_fragment"],
    "validCircle": "Hebayan Mark",
    "particles": [
      {
        "name": "bwitch:clear_particle4",
        "xOffset": 0.5,
        "yOffset": 1.5,
        "zOffset": 0.5,
        "delay": 20
      }
    ],
    "ritualEffects": [
      {
        "type": "aoeBond"
      }
    ]
  },
  
  // Time
  {
    "id": "Shifting of the Hourglass: Solar Shift",
    "itemArray": ["bw:poppy_dust", "minecraft:double_plant", "bw:natural_ash", "minecraft:sand", "bw:solar_imbued_quartz"],
    "validCircle": "Hebayan Mark",
    "particles": [
      {
        "name": "bwRitual:enchantment_spiral",
        "xOffset": 0.5,
        "yOffset": 0.0,
        "zOffset": 0.5,
        "delay": 0
      }
    ],
    "ritualEffects": [
      {
        "type": "command",
        "commands": [
          "time set sunrise"
        ]
      }
    ]
  },
  {
    "id": "Shifting of the Hourglass: Lunar Shift",
    "itemArray": ["bw:poppy_dust", "minecraft:double_plant", "bw:natural_ash", "minecraft:sand", "bw:lunar_imbued_quartz"],
    "validCircle": "Hebayan Mark",
    "particles": [
      {
        "name": "bwRitual:enchantment_spiral",
        "xOffset": 0.5,
        "yOffset": 0.0,
        "zOffset": 0.5,
        "delay": 0
      }
    ],
    "ritualEffects": [
      {
        "type": "command",
        "commands": [
          "time set sunset"
        ]
      }
    ]
  },
  
];