gamerule sendcommandfeedback false
execute as @s[scores={bw:tpZ=-9..-1}] run tp @s ~~~-1
scoreboard players add @s[scores={bw:tpZ=-9..-1}] bw:tpZ 1
scoreboard players add @s[scores={bw:faeZ=-9..-1}] bw:faeZ 1
execute as @s[scores={bw:tpZ=-9..-1}] run function warp/go_tp/tpZ/tpZ-1

gamerule sendcommandfeedback true