gamerule sendcommandfeedback false

execute as @s[scores={bw:tpY=-99..-10}] run tp @s ~~-10~
scoreboard players add @s[scores={bw:tpY=-99..-10}] bw:tpY 10
scoreboard players add @s[scores={bw:faeY=-99..-10}] bw:faeY 1
execute as @s[scores={bw:tpY=-99..-10}] run function warp/go_tp/tpY/tpY-10
execute as @s[scores={bw:tpY=-9..-1}] run function warp/go_tp/tpY/tpY-1

gamerule sendcommandfeedback true