/* jshint maxerr: 10000 */
import {world, system, MolangVariableMap, ItemStack, BlockPermutation, EquipmentSlot, EntityScaleComponent, Vector} from "@minecraft/server";
import {ModalFormData} from "@minecraft/server-ui";
import { spellList } from "./spellList";
import { nearWater, castParticle, castPotionEffect, castBlockSpell, castGrowth, castAreaSpell, transmuteItem, castProjectile, castBurstProjectile, castAoE, castLaunch, doDirectSpell } from "./activateSpells";

export function getItem(inventory, item) {
  for (let i = 0; i < inventory.size; i++) {
    if (inventory.getItem(i) != undefined && inventory.getItem(i).typeId == item) {
      return true;
    }
  }
  return false;
}

function inRange(block, player, range) {
  const xDiff = block.x - player.x;
  const yDiff = block.y - player.y;
  const zDiff = block.z - player.z;
  if (xDiff < -range && xDiff < range) {
    return false;
  }
  if (yDiff < -range && yDiff < range) {
    return false;
  }
  if (zDiff < -range && zDiff < range) {
    return false;
  }
  
  return true;
}

// Cross Product of Vectors
function crossProduct(a, b) {
  return {
      x:a.y * b.z - a.z * b.y, 
      y:-(a.z * b.x - a.x * b.z),
      z:a.x * b.y - a.y * b.x};
}

function bindToScroll(chosenSpell, player) {
  let inventory = player.getComponent("inventory").container;
  let item = new ItemStack("bw:spell_scroll", 1);
  item.setDynamicProperty("bw:binded_spell", chosenSpell);
  item.setLore([`§r§3${chosenSpell}§r`]);
  
  // Set Item
  inventory.setItem(player.selectedSlot, item);
}

export function localizePos(location, viewDirection, vector) {
  let zVec = viewDirection;
  let xVec = new Vector(zVec.z, 0, -zVec.x).normalized();
  let yVec = crossProduct(zVec, xVec);
  
  let xResult = Vector.multiply(xVec, vector.x);
  let yResult = Vector.multiply(yVec, vector.y);
  let zResult = Vector.multiply(zVec, vector.z);
  
  let newLocation = {
    "x": xResult.x + yResult.x + zResult.x + location.x,
    "y": xResult.y + yResult.y + zResult.y + location.y,
    "z": xResult.z + yResult.z + zResult.z + location.z
  };
  return newLocation;
}

let chargeTime = null;

world.afterEvents.itemStopUse.subscribe(cast => {
  let focus = cast.itemStack;
  let caster = cast.source;
  
  if (focus != undefined && focus.hasTag("bw:castingWand")) {
    if (chargeTime != null) {
      system.clearRun(chargeTime);
      caster.runCommandAsync(`scoreboard players set @s bw:castTime 0`);
    }
  }
});

world.afterEvents.itemUse.subscribe(cast => {
  let focus = cast.itemStack;
  let caster = cast.source;
  
  if (caster.getDynamicProperty("bw:Pacts") == undefined) {
    let witchPacts = {
      "spirits": [],
      "spells": []
    };
    caster.setDynamicProperty("bw:Pacts", JSON.stringify(witchPacts));
  }
  let playerPacts = JSON.parse(caster.getDynamicProperty("bw:Pacts"));
  let playerSpells = playerPacts.spells;
  
  if (!caster.isSneaking && focus != undefined && focus.hasTag("bw:castingWand")) {
    
    // Compare Spell Sequence and Check Spell and Spell Cast Timer
    let spellName = null;
    let spellSpirit = null;
    let spellVFX = null;
    
    let savedSpell;
    if (focus.getDynamicProperty("bw:currentSpell") != undefined) {
      savedSpell = focus.getDynamicProperty(`bw:spellSlot_${focus.getDynamicProperty("bw:currentSpell")}`);
    } else {
      return;
    }
    
    if (savedSpell == "None") {
      return caster.runCommandAsync(`tellraw @s {\"rawtext\": [{\"text\": \"There is no spell attached to this slot.\"}]}`);
    }
    
    for (let spl of playerSpells) {
      for (let spell of spellList) {
        if (savedSpell == spl.name) {
          if (spl.name == spell.name) {
            spellName = spl.name;
            spellSpirit = spl.spirit;
            spellVFX = spell.vfx;
          }
        }
      }
    }
    
    if (spellName == null) {
      return caster.runCommandAsync(`tellraw @s {\"rawtext\": [{\"text\": \"This spell is not available to you.\"}]}`);
    }
    
    let spiritualBeing = null;
    if (caster.getDynamicProperty(`bw:${spellSpirit}`) != undefined) {
      spiritualBeing = JSON.parse(caster.getDynamicProperty(`bw:${spellSpirit}`));
    }
    
    let castable = false;
    if (spiritualBeing != null && spiritualBeing != undefined) {
      chargeTime = system.runInterval(c => {
        caster.runCommandAsync(`scoreboard players add @s bw:castTime 1`);
        if (spellVFX == undefined) {
          castable = true;
        } else {
          let castTime = world.scoreboard.getObjective("bw:castTime").getScore(caster.scoreboardIdentity);
          for (let visual of spellVFX) {
            let molang = new MolangVariableMap();
            let spawnLoc = caster.location;
            
            if (visual.molang != undefined) {
              if (visual.molang.velocity != undefined) {
                if (visual.molang.velocity[0] == "view") {
                  molang.setSpeedAndDirection(`variable.velocity`, visual.molang.velocity[1], caster.getViewDirection());
                }
              }
              
              if (visual.molang.seeLocation != undefined) {
                if (visual.molang.seeLocation) {
                  let seeBlock = caster.getBlockFromViewDirection({includeLiquidBlocks: true});
                  if (seeBlock != undefined && inRange(seeBlock.block.location, caster.location, visual.molang.range)) {
                    spawnLoc = seeBlock.block.offset(seeBlock.faceLocation);
                  }
                }
              }
            }
            
            if (visual.type == "steady") {
              if (castTime >= visual.startStamp && castTime <= visual.endStamp) {
                caster.spawnParticle(visual.particle, localizePos(spawnLoc, caster.getViewDirection(), visual.offset), molang);
                if (visual.sound != undefined) {
                  caster.runCommandAsync(`playsound ${visual.sound} @a[r=5] ~~~ 1`);
                }
                if (castTime == visual.endStamp && visual.endPoint) {
                  castable = true;
                  caster.runCommandAsync(`scoreboard players set @s bw:castTime 0`);
                  break;
                }
              }
            }
            if (visual.type == "instant") {
              if (castTime == visual.startStamp) {
                caster.spawnParticle(visual.particle, localizePos(spawnLoc, caster.getViewDirection(), visual.offset), molang);
                if (visual.sound != undefined) {
                  caster.runCommandAsync(`playsound ${visual.sound} @a[r=5] ~~~ 1`);
                }
                if (visual.endPoint) {
                  castable = true;
                  caster.runCommandAsync(`scoreboard players set @s bw:castTime 0`);
                  break;
                }
              }
            }
          }
        }
        if (castable) {
          for (let spell of spellList) {
            if (spell.name == spellName) {
              let supplement = false;
              
              if (!supplement && spell.detectWater != undefined && spell.detectWater) {
                if (nearWater(caster, 2) || caster.hasTag("efx:wet")) {
                  supplement = true;
                }
              }
              
              if (!supplement && spell.detectItem != undefined) {
                if (getItem(caster.getComponent("inventory").container, spell.detectItem)) {
                  supplement = true;
                }
              }
              
              if (!supplement && (spell.detectItem != undefined || spell.detectWater != undefined)) {
                return;
              }
              
              caster.onScreenDisplay.setActionBar(`${spell.mysticName}!`);
              caster.runCommandAsync(`scoreboard players add @s bw:Fatigue ${spell.cost.fatigue}`);
              let xpChance = Math.random() * 100;
              if (xpChance > 50) {
                caster.setDynamicProperty("bw:witchXP", caster.getDynamicProperty("bw:witchXP") + spell.xp);
              }
              
              for (let spellFX of spell.spellEffects) {
                if (spiritualBeing.trust >= spellFX.trustMin && spiritualBeing.trust <= spellFX.trustMax) {
                  if (spellFX.sneakState == undefined || caster.isSneaking == spellFX.sneakState) {
                    for (let effect of spellFX.spellArray) {
                      switch (effect.type) {
                        case "particles": {
                          castParticle(effect.particle, "player", caster);
                          break;
                        }
                        case "command": {
                          for (let command of effect.commands) {
                            caster.runCommandAsync(`${command}`);
                          }
                          break;
                        }
                        case "potion_effect": {
                          castPotionEffect(effect.effect, effect.duration, effect.amplifier, effect.hideParticle, caster);
                          break;
                        }
                        case "projectile": {
                          castProjectile(effect.projectile, caster, effect.spellpower);
                          break;
                        }
                        case "burst_projectile": {
                          castBurstProjectile(effect.projectile, caster, effect.spellpower);
                          break;
                        }
                        case "aoe": {
                          castAoE(effect.object, caster);
                          break;
                        }
                        case "launch": {
                          castLaunch(effect.knockback, caster);
                          break;
                        }
                        case "transmuteItem": {
                          let seenBlock = caster.getBlockFromViewDirection({includeLiquidBlocks: true, maxDistance:8});
                          if (seenBlock != undefined) {
                            transmuteItem(effect.items, effect.limit, seenBlock.block);
                          }
                          break;
                        }
                        case "fillArea": {
                          let seenBlock = caster.getBlockFromViewDirection({includeLiquidBlocks: true});
                          if (seenBlock != undefined && inRange(seenBlock.block.location, caster.location, 4)) {
                            castAreaSpell(effect.blocks, effect.area, seenBlock.block);
                          }
                          break;
                        }
                        case "growth": {
                          let seenBlock = caster.getBlockFromViewDirection({maxDistance:  4});
                          if (seenBlock != undefined && inRange(seenBlock.block.location, caster.location, 4)) {
                            castGrowth(effect.blocks, effect.chance, seenBlock.block, caster);
                          }
                          break;
                        }
                        case "tags": {
                          for (let i of effect.addTags) {
                            caster.addTag(i);
                          }
                          break;
                        }
                        case "scores": {
                          for (let i of effect.addScores) {
                            caster.runCommandAsync(`scoreboard players set @s ${i.name} ${i.value}`);
                          }
                          break;
                        }
                        case "dynamicProperty": {
                          caster.setDynamicProperty(`${effect.name}`, JSON.stringify(effect.object));
                          break;
                        }
                        case "homeTeleport": {
                          let home = caster.getSpawnPoint();
                          caster.teleport({x: home.x, y: home.y, z: home.z}, {dimension: home.dimension});
                          break;
                        }
                        case "directSpell": {
                          doDirectSpell(caster);
                          break;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          castable = false;
        }
      }, 5);
    }
  }
  
  if (caster.isSneaking && focus != undefined && focus.hasTag("bw:castingWand") && focus.getDynamicProperty("bw:currentSpell") != undefined) {
    let spellNo = focus.getDynamicProperty("bw:currentSpell");
    if (spellNo < 5) {
      focus.setDynamicProperty("bw:currentSpell", spellNo + 1);
      caster.getComponent("inventory").container.setItem(caster.selectedSlot, focus);
      caster.onScreenDisplay.setActionBar(focus.getDynamicProperty(`bw:spellSlot_${focus.getDynamicProperty("bw:currentSpell")}`));
    } else {
      focus.setDynamicProperty("bw:currentSpell", 1);
      caster.getComponent("inventory").container.setItem(caster.selectedSlot, focus);
      caster.onScreenDisplay.setActionBar(focus.getDynamicProperty(`bw:spellSlot_${focus.getDynamicProperty("bw:currentSpell")}`));
    }
    
    focus.setLore([`§rActive Spell: §a${focus.getDynamicProperty(`bw:spellSlot_${focus.getDynamicProperty("bw:currentSpell")}`)}§r`]);
    caster.getComponent("inventory").container.setItem(caster.selectedSlot, focus);
  }
});

world.afterEvents.playerInteractWithBlock.subscribe(e => {
  const item = e.itemStack;
  const player = e.player;
  const block = e.block;
  
  if (item != undefined && item.typeId == "bw:blank_scroll" && block != undefined && block.typeId == "minecraft:lectern") {
    let spells = [];
    
    let playerSpellList = JSON.parse(player.getDynamicProperty("bw:Pacts")).spells;
    
    for (let spell of playerSpellList) {
      spells.push(spell.name);
    }
    
    let form = new ModalFormData();
    form.title('Spellbinding Interface');
    form.dropdown(`Select Spell`, spells, 0);
    
    form.show(player).then(res => {
      if (res.canceled) {
        return;
      }
      let chosenSpell = spells[res.formValues[0]];
      bindToScroll(chosenSpell, player);
    });
  }
  
  if (item != undefined && item.hasTag("bw:castingWand") && block != undefined && block.typeId == "minecraft:chest") {
    let chest = block.getComponent("inventory").container;
    
    for (let i = 0; i < 5; i++) {
      if (item.getDynamicProperty("bw:currentSpell") == undefined) {
        item.setDynamicProperty(`bw:currentSpell`, 1);
      }
      if (chest.getItem(i) != undefined && chest.getItem(i).getDynamicProperty("bw:binded_spell") != undefined) {
        item.setDynamicProperty(`bw:spellSlot_${i + 1}`, chest.getItem(i).getDynamicProperty("bw:binded_spell"));
      }
      
      if (chest.getItem(i) == undefined) {
        item.setDynamicProperty(`bw:spellSlot_${i + 1}`, "None");
      }
      
      if (chest.getItem(i) != undefined && chest.getItem(i).getDynamicProperty("bw:binded_spell") == undefined) {
        item.setDynamicProperty(`bw:spellSlot_${i + 1}`, "None");
      }
    }
    
    item.setLore([`§rActive Spell: §a${item.getDynamicProperty(`bw:spellSlot_${item.getDynamicProperty("bw:currentSpell")}`)}§r`]);
    player.getComponent("inventory").container.setItem(player.selectedSlot, item);
  }
  
  /*
  if (!player.isSneaking && item != undefined && item.hasTag("bw:castingWand") && item.getDynamicProperty("bw:currentSpell") != undefined && block != undefined && block.typeId != "minecraft:chest" && !block.hasTag("bw:red_slate")) {
    let spellNo = item.getDynamicProperty("bw:currentSpell");
    if (spellNo < 5) {
      item.setDynamicProperty("bw:currentSpell", spellNo + 1);
      player.getComponent("inventory").container.setItem(player.selectedSlot, item);
      player.onScreenDisplay.setActionBar(item.getDynamicProperty(`bw:spellSlot_${item.getDynamicProperty("bw:currentSpell")}`));
    } else {
      item.setDynamicProperty("bw:currentSpell", 1);
      player.getComponent("inventory").container.setItem(player.selectedSlot, item);
      player.onScreenDisplay.setActionBar(item.getDynamicProperty(`bw:spellSlot_${item.getDynamicProperty("bw:currentSpell")}`));
    }
  }
  
  if (player.isSneaking && item != undefined && item.hasTag("bw:castingWand") && item.getDynamicProperty("bw:currentSpell") != undefined && block != undefined && block.typeId != "minecraft:chest" && !block.hasTag("bw:red_slate")) {
    let spellNo = item.getDynamicProperty("bw:currentSpell");
    if (spellNo > 1) {
      item.setDynamicProperty("bw:currentSpell", spellNo - 1);
      player.getComponent("inventory").container.setItem(player.selectedSlot, item);
      player.onScreenDisplay.setActionBar(item.getDynamicProperty(`bw:spellSlot_${item.getDynamicProperty("bw:currentSpell")}`));
    } else {
      item.setDynamicProperty("bw:currentSpell", 5);
      player.getComponent("inventory").container.setItem(player.selectedSlot, item);
      player.onScreenDisplay.setActionBar(item.getDynamicProperty(`bw:spellSlot_${item.getDynamicProperty("bw:currentSpell")}`));
    }
  }
  */
});