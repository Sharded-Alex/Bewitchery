export const information = {
  "mainPage": {
    "title": "Book of the Wilds",
    "obfuscated": {
      "tagException": ["know:GreaterFae"]
    },
    "body": "Welcome, wandering witch, to the very start of your journey. The contents of this book hold most of the answers to the illusive arts of Fae Magick. After all, through what other means could you possibly perform such wonders of grandeur?\n\nThis is a guide and it should be treated as such but that shouldn't stop you from having fun! Fashion potions of varied effects from mundane items. Use ancient magickal runes and geometries to call down the aid of Greater Fae (like myself :D), and even call down the esoteric aid of the Fae to saturate you with magickal knowledge and power! There are many things that await you within these hidden pages.\n\nThis book is yours and so is the power within it, little Witch. May /-Equin/_ guide you on your dance through the Wild Wood.\n\n",
    "buttons": [
      {
        "buttonName": "Using this Book",
        "buttonIcon": "",
        "excludeTags": ["BWtutorial:info"],
        "onClick": [
          {
            "type": "openForm",
            "form": "book.tutorial"
          }
        ]
      },
      {
        "buttonName": "Magickal Fundamentals",
        "buttonIcon": "",
        "buttonTagRequirements": ["BWtutorial:info"],
        "onClick": [
          {
            "type": "openForm",
            "form": "book.fundamentals"
          }
        ]
      },
      {
        "buttonName": "Alchemy",
        "buttonIcon": "textures/items/bottles/strange_potion",
        "buttonTagRequirements": ["alchemy:info"],
        "onClick": [
          {
            "type": "openForm",
            "form": "book.alchemy"
          }
        ]
      },
      {
        "buttonName": "Ceremony",
        "buttonIcon": "textures/blocks/polished_andesite",
        "buttonTagRequirements": ["ceremony:info"],
        "onClick": [
          {
            "type": "openForm",
            "form": "book.ceremony"
          }
        ]
      },
      {
        "buttonName": "Close",
        "buttonIcon": ""
      }
    ]
  },
  "book.tutorial": {
    "title": "Using this Book",
    "obfuscated": {
      "tagException": ["know:GreaterFae"]
    },
    "body": "§oIf you have found yourself on this page, read it. If you must leave it for later, click the \"Close\" button. Clicking the \"Book of the Wilds\" button WILL erase this page and begin your journey.§r\n\nAs you can see, there is nothing in this book. However, do not despair just yet.\n\nYou can add content to this book by simply doing your best to follow the instructions it provides. With an §doffering§r or two, I might even grant you a few pages myself but I digress.\n\nI will tell you this though. If you see §ditem or block names in gold§r anywhere in this book, chances are that you'll need that item or block in your inventory when browsing that page.\n\nFinally, there might be times where information may randomly pop up in this book regarding magicks not normally of the Wild Wood. Take it as my gift to you. I, /-Hebaya/_, Hag of the Night, Witch of the Wood, am watching you, little Witch.\n\n",
    "buttons": [
      {
        "buttonName": "Book of the Wilds",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "addTag",
            "tag": "BWtutorial:info"
          },
          {
            "type": "openForm",
            "form": "mainPage"
          }
        ]
      },
      {
        "buttonName": "Close",
        "buttonIcon": ""
      }
    ]
  },
  "book.fundamentals": {
    "title": "Magickal Fundamental",
    "body": "Magick is something all fae creatures have in some capacity. However, this is not true for the majority of players that practice it. They are not weaker for it though, because witches exemplify the power of a blank canvas. By making use of crafting blocks, magickal tools, spiritual connections, and sorcerous boons, they are able to become powerful and formidable.\n\nIn this section, crafting blocks and important magickal tools will be our focus.\n\n",
    "buttons": [
      {
        "buttonName": "Natural Ash",
        "buttonIcon": "textures/items/dusts/natural_ash",
        "onClick": [
          {
            "type": "openForm",
            "form": "crafting.saplingAsh"
          }
        ]
      },
      {
        "buttonName": "Mortar & Pestle",
        "buttonIcon": "textures/items/tools/mortar_and_pestle",
        "buttonTagRequirements": ["know:naturalDust"],
        "onClick": [
          {
            "type": "openForm",
            "form": "crafting.mortarPestle"
          }
        ]
      },
      {
        "buttonName": "Athame",
        "buttonIcon": "textures/items/tools/witch_athame",
        "buttonTagRequirements": ["know:naturalDust"],
        "onClick": [
          {
            "type": "openForm",
            "form": "crafting.athame"
          }
        ]
      },
      {
        "buttonName": "Witch's Workbench",
        "buttonIcon": "textures/blocks/witch_table/witch_table_side",
        "buttonTagRequirements": ["know:naturalDust"],
        "onClick": [
          {
            "type": "openForm",
            "form": "crafting.workbench"
          }
        ]
      },
      {
        "buttonName": "Witch's Cauldron",
        "buttonIcon": "textures/blocks/cauldron_side",
        "buttonTagRequirements": ["know:naturalDust"],
        "onClick": [
          {
            "type": "openForm",
            "form": "crafting.cauldron"
          }
        ]
      },
      {
        "buttonName": "Crystal Ball",
        "buttonIcon": "textures/blocks/glass_light_blue",
        "buttonTagRequirements": ["know:naturalDust"],
        "onClick": [
          {
            "type": "openForm",
            "form": "crafting.crystalBall"
          }
        ]
      },
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "mainPage"
          }
        ]
      }
    ]
  },
  "book.alchemy": {
    "title": "Alchemy",
    "body": "§oThe art of combining magickal energies acquired from ingredients to create a new magickal solution.§r\n\nThe process of witchy alchemy is easy enough to grasp, but crafting a potion specifically for your needs can be a tricky thing to do without a recipe. After all, only you know what sort of potion you need. Thankfully, you have my guidance in this ingredient-focused affair!\n\n",
    "buttons": [
      {
        "buttonName": "Steps to Brewing",
        "buttonIcon": "textures/blocks/cauldron_side",
        "onClick": [
          {
            "type": "addTag",
            "tag": "alchemy:effectTypeTab"
          },
          {
            "type": "openForm",
            "form": "alchemy.brewing"
          }
        ]
      },
      {
        "buttonName": "Main & Aid Effects",
        "buttonIcon": "textures/blocks/cauldron_side",
        "buttonTagRequirements": ["alchemy:effectTypeTab"],
        "onClick": [
          {
            "type": "openForm",
            "form": "alchemy.effectTypeTab"
          }
        ]
      },
      {
        "buttonName": "A Strange Brew",
        "buttonIcon": "textures/blocks/cauldron_side",
        "buttonTagRequirements": ["alchemy:effectTypeTab"],
        "onClick": [
          {
            "type": "addTag",
            "tag": "ceremony:info"
          },
          {
            "type": "openForm",
            "form": "alchemy.strangePotions"
          }
        ]
      },
      {
        "buttonName": "Ingredient List",
        "buttonIcon": "textures/blocks/cauldron_side",
        "buttonTagRequirements": ["alchemy:effectTypeTab"],
        "onClick": [
          {
            "type": "openForm",
            "form": "alchemy.ingredientHub"
          }
        ]
      },
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "mainPage"
          }
        ]
      }
    ]
  },
  "book.ceremony": {
    "title": "Ceremony",
    "body": "§oThe art that places importance on specific circles, symbols and necessary items to generate magickal effects.§r\n\nCeremony is the most magickally intense aspect of witchcraft and the most important for progression. However, the power you will gain over the world around you or yourself is worth it, in my honest opinion.\n\n",
    "buttons": [
      {
        "buttonName": "Ceremonies 101",
        "buttonIcon": "textures/blocks/dirt",
        "onClick": [
          {
            "type": "addTag",
            "tag": "ceremony:circles"
          },
          {
            "type": "addTag",
            "tag": "circle:urricanSpiral"
          },
          {
            "type": "openForm",
            "form": "ceremony.intro"
          }
        ]
      },
      {
        "buttonName": "Runic Circles",
        "buttonIcon": "textures/blocks/dirt",
        "buttonTagRequirements": ["ceremony:circles"],
        "onClick": [
          {
            "type": "openForm",
            "form": "ceremony.circles"
          }
        ]
      },
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "mainPage"
          }
        ]
      }
    ]
  },
  
  "crafting.saplingAsh": {
    "title": "Natural Ash",
    "body": "§2Natural Ash§r is an important part of basic witchcraft. Although it is easily accessible, a lot of crafting benches and important ceremonies use this item. It is created by \"smelting\" saplings in a furnace or on a campfire.\n\n§3Acquire §g4 Natural Ash§3.\n\n",
    "buttons": [
      {
        "buttonName": "Give Item(s)",
        "buttonIcon": "textures/items/dusts/natural_ash",
        "excludeTags": ["know:naturalDust"],
        "requiredItem": {
          "item": "bw:natural_ash",
          "amount": 4
        },
        "onClick": [
          {
            "type": "giveXP",
            "amount": 8
          },
          {
            "type": "addTag",
            "tag": "know:naturalDust"
          },
          {
            "type": "sayInfo",
            "info": "You've understood the secrets of §a[Natural Ash]§r!"
          }
        ]
      },
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "book.fundamentals"
          }
        ]
      }
    ]
  },
  "crafting.workbench": {
    "title": "Witch's Workbench",
    "body": "The §3witch's workbench§r is something of a magical crafting table. This is a witch's best friend, as there are quite a few items that can only be crafted within it.\n\nIt is created by sprinkling some §2Natural Ash§r on a Crafting Table while sneaking.",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "book.fundamentals"
          }
        ]
      }
    ]
  },
  "crafting.cauldron": {
    "title": "Witch's Cauldron",
    "body": "The §3witch's cauldron§r is exactly what it sounds like. It allows a witch to brew various potions. Unlike the normal Brewing Stand, this tool is used to craft more specialized potions with effects based on the ingredients used.\n\nIt is created by sprinkling some §2Natural Ash§r on a Cauldron.",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "addTag",
            "tag": "alchemy:info"
          },
          {
            "type": "openForm",
            "form": "book.fundamentals"
          }
        ]
      }
    ]
  },
  "crafting.crystalBall": {
    "title": "Crystal Ball",
    "body": "The §3crystal ball§r is an arcane device used to try and glean the future. Divination is a powerful aid if the right fortune is obtained. All I suggest is to be careful to not bind yourself to what you see.\n\nIt can be crafted in the Witch's Workbench.",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "book.fundamentals"
          }
        ]
      }
    ]
  },
  "crafting.mortarPestle": {
    "title": "Mortar & Pestle",
    "body": "The §3mortar & pestle§r is a tool used to crush down certain flowers and minerals into dust. It sounds boring but you'll need this item at some point.\n\nIt can be crafted in the Witch's Workbench.",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "book.fundamentals"
          }
        ]
      }
    ]
  },
  "crafting.athame": {
    "title": "Athame",
    "body": "The §3athame§r is an iron knife designed to cut. It does not do much damage, but that is not its main use. It is designed to collect blood and sever fragments of undead souls for magickal purposes.\n\nIt can be crafted in the Witch's Workbench.",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "book.fundamentals"
          }
        ]
      }
    ]
  },
  
  "alchemy.brewing": {
    "title": "Steps to Brewing",
    "body": "The easiest part of utilizing alchemy is the actual brewing of potions. There are a few basic things you will need though, and they are a §3Witch's Cauldron§r, some ingredients, and a §3Water Bucket§r.\n\nA witch's cauldron must be filled for anything to be done with it. This is done by interacting with it using a Water Bucket.\n\nAfter this is done, valid ingredients can be put into the cauldron. Each ingredient added will take 3 seconds to brew before another one can be added. This can be seen when the cauldron releases steam.\n\nBrewing this way allows you to add up to 3 ingredients, each trying to affect the result in different ways. To view the effects inside the pot, simply use a §3Wooden Spoon§r on it. This can be done at any point in the alchemical process.\n\nFinally, bottling this solution is done with a Glass Bottle. Doing this will yield a §3Strange Potion§r with the potion effects that you've combined.\n\nAnd there you have it! Easy to grasp, I'm sure. Now you can move on to the more complex aspects of Alchemy.\n\n",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "book.alchemy"
          }
        ]
      }
    ]
  },
  "alchemy.effectTypeTab": {
    "title": "Main & Aid Effects",
    "body": "These are very important things to keep in mind when playing around with effects.\n\n§lMain Effects§r\nThe §3main effects§r of a potion are decided by the very first ingredient that is placed into the cauldron. Different ingredients have different main effects, making it easier or harder to achieve certain effects.\n\n§oAll ingredients after the first provide the potion with their aid effects.§r\n\n§lAid Effects§r\nThe §3aid effects§r of a potion affect the main effects. There are different types of aid effects, and they each affect certain potion effects.\n\n§lAmplifiers§r - Amplifies valid effects, raising the effects power by 1, up to a maximum of 3.\n§lExtenders§r - Extends the duration of valid effects.\n§lCorruptors§r - Corrupts valid effects to their corrupted variants, eg. Regeneration => Poison.\n§lNullifiers§r - Nullifies valid effects, removing them entirely from the potion.\n\nMain Effects are simple things to uncover, but aid effects are harder to discern. It will take a while to document them all on your own but information can be found and the plants know more than you think.\n\n",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "book.alchemy"
          }
        ]
      }
    ]
  },
  "alchemy.strangePotions": {
    "title": "A Strange Brew",
    "body": "When you brew your first potion using alchemy, you'll notice that you'll recieve an unstackable item called a §3Strange Potion§r. This is the form your brewed potion will take when you bottle it. This potion can be used up to 5 times. When the last charge is used, it becomes an empty bottle.\n\nStrange Potions can also be \"splashed\" on entities you hit while holding them. This gives the victim the effects of that potion and uses up a potion charge.\n\nThere is no splash variant of strange potions; however, I'm sure I could provide you with a spell that could help with that issue.\n\n",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "book.alchemy"
          }
        ]
      }
    ]
  },
  "alchemy.ingredientHub": {
    "title": "Ingredient List",
    "body": "This chapter has information about every item that can be used for alchemical purposes. However, exploration and divination must be done to unlock all the knowledge held within these entries. Good luck.\n\n",
    "buttons": [
      {
        "buttonName": "Crushed Dandelion",
        "buttonIcon": "textures/items/dusts/dandelion_dust",
        "onClick": [
          {
            "type": "openForm",
            "form": "ingredient.dandelion"
          }
        ]
      },
      {
        "buttonName": "Crushed Poppy",
        "buttonIcon": "textures/items/dusts/poppy_dust",
        "onClick": [
          {
            "type": "openForm",
            "form": "ingredient.poppy"
          }
        ]
      },
      {
        "buttonName": "Crushed Blue Orchid",
        "buttonIcon": "textures/items/dusts/azure_bluet_dust",
        "onClick": [
          {
            "type": "openForm",
            "form": "ingredient.blue_orchid"
          }
        ]
      },
      {
        "buttonName": "Crushed Cornflower",
        "buttonIcon": "textures/items/dusts/cornflower_dust",
        "onClick": [
          {
            "type": "openForm",
            "form": "ingredient.cornflower"
          }
        ]
      },
      {
        "buttonName": "Crushed Oxeye Daisy",
        "buttonIcon": "textures/items/dusts/oxeye_daisy_dust",
        "onClick": [
          {
            "type": "openForm",
            "form": "ingredient.oxeye_daisy"
          }
        ]
      },
      {
        "buttonName": "Fermented Spider Eye",
        "buttonIcon": "textures/items/spider_eye_fermented",
        "onClick": [
          {
            "type": "openForm",
            "form": "ingredient.fermented_spider_eye"
          }
        ]
      },
      {
        "buttonName": "Wither Rose",
        "buttonIcon": "textures/blocks/flower_wither_rose",
        "onClick": [
          {
            "type": "openForm",
            "form": "ingredient.wither_rose"
          }
        ]
      },
      {
        "buttonName": "Crushed Coal",
        "buttonIcon": "textures/items/dusts/coal_dust",
        "onClick": [
          {
            "type": "openForm",
            "form": "ingredient.coal_dust"
          }
        ]
      },
      {
        "buttonName": "Crushed Amethyst",
        "buttonIcon": "textures/items/dusts/ender_dust",
        "onClick": [
          {
            "type": "openForm",
            "form": "ingredient.amethyst_dust"
          }
        ]
      },
      {
        "buttonName": "Feather",
        "buttonIcon": "textures/items/feather",
        "onClick": [
          {
            "type": "openForm",
            "form": "ingredient.feather"
          }
        ]
      },
      {
        "buttonName": "Phantom Membrane",
        "buttonIcon": "textures/items/phantom_membrane",
        "onClick": [
          {
            "type": "openForm",
            "form": "ingredient.phantom_membrane"
          }
        ]
      },
      {
        "buttonName": "Gold Ingot",
        "buttonIcon": "textures/items/gold_ingot",
        "onClick": [
          {
            "type": "openForm",
            "form": "ingredient.gold_ingot"
          }
        ]
      },
      {
        "buttonName": "Iron Ingot",
        "buttonIcon": "textures/items/iron_ingot",
        "onClick": [
          {
            "type": "openForm",
            "form": "ingredient.iron_ingot"
          }
        ]
      },
      {
        "buttonName": "Scute",
        "buttonIcon": "textures/items/turtle_shell_piece",
        "onClick": [
          {
            "type": "openForm",
            "form": "ingredient.scute"
          }
        ]
      },
      {
        "buttonName": "Prismarine Crystals",
        "buttonIcon": "textures/items/prismarine_crystals",
        "onClick": [
          {
            "type": "openForm",
            "form": "ingredient.prismarine_crystals"
          }
        ]
      },
      {
        "buttonName": "Nautilus Shell",
        "buttonIcon": "textures/items/nautilus",
        "onClick": [
          {
            "type": "openForm",
            "form": "ingredient.nautilus_shell"
          }
        ]
      },
      {
        "buttonName": "Ghast Tear",
        "buttonIcon": "textures/items/ghast_tear",
        "onClick": [
          {
            "type": "openForm",
            "form": "ingredient.ghast_tear"
          }
        ]
      },
      {
        "buttonName": "Echo Shard",
        "buttonIcon": "textures/items/echo_shard",
        "onClick": [
          {
            "type": "openForm",
            "form": "ingredient.echo_shard"
          }
        ]
      },
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "book.alchemy"
          }
        ]
      }
    ]
  },
  
  "ingredient.dandelion": {
    "title": "Crushed Dandelion",
    "body": "A yellow dust produced by crushing dandelions and natural ash together in a Witch's Workbench using a Mortar & Pestle.\n\n§lMain Effects§r\nSaturation I (0:02)\nSpeed I (1:00)\n\n§lAid Effects§r\nType: §oAmplifier§r\nAffected Effects: §oSpeed, Haste, Levitation§r\n\n",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "alchemy.ingredientHub"
          }
        ]
      }
    ]
  },
  "ingredient.poppy": {
    "title": "Crushed Poppy",
    "body": "A reddish dust produced by crushing poppies and natural ash together in a Witch's Workbench using a Mortar & Pestle.\n\n§lMain Effects§r\nNight Vision I (1:00)\nNausea II (0:30)\nRegeneration I (0:30)\n\n§lAid Effects§r\nType: §oExtender§r\nAffected Effects: §oAbsorption, Regeneration, Weakness, Nausea§r\nExtend By: 40 seconds\n\n",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "alchemy.ingredientHub"
          }
        ]
      }
    ]
  },
  "ingredient.blue_orchid": {
    "title": "Crushed Blue Orchid",
    "body": "A light blue dust produced by crushing blue orchids and natural ash together in a Witch's Workbench using a Mortar & Pestle.\n\n§lMain Effects§r\nSaturation II (0:03)\nSlowness II (0:45)\nLevitation I (0:30)\n\n§lAid Effects§r\nType: §oNullifier§r\nAffected Effects: §oSlowness, Weakness§r\n\n",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "alchemy.ingredientHub"
          }
        ]
      }
    ]
  },
  "ingredient.cornflower": {
    "title": "Crushed Cornflower",
    "body": "A blue dust produced by crushing cornflowers and natural ash together in a Witch's Workbench using a Mortar & Pestle.\n\n§lMain Effects§r\nJump Boost II (1:00)\nWeakness I (1:00)\nSlow Falling I (1:00)\n\n§lAid Effects§r\nType: §oExtender§r\nAffected Effects: §oSlowness, Weakness, Slow Falling, Mining Fatigue§r\nExtend By: 90 seconds\n\n",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "alchemy.ingredientHub"
          }
        ]
      }
    ]
  },
  "ingredient.oxeye_daisy": {
    "title": "Crushed Oxeye Daisy",
    "body": "A light grayish dust produced by crushing oxeye daisies and natural ash together in a Witch's Workbench using a Mortar & Pestle.\n\n§lMain Effects§r\nRegeneration I (0:50)\nWeakness II (0:40)\n\n§lAid Effects§r\nType: §oAmplifier§r\nAffected Effects: §oRegeneration, Instant Health, Slowness, Weakness§r\n\n",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "alchemy.ingredientHub"
          }
        ]
      }
    ]
  },
  "ingredient.fermented_spider_eye": {
    "title": "Fermented Spider Eye",
    "obfuscated": {
      "tagException": ["alchemy:spiderEye_fermented"]
    },
    "body": "The eye of a spider mixed with various other ingredients to ferment it. It is generally used in more poisonous mixes.\n\n§lMain Effects§r\nPoison II (0:30)\nWeakness II (0:30)\n\n§lAid Effects§r\nType: /-§oCorruptor§r/_\nAffected Effects: /-§oRegeneration, Instant Health, Strength, Haste, Levitation§r/_\n\n",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "alchemy.ingredientHub"
          }
        ]
      }
    ]
  },
  "ingredient.wither_rose": {
    "title": "Wither Rose",
    "obfuscated": {
      "tagException": ["alchemy:witherRose"]
    },
    "body": "This black rose withers anything it touches. It is a very sinister ingredient for a very sinister potion.\n\n§lMain Effects§r\nWither II (0:15)\n/-Instant Damage I/_\n\n§lAid Effects§r\nType: /-§oExtender§r/_\nAffected Effects: /-§oWither, Poison§r/_\n/-Extend By: 15 seconds/_\n\n",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "alchemy.ingredientHub"
          }
        ]
      }
    ]
  },
  "ingredient.coal_dust": {
    "title": "Crushed Coal",
    "obfuscated": {
      "tagException": ["alchemy:coalDust"]
    },
    "body": "This is coal that has been crushed finely using a Mortar & Pestle in the Witch's Workbench.\n\n§lMain Effects§r\nBlindness I (0:45)\nDarkness I (0:30)\n\n§lAid Effects§r\nType: /-§oNullifier§r/_\nAffected Effects: /-§oWither, Poison§r/_\n\n",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "alchemy.ingredientHub"
          }
        ]
      }
    ]
  },
  "ingredient.amethyst_dust": {
    "title": "Amethyst Shard",
    "obfuscated": {
      "tagException": ["alchemy:amethystShard"]
    },
    "body": "This is created when an amethyst shard is crushed finely using a Mortar & Pestle in the Witch's Workbench.\n\n§lMain Effects§r\nHaste II (1:00)\nSlowness I (0:45)\n\n§lAid Effects§r\nType: /-§oAmplifier§r/_\nAffected Effects: /-§oMining Fatigue, Jump Boost, Speed§r/_\n\n",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "alchemy.ingredientHub"
          }
        ]
      }
    ]
  },
  "ingredient.feather": {
    "title": "Feather",
    "obfuscated": {
      "tagException": ["alchemy:feather"]
    },
    "body": "A simple feather collected from a bird.\n\n§lMain Effects§r\nSlow Falling I (1:30)\nLevitation I (0:20)\nSlowness I (1:30)\n\n§lAid Effects§r\nType: /-§oAmplifier§r/_\nAffected Effects: /-§oJump Boost, Levitation, Slowness§r/_\n\n",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "alchemy.ingredientHub"
          }
        ]
      }
    ]
  },
  "ingredient.phantom_membrane": {
    "title": "Phantom Membrane",
    "obfuscated": {
      "tagException": ["alchemy:phantomMembrane"]
    },
    "body": "A stringy membrane cut from phantoms... or you could just get a cat. They supply them just as well.\n\n§lMain Effects§r\nSlow Falling I (1:30)\nNight Vision I (1:30)\nPoison I (0:30)\n\n§lAid Effects§r\nType: /-§oExtender§r/_\nAffected Effects: /-§oJump Boost, Slow Falling§r/_\n/-Extend By: 45 seconds/_\n\n",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "alchemy.ingredientHub"
          }
        ]
      }
    ]
  },
  "ingredient.gold_ingot": {
    "title": "Gold Ingot",
    "obfuscated": {
      "tagException": ["alchemy:goldIngot"]
    },
    "body": "The main metal of the Nether. While it isn't used for very much, it does have some magical properties that make it great for alchemy.\n\n§lMain Effects§r\n/-Absorption I (1:00)/_\n/-Resistance I (1:00)/_\n/-Slowness II (1:45)/_\n\n§lAid Effects§r\nType: /-§oCorruptor§r/_\nAffected Effects: /-§oWeakness, Poison, Slowness§r/_\n\n",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "alchemy.ingredientHub"
          }
        ]
      }
    ]
  },
  "ingredient.iron_ingot": {
    "title": "Iron Ingot",
    "obfuscated": {
      "tagException": ["alchemy:ironIngot"]
    },
    "body": "A common and important metal of the Overworld. It may not be the most magical but it does have some use in alchemy.\n\n§lMain Effects§r\n/-Resistancs I (0:30)/_\n/-Strength I (0:40)/_\n/-Slowness II (1:00)/_\n\n§lAid Effects§r\nType: /-§oExtender§r/_\nAffected Effects: /-§oResistance, Strength, Slowness§r/_\n/-Extend By: 1 minute/_\n\n",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "alchemy.ingredientHub"
          }
        ]
      }
    ]
  },
  "ingredient.scute": {
    "title": "Scute",
    "obfuscated": {
      "tagException": ["alchemy:scute"]
    },
    "body": "A rare item only obtained through the growth of baby turtles. Because of that, it has strong aquatic properties.\n\n§lMain Effects§r\nWater Breathing I (1:30)\nSpeed I (1:30)\n\n§lAid Effects§r\nType: /-§oAmplifier§r/_\nAffected Effects: /-§oResistance, Absorption, Slowness§r/_\n\n",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "alchemy.ingredientHub"
          }
        ]
      }
    ]
  },
  "ingredient.prismarine_crystals": {
    "title": "Prismarine Crystals",
    "obfuscated": {
      "tagException": ["alchemy:prismarineCrystals"]
    },
    "body": "An underwater mineral that is deeply connected to the Gaurdians. No one knows how they formed, but the fact remains they have some kind of magickal power.\n\n§lMain Effects§r\nConduit Power I (1:15)\nMining Fatigue I (1:15)\n\n§lAid Effects§r\nType: /-§oCorruptor§r/_\nAffected Effects: /-§oHaste, Speed, Instant Health, Regeneration§r/_\n\n",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "alchemy.ingredientHub"
          }
        ]
      }
    ]
  },
  "ingredient.nautilus_shell": {
    "title": "Nautilus Shell",
    "obfuscated": {
      "tagException": ["alchemy:nautilusShell"]
    },
    "body": "Mysterious shells that are rarely fished up, or found in the hands of Drowneds and Wandering Traders.\n\n§lMain Effects§r\nWater Breathing I (1:00)\nSpeed II (0:45)\nHealth Boost I (1:00)\n\n§lAid Effects§r\nType: /-§oNullifier§r/_\nAffected Effects: /-§oMining Fatigue, Wither, Absorption§r/_\n\n",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "alchemy.ingredientHub"
          }
        ]
      }
    ]
  },
  "ingredient.ghast_tear": {
    "title": "Ghast Tear",
    "obfuscated": {
      "tagException": ["alchemy:ghastTear"]
    },
    "body": "An item of the Nether. It drops from Ghasts when they are killed, and is well-known for its superior healing capabilities.\n\n§lMain Effects§r\nRegeneration II (1:00)\nHealth Boost II (0:45)\nInstant Health I\n\n§lAid Effects§r\nType: /-§oCorruptor§r/_\nAffected Effects: /-§oMining Fatigue, Wither, Slowness, Weakness, Instant Damage§r/_\n\n",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "alchemy.ingredientHub"
          }
        ]
      }
    ]
  },
  "ingredient.echo_shard": {
    "title": "Echo Shard",
    "obfuscated": {
      "tagException": ["alchemy:echoShard"]
    },
    "body": "An alien item that is found underground within the Deep Dark. It emanates eldritch magick.\n\n§lMain Effects§r\nDarkness I (1:30)\nWeakness II (0:45)\n\n§lAid Effects§r\nType: /-§oAmplifier§r/_\nAffected Effects: /-§oWeakness, Blindness, Darkness§r/_\n\n",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "alchemy.ingredientHub"
          }
        ]
      }
    ]
  },
  
  "ceremony.intro": {
    "title": "Ceremonies 101",
    "body": "There are three (3) things that are absolutely necessary for any ceremonial set-up. They are as follows: Ritual Slates, White Chalk Powder, and Red Chalk Powder.\n\nAfter crafting up a few of these (I suggest you craft alot), you are ready to delve into Ceremonial Magick Theory.\n\n§lRunic Circles§r\nPatterns of inscribed ritual slates surrounding a Central Slate (a ritual slate marked with Red Chalk Powder). Similiar ceremonies tend to use the same runic circle.\n\n§lCeremonial Items§r\nItems thrown in a 3×3 area of the ceremony's Central Slate. They are normally consumed, but there are instances where they aren't.\n\n§lCeremonial Conditions§r\nEnvironmental factors that may change the effects of a ritual. They are generally only seen when a witch is invoking and/or making offerings to spirits.\n\n§lCeremonial Augmenting§r\nA method of increasing the potency of a ceremony. This technique uses lit colored candles directly beside the Central Slate. If a ritual can be augmented, it will tell you what color candles you should use. This part is always optional.\n\n§lActivating Ceremonies§r\nAll that needs to be done is to interact with the Central Slate when all of the required criteria are met. §aKeep in mind that activating a ceremony costs experience.§r\n\nFinally, if you have any questions, the creator's Discord is always open to recieving them. I understand how complex ceremonies can be and so, I have only included a few basic ones for now. Other ceremonies can be found in loot, through divination, or through gifts to certain Greater Fae, myself included.\n\n",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "book.ceremony"
          }
        ]
      }
    ]
  },
  "ceremony.circles": {
    "title": "Runic Circles",
    "body": "This section describes various archaic configurations used to employ various kinds of magick and fae invocations. Simply put, these are extremely simplified magic circles. This page holds all the circles you understand.\n\nThe glyphs beside each runic circle is the layout that needs to be physically built. The red is the Central Slate, while the white represents the other Inscribed Ritual Slates surrounding it.\n\n",
    "buttons": [
      {
        "buttonName": "Mystic Spiral of Urrican",
        "buttonIcon": "textures/form_images/urrican_spiral",
        "buttonTagRequirements": ["circle:urricanSpiral"],
        "onClick": [
          {
            "type": "openForm",
            "form": "circles.urrican"
          }
        ]
      },
      {
        "buttonName": "Crest of Transmutation",
        "buttonIcon": "textures/form_images/transmute_crest",
        "buttonTagRequirements": ["circle:transmutationCrest"],
        "onClick": [
          {
            "type": "openForm",
            "form": "circles.transmuteCrest"
          }
        ]
      },
      {
        "buttonName": "Circle of Purity",
        "buttonIcon": "textures/form_images/cleanse_star",
        "buttonTagRequirements": ["circle:purityCircle"],
        "onClick": [
          {
            "type": "openForm",
            "form": "circles.purityCircle"
          }
        ]
      },
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "book.ceremony"
          }
        ]
      }
    ]
  },
  
  "circle.urrican": {
    "title": "Mystic Spiral of Urrican",
    "obfuscated": {
      "tagException": ["know:GreaterFae"]
    },
    "body": "This runic circle looks very much like a spiral and is used for alot of weather rituals. However, it can also be used to invoke /-Ailill/_ to help with crops.\n\n",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "ceremony.circles"
          }
        ]
      }
    ]
  },
  "circle.transmuteCrest": {
    "title": "Crest of Transmutation",
    "obfuscated": {
      "tagException": ["know:GreaterFae"]
    },
    "body": "Just as the name states, this runic circle is used for transmutation. This mainly only extends to blocks, but it can also be used to do minor divination on ores. It is also one of the simpler runic circle to construct.\n\n",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "ceremony.circles"
          }
        ]
      }
    ]
  },
  "circle.purityCircle": {
    "title": "Circle of Purity",
    "obfuscated": {
      "tagException": ["know:GreaterFae"]
    },
    "body": "A runic circle said to have come from /-Efyrin/_ himself. It is used specifically to burn away maledictions, though it does not always work. However, if you cleanse hard enough, you'll be free of malignant magicks at some point.\n\n",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "",
        "onClick": [
          {
            "type": "openForm",
            "form": "ceremony.circles"
          }
        ]
      }
    ]
  },
};