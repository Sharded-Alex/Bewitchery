/* jshint maxerr: 10000 */
import {world, system, ItemStack, ItemLockMode} from "@minecraft/server";
import {ModalFormData} from "@minecraft/server-ui";
import { randomize, candlePos, detectCandles } from "./castRitual.js";

function randomValue(max, min) {
  return Math.random() * (max - min) + min;
}

function mainForm(player, item) {
  let options = ["Name", "Family", "Tag", "Minimum Radius", "Maximum Radius",  "Game Mode"];
  let goldForm = new ModalFormData();
  goldForm.title("Create Ward Tag");
  goldForm.dropdown("Ward Tag Type", options, 0);
  goldForm.show(player).then(res => {
    if (res.canceled) {
      return;
    }
    switch (res.formValues[0]) {
      case 0:
        nameForm(player, item);
        break;
      case 1:
        familyForm(player, item);
        break;
      case 2:
        tagForm(player, item);
        break;
      case 3:
        minRadiusForm(player, item);
        break;
      case 4:
        maxRadiusForm(player, item);
        break;
      case 5:
        gameModeForm(player, item);
        break;
    }
  });
}
function nameForm(player, item) {
  let goldForm = new ModalFormData();
  goldForm.title("Entity Names");
  goldForm.textField("Include Name", "Insert only 1 name...");
  goldForm.textField("Exclude Names", "Seperate with a comma and space (, )");
  goldForm.show(player).then(res => {
    if (res.canceled) {
      return;
    }
    let product = new ItemStack("minecraft:gold_nugget", 1);
    let array = ["§r§3Names"];
    if (res.formValues[0] != undefined && res.formValues[0] != "") {
      array.push(res.formValues[0]);
    }
    if (res.formValues[1] != undefined && res.formValues[1] != "") {
      let excludedNames = res.formValues[1].split(", ");
      for (let name of excludedNames) {
        array.push(`!${name}`);
      }
    }
    product.setLore(array);
    player.getComponent("inventory").container.setItem(player.selectedSlot, product);
  });
}
function familyForm(player, item) {
  let goldForm = new ModalFormData();
  goldForm.title("Entity Families");
  goldForm.textField("Include Families", "Seperate families with a comma and space (, )");
  goldForm.textField("Exclude Families", "Seperate families with a comma and space (, )");
  goldForm.show(player).then(res => {
    if (res.canceled) {
      return;
    }
    let product = new ItemStack("minecraft:gold_nugget", 1);
    let array = ["§r§3Families"];
    if (res.formValues[0] != undefined && res.formValues[0] != "") {
      let includedFamilies = res.formValues[0].split(", ");
      for (let family of includedFamilies) {
        array.push(`${family}`);
      }
    }
    if (res.formValues[1] != undefined && res.formValues[1] != "") {
      let excludedFamilies = res.formValues[1].split(", ");
      for (let family of excludedFamilies) {
        array.push(`!${family}`);
      }
    }
    product.setLore(array);
    player.getComponent("inventory").container.setItem(player.selectedSlot, product);
  });
}
function tagForm(player, item) {
  let goldForm = new ModalFormData();
  goldForm.title("Entity Tags");
  goldForm.textField("Include Tags", "Seperate tags with a comma and space (, )");
  goldForm.textField("Exclude Tags", "Seperate tags with a comma and space (, )");
  goldForm.show(player).then(res => {
    if (res.canceled) {
      return;
    }
    let product = new ItemStack("minecraft:gold_nugget", 1);
    let array = ["§r§3Tags"];
    if (res.formValues[0] != undefined && res.formValues[0] != "") {
      let includedTags = res.formValues[0].split(", ");
      for (let tag of includedTags) {
        array.push(`${tag}`);
      }
    }
    if (res.formValues[1] != undefined && res.formValues[1] != "") {
      let excludedTags = res.formValues[1].split(", ");
      for (let tag of excludedTags) {
        array.push(`!${tag}`);
      }
    }
    product.setLore(array);
    player.getComponent("inventory").container.setItem(player.selectedSlot, product);
  });
}
function minRadiusForm(player, item) {
  let goldForm = new ModalFormData();
  goldForm.title("Ward Radius (Minimum)");
  goldForm.textField("Size", "Input Number...", "0");
  goldForm.show(player).then(res => {
    if (res.canceled) {
      return;
    }
    let product = new ItemStack("minecraft:gold_nugget", 1);
    let array = ["§r§3Minimum Radius"];
    array.push(res.formValues[0]);
    
    product.setLore(array);
    player.getComponent("inventory").container.setItem(player.selectedSlot, product);
  });
}
function maxRadiusForm(player, item) {
  let goldForm = new ModalFormData();
  goldForm.title("Ward Radius (Maximum)");
  goldForm.textField("Size", "Input Number...", "0");
  goldForm.show(player).then(res => {
    if (res.canceled) {
      return;
    }
    let product = new ItemStack("minecraft:gold_nugget", 1);
    let array = ["§r§3Maximum Radius"];
    array.push(res.formValues[0]);
    
    product.setLore(array);
    player.getComponent("inventory").container.setItem(player.selectedSlot, product);
  });
}
function gameModeForm(player, item) {
  let options = ["survival", "creative", "spectator"];
  let goldForm = new ModalFormData();
  goldForm.title("Affect Gamemode");
  goldForm.dropdown("Select Gamemode", options, 0);
  goldForm.show(player).then(res => {
    if (res.canceled) {
      return;
    }
    let product = new ItemStack("minecraft:gold_nugget", 1);
    let array = ["§r§3Game Mode"];
    array.push(res.formValues[0]);
    
    product.setLore(array);
    player.getComponent("inventory").container.setItem(player.selectedSlot, product);
  });
}


system.afterEvents.scriptEventReceive.subscribe(e => {
  const id = e.id;
  const entity = e.sourceEntity;
  
  if (id == "bwCurses:curses") {
    if (entity.getDynamicProperty("bw:oceanHex") != undefined) {
      let curse = JSON.parse(entity.getDynamicProperty("bw:oceanHex"));
      if (entity.isInWater && entity.typeId != "minecraft:player") {
        entity.applyKnockback(0, 0, 0, -2);
      }
      if (entity.isInWater && entity.typeId == "minecraft:player") {
        entity.applyKnockback(0, 0, 0, -2);
      }
      if (curse.timer > 0) {
        let editedCurse = {
          "timer": curse.timer - 1,
          "sender": curse.sender
        };
        entity.setDynamicProperty("bw:oceanHex", JSON.stringify(editedCurse));
      } else {
        entity.setDynamicProperty("bw:oceanHex", undefined);
        entity.runCommandAsync('tag @s remove BWcurse:ocean_grasp');
      }
    }
    
    if (entity.getDynamicProperty("bw:burnHex") != undefined) {
      let curse = JSON.parse(entity.getDynamicProperty("bw:burnHex"));
      let randomIntervals = [
        [25, 60],
        [25, 120],
        [50, 300]
      ];
      if (curse.timer > 0) {
        if (curse.nextEvent == 0) {
          entity.setOnFire(5, true);
          let reducedCurse = {
            "timer": curse.timer - 1,
            "nextEvent": randomize(randomIntervals),
            "sender": curse.sender
          };
          entity.setDynamicProperty("bw:burnHex", JSON.stringify(reducedCurse));
        }
        if (curse.nextEvent > 0) {
          let editedCurse = {
            "timer": curse.timer - 1,
            "nextEvent": curse.nextEvent - 1,
            "sender": curse.sender
          };
          entity.setDynamicProperty("bw:burnHex", JSON.stringify(editedCurse));
        }
      } else {
        entity.setDynamicProperty("bw:burnHex", undefined);
        entity.runCommandAsync('tag @s remove BWcurse:hellish_attraction');
      }
    }
    
    if (entity.getDynamicProperty("bw:teleportHex") != undefined) {
      let curse = JSON.parse(entity.getDynamicProperty("bw:teleportHex"));
      let randomIntervals = [
        [50, 20],
        [25, 60],
        [25, 120]
      ];
      if (curse.timer > 0) {
        if (curse.nextEvent == 0) {
          entity.teleport({x: entity.location.x + randomValue(0, 10), y: entity.location.y + randomValue(0, 2), z: entity.location.z + randomValue(0, 10)}, {dimension: entity.dimension});
          let reducedCurse = {
            "timer": curse.timer - 1,
            "nextEvent": randomize(randomIntervals),
            "sender": curse.sender
          };
          entity.setDynamicProperty("bw:teleportHex", JSON.stringify(reducedCurse));
        }
        if (curse.nextEvent > 0) {
          let editedCurse = {
            "timer": curse.timer - 1,
            "nextEvent": curse.nextEvent - 1,
            "sender": curse.sender
          };
          entity.setDynamicProperty("bw:teleportHex", JSON.stringify(editedCurse));
        }
      } else {
        entity.setDynamicProperty("bw:teleportHex", undefined);
        entity.runCommandAsync('tag @s remove BWcurse:endermanHex');
      }
    }
    
    if (entity.getDynamicProperty("bw:creeperHex") != undefined) {
      let curse = JSON.parse(entity.getDynamicProperty("bw:creeperHex"));
      if (curse.timer > 0) {
        let cats = [];
        cats.push(world.getDimension(entity.dimension.id).getEntities({location: entity.location, maxDistance: 4, minDistance: 1, families: ["cat"]})[0]) ;
        cats.push(world.getDimension(entity.dimension.id).getEntities({location: entity.location, maxDistance: 4, minDistance: 1, families: ["player"]})[0]);
        let entities = cats.filter((e) => e != undefined || (typeof e === Object && e != null));
        if (curse.delayedTime > 0 && entities[0] == undefined) {
          let reducedCurse = {
            "timer": curse.timer - 1,
            "delayedTime": 10,
            "sender": curse.sender
          };
          entity.setDynamicProperty("bw:creeperHex", JSON.stringify(reducedCurse));
        }
        
        if (curse.delayedTime > 0 && entities[0] != undefined) {
          let reducedCurse = {
            "timer": curse.timer - 1,
            "delayedTime": curse.delayedTime - 1,
            "sender": curse.sender
          };
          entity.setDynamicProperty("bw:creeperHex", JSON.stringify(reducedCurse));
        }
        
        if (curse.delayedTime == 0) {
          entity.dimension.createExplosion({x: entity.location.x, y: entity.location.y + 1,  z: entity.location.z}, 3, {breaksBlocks: false, causesFire: false, allowUnderwater: true});
          let reducedCurse = {
            "timer": curse.timer - 1,
            "delayedTime": 10,
            "sender": curse.sender
          };
          entity.setDynamicProperty("bw:creeperHex", JSON.stringify(reducedCurse));
        }
      } else {
        entity.setDynamicProperty("bw:creeperHex", undefined);
        entity.runCommandAsync('tag @s remove BWcurse:creeper_hex');
      }
    }
    
    if (!entity.hasTag("BWcurse:ocean_grasp") && !entity.hasTag("BWcurse:endermanHex") && !entity.hasTag("BWcurse:hellish_attraction") && !entity.hasTag("BWcurse:creeper_hex")) {
      entity.runCommandAsync('tag @s remove BW:cursed');
    }
  }
});

world.afterEvents.playerInteractWithBlock.subscribe(e => {
  const item = e.itemStack;
  const player = e.player;
  const block = e.block;
  
  // Reset Spirits
  if (item != undefined && item.typeId == "minecraft:emerald") {
    let spirits = JSON.parse(player.getDynamicProperty("bw:Pacts")).spirits;
    for (let spirit of spirits) {
      player.setDynamicProperty(`bw:${spirit.name}`, undefined);
    }
    player.setDynamicProperty("bw:Pacts", undefined);
  }
  // Tell the Time
  if (item != undefined && item.typeId == "minecraft:clock") {
    player.runCommandAsync(`tellraw @s {\"rawtext\": [{\"text\": \"The time is now: ${world.getTimeOfDay()}\"}]}`);
  }
  // Show Spirits in Pact and Total Spellslots
  if (item != undefined && item.typeId == "minecraft:diamond") {
    let spirits = JSON.parse(player.getDynamicProperty("bw:Pacts")).spirits;
    let spiritTrust = "";
    for (let spirit of spirits) {
      spiritTrust += `Spirit Name: ${JSON.parse(player.getDynamicProperty(`bw:${spirit.name}`)).name}, Spirit Type: ${JSON.parse(player.getDynamicProperty(`bw:${spirit.name}`)).spiritType}, Spirit Trust: ${JSON.parse(player.getDynamicProperty(`bw:${spirit.name}`)).trust}\n`;
    }
    player.runCommandAsync(`tellraw @s {\"rawtext\": [{\"text\": \"${spiritTrust}\"}]}`);
  }
  
  if (item != undefined && item.typeId == "minecraft:amethyst_shard") {
    let xp = player.getDynamicProperty("bw:witchXP")
    let xpLevelUp = player.getDynamicProperty("bw:ascensionAmount")
    let rank = player.getDynamicProperty("bw:fatigueLevel")
    
    player.runCommandAsync(`tellraw @s {\"rawtext\": [{\"text\": \"§6You are a Rank ${rank} Witch. Currently, your progress to the next rank is ${xp}/${xpLevelUp}.§r\"}]}`);
  }
  
  if (item != undefined && item.typeId == "minecraft:gold_nugget") {
    mainForm(player, item);
  }
  if (item != undefined && item.typeId == "minecraft:gold_ingot" && block != undefined && block.hasTag("bw:pulsing")) {
    let candles = detectCandles(block);
    let radiusLimit = 5 + (candles.red_candle * 2);
    console.warn("The warding max radius is " + radiusLimit + " in all directions from the Central Slate.");
  }
});

world.afterEvents.itemUse.subscribe(e => {
  const item = e.itemStack;
  const player = e.source;
  
  // Conjure Broom
  if (item != undefined && item.typeId == "bw:broom_basic") {
    let broom = world.getDimension(player.dimension.id).spawnEntity("bw:flying_broom", player.location);
    broom.addTag(`broomOwner:${player.name}`);
    player.addTag(`rider`);
    player.runCommandAsync(`ride @s start_riding @e[c=1, r=3, type=bw:flying_broom]`);
  }
});