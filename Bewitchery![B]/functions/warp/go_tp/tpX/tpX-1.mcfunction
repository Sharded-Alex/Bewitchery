gamerule sendcommandfeedback false
execute as @s[scores={bw:tpX=-9..-1}] run tp @s ~-1 ~~
scoreboard players add @s[scores={bw:tpX=-9..-1}] bw:tpX 1
scoreboard players add @s[scores={bw:faeX=-9..-1}] bw:faeX 1
execute as @s[scores={bw:tpX=-9..-1}] run function warp/go_tp/tpX/tpX-1

gamerule sendcommandfeedback true