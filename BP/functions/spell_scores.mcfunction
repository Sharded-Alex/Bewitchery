execute as @e run scoreboard objectives add bw:castTime dummy
execute as @e run scoreboard objectives add bw:curseTimer dummy
execute as @a run scoreboard objectives add bw:spiritCD dummy
execute as @a run scoreboard objectives add bw:fatgTimer dummy
execute as @a run scoreboard objectives add bw:Fatigue dummy

execute as @a[tag=!bw:Initialize] as @s run scoreboard players set @s bw:castTime 0
execute as @a[tag=!bw:Initialize] as @s run scoreboard players set @s bw:spiritCD 0
execute as @a[tag=!bw:Initialize] as @s run scoreboard players set @s bw:Fatigue 0
execute as @a[tag=!bw:Initialize] as @s run tag @s add bw:Initialize


execute as @a[scores={bw:Fatigue=1..}] as @s run scoreboard players add @s bw:fatgTimer 1
execute as @a[scores={bw:fatgTimer=61..}] as @s run scoreboard players set @s bw:fatgTimer 0
execute as @a[scores={bw:Fatigue=0}] as @s run scoreboard players set @s bw:fatgTimer 0

execute as @a[scores={bw:spiritCD=1..}] as @s run scoreboard players remove @s bw:spiritCD 1
execute as @a[scores={bw:Fatigue=1.., bw:fatgTimer=20}] as @s run scriptEvent bw:fatigueMechanic
execute as @a[scores={bw:Fatigue=1.., bw:fatgTimer=40}] as @s run scriptEvent bw:fatigueMechanic
execute as @a[scores={bw:Fatigue=1.., bw:fatgTimer=60}] as @s run scriptEvent bw:fatigueMechanic
execute as @a[scores={bw:Fatigue=1.., bw:fatgTimer=60}] as @s run scoreboard players remove @s bw:Fatigue 1



execute as @e[tag=BW:cursed] as @s run scoreboard players add @s bw:curseTimer 1
execute as @e[tag=BW:cursed, scores={bw:curseTimer=11..}] as @s run scoreboard players set @s bw:curseTimer 0

execute as @e[tag=BWcurse:ocean_grasp, scores={bw:curseTimer=10}] as @s run scriptevent bwCurses:curses
execute as @e[tag=BWcurse:hellish_attraction, scores={bw:curseTimer=10}] as @s run scriptevent bwCurses:curses
execute as @e[tag=BWcurse:endermanHex, scores={bw:curseTimer=10}] as @s run scriptevent bwCurses:curses
execute as @e[tag=BWcurse:creeper_hex, scores={bw:curseTimer=10}] as @s run scriptevent bwCurses:curses