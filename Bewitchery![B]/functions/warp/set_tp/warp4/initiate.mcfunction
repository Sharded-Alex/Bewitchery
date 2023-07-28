tag @s remove bw:warp_fail
tag @s remove bw:warp_fail2

tag @s[x=0, dx=0] add bw:warp_fail
tag @s[y=0, dy=0] add bw:warp_fail
tag @s[z=0, dz=0] add bw:warp_fail
tellraw @s[tag=bw:warp_fail] {"rawtext":[{"text":"§cYou cannot cast Mark at an X, Y or Z value of 0"}]}

tag @s[x=-20001,dx=-999999999,tag=!bw:warp_fail] add bw:warp_fail2
tag @s[x=20001,dx=999999999,tag=!bw:warp_fail] add bw:warp_fail2
tag @s[z=-20001,dz=-999999999,tag=!bw:warp_fail] add bw:warp_fail2
tag @s[z=20001,dz=999999999,tag=!bw:warp_fail] add bw:warp_fail2
tag @s[y=255,dy=999999999,tag=!bw:warp_fail] add bw:warp_fail
tag @s[y=-65,dy=-999999999,tag=!bw:warp_fail] add bw:warp_fail
tellraw @s[tag=bw:warp_fail2] {"rawtext":[{"text":"§cThe Mark spell is too far out to be used. X, Y and Z must be within -20000 - 20000."}]}

execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=-20000,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/negX_20
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=-19000,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/negX_19
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=-18000,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/negX_18
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=-17000,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/negX_17
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=-16000,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/negX_16
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=-15000,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/negX_15
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=-14000,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/negX_14
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=-13000,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/negX_13
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=-12000,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/negX_12
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=-11000,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/negX_11
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=-10000,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/negX_10
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=-9000,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/negX_9
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=-8000,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/negX_8
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=-7000,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/negX_7
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=-6000,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/negX_6
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=-5000,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/negX_5
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=-4000,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/negX_4
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=-3000,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/negX_3
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=-2000,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/negX_2
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=-1000,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/negX_1
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=0001,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/posX_1
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=1001,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/posX_2
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=2001,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/posX_3
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=3001,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/posX_4
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=4001,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/posX_5
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=5001,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/posX_6
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=6001,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/posX_7
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=7001,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/posX_8
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=8001,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/posX_9
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=9001,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/posX_10
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=10001,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/posX_11
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=11001,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/posX_12
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=12001,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/posX_13
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=13001,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/posX_14
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=14001,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/posX_15
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=15001,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/posX_16
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=16001,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/posX_17
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=17001,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/posX_18
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=18001,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/posX_19
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,x=19001,dx=999,y=-64,dy=350] run function warp/set_tp/warp4/x/posX_20

execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,y=-64,dy=350] run function warp/set_tp/warp4/y/Y_1

execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=-20000,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/negZ_20
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=-19000,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/negZ_19
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=-18000,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/negZ_18
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=-17000,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/negZ_17
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=-16000,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/negZ_16
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=-15000,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/negZ_15
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=-14000,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/negZ_14
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=-13000,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/negZ_13
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=-12000,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/negZ_12
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=-11000,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/negZ_11
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=-10000,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/negZ_10
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=-9000,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/negZ_9
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=-8000,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/negZ_8
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=-7000,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/negZ_7
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=-6000,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/negZ_6
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=-5000,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/negZ_5
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=-4000,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/negZ_4
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=-3000,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/negZ_3
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=-2000,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/negZ_2
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=-1000,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/negZ_1
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=0001,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/posZ_1
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=1001,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/posZ_2
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=2001,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/posZ_3
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=3001,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/posZ_4
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=4001,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/posZ_5
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=5001,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/posZ_6
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=6001,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/posZ_7
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=7001,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/posZ_8
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=8001,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/posZ_9
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=9001,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/posZ_10
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=10001,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/posZ_11
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=11001,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/posZ_12
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=12001,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/posZ_13
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=13001,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/posZ_14
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=14001,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/posZ_15
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=15001,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/posZ_16
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=16001,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/posZ_17
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=17001,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/posZ_18
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=18001,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/posZ_19
execute as @s[tag=!bw:warp_fail,tag=!bw:warp_fail2,z=19001,dz=999,y=-64,dy=350] run function warp/set_tp/warp4/z/posZ_20

tellraw @s[tag=!bw:warp_fail,tag=!bw:warp_fail2] {"rawtext":[{"text":"§5Co-ordinates successfully Marked: §c"},{"score":{"name":"@s","objective":"bw:warp4X"}},{"text":", §a"},{"score":{"name":"@s","objective":"bw:warp4Y"}},{"text":", §3"},{"score":{"name":"@s","objective":"bw:warp4Z"}}]}

tag @s remove bw:warp_fail
tag @s remove bw:warp_fail2