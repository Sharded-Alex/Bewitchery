import { world } from "@minecraft/server";

world.beforeEvents.chatSend.subscribe((spellData) => {
	const player = spellData.sender;
	if (!player.hasTag('Sorcerer')) return;
  switch (spellData.message) {
    case '!ERADO': 
     spellData.cancel = true;
     player.runCommandAsync('scoreboard players set @s bw:wandSpell 0');
     player.runCommandAsync('say §dErado!§r');
     break;
    case '!OSTIUM AD LOCUM': 
     spellData.cancel = true;
     player.runCommandAsync('scoreboard players set @s bw:wandSpell 1');
     player.runCommandAsync('scoreboard players set @s bw:wandUse 10');
     player.runCommandAsync('say §dOstium Ad Locum!§r');
     break;
    case '!CREO AQUAM': 
     spellData.cancel = true;
     player.runCommandAsync('scoreboard players set @s bw:wandSpell 2');
     player.runCommandAsync('scoreboard players set @s bw:wandUse 10');
     player.runCommandAsync('say §dCreo Aquam!§r');
     break;
    case '!CREO IGNIS': 
     spellData.cancel = true;
     player.runCommandAsync('scoreboard players set @s bw:wandSpell 3');
     player.runCommandAsync('scoreboard players set @s bw:wandUse 10');
     player.runCommandAsync('say §dCreo Ignis!§r');
     break;
    case '!CREO IGNIS AQUAM': 
     spellData.cancel = true;
     player.runCommandAsync('scoreboard players set @s bw:wandSpell 4');
     player.runCommandAsync('scoreboard players set @s bw:wandUse 10');
     player.runCommandAsync('say §dCreo Ignis Aquam!§r');
     break;
  }
});