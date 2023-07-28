gamerule sendcommandfeedback false
scoreboard players add @s bw:faeX 0
scoreboard players add @s bw:faeY 0
scoreboard players add @s bw:faeZ 0
scoreboard players operation @s bw:faeX = @s bw:faeRingX
scoreboard players operation @s bw:faeY = @s bw:faeRingY
scoreboard players operation @s bw:faeZ = @s bw:faeRingZ

scoreboard players set @s bw:hasWarp1 0
scoreboard players set @s[scores={bw:faeRingX=-20000..20000, bw:faeRingY=-64..255, bw:faeRingZ=-20000..20000}] bw:hasWarp1 1

tp @s[scores={bw:hasWarp1=1}] 0 0 0
execute as @s[scores={bw:hasWarp1=1}] run function warp/go_tp/tpY/tpY10
execute as @s[scores={bw:hasWarp1=1}] run function warp/go_tp/tpY/tpY-10
execute as @s[scores={bw:hasWarp1=1,bw:faeRingX=-20000..-1}] run function warp/go_tp/tpX/tpX-1000
execute as @s[scores={bw:hasWarp1=1,bw:faeRingX=1..20000}] run function warp/go_tp/tpX/tpX1000
execute as @s[scores={bw:hasWarp1=1,bw:faeRingZ=-20000..-1}] run function warp/go_tp/tpZ/tpZ-1000
execute as @s[scores={bw:hasWarp1=1,bw:faeRingZ=1..20000}] run function warp/go_tp/tpZ/tpZ1000

scoreboard players set @s bw:faeRingX 0
scoreboard players set @s bw:faeRingY 0
scoreboard players set @s bw:faeRingZ 0