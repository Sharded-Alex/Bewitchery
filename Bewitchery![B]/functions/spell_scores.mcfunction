## Wands
scoreboard objectives add bw:wandSpell dummy
scoreboard objectives add bw:wandUse dummy
scoreboard objectives add bw:Range dummy
scoreboard objectives add bw:RangeHit dummy

## Spell Slots
scoreboard objectives add bw:spellSlot1 dummy
scoreboard objectives add bw:spellSlot2 dummy
scoreboard objectives add bw:spellTime dummy

## Start Spell Timer
execute as @a[scores={bw:spellSlot1=1..6}] run scoreboard players add @s bw:spellTime 1
execute as @a[scores={bw:spellSlot1=1..5, bw:spellSlot2=1..5}] run scoreboard players add @s bw:spellTime 1

## Reset Spell Timers (if the player takes too long)
execute as @a[scores={bw:spellTime=101..}] run scoreboard players set @s bw:spellSlot1 0
execute as @a[scores={bw:spellTime=101..}] run scoreboard players set @s bw:spellSlot2 0
execute as @a[scores={bw:spellTime=101..}] run scoreboard players set @s bw:spellTime 0



## Primal Elements

scoreboard objectives add bw:Solar dummy
scoreboard objectives add bw:Lunar dummy
scoreboard objectives add bw:Earth dummy
scoreboard objectives add bw:Sky dummy
scoreboard objectives add bw:Ender dummy
scoreboard objectives add bw:Begin dummy

execute as @a[tag=!bw:startElement] run scoreboard players random @s bw:Begin 0 5

execute as @a[scores={bw:Begin=0}, tag=!bw:startElement] run tellraw @s {"rawtext":[{"text":"You feel energies pulsing around you but none connect with you. You have no affinities to any of the Primal Elements."}]}

execute as @a[scores={bw:Begin=1}, tag=!bw:startElement] run tellraw @s {"rawtext":[{"text":"A hot energy settles deep within your soul, burning you with its heat. You have been infused with energies of the §cSun§r. You have gained 15.0% Affinity with this Primal Element."}]}
execute as @a[scores={bw:Begin=1}, tag=!bw:startElement] run scoreboard players set @s bw:Solar 1
execute as @a[scores={bw:Begin=1}, tag=!bw:startElement] run scoreboard players set @s bw:solarAff 15
execute as @a[scores={bw:Begin=1}, tag=!bw:startElement] run damage @s 2 fire

execute as @a[scores={bw:Begin=2}, tag=!bw:startElement] run tellraw @s {"rawtext":[{"text":"The world around you unravels as you see that reality and illusion are two faces of the same coin. You have been infused with energies of the §3Moon§r. You have gained 15.0% Affinity with this Primal Element."}]}
execute as @a[scores={bw:Begin=2}, tag=!bw:startElement] run scoreboard players set @s bw:Lunar 1
execute as @a[scores={bw:Begin=2}, tag=!bw:startElement] run scoreboard players set @s bw:lunarAff 15
execute as @a[scores={bw:Begin=2}, tag=!bw:startElement] run effect @s nausea 10 6 true

execute as @a[scores={bw:Begin=3}, tag=!bw:startElement] run tellraw @s {"rawtext":[{"text":"An energy around you thrums with calming power as it seems to accept you in its space. You have been infused with energies of the §2Earth§r. You have gained 15.0% Affinity with this Primal Element."}]}
execute as @a[scores={bw:Begin=3}, tag=!bw:startElement] run scoreboard players set @s bw:Earth 1
execute as @a[scores={bw:Begin=3}, tag=!bw:startElement] run scoreboard players set @s bw:earthAff 15
execute as @a[scores={bw:Begin=3}, tag=!bw:startElement] run effect @s regeneration 10 0 true

execute as @a[scores={bw:Begin=4}, tag=!bw:startElement] run tellraw @s {"rawtext":[{"text":"An energy above you writhes with power and chaos but within it, you feel a calmness you cannot explain. You have been infused with energies of the §8Sky§r. You have gained 15.0% Affinity with this Primal Element."}]}
execute as @a[scores={bw:Begin=4}, tag=!bw:startElement] run scoreboard players set @s bw:Sky 1
execute as @a[scores={bw:Begin=4}, tag=!bw:startElement] run scoreboard players set @s bw:skyAff 15
execute as @a[scores={bw:Begin=4}, tag=!bw:startElement] run weather rain 300

execute as @a[scores={bw:Begin=5}, tag=!bw:startElement] run tellraw @s {"rawtext":[{"text":"You feel a vast nothingness watching your every move. You have been chosen by the §5Void§r. You have gained 15.0% Affinity with this Primal Element."}]}
execute as @a[scores={bw:Begin=5}, tag=!bw:startElement] run scoreboard players set @s bw:enderAff 15
execute as @a[scores={bw:Begin=5}, tag=!bw:startElement] run scoreboard players set @s bw:Ender 1

execute as @a[scores={bw:Begin=!1}, tag=!bw:startElement] run scoreboard players set @s bw:solarAff 1
execute as @a[scores={bw:Begin=!2}, tag=!bw:startElement] run scoreboard players set @s bw:lunarAff 1
execute as @a[scores={bw:Begin=!3}, tag=!bw:startElement] run scoreboard players set @s bw:earthAff 1
execute as @a[scores={bw:Begin=!4}, tag=!bw:startElement] run scoreboard players set @s bw:skyAff 1
execute as @a[scores={bw:Begin=!5}, tag=!bw:startElement] run scoreboard players set @s bw:enderAff 1

execute as @a[tag=!bw:startElement] run tag @s add bw:startElement


## Curse Stuffs
execute as @a[tag=!bw:curseAdd] run scoreboard players set @s bw:tBlocked 0
execute as @a[tag=!bw:curseAdd] run scoreboard players set @s bw:p_Blocked 0

execute as @a[tag=!bw:curseAdd] run tag @s add bw:curseAdd


## Warp Scores
execute as @e[tag=!bw:warpable] run function warp/setObjectives
execute as @e[tag=!bw:warpable] run tag @s add bw:warpable

scoreboard objectives add bw:particleT dummy

execute as @e[type=bw:warp_dummy] run scoreboard players add @s bw:particleT 1
execute as @e[type=bw:warp_dummy] at @s[scores={bw:particleT=30}] run particle bw:fae_ring_particle ~~~
execute as @e[type=bw:warp_dummy] run scoreboard players set @s[scores={bw:particleT=31}] bw:particleT 1


scoreboard objectives add bw:owner_rider dummy


execute as @a[tag=!bw:magicGuide] at @s run loot give @s loot "guides/bos"
execute as @a[tag=!bw:magicGuide] at @s run scoreboard players set @s bw:wandSpell 0
execute as @a[tag=!bw:magicGuide] at @s run tag @s add bw:magicGuide