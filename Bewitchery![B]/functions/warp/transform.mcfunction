scoreboard players add @s bw:faeRingX 0
scoreboard players add @s bw:faeRingY 0
scoreboard players add @s bw:faeRingZ 0
scoreboard players operation @s bw:faeRingX = @s bw:tpX 
scoreboard players operation @s bw:faeRingY = @s bw:tpY
scoreboard players operation @s bw:faeRingZ =  @s bw:tpZ

execute as @s run function warp/fae_ring/faeWarp