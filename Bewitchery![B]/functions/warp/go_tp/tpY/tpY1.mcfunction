gamerule sendcommandfeedback false
execute as @s[scores={bw:tpY=1..9}] run tp @s ~~1~
scoreboard players remove @s[scores={bw:tpY=1..9}] bw:tpY 1
scoreboard players remove @s[scores={bw:faeY=1..9}] bw:faeY 1
execute as @s[scores={bw:tpY=1..9}] run function warp/go_tp/tpY/tpY1

gamerule sendcommandfeedback true