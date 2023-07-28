summon bw:warp_dummy ~~~

scoreboard players add @s bw:warp1X 0
scoreboard players add @s bw:warp1Y 0
scoreboard players add @s bw:warp1Z 0

scoreboard players operation @e[type=bw:warp_dummy, r=1, c=1] bw:warp1X = @s bw:faeRingX
scoreboard players operation @e[type=bw:warp_dummy, r=1, c=1] bw:warp1Y = @s bw:faeRingY
scoreboard players operation @e[type=bw:warp_dummy, r=1, c=1] bw:warp1Z = @s bw:faeRingZ

scoreboard players set @s bw:faeRingX 0
scoreboard players set @s bw:faeRingY 0
scoreboard players set @s bw:faeRingZ 0