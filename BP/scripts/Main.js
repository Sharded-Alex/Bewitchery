/* jshint maxerr: 10000 */
import {world, MolangVariableMap, system, ItemStack, BlockPermutation, EntitySkinIdComponent, Vector} from "@minecraft/server";
import { herbList } from "./herbList";
import "./potionCrafting.js";
import "./consumePotion.js";
import "./ritualData.js";
import "./runicCircles.js";
import { candlePos, detectCandles } from "./castRitual.js";
import "./getTaglock.js";
import "./curses.js";
import "./divination.js";
import "./spiritMagick.js";
import "./spritelist.js";
import "./spellList.js";
import "./activateSpells.js";
import "./spellEffects.js";
import "./spellDrawing.js";
import {information} from "./bookInfo";
import {triggerForm, checkPlayerTags} from "./bookScript";

let alarmBlocks = [
  "minecraft:candle",
  "minecraft:pink_candle",
  "minecraft:purple_candle",
  "minecraft:magenta_candle",
  "minecraft:red_candle",
  "minecraft:orange_candle",
  "minecraft:yellow_candle",
  "minecraft:blue_candle",
  "minecraft:light_blue_candle",
  "minecraft:gray_candle",
  "minecraft:light_gray_candle",
  "minecraft:green_candle",
  "minecraft:lime_candle",
  "minecraft:cyan_candle",
  "minecraft:black_candle",
  "minecraft:white_candle",
];

function calculateMagnitude(Vx, Vy, Vz) {
  return Math.sqrt(Vx**2 + Vy**2 + Vz**2);
}

function randomValue(max, min) {
  return Math.random() * (max - min) + min;
}

function rainRange(range, location) {
  let {x, y, z} = location;
  y += range < 5 ? 5 * 1.5 : range * 1.5;
  x += randomValue(-range, range);
  z += randomValue(-range, range);
  return {x: x, y: y, z: z};
}

function parseQueries(queries, itemData) {
  if (itemData.typeId == "minecraft:gold_nugget") {
    if (itemData.getLore() == undefined) { return }
    let loreArray = itemData.getLore();
    switch (loreArray[0]) {
      case "§r§3Families": {
        for (let l = 1; l < itemData.getLore().length; l++) {
          if (!itemData.getLore()[l].startsWith('!')) {
            if (queries.families == "null") {
              queries.families = [];
            }
            queries.families.push(`${itemData.getLore()[l]}`);
          } else {
            if (queries.excludeFamilies == "null") {
              queries.excludeFamilies = [];
            }
            queries.excludeFamilies.push(`${itemData.getLore()[l].slice(1)}`);
          }
        }
        break;
      }
      case "§r§3Names": {
        for (let l = 1; l < itemData.getLore().length; l++) {
          if (!itemData.getLore()[l].startsWith('!')) {
            if (queries.name == "null") {
              queries.name = [];
            }
            queries.name = itemData.getLore()[l];
          } else {
            if (queries.excludeNames == "null") {
              queries.excludeNames = [];
            }
            queries.excludeNames.push(`${itemData.getLore()[l].slice(1)}`);
          }
        }
        break;
      }
      case "§r§3Tags": {
        for (let l = 1; l < itemData.getLore().length; l++) {
          if (!itemData.getLore()[l].startsWith('!')) {
            if (queries.tags == "null") {
              queries.tags = [];
            }
            queries.tags.push(`${itemData.getLore()[l]}`);
          } else {
            if (queries.excludeTags == "null") {
              queries.excludeTags = [];
            }
            queries.excludeTags.push(`${itemData.getLore()[l].slice(1)}`);
          }
        }
        break;
      }
      case "§r§3Maximum Radius": {
        queries.maxDistance = itemData.getLore()[1] * 1;
        break;
      }
      case "§r§3Minimum Radius": {
        queries.minDistance = itemData.getLore()[1] * 1;
        break;
      }
      case "§r§3Game Mode": {
        queries.gameMode = itemData.getLore()[1];
        break;
      }
    }
  }
  return queries;
}

function parseEffect(itemData) {
  let effect = null;
  if (itemData.typeId == "minecraft:blaze_powder") {
    effect = "Burn";
  }
  if (itemData.typeId == "minecraft:phantom_membrane") {
    effect = "Levitate";
  }
  if (itemData.typeId == "minecraft:ender_pearl") {
    effect = "Teleport";
  }
  if (itemData.typeId == "minecraft:prismarine_shard") {
    effect = "Fatigue";
  }
  if (itemData.typeId == "minecraft:poppy_dust") {
    effect = "Nauseate";
  }
  if (itemData.typeId == "minecraft:ink_sac") {
    effect = "Blind";
  }
  if (itemData.typeId == "minecraft:feather") {
    effect = "Repel";
  }
  if (itemData.typeId == "minecraft:slime_ball") {
    effect = "Slow";
  }
  if (itemData.typeId == "minecraft:fermented_spider_eye") {
    effect = "Weaken";
  }
  if (itemData.typeId == "minecraft:redstone") {
    effect = "Alarm";
  }
  if (itemData.typeId == "minecraft:gold_sword") {
    effect = "Inflict Harm";
  }
  
  return effect;
}

function wardEffects(entities, effect, location, block) {
  for (let entity of entities) {
    switch (effect) {
      case "Burn": 
        entity.setOnFire(8);
        break;
      case "Levitate":
        entity.runCommandAsync('effect @s levitation 10 0 true');
        break;
      case "Slow":
        entity.runCommandAsync('effect @s slowness 10 1 true');
        break;
      case "Weaken":
        entity.runCommandAsync('effect @s weakness 10 1 true');
        break;
      case "Teleport": {
        let itemInfo = location.split(' ');
        if (itemInfo.length < 3) {
          return;
        }
        let loc = [];
        for (let location of itemInfo) {
          let int = location * 1;
          if (!isNaN(int)) {
            loc.push(int);
          }
        }
        if (loc.length < 3) {
          return;
        }
        let candles = detectCandles(block);
        let radiusLimit = 6 + (candles.red_candle * 3);
        if (loc[0] > radiusLimit + block.location.x || loc[0] < block.location.x - radiusLimit) {
          return;
        }
        if (loc[1] > radiusLimit + block.location.y || loc[1] < block.location.y - radiusLimit) {
          return;
        }
        if (loc[2] > radiusLimit + block.location.z || loc[2] < block.location.z - radiusLimit) {
          return;
        }
        
        let refinedLocation = `${loc[0]} ${loc[1]} ${loc[2]}`;
        entity.runCommandAsync(`tp @s ${refinedLocation}`);
        break;
      }
      case "Fatigue":
        entity.runCommandAsync('effect @s mining_fatigue 10 0 true');
        break;
      case "Nauseate":
        entity.runCommandAsync('effect @s nausea 10 0 true');
        break;
      case "Blind":
        entity.runCommandAsync('effect @s blindness 10 0 true');
        entity.runCommandAsync('effect @s darkness 10 0 true');
        break;
      case "Repel": {
        let direction = Vector.subtract(block.location, entity.location);
        entity.applyKnockback(direction.x, direction.z, -3, 0.5);
        break;
      }
      case "Alarm": {
        let itemInfo = location.split(' ');
        if (itemInfo.length < 3) {
          return;
        }
        let loc = [];
        for (let location of itemInfo) {
          let int = location * 1;
          if (!isNaN(int)) {
            loc.push(int);
          }
        }
        if (loc.length < 3) {
          return;
        }
        let candles = detectCandles(block);
        let radiusLimit = 6 + (candles.red_candle * 3);
        if (loc[0] > radiusLimit + block.location.x || loc[0] < block.location.x - radiusLimit) {
          return;
        }
        if (loc[1] > radiusLimit + block.location.y || loc[1] < block.location.y - radiusLimit) {
          return;
        }
        if (loc[2] > radiusLimit + block.location.z || loc[2] < block.location.z - radiusLimit) {
          return;
        }
        
        let refinedLocation = {x: loc[0], y: loc[1], z: loc[2]};
        
        let candle = block.dimension.getBlock(refinedLocation);
        if (alarmBlocks.includes(candle.typeId)) {
          let litState = candle.permutation.getState("lit");
          let candlesState = candle.permutation.getState("candles");
          if (!litState) {
            block.dimension.runCommandAsync(`setblock ${candle.location.x} ${candle.location.y} ${candle.location.z} ${candle.typeId} ["candles"=${candlesState}, "lit"=true]`);
          }
          system.runTimeout(run => {
            block.dimension.runCommandAsync(`setblock ${candle.location.x} ${candle.location.y} ${candle.location.z} ${candle.typeId} ["candles"=${candlesState}, "lit"=false]`);
          }, 20);
        }
        break;
      }
    }
  }
}

system.afterEvents.scriptEventReceive.subscribe(e => {
  const id = e.id;
  const block = e.sourceBlock;
  const player = e.sourceEntity;
  
  if (id == "bw:brewParticles") {
    if (block.typeId == "bw:witch_pot") {
      let idArray = [`${block.permutation.getState("bw:primary")}${block.permutation.getState("bw:primaryTwo")}`, `${block.permutation.getState("bw:secondary")}${block.permutation.getState("bw:secondaryTwo")}`, `${block.permutation.getState("bw:tertiary")}${block.permutation.getState("bw:tertiaryTwo")}`];
      
      let color = [];
      let sums = [0, 0, 0];
      for (let ingredient of herbList) {
        if (ingredient.id == idArray[0]) {
          color.push([ingredient.rgb[0], ingredient.rgb[1], ingredient.rgb[2]]);
        }
        if (ingredient.id == idArray[1]) {
          color.push([ingredient.rgb[0], ingredient.rgb[1], ingredient.rgb[2]]);
        }
        if (ingredient.id == idArray[2]) {
          color.push([ingredient.rgb[0], ingredient.rgb[1], ingredient.rgb[2]]);
        }
      }
      for (let i = 0; i < color.length; i++) {
        sums[0] += Math.round((color[i][0] * 255));
        sums[1] += Math.round((color[i][1] * 255));
        sums[2] += Math.round((color[i][2] * 255));
      }
      let divided = [
        sums[0] * (1/color.length),
        sums[1] * (1/color.length),
        sums[2] * (1/color.length)
      ];
      
      let particle = new MolangVariableMap();
      particle.setColorRGB('variable.color', {red: divided[0]/255, green: divided[1]/255, blue: divided[2]/255, alpha: 1});
      
      block.dimension.spawnParticle("bwCauldron:water", {x: block.location.x + 0.5, y:block.location.y + 0.80, z:block.location.z + 0.5}, particle);
      block.dimension.spawnParticle("bWitch:potion_brew_particle", {x: block.location.x + 0.5, y:block.location.y + 0.75, z:block.location.z + 0.5}, particle);
    }
  }
  
  if (id == "bw:castWard") {
    if (block.hasTag("bw:pulsing")) {
      let container = block.below(1);
      if (container.typeId == "minecraft:chest") {
        let queryOptions = {
          "maxDistance": 5,
          "minDistance": 0,
          "families": "null",
          "excludeFamilies": "null",
          "name": "null",
          "excludeNames": 'null',
          "tags": "null",
          "excludeTags": "null"
        };
        let effect = null;
        let chest = container.getComponent("inventory").container;
        
        for (let i = 0; i < chest.size; i++) {
          if (chest.getItem(i) != undefined) {
            let chestItemType = chest.getItem(i).typeId;
            if (effect == null) {
              queryOptions = parseQueries(queryOptions, chest.getItem(i));
              effect = parseEffect(chest.getItem(i));
            }
            
            if (effect != null) {
              let candles = detectCandles(block);
              let radiusLimit = 5 + (candles.red_candle * 2);
              
              let refinedQueries = Object.fromEntries(Object.entries(queryOptions).filter(([key, value]) => value !== "null"));
              refinedQueries.maxDistance = refinedQueries.maxDistance > radiusLimit ? radiusLimit : refinedQueries.maxDistance;
              refinedQueries.minDistance = refinedQueries.minDistance > radiusLimit ? radiusLimit : refinedQueries.minDistance;
              refinedQueries.location = block.location;
              
              let entities = block.dimension.getEntities(refinedQueries);
              
              wardEffects(entities, effect, chest.getItem(i).nameTag, block);
              effect = null;
              queryOptions = {
                "maxDistance": 5,
                "minDistance": 0,
                "families": "null",
                "excludeFamilies": "null",
                "name": "null",
                "excludeNames": "null",
                "tags": "null",
                "excludeTags": "null"
              };
            }
          }
        }
      }
      if (container.typeId != "minecraft:chest") {
        console.warn("There is no Chest under this block.");
      }
    }
  }
  
  if (id == "bw:statusInteract") {
    if (player.hasTag("efx:frost")) {
      if (player.hasTag("efx:wet") || player.isInWater) {
        player.runCommandAsync(`fill ~+1 ~+1 ~+1 ~-1 ~-1 ~-1 ice replace air`);
        player.runCommandAsync(`fill ~+1 ~+1 ~+1 ~-1 ~-1 ~-1 ice replace water`);
        player.runCommandAsync(`fill ~+1 ~+1 ~+1 ~-1 ~-1 ~-1 ice replace flowing_water`);
        player.runCommandAsync(`tag @s remove efx:frost`);
        player.runCommandAsync(`scoreboard players set @e[r=3] bw:frost 0`);
        player.runCommandAsync(`tag @s remove efx:wet`);
        player.runCommandAsync(`scoreboard players set @e[r=3] bw:wet 0`);
      }
      if (player.getComponent("minecraft:onfire")) {
        player.runCommandAsync(`tag @s add efx:wet`);
        player.runCommandAsync(`scoreboard players set @e[r=3] bw:wet 15`);
        player.runCommandAsync(`tag @s remove efx:frost`);
        player.runCommandAsync(`scoreboard players set @e[r=3] bw:frost 0`);
      }
    }
    
    if (player.hasTag("efx:wet")) {
      if (player.getComponent("minecraft:onfire")) {
        player.runCommandAsync(`damage @s 2 fire`);
        player.extinguishFire(true);
        player.runCommandAsync(`tag @s remove efx:wet`);
        player.runCommandAsync(`scoreboard players set @e[r=3] bw:wet 0`);
      }
    }
  }
  
  if (id == "bw:hailstones") {
    // Hail
    if (JSON.parse(player.getDynamicProperty("bw:AoE")).type == "hail") {
      let hailObj = {
        "type": "hail",
        "duration": JSON.parse(player.getDynamicProperty("bw:AoE")).duration - 1
      };
      if (JSON.parse(player.getDynamicProperty("bw:AoE")).duration != 0 && JSON.parse(player.getDynamicProperty("bw:AoE")).duration % 5 == 0) {
        player.runCommandAsync('particle bw:magic_area_ice ^^8^');
      }
      
      for (let i = 0; i < 2; i++) {
        let projectile = world.getDimension(player.dimension.id).spawnEntity("bw:hail_shard", rainRange(3, player.location));
        projectile.setDynamicProperty("spell:projectileOwner", player.getDynamicProperty("spell:aoeOwner"));
      }
      
      player.setDynamicProperty("bw:AoE", JSON.stringify(hailObj));
      if (JSON.parse(player.getDynamicProperty("bw:AoE")).duration == 0) {
        player.runCommandAsync('event entity @s death');
      }
    }
    
    // Mist
    if (JSON.parse(player.getDynamicProperty("bw:AoE")).type == "mist") {
      let mistObj = {
        "type": "mist",
        "duration": JSON.parse(player.getDynamicProperty("bw:AoE")).duration - 1
      };
      player.runCommandAsync('particle bw:mist_particle ^^0.5^');
      
      let slowEntities = world.getDimension(player.dimension.id).getEntities({location: player.location, maxDistance: 5, excludeNames: [`${player.getDynamicProperty("spell:aoeOwner")}`], excludeTags: [`immunity:${player.getDynamicProperty("spell:aoeOwner")}`], excludeFamilies: ["bw:spell"], excludeTypes: ["minecraft:item", "bw:dummy"]});
      for (let entity of slowEntities) {
        entity.runCommandAsync("effect @s slowness 4 1 true");
      }
      
      let wetEntities = world.getDimension(player.dimension.id).getEntities({location: player.location, maxDistance: 5, excludeFamilies: ["bw:spell"], excludeTypes: ["minecraft:item", "bw:dummy"]});
      for (let entity of wetEntities) {
        entity.runCommandAsync("tag @s add efx:wet");
        entity.runCommandAsync("scoreboard players set @s bw:wet 15");
      }
      
      player.setDynamicProperty("bw:AoE", JSON.stringify(mistObj));
      if (JSON.parse(player.getDynamicProperty("bw:AoE")).duration == 0) {
        player.runCommandAsync('event entity @s death');
      }
    }
  }
  
  if (id == "bw:proj_activate") {
    if (player.getDynamicProperty("spell:projectileOwner") != undefined) {
      if (player.typeId == "bw:hail_shard") {
        let entities = world.getDimension(player.dimension.id).getEntities({location: player.location, maxDistance: 2, excludeNames: [`${player.getDynamicProperty("spell:projectileOwner")}`], excludeTags: [`immunity:${player.getDynamicProperty("spell:projectileOwner")}`],  excludeFamilies: ["bw:spell"], excludeTypes: ["minecraft:item", "bw:dummy"]});
        for (let entity of entities) {
          entity.runCommandAsync("damage @s 4 freezing");
          entity.runCommandAsync("tag @s add efx:frost");
          entity.runCommandAsync("scoreboard players set @s bw:frost 10");
        }
        player.runCommandAsync('event entity @s death');
      }
      
      if (player.typeId == "bw:frost_projectile") {
        let entities = world.getDimension(player.dimension.id).getEntities({location: player.location, maxDistance: 3, excludeNames: [`${player.getDynamicProperty("spell:projectileOwner")}`], excludeTags: [`immunity:${player.getDynamicProperty("spell:projectileOwner")}`],  excludeFamilies: ["bw:spell"], excludeTypes: ["minecraft:item", "bw:dummy"]});
        for (let entity of entities) {
          entity.runCommandAsync("damage @s 5 freezing");
          entity.runCommandAsync("tag @s add efx:frost");
          entity.runCommandAsync("scoreboard players set @s bw:frost 15");
        }
        player.runCommandAsync('event entity @s death');
      }
      
      if (player.typeId == "bw:splash") {
        let entities = world.getDimension(player.dimension.id).getEntities({location: player.location, maxDistance: 3, excludeNames: [`${player.getDynamicProperty("spell:projectileOwner")}`], excludeTags: [`immunity:${player.getDynamicProperty("spell:projectileOwner")}`], excludeFamilies: ["bw:spell"], excludeTypes: ["minecraft:item", "bw:dummy"]});
        for (let entity of entities) {
          entity.runCommandAsync("damage @s 4 drowning");
          entity.runCommandAsync("tag @s add efx:wet");
          entity.runCommandAsync("scoreboard players set @s bw:wet 10");
        }
        player.runCommandAsync('event entity @s death');
      }
      
      if (player.typeId == "bw:magic_missile") {
        let entities = world.getDimension(player.dimension.id).getEntities({location: player.location, maxDistance: 3, excludeNames: [`${player.getDynamicProperty("spell:projectileOwner")}`], excludeTags: [`immunity:${player.getDynamicProperty("spell:projectileOwner")}`], excludeFamilies: ["bw:spell"], excludeTypes: ["minecraft:item", "bw:dummy"]});
        for (let entity of entities) {
          entity.runCommandAsync("damage @s 4 magic");
        }
        player.runCommandAsync('event entity @s death');
      }
    }
  }
  
  if (id == "bw:fatigueMechanic") {
    if (player.getDynamicProperty("bw:fatigueLevel") == undefined || player.getDynamicProperty("bw:fatigueInt") == undefined || player.getDynamicProperty("bw:witchXP") == undefined || player.getDynamicProperty("bw:ascensionAmount") == undefined) {
      player.setDynamicProperty("bw:fatigueLevel", 1);
      player.setDynamicProperty("bw:fatigueInt", 100);
      player.setDynamicProperty("bw:witchXP", 0);
      player.setDynamicProperty("bw:ascensionAmount", 35);
    }
    
    let witchLvl = player.getDynamicProperty("bw:fatigueLevel");
    let witchXP = player.getDynamicProperty("bw:witchXP");
    let nextLevelGoal = player.getDynamicProperty("bw:ascensionAmount");
    
    if (player.getDynamicProperty("bw:fatigueLevel") < 10 && witchXP >= nextLevelGoal) {
      player.setDynamicProperty("bw:fatigueLevel", player.getDynamicProperty("bw:fatigueLevel") + 1);
      player.setDynamicProperty("bw:fatigueInt", 50 + witchLvl * 75);
      player.setDynamicProperty("bw:witchXP", nextLevelGoal - witchXP);
      player.setDynamicProperty("bw:ascensionAmount", (35 + witchLvl* 10) * witchLvl + 15);
      player.runCommandAsync(`playsound random.levelup @s ~~~ 1`);
      player.runCommandAsync(`tellraw @s {\"rawtext\": [{\"text\": \"§aYou're now a Rank ${witchLvl + 1} Witch!§r\"}]}`);
    }
    
    if (player.getDynamicProperty("bw:fatigueLevel") == 10 && (player.getDynamicProperty("bw:witchXP") != "Max" || player.getDynamicProperty("bw:ascensionAmount") != "Max")) {
      player.setDynamicProperty("bw:witchXP", "Max");
      player.setDynamicProperty("bw:ascensionAmount", "Max");
    }
    
    let percentage = Math.round((world.scoreboard.getObjective("bw:Fatigue").getScore(player.scoreboardIdentity)/player.getDynamicProperty("bw:fatigueInt")) * 100);
    if (percentage >= 85) {
      player.addEffect("weakness", 60, {amplifier: 1, showParticles: false});
    }
    if (percentage >= 100) {
      player.addEffect("slowness", 60, {amplifier: 1, showParticles: false});
    }
    if (percentage >= 130) {
      player.runCommandAsync(`tellraw @s {\"rawtext\": [{\"text\": \"§4The Wylde mutters to you its secrets, and your mind and body collapses into endless magick.§r\"}]}`);
      player.runCommandAsync(`scoreboard players set @s bw:Fatigue 0`);
      player.runCommandAsync(`scoreboard players set @s bw:fatgTimer 0`);
      player.kill();
    }
  }
  
  if (id == "bw:witch_battle") {
    let witchLvl = player.getDynamicProperty("bw:fatigueLevel");
    let witchXP = player.getDynamicProperty("bw:witchXP");
    let nextLevelGoal = player.getDynamicProperty("bw:ascensionAmount");
    
    player.setDynamicProperty("bw:fatigueLevel", 10);
    player.setDynamicProperty("bw:fatigueInt", 50 + 9 * 75);
    
    player.runCommandAsync(`tellraw @s {\"rawtext\": [{\"text\": \"§a${player.name}§r, you have become a Rank 10 Witch. Use this power wisely...\"}]}`);
  }
  
  if (id == "bw:witch_reset") {
    player.setDynamicProperty("bw:fatigueLevel", 1);
    player.setDynamicProperty("bw:fatigueInt", 100);
    player.setDynamicProperty("bw:witchXP", 0);
    player.setDynamicProperty("bw:ascensionAmount", 35);
    
    player.runCommandAsync(`tellraw @s {\"rawtext\": [{\"text\": \"§a${player.name}§r, your journey begins once more...§r\"}]}`);
  }
  
  if (id == "bw:undeadAmbush") {
    player.runCommandAsync(`summon minecraft:zombie ~~~ "Conjured Zombie"`);
    player.runCommandAsync(`summon minecraft:zombie ~~~ "Conjured Zombie"`);
    player.runCommandAsync(`summon minecraft:skeleton ~~~ "Conjured Zombie"`);
    player.runCommandAsync(`summon minecraft:skeleton ~~~ "Conjured Zombie"`);
  }
  
  if (id == "bw:fly") {
    if (player.getEffect("speed") != undefined) {
      if (player.isSprinting && !player.isOnGround && !player.isInWater) {
        player.applyKnockback(player.getViewDirection().x, player.getViewDirection().z, 0.5 + (player.getEffect("speed").amplifier/10), player.getViewDirection().y/2);
        player.addEffect("slow_falling", 200, {showParticles: false});
      }
    } else {
      if (player.isSprinting && !player.isOnGround && !player.isInWater) {
        player.applyKnockback(player.getViewDirection().x, player.getViewDirection().z, 0.4, player.getViewDirection().y/2);
        player.addEffect("slow_falling", 200, {showParticles: false});
      }
    }
  }
  
  if (id == "bw:broomFlight") {
    if (player.typeId == "bw:flying_broom") {
      let broom = player.getComponent("minecraft:rideable");
      let broomEntity = broom.entity;
      let riders = broom.getRiders();
      
      let chosenRider = riders.filter(e => e.hasTag("rider"))[0];
      let owner = chosenRider != undefined && broomEntity.hasTag(`broomOwner:${chosenRider.name}`) ? chosenRider : null;
      let heldItem;
      
      if (owner == null) {
        broomEntity.remove();
      }
      
      if (owner.isJumping && owner.getRotation().x < 0) {
        broomEntity.applyKnockback(player.getViewDirection().x, player.getViewDirection().z, 0.15, 0.25);
      }
      if (owner.isJumping && owner.getRotation().x > 0) {
        broomEntity.applyKnockback(player.getViewDirection().x, player.getViewDirection().z, 0.15, -0.25);
      }
    }
  }
  
  if (id == "spellCollision") {
    let detectedSpell = world.getDimension(player.dimension.id).getEntities({closest: 1, minDistance: 0.6, maxDistance:2.5,  families: ["spell", "projectile"]})[0];
    if (player.getDynamicProperty("spell:projectileOwner") == detectedSpell.getDynamicProperty("spell:projectileOwner")) {
      return;
    }
    
    detectedSpell.runCommandAsync("event entity @s burst");
    player.runCommandAsync("event entity @s burst");
  }
});