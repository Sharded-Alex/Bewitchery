execute at @s if block ~-1~~-2 red_mushroom unless block ~-1~~-2 brown_mushroom unless block ~-1~~-2 crying_obsidian run function warp/fae_ring/fae_ring_query/test6
execute at @s if block ~-1~~-2 brown_mushroom unless block ~-1~~-2 red_mushroom unless block ~-1~~-2 crying_obsidian run function warp/fae_ring/fae_ring_query/test6
execute at @s if block ~-1~~-2 crying_obsidian unless block ~-1~~-2 red_mushroom unless block ~-1~~-2 brown_mushroom run function warp/fae_ring/fae_ring_query/test6

execute at @s unless block ~-1~~-2 red_mushroom unless block ~-1~~-2 brown_mushroom unless block ~-1~~-2 crying_obsidian run tellraw @s {"rawtext":[{"text":"§cThe mushroom circle is incomplete! Ensure the mushrooms surround you in a 7x7 circle."}]}

execute at @s[type=bw:warp_dummy] unless block ~-1~~-2 red_mushroom unless block ~-1~~-2 brown_mushroom unless block ~-1~~-2 crying_obsidian run event entity @s death