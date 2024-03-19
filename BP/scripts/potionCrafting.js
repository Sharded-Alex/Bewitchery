/* jshint maxerr: 10000 */
import {world, system, ItemStack, BlockPermutation} from "@minecraft/server";
import { herbList } from "./herbList";

const corruptList = [
  {
    "effect": "Regeneration",
    "corrupted": "Poison"
  },
  {
    "effect": "Instant Health",
    "corrupted": "Instant Damage"
  },
  {
    "effect": "Night Vision",
    "corrupted": "Blindness"
  },
  {
    "effect": "Blindness",
    "corrupted": "Invisibility"
  },
  {
    "effect": "Strength",
    "corrupted": "Weakness"
  },
  {
    "effect": "Speed",
    "corrupted": "Slowness"
  },
  {
    "effect": "Invisibility",
    "corrupted": "Darkness"
  },
  {
    "effect": "Weakness",
    "corrupted": "Strength"
  },
  {
    "effect": "Haste",
    "corrupted": "Mining Fatigue"
  },
  {
    "effect": "Levitation",
    "corrupted": "Slow Falling"
  },
];

function getHerbId(herbName) {
  let herbID = null;
  for (let herb of herbList) {
    if (herbName == herb.typeId) {
      herbID = herb.id;
    }
  }
  return herbID;
}

function corruptEffect(effectName) {
  for (let obj of corruptList) {
    if (obj.effect == effectName) {
      return `${obj.corrupted}`;
    }
  }
}

function isEffectValid(herbID, effectName) {
  let isValid = false;
  for (let herb of herbList) {
    if (herbID == herb.id) {
      for (let effect of herb.aidEffects.aidWith.effect) {
        if (effectName == effect) {
          isValid = true;
        }
      }
    }
  }
  return isValid;
}

function getPotionTime(number) {
  let seconds = number/60 - Math.floor(number/60);
  let minutes = Math.floor(number/60);
  
  let timeSec = Math.round(seconds * 60/1);
  if (String(timeSec).length == 1) {
    timeSec = "0" + `${timeSec}`;
  }
  return `(${minutes}:${timeSec})`;
}

function herbsToLore(idArray) {
  const effectList = [];
  let refinedList = "";
  for (let herb of herbList) {
    if (herb.id == idArray[0]) {
      for (let i = 0; i < herb.mainEffects.length; i++) {
        let effectString = [[`${herb.mainEffects[i].effect}`], [`A${herb.mainEffects[i].amplifier}`], [`${herb.mainEffects[i].duration}`]];
        effectList.push(effectString);
      }
    }
  }
  
  for (let i in effectList) {
    for (let h = 1; h < 3; h++) {
      for (let herb of herbList) {
        if (herb.id == idArray[h]) {
          if (herb.aidEffects.type == "nullifier") {
            if (isEffectValid(idArray[h], effectList[i][0])) {
              effectList.splice(i, 1);
            }
          }
          if (herb.aidEffects.type == "corruptor") {
            if (isEffectValid(idArray[h], effectList[i][0])) {
              effectList[i][0] = corruptEffect(effectList[i][0]);
            }
          }
          if (herb.aidEffects.type == "amplifier") {
            if (isEffectValid(idArray[h], effectList[i][0])) {
              if (effectList[i][1] == "A1") {
                effectList[i][1] = "A2";
              }
              if (effectList[i][1] == "A0") {
                effectList[i][1] = "A1";
              }
            }
          }
          if (herb.aidEffects.type == "extender") {
            if (isEffectValid(idArray[h], effectList[i][0])) {
              effectList[i][2] = Number(effectList[i][2]) + herb.aidEffects.aidWith.increaseAmount;
            }
          }
        }
      }
    }
  }
  for (let e = 0; e < effectList.length; e++) {
    if (e != effectList.length - 1) {
      refinedList += `§r§7${effectList[e][0]} ${effectList[e][1]} ${getPotionTime(effectList[e][2])}\.`;
    } else {
      refinedList += `§r§7${effectList[e][0]} ${effectList[e][1]} ${getPotionTime(effectList[e][2])}`;
    }
  }
  return refinedList.replaceAll("A0", 'I').replaceAll("A1", 'II').replaceAll("A2", 'III').split("\.");
}

function herbsToElements(idArray) {
  const effectList = [];
  for (let herb of herbList) {
    if (idArray[0] != '00' && herb.id == idArray[0]) {
      effectList.push(herb.element);
    }
    if (idArray[1] != '00' && herb.id == idArray[1]) {
      effectList.push(herb.element);
    }
    if (idArray[2] != '00' && herb.id == idArray[2]) {
      effectList.push(herb.element);
    }
  }
  
  return effectList;
}

world.afterEvents.playerInteractWithBlock.subscribe(e => {
  const item = e.itemStack;
  const player = e.player;
  const playerInv = player.getComponent('inventory').container;
  const cauldron = e.block;
  let herb = null;
  if (item != undefined) {
    herb = getHerbId(item.typeId);
  }
  
  if (cauldron != undefined && item != undefined && cauldron.typeId == "bw:witch_pot" && !cauldron.permutation.getState("bw:filled") && item.typeId == "minecraft:water_bucket") {
    // Fill Pot
    cauldron.dimension.runCommandAsync(`setblock ${cauldron.location.x} ${cauldron.location.y} ${cauldron.location.z} bw:witch_pot ["bw:filled" = true] replace`);
    // Play Sound
    cauldron.dimension.runCommandAsync(`execute positioned ${cauldron.location.x} ${cauldron.location.y} ${cauldron.location.z} run playsound cauldron.fillwater @a[r=6] ~~~ 1`);
  }
  
  if (cauldron != undefined && item != undefined && cauldron.typeId == "bw:witch_pot" && cauldron.permutation.getState("bw:filled") && item.typeId == "minecraft:bucket") {
    // Empty Pot
    cauldron.dimension.runCommandAsync(`setblock ${cauldron.location.x} ${cauldron.location.y} ${cauldron.location.z} bw:witch_pot ["bw:filled" = false] replace`);
    // Play Sound
    cauldron.dimension.runCommandAsync(`execute positioned ${cauldron.location.x} ${cauldron.location.y} ${cauldron.location.z} run playsound cauldron.takewater @a[r=6] ~~~ 1`);
  }
  
  if (cauldron != undefined && item != undefined && cauldron.permutation.getState("bw:filled") && cauldron.typeId == "bw:witch_pot") {
    // Play Splash Sound
    cauldron.dimension.runCommandAsync(`execute positioned ${cauldron.location.x} ${cauldron.location.y} ${cauldron.location.z} run playsound cauldron.adddye @a[r=6] ~~~ 1`);
    if (herb != null && !cauldron.hasTag("bw:first_ingredient")) {
      cauldron.dimension.runCommandAsync(`particle bw:witch_pot_finished_smoke ${cauldron.location.x} ${cauldron.location.y} ${cauldron.location.z}`);
      // Play Brewed Sound
      cauldron.dimension.runCommandAsync(`execute positioned ${cauldron.location.x} ${cauldron.location.y} ${cauldron.location.z} run playsound random.potion.brewed @a[r=6] ~~~ 1`);
      cauldron.dimension.runCommandAsync(`setblock ${cauldron.location.x} ${cauldron.location.y} ${cauldron.location.z} bw:witch_pot ["bw:filled" = ${cauldron.permutation.getState("bw:filled")}, "bw:primary" = ${herb[0]}, "bw:primaryTwo" = ${herb[1]},  "bw:secondary" = ${cauldron.permutation.getState("bw:secondary")}, "bw:secondaryTwo" = ${cauldron.permutation.getState("bw:secondaryTwo")}, "bw:tertiary" = ${cauldron.permutation.getState("bw:tertiary")}, "bw:tertiaryTwo" = ${cauldron.permutation.getState("bw:tertiaryTwo")}] replace`);
      return;
    }
    
    if (herb != null && cauldron.hasTag("bw:first_ingredient") && !cauldron.hasTag("bw:second_ingredient")) {
      cauldron.dimension.runCommandAsync(`particle bw:witch_pot_finished_smoke ${cauldron.location.x} ${cauldron.location.y} ${cauldron.location.z}`);
      // Play Brewed Sound
      cauldron.dimension.runCommandAsync(`execute positioned ${cauldron.location.x} ${cauldron.location.y} ${cauldron.location.z} run playsound random.potion.brewed @a[r=6] ~~~ 1`);
      cauldron.dimension.runCommandAsync(`setblock ${cauldron.location.x} ${cauldron.location.y} ${cauldron.location.z} bw:witch_pot ["bw:filled" = ${cauldron.permutation.getState("bw:filled")}, "bw:primary" = ${cauldron.permutation.getState("bw:primary")}, "bw:primaryTwo" = ${cauldron.permutation.getState("bw:primaryTwo")}, "bw:secondary" = ${herb[0]}, "bw:secondaryTwo" = ${herb[1]}, "bw:tertiary" = ${cauldron.permutation.getState("bw:tertiary")}, "bw:tertiaryTwo" = ${cauldron.permutation.getState("bw:tertiaryTwo")}] replace`);
      return;
    }
    
    if (herb != null && cauldron.hasTag("bw:first_ingredient") && cauldron.hasTag("bw:second_ingredient") && !cauldron.hasTag("bw:third_ingredient")) {
      cauldron.dimension.runCommandAsync(`particle bw:witch_pot_finished_smoke ${cauldron.location.x} ${cauldron.location.y} ${cauldron.location.z}`);
      // Play Brewed Sound
      cauldron.dimension.runCommandAsync(`execute positioned ${cauldron.location.x} ${cauldron.location.y} ${cauldron.location.z} run playsound random.potion.brewed @a[r=6] ~~~ 1`);
      cauldron.dimension.runCommandAsync(`setblock ${cauldron.location.x} ${cauldron.location.y} ${cauldron.location.z} bw:witch_pot ["bw:filled" = ${cauldron.permutation.getState("bw:filled")}, "bw:primary" = ${cauldron.permutation.getState("bw:primary")}, "bw:primaryTwo" = ${cauldron.permutation.getState("bw:primaryTwo")}, "bw:secondary" = ${cauldron.permutation.getState("bw:secondary")}, "bw:secondaryTwo" = ${cauldron.permutation.getState("bw:secondaryTwo")}, "bw:tertiary" = ${herb[0]}, "bw:tertiaryTwo" = ${herb[1]}] replace`);
      return;
    }
  }
  
  if (cauldron != undefined && item != undefined && cauldron.typeId == "bw:witch_pot" && item.typeId == "bw:spoon") {
    let spoonArray = [`${cauldron.permutation.getState("bw:primary")}${cauldron.permutation.getState("bw:primaryTwo")}`, `${cauldron.permutation.getState("bw:secondary")}${cauldron.permutation.getState("bw:secondaryTwo")}`, `${cauldron.permutation.getState("bw:tertiary")}${cauldron.permutation.getState("bw:tertiaryTwo")}`];
    let potionArray = herbsToLore(spoonArray);
    
    player.runCommandAsync(`tellraw @s {\"rawtext\": [{\"text\": \"This potion tastes like:\n${potionArray.join('+').replaceAll("+", "\n")}\"}]}`);
  }
  
  if (cauldron != undefined && item != undefined && cauldron.typeId == "bw:witch_pot" && cauldron.hasTag("bw:first_ingredient") && item.typeId == "minecraft:glass_bottle") {
     // Play Brewed Sound
     cauldron.dimension.runCommandAsync(`execute positioned ${cauldron.location.x} ${cauldron.location.y} ${cauldron.location.z} run playsound cauldron.takepotion @a[r=6] ~~~ 1`);
    let idArray = [`${cauldron.permutation.getState("bw:primary")}${cauldron.permutation.getState("bw:primaryTwo")}`, `${cauldron.permutation.getState("bw:secondary")}${cauldron.permutation.getState("bw:secondaryTwo")}`, `${cauldron.permutation.getState("bw:tertiary")}${cauldron.permutation.getState("bw:tertiaryTwo")}`];
    let potion = new ItemStack("bw:strange_potion", 1);
    let effectArray = herbsToLore(idArray);
    effectArray.push("§r§d5/5 Uses§r");
    potion.setLore(effectArray);
    
    world.getDimension(player.dimension.id).spawnItem(potion, player.location);
    if (item.amount == 1) {
      playerInv.setItem(player.selectedSlot, undefined);
    } else 
    if (item.amount > 1) {
      item.amount = item.amount - 1;
      playerInv.setItem(player.selectedSlot, item);
    }
    cauldron.dimension.runCommandAsync(`setblock ${cauldron.location.x} ${cauldron.location.y} ${cauldron.location.z} bw:witch_pot ["bw:filled" = false] replace`);
  }
  
  if (cauldron != undefined && item != undefined && cauldron.typeId == "bw:witch_pot" && cauldron.hasTag("bw:first_ingredient") && (item.typeId == "minecraft:quartz" || item.typeId == "minecraft:amethyst_shard")) {
    // Play Brewed Sound
    cauldron.dimension.runCommandAsync(`execute positioned ${cauldron.location.x} ${cauldron.location.y} ${cauldron.location.z} run playsound random.potion.brewed @a[r=6] ~~~ 1`);
    cauldron.dimension.runCommandAsync(`execute positioned ${cauldron.location.x} ${cauldron.location.y} ${cauldron.location.z} run playsound hit.amethyst_cluster @a[r=6] ~~~ 1`);
    
    
    let idArray = [`${cauldron.permutation.getState("bw:primary")}${cauldron.permutation.getState("bw:primaryTwo")}`, `${cauldron.permutation.getState("bw:secondary")}${cauldron.permutation.getState("bw:secondaryTwo")}`, `${cauldron.permutation.getState("bw:tertiary")}${cauldron.permutation.getState("bw:tertiaryTwo")}`];
    let elementArray = herbsToElements(idArray);
    let crystal = null;
    
    for (let element of elementArray) {
      if (element == "Solar") {
        crystal = new ItemStack("bw:solar_imbued_quartz", Math.ceil(3 * Math.random()));
        world.getDimension(player.dimension.id).spawnItem(crystal, {x: cauldron.location.x, y: cauldron.location.y + 1, z: cauldron.location.z});
      }
      if (element == "Lunar") {
        crystal = new ItemStack("bw:lunar_imbued_quartz", Math.ceil(3 * Math.random()));
        world.getDimension(player.dimension.id).spawnItem(crystal, {x: cauldron.location.x, y: cauldron.location.y + 1, z: cauldron.location.z});
      }
      if (element == "Sky") {
        crystal = new ItemStack("bw:sky_imbued_quartz", Math.ceil(3 * Math.random()));
        world.getDimension(player.dimension.id).spawnItem(crystal, {x: cauldron.location.x, y: cauldron.location.y + 1, z: cauldron.location.z});
      }
      if (element == "Ender") {
        crystal = new ItemStack("bw:ender_imbued_quartz", Math.ceil(3 * Math.random()));
        world.getDimension(player.dimension.id).spawnItem(crystal, {x: cauldron.location.x, y: cauldron.location.y + 1, z: cauldron.location.z});
      }
      if (element == "Earth") {
        crystal = new ItemStack("bw:earth_imbued_quartz", Math.ceil(3 * Math.random()));
        world.getDimension(player.dimension.id).spawnItem(crystal, {x: cauldron.location.x, y: cauldron.location.y + 1, z: cauldron.location.z});
      }
    }
    cauldron.dimension.runCommandAsync(`setblock ${cauldron.location.x} ${cauldron.location.y} ${cauldron.location.z} bw:witch_pot ["bw:filled" = false] replace`);
  }
  
  if (cauldron != undefined && item != undefined && cauldron.typeId == "minecraft:cauldron" && item.typeId == "bw:natural_ash") {
    cauldron.dimension.runCommandAsync(`particle bw:absorb_earth_essence ${cauldron.location.x} ${cauldron.location.y + 0.5} ${cauldron.location.z}`);
    system.runTimeout(transmute => {
      cauldron.dimension.runCommandAsync(`particle bw:energy_burst ${cauldron.location.x} ${cauldron.location.y + 0.5} ${cauldron.location.z}`);
      cauldron.dimension.runCommandAsync(`setblock ${cauldron.location.x} ${cauldron.location.y} ${cauldron.location.z} bw:witch_pot replace`);
      cauldron.dimension.runCommandAsync(`execute positioned ${cauldron.location.x} ${cauldron.location.y} ${cauldron.location.z} run playsound cauldron.explode @a[r=6] ~~~ 1`);
    }, 2*20);
  }
});