scoreboard objectives add bw:darkCurse_D dummy
scoreboard objectives add bw:darkRand dummy
scoreboard objectives add bw:darkRandT dummy

scoreboard objectives add bw:regenCurse dummy

scoreboard objectives add bw:lBind_Curse dummy

scoreboard objectives add bw:tBlocked dummy

scoreboard objectives add bw:p_Blocked dummy

scoreboard objectives add bw:hydroCurse dummy
scoreboard objectives add bw:hydroCurseT dummy

scoreboard objectives add bw:hauntedC dummy
scoreboard objectives add bw:hauntedRand dummy
scoreboard objectives add bw:hauntedTime dummy

scoreboard objectives add bw:eatCurse dummy
scoreboard objectives add bw:eatRandom dummy
scoreboard objectives add bw:eatCurseT dummy



## Curse of Fading Light
execute as @e[scores={bw:darkCurse_D=1.., bw:darkRand=0}] run scoreboard players random @s bw:darkRand 1 4

execute as @e[tag=!bw:darkCurse, scores={bw:darkRand=1..4}] run effect @s darkness 30 1

execute as @e[tag=!bw:darkCurse, scores={bw:darkRand=1}] run scoreboard players set @s bw:darkRandT 900
execute as @e[tag=!bw:darkCurse, scores={bw:darkRand=2}] run scoreboard players set @s bw:darkRandT 1200
execute as @e[tag=!bw:darkCurse, scores={bw:darkRand=3}] run scoreboard players set @s bw:darkRandT 1500
execute as @e[tag=!bw:darkCurse, scores={bw:darkRand=4}] run scoreboard players set @s bw:darkRandT 1800

execute as @e[tag=!bw:darkCurse, scores={bw:darkRand=1..4}] run tag @s add bw:darkCurse

execute as @e[scores={bw:darkRandT=1..}] run scoreboard players remove @s bw:darkRandT 1
execute as @e[scores={bw:darkRandT=0}] run tag @s remove bw:darkCurse
execute as @e[scores={bw:darkRandT=0}] run scoreboard players remove @s bw:darkRand 0

execute as @e[scores={bw:darkCurse_D=1..}] run scoreboard players remove @s bw:darkCurse_D 1
execute as @e[scores={bw:darkCurse_D=0}] run scoreboard players set @s bw:darkRand 0
execute as @e[scores={bw:darkCurse_D=0}] run scoreboard players set @s bw:darkRandT 0
execute as @e[scores={bw:darkCurse_D=0}] run tag @s remove bw:darkCurse


## Curse of Halted Vitality
execute as @e[scores={bw:regenCurse=10..}] run effect @s regeneration 0 225
execute as @e[scores={bw:regenCurse=1..}] run scoreboard players remove @s bw:regenCurse 1


## Curse of Lunar Binding
execute as @a[scores={bw:lBind_Curse=10..}] run gamemode survival @s[m=spectator]
execute as @a[scores={bw:lBind_Curse=1..}] run scoreboard players remove @s bw:lBind_Curse 1


## Curse of Talisman Binding
execute as @a[scores={bw:tBlocked=1..}] run scoreboard players remove @s bw:tBlocked 1


## Curse of Primal Binding
execute as @a[scores={bw:p_Blocked=1..}] run scoreboard players remove @s bw:p_Blocked 1
execute as @a[tag=initiated, scores={bw:p_Blocked=1.., block_magic=0}] run scoreboard players set @s block_magic 1
execute as @a[tag=initiated, scores={bw:p_Blocked=0, block_magic=1}] run scoreboard players set @s block_magic 0


## Curse of Hydrophobia
execute as @e[scores={bw:hydroCurse=1.., bw:hydroCurseT=20}] run damage @s 1 drowning
execute as @e[scores={bw:hydroCurseT=1..}] at @s if block ~~~ water run scoreboard players add @s bw:hydroCurseT 1
execute as @e[scores={bw:hydroCurseT=1..}] at @s unless block ~~~ water run scoreboard players set @s bw:hydroCurseT 1
execute as @e[scores={bw:hydroCurseT=21}] run scoreboard players set @s bw:hydroCurseT 1
execute as @e[scores={bw:hydroCurse=1..}] run scoreboard players remove @s bw:hydroCurse 1
execute as @e[scores={bw:hydroCurse=0}] run scoreboard players set @s bw:hydroCurseT 0


## Curse of Psychosis
execute as @e[scores={bw:hauntedC=1.., bw:hauntedRand=0}] run scoreboard players set @s bw:hauntedRand 1

execute as @e[tag=!bw:haunted, scores={bw:hauntedRand=1}] run damage @s 5 magic
execute as @e[tag=!bw:haunted, scores={bw:hauntedC=1..}] at @s run playsound mob.ghast.scream @s ~~~ 1.4

execute as @e[tag=!bw:haunted, scores={bw:hauntedRand=1}] run scoreboard players random @s bw:hauntedTime 900 2400

execute as @e[tag=!bw:haunted, scores={bw:hauntedRand=1}] run tag @s add bw:haunted

execute as @e[scores={bw:hauntedTime=1..}] run scoreboard players remove @s bw:hauntedTime 1
execute as @e[scores={bw:hauntedTime=0}] run tag @s remove bw:haunted
execute as @e[scores={bw:hauntedTime=0}] run scoreboard players remove @s bw:hauntedRand 0

execute as @e[scores={bw:hauntedC=1..}] run scoreboard players remove @s bw:hauntedC 1
execute as @e[scores={bw:hauntedC=0}] run scoreboard players set @s bw:hauntedRand 0
execute as @e[scores={bw:hauntedC=0}] run scoreboard players set @s bw:hauntedTime 0
execute as @e[scores={bw:hauntedC=0}] run tag @s remove bw:haunted


## Curse of Famine
execute as @e[scores={bw:eatCurse=1.., bw:eatRandom=0}] run scoreboard players set @s bw:eatRandom 1

execute as @e[tag=!bw:hungry, scores={bw:eatRandom=1}] run effect @s hunger 25 2

execute as @e[tag=!bw:hungry, scores={bw:eatRandom=1}] run scoreboard players random @s bw:eatCurseT 900 1800

execute as @e[tag=!bw:hungry, scores={bw:eatRandom=1}] run tag @s add bw:hungry

execute as @e[scores={bw:eatCurseT=1..}] run scoreboard players remove @s bw:eatCurseT 1
execute as @e[scores={bw:eatCurseT=0}] run tag @s remove bw:hungry
execute as @e[scores={bw:eatCurseT=0}] run scoreboard players remove @s bw:eatRandom 0

execute as @e[scores={bw:eatCurse=1..}] run scoreboard players remove @s bw:eatCurse 1
execute as @e[scores={bw:eatCurse=0}] run scoreboard players set @s bw:eatRandom 0
execute as @e[scores={bw:eatCurse=0}] run scoreboard players set @s bw:eatCurseT 0
execute as @e[scores={bw:eatCurse=0}] run tag @s remove bw:hungry
