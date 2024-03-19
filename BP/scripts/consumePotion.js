/* jshint maxerr: 10000 */
import {world, system, ItemStack} from "@minecraft/server";
import {triggerForm, checkPlayerTags} from "./bookScript.js";

const potionEffects = [
  {
    "name": "Absorption",
    "effect": "absorption"
  },
  {
    "name": "Blindness",
    "effect": "blindness"
  },
  {
    "name": "Conduit Power",
    "effect": "conduit_power"
  },
  {
    "name": "Darkness",
    "effect": "darkness"
  },
  {
    "name": "Fatal Poison",
    "effect": "fatal_poison"
  },
  {
    "name": "Fire Resistance",
    "effect": "fire_resistance"
  },
  {
    "name": "Haste",
    "effect": "fire_resistance"
  },
  {
    "name": "Health Boost",
    "effect": "health_boost"
  },
  {
    "name": "Hunger",
    "effect": "hunger"
  },
  {
    "name": "Instant Damage",
    "effect": "instant_damage"
  },
  {
    "name": "Instant Health",
    "effect": "instant_health"
  },
  {
    "name": "Invisibility",
    "effect": "invisibility"
  },
  {
    "name": "Jump Boost",
    "effect": "jump_boost"
  },
  {
    "name": "Levitation",
    "effect": "levitation"
  },
  {
    "name": "Mining Fatigue",
    "effect": "mining_fatigue"
  },
  {
    "name": "Nausea",
    "effect": "nausea"
  },
  {
    "name": "Night Vision",
    "effect": "night_vision"
  },
  {
    "name": "Poison",
    "effect": "poison"
  },
  {
    "name": "Resistance",
    "effect": "resistance"
  },
  {
    "name": "Regeneration",
    "effect": "regeneration"
  },
  {
    "name": "Saturation",
    "effect": "saturation"
  },
  {
    "name": "Slowness",
    "effect": "slowness"
  },
  {
    "name": "Slow Falling",
    "effect": "slow_falling"
  },
  {
    "name": "Speed",
    "effect": "speed"
  },
  {
    "name": "Strength",
    "effect": "strength"
  },
  {
    "name": "Water Breathing",
    "effect": "water_breathing"
  },
  {
    "name": "Weakness",
    "effect": "weakness"
  },
  {
    "name": "Wither",
    "effect": "wither"
  },
];

function translateEffect(effectName) {
  for (let pEffect of potionEffects) {
    if (pEffect.name == effectName) {
      return pEffect.effect;
    }
  }
}

function convertToTime(string) {
  let timeArray = string.split(':');
  return (Number(timeArray[0]) * 60) + Number(timeArray[1]);
}

world.afterEvents.itemCompleteUse.subscribe(drink => {
  let player = drink.source;
  let item = drink.itemStack;
  
  if (item != undefined && item.typeId == "bw:strange_potion" && item.getLore().length > 0) {
    let potionLore = `${item.getLore().slice(0, item.getLore().length - 1)}`;
    let potionArray = potionLore.split(',');
    
    let uses = item.getLore()[item.getLore().length - 1][4] * 1;
    let emptyPotion = new ItemStack("minecraft:glass_bottle", 1);
    if (uses > 0) {
      for (let i = 0; i < potionLore.length; i++) {
        let completeLore = [];
        let beginningLore = potionArray[i < potionArray.length ? i : potionArray.length - 1].split(' ');
        
        if (beginningLore.length > 3) {
          completeLore = [`${beginningLore[0].replace('§r§7', '')} ${beginningLore[1]}`, beginningLore[2].replace('III', '2').replace('II', '1').replace('I', '0'), beginningLore[3]];
        } else {
          completeLore = [beginningLore[0].replace('§r§7', ''), beginningLore[1].replace('III', '2').replace('II', '1').replace('I', '0'), beginningLore[2]];
        }
        
        player.runCommandAsync(`effect @s ${translateEffect(completeLore[0])} ${convertToTime(completeLore[2].slice(1, completeLore[2].length - 1))} ${completeLore[1]}`);
      }
      
      let arr = item.getLore().slice(0, item.getLore().length - 1);
      arr.push(`§r§d${uses-1}/5 Uses§r`);
      item.setLore(arr);
      player.getComponent('inventory').container.setItem(player.selectedSlot, item);
    }
    if (uses == 1) {
      player.getComponent('inventory').container.setItem(player.selectedSlot, undefined);
      if (player.getComponent('inventory').container.emptySlotsCount > 0) {
        player.getComponent('inventory').container.addItem(emptyPotion);
      } else {
        world.getDimension(player.dimension.id).spawnItem(emptyPotion, player.location);
      }
    }
  }
  
  if (item != undefined && item.typeId == "minecraft:honey_bottle") {
    triggerForm("mainPage", player.name, player.dimension.id);
  }
});

world.afterEvents.entityHitEntity.subscribe(e => {
  let entity = e.hitEntity;
  let player = e.damagingEntity;
  
  if (player.typeId != "minecraft:player") {
    return;
  }
  
  let item = player.getComponent('inventory').container.getItem(player.selectedSlot);
  
  if (item != undefined && item.typeId == "bw:strange_potion" && item.getLore().length > 0) {
    let potionLore = `${item.getLore().slice(0, item.getLore().length - 1)}`;
    let potionArray = potionLore.split(',');
    
    let uses = item.getLore()[item.getLore().length - 1][4] * 1;
    let emptyPotion = new ItemStack("minecraft:glass_bottle", 1);
    if (uses > 0) {
      for (let i = 0; i < potionLore.length; i++) {
        let completeLore = [];
        let beginningLore = potionArray[i < potionArray.length ? i : potionArray.length - 1].split(' ');
        
        if (beginningLore.length > 3) {
          completeLore = [`${beginningLore[0].replace('§r§7', '')} ${beginningLore[1]}`, beginningLore[2].replace('III', '2').replace('II', '1').replace('I', '0'), beginningLore[3]];
        } else {
          completeLore = [beginningLore[0].replace('§r§7', ''), beginningLore[1].replace('III', '2').replace('II', '1').replace('I', '0'), beginningLore[2]];
        }
        
        entity.runCommandAsync(`effect @s ${translateEffect(completeLore[0])} ${convertToTime(completeLore[2].slice(1, completeLore[2].length - 1))} ${completeLore[1]}`);
      }
      
      let arr = item.getLore().slice(0, item.getLore().length - 1);
      arr.push(`§r§d${uses-1}/5 Uses§r`);
      item.setLore(arr);
      player.getComponent('inventory').container.setItem(player.selectedSlot, item);
    }
    if (uses == 1) {
      player.getComponent('inventory').container.setItem(player.selectedSlot, undefined);
      if (player.getComponent('inventory').container.emptySlotsCount > 0) {
        player.getComponent('inventory').container.addItem(emptyPotion);
      } else {
        world.getDimension(player.dimension.id).spawnItem(emptyPotion, player.location);
      }
    }
  }
});