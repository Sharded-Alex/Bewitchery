/* jshint maxerr: 10000 */
import {world, MolangVariableMap, system, ItemStack, BlockPermutation, EntityScaleComponent, Vector} from "@minecraft/server";
import {localizePos} from "./spellDrawing.js";

export function nearWater(entity, detectionArea) {
  let bool = false;
  let location = entity.location;
  for (let x = location.x - detectionArea; x < location.x + detectionArea; x++) {
    for (let y = location.y - detectionArea; y < location.y + detectionArea; y++) {
      for (let z = location.z - detectionArea; z < location.z + detectionArea; z++) {
        let block = world.getDimension(entity.dimension.id).getBlock({x: x, y: y, z: z});
        if (block.typeId == "minecraft:water" || block.typeId == "minecraft:flowing_water") {
          bool = true;
        }
      }
    }
  }
  return bool;
}
export function castParticle(particle, target, player, block) {
  if (target == "player") {
    player.runCommandAsync(`particle ${particle} ${player.location.x} ${player.location.y} ${player.location.z}`);
  }
  if (target == "block") {
    block.dimension.runCommandAsync (`particle ${particle} ${block.location.x} ${block.location.y} ${block.location.z}`);
  }
  return;
}
export function castPotionEffect(effect, duration, amplifier, hideParticles, player) {
  player.runCommandAsync(`effect @s ${effect} ${duration} ${amplifier} ${hideParticles}`);
  return;
}
export function castBlockSpell(blocks, replaceBlocks, spell, block, player) {
  if (blocks.includes(block.typeId)) {
    for (let replaced of replaceBlocks) {
      if (replaced.block == block.typeId) {
        if (replaced.blockData == undefined) {
          block.dimension.runCommandAsync(`fill ${block.location.x} ${block.location.y} ${block.location.z} ${block.location.x} ${block.location.y} ${block.location.z} air replace ${replaced.block}`);
          block.dimension.runCommandAsync(`setblock ${block.location.x} ${block.location.y} ${block.location.z} ${replaced.replacedWith} replace`);
        } else {
          block.dimension.runCommandAsync(`fill ${block.location.x} ${block.location.y} ${block.location.z} ${block.location.x} ${block.location.y} ${block.location.z} air replace ${replaced.block}`);
          block.dimension.runCommandAsync(`setblock ${block.location.x} ${block.location.y} ${block.location.z} ${replaced.replacedWith} ["${replaced.blockData.state}"=` + `"${replaced.blockData.value}"` + `] replace`);
        }
      }
      if (spell.type == "potion_effect") {
        if (spell.target == "self") {
          player.runCommandAsync(`effect @s ${spell.effect} ${spell.duration} ${spell.amplifier} ${spell.hideParticle}`);
        }
      }
    }
  }
  return;
}
export function castGrowth(blockArray, percent, block, player) {
  let chance = Math.round(Math.random() * 100);
  if (chance <= percent && blockArray.includes(block.typeId)) {
    block.dimension.runCommandAsync(`setblock ${block.location.x} ${block.location.y} ${block.location.z} ${block.typeId} ["growth" = ${block.permutation.getState("growth") + 1}]`);
  }
  return;
}
export function castAreaSpell(blockArray, range, block) {
  for (let blocks of blockArray) {
    if (blocks.replacedWith == "minecraft:flowing_water") {
      block.dimension.runCommandAsync(`fill ${block.location.x + range} ${block.location.y + 1} ${block.location.z + range} ${block.location.x - range} ${block.location.y - 1} ${block.location.z - range} ${blocks.replacedWith} ["liquid_depth"=14] replace ${blocks.block} []`);
    } else {
      block.dimension.runCommandAsync(`fill ${block.location.x + range} ${block.location.y + 1} ${block.location.z + range} ${block.location.x - range} ${block.location.y - 1} ${block.location.z - range} ${blocks.replacedWith} [] replace ${blocks.block} []`);
    }
  }
  return;
}
export function transmuteItem(items, limit, block) {
  let targetBlockSpace = block.above(1);
  if (targetBlockSpace.isAir) {
    let realItems = targetBlockSpace.dimension.getEntitiesAtBlockLocation(targetBlockSpace.location);
    let chosenItems = realItems.filter(e => e.typeId == "minecraft:item")[0];
    if (chosenItems == undefined) {
      return;
    }
    
    for (let one of items) {
      if (!chosenItems.hasComponent("item")) { return }
      if (one.presentItem.includes(chosenItems.getComponent("item").itemStack.typeId)) {
        let transmutedItem = new ItemStack(one.finishedItem, chosenItems.getComponent("item").itemStack.amount);
        chosenItems.kill();
        targetBlockSpace.dimension.spawnItem(transmutedItem, targetBlockSpace.location);
      }
    }
  }
}
export function castProjectile(projectile, player, power) {
  const proj = world.getDimension(player.dimension.id).spawnEntity(projectile, {x: player.location.x + player.getViewDirection().x * 2, y: player.location.y + player.getViewDirection().y + 0.85 * 2, z: player.location.z + player.getViewDirection().z * 2});
  
  proj.setDynamicProperty("spell:projectileOwner", `${player.name}`);
  proj.setDynamicProperty("spell:power", power);
  proj.clearVelocity;
  proj.applyImpulse({x: player.getViewDirection().x * 2, y: player.getViewDirection().y * 2, z: player.getViewDirection().z * 2});
}
export function castBurstProjectile(projectile, player, power) {
  for (let i = -1; i < 2; i++) {
    let pos = localizePos(player.getHeadLocation(), player.getViewDirection(), new Vector(i, 0, 2));
    const proj = world.getDimension(player.dimension.id).spawnEntity(projectile, pos);
    
    proj.setDynamicProperty("spell:projectileOwner", `${player.name}`);
    proj.setDynamicProperty("spell:power", power);
    proj.clearVelocity;
    proj.applyImpulse({x: player.getViewDirection().x * 2, y: player.getViewDirection().y * 2, z: player.getViewDirection().z * 2});
  }
}
export function castAoE(object, player) {
  let aoe = world.getDimension(player.dimension.id).spawnEntity("bw:dummy", {x: player.location.x, y: player.location.y, z: player.location.z});
  
  aoe.setDynamicProperty("bw:AoE", JSON.stringify(object));
  aoe.setDynamicProperty("spell:aoeOwner", `${player.name}`);
}
export function castLaunch(object, player) {
  player.applyKnockback(player.getViewDirection().x, player.getViewDirection().z, (2 * object.power) + 3, player.getViewDirection().y * object.power);
}
export function doDirectSpell(player) {
  let location = player.location;
  if (player.getRotation().x > 75) {
    let obj = {
      "xLoc": player.location.x,
      "yLoc": player.location.y,
      "zLoc": player.location.z,
      "dimension": player.dimension.id
    };
    player.setDynamicProperty("wisp_direct", JSON.stringify(obj));
  } else {
    let info = JSON.parse(player.getDynamicProperty("wisp_direct"));
    if (info == undefined) {
      player.runCommandAsync("tellraw @s {\"rawtext\": [{\"text\": \"§5There is no direction defined. Look directly up and cast to bind this location.§r\"}]}");
    } else {
      let originalPoint = new Vector(info.xLoc, info.yLoc, info.zLoc);
      let distance = Vector.distance(player.location, originalPoint);
      player.runCommandAsync(`tellraw @s {\"rawtext\": [{\"text\": \"§5You are ${Math.round(distance)} blocks from your saved position.§r\"}]}`);
      
      let directional = Vector.subtract(originalPoint, player.location).normalized();
      let speed = 0;
      if (distance > 5) {
        speed = 1.75;
      } else {
        speed = Number(`0.${Math.round(distance)}`);
      }
      
      let molang = new MolangVariableMap();
      molang.setSpeedAndDirection(`variable.spd`, speed, directional);
      
      player.spawnParticle("bw:soul_wisp_trail", Vector.add(player.getHeadLocation(), directional), molang);
      
    }
  }
}