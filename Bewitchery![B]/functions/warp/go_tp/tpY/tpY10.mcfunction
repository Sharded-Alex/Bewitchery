gamerule sendcommandfeedback false

execute as @s[scores={bw:tpY=10..99}] run tp @s ~~10~
scoreboard players remove @s[scores={bw:tpY=10..99}] bw:tpY 10
scoreboard players remove @s[scores={bw:faeY=10..99}] bw:faeY 1
execute as @s[scores={bw:tpY=10..99}] run function warp/go_tp/tpY/tpY10
execute as @s[scores={bw:tpY=1..9}] run function warp/go_tp/tpY/tpY1

gamerule sendcommandfeedback true