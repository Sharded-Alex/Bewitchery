gamerule sendcommandfeedback false

execute as @s[scores={bw:tpX=100..999}] run tp @s ~100 ~~
scoreboard players remove @s[scores={bw:tpX=100..999}] bw:tpX 100
scoreboard players remove @s[scores={bw:faeX=100..999}] bw:faeX 1
execute as @s[scores={bw:tpX=100..999}] run function warp/go_tp/tpX/tpX100
execute as @s[scores={bw:tpX=10..99}] run function warp/go_tp/tpX/tpX10
execute as @s[scores={bw:tpX=1..9}] run function warp/go_tp/tpX/tpX1

gamerule sendcommandfeedback true