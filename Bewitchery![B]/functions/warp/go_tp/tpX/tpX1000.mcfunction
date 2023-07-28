gamerule sendcommandfeedback false

execute as @s[scores={bw:tpX=1000..}] run tp @s ~1000 ~~
scoreboard players remove @s[scores={bw:tpX=1000..}] bw:tpX 1000
scoreboard players remove @s[scores={bw:faeX=1000..}] bw:faeX 1
execute as @s[scores={bw:tpX=1000..}] run function warp/go_tp/tpX/tpX1000
execute as @s[scores={bw:tpX=100..999}] run function warp/go_tp/tpX/tpX100
execute as @s[scores={bw:tpX=10..99}] run function warp/go_tp/tpX/tpX10
execute as @s[scores={bw:tpX=1..9}] run function warp/go_tp/tpX/tpX1

gamerule sendcommandfeedback true