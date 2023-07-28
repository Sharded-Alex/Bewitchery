gamerule sendcommandfeedback false

execute as @s[scores={bw:tpZ=1000..}] run tp @s[scores={bw:tpZ=1000..}] ~~~1000
scoreboard players remove @s[scores={bw:tpZ=1000..}] bw:tpZ 1000
scoreboard players remove @s[scores={bw:faeZ=1000..}] bw:faeZ 1000
execute as @s[scores={bw:tpZ=1000..}] run function warp/go_tp/tpZ/tpZ1000
execute as @s[scores={bw:tpZ=100..999}] run function warp/go_tp/tpZ/tpZ100
execute as @s[scores={bw:tpZ=10..99}] run function warp/go_tp/tpZ/tpZ10
execute as @s[scores={bw:tpZ=1..9}] run function warp/go_tp/tpZ/tpZ1

gamerule sendcommandfeedback true