gamerule sendcommandfeedback false
execute as @s[scores={bw:tpY=-9..-1}] run tp @s ~~-1~
scoreboard players add @s[scores={bw:tpY=-9..-1}] bw:tpY 1
scoreboard players add @s[scores={bw:faeY=-9..-1}] bw:faeY 1
execute as @s[scores={bw:tpY=-9..-1}] run function warp/go_tp/tpY/tpY-1

gamerule sendcommandfeedback true