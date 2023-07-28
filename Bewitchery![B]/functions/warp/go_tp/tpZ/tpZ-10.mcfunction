gamerule sendcommandfeedback false

execute as @s[scores={bw:tpZ=-99..-10}] run tp @s[scores={bw:tpZ=-99..-10}] ~~~-10
scoreboard players add @s[scores={bw:tpZ=-99..-10}] bw:tpZ 10
scoreboard players add @s[scores={bw:faeZ=-99..-10}] bw:faeZ 10
execute as @s[scores={bw:tpZ=-99..-10}] run function warp/go_tp/tpZ/tpZ-10
execute as @s[scores={bw:tpZ=-9..-1}] run function warp/go_tp/tpZ/tpZ-1

gamerule sendcommandfeedback true