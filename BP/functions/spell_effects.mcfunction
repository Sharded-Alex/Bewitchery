## Initialize Interact Spells
scoreboard objectives add bw:absorbEffect dummy
scoreboard objectives add bw:growthEffect dummy
scoreboard objectives add bw:heatEffect dummy
scoreboard objectives add bw:phaseChangeEffect dummy
scoreboard objectives add dur:prophecy dummy

execute as @a[tag=!bw:initSpells] as @s run scoreboard players set @s bw:absorbEffect 0
execute as @a[tag=!bw:initSpells] as @s run scoreboard players set @s bw:growthEffect 0
execute as @a[tag=!bw:initSpells] as @s run scoreboard players set @s bw:heatEffect 0
execute as @a[tag=!bw:initSpells] as @s run scoreboard players set @s bw:phaseChangeEffect 0
execute as @a[tag=!bw:initSpells] as @s run tag @s add bw:initSpells

execute as @e[scores={bw:absorbEffect=1..,  bw:particle=20}] as @s run scoreboard players remove @s bw:absorbEffect 1
execute as @e[scores={bw:growthEffect=1..,  bw:particle=20}] as @s run scoreboard players remove @s bw:growthEffect 1
execute as @e[scores={bw:phaseChangeEffect=1..,  bw:particle=20}] as @s run scoreboard players remove @s bw:phaseChangeEffect 1
execute as @e[scores={bw:heatEffect=1..,  bw:particle=20}] as @s run scoreboard players remove @s bw:heatEffect 1
execute as @e[scores={dur:prophecy=1..,  bw:particle=20}] as @s run scoreboard players remove @s dur:prophecy 1
execute as @e[scores={dur:prophecy=1,  bw:particle=20}] as @s run scriptevent bw:undeadAmbush

## Status Durations
scoreboard objectives add bw:frost dummy
scoreboard objectives add bw:wet dummy

## General Effect Scores
scoreboard objectives add bw:particle dummy
scoreboard objectives add bw:fireSkin dummy


## Particles
execute as @e as @s run scoreboard players add @s bw:particle 1
execute as @e[scores={bw:particle=21..}] as @s run scoreboard players set @s bw:particle 0

execute as @e[tag=bw:fire_skin, scores={bw:particle=20}] at @s run particle bw:fire_skin_particle ~~1~
execute as @e[tag=efx:frost, scores={bw:particle=20}] at @s run particle bw:frost_status_particle ~~1~
execute as @e[tag=efx:wet, scores={bw:particle=20}] at @s run particle bw:wet_status_particle ~~1~


## Fire Skin Spell
execute as @e[tag=bw:fire_skin, scores={bw:fireSkin=1.., bw:particle=20}] as @s run scoreboard players remove @s bw:fireSkin 1

execute as @e[scores={bw:fireSkin=1.., bw:particle=20}] at @s if block ~~~ fire [] run effect @s regeneration 3 0 true
execute as @e[scores={bw:fireSkin=1.., bw:particle=20}] at @s if block ~~~ soul_fire [] run effect @s saturation 2 0 true

execute as @e[scores={bw:fireSkin=..0}] as @s run tag @s remove bw:fire_skin
execute as @e[tag=!bw:fire_skin] as @s run scoreboard players set @s bw:fireSkin 0


## Status Interactions
execute as @e[tag=efx:frost] as @s run scriptevent bw:statusInteract
execute as @e[tag=efx:wet] as @s run scriptevent bw:statusInteract

execute as @e[scores={bw:frost=1..,  bw:particle=20}] as @s run scoreboard players remove @s bw:frost 1
execute as @e[tag=efx:frost, scores={bw:frost=0}] as @s run tag @s remove efx:frost

execute as @e[scores={bw:wet=1..,  bw:particle=20}] as @s run scoreboard players remove @s bw:wet 1
execute as @e[tag=efx:wet, scores={bw:wet=0}] as @s run tag @s remove efx:wet

execute as @a[hasitem={item=leather_boots, location=slot.armor.feet, quantity=1}] run scriptevent bw:fly
execute as @e[type=bw:flying_broom] run scriptevent bw:broomFlight