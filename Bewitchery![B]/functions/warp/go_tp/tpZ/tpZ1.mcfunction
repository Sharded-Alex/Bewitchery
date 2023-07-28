gamerule sendcommandfeedback false
execute as @s[scores={bw:tpZ=1..9}] run tp @s ~~~1
scoreboard players remove @s[scores={bw:tpZ=1..9}] bw:tpZ 1
scoreboard players remove @s[scores={bw:faeZ=1..9}] bw:faeZ 1
execute as @s[scores={bw:tpZ=1..9}] run function warp/go_tp/tpZ/tpZ1

gamerule sendcommandfeedback true