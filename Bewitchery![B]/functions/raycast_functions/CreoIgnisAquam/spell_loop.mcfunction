scoreboard players remove @s bw:Range 1

execute if score @s bw:Range matches 0 run function raycast_functions/CreoIgnisAquam/spell_effect
execute if score @s bw:Range matches 1.. unless block ^^^1 air run function raycast_functions/CreoIgnisAquam/spell_effect

execute if score @s bw:Range matches 1.. positioned ^^^1 if block ~~~ air run function raycast_functions/CreoIgnisAquam/spell_loop