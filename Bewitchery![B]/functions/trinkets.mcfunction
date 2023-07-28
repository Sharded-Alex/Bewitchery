scoreboard objectives add bw:interval dummy
execute as @a run scoreboard players add @s bw:interval 1
execute as @a[scores={bw:interval=21..}] run scoreboard players set @s bw:interval 0

effect @a[scores={bw:tBlocked=0, bw:interval=20}, hasitem={item=bw:activated_agility_talisman, location=slot.inventory, slot=0..2}] speed 2 1 true

effect @a[scores={bw:tBlocked=0, bw:interval=20}, hasitem={item=bw:activated_leaping_talisman, location=slot.inventory, slot=0..2}] jump_boost 2 1 true

effect @a[scores={bw:tBlocked=0, bw:interval=20}, hasitem={item=bw:activated_feather_talisman, location=slot.inventory, slot=0..2}] slow_falling 2 1 true

execute as @a[scores={bw:tBlocked=0}, hasitem={item=bw:activated_air_walk_talisman, location=slot.inventory, slot=0..2}] at @s run fill ~-1~-1~1 ~1~-1~-1 bw:solid_air [] replace air []
execute as @a[scores={bw:tBlocked=0}, hasitem={item=bw:activated_air_walk_talisman, location=slot.inventory, slot=0..2}] at @s run fill ~-1~-1~1 ~1~-1~-1 bw:solid_air [] replace bw:solid_air ["bw:detectFeet": false]

effect @a[scores={bw:tBlocked=0, bw:interval=20}, hasitem={item=bw:activated_heartblood_talisman, location=slot.inventory, slot=0..2}] regeneration 3 0 true

effect @a[scores={bw:tBlocked=0, bw:interval=20}, hasitem={item=bw:activated_shellbreath_talisman, location=slot.inventory, slot=0..2}] water_breathing 2 0 true
effect @a[scores={bw:tBlocked=0, bw:interval=20}, hasitem={item=bw:activated_shellbreath_talisman, location=slot.inventory, slot=0..2}] resistance 2 1 true

effect @a[scores={bw:tBlocked=0, bw:interval=20}, hasitem={item=bw:activated_fyreblood_talisman, location=slot.inventory, slot=0..2}] fire_resistance 3 0 true

effect @a[scores={bw:tBlocked=0, bw:interval=20}, hasitem={item=bw:activated_witherward_talisman, location=slot.inventory, slot=0..2}] wither 0 225 true

effect @a[scores={bw:tBlocked=0, bw:interval=20}, hasitem={item=bw:activated_detox_talisman, location=slot.inventory, slot=0..2}] poison 0 225 true
effect @a[scores={bw:tBlocked=0, bw:interval=20}, hasitem={item=bw:activated_detox_talisman, location=slot.inventory, slot=0..2}] fatal_poison 0 225 true

effect @a[scores={bw:tBlocked=0, bw:interval=20}, hasitem={item=bw:activated_night_sight_talisman, location=slot.inventory, slot=0..2}] night_vision 12 0 true

effect @a[scores={bw:tBlocked=0, bw:interval=20}, hasitem={item=bw:activated_ironblade_talisman, location=slot.inventory, slot=0..2}] strength 3 0 true