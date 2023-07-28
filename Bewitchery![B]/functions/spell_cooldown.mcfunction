## Spell Cooldowns
scoreboard objectives add bw:broomHover dummy

scoreboard objectives add bw:sB_CD dummy
scoreboard objectives add bw:sF_CD dummy
scoreboard objectives add bw:sR_CD dummy
scoreboard objectives add bw:sSun_CD dummy
scoreboard objectives add bw:sH_CD dummy
scoreboard objectives add bw:fRes_CD dummy
scoreboard objectives add bw:fGh_CD dummy

scoreboard objectives add bw:conceal_CD dummy
scoreboard objectives add bw:aB_CD dummy
scoreboard objectives add bw:lA_CD dummy
scoreboard objectives add bw:fBite_CD dummy
scoreboard objectives add bw:splash_CD dummy
scoreboard objectives add bw:astralF_CD dummy

scoreboard objectives add bw:fH_CD dummy
scoreboard objectives add bw:bF_CD dummy
scoreboard objectives add bw:rVy_CD dummy
scoreboard objectives add bw:eD_CD dummy
scoreboard objectives add bw:poison_CD dummy
scoreboard objectives add bw:growth_CD dummy
scoreboard objectives add bw:growth_CDT dummy
scoreboard objectives add bw:fAbsorb_CD dummy

scoreboard objectives add bw:lB_CD dummy
scoreboard objectives add bw:hasten_CD dummy
scoreboard objectives add bw:sFall_CD dummy
scoreboard objectives add bw:float_CD dummy
scoreboard objectives add bw:reflect_CD dummy

scoreboard objectives add bw:eS_CD dummy
scoreboard objectives add bw:eBolt_CD dummy
scoreboard objectives add bw:eChest_CD dummy

scoreboard objectives add bw:iSh_CD dummy
scoreboard objectives add bw:dV_CD dummy
scoreboard objectives add bw:combust_CD dummy
scoreboard objectives add bw:slow_CD dummy
scoreboard objectives add bw:rot_CD dummy

scoreboard objectives add bw:Bolt_CD dummy
scoreboard objectives add bw:aK_CD dummy


scoreboard objectives add bw:frost dummy
scoreboard objectives add bw:frostTime dummy





## Actual Cooldowns
execute as @a[scores={bw:sB_CD=1..}] run scoreboard players remove @s bw:sB_CD 1
execute as @a[scores={bw:sF_CD=1..}] run scoreboard players remove @s bw:sF_CD 1
execute as @a[scores={bw:sS_CD=1..}] run scoreboard players remove @s bw:sS_CD 1
execute as @a[scores={bw:sR_CD=1..}] run scoreboard players remove @s bw:sR_CD 1
execute as @a[scores={bw:sSun_CD=1..}] run scoreboard players remove @s bw:sSun_CD 1
execute as @a[scores={bw:sH_CD=1..}] run scoreboard players remove @s bw:sH_CD 1

execute as @a[scores={bw:fRes_CD=1..}] run scoreboard players remove @s bw:fRes_CD 1
execute as @a at @s if block ~~~ fire run effect @s[tag=bw:fireStrength] strength 3 0 true
execute as @a[scores={bw:fRes_CD=..120}] run tag @s remove bw:fireStrength

execute as @a[scores={bw:fGh_CD=1..}] run scoreboard players remove @s bw:fGh_CD 1

execute as @a[scores={bw:conceal_CD=1..}] run scoreboard players remove @s bw:conceal_CD 1
execute as @a[scores={bw:aB_CD=1..}] run scoreboard players remove @s bw:aB_CD 1
execute as @a[scores={bw:splash_CD=1..}] run scoreboard players remove @s bw:splash_CD 1
execute as @a[scores={bw:fBite_CD=1..}] run scoreboard players remove @s bw:fBite_CD 1
execute as @a[scores={bw:astralF_CD=1..}] run scoreboard players remove @s bw:astralF_CD 1
execute as @a[tag=bw:astralForm, scores={bw:astralF_CD=300}] run tellraw @s {"rawtext": [{"text": "§bYou feel your body taking form once more. You have 10 seconds remaining.§r"}]}
execute as @a[tag=bw:astralForm, scores={bw:astralF_CD=..100}] run tag @s remove bw:astralForm
gamemode survival @a[tag=!bw:astralForm, m=spectator, scores={bw:astralF_CD=80..100}]

execute as @a[scores={bw:bF_CD=1..}] run scoreboard players remove @s bw:bF_CD 1
execute as @a[scores={bw:eD_CD=1..}] run scoreboard players remove @s bw:eD_CD 1
execute as @a[scores={bw:rVy_CD=1..}] run scoreboard players remove @s bw:rVy_CD 1
execute as @a[scores={bw:fH_CD=1..}] run scoreboard players remove @s bw:fH_CD 1
execute as @a[scores={bw:poison_CD=1..}] run scoreboard players remove @s bw:poison_CD 1

execute as @a[scores={bw:growth_CD=100.., bw:growth_CDT=20}] at @s run function growth_magic
execute as @a[scores={bw:growth_CDT=1..}] run scoreboard players add @s bw:growth_CDT 1
execute as @a[scores={bw:growth_CDT=21}] run scoreboard players set @s bw:growth_CDT 1
execute as @a[scores={bw:growth_CD=1..}] run scoreboard players remove @s bw:growth_CD 1
execute as @a[scores={bw:growth_CD=..100}] run scoreboard players set @s bw:growth_CDT 0

execute as @a[scores={bw:fAbsorb_CD=1..}] run scoreboard players remove @s bw:fAbsorb_CD 1


execute as @a[scores={bw:lB_CD=1..}] run scoreboard players remove @s bw:lB_CD 1
execute as @a[scores={bw:hasten_CD=1..}] run scoreboard players remove @s bw:hasten_CD 1
execute as @a[scores={bw:sFall_CD=1..}] run scoreboard players remove @s bw:sFall_CD 1
execute as @a[scores={bw:float_CD=1..}] run scoreboard players remove @s bw:float_CD 1
execute as @a[scores={bw:reflect_CD=1..}] run scoreboard players remove @s bw:reflect_CD 1
execute at @a[scores={bw:reflect_CD=100..}] run kill @e[type=minecraft:arrow, r=3.5]
execute at @a[scores={bw:reflect_CD=100..}] run kill @e[type=minecraft:small_fireball, r=3.5]
execute at @a[scores={bw:reflect_CD=100..}] run kill @e[type=minecraft:small_fireball, r=3.5]
execute at @a[scores={bw:reflect_CD=100..}] run particle bw:storm_reflect ~~~

execute as @a[scores={bw:eS_CD=1..}] run scoreboard players remove @s bw:eS_CD 1
execute as @a[scores={bw:eBolt_CD=1..}] run scoreboard players remove @s bw:eBolt_CD 1
execute as @a[scores={bw:eChest_CD=1..}] run scoreboard players remove @s bw:eChest_CD 1

execute as @a[scores={bw:iSh_CD=1..}] run scoreboard players remove @s bw:iSh_CD 1
execute as @a[scores={bw:dV_CD=1..}] run scoreboard players remove @s bw:dV_CD 1
execute as @a[scores={bw:combust_CD=1..}] run scoreboard players remove @s bw:combust_CD 1
execute as @a[scores={bw:slow_CD=1..}] run scoreboard players remove @s bw:slow_CD 1
execute as @a[scores={bw:rot_CD=1..}] run scoreboard players remove @s bw:rot_CD 1

execute as @a[scores={bw:Bolt_CD=1..}] run scoreboard players remove @s bw:Bolt_CD 1
execute as @a[scores={bw:aK_CD=1..}] run scoreboard players remove @s bw:aK_CD 1


execute as @e[scores={bw:frost=1..}] run scoreboard players remove @s bw:frost 1
execute as @e[scores={bw:frostTime=1..}] run scoreboard players add @s bw:frostTime 1
execute as @e[scores={bw:frostTime=21..}] run scoreboard players set @s bw:frostTime 1
execute as @e[scores={bw:frost=1.., bw:frostTime=20}] run damage @s 1 drowning
execute as @e[scores={bw:frostTime=0}] run scoreboard players set @s bw:frostTime 0