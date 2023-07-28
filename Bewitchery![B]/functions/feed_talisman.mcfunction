scoreboard objectives add bw:feedCat dummy
scoreboard objectives add bw:feedRabbit dummy
scoreboard objectives add bw:feedChick dummy
scoreboard objectives add bw:feedStrider dummy
scoreboard objectives add bw:feedPerson dummy
scoreboard objectives add bw:feedBlaze dummy
scoreboard objectives add bw:feedSpider dummy
scoreboard objectives add bw:feedTurtle dummy
scoreboard objectives add bw:feedWither dummy
scoreboard objectives add bw:feedBat dummy
scoreboard objectives add bw:feedGolem dummy


## Detect Talisman Scores
execute as @a at @s[tag=!bw:fedTalisman] run scoreboard players set @s bw:feedCat 48000
execute as @a at @s[tag=!bw:fedTalisman] run scoreboard players set @s bw:feedRabbit 48000
execute as @a at @s[tag=!bw:fedTalisman] run scoreboard players set @s bw:feedChick 48000
execute as @a at @s[tag=!bw:fedTalisman] run scoreboard players set @s bw:feedStrider 48000
execute as @a at @s[tag=!bw:fedTalisman] run scoreboard players set @s bw:feedPerson 48000
execute as @a at @s[tag=!bw:fedTalisman] run scoreboard players set @s bw:feedBlaze 48000
execute as @a at @s[tag=!bw:fedTalisman] run scoreboard players set @s bw:feedSpider 48000
execute as @a at @s[tag=!bw:fedTalisman] run scoreboard players set @s bw:feedTurtle 48000
execute as @a at @s[tag=!bw:fedTalisman] run scoreboard players set @s bw:feedWither 48000
execute as @a at @s[tag=!bw:fedTalisman] run scoreboard players set @s bw:feedBat 48000
execute as @a at @s[tag=!bw:fedTalisman] run scoreboard players set @s bw:feedGolem 48000
execute as @a at @s[tag=!bw:fedTalisman] run tag @s add bw:fedTalisman


## Feed Cat Soul
execute as @a[hasitem={item=bw:activated_agility_talisman, location=slot.inventory, slot=0..2}] at @s[scores={bw:feedCat=1..}] run scoreboard players remove @s bw:feedCat 1

execute as @a at @s[scores={bw:feedCat=1201}] run tellraw @s {"rawtext":[{"text":"§bYou feel the talisman's Cat Soul reach out to you.§r"}]}

execute as @a[hasitem={item=minecraft:cod, location=slot.inventory, slot=0..27, quantity=1..}] at @s[scores={bw:feedCat=0}] run tellraw @s {"rawtext":[{"text":"§bThe Cat's Soul quiets down, satisfied.§r"}]}
execute as @a[hasitem={item=minecraft:cod, location=slot.inventory, slot=0..27, quantity=1..}] at @s[scores={bw:feedCat=0}] run clear @s minecraft:cod 0 1

execute as @a[hasitem={item=minecraft:cod, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedCat=0}] run tellraw @s {"rawtext":[{"text":"§bThe Cat's Soul fades away, disappointed.§r"}]}
execute as @a[hasitem={item=minecraft:cod, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedCat=0}] run replaceitem entity @s[hasitem={item=bw:activated_agility_talisman, location=slot.inventory, slot=0}] slot.inventory 0 bw:agility_talisman 1
execute as @a[hasitem={item=minecraft:cod, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedCat=0}] run replaceitem entity @s[hasitem={item=bw:activated_agility_talisman, location=slot.inventory, slot=1}] slot.inventory 1 bw:agility_talisman 1
execute as @a[hasitem={item=minecraft:cod, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedCat=0}] run replaceitem entity @s[hasitem={item=bw:activated_agility_talisman, location=slot.inventory, slot=2}] slot.inventory 2 bw:agility_talisman 1

execute as @a at @s[scores={bw:feedCat=0}] run scoreboard players set @s bw:feedCat 48000


## Feed Rabbit Soul
execute as @a[hasitem={item=bw:activated_leaping_talisman, location=slot.inventory, slot=0..2}] at @s[scores={bw:feedRabbit=1..}] run scoreboard players remove @s bw:feedRabbit 1

execute as @a at @s[scores={bw:feedRabbit=1201}] run tellraw @s {"rawtext":[{"text":"§bYou feel the talisman's Rabbit Soul reach out to you.§r"}]}

execute as @a[hasitem={item=minecraft:carrot, location=slot.inventory, slot=0..27, quantity=1..}] at @s[scores={bw:feedRabbit=0}] run tellraw @s {"rawtext":[{"text":"§bThe Rabbit's Soul quiets down, satisfied.§r"}]}
execute as @a[hasitem={item=minecraft:carrot, location=slot.inventory, slot=0..27, quantity=1..}] at @s[scores={bw:feedRabbit=0}] run clear @s minecraft:carrot 0 1

execute as @a[hasitem={item=minecraft:carrot, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedRabbit=0}] run tellraw @s {"rawtext":[{"text":"§bThe Rabbit's Soul fades away, disappointed.§r"}]}
execute as @a[hasitem={item=minecraft:carrot, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedRabbit=0}] run replaceitem entity @s[hasitem={item=bw:activated_leaping_talisman, location=slot.inventory, slot=0}] slot.inventory 0 bw:leaping_talisman 1
execute as @a[hasitem={item=minecraft:carrot, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedRabbit=0}] run replaceitem entity @s[hasitem={item=bw:activated_leaping_talisman, location=slot.inventory, slot=1}] slot.inventory 1 bw:leaping_talisman 1
execute as @a[hasitem={item=minecraft:carrot, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedRabbit=0}] run replaceitem entity @s[hasitem={item=bw:activated_leaping_talisman, location=slot.inventory, slot=2}] slot.inventory 2 bw:leaping_talisman 1

execute as @a at @s[scores={bw:feedRabbit=0}] run scoreboard players set @s bw:feedRabbit 48000


## Feed Chicken Soul
execute as @a[hasitem={item=bw:activated_feather_talisman, location=slot.inventory, slot=0..2}] at @s[scores={bw:feedChick=1..}] run scoreboard players remove @s bw:feedChick 1

execute as @a at @s[scores={bw:feedChick=1201}] run tellraw @s {"rawtext":[{"text":"§bYou feel the talisman's Chicken Soul reach out to you.§r"}]}

execute as @a[hasitem={item=minecraft:wheat_seeds, location=slot.inventory, slot=0..27, quantity=1..}] at @s[scores={bw:feedChick=0}] run tellraw @s {"rawtext":[{"text":"§bThe Chicken's Soul quiets down, satisfied.§r"}]}
execute as @a[hasitem={item=minecraft:wheat_seeds, location=slot.inventory, slot=0..27, quantity=1..}] at @s[scores={bw:feedChick=0}] run clear @s minecraft:wheat_seeds 0 1

execute as @a[hasitem={item=minecraft:wheat_seeds, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedChick=0}] run tellraw @s {"rawtext":[{"text":"§bThe Chicken's Soul fades away, disappointed.§r"}]}
execute as @a[hasitem={item=minecraft:wheat_seeds, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedChick=0}] run replaceitem entity @s[hasitem={item=bw:activated_feather_talisman, location=slot.inventory, slot=0}] slot.inventory 0 bw:feather_talisman 1
execute as @a[hasitem={item=minecraft:wheat_seeds, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedChick=0}] run replaceitem entity @s[hasitem={item=bw:activated_feather_talisman, location=slot.inventory, slot=1}] slot.inventory 1 bw:feather_talisman 1
execute as @a[hasitem={item=minecraft:wheat_seeds, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedChick=0}] run replaceitem entity @s[hasitem={item=bw:activated_feather_talisman, location=slot.inventory, slot=2}] slot.inventory 2 bw:feather_talisman 1

execute as @a at @s[scores={bw:feedChick=0}] run scoreboard players set @s bw:feedChick 48000


## Feed Strider Soul
execute as @a[hasitem={item=bw:activated_air_walk_talisman, location=slot.inventory, slot=0..2}] at @s[scores={bw:feedStrider=1..}] run scoreboard players remove @s bw:feedStrider 1

execute as @a at @s[scores={bw:feedStrider=1201}] run tellraw @s {"rawtext":[{"text":"§bYou feel the talisman's Strider Soul reach out to you.§r"}]}

execute as @a[hasitem={item=minecraft:crimson_fungus, location=slot.inventory, slot=0..27, quantity=1..}] at @s[scores={bw:feedStrider=0}] run tellraw @s {"rawtext":[{"text":"§bThe Strider's Soul quiets down, satisfied.§r"}]}
execute as @a[hasitem={item=minecraft:crimson_fungus, location=slot.inventory, slot=0..27, quantity=1..}] at @s[scores={bw:feedStrider=0}] run clear @s minecraft:crimson_fungus 0 1

execute as @a[hasitem={item=minecraft:crimson_fungus, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedStrider=0}] run tellraw @s {"rawtext":[{"text":"§bThe Strider's Soul fades away, disappointed.§r"}]}
execute as @a[hasitem={item=minecraft:crimson_fungus, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedStrider=0}] run replaceitem entity @s[hasitem={item=bw:activated_air_walk_talisman, location=slot.inventory, slot=0}] slot.inventory 0 bw:air_walk_talisman 1
execute as @a[hasitem={item=minecraft:crimson_fungus, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedStrider=0}] run replaceitem entity @s[hasitem={item=bw:activated_air_walk_talisman, location=slot.inventory, slot=1}] slot.inventory 1 bw:air_walk_talisman 1
execute as @a[hasitem={item=minecraft:crimson_fungus, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedStrider=0}] run replaceitem entity @s[hasitem={item=bw:activated_air_walk_talisman, location=slot.inventory, slot=2}] slot.inventory 2 bw:air_walk_talisman 1

execute as @a at @s[scores={bw:feedStrider=0}] run scoreboard players set @s bw:feedStrider 48000


## Feed Villager Soul
execute as @a[hasitem={item=bw:activated_heartblood_talisman, location=slot.inventory, slot=0..2}] at @s[scores={bw:feedPerson=1..}] run scoreboard players remove @s bw:feedPerson 1

execute as @a at @s[scores={bw:feedPerson=1201}] run tellraw @s {"rawtext":[{"text":"§bYou feel the talisman's Villager Soul reach out to you.§r"}]}

execute as @a[hasitem={item=minecraft:bread, location=slot.inventory, slot=0..27, quantity=1..}] at @s[scores={bw:feedPerson=0}] run tellraw @s {"rawtext":[{"text":"§bThe Villager's Soul quiets down, satisfied.§r"}]}
execute as @a[hasitem={item=minecraft:bread, location=slot.inventory, slot=0..27, quantity=1..}] at @s[scores={bw:feedPerson=0}] run clear @s minecraft:bread 0 1

execute as @a[hasitem={item=minecraft:bread, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedPerson=0}] run tellraw @s {"rawtext":[{"text":"§bThe Villager's Soul fades away, their presence sinister and seeking vengeance.§r"}]}
execute as @a[hasitem={item=minecraft:bread, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedPerson=0}] run scoreboard players set @s bw:regenCurse 72000
execute as @a[hasitem={item=minecraft:bread, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedPerson=0}] run replaceitem entity @s[hasitem={item=bw:activated_heartblood_talisman, location=slot.inventory, slot=0}] slot.inventory 0 bw:heartblood_talisman 1
execute as @a[hasitem={item=minecraft:bread, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedPerson=0}] run replaceitem entity @s[hasitem={item=bw:activated_heartblood_talisman, location=slot.inventory, slot=1}] slot.inventory 1 bw:heartblood_talisman 1
execute as @a[hasitem={item=minecraft:bread, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedPerson=0}] run replaceitem entity @s[hasitem={item=bw:activated_heartblood_talisman, location=slot.inventory, slot=2}] slot.inventory 2 bw:heartblood_talisman 1

execute as @a at @s[scores={bw:feedPerson=0}] run scoreboard players set @s bw:feedPerson 48000


## Feed Blaze Soul
execute as @a[hasitem={item=bw:activated_fyreblood_talisman, location=slot.inventory, slot=0..2}] at @s[scores={bw:feedBlaze=1..}] run scoreboard players remove @s bw:feedBlaze 1

execute as @a at @s[scores={bw:feedBlaze=1201}] run tellraw @s {"rawtext":[{"text":"§bYou feel the talisman's Blaze Soul reach out to you.§r"}]}

execute as @a[hasitem={item=minecraft:coal, location=slot.inventory, slot=0..27, quantity=1..}] at @s[scores={bw:feedBlaze=0}] run tellraw @s {"rawtext":[{"text":"§bThe Blaze's Soul quiets down, satisfied.§r"}]}
execute as @a[hasitem={item=minecraft:coal, location=slot.inventory, slot=0..27, quantity=1..}] at @s[scores={bw:feedBlaze=0}] run clear @s minecraft:coal 0 1

execute as @a[hasitem={item=minecraft:coal, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedBlaze=0}] run tellraw @s {"rawtext":[{"text":"§bThe Blaze's Soul fades away, their presence sinister and seeking vengeance.§r"}]}
execute as @a[hasitem={item=minecraft:coal, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedBlaze=0}] run particle bw:solar_flare ~~~
execute as @a[hasitem={item=minecraft:coal, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedBlaze=0}] run fill ~-1~~1 ~1~2~-1 fire [] replace air []
execute as @a[hasitem={item=minecraft:coal, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedBlaze=0}] run replaceitem entity @s[hasitem={item=bw:activated_fyreblood_talisman, location=slot.inventory, slot=0}] slot.inventory 0 bw:fyreblood_talisman 1
execute as @a[hasitem={item=minecraft:coal, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedBlaze=0}] run replaceitem entity @s[hasitem={item=bw:activated_fyreblood_talisman, location=slot.inventory, slot=1}] slot.inventory 1 bw:fyreblood_talisman 1
execute as @a[hasitem={item=minecraft:coal, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedBlaze=0}] run replaceitem entity @s[hasitem={item=bw:activated_fyreblood_talisman, location=slot.inventory, slot=2}] slot.inventory 2 bw:fyreblood_talisman 1

execute as @a at @s[scores={bw:feedBlaze=0}] run scoreboard players set @s bw:feedBlaze 48000


## Feed Cave Spider Soul
execute as @a[hasitem={item=bw:activated_detox_talisman, location=slot.inventory, slot=0..2}] at @s[scores={bw:feedSpider=1..}] run scoreboard players remove @s bw:feedSpider 1

execute as @a at @s[scores={bw:feedSpider=1201}] run tellraw @s {"rawtext":[{"text":"§bYou feel the talisman's Cave Spider Soul reach out to you.§r"}]}

execute as @a[hasitem={item=minecraft:chicken, location=slot.inventory, slot=0..27, quantity=1..}] at @s[scores={bw:feedSpider=0}] run tellraw @s {"rawtext":[{"text":"§bThe Cave Spider's Soul quiets down, satisfied.§r"}]}
execute as @a[hasitem={item=minecraft:chicken, location=slot.inventory, slot=0..27, quantity=1..}] at @s[scores={bw:feedSpider=0}] run clear @s minecraft:chicken 0 1

execute as @a[hasitem={item=minecraft:chicken, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedSpider=0}] run tellraw @s {"rawtext":[{"text":"§bThe Cave Spider's Soul fades away, their presence sinister and seeking vengeance.§r"}]}
execute as @a[hasitem={item=minecraft:chicken, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedSpider=0}] run effect @s fatal_poison 15 0 false
execute as @a[hasitem={item=minecraft:chicken, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedSpider=0}] run replaceitem entity @s[hasitem={item=bw:activated_detox_talisman, location=slot.inventory, slot=0}] slot.inventory 0 bw:detox_talisman 1
execute as @a[hasitem={item=minecraft:chicken, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedSpider=0}] run replaceitem entity @s[hasitem={item=bw:activated_detox_talisman, location=slot.inventory, slot=1}] slot.inventory 1 bw:detox_talisman 1
execute as @a[hasitem={item=minecraft:chicken, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedSpider=0}] run replaceitem entity @s[hasitem={item=bw:activated_detox_talisman, location=slot.inventory, slot=2}] slot.inventory 2 bw:detox_talisman 1

execute as @a at @s[scores={bw:feedSpider=0}] run scoreboard players set @s bw:feedSpider 48000


## Feed Turtle Soul
execute as @a[hasitem={item=bw:activated_shellbreath_talisman, location=slot.inventory, slot=0..2}] at @s[scores={bw:feedTurtle=1..}] run scoreboard players remove @s bw:feedTurtle 1

execute as @a at @s[scores={bw:feedTurtle=1201}] run tellraw @s {"rawtext":[{"text":"§bYou feel the talisman's Turtle Soul reach out to you.§r"}]}

execute as @a[hasitem={item=minecraft:seagrass, location=slot.inventory, slot=0..27, quantity=1..}] at @s[scores={bw:feedTurtle=0}] run tellraw @s {"rawtext":[{"text":"§bThe Turtle's Soul quiets down, satisfied.§r"}]}
execute as @a[hasitem={item=minecraft:seagrass, location=slot.inventory, slot=0..27, quantity=1..}] at @s[scores={bw:feedTurtle=0}] run clear @s minecraft:seagrass 0 1

execute as @a[hasitem={item=minecraft:seagrass, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedTurtle=0}] run tellraw @s {"rawtext":[{"text":"§bThe Turtle's Soul fades away, their presence sad and regretful but spiteful nonetheless.§r"}]}
execute as @a[hasitem={item=minecraft:seagrass, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedTurtle=0}] run scoreboard players set @e[r=2] bw:hydroCurse 72000
execute as @a[hasitem={item=minecraft:seagrass, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedTurtle=0}] run scoreboard players set @e[r=2] bw:hydroCurseT 1
execute as @a[hasitem={item=minecraft:seagrass, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedTurtle=0}] run replaceitem entity @s[hasitem={item=bw:activated_shellbreath_talisman, location=slot.inventory, slot=0}] slot.inventory 0 bw:shellbreath_talisman 1
execute as @a[hasitem={item=minecraft:seagrass, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedTurtle=0}] run replaceitem entity @s[hasitem={item=bw:activated_shellbreath_talisman, location=slot.inventory, slot=1}] slot.inventory 1 bw:shellbreath_talisman 1
execute as @a[hasitem={item=minecraft:seagrass, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedTurtle=0}] run replaceitem entity @s[hasitem={item=bw:activated_shellbreath_talisman, location=slot.inventory, slot=2}] slot.inventory 2 bw:shellbreath_talisman 1

execute as @a at @s[scores={bw:feedTurtle=0}] run scoreboard players set @s bw:feedTurtle 48000


## Feed Wither Soul
execute as @a[hasitem={item=bw:activated_witherward_talisman, location=slot.inventory, slot=0..2}] at @s[scores={bw:feedWither=1..}] run scoreboard players remove @s bw:feedWither 1

execute as @a at @s[scores={bw:feedWither=1201}] run tellraw @s {"rawtext":[{"text":"§bYou feel the talisman's Wither Skeleton Soul reach out to you.§r"}]}

execute as @a[hasitem={item=minecraft:bone, location=slot.inventory, slot=0..27, quantity=1..}] at @s[scores={bw:feedWither=0}] run tellraw @s {"rawtext":[{"text":"§bThe Wither Skeleton's Soul quiets down, satisfied.§r"}]}
execute as @a[hasitem={item=minecraft:bone, location=slot.inventory, slot=0..27, quantity=1..}] at @s[scores={bw:feedWither=0}] run clear @s minecraft:bone 0 1

execute as @a[hasitem={item=minecraft:bone, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedWither=0}] run tellraw @s {"rawtext":[{"text":"§bThe Wither Skeletons's Soul fades away, their presence sinister and seeking vengeance.§r"}]}
execute as @a[hasitem={item=minecraft:bone, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedWither=0}] run effect @s wither 25 0 false
execute as @a[hasitem={item=minecraft:bone, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedWither=0}] run replaceitem entity @s[hasitem={item=bw:activated_witherward_talisman, location=slot.inventory, slot=0}] slot.inventory 0 bw:witherward_talisman 1
execute as @a[hasitem={item=minecraft:bone, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedWither=0}] run replaceitem entity @s[hasitem={item=bw:activated_witherward_talisman, location=slot.inventory, slot=1}] slot.inventory 1 bw:witherward_talisman 1
execute as @a[hasitem={item=minecraft:bone, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedWither=0}] run replaceitem entity @s[hasitem={item=bw:activated_witherward_talisman, location=slot.inventory, slot=2}] slot.inventory 2 bw:witherward_talisman 1

execute as @a at @s[scores={bw:feedWither=0}] run scoreboard players set @s bw:feedWither 48000


## Feed Bat Soul
execute as @a[hasitem={item=bw:activated_night_sight_talisman, location=slot.inventory, slot=0..2}] at @s[scores={bw:feedBat=1..}] run scoreboard players remove @s bw:feedBat 1

execute as @a at @s[scores={bw:feedBat=1201}] run tellraw @s {"rawtext":[{"text":"§bYou feel the talisman's Bat Soul reach out to you.§r"}]}

execute as @a[hasitem={item=bw:blood_vial, location=slot.inventory, slot=0..27, quantity=1..}] at @s[scores={bw:feedBat=0}] run tellraw @s {"rawtext":[{"text":"§bThe Bat's Soul quiets down, satisfied.§r"}]}
execute as @a[hasitem={item=bw:blood_vial, location=slot.inventory, slot=0..27, quantity=1..}] at @s[scores={bw:feedBat=0}] run clear @s bw:blood_vial 0 1

execute as @a[hasitem={item=bw:blood_vial, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedBat=0}] run tellraw @s {"rawtext":[{"text":"§bThe Bat's Soul chitters with hurt and annoyance before flying off.§r"}]}
execute as @a[hasitem={item=bw:blood_vial, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedBat=0}] run effect @s blindness 25 0 false
execute as @a[hasitem={item=bw:blood_vial, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedBat=0}] run replaceitem entity @s[hasitem={item=bw:activated_night_sight_talisman, location=slot.inventory, slot=0}] slot.inventory 0 bw:night_sight_talisman 1
execute as @a[hasitem={item=bw:blood_vial, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedBat=0}] run replaceitem entity @s[hasitem={item=bw:activated_night_sight_talisman, location=slot.inventory, slot=1}] slot.inventory 1 bw:night_sight_talisman 1
execute as @a[hasitem={item=bw:blood_vial, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedBat=0}] run replaceitem entity @s[hasitem={item=bw:activated_night_sight_talisman, location=slot.inventory, slot=2}] slot.inventory 2 bw:night_sight_talisman 1

execute as @a at @s[scores={bw:feedBat=0}] run scoreboard players set @s bw:feedBat 48000


## Feed Iron Golem Soul
execute as @a[hasitem={item=bw:activated_ironblade_talisman, location=slot.inventory, slot=0..2}] at @s[scores={bw:feedGolem=1..}] run scoreboard players remove @s bw:feedGolem 1

execute as @a at @s[scores={bw:feedGolem=1201}] run tellraw @s {"rawtext":[{"text":"§bYou feel the talisman's Iron Golem Soul reach out to you.§r"}]}

execute as @a[hasitem={item=minecraft:iron_nugget, location=slot.inventory, slot=0..27, quantity=1..}] at @s[scores={bw:feedGolem=0}] run tellraw @s {"rawtext":[{"text":"§bThe Iron Golem's Soul quiets down, satisfied.§r"}]}
execute as @a[hasitem={item=minecraft:iron_nugget, location=slot.inventory, slot=0..27, quantity=1..}] at @s[scores={bw:feedGolem=0}] run clear @s minecraft:iron_nugget 0 1

execute as @a[hasitem={item=minecraft:iron_nugget, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedGolem=0}] run tellraw @s {"rawtext":[{"text":"§bThe Iron Golem's Soul creaks with dissatisfaction as it goes away.§r"}]}
execute as @a[hasitem={item=minecraft:iron_nugget, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedGolem=0}] run effect @s weakness 60 1 false
execute as @a[hasitem={item=minecraft:iron_nugget, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedGolem=0}] run replaceitem entity @s[hasitem={item=bw:activated_ironblade_talisman, location=slot.inventory, slot=0}] slot.inventory 0 bw:ironblade_talisman 1
execute as @a[hasitem={item=minecraft:iron_nugget, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedGolem=0}] run replaceitem entity @s[hasitem={item=bw:activated_ironblade_talisman, location=slot.inventory, slot=1}] slot.inventory 1 bw:ironblade_talisman 1
execute as @a[hasitem={item=minecraft:iron_nugget, location=slot.inventory, slot=0..27, quantity=0}] at @s[scores={bw:feedGolem=0}] run replaceitem entity @s[hasitem={item=bw:activated_ironblade_talisman, location=slot.inventory, slot=2}] slot.inventory 2 bw:ironblade_talisman 1

execute as @a at @s[scores={bw:feedGolem=0}] run scoreboard players set @s bw:feedGolem 48000