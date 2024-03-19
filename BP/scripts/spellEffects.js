import {world, system, ItemStack} from "@minecraft/server";
import { nearWater, castParticle, castPotionEffect, castBlockSpell, castGrowth, castAreaSpell, transmuteItem, castProjectile, castAoE, castLaunch } from "./activateSpells";

world.afterEvents.entityHitEntity.subscribe(e => {
  let entityHit = e.damagingEntity;
  let hitEntity = e.hitEntity;
  
  if (entityHit != undefined && hitEntity != undefined && hitEntity.hasTag('bw:fire_skin')) {
    // Destroy Witch's Bond
    if (hitEntity.typeId == "minecraft:player" && entityHit.hasTag(`immunity:${hitEntity.name}`)) {
      player.runCommandAsync("tellraw @s {\"rawtext\": [{\"text\": \"§cYou feel Wildfyre regard you with disgust as you harm your friend. It burns away your bond in anger.\"}]}");
      player.runCommandAsync(`tag @s remove "immunity:${hitEntity.name}"`);
    }
    entityHit.setOnFire(5);
  }
});