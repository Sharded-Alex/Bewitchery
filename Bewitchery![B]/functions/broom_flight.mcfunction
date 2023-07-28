execute at @a[scores={bw:owner_rider=1}, hasitem={item=bw:broom_basic, location=slot.weapon.mainhand, quantity=1}, rx=-25, rxm=-90] run effect @e[type=bw:flying_broom,r=1, c=1] levitation 1 6 true

execute at @a[scores={bw:owner_rider=1}, hasitem={item=bw:broom_basic, location=slot.weapon.mainhand, quantity=1}, rx=-15, rxm=-25] run effect @e[type=bw:flying_broom,r=1, c=1] levitation 1 3 true

execute at @a[scores={bw:owner_rider=1}, hasitem={item=bw:broom_basic, location=slot.weapon.mainhand, quantity=1}, rx=-5, rxm=-15] run effect @e[type=bw:flying_broom,r=1, c=1] levitation 1 2 true

execute at @a[scores={bw:owner_rider=1}, hasitem={item=bw:broom_basic, location=slot.weapon.mainhand, quantity=1}, rx=20, rxm=-5] run effect @e[type=bw:flying_broom,r=1, c=1] slow_falling 1 1 true

execute at @a[scores={bw:owner_rider=1}, hasitem={item=bw:broom_basic, location=slot.weapon.mainhand, quantity=1}, rx=90, rxm=20] run effect @e[type=bw:flying_broom,r=1, c=1] slow_falling 1 1 true


execute as @a unless entity @e[type=bw:flying_broom, rm=1] run scoreboard players set @s bw:owner_rider 0
execute as @e[type=bw:flying_broom] unless entity @a[scores={bw:owner_rider=1}, rm=1] run ride @s evict_riders


execute as @a[scores={bw:owner_rider=1}, hasitem={item=bw:broom_basic, location=slot.weapon.mainhand, quantity=1}] run tag @s remove bw:broom_hover
execute as @a[scores={bw:owner_rider=1}, hasitem={item=bw:broom_basic, location=slot.weapon.mainhand, quantity=1}] run scoreboard players set @s bw:broomHover 0


execute as @a[scores={bw:owner_rider=1}, hasitem={item=bw:broom_basic, location=slot.weapon.mainhand, quantity=0}] run tag @s add bw:broom_hover


execute as @e[tag=bw:broom_hover] run scoreboard players add @s bw:broomHover 1

execute as @a[tag=bw:broom_hover, scores={bw:broomHover=51..}] run scoreboard players set @s bw:broomHover 0



execute at @a[hasitem={item=bw:broom_basic, location=slot.weapon.mainhand, quantity=0}, tag=bw:broom_hover, scores={bw:broomHover=1..30, bw:owner_rider=1}] run effect @e[type=bw:flying_broom, r=1, c=1] slow_falling 1 0 true

execute at @a[hasitem={item=bw:broom_basic, location=slot.weapon.mainhand, quantity=0}, tag=bw:broom_hover, scores={bw:broomHover=31..50, bw:owner_rider=1}] run effect @e[type=bw:flying_broom, r=1, c=1] levitation 1 0 true

## Broom Effects

execute at @a[scores={bw:owner_rider=1}, hasitem={item=bw:activated_agility_talisman, location=slot.inventory, slot=0..2}] run effect @e[type=bw:flying_broom, r=1, c=1] speed 1 0 true

execute at @a[scores={bw:owner_rider=1}, hasitem={item=bw:activated_fyreblood_talisman, location=slot.inventory, slot=0..2}] run effect @e[type=bw:flying_broom, r=1, c=1] fire_resistance 1 0 true