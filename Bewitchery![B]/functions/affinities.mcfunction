scoreboard objectives add bw:solarAff dummy
scoreboard objectives add bw:lunarAff dummy
scoreboard objectives add bw:earthAff dummy
scoreboard objectives add bw:skyAff dummy
scoreboard objectives add bw:enderAff dummy


execute as @a[hasitem={item=bw:solar_witch_hat, location=slot.armor.head}, tag=bw:solarHat, scores={bw:solarAff=-100..14}] run scoreboard players set @s bw:solarAff 15

execute as @a[hasitem={item=bw:lunar_witch_hat, location=slot.armor.head}, tag=bw:lunarHat, scores={bw:lunarAff=-100..14}] run scoreboard players set @s bw:lunarAff 15

execute as @a[hasitem={item=bw:sky_witch_hat, location=slot.armor.head}, tag=bw:skyHat, scores={bw:skyAff=-100..14}] run scoreboard players set @s bw:skyAff 15

execute as @a[hasitem={item=bw:earth_witch_hat, location=slot.armor.head}, tag=bw:earthHat, scores={bw:earthAff=-100..14}] run scoreboard players set @s bw:earthAff 15

execute as @a[hasitem={item=bw:ender_witch_hat, location=slot.armor.head}, tag=bw:enderHat, scores={bw:enderAff=-100..14}] run scoreboard players set @s bw:enderAff 15


execute as @a[scores={bw:solarAff=15..}] run tag @s add bw:solarHat
execute as @a[scores={bw:earthAff=15..}] run tag @s add bw:earthHat
execute as @a[scores={bw:enderAff=15..}] run tag @s add bw:enderHat
execute as @a[scores={bw:skyAff=15..}] run tag @s add bw:skyHat
execute as @a[scores={bw:lunarAff=15..}] run tag @s add bw:lunarHat

execute as @a[scores={bw:solarAff=..14}] run tag @s remove bw:solarHat
execute as @a[scores={bw:earthAff=..14}] run tag @s remove bw:earthHat
execute as @a[scores={bw:enderAff=..14}] run tag @s remove bw:enderHat
execute as @a[scores={bw:skyAff=..14}] run tag @s remove bw:skyHat
execute as @a[scores={bw:lunarAff=..14}] run tag @s remove bw:lunarHat


execute as @a[scores={bw:solarAff=101..}] run scoreboard players set @s bw:solarAff 100

execute as @a[scores={bw:lunarAff=101..}] run scoreboard players set @s bw:lunarAff 100

execute as @a[scores={bw:earthAff=101..}] run scoreboard players set @s bw:earthAff 100

execute as @a[scores={bw:skyAff=101..}] run scoreboard players set @s bw:skyAff 100

execute as @a[scores={bw:enderAff=101..}] run scoreboard players set @s bw:enderAff 100


execute as @a[tag=!bw:solarHat, scores={bw:solarAff=-100..0}] run scoreboard players set @s bw:solarAff 1

execute as @a[tag=!bw:lunarHat, scores={bw:lunarAff=-100..0}] run scoreboard players set @s bw:lunarAff 1

execute as @a[tag=!bw:earthHat, scores={bw:earthAff=-100..0}] run scoreboard players set @s bw:earthAff 1

execute as @a[tag=!bw:skyHat, scores={bw:skyAff=-100..0}] run scoreboard players set @s bw:skyAff 1

execute as @a[tag=!bw:enderHat, scores={bw:enderAff=-100..0}] run scoreboard players set @s bw:enderAff 1