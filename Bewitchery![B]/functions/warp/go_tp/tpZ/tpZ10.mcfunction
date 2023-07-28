gamerule sendcommandfeedback false

execute as @s[scores={bw:tpZ=10..99}] run tp @s[scores={bw:tpZ=10..99}] ~~~10
scoreboard players remove @s[scores={bw:tpZ=10..99}] bw:tpZ 10
scoreboard players remove @s[scores={bw:faeZ=10..99}] bw:faeZ 10
execute as @s[scores={bw:tpZ=10..99}] run function warp/go_tp/tpZ/tpZ10
execute as @s[scores={bw:tpZ=1..9}] run function warp/go_tp/tpZ/tpZ1

gamerule sendcommandfeedback true