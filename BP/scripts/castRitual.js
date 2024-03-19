/* jshint maxerr: 10000 */
import {world, system, ItemStack, BlockPermutation, Dimension, EntityItemComponent, MolangVariableMap} from "@minecraft/server";
import { circles } from "./runicCircles";
import { ceremonies } from "./ritualData";
import { spriteList } from "./spritelist";

export const candlePos = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
  [1, 1],
  [-1, 1],
  [-1, -1],
  [1, -1]
];

export function detectCandles(block) {
  let candles = {
    "wax_candle": 0,
    "green_candle": 0,
    "lime_candle": 0,
    "yellow_candle": 0,
    "orange_candle": 0,
    "white_candle": 0,
    "red_candle": 0,
    "blue_candle": 0,
    "light_blue_candle": 0,
    "purple_candle": 0,
    "magenta_candle": 0
  };
  for (let pos of candlePos) {
    let candleBlock = block.dimension.getBlock({x: block.location.x + pos[0], y: block.location.y, z: block.location.z + pos[1]});
    if (candleBlock != undefined && candleBlock.typeId == "minecraft:candle" && candleBlock.permutation.getState("lit") == true) {
      candles.wax_candle += 1;
    }
    if (candleBlock != undefined && candleBlock.typeId == "minecraft:green_candle" && candleBlock.permutation.getState("lit") == true) {
      candles.green_candle += 1;
    }
    if (candleBlock != undefined && candleBlock.typeId == "minecraft:lime_candle" && candleBlock.permutation.getState("lit") == true) {
      candles.lime_candle += 1;
    }
    if (candleBlock != undefined && candleBlock.typeId == "minecraft:yellow_candle" && candleBlock.permutation.getState("lit") == true) {
      candles.yellow_candle += 1;
    }
    if (candleBlock != undefined && candleBlock.typeId == "minecraft:orange_candle" && candleBlock.permutation.getState("lit") == true) {
      candles.orange_candle += 1;
    }
    if (candleBlock != undefined && candleBlock.typeId == "minecraft:white_candle" && candleBlock.permutation.getState("lit") == true) {
      candles.white_candle += 1;
    }
    if (candleBlock != undefined && candleBlock.typeId == "minecraft:red_candle" && candleBlock.permutation.getState("lit") == true) {
      candles.red_candle += 1;
    }
    if (candleBlock != undefined && candleBlock.typeId == "minecraft:blue_candle" && candleBlock.permutation.getState("lit") == true) {
      candles.blue_candle += 1;
    }
    if (candleBlock != undefined && candleBlock.typeId == "minecraft:light_blue_candle" && candleBlock.permutation.getState("lit") == true) {
      candles.light_blue_candle += 1;
    }
    if (candleBlock != undefined && candleBlock.typeId == "minecraft:purple_candle" && candleBlock.permutation.getState("lit") == true) {
      candles.purple_candle += 1;
    }
    if (candleBlock != undefined && candleBlock.typeId == "minecraft:magenta_candle" && candleBlock.permutation.getState("lit") == true) {
      candles.magenta_candle += 1;
    }
  }
  return candles;
}

function containsObj(obj, list) {
  for (let i = 0; i < list.length; i++) {
    if (JSON.stringify(list[i]) === JSON.stringify(obj)) {
      return true;
    }
  }
  return false;
}

export function randomize(array) {
  const total = array.reduce((n, addData) => n + addData[0], 0);
  const pickValue = Math.random()*total;
  let weight = 0;
  for (let i = 0; i < array.length; i++) {
    weight += array[i][0];
    if (pickValue <= weight)
    return array[i][1];
  }
}

function giveOffering(spirit, owner, player, block) {
  let liked = 0;
  let disliked = 0;
  let neutral = 0; 
  
  // Compare the owner of the spirit
  if (owner == player.name) {
    // Get the list of Pacts
    if (player.getDynamicProperty("bw:Pacts") != undefined) {
      let spirits = JSON.parse(player.getDynamicProperty("bw:Pacts")).spirits;
      let spiritName = [];
      // Loop through to find that specific spirit by name.
      for (let spt of spirits) {
        spiritName.push(spt.name);
      }
      
      // If name is found, run following
      if (spiritName.includes(spirit)) {
        let spiritualEntity = JSON.parse(player.getDynamicProperty(`bw:${spirit}`));
        // Checks if spiritualEntity is a thing
        if (spiritualEntity != undefined) {
          // Gets the items dropped in the circle
          let ritualItems = block.dimension.getEntities({location: block.location, maxDistance: 3, type: "minecraft:item"}).slice(0, 6).filter((e) => e != undefined);
          // If there are no valid items in the circle, run.
          if (ritualItems.length == 0) {
            player.runCommandAsync('tellraw @s {\"rawtext\": [{\"text\": \"§cNo offering was made. The ritual accomplishes nothing.§r\"}]}');
            return;
          }
          // Run through the 5 possible items and get their favorability numbers
          for (let item of ritualItems) {
            if (item.getComponent('item').itemStack.typeId == spiritualEntity.liked) {
              liked += (5 + (0.5 * item.getComponent('item').itemStack.amount));
            }
            if (item.getComponent('item').itemStack.typeId == spiritualEntity.disliked) {
              disliked += (5 + (0.5 * item.getComponent('item').itemStack.amount));
            }
            if (item.getComponent('item').itemStack.typeId != spiritualEntity.disliked && item.typeId != spiritualEntity.liked) {
              neutral += (2 + (randomize([[50, 0.5], [50, -0.5]]) * item.getComponent('item').itemStack.amount));
            }
            item.kill();
          }
          
          // Compare the time to tell whether this is that spirit's Power of Hour.
          if (world.getTimeOfDay() >= spiritualEntity.HoP[0] && world.getTimeOfDay <= spiritualEntity.HoP[1]) {
            liked *= 10;
            disliked *= 10;
            neutral *= 10;
          }
          // Anon function to calculate
          let calculatedReward = (like, dislike, noCare) => {
            let amount = (like + noCare - dislike)/1000 * 100;
            return Math.floor(amount*10)/10;
          };
          
          // Variable containing final calculations
          let finalAmount = calculatedReward(liked, disliked, neutral);
          
          // Add final calculations to that spirit's trust
          if (isNaN(spiritualEntity.trust) || spiritualEntity.trust == null) {
            spiritualEntity.trust = 0;
          }
          spiritualEntity.trust += finalAmount;
          spiritualEntity.trust = Math.floor(spiritualEntity.trust*10)/10;
          // Set the player's dynamic property to reflect these changes
          player.setDynamicProperty(`bw:${spirit}`, JSON.stringify(spiritualEntity));
        }
      }
    }
  }
}

function findSpirit(entity, spiritType, type, candles) {
  if (type == "lesser") {
    if (spiritType == "fae") {
      if (entity.getDynamicProperty("bw:Pacts") == undefined) {
        let witchPacts = {
          "spirits": [],
          "spells": []
        };
        entity.setDynamicProperty("bw:Pacts", JSON.stringify(witchPacts));
      }
      
      if (JSON.parse(entity.getDynamicProperty("bw:Pacts")).spirits.length >= 4) {
        entity.runCommandAsync('tellraw @s {\"rawtext\": [{\"text\": \"§cYou have already pacted with 4 spirits. You cannot pact with any more.§r\"}]}');
      }
      if (JSON.parse(entity.getDynamicProperty("bw:Pacts")).spirits.length < 4) {
        let chosenSpirit = randomize(candleInfluence(spriteList, candles));
        let spirit = null;
        let newSpirit = false;
        let spiritCooldown = world.scoreboard.getObjective("bw:spiritCD").getScore(entity);
        
        let witchPacts = JSON.parse(entity.getDynamicProperty("bw:Pacts"));
        
        let spiritCheck = null;
        if (chosenSpirit != null) {
          spiritCheck = {
            "name": chosenSpirit.spirit,
            "spiritType": chosenSpirit.type
          };
        }
        // Check if spirit is new.
        if (spiritCooldown == 0 && chosenSpirit != null && !containsObj(spiritCheck, witchPacts.spirits)) {
          witchPacts.spirits.push({
            "name": chosenSpirit.spirit,
            "spiritType": chosenSpirit.type
          });
          spirit = {
            "name": chosenSpirit.spirit,
            "spiritType": chosenSpirit.type,
            "liked": chosenSpirit.likedOffering,
            "disliked": chosenSpirit.dislikedOffering,
            "court": chosenSpirit.court,
            "HoP": chosenSpirit.HoP,
            "trust": chosenSpirit.trust
          };
          
          if (witchPacts.spells.length == 0) {
            for (let faeSpell of chosenSpirit.spells) {
              witchPacts.spells.push({
                "name": faeSpell,
                "spirit": chosenSpirit.spirit
              });
            }
          }
          if (witchPacts.spells.length > 0) {
            let spellArr = chosenSpirit.spells;
            for (let i = 0; i < spellArr.length; i++) {
              let isDuplicate = false;
              for (let playerSpell of witchPacts.spells) {
                if (playerSpell.name == spellArr[i]) {
                  isDuplicate = true;
                }
              }
              
              if (!isDuplicate) {
                witchPacts.spells.push({
                  "name": spellArr[i],
                  "spirit": chosenSpirit.spirit
                });
              }
            }
          }
          
          entity.setDynamicProperty("bw:Pacts", JSON.stringify(witchPacts));
          entity.setDynamicProperty(`bw:${chosenSpirit.spirit}`, JSON.stringify(spirit));
          newSpirit = true;
        }
        
        if (spiritCooldown > 0) {
          entity.runCommandAsync(`tellraw @s {\"rawtext\": [{\"text\": \"You have performed this ritual in the last 3 minutes. Try again in ${Math.ceil(spiritCooldown/20)} seconds.\"}]}`);
          return;
        }
        if (newSpirit && spiritCooldown == 0) {
          entity.runCommandAsync('scoreboard players set @s bw:spiritCD 3600');
          entity.runCommandAsync(`tellraw @s {\"rawtext\": [{\"text\": \"${chosenSpirit.conjureMsg}\"}]}`);
        } 
        if (!newSpirit) {
          entity.runCommandAsync(`tellraw @s {\"rawtext\": [{\"text\": \"You feel for a presence but get nothing. There is no spirit nearby that wishes to pact with you.\"}]}`);
          entity.runCommandAsync('scoreboard players set @s bw:spiritCD 3600');
        }
      }
    }
  }
}

function severPact(player, faeSpirit) {
  let pact = JSON.parse(player.getDynamicProperty("bw:Pacts"));
  let spirits = pact.spirits;
  let spells = pact.spells;
  
  let pacts = {
    "spirits": [],
    "spells": []
  };
  
  for (let spirit of spirits) {
    if (faeSpirit != spirit.name) {
      pacts.spirits.push(spirit);
    } else {
      player.setDynamicProperty(`bw:${spirit.name}`, undefined);
    }
  }
  
  for (let spell of spells) {
    if (faeSpirit != spell.spirit) {
      pacts.spells.push(spell);
    }
  }
  
  player.setDynamicProperty("bw:Pacts", JSON.stringify(pacts));
}

function candleInfluence(array, candles) {
  let newArray = array;
  for (let spirit of newArray) {
    if (spirit[1] == null) {
      continue;
    }
    
    if (spirit[1].court == "Solar") {
      spirit[0] += candles.orange_candle > 0 ? candles.orange_candle * 5 : 0; 
    }
    if (spirit[1].court == "Lunar") {
      spirit[0] += candles.white_candle > 0 ? candles.white_candle * 5 : 0;
    }
    if (spirit[1].court == "Twilight") {
      spirit[0] += candles.purple_candle > 0 ? candles.purple_candle * 5 : 0;
    }
    
    if (spirit[1].likedCandle == "lime") {
      spirit[0] += candles.lime_candle > 0 ? candles.lime_candle * 5 : 0;
    }
    if (spirit[1].likedCandle == "cyan") {
      spirit[0] += candles.cyan_candle > 0 ? candles.cyan_candle * 5 : 0;
    }
    if (spirit[1].likedCandle == "orange") {
      spirit[0] += candles.orange_candle > 0 ? candles.orange_candle * 5 : 0;
    }
    if (spirit[1].likedCandle == "light_blue") {
      spirit[0] += candles.light_blue_candle > 0 ? candles.light_blue_candle * 5 : 0;
    }
    if (spirit[1].likedCandle == "magenta") {
      spirit[0] += candles.magenta_candle > 0 ? candles.magenta_candle * 5 : 0;
    }
    if (spirit[1].likedCandle == "wax") {
      spirit[0] += candles.wax_candle > 0 ? candles.wax_candle * 5 : 0;
    }
  }
  
  return newArray;
}

function cleanseTarget(entity, type) {
  if (type == "lesser") {
    let hexRelief = [
      [60, true],
      [40, false]
    ];
    let curseRelief = [
      [30, true],
      [70, false]
    ];
    
    entity.runCommandAsync('effect @s clear');
    entity.runCommandAsync('execute as @s run function clearJinx');
    
    if (randomize(hexRelief)) {
      if (entity.getDynamicProperty("bw:oceanHex") != undefined) {
        entity.setDynamicProperty("bw:oceanHex", undefined);
        entity.runCommandAsync('scoreboard players set @s bw:curseTimer 0');
        entity.runCommandAsync('tag @s remove BWcurse:ocean_grasp');
      }
      
      if (entity.getDynamicProperty("bw:burnHex") != undefined) {
        entity.setDynamicProperty("bw:burnHex", undefined);
        entity.runCommandAsync('scoreboard players set @s bw:curseTimer 0');
        entity.runCommandAsync('tag @s remove BWcurse:hellish_attraction');
      }
      
      if (entity.getDynamicProperty("bw:teleportHex") != undefined) {
        entity.setDynamicProperty("bw:teleportHex", undefined);
        entity.runCommandAsync('scoreboard players set @s bw:curseTimer 0');
        entity.runCommandAsync('tag @s remove BWcurse:endermanHex');
      }
      
      if (entity.getDynamicProperty("bw:creeperHex") != undefined) {
        entity.setDynamicProperty("bw:creeperHex", undefined);
        entity.runCommandAsync('scoreboard players set @s bw:curseTimer 0');
        entity.runCommandAsync('tag @s remove BWcurse:creeper_hex');
      }
    }
    if (randomize(curseRelief)) {
      entity.runCommandAsync('execute as @s run function clearCurse');
    }
  }
  if (type == "greater") {
    let curseRelief = [
      [85, true],
      [15, false]
    ];
    
    if (entity.getDynamicProperty("bw:oceanHex") != undefined) {
      entity.setDynamicProperty("bw:oceanHex", undefined);
      entity.runCommandAsync('scoreboard players set @s bw:curseTimer 0');
      entity.runCommandAsync('tag @s remove BWcurse:ocean_grasp');
    }
    if (entity.getDynamicProperty("bw:burnHex") != undefined) {
      entity.setDynamicProperty("bw:burnHex", undefined);
      entity.runCommandAsync('scoreboard players set @s bw:curseTimer 0');
      entity.runCommandAsync('tag @s remove BWcurse:hellish_attraction');
    }
    if (entity.getDynamicProperty("bw:teleportHex") != undefined) {
      entity.setDynamicProperty("bw:teleportHex", undefined);
      entity.runCommandAsync('scoreboard players set @s bw:curseTimer 0');
      entity.runCommandAsync('tag @s remove BWcurse:endermanHex');
    }
    if (entity.getDynamicProperty("bw:creeperHex") != undefined) {
      entity.setDynamicProperty("bw:creeperHex", undefined);
      entity.runCommandAsync('scoreboard players set @s bw:curseTimer 0');
      entity.runCommandAsync('tag @s remove BWcurse:creeper_hex');
    }
    
    if (randomize(curseRelief)) {
      entity.runCommandAsync('execute as @s run function clearCurse');
    }
  }
}

function curseTarget(entity, type, player) {
  if (entity.hasTag(`immunity:${player.name}`)) {
    player.runCommandAsync("tellraw @s {\"rawtext\": [{\"text\": \"You have acknowledged the target as immune to the flows of your magick. You cannot curse them as long as this is true.\"}]}");
    return;
  }
  if (type == "ocean_hold") {
    let curse = {
      "timer": 72000,
      "sender": `${player.name}`
    };
    if (entity.getDynamicProperty("bw:oceanHex") == undefined) {
      entity.runCommandAsync('tag @s add BWcurse:ocean_grasp');
      entity.runCommandAsync('tag @s add BW:cursed');
      entity.setDynamicProperty("bw:oceanHex", JSON.stringify(curse));
    }
  }
  if (type == "random_burn") {
    let randomIntervals = [
      [25, 60],
      [25, 120],
      [50, 300]
    ];
    let curse = {
      "timer": 72000,
      "nextEvent": randomize(randomIntervals),
      "sender": `${player.name}`
    };
    if (entity.getDynamicProperty("bw:burnHex") == undefined) {
      entity.runCommandAsync('tag @s add BWcurse:hellish_attraction');
      entity.runCommandAsync('tag @s add BW:cursed');
      entity.setDynamicProperty("bw:burnHex", JSON.stringify(curse));
    }
  }
  if (type == "random_teleport") {
    let randomIntervals = [
      [25, 60],
      [25, 120],
      [50, 300]
    ];
    let curse = {
      "timer": 72000,
      "nextEvent": randomize(randomIntervals),
      "sender": `${player.name}`
    };
    if (entity.getDynamicProperty("bw:teleportHex") == undefined) {
      entity.runCommandAsync('tag @s add BWcurse:endermanHex');
      entity.runCommandAsync('tag @s add BW:cursed');
      entity.setDynamicProperty("bw:teleportHex", JSON.stringify(curse));
    }
  }
  if (type == "creeper_hex") {
    let curse = {
      "timer": 72000,
      "delayTime": 10,
      "sender": `${player.name}`
    };
    if (entity.getDynamicProperty("bw:creeperHex") == undefined) {
      entity.runCommandAsync('tag @s add BWcurse:creeper_hex');
      entity.runCommandAsync('tag @s add BW:cursed');
      entity.setDynamicProperty("bw:creeperHex", JSON.stringify(curse));
    }
  }
}

function detectBlockInArea(blocks, area, location, dimension) {
  for (let x = location.x; x < location.x + area.x; x++) {
    for (let y = location.y; y > location.y - area.y; y--) {
      for (let z = location.z; z < location.z + area.z; z++) {
        let currentBlock = dimension.getBlock({x: x, y: y, z: z});
        for (let blockInfo of blocks) {
          if (currentBlock != undefined && blockInfo.block == currentBlock.typeId) {
            let particle = new MolangVariableMap();
            particle.setColorRGB('variable.color', {red: blockInfo.rgba.r, green: blockInfo.rgba.g, blue: blockInfo.rgba.b, alpha: blockInfo.rgba.a});
            dimension.spawnParticle("bw:oreParticle", {x: x, y: location.y, z: z}, particle);
          }
        }
      }
    }
  }
}

function displayRecParticles(particles, delays, index, block, player, ritualEffects, info) {
  system.runTimeout(loop => {
    world.getDimension(block.dimension.id).spawnParticle(particles[index][0], {x: block.location.x + particles[index][1], y: block.location.y + particles[index][2], z: block.location.z + particles[index][3]});
    
    if (index < particles.length - 1) {
      displayRecParticles(particles, delays, index+1, block, player, ritualEffects, info);
    } else {
      castRitual(ritualEffects, info, block, player);
    }
  }, delays[index]);
}

function checkRituals(items, block, location, player) {
  let playerItem = player.getComponent("inventory").container.getItem(player.selectedSlot);
  let validSet = false;
  let validCircle = true;
  let circleType = null;
  let effects = null;
  let rItems = [];
  let info = null;
  
  for (let ceremony of ceremonies) {
    if (ceremony.itemArray.length == items.length) {
      let requirements = new Set(ceremony.itemArray);
      for (let i = 0; i < items.length; i++) {
        requirements.add(items[i]);
      }
      
      if (requirements.size == items.length) {
        validSet = true;
        circleType = ceremony.validCircle;
        effects = ceremony;
        
        let ritualItems = block.dimension.getEntities({location: block.location, maxDistance: 3, type: "minecraft:item"});
        for (let i = 0; i < items.length; i++) {
          if (ritualItems[i].getComponent("item").itemStack.typeId == items[i]) {
            if (ceremony.namedItem != undefined && ceremony.namedItem == items[i]) {
              info = [ritualItems[i].getComponent("item").itemStack.nameTag, ritualItems[i].getComponent("item").itemStack.getLore()];
            }
            if (ceremony.keptItems != undefined) {
              if (!ceremony.keptItems.includes(ritualItems[i].getComponent("item").itemStack.typeId)) {
                rItems.push(ritualItems[i]);
              }
            }
            if (ceremony.keptItems == undefined) {
              rItems.push(ritualItems[i]);
            }
          }
        }
      }
    }
    if (validSet && circleType != null) {
      if (playerItem.typeId != "bw:ritual_scroll") {
        for (let circle of circles) {
          if (circle.circleName == circleType) {
            for (let slate of circle.slatePositions) {
              if (!block.dimension.getBlock({x:location[0] + slate.x, y:location[1], z:location[2] + slate.z}).hasTag("bw:white_slate")) {
                validCircle = false;
              }
            }
          }
        }
      } else {
        validCircle = false;
        let savedRite = playerItem.getDynamicProperty("bw:boundCeremony");
        let charges = playerItem.getDynamicProperty("bw:ceremonialCharges");
        
        if (charges > 1 && savedRite == circleType) {
          validCircle = true;
          let newCharges = charges - 1;
          playerItem.setDynamicProperty("bw:ceremonialCharges", newCharges);
          playerItem.setLore([`Ceremony: ${playerItem.getDynamicProperty("bw:boundCeremony")}`, `Charges: ${newCharges}`]);
          player.getComponent("inventory").container.setItem(player.selectedSlot, playerItem);
          break;
        } else 
        if (charges <= 1 && savedRite == circleType) {
          validCircle = true;
          player.getComponent("inventory").container.setItem(player.selectedSlot);
        }
      }
    }
  }
  if (!validCircle) {
    return;
  }
  if (validCircle && effects != null) {
    player.runCommandAsync(`tellraw @s {\"rawtext\": [{\"text\": \"Casting the ritual: ${effects.id}\"}]}`);
    for (let item of rItems) {
      world.getDimension(item.dimension.id).runCommandAsync(`particle rituals:smokeDisappear ${item.location.x} ${item.location.y} ${item.location.z}`);
      item.kill();
    }
  }
  return [effects, info];
}

function getCircle(block, circleName) {
  let location = [block.location.x, block.location.y, block.location.z];
  
  for (let circle of circles) {
    if (circle.circleName == circleName) {
      for (let slate of circle.slatePositions) {
        let newBlock = block.dimension.getBlock({x:location[0] + slate.x, y:location[1], z:location[2] + slate.z});
        if (!newBlock.hasTag("bw:white_slate")) {
          return `Invalid block at §c${Math.round(newBlock.location.x)} ${Math.round(newBlock.location.y)} ${Math.round(newBlock.location.z)}§r`;
        } else {
          newBlock.dimension.runCommandAsync(`setblock ${newBlock.location.x} ${newBlock.location.y} ${newBlock.location.z} ${newBlock.typeId} [] replace`);
        }
      }
    }
  }
  return circleName;
}

function castParticle(ceremony, information, block, player) {
  let particles = [];
  let delays = [];
  for (let particle of ceremony.particles) {
    particles.push([particle.name, particle.xOffset, particle.yOffset, particle.zOffset]);
    delays.push(particle.delay);
  }
  
  displayRecParticles(particles, delays, 0, block, player, ceremony.ritualEffects, information);
}

function castRitual(arrays, info, block, player) {
  let candles = detectCandles(block);
  for (let effect of arrays) {
    switch (effect.type) {
      case "command": {
        for (let command of effect.commands) {
          let reviewedCmd = command.replaceAll("~~~", `${block.location.x} ${block.location.y + 1} ${block.location.z}`);
          block.dimension.runCommandAsync(`${reviewedCmd}`);
        }
        break;
      }
      case "growth": {
        for (let growBlock of effect.blocks) {
          block.dimension.runCommandAsync(`fill ${block.location.x + 5 + candles.green_candle} ${block.location.y - 2} ${block.location.z + 5 + candles.green_candle} ${block.location.x - 5 - candles.green_candle} ${block.location.y + 5 + candles.green_candle} ${block.location.z - 5 - candles.green_candle} ${growBlock} ["growth"=7] replace ${growBlock} []`);
        }
        break;
      }
      case "transmute": {
        for (let blockObj of effect.replaceBlock) {
          block.dimension.runCommandAsync(`fill ${block.location.x + 4 + candles.yellow_candle} ${block.location.y - 2} ${block.location.z + 4 + candles.yellow_candle} ${block.location.x - 4 - candles.yellow_candle} ${block.location.y + 4 + candles.yellow_candle} ${block.location.z - 4 - candles.yellow_candle} ${blockObj.block} [] replace ${blockObj.replace} []`);
        }
        break;
      }
      case "outline": {
        let givenBlock = block.dimension.getEntities({location: block.location, maxDistance: 3, type: "minecraft:item"})[0];
        let givenBlockName = givenBlock.getComponent("item").itemStack.typeId;
        if (effect.blacklistedItems.includes(givenBlockName)) {
          return;
        }
        block.dimension.runCommandAsync(`fill ${block.location.x + 4 + candles.green_candle} ${block.location.y - 2} ${block.location.z + 4 + candles.green_candle} ${block.location.x - 4 - candles.green_candle} ${block.location.y + 4 + candles.green_candle} ${block.location.z - 4 - candles.green_candle} ${givenBlockName} [] outline`);
        break;
      }
      case "coven": {
        if (info != null && info != undefined && effect.covenEffect == "create") {
          
          if (player.getDynamicProperty("bw:Coven") == undefined || JSON.parse(player.getDynamicProperty("bw:Coven")).inCoven == false) {
            const covenStatus = {
              "inCoven": true,
              "joinedCoven": info[0],
              "covenRank": "Coven Leader"
            };
            player.setDynamicProperty("bw:Coven", JSON.stringify(covenStatus));
            player.runCommandAsync(`tellraw @s {\"rawtext\": [{\"text\": \"You have formed ${covenStatus.joinedCoven}§r. You are their Coven Leader.\"}]}`);
          } else {
            player.runCommandAsync(`tellraw @s {\"rawtext\": [{\"text\": \"You are already a ${JSON.parse(player.getDynamicProperty("bw:Coven")).covenRank} of ${JSON.parse(player.getDynamicProperty("bw:Coven")).joinedCoven}§r. You are bound to your pact, and as such, your ritual dissipates.\"}]}`);
            return;
          }
          
          let validPlayers = [];
          let ritualSpots = [
            [-6, 6],
            [-2, 6],
            [2, 6],
            [6, 6],
            [6, 2],
            [6, -2],
            [6, -6],
            [2, -6],
            [-2, -6],
            [-6, -6],
            [-6, -2],
            [-6, 2],
          ];
          for (let position of ritualSpots) {
            if (block.dimension.getEntities({location: {x: block.location.x + position[0], y: block.location.y, z: block.location.z + position[1]}, type: "minecraft:player", closest: 1})[0] != undefined) {
              validPlayers.push(block.dimension.getEntities({location: {x: block.location.x + position[0], y: block.location.y, z: block.location.z + position[1]}, type: "minecraft:player", closest: 1})[0]);
            }
          }
          
          let players = validPlayers.filter((plr) => plr.getDynamicProperty("bw:Coven") == undefined || JSON.parse(plr.getDynamicProperty("bw:Coven")).inCoven == false);
          
          if (players.length > 0) {
            for (let i = 0; i < players.length; i++) {
              const covenStatus = {
                "inCoven": true,
                "joinedCoven": info,
                "covenRank": "Coven Witch"
              };
              players[i].setDynamicProperty("bw:Coven", JSON.stringify(covenStatus));
              players[i].runCommandAsync(`tellraw @s {\"rawtext\": [{\"text\": \"You are now a §a${covenStatus.covenRank}§r of the §a${covenStatus.joinedCoven}§r\"}]}`);
            }
            break;
          }
        }
        
        if (effect.covenEffect == "destroy") {
          if (player.getDynamicProperty("bw:Coven") == undefined) {
            player.runCommandAsync(`tellraw @s {\"rawtext\": [{\"text\": \"§cYou are not in a Coven.§r\"}]}`);
          } else {
            let castingWitch = JSON.parse(player.getDynamicProperty("bw:Coven"));
            if (castingWitch.covenRank == "Coven Witch") {
              player.runCommandAsync(`tellraw @s {\"rawtext\": [{\"text\": \"§cYour power is not great enough to disband this Coven.§r\"}]}`);
            }
            if (castingWitch.covenRank == "Coven Leader") {
              let allMembers = block.dimension.getEntities().filter((sift) => sift.getDynamicProperty("bw:Coven") != undefined).filter((e) => JSON.parse(e.getDynamicProperty("bw:Coven")).joinedCoven == castingWitch.joinedCoven);
              
              for (let member of allMembers) {
                let resetStat = {
                  "inCoven": false,
                  "joinedCoven": null,
                  "covenRank": null
                };
                member.setDynamicProperty("bw:Coven", JSON.stringify(resetStat));
                member.runCommandAsync(`tellraw @s {\"rawtext\": [{\"text\": \"§cYour Coven has been disbanded.§r\"}]}`);
              }
            }
          }
        }
        break;
      }
      case "cleansing": {
        if (info != undefined && info != null) {
          let data = info[1].join(' + ').replaceAll('§4', '').replaceAll('§r', '').split(' + ');
          let target = block.dimension.getEntities({type: data[0].replace('Type: ', ''), name: data[1].replace('Name: ', '')});
          
          for (let i of target) {
            if (i.id == data[2].replace('ID: ', '')) {
              cleanseTarget(i, effect.power);
            }
          }
        }
        break;
      }
      case "cursing": {
        if (info != undefined && info != null) {
          let data = info[1].join(' + ').replaceAll('§4', '').replaceAll('§r', '').split(' + ');
          let target = block.dimension.getEntities({type: data[0].replace('Type: ', ''), name: data[1].replace('Name: ', '')});
          
          for (let i of target) {
            if (i.id == data[2].replace('ID: ', '')) {
              curseTarget(i, effect.curse, player);
            }
          }
        }
        break;
      }
      case "commune": {
        findSpirit(player, effect.spiritType, effect.power, candles);
        break;
      }
      case "offering": {
        if (info != undefined && info != null) {
          let data = info[1].join(' + ').replaceAll('§w', '').replaceAll('§r', '').split(' + ');
          let spirit = data[0].replace('Spirit: ', '');
          let contractee = data[2].replace('Witch: ', '');
          
          giveOffering(spirit, contractee, player, block);
        }
        break;
      }
      case "cutPact": {
        if (info != undefined && info != null) {
          severPact(player, info[0]);
        }
        break;
      }
      case "severBond": {
        if (info != undefined && info != null) {
          let data = info[1].join(' + ').replaceAll('§4', '').replaceAll('§r', '').split(' + ');
          let target = block.dimension.getEntities({type: data[0].replace('Type: ', ''), name: data[1].replace('Name: ', '')});
          
          for (let i of target) {
            if (i.id == data[2].replace('ID: ', '')) {
              i.runCommandAsync(`tag @s remove "immunity:${player.name}"`);
            }
          }
        }
        break;
      }
      case "addBond": {
        if (info != undefined && info != null) {
          let data = info[1].join(' + ').replaceAll('§4', '').replaceAll('§r', '').split(' + ');
          let target = block.dimension.getEntities({type: data[0].replace('Type: ', ''), name: data[1].replace('Name: ', '')});
          
          for (let i of target) {
            if (i.id == data[2].replace('ID: ', '')) {
              i.runCommandAsync(`tag @s add "immunity:${player.name}"`);
            }
          }
          player.runCommandAsync(`tag @s remove "immunity:${player.name}"`);
        }
        break;
      }
      case "aoeBond": {
        let targets = block.dimension.getEntities({location: block.location, maxDistance: 4 + candles.purple_candle});
        for (let target of targets) {
          target.runCommandAsync(`tag @s add "immunity:${player.name}"`);
        }
        player.runCommandAsync(`tag @s remove "immunity:${player.name}"`);
        break;
      }
      case "tpEntity": {
        if (info != undefined && info != null) {
          let data = info[1].join(' + ').replaceAll('§4', '').replaceAll('§r', '').split(' + ');
          let target = block.dimension.getEntities({type: data[0].replace('Type: ', ''), name: data[1].replace('Name: ', '')});
          
          for (let i of target) {
            if (i.id == data[2].replace('ID: ', '')) {
              i.teleport({x: block.location.x, y: block.location.y + 1, z: block.location.z}, {dimension: block.dimension});
            }
          }
        }
        break;
      }
      case "warpTravel": {
        if (info != undefined && info != null) {
          let targets = block.dimension.getEntities({location: block.location, maxDistance: 5});
          
          for (let target of targets) {
            target.runCommandAsync('camera @s[type=player] fade time 0 1 1 color 60 10 120');
            target.runCommandAsync(`tp @s ${info[0]}`);
          }
        }
        break;
      }
      case "summon": {
        if (info != undefined && info != null) {
          let data = info[1].join(' + ').replaceAll('§4', '').replaceAll('§r', '').split(' + ');
          let entityType = data[0].replace('Type: ', '');
          
          if (entityType != "minecraft:player") {
            block.dimension.runCommandAsync(`summon ${entityType} ${block.location.x} ${block.location.y + 1} ${block.location.z}`);
          } else {
            player.runCommandAsync("tellraw @s {\"rawtext\": [{\"text\": \"§cPlayers cannot be summoned like this.§r\"}]}");
          }
        }
        break;
      }
      case "detectBlockInArea": {
        detectBlockInArea(effect.blockArray, effect.areaSize, {x: block.location.x - (effect.areaSize.x/2), y:block.location.y, z:block.location.z - (effect.areaSize.z/2)}, block.dimension);
        break;
      }
      case "ward": {
        block.dimension.runCommandAsync(`setblock ${block.location.x} ${block.location.y} ${block.location.z} ${block.typeId} [\"bw:center_glyph\"=true, \"bw:pulsing\"= true]`);
        break;
      }
    }
  }
}


world.afterEvents.playerInteractWithBlock.subscribe(e => {
  const item = e.itemStack;
  const player = e.player;
  const block = e.block;
  const validActivators = [
    "minecraft:stick",
    "bw:oak_wand",
    "bw:spruce_wand",
    "bw:birch_wand",
    "bw:dark_oak_wand",
    "bw:jungle_wand",
    "bw:acacia_wand",
    "bw:ritual_scroll"
  ];
  
  if (item != undefined && validActivators.includes(item.typeId) && block.hasTag("bw:red_slate") && block.permutation.getState("bw:center_glyph") == true) {
    let items = [];
    
    let entities = block.dimension.getEntities({location: block.location, maxDistance: 3, type: "minecraft:item"});
    
    for (let entity of entities) {
      items.push(entity.getComponent("item").itemStack.typeId);
    }
    
    if (items.length > 0) {
      let foundRitual = checkRituals(items, block, [block.location.x,  block.location.y,  block.location.z],  player);
      if (foundRitual[0] != null) {
        block.dimension.runCommandAsync(`execute positioned ${block.location.x} ${block.location.y} ${block.location.z} run playsound conduit.activate @a[r=6] ~~~ 1`);
        castParticle(foundRitual[0], foundRitual[1], block, player);
      }
    }
  }
  
  if (item != undefined && item.typeId == "bw:blank_scroll" && block.hasTag("bw:red_slate") && block.permutation.getState("bw:center_glyph") == true) {
    let ritualName = getCircle(block, item.nameTag);
    if (ritualName == undefined) {
      return player.runCommandAsync(`tellraw @s {"rawtext": [{"text": "This scroll was not named so no runic circle could be located."}]}`);
    }
    
    if (ritualName.startsWith("Invalid block at")) {
      player.runCommandAsync(`tellraw @s {"rawtext": [{"text": "${ritualName}"}]}`);
    } else {
      let playerHand = player.getComponent("inventory").container;
      let riteScroll = new ItemStack("bw:ritual_scroll", 1);
      riteScroll.setDynamicProperty("bw:boundCeremony", ritualName);
      riteScroll.setDynamicProperty("bw:ceremonialCharges", 6);
      riteScroll.setLore([`Ceremony: ${riteScroll.getDynamicProperty("bw:boundCeremony")}`, `Charges: ${riteScroll.getDynamicProperty("bw:ceremonialCharges")}`]);
      playerHand.setItem(player.selectedSlot, riteScroll);
      player.runCommandAsync("particle bw:absorb_earth_essence ~0.5~1~0.5");
    }
  }
});