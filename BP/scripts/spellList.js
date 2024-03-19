/* jshint maxerr: 10000 */
/*
1 - Up
2 - Down
3 - Right
4 - Left
*/

// For VFX, a second is divided by 4 so the timestamps should be expressed as (second*4)
export const spellList = [
  {
    "name": "Conceal",
    "mysticName": "Escolare",
    "spellTags": ["support", "buff", "esoteric"],
    "xp": 1,
    "vfx": [
      {
        "particle": "bw:conceal_charge",
        "type": "steady",
        "startStamp": 0,
        "endStamp": 8,
        "offset": {
          "x": 0,
          "y": 0,
          "z": 0
        }
      },
      {
        "particle": "bw:conceal_poof",
        "sound": "beacon.activate",
        "type": "instant",
        "startStamp": 9,
        "offset": {
          "x": 0,
          "y": 0,
          "z": 0
        },
        "endPoint": true
      }
    ],
    "cost": {
      "fatigue": 5
    },
    "spellEffects": [
      {
        "trustMin": 0,
        "trustMax": 24.9,
        "spellArray": [
          {
            "type": "potion_effect",
            "effect": "invisibility",
            "duration": 10,
            "amplifier": 0,
            "hideParticle": false
          }
        ]
      },
      {
        "trustMin": 25,
        "trustMax": 49.9,
        "spellArray": [
          {
            "type": "potion_effect",
            "effect": "invisibility",
            "duration": 25,
            "amplifier": 0,
            "hideParticle": true
          }
        ]
      },
      {
        "trustMin": 50,
        "trustMax": 100,
        "spellArray": [
          {
            "type": "potion_effect",
            "effect": "invisibility",
            "duration": 40,
            "amplifier": 0,
            "hideParticle": true
          }
        ]
      }
    ]
  }, // Conceal
  {
    "name": "Green Thumb",
    "mysticName": "Cresivare",
    "spellTags": ["utility", "duration", "plant"],
    "xp": 1,
    "vfx": [
      {
        "particle": "bw:plant_spiral_magic",
        "sound": "item.bonemeal.use",
        "type": "instant",
        "startStamp": 4,
        "offset": {
          "x": 0,
          "y": 0,
          "z": 0
        },
        "endPoint": true
      }
    ],
    "cost": {
      "fatigue": 10
    },
    "spellEffects": [
      {
        "trustMin": 1,
        "trustMax": 45.9,
        "spellArray": [
          {
            "type": "growth",
            "chance": 45,
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
        "trustMin": 46,
        "trustMax": 100,
        "spellArray": [
          {
            "type": "growth",
            "chance": 85,
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
      }
    ]
  }, // Green Thumb *
  {
    "name": "Absorb",
    "mysticName": "Bebivita",
    "spellTags": ["defense", "buff", "plant"],
    "xp": 2,
    "vfx": [
      {
        "particle": "bw:leaves_assemblage",
        "sound": "item.bone_meal.use",
        "type": "steady",
        "startStamp": 0,
        "endStamp": 16,
        "offset": {
          "x": 0,
          "y": 0,
          "z": 0
        }
      },
      {
        "particle": "bw:absorb_leaves_burst",
        "sound": "pick_berries.cave_vines",
        "type": "instant",
        "startStamp": 17,
        "offset": {
          "x": 0,
          "y": 0,
          "z": 0
        },
        "endPoint": true
      }
    ],
    "cost": {
      "fatigue": 10
    },
    "spellEffects": [
      {
        "trustMin": 1,
        "trustMax": 35,
        "spellArray": [
          {
            "type": "potion_effect",
            "effect": "regeneration",
            "duration": 15,
            "amplifier": 0,
            "hideParticle": true
          }
        ]
      },
      {
        "trustMin": 36,
        "trustMax": 75,
        "spellArray": [
          {
            "type": "potion_effect",
            "effect": "regeneration",
            "duration": 25,
            "amplifier": 1,
            "hideParticle": true
          }
        ]
      },
      {
        "trustMin": 76,
        "trustMax": 100,
        "spellArray": [
          {
            "type": "potion_effect",
            "effect": "regeneration",
            "duration": 45,
            "amplifier": 1,
            "hideParticle": true
          }
        ]
      }
    ]
  }, // Absorb *
  {
    "name": "Blaze",
    "mysticName": "Ignisie",
    "spellTags": ["projectile", "attack", "fire"],
    "xp": 3,
    "vfx": [
      {
        "particle": "bw:blaze_charge",
        "sound": "fire.fire",
        "type": "steady",
        "startStamp": 0,
        "endStamp": 5,
        "offset": {
          "x": 0,
          "y": 0,
          "z": 1.5
        }
      },
      {
        "particle": "bw:blaze_burst",
        "sound": "fire.ignite",
        "type": "instant",
        "startStamp": 6,
        "offset": {
          "x": 0,
          "y": 0,
          "z": 1.5
        },
        "molang": {
          "velocity": ["view", 0]
        },
        "endPoint": true
      }
    ],
    "cost": {
      "fatigue": 10
    },
    "spellEffects": [
      {
        "trustMin": 1,
        "trustMax": 100,
        "spellArray": [
          {
            "type": "projectile",
            "projectile": "bw:blaze_ball",
            "power": 1
          }
        ]
      }
    ]
  }, // Blaze
  {
    "name": "Fire Skin",
    "mysticName": "Ignicutis",
    "spellTags": ["defense", "buff", "fire"],
    "xp": 3,
    "vfx": [
      {
        "particle": "bw:fire_skin_particle",
        "sound": "fire.fire",
        "type": "steady",
        "startStamp": 0,
        "endStamp": 6,
        "offset": {
          "x": 0,
          "y": -1,
          "z": 0
        },
        "endPoint": true
      }
    ],
    "cost": {
      "fatigue": 20
    },
    "spellEffects": [
      {
        "trustMin": 0,
        "trustMax": 100,
        "spellArray": [
          {
            "type": "particles",
            "particle": "bw:fire_skin_particle"
          },
          {
            "type": "potion_effect",
            "effect": "fire_resistance",
            "duration": 30,
            "amplifier": 0,
            "hideParticle": true
          },
          {
            "type": "tags",
            "addTags": [
              "bw:fire_skin"
            ]
          },
          {
            "type": "scores",
            "addScores": [
              {
                "name": "bw:fireSkin",
                "value": 30
              }
            ]
          }
        ]
      }
    ]
  }, // Fire Skin
  {
    "name": "Fireball",
    "mysticName": "Igniflagre",
    "spellTags": ["projectile", "attack", "fire"],
    "xp": 6,
    "vfx": [
      {
        "particle": "bw:blaze_charge",
        "sound": "fire.fire",
        "type": "steady",
        "startStamp": 0,
        "endStamp": 12,
        "offset": {
          "x": 0,
          "y": 0,
          "z": 1.5
        }
      },
      {
        "particle": "bw:blaze_burst",
        "sound": "fire.ignite",
        "type": "instant",
        "startStamp": 13,
        "offset": {
          "x": 0,
          "y": 0,
          "z": 1.5
        },
        "molang": {
          "velocity": ["view", 0]
        },
        "endPoint": true
      }
    ],
    "cost": {
      "fatigue": 30
    },
    "spellEffects": [
      {
        "trustMin": 1,
        "trustMax": 100,
        "spellArray": [
          {
            "type": "projectile",
            "projectile": "bw:combusting_projectile",
            "power": 2
          }
        ]
      }
    ]
  }, // Fireball
  {
    "name": "Heat",
    "mysticName": "Calivare",
    "spellTags": ["utility", "fire"],
    "xp": 0,
    "vfx": [
      {
        "particle": "bw:heat_interact",
        "sound": "fire.fire",
        "type": "steady",
        "startStamp": 0,
        "endStamp": 8,
        "offset": {
          "x": 0,
          "y": 0,
          "z": 0
        },
        "molang": {
          "seeLocation": true,
          "range": 4
        },
        "endPoint": true
      },
    ],
    "cost": {
      "fatigue": 2
    },
    "spellEffects": [
      {
        "trustMin": 1,
        "trustMax": 100,
        "spellArray": [
          {
            "type": "transmuteItem",
            "limit": 3,
            "items": [
              {
                "presentItem": ["minecraft:sapling"],
                "finishedItem": "bw:natural_ash"
              },
              {
                "presentItem": ["minecraft:potato"],
                "finishedItem": "minecraft:baked_potato"
              },
              {
                "presentItem": ["minecraft:beef"],
                "finishedItem": "minecraft:cooked_beef"
              },
              {
                "presentItem": ["minecraft:porkchop"],
                "finishedItem": "minecraft:cooked_porkchop"
              },
              {
                "presentItem": ["minecraft:rabbit"],
                "finishedItem": "minecraft:cooked_rabbit"
              },
              {
                "presentItem": ["minecraft:cod"],
                "finishedItem": "minecraft:cooked_cod"
              },
              {
                "presentItem": ["minecraft:salmon"],
                "finishedItem": "minecraft:cooked_salmon"
              },
              {
                "presentItem": ["minecraft:kelp"],
                "finishedItem": "minecraft:dried_kelp"
              },
              {
                "presentItem": ["minecraft:chicken"],
                "finishedItem": "minecraft:cooked_chicken"
              },
              {
                "presentItem": ["minecraft:mutton"],
                "finishedItem": "minecraft:cooked_mutton"
              },
              
              {
                "presentItem": ["minecraft:raw_iron"],
                "finishedItem": "minecraft:iron_ingot"
              },
              {
                "presentItem": ["minecraft:raw_gold"],
                "finishedItem": "minecraft:gold_ingot"
              },
              {
                "presentItem": ["minecraft:raw_copper"],
                "finishedItem": "minecraft:copper_ingot"
              },
            ]
          },
          {
            "type": "fillArea",
            "area": 1,
            "blocks": [
              {
                "block": "minecraft:snow_layer",
                "replacedWith": "minecraft:air"
              },
              {
                "block": "minecraft:snow",
                "replacedWith": "minecraft:flowing_water"
              },
              {
                "block": "minecraft:ice",
                "replacedWith": "minecraft:flowing_water"
              },
              {
                "block": "minecraft:frosted_ice",
                "replacedWith": "minecraft:flowing_water"
              },
              {
                "block": "minecraft:packed_ice",
                "replacedWith": "minecraft:flowing_water"
              },
              {
                "block": "minecraft:blue_ice",
                "replacedWith": "minecraft:flowing_water"
              }
            ]
          }
        ]
      }
    ]
  }, // Heat
  {
    "name": "Frost",
    "mysticName": "Glacie",
    "spellTags": ["projectile", "frost"],
    "xp": 3,
    "vfx": [
      {
        "particle": "bw:gathering_frost",
        "sound": "liquid.water",
        "type": "steady",
        "startStamp": 0,
        "endStamp": 3,
        "offset": {
          "x": 0,
          "y": 0,
          "z": 1.5
        },
        "molang": {
          "velocity": ["view", 0]
        },
        "endPoint": true
      },
    ],
    "cost": {
      "fatigue": 8
    },
    "spellEffects": [
      {
        "trustMin": 1,
        "trustMax": 100,
        "spellArray": [
          {
            "type": "projectile",
            "projectile": "bw:frost_projectile",
            "power": 1
          }
        ]
      }
    ]
  }, // Frost
  {
    "name": "Hail",
    "mysticName": "Glacitempestrus",
    "spellTags": ["rain", "frost"],
    "xp": 7,
    "vfx": [
      {
        "particle": "bw:icy_aoe",
        "sound": "liquid.water",
        "type": "steady",
        "startStamp": 0,
        "endStamp": 16,
        "offset": {
          "x": 0,
          "y": 0,
          "z": 0
        },
        "endPoint": true
      },
    ],
    "cost": {
      "fatigue": 35
    },
    "spellEffects": [
      {
        "trustMin": 1,
        "trustMax": 40,
        "spellArray": [
          {
            "type": "aoe",
            "object": {
              "type": "hail",
              "duration": 20
            }
          }
        ]
      },
      {
        "trustMin": 40.1,
        "trustMax": 80,
        "spellArray": [
          {
            "type": "aoe",
            "object": {
              "type": "hail",
              "duration": 30
            }
          }
        ]
      },
      {
        "trustMin": 80.1,
        "trustMax": 100,
        "spellArray": [
          {
            "type": "aoe",
            "object": {
              "type": "hail",
              "duration": 40
            }
          }
        ]
      }
    ]
  }, // Hail
  {
    "name": "Cool",
    "mysticName": "Friguva",
    "spellTags": ["self", "frost", "water"],
    "xp": 0,
    "vfx": [
      {
        "particle": "bw:cool_interact",
        "sound": "liquid.water",
        "type": "steady",
        "startStamp": 0,
        "endStamp": 8,
        "offset": {
          "x": 0,
          "y": 0,
          "z": 0
        },
        "molang": {
          "seeLocation": true,
          "range": 4
        },
        "endPoint": true
      },
    ],
    "cost": {
      "fatigue": 1
    },
    "spellEffects": [
      {
        "trustMin": 1,
        "trustMax": 65,
        "spellArray": [
          {
            "type": "fillArea",
            "area": 1,
            "blocks": [
              {
                "block": "minecraft:water",
                "replacedWith": "minecraft:ice"
              },
              {
                "block": "minecraft:flowing_water",
                "replacedWith": "minecraft:ice"
              }
            ]
          }
        ]
      },
      {
        "trustMin": 65.1,
        "trustMax": 100,
        "spellArray": [
          {
            "type": "fillArea",
            "area": 2,
            "blocks": [
              {
                "block": "minecraft:water",
                "replacedWith": "minecraft:ice"
              },
              {
                "block": "minecraft:flowing_water",
                "replacedWith": "minecraft:ice"
              },
              {
                "block": "minecraft:lava",
                "replacedWith": "minecraft:magma"
              },
              {
                "block": "minecraft:flowing_lava",
                "replacedWith": "minecraft:magma"
              }
            ]
          }
        ]
      }
    ]
  }, // Cool
  {
    "name": "Splash",
    "mysticName": "Aguavie",
    "spellTags": ["projectile", "water"],
    "xp": 4,
    "vfx": [
      {
        "particle": "bw:bubble_disc_burst",
        "sound": "liquid.water",
        "type": "instant",
        "startStamp": 2,
        "offset": {
          "x": 0,
          "y": 0,
          "z": 1.5
        },
        "molang": {
          "velocity": ["view", 0]
        },
        "endPoint": true
      }
    ],
    "detectItem": "minecraft:water_bucket",
    "detectWater": true,
    "cost": {
      "fatigue": 8
    },
    "spellEffects": [
      {
        "trustMin": 1,
        "trustMax": 100,
        "spellArray": [
          {
            "type": "projectile",
            "projectile": "bw:splash",
            "power": 1
          }
        ]
      }
    ]
  }, // Splash
  {
    "name": "Vodyan Blessing",
    "mysticName": "Vodyan Benecari",
    "spellTags": ["self", "water", "effect"],
    "xp": 5,
    "vfx": [
      {
        "particle": "bw:bubble_charge",
        "sound": "liquid.water",
        "type": "steady",
        "startStamp": 0,
        "endStamp": 16,
        "offset": {
          "x": 0,
          "y": 0,
          "z": 0
        },
        "endPoint": true
      },
    ],
    "detectItem": "minecraft:water_bucket",
    "detectWater": true,
    "cost": {
      "fatigue": 25
    },
    "spellEffects": [
      {
        "trustMin": 1,
        "trustMax": 30,
        "spellArray": [
          {
            "type": "potion_effect",
            "effect": "strength",
            "duration": 30,
            "amplifier": 0,
            "hideParticle": true
          },
          {
            "type": "potion_effect",
            "effect": "speed",
            "duration": 30,
            "amplifier": 0,
            "hideParticle": true
          },
          {
            "type": "potion_effect",
            "effect": "water_breathing",
            "duration": 60,
            "amplifier": 0,
            "hideParticle": true
          }
        ]
      },
      {
        "trustMin": 30.1,
        "trustMax": 75,
        "spellArray": [
          {
            "type": "potion_effect",
            "effect": "strength",
            "duration": 45,
            "amplifier": 0,
            "hideParticle": true
          },
          {
            "type": "potion_effect",
            "effect": "speed",
            "duration": 45,
            "amplifier": 1,
            "hideParticle": true
          },
          {
            "type": "potion_effect",
            "effect": "water_breathing",
            "duration": 75,
            "amplifier": 0,
            "hideParticle": true
          }
        ]
      },
      {
        "trustMin": 75.1,
        "trustMax": 100,
        "spellArray": [
          {
            "type": "potion_effect",
            "effect": "strength",
            "duration": 60,
            "amplifier": 1,
            "hideParticle": true
          },
          {
            "type": "potion_effect",
            "effect": "speed",
            "duration": 60,
            "amplifier": 2,
            "hideParticle": true
          },
          {
            "type": "potion_effect",
            "effect": "water_breathing",
            "duration": 90,
            "amplifier": 0,
            "hideParticle": true
          }
        ]
      }
    ]
  }, // Vodyan Blessing
  {
    "name": "Mist",
    "mysticName": "Vonebucare",
    "spellTags": ["mist", "water"],
    "xp": 5,
    "vfx": [
      {
        "particle": "bw:mist_charge",
        "sound": "liquid.water",
        "type": "steady",
        "startStamp": 0,
        "endStamp": 12,
        "offset": {
          "x": 0,
          "y": 0,
          "z": 0
        },
        "endPoint": true
      },
    ],
    "cost": {
      "fatigue": 25
    },
    "spellEffects": [
      {
        "trustMin": 1,
        "trustMax": 40,
        "spellArray": [
          {
            "type": "aoe",
            "object": {
              "type": "mist",
              "duration": 15
            }
          }
        ]
      },
      {
        "trustMin": 40.1,
        "trustMax": 80,
        "spellArray": [
          {
            "type": "aoe",
            "object": {
              "type": "mist",
              "duration": 25
            }
          }
        ]
      },
      {
        "trustMin": 80.1,
        "trustMax": 100,
        "spellArray": [
          {
            "type": "aoe",
            "object": {
              "type": "mist",
              "duration": 40
            }
          }
        ]
      }
    ]
  }, // Mist
  {
    "name": "Return",
    "mysticName": "Reduno",
    "spellTags": ["self", "magic", "teleport"],
    "xp": 4,
    "vfx": [
      {
        "particle": "bw:soul_wisp_flame",
        "sound": "fire.fire",
        "type": "steady",
        "startStamp": 0,
        "endStamp": 23,
        "offset": {
          "x": 0,
          "y": 0,
          "z": 0
        }
      },
      {
        "particle": "bw:soul_wisp_apparate",
        "sound": "fire.ignite",
        "type": "instant",
        "startStamp": 24,
        "offset": {
          "x": 0,
          "y": 0,
          "z": 0
        },
        "endPoint": true
      }
    ],
    "cost": {
      "fatigue": 20
    },
    "spellEffects": [
      {
        "trustMin": 1,
        "trustMax": 100,
        "spellArray": [
          {
            "type": "homeTeleport"
          }
        ]
      }
    ]
  }, // Return
  {
    "name": "Direct",
    "mysticName": "Dux",
    "spellTags": ["magic", "knowledge"],
    "xp": 2,
    "vfx": [
      {
        "particle": "bw:soul_wisp_flame",
        "sound": "fire.fire",
        "type": "steady",
        "startStamp": 0,
        "endStamp": 20,
        "offset": {
          "x": 0,
          "y": 0,
          "z": 0
        },
        "molang": {
          "velocity": ["view", 0]
        },
        "endPoint": true
      },
    ],
    "cost": {
      "fatigue": 10
    },
    "spellEffects": [
      {
        "trustMin": 1,
        "trustMax": 100,
        "spellArray": [
          {
            "type": "directSpell"
          }
        ]
      }
    ]
  }, // Direct
  {
    "name": "Magic Missile",
    "mysticName": "Sagiruptus",
    "spellTags": ["magic", "offense"],
    "xp": 1,
    "vfx": [
      {
        "particle": "bw:missile_charge",
        "sound": "fire.fire",
        "type": "steady",
        "startStamp": 0,
        "endStamp": 5,
        "offset": {
          "x": 0,
          "y": 0,
          "z": 1.5
        }
      },
      {
        "particle": "bw:missile_charge_burst",
        "sound": "fire.ignite",
        "type": "instant",
        "startStamp": 6,
        "offset": {
          "x": 0,
          "y": 0,
          "z": 1.5
        },
        "molang": {
          "velocity": ["view", 0]
        },
        "endPoint": true
      }
    ],
    "cost": {
      "fatigue": 5
    },
    "spellEffects": [
      {
        "trustMin": 1,
        "trustMax": 100,
        "spellArray": [
          {
            "type": "burst_projectile",
            "projectile": "bw:magic_missile",
            "power": 1
          }
        ]
      }
    ]
  }, // Magic Missile
];