//Pages
export const formStuff = {
  "bewitched_grimoire_page": {
    "title": "Bewitched Grimoire",
    "body": "The Art of Bewitchery has always been performed within the shadows but a new age has arisen; one of wonder and magick. Within this tome, you will learn all kinds of secrets, some of which may be useful and useless respectively, depending on the player. Whatever you learn (or not) is solely up to you. May your studies be fruitful and the elements be alongside you.",
    "buttons": [
      {
        "buttonName": "Basic Magick",
        "buttonIcon": "textures/items/dusts/natural_ash",
        "onClick": [
          {
            "open_form": true,
            "value": "basic_magic_page"
          }
        ]
      },
      {
        "buttonName": "Advanced Magick",
        "buttonIcon": "textures/items/talismans/soul_fragment",
        "onClick": [
          {
            "open_form": true,
            "value": "advanced_magic_page"
          }
        ]
      },
      {
        "buttonName": "Miscellaneous",
        "buttonIcon": "textures/items/spellbooks/strange_spellbook",
        "onClick": [
          {
            "open_form": true,
            "value": "miscellanous"
          }
        ]
      }
    ]
  },
  "basic_magic_page": {
    "title": "Basic Magick",
    "body": "The best place to start is always from the beginning. From the art of Alchemy and brewing using a §2Witch's Cauldron§r to arranging §2Ritual Slates§r into patterns and performing rituals to casting mystical spells using §2Primal Crystals§r and the environment, there is a lot the average sorcerer/witch can do.\n\nTo get started, you will require a §2Witch's Workbench§r. Most of the new items are craftable there.",
    "buttons": [
      {
        "buttonName": "Alchemy",
        "buttonIcon": "textures/items/cauldron",
        "onClick": [
          {
            "open_form": true,
            "value": "alchemy.basePage"
          }
        ]
      },
      {
        "buttonName": "Rites & Rituals",
        "buttonIcon": "textures/items/chalk/yellow_chalk",
        "onClick": [
          {
            "open_form": true,
            "value": "rituals.basePage"
          }
        ]
      },
      {
        "buttonName": "Primal Magick",
        "buttonIcon": "textures/items/essence/solar_opal",
        "onClick": [
          {
            "open_form": true,
            "value": "spells.basePage"
          }
        ]
      },
      {
        "buttonName": "Back",
        "buttonIcon": "textures/ui/arrow_dark_left_stretch",
        "onClick": [
          {
            "open_form": true,
            "value": "bewitched_grimoire_page"
          }
        ]
      }
    ]
  },
  
  "alchemy.basePage": {
    "title": "Alchemy",
    "body": "Alchemy is a fundamental part of Bewitchery and it is required to do almost everything else. Most other forms of magick require some alchemical component.\n\nTo start off, a player requires a §2Witch's Pot§r, a §2Mortar & Pestle§r and §2Glass Vials/Glass Bottles§r to collect potions with. Within this section, the §2Liber Alchemia§r can be conjured to showcase all discovered brews.\n\nThe following sections will give insight into what each type of brew is as well as their various uses if necessary.",
    "buttons": [
      {
        "buttonName": "Brewing",
        "buttonIcon": "textures/items/cauldron",
        "onClick": [
          {
            "open_form": true,
            "value": "alchemy.brewGuide"
          }
        ]
      },
      {
        "buttonName": "Vial Potions",
        "buttonIcon": "textures/items/potions/water_vial",
        "onClick": [
          {
            "open_form": true,
            "value": "alchemy.vPotionPage"
          }
        ]
      },
      {
        "buttonName": "Elixirs",
        "buttonIcon": "textures/items/potions/elixir_forest",
        "onClick": [
          {
            "open_form": true,
            "value": "alchemy.elixirPage"
          }
        ]
      },
      {
        "buttonName": "Infusions",
        "buttonIcon": "textures/items/flasks/moon_water",
        "onClick": [
          {
            "open_form": true,
            "value": "alchemy.infusionPage"
          }
        ]
      },
      {
        "buttonName": "Conjure Liber Alchemia",
        "buttonIcon": "textures/items/book_written",
        "onClick": [
          {
            "open_form": false,
            "value": "guides/book1"
          }
        ]
      },
      {
        "buttonName": "Back",
        "buttonIcon": "textures/ui/arrow_dark_left_stretch",
        "onClick": [
          {
            "open_form": true,
            "value": "basic_magic_page"
          }
        ]
      }
    ]
  },
  "alchemy.brewGuide": {
    "title": "Brewing",
    "body": "Brewing in Bewitchery is not the same as brewing with a Brewing Stand. However, it is quite a simple process.\n\n§l[Setting Up]§r\nA §2Witch's Pot§r will be needed. As long as it is filled with a §2bucket of water§r, it will do the job. It is also helpful to have a lectern nearby with the book, §2Liber Alchemia§r, open on it. Chests filled with potential materials are also helpful.\n\n§l[Brewing]\n§rBrewing is done simply by putting the materials in the cauldron in the correct order as shown in its recipe.\n\nAfter a material is placed into the filled cauldron, it will need a bit of time to fully brew. §2This can be seen by a puff of white steam§r. When the potion is complete, §2a puff of pinkish steam will rise from the cauldron§r.\n\n§l[Collecting the Brew]§r\nCollecting brews is a simple process. In the cases of §2Vial Potions§r and §2Infusions§r, use Glass Vials. For §2Elixirs§r, Glass Bottles are sufficient. §2Three bottles/vials of potion can be collected from every brewing session§r. Remember to empty the cauldron in preparation for another brew!",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "textures/ui/arrow_dark_left_stretch",
        "onClick": [
          {
            "open_form": true,
            "value": "alchemy.basePage"
          }
        ]
      }
    ]
  },
  "alchemy.vPotionPage": {
    "title": "Vial Potions",
    "body": "Vial Potions are small potions that can be brewed in the Witch's Cauldron. They are generally made from §2flower dusts§r and can stack up to 8. Vial Potions typically hold more than one effect but they cannot be transformed into Splash or Lingering Potions. All Vial Potions are collected from the Witch's Cauldron with §2Glass Vials§r.\n\nTo view the recipes, conjure the recipe book on the previous page.",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "textures/ui/arrow_dark_left_stretch",
        "onClick": [
          {
            "open_form": true,
            "value": "alchemy.basePage"
          }
        ]
      }
    ]
  },
  "alchemy.elixirPage": {
    "title": "Elixirs",
    "body": "Elixirs are powerful brews that hold pieces of the world, liquified. While they cannot be consumed (and should not!), they are an absolute necessity in performing rituals.\n\nThe §1Elixir of the Conduit§r holds the power of the Ocean. While it is useless by itself, with the right reagents, a Witch can exert some control over the weather.\n\nThe §2Elixir of the Forest§r holds the transmutative powers of the Forest. With this brew, rituals of transmutation and change can be employed by the knowledgeable.\n\nThe §bSoul Bottle§r is a peculiar elixir that is something between a soul and a liquid. It is a mystery why it is like this and it is used quite frequently in conjuration rituals.\n\n§eHoly Water§r is blessed water used famously in infusion rituals. However, it can also be used to cast cleansing rituals.\n\n§4Blood Vials§r are arguably elixirs of the living body itself but only individuals of a darker standing see it as such. It is generally used for Infernal Rituals.\n\nTo view the recipes, conjure the recipe book on the previous page.",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "textures/ui/arrow_dark_left_stretch",
        "onClick": [
          {
            "open_form": true,
            "value": "alchemy.basePage"
          }
        ]
      }
    ]
  },
  "alchemy.infusionPage": {
    "title": "Infusions",
    "body": "Infusions can be considered the doorway to powerful sorcery. These wondrous vials hold the essence of the various primal elements and holds the key to §2Elemental Attunement§r through rituals.\n\nLike elixirs, these concoctions weren't meant to be consumed so any harm caused is totally the fault of the consumer. However, they do have a chance of increasing a witch's §2Affinity§r.\n\n§6Solar Vials§r hold the fiery powers of the Sun and the Nether.\n§3Moon Blessed Water§r holds the soft and deceptive powers of the Moon.\n§2Overworld Mana§r houses the nurturing and powerful energies of the Overworld while §7Sky Mana§r holds the swift and unpredictable magic of the air and the weather.\nFinally, §5Contained Void§r stores the liquified essence of the End itself.\n\nTo view the recipes, conjure the recipe book on the previous page.",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "textures/ui/arrow_dark_left_stretch",
        "onClick": [
          {
            "open_form": true,
            "value": "alchemy.basePage"
          }
        ]
      }
    ]
  },
  
  "rituals.basePage": {
    "title": "Rites & Rituals",
    "body": "Rituals and Rites manipulate magical energy to bring about large scale change in an area or a Witch. However, they require quite a bit more than just items. In this chapter, you will learn of the criterias required to perform these powerful mystical operations properly.\n\nTo view the possible rituals, conjure the §2Liber Ritualis§r.",
    "buttons": [
      {
        "buttonName": "Sacred Patterns",
        "buttonIcon": "textures/form_images/pattern_image",
        "onClick": [
          {
            "open_form": true,
            "value": "rituals.ritualPatterns"
          }
        ]
      },
      {
        "buttonName": "Experience",
        "buttonIcon": "textures/items/experience_bottle",
        "onClick": [
          {
            "open_form": true,
            "value": "rituals.exp"
          }
        ]
      },
      {
        "buttonName": "Ritual Activation",
        "buttonIcon": "textures/items/wands/mundane_wand",
        "onClick": [
          {
            "open_form": true,
            "value": "rituals.activation"
          }
        ]
      },
      {
        "buttonName": "Conjure §2Liber Ritualis§r",
        "buttonIcon": "textures/items/book_written",
        "onClick": [
          {
            "open_form": false,
            "value": "guides/book2"
          }
        ]
      },
      {
        "buttonName": "Back",
        "buttonIcon": "textures/ui/arrow_dark_left_stretch",
        "onClick": [
          {
            "open_form": true,
            "value": "basic_magic_page"
          }
        ]
      }
    ]
  },
  "rituals.ritualPatterns": {
    "title": "Sacred Patterns",
    "body": "Sacred Patterns are extremely important when performing rituals. They are what dictates what type of ritual can be performed.\n\nA §2sacred pattern§r is simply the configuration in which §2ritual slates§r are placed in order to call upon a specific type of effect. There are four (4) sacred patterns, each tied to a single type of effect.\n\n§l[Setting Up]§r\nSacred Patterns are created with Chalk Dusts and Ritual Slates. There are two types of Chalk Powder; §4Red Chalk Dust§r and §7White Chalk Dust§r. Using them to interact with Ritual Slates will draw a symbol of that color on it.\n\nRitual Slates marked with §4Red Chalk Dust§r are the center of a Sacred Pattern and a witch will only need one (1). Slates marked with §7White Chalk Dust§r go around the red ones to completely form the pattern.\n\nSmall images of the sacred patterns are displayed below.",
    "buttons": [
      {
        "buttonName": "Asmodias' Diagram",
        "buttonIcon": "textures/form_images/asmodias_symbol",
        "onClick": [
          {
            "open_form": true,
            "value": "rituals.pattern.weather"
          }
        ]
      },
      {
        "buttonName": "Remus' Transmogrification",
        "buttonIcon": "textures/form_images/transmutation_symbol",
        "onClick": [
          {
            "open_form": true,
            "value": "rituals.pattern.transmute"
          }
        ]
      },
      {
        "buttonName": "Endarg's Conjuration Circle",
        "buttonIcon": "textures/form_images/conjuration_symbol",
        "onClick": [
          {
            "open_form": true,
            "value": "rituals.pattern.conjure"
          }
        ]
      },
      {
        "buttonName": "Archaic Purifying Circle",
        "buttonIcon": "textures/form_images/purification_symbol",
        "onClick": [
          {
            "open_form": true,
            "value": "rituals.pattern.purify"
          }
        ]
      },
      {
        "buttonName": "Back",
        "buttonIcon": "textures/ui/arrow_dark_left_stretch",
        "onClick": [
          {
            "open_form": true,
            "value": "rituals.basePage"
          }
        ]
      }
    ]
  },
  "rituals.pattern.weather": {
    "title": "Asmodias' Diagram",
    "body": "The Asmodias' Diagram is a sacred pattern used most commonly to manipulate the weather. When utilized correctly, a witch can manipulate the weather to suit their needs and magical spells.\n\nThis pattern can also be used for dimensional travel. This barely falls in the realm of rituals, however, so more information will be provided under §2Spell Theory§r.",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "textures/ui/arrow_dark_left_stretch",
        "onClick": [
          {
            "open_form": true,
            "value": "rituals.ritualPatterns"
          }
        ]
      }
    ]
  },
  "rituals.pattern.transmute": {
    "title": "Remus' Transmogrification",
    "body": "While this sacred pattern has quite the name, it is arguably the most powerful pattern a witch has access to. With the right items and blocks, magic can be used to transmute them into certain other blocks.\n\nThere are quite a few rituals that use this sacred pattern and some of them even have different variations. However, learning how to use them can be quite beneficial to the learning witch.",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "textures/ui/arrow_dark_left_stretch",
        "onClick": [
          {
            "open_form": true,
            "value": "rituals.ritualPatterns"
          }
        ]
      }
    ]
  },
  "rituals.pattern.conjure": {
    "title": "Endarg's Conjuration Ring",
    "body": "Endarg's Conjuration Ring is used for conjuring beings. This can be passive mobs or the undead or in the case of Infernal Rituals, mobs from the Nether.\n\nSome rituals can be augmented to conjure specific mobs so study them carefully. You never know when you might need this knowledge.",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "textures/ui/arrow_dark_left_stretch",
        "onClick": [
          {
            "open_form": true,
            "value": "rituals.ritualPatterns"
          }
        ]
      }
    ]
  },
  "rituals.pattern.purify": {
    "title": "Archaic Purifying Circle",
    "body": "This sacred pattern is absolutely necessary for any witch that wants to utilize Primal Magick efficiently. That isn't all it's good for however. Only through this sacred pattern can a Witch cleanse themselves or others of curses.",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "textures/ui/arrow_dark_left_stretch",
        "onClick": [
          {
            "open_form": true,
            "value": "rituals.ritualPatterns"
          }
        ]
      }
    ]
  },
  "rituals.exp": {
    "title": "Experience",
    "body": "Sacred Patterns are an important aspect of rituals but without the right amount of §aExperience Points§r, any ritual being performed will fail. As a result, witches generally ensure that they have reliable ways of gaining experience.",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "textures/ui/arrow_dark_left_stretch",
        "onClick": [
          {
            "open_form": true,
            "value": "rituals.basePage"
          }
        ]
      }
    ]
  },
  "rituals.activation": {
    "title": "Ritual Activation",
    "body": "So you've chosen a ritual, set up the correct sacred pattern, ensured that you have enough XP and followed the instructions in the §2Liber Ritualis§r down to a dot but §2nothing's happening§r. There is no need to worry. Chances are you just haven't activated the ritual yet.\n\nActivating a ritual is simple; just give it a tap with your §2Mundane Wand§r! This method works for most rituals. However, if you are looking to perform an §2augmented ritual§r, simply substitute the Mundane Wand for any of the materials listed under the §2[Possible Augments]§r area inside the §2Liber Ritualis§r.",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "textures/ui/arrow_dark_left_stretch",
        "onClick": [
          {
            "open_form": true,
            "value": "rituals.basePage"
          }
        ]
      }
    ]
  },
  
  "spells.basePage": {
    "title": "Primal Magick",
    "body": "§2Primal Magick§r is simply the magic of the elements and it is generally used for its offensive, defensive and utility purposes. Because of its nature, a sorcerer §2needs to draw magical power from their environment in order to cast their spells§r.\n\nPrimal Magick is not a discipline that is mastered easily though. This guide aims to help new sorcerers along on their path to performing true sorcery!",
    "buttons": [
      {
        "buttonName": "Primal Energies",
        "buttonIcon": "textures/form_images/primal_orb",
        "onClick": [
          {
            "open_form": true,
            "value": "spells.primalEnergies"
          }
        ]
      },
      {
        "buttonName": "Environments",
        "buttonIcon": "textures/blocks/sapling_oak",
        "onClick": [
          {
            "open_form": true,
            "value": "spells.environments"
          }
        ]
      },
      {
        "buttonName": "Spellcasting",
        "buttonIcon": "textures/items/essence/water_opal",
        "onClick": [
          {
            "open_form": true,
            "value": "spells.casting"
          }
        ]
      },
      {
        "buttonName": "Spell Scrolls",
        "buttonIcon": "textures/items/scrolls/earth_inscribed_scroll",
        "onClick": [
          {
            "open_form": true,
            "value": "spells.scrolls"
          }
        ]
      },
      {
        "buttonName": "Spell List",
        "buttonIcon": "textures/items/book_written",
        "onClick": [
          {
            "open_form": true,
            "value": "spells.bookSpells"
          }
        ]
      },
      {
        "buttonName": "Back",
        "buttonIcon": "textures/ui/arrow_dark_left_stretch",
        "onClick": [
          {
            "open_form": true,
            "value": "basic_magic_page"
          }
        ]
      }
    ]
  },
  "spells.primalEnergies": {
    "title": "Primal Energies",
    "body": "There are five (5) primal energies that sorcerers make use of in the worlds; §cSolar§r, §3Lunar§r, §2Earth§r, §7Sky§r and §5Ender§r.\n\n§cSolar§r energy is one of heat and light. While it can be scorching and destructive, it can also provide warmth and protection. As a result, sorcerers of the Sun are generally powerful mages of destructive and healing magicks.\n\nOn the other hand, §3Lunar§r energy deals with illusions and the cool oceans. It is an energy that both sheds light on the strange phenomena of the night and hides its user in its dark embrace. One would do well not to get too lost in its cold embrace.\n\n§2Earth§r energy relies on grounding its users to themselves. This type of energy both heals and fortifies and also connects its witches to nature. This does not mean it cannot cause harm however.\n\n§7Sky§r energy instead focuses on the freedom of its users and raises their mobility. This energy should not be underestimated though. Witches of the Sky are quite famous for their fearsomely lethal lightning bolts.\n\nOut of all the primal energies however, none is as strange as §5Ender§r energy. Not only can it teleport its users, it can even transport them across dimensions and banish other creatures to others. As a consequence though, it is quite difficult to get ahold of.\n\nUtilizing these energies requires the use of specially produced crystals called §2Primal Crystals§r, each type corresponding to a single energy. They can be produced alchemically (see the §2Liber Alchemia§r).",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "textures/ui/arrow_dark_left_stretch",
        "onClick": [
          {
            "open_form": true,
            "value": "spells.basePage"
          }
        ]
      }
    ]
  },
  "spells.environments": {
    "title": "Environments",
    "body": "Primal Magick relies on the primal energies that permeate through the world to work effectively. However, not all primal energies can be found in abundance everywhere across the various dimensions.\n\nFor Master Sorcerers, this is not a huge problem but for Novices, their §2environment§r is extremely important. This is because, for Novice Sorcerers, the environment is the largest factor that determines whether or not their spells work.\n\n§l§c[Solar]§r\nSpells of the §cSolar§r nature are best performed §cunder daylight§r. They can also be used quite naturally §cwithin the Nether§r. As a result, §ctheir power generally diminishes into nothingness within the darkness of night and the timelessness of The End§r.\n\n§l§3[Lunar]§r\n§3Lunar§r spells work almost exactly the opposite. §3Within the shroud of night and in the coolness of water§r, §3Lunar§r spells show their power. §3Within the sunlight, however, their power fails§r. §3This is also true of The End§r, which has no moon or natural water to draw power from.\n\n§l§2[Earth]§r\nOut of all the different types of primal spells, §2Earth§r spells are the most forgiving in terms of environmental restrictions. Because §2earth energy§r permeates through §2all of the Overworld§r, anywhere within this dimension is suitable. Anywhere §oout§r of the Overworld and they will lose their power.\n\n§l§7[Sky]§r\nIn contrast, §7Sky§r spells generally only work when the caster is §7in the rain§r and §7in water§r. As a result, despite its usefulness and power, it is rarely utilized by Novices. That is, if they cannot control the weather.\n\n§l§5[Ender]§r\n§5Ender§r spells are utilizable in the dark depths of §5The End§r but also within the §5darkness of night§r as well. No one truly knows why this is but §5it also makes this type of spells useless within the Nether§r, which can be a dangerous thing.\n\n§l[Exceptions]§r\nWhile these magical restrictions are quite painful in alot of cases, do not worry! The goal of the Sorcerer is to bypass them and grow stronger through the use of §2Attunement and Affinities§r.",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "textures/ui/arrow_dark_left_stretch",
        "onClick": [
          {
            "open_form": true,
            "value": "spells.basePage"
          }
        ]
      }
    ]
  },
  "spells.casting": {
    "title": "Spellcasting",
    "body": "This topic is a popular one and thankfully, it is quite a simple process. However, while the process is simple, there are mechanics that must be kept in mind when making an attempt.\n\n§l[Attunement]§r\nThis is not necessary but it is definitely a good thing have. An attunement is §2a connection to a particular primal energy§r. With this connection, §2a sorcerer does not need to worry about their environment when it comes to spells of that type§r!\n\nAttunements can come naturally or be artifically induced through §2Infusion Rituals§r (see the §2Liber Ritualis§r). A Sorcerer can even be attuned to all of the primal energies but that requires some effort.\n\n§l[Affinities]§r\nAll sorcerers have an affinity with the energies. However, the stronger their affinity with a particular energy is, the more spells of that energy they will be able to use.\n\nIt doesn't stop there though. Affinities can also provide a considerable boosts to certain spells, eg. Two Solar Sorcerers cast a spell, §cFireball§r, at a target. Their §cSolar Affinities§r are 55%% and 70%% respectively. The explosive impact of the latter's spell will be far larger and more powerful than that of the former's.\n\nNot all spells have very noticeable boosts like the previous example though, so keep that in mind.\n\nThere are a few ways a sorcerer can increase their Affinity with an energy. The first way is through casting spells of its type. The second is by creating Primal Crystals and the third is by performing the Infusion Ritual. This last option can only be done once though.\n\n§l[Casting Spells]§r\nNow that those two things are cleared up, how does a sorcerer cast spells? That's simple; through the use of §2Primal Crystals§r! There are five (5) types of Primal Crystals, each corresponding to a single primal energy. By using any three (3) of them in a specific sequence/order, a magical effect (generally referred to as a spell) can be performed. These are called §2Spell Sequences§r. Using Spell Sequences in the wrong order incurs no consequence besides the loss of the crystals used.\n\nSpells can be discovered through experimentation or by finding tomes in certain ancient structures that detail spell sequences and other important information about that spell. Be careful though, these structures aren't necessarily safe.",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "textures/ui/arrow_dark_left_stretch",
        "onClick": [
          {
            "open_form": true,
            "value": "spells.basePage"
          }
        ]
      }
    ]
  },
  "spells.bookSpells": {
    "title": "Spell List",
    "body": "Now that you've learned about the various criterias and exceptions that apply to Primal Magick, it's time to put it to use. Here is a full list of all the spell combos currently discovered, listed by their element and individual affinity requirement:\n\n§c§l[Solar]§r\n\nSolar Bolt (1%%) [§cSolar§r => §cSolar§r => §7Sky§r]\nSmall Sun (5%%) [§cSolar§r => §cSolar§r => §3Lunar§r]\nWarming Bolt (10%%) [§cSolar§r => §2Earth§r => §7Sky§r]\nResist Fire (15%%) [§cSolar§r => §cSolar§r => §2Earth§r]\nSolar Flare (20%%) [§cSolar§r => §3Lunar§r => §cSolar§r]\nSolar Ring (25%%) [§cSolar§r => §7Sky§r => §cSolar§r]\nWarming Aura (35%%) [§cSolar§r => §7Sky§r => §2Earth§r]\nFireball (50%%) [§cSolar§r => §cSolar§r => §cSolar§r]\n\n\n§3§l[Lunar]§r\n\nConceal (1%%) [§3Lunar§r => §3Lunar§r => §3Lunar§r]\nSplash (1%%) [§3Lunar§r => §cSolar§r => §7Sky§r]\nAquabreath (10%%) [§3Lunar§r => §3Lunar§r => §2Earth§r]\nFrostbite (15%%) [§3Lunar§r => §3Lunar§r => §7Sky§r]\nDarkvision (20%%) [§3Lunar§r => §3Lunar§r => §5Ender§r]\nLunar Aid (50%%) [§3Lunar§r => §5Ender§r => §3Lunar§r]\nAstral Form [60%] [§3Lunar§r => §5Ender§r => §5Ender§r]\n\n\n§l§7[Sky]§r\n\nHasten (1%%) [§7Sky§r => §7Sky§r => §2Earth§r]\nFeather Feet (5%%) [§7Sky§r => §2Earth§r => §7Sky§r]\nFloat (15%%) [§7Sky§r => §7Sky§r => §7Sky§r]\nLightning Bolt (35%%) [§7Sky§r => §cSolar§r => §7Sky§r]\nRepellance (15%%) [§7Sky§r => §3Lunar§r => §3Lunar§r]\n\n\n§l§2[Earth]§r\n\nEarth Dome (1%%) [§2Earth§r => §7Sky§r => §2Earth§r]\nPoison (5%%) [§2Earth§r => §2Earth§r => §5Ender§r]\nAura of Prosperity (5%%) [§2Earth§r => §cSolar§r => §2Earth§r]\nBarkflesh (25%%) [§2Earth§r => §2Earth§r => §2Earth§r]\nFlower Absorption (25%%) [§2Earth§r => §2Earth§r => §3Lunar§r]\nRejuvify (45%%) [§2Earth§r => §3Lunar§r => §2Earth§r]\nFalse Hearts (45%%) [§2Earth§r => §2Earth§r => §cSolar§r]\n\n\n§5§l[Ender]§r\n\nEnder Step (1%%) [§5Ender§r => §5Ender§r => §5Ender§r]\nEldritch Bolt (5%%) [§5Ender§r => §5Ender§r => §7Sky§r]\nEnder Storage (45%%) [§5Ender§r => §2Earth§r => §5Ender§r]\nNether Shift (10%%) [§5Ender§r => §cSolar§r => §5Ender§r]\nOverworld Shift (10%%) [§5Ender§r => §7Sky§r => §5Ender§r]\nEnder Shift (10%%) [§5Ender§r => §3Lunar§r => §5Ender§r]\nBanish (15%%) [§5Ender§r => §cSolar§r => §7Sky§r]",
    
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "textures/ui/arrow_dark_left_stretch",
        "onClick": [
          {
            "open_form": true,
            "value": "spells.basePage"
          }
        ]
      }
    ]
  },
  "spells.scrolls": {
    "title": "Spell Scrolls",
    "body": "While spells are useful, they can be inconvenient to use because of their Spell Sequences. That is where scrolls come in. While they have all the environmental restrictions and affinity requirements that spells have, they can be performed far quicker and §2curses cannot restrict their use§r. They can be crafted in the §2Witch's Workbench§r.\n\nThere is a downside to these magical parchments, however. Because of their written format, affinity boosts do not affect them at all. This means that a scroll will always cast the lowest iteration of the spell it holds, which may be trivial in front of more practiced Sorcerers.\n\nMagical traps are also possible with spell scrolls as §2projectile-based spells can be shot from dispensors§r!",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "textures/ui/arrow_dark_left_stretch",
        "onClick": [
          {
            "open_form": true,
            "value": "spells.basePage"
          }
        ]
      }
    ]
  },
  
  "advanced_magic_page": {
    "title": "Advanced Magick",
    "body": "Now that you know the basicsand have practiced them a bit, it is time to move on to more powerful and complex magicks. Take care though, most are just as dangerous.",
    "buttons": [
      {
        "buttonName": "Talismans",
        "buttonIcon": "textures/items/talismans/bone_talisman",
        "onClick": [
          {
            "open_form": true,
            "value": "talisman.basePage"
          }
        ]
      },
      {
        "buttonName": "Curses",
        "buttonIcon": "textures/items/scrolls/sculky_scroll",
        "onClick": [
          {
            "open_form": true,
            "value": "curses.basePage"
          }
        ]
      },
      {
        "buttonName": "Warp Magick",
        "buttonIcon": "textures/items/tools/ender_compass",
        "onClick": [
          {
            "open_form": true,
            "value": "warps.basePage"
          }
        ]
      },
      {
        "buttonName": "Back",
        "buttonIcon": "textures/ui/arrow_dark_left_stretch",
        "onClick": [
          {
            "open_form": true,
            "value": "bewitched_grimoire_page"
          }
        ]
      }
    ]
  },
  "talisman.basePage": {
    "title": "Talismans",
    "body": "Souls are everywhere within the world and they flit about and across the worlds like butterflies. However, there is a way to tether a few to your own desires by binding them to talismans but be warned; it can be dangerous.\n\nA talisman is simply a trinket made of bone that is then crafted with other items in order to augment it to provide an effect. While this does not sound like much, they can quite easily save a life.\n\nCrafting a talisman is not enough though. All that will do is craft an §ounactivated§r version. In order to activate it, §2it must be used in close proximity of a suitable mob§r. The talisman will then kill that mob and trap its soul inside itself. From then on, the full effects of that talisman will be unlocked!\n\nTo make use of the talisman's power, simply §2put the talisman in any one of the first three inventory slots§r (§cnot hotbar§r). In this way, a witch can have up to three talismans active on their person.\n\n§l[Talisman Care]§r\nWhen a talisman is activated, it gains somewhat of a conciousness. In order to enjoy its effects for long periods of time, it must be fed every 24 hours (in-game). Feeding a familiar is as simple as having the item they consume inside the witch's inventory. Because of this, talismans are sometimes dubbed \"item familiars\". Keep in mind, §2familiars will notify their wearer a minute before they need to be fed§r. §2Feed times for talismans are also completely unique to each player; a talisman that is hungry on one witch may not be hungry on another§r.\n\n§l[Consequences]§r\nAbuse is in no way tolerated by talismans. If it is not fed, it will simply leave, causing the talisman to deactivate. That, however, is the best case scenario. §2More powerful talismans will impart curses on their wearer in addition to leaving§r. A word of advice is to never let a talisman deactivate in a situation where it is needed.\n\nFor information on the various types of talismans and what they consume, see the §2Liber Phylactelium§r.",
    "buttons": [
      {
        "buttonName": "Conjure §2Liber Phylactelium§r",
        "buttonIcon": "textures/items/book_written",
        "onClick": [
          {
            "open_form": false,
            "value": "guides/book3"
          }
        ]
      },
      {
        "buttonName": "Back",
        "buttonIcon": "textures/ui/arrow_dark_left_stretch",
        "onClick": [
          {
            "open_form": true,
            "value": "advanced_magic_page"
          }
        ]
      }
    ]
  },
  "curses.basePage": {
    "title": "Curses",
    "body": "If Primal Magick is the power of nature and the worlds, the energy that powers curses is corruptive and icky. And it is; the corruption that powers them is the Sculk.\n\nCurses generally last for three (3) days. Any 'curse' that lasts for less than that is a hex. Hexes have short durations and are most times not lethal on their own.\n\nCurses, on the other hand, affect their victims randomly throughout this three day period and will heavily inconvenience them. However, few are lethal by themselves.\n\nCurses can be picked up from (as of right now) upset talismans and other players, as they are craftable.\n\nCurses are craftable. To see what each curse does, check the §2Cursed Compendium§r below.",
    "buttons": [
      {
        "buttonName": "Conjure §2Cursed Compendium§r",
        "buttonIcon": "textures/items/book_written",
        "onClick": [
          {
            "open_form": false,
            "value": "guides/book4"
          }
        ]
      },
      {
        "buttonName": "Back",
        "buttonIcon": "textures/ui/arrow_dark_left_stretch",
        "onClick": [
          {
            "open_form": true,
            "value": "advanced_magic_page"
          }
        ]
      }
    ]
  },
  "warps.basePage": {
    "title": "Warping",
    "body": "[W.I.P]\n\n(Please read the tome below)",
    "buttons": [
      {
        "buttonName": "Warp Guide",
        "buttonIcon": "textures/items/book_written",
        "onClick": [
          {
            "open_form": false,
            "value": "guides/crafted/bewitchery_guide7"
          }
        ]
      },
      {
        "buttonName": "Back",
        "buttonIcon": "textures/ui/arrow_dark_left_stretch",
        "onClick": [
          {
            "open_form": true,
            "value": "advanced_magic_page"
          }
        ]
      }
    ]
  },
  
  "miscellanous": {
    "title": "Miscellaneous",
    "body": "This section is simply a list of important tips and information that will help you on your journey.\n\n0) Most Bewitchery items can be crafted at the Witch's Workbench. Always check there first :)\n\n1) §2Natural Ash§r is simply cooked sapling. A Furnace or Campfire will do the job just fine.\n\n2) An §2Athame§r is used to collect blood and soul fragments. Put §2Glass Vials§r in the §2first slot of the hotbar§2 and hit a §2cow, pig, chicken or sheep§r to obtain Blood Vials. §2Soul Fragments§r are collected by hitting the undead while §2NOT§r holding Glass Vials in the first slot of the hotbar.\n\n3) §2Flying brooms exist and are craftable§r! Hold the broom item while riding and looking around to navigate up and down. Do not hold the broom item and the broom will start to hover, neither moving up or down by much.\n\nSome talismans and Tomemancy Tomes also affect the broom so have fun figuring out which ones.\n\n4) Those §2bedrock looking§r blocks in the little shrines of Reinforced Deepslate can be unlocked with a §2Mundane Wand§r. Be careful when unlocking them though. You have been warned.\n\n5) Affinities and Warps can be checked with the §2Grimoire§r (and, no not this one). If Tomemancy is installed, it will also tell you what elements you have the Knowledge for.\n\n6) Please feed your Shellbreath Talisman on time. You most likely won't like the consequences.\n\n7) Bewitchery is a process.\n\n8) Warp Points and Faery Ring Points can only be set to areas between X=10000, Z=10000 and X=-10000, Y=-10000. Keep that in mind when making Warp Points and Faery Rings.\n\n9) Report any bugs you find! It's really helpful!\n\n10) §gHave fun!§r",
    "buttons": [
      {
        "buttonName": "Back",
        "buttonIcon": "textures/ui/arrow_dark_left_stretch",
        "onClick": [
          {
            "open_form": true,
            "value": "bewitched_grimoire_page"
          }
        ]
      }
    ]
  },
  
  "stars.basePage": {
    "title": "Secrets of the Stars",
    "body": "Away from the sovereignty of the five Primal Elements lies the magick of the Stars. This form of magic is more arcane in nature and rarely ever elemental, §cmaking the two incompatible with each other§r.",
    "buttons": [
      {
        "buttonName": "Spellcasting",
        "buttonIcon": "textures/items/dusts/natural_ash",
        "onClick": [
          {
            "open_form": true,
            "value": "basic_magic_page"
          }
        ]
      },
      {
        "buttonName": "The Constellations",
        "buttonIcon": "textures/items/talismans/soul_fragment",
        "onClick": [
          {
            "open_form": true,
            "value": "advanced_magic_page"
          }
        ]
      },
      {
        "buttonName": "Enchantments",
        "buttonIcon": "textures/items/spellbooks/strange_spellbook",
        "onClick": [
          {
            "open_form": true,
            "value": "miscellanous"
          }
        ]
      }
    ]
  }
};