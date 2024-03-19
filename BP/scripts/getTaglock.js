import {world, system, ItemStack, BlockPermutation} from "@minecraft/server";

const familiars = [
  "minecraft:wolf",
  "minecraft:cat",
  "minecraft:parrot",
  "minecraft:frog"
];

function getBottle(inventory) {
  for (let i = 0; i < inventory.size; i++) {
    if (inventory.getItem(i) != undefined && inventory.getItem(i).typeId == "minecraft:glass_bottle") {
      return true;
    }
  }
  return false;
}
function removeBottle(inventory) {
  for (let i = 0; i < inventory.size; i++) {
    if (inventory.getItem(i) != undefined && inventory.getItem(i).typeId == "minecraft:glass_bottle") {
      let newItem = inventory.getItem(i);
      if (newItem.amount == 1) {
        inventory.setItem(i, undefined);
      } else 
      if (newItem.amount > 1) {
        newItem.amount = newItem.amount - 1;
        inventory.setItem(i, newItem);
      }
    }
  }
}

world.afterEvents.entityHitEntity.subscribe(e => {
  let entity = e.hitEntity;
  let player = e.damagingEntity;
  
  if (!player.isSneaking && player.typeId == "minecraft:player") {
    // Get items
    const inv = player.getComponent("inventory").container;
    const item = inv.getItem(player.selectedSlot);
    
    if (item != undefined && item.typeId == "bw:athame" && getBottle(inv)) {
      if (entity.typeId != "minecraft:player") {
        let lore = [
          `§4Type: ${entity.typeId}§r`,
          `§4Name: ${entity.nameTag}§r`, 
          `§4ID: ${entity.id}`
        ];
        let blood = new ItemStack("bw:blood_vial", 1);
        removeBottle(inv);
        blood.setLore(lore);
        if (inv.emptySlotsCount > 0) {
          inv.addItem(blood);
        } else {
          world.getDimension(player.dimension.id).spawnItem(blood, player.location);
        }
      }
      
      if (entity.typeId == "minecraft:player") {
        let lore = [
          `§4Type: ${entity.typeId}§r`,
          `§4Name: ${entity.name}§r`, 
          `§4ID: ${entity.id}`
        ];
        let blood = new ItemStack("bw:blood_vial", 1);
        removeBottle(inv);
        blood.setLore(lore);
        if (inv.emptySlotsCount > 0) {
          inv.addItem(blood);
        } else {
          world.getDimension(player.dimension.id).spawnItem(blood, player.location);
        }
      }
    }
  }
  if (player.isSneaking && player.typeId == "minecraft:player") {
    // Get items
    const inv = player.getComponent("inventory").container;
    const item = inv.getItem(player.selectedSlot);
    
    if (item != undefined && item.typeId == "bw:athame" && getBottle(inv)) {
      let lore = [
        `§4Type: ${player.typeId}§r`,
        `§4Name: ${player.name}§r`, 
        `§4ID: ${player.id}`
      ];
      let blood = new ItemStack("bw:blood_vial", 1);
      removeBottle(inv);
      blood.setLore(lore);
      if (inv.emptySlotsCount > 0) {
        inv.addItem(blood);
      } else {
        world.getDimension(player.dimension.id).spawnItem(blood, player.location);
      }
    }
  }
});