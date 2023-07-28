execute at @s if block ~2~~1 red_mushroom unless block ~2~~1 brown_mushroom unless block ~2~~1 crying_obsidian run function warp/fae_ring/fae_ring_query/test8
execute at @s if block ~2~~1 brown_mushroom unless block ~2~~1 red_mushroom unless block ~2~~1 crying_obsidian run function warp/fae_ring/fae_ring_query/test8
execute at @s if block ~2~~1 crying_obsidian unless block ~2~~1 red_mushroom unless block ~2~~1 brown_mushroom run function warp/fae_ring/fae_ring_query/test8

execute at @s unless block ~2~~1 red_mushroom unless block ~2~~1 brown_mushroom unless block ~2~~1 crying_obsidian run tellraw @s {"rawtext":[{"text":"§cThe mushroom circle is incomplete! Ensure the mushrooms surround you in a 7x7 circle."}]}

execute at @s[type=bw:warp_dummy] unless block ~2~~1 red_mushroom unless block ~2~~1 brown_mushroom unless block ~2~~1 crying_obsidian run event entity @s death