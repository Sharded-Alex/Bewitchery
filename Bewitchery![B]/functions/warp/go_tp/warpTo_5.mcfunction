gamerule sendcommandfeedback false
scoreboard players add @s bw:warp5X 0
scoreboard players add @s bw:warp5Y 0
scoreboard players add @s bw:warp5Z 0
scoreboard players operation @s bw:tpX = @s bw:warp5X
scoreboard players operation @s bw:tpY = @s bw:warp5Y
scoreboard players operation @s bw:tpZ = @s bw:warp5Z

scoreboard players set @s bw:hasWarp1 0
scoreboard players set @s[scores={bw:warp5X=-20000..20000, bw:warp5Y=-64..255, bw:warp5Z=-20000..20000}] bw:hasWarp1 1

tellraw @s[scores={bw:hasWarp1=0}] {"rawtext":[{"text":"§cThere is no Mark attached to this slot."}]}
tellraw @s[scores={bw:hasWarp1=1}] {"rawtext":[{"text":"§5You have been warped to the location bound to the Void!"}]}

tp @s[scores={bw:hasWarp1=1}] 0 0 0
execute as @s[scores={bw:hasWarp1=1}] run function warp/go_tp/tpY/tpY10
execute as @s[scores={bw:hasWarp1=1}] run function warp/go_tp/tpY/tpY-10
execute as @s[scores={bw:hasWarp1=1,bw:warp5X=-20000..-1}] run function warp/go_tp/tpX/tpX-1000
execute as @s[scores={bw:hasWarp1=1,bw:warp5X=1..20000}] run function warp/go_tp/tpX/tpX1000
execute as @s[scores={bw:hasWarp1=1,bw:warp5Z=-20000..-1}] run function warp/go_tp/tpZ/tpZ-1000
execute as @s[scores={bw:hasWarp1=1,bw:warp5Z=1..20000}] run function warp/go_tp/tpZ/tpZ1000