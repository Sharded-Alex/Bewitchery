execute at @a run gamemode spectator @a[tag=bw:astralForm, m=survival, scores={bw:astralF_CD=899..}]

execute at @a run gamemode spectator @a[tag=bw:astralForm, m=survival, scores={bw:astralF_CD=599}]


## Obsidian
execute as @a[tag=bw:astralForm, scores={bw:astralF_CD=101..}] at @s if block ~~~ obsidian run scoreboard players set @s bw:astralF_CD 100
execute as @a[tag=bw:astralForm, scores={bw:astralF_CD=101..}] at @s if block ~~1~ obsidian run scoreboard players set @s bw:astralF_CD 100

## Amethyst Blocks
execute as @a[tag=bw:astralForm, scores={bw:astralF_CD=101..}] at @s if block ~~~ amethyst_block run scoreboard players set @s bw:astralF_CD 100
execute as @a[tag=bw:astralForm, scores={bw:astralF_CD=101..}] at @s if block ~~1~ amethyst_block run scoreboard players set @s bw:astralF_CD 100

## Bedrock
execute as @a[tag=bw:astralForm, scores={bw:astralF_CD=101..}] at @s if block ~~~ bedrock run scoreboard players set @s bw:astralF_CD 100
execute as @a[tag=bw:astralForm, scores={bw:astralF_CD=101..}] at @s if block ~~1~ bedrock run scoreboard players set @s bw:astralF_CD 100

