## Ostium Ad Locum
scoreboard objectives add bw:CD1 dummy
execute as @a[scores={bw:CD1=1..}] run scoreboard players remove @s bw:CD1 1

## Creo Aquam
scoreboard objectives add bw:CD2 dummy
execute as @a[scores={bw:CD2=1..}] run scoreboard players remove @s bw:CD2 1
execute as @a[scores={bw:CD1=1..}] run scoreboard players remove @s bw:CD1 1

## Creo Ignis
scoreboard objectives add bw:CD3 dummy
execute as @a[scores={bw:CD3=1..}] run scoreboard players remove @s bw:CD3 1

## Creo Ignis Aquam
scoreboard objectives add bw:CD4 dummy
execute as @a[scores={bw:CD4=1..}] run scoreboard players remove @s bw:CD4 1