execute as @s run tellraw @s {"rawtext":[{"text":"You are Attuned to the following Element(s)"}]}

execute as @s[scores={bw:Earth=1}] run tellraw @s {"rawtext":[{"text":"§2Earth§r\n"}]}
execute as @s[scores={bw:Solar=1}] run tellraw @s {"rawtext":[{"text":"§cSolar§r\n"}]}
execute as @s[scores={bw:Lunar=1}] run tellraw @s {"rawtext":[{"text":"§3Lunar§r\n"}]}
execute as @s[scores={bw:Sky=1}] run tellraw @s {"rawtext":[{"text":"§7Sky§r\n"}]}
execute as @s[scores={bw:Ender=1}] run tellraw @s {"rawtext":[{"text":"§5Ender§r\n"}]}


execute as @s run tellraw @s {"rawtext":[{"text":"[Affinities]"}]}

execute as @s run tellraw @s {"rawtext":[{"text":"§cSolar: "}, {"score":{ "name": "*", "objective": "bw:solarAff"}}, {"text":".0%"}]}
execute as @s run tellraw @s {"rawtext":[{"text":"§3Lunar: "}, {"score":{ "name": "*", "objective": "bw:lunarAff"}}, {"text":".0%"}]}
execute as @s run tellraw @s {"rawtext":[{"text":"§2Earth: "}, {"score":{ "name": "*", "objective": "bw:earthAff"}}, {"text":".0%"}]}
execute as @s run tellraw @s {"rawtext":[{"text":"§8Sky: "}, {"score":{ "name": "*", "objective": "bw:skyAff"}}, {"text":".0%"}]}
execute as @s run tellraw @s {"rawtext":[{"text":"§5Ender: "}, {"score":{ "name": "*", "objective": "bw:enderAff"}}, {"text":".0%"}]}



execute as @s run tellraw @s {"rawtext":[{"text":"[Warps]"}]}

execute as @s[scores={bw:warp2X=!0, bw:warp2Y=!0, bw:warp2Z=!0}] run tellraw @s {"rawtext":[{"text":"§cSolar: [§c"}, {"score":{ "name": "*", "objective": "bw:warp2X"}}, {"text":", §a"}, {"score":{ "name": "*", "objective": "bw:warp2Y"}}, {"text":"§a, §3"}, {"score":{ "name": "*", "objective": "bw:warp2Z"}}, {"text": "§c]"}]}

execute as @s[scores={bw:warp4X=!0, bw:warp4Y=!0, bw:warp4Z=!0}] run tellraw @s {"rawtext":[{"text":"§3Lunar: [§c"}, {"score":{ "name": "*", "objective": "bw:warp4X"}}, {"text":", §a"}, {"score":{ "name": "*", "objective": "bw:warp4Y"}}, {"text":"§a, §3"}, {"score":{ "name": "*", "objective": "bw:warp4Z"}}, {"text": "§3]"}]}

execute as @s[scores={bw:warp1X=!0, bw:warp1Y=!0, bw:warp1Z=!0}] run tellraw @s {"rawtext":[{"text":"§2Earth: [§c"}, {"score":{ "name": "*", "objective": "bw:warp1X"}}, {"text":", §a"}, {"score":{ "name": "*", "objective": "bw:warp1Y"}}, {"text":"§a, §3"}, {"score":{ "name": "*", "objective": "bw:warp1Z"}}, {"text": "§2]"}]}

execute as @s[scores={bw:warp3X=!0, bw:warp3Y=!0, bw:warp3Z=!0}] run tellraw @s {"rawtext":[{"text":"§8Sky: [§c"}, {"score":{ "name": "*", "objective": "bw:warp3X"}}, {"text":", §a"}, {"score":{ "name": "*", "objective": "bw:warp3Y"}}, {"text":"§a, §3"}, {"score":{ "name": "*", "objective": "bw:warp3Z"}}, {"text": "§8]"}]}

execute as @s[scores={bw:warp5X=!0, bw:warp5Y=!0, bw:warp5Z=!0}] run tellraw @s {"rawtext":[{"text":"§5Ender: [§c"}, {"score":{ "name": "*", "objective": "bw:warp5X"}}, {"text":", §a"}, {"score":{ "name": "*", "objective": "bw:warp5Y"}}, {"text":"§a, §3"}, {"score":{ "name": "*", "objective": "bw:warp5Z"}}, {"text": "§5]"}]}



execute as @s[tag=initiated] run tellraw @s {"rawtext":[{"text":"You have learnt the Knowledge of the following Magics:"}]}

execute as @s[tag=initiated, scores={fire=1}] run tellraw @s {"rawtext":[{"text":"§cPyromancy§r"}]}
execute as @s[tag=initiated, scores={water=1}] run tellraw @s {"rawtext":[{"text":"§bHydromancy§r"}]}
execute as @s[tag=initiated, scores={plant=1}] run tellraw @s {"rawtext":[{"text":"§2Ecomancy§r"}]}
execute as @s[tag=initiated, scores={wind=1}] run tellraw @s {"rawtext":[{"text":"§7Atmomancy§r"}]}
execute as @s[tag=initiated, scores={mystic=1}] run tellraw @s {"rawtext":[{"text":"§dMystomancy§r"}]}
execute as @s[tag=initiated, scores={curse=1}] run tellraw @s {"rawtext":[{"text":"§8Fulmamancy§r"}]}
execute as @s[tag=initiated, scores={light=1}] run tellraw @s {"rawtext":[{"text":"§eLumomancy§r"}]}
execute as @s[tag=initiated, scores={undead=1}] run tellraw @s {"rawtext":[{"text":"§5Necromancy§r"}]}