gamerule sendcommandfeedback false
execute as @s[scores={bw:tpX=-99..-10}] run tp @s ~-10 ~~
scoreboard players add @s[scores={bw:tpX=-99..-10}] bw:tpX 10
scoreboard players add @s[scores={bw:faeX=-99..-10}] bw:faeX 1
execute as @s[scores={bw:tpX=-99..-10}] run function warp/go_tp/tpX/tpX-10
execute as @s[scores={bw:tpX=-9..-1}] run function warp/go_tp/tpX/tpX-1

gamerule sendcommandfeedback true