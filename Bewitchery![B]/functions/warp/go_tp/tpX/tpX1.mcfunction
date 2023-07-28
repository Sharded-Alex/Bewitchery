gamerule sendcommandfeedback false
execute as @s[scores={bw:tpX=1..9}] run tp @s ~1 ~~
scoreboard players remove @s[scores={bw:tpX=1..9}] bw:tpX 1
scoreboard players remove @s[scores={bw:faeX=1..9}] bw:faeX 1
execute as @s[scores={bw:tpX=1..9}] run function warp/go_tp/tpX/tpX1

gamerule sendcommandfeedback true