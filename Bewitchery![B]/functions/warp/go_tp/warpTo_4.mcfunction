gamerule sendcommandfeedback false
scoreboard players add @s bw:warp4X 0
scoreboard players add @s bw:warp4Y 0
scoreboard players add @s bw:warp4Z 0
scoreboard players operation @s bw:tpX = @s bw:warp4X
scoreboard players operation @s bw:tpY = @s bw:warp4Y
scoreboard players operation @s bw:tpZ = @s bw:warp4Z

scoreboard players set @s bw:hasWarp1 0
scoreboard players set @s[scores={bw:warp4X=-20000..20000, bw:warp4Y=-64..255, bw:warp4Z=-20000..20000}] bw:hasWarp1 1

tellraw @s[scores={bw:hasWarp1=0}] {"rawtext":[{"text":"§cThere is no Mark attached to this slot."}]}
tellraw @s[scores={bw:hasWarp1=1}] {"rawtext":[{"text":"§5You have been warped to the location bound to the §3Moon§5!"}]}

tp @s[scores={bw:hasWarp1=1}] 0 0 0
execute as @s[scores={bw:hasWarp1=1}] run function warp/go_tp/tpY/tpY10
execute as @s[scores={bw:hasWarp1=1}] run function warp/go_tp/tpY/tpY-10
execute as @s[scores={bw:hasWarp1=1,bw:warp4X=-20000..-1}] run function warp/go_tp/tpX/tpX-1000
execute as @s[scores={bw:hasWarp1=1,bw:warp4X=1..20000}] run function warp/go_tp/tpX/tpX1000
execute as @s[scores={bw:hasWarp1=1,bw:warp4Z=-20000..-1}] run function warp/go_tp/tpZ/tpZ-1000
execute as @s[scores={bw:hasWarp1=1,bw:warp4Z=1..20000}] run function warp/go_tp/tpZ/tpZ1000