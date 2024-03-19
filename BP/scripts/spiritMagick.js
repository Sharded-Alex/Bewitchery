import {world, system, ItemStack, ItemLockMode} from "@minecraft/server";
import {ModalFormData} from "@minecraft/server-ui";

export const validItems = [
  "minecraft:book"
];
const spellItems = [
  {
    "itemName": "minecraft:book",
    "slotCount": 2
  }
];

function bindSpell(array, player) {
  let inventory = player.getComponent("inventory").container;
  let item = inventory.getItem(player.selectedSlot);
  item.setLore(array);

  player.runCommandAsync(`tellraw @s {\"rawtext\": [{\"text\": \"§aSpells were successfully bound to Focus.§r\"}]}`);
  
  // Set Item
  inventory.setItem(player.selectedSlot, item);
}

world.afterEvents.playerInteractWithBlock.subscribe(e => {
  const item = e.itemStack;
  const player = e.player;
  const block = e.block;
  
  if (player.isSneaking && item != undefined && validItems.includes(item.typeId) && block != undefined && block.typeId == "minecraft:crafting_table") {
    let spellSlots = 0;
    let spells = ["None"];
    
    for (let sItem of spellItems) {
      if (item.typeId == sItem.itemName) {
        spellSlots = sItem.slotCount;
      }
    }
    
    let spellList = JSON.parse(player.getDynamicProperty("bw:Pacts")).spells;
    
    for (let spell of spellList) {
      spells.push(spell.name);
    }
    
    
    let form = new ModalFormData();
    form.title('CAD Spell Input');
    for (let v = 0; v < spellSlots; v++) {
      form.dropdown(`Focus Slot ${v+1}`, spells, 0);
    }
    
    form.show(player).then(res => {
      if (res.canceled) {
        return;
      }
      let chosenSpells = [];
      for (let i of res.formValues) {
        chosenSpells.push(spells[i]);
      }
      bindSpell(chosenSpells, player);
    });
  }
});

world.afterEvents.itemUse.subscribe(cast => {
  let player = cast.source;
  let item = cast.itemStack;
  let inventory = player.getComponent("inventory").container;
  let playerPacts = JSON.parse(player.getDynamicProperty("bw:Pacts"));
  let playerSpells = playerPacts.spells;
  
  if (item != undefined && validItems.includes(item.typeId) && player.hasTag("bw:spellCasting_Mode") && item.getLore().length > 0) {
    for (let i = 0; i < inventory.size; i++) {
      if (inventory.getItem(i) != undefined && inventory.getItem(i).typeId == "bw:spell_page" && inventory.getItem(i).getLore()[0] == `Witch: ${player.name}`) {
        inventory.setItem(i, undefined);
      }
    }
    player.removeTag("bw:spellCasting_Mode");
    return;
  }
  
  if (item != undefined && validItems.includes(item.typeId)&& !player.hasTag("bw:spellCasting_Mode") && item.getLore().length > 0) {
    let spellList = JSON.parse(player.getDynamicProperty("bw:Pacts")).spells;
    
    let spells = item.getLore();
    if (inventory.emptySlotsCount >= spells.length) {
      let spellPaper = new ItemStack("bw:spell_page", 1);
      for (let i = 0; i < spells.length; i++) {
        if (spells[i] != "None") {
          spellPaper.nameTag = spells[i];
          for (let spell of spellList) {
            if (spells[i] == spell.name) {
              spellPaper.setLore([`Witch: ${player.name}`]);
            }
          }
          spellPaper.lockMode = ItemLockMode.inventory;
          spellPaper.keepOnDeath = true;
          inventory.addItem(spellPaper);
        }
      }
      player.addTag("bw:spellCasting_Mode");
    }
    return;
  }
});