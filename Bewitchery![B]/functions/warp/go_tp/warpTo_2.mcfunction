gamerule sendcommandfeedback false
scoreboard players add @s bw:warp2X 0
scoreboard players add @s bw:warp2Y 0
scoreboard players add @s bw:warp2Z 0
scoreboard players operation @s bw:tpX = @s bw:warp2X
scoreboard players operation @s bw:tpY = @s bw:warp2Y
scoreboard players operation @s bw:tpZ = @s bw:warp2Z

scoreboard players set @s bw:hasWarp1 0
scoreboard players set @s[scores={bw:warp2X=-20000..20000, bw:warp2Y=-64..255, bw:warp2Z=-20000..20000}] bw:hasWarp1 1

tellraw @s[scores={bw:hasWarp1=0}] {"rawtext":[{"text":"§cThere is no Mark attached to this slot."}]}
tellraw @s[scores={bw:hasWarp1=1}] {"rawtext":[{"text":"§5You have been warped to the location bound to the §cSun§5!"}]}

tp @s[scores={bw:hasWarp1=1}] 0 0 0
execute as @s[scores={bw:hasWarp1=1}] run function warp/go_tp/tpY/tpY10
execute as @s[scores={bw:hasWarp1=1}] run function warp/go_tp/tpY/tpY-10
execute as @s[scores={bw:hasWarp1=1,bw:warp2X=-20000..-1}] run function warp/go_tp/tpX/tpX-1000
execute as @s[scores={bw:hasWarp1=1,bw:warp2X=1..20000}] run function warp/go_tp/tpX/tpX1000
execute as @s[scores={bw:hasWarp1=1,bw:warp2Z=-20000..-1}] run function warp/go_tp/tpZ/tpZ-1000
execute as @s[scores={bw:hasWarp1=1,bw:warp2Z=1..20000}] run function warp/go_tp/tpZ/tpZ1000