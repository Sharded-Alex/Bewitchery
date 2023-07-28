gamerule sendcommandfeedback false

execute as @s[scores={bw:tpZ=-999..-100}] run tp @s[scores={bw:tpZ=-999..-100}] ~~~-100
scoreboard players add @s[scores={bw:tpZ=-999..-100}] bw:tpZ 100
scoreboard players add @s[scores={bw:faeZ=-999..-100}] bw:faeZ 100
execute as @s[scores={bw:tpZ=-999..-100}] run function warp/go_tp/tpZ/tpZ-100
execute as @s[scores={bw:tpZ=-99..-10}] run function warp/go_tp/tpZ/tpZ-10
execute as @s[scores={bw:tpZ=-9..-1}] run function warp/go_tp/tpZ/tpZ-1

gamerule sendcommandfeedback true