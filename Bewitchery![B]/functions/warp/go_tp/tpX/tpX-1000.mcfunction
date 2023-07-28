gamerule sendcommandfeedback false

execute as @s[scores={bw:tpX=..-1000}] run tp @s ~-1000 ~~
scoreboard players add @s[scores={bw:tpX=..-1000}] bw:tpX 1000
scoreboard players add @s[scores={bw:faeX=..-1000}] bw:faeX 1
execute as @s[scores={bw:tpX=..-1000}] run function warp/go_tp/tpX/tpX-1000
execute as @s[scores={bw:tpX=-999..-100}] run function warp/go_tp/tpX/tpX-100
execute as @s[scores={bw:tpX=-99..-10}] run function warp/go_tp/tpX/tpX-10
execute as @s[scores={bw:tpX=-9..-1}] run function warp/go_tp/tpX/tpX-1

gamerule sendcommandfeedback true