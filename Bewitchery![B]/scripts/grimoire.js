import { ActionFormData, MessageFormData, ModalFormData } from "@minecraft/server-ui";
import { world, system, ItemStack, Player, BlockPermutation } from "@minecraft/server";
import { createForm } from "./formCreate.js";
import { formStuff } from "./pages.js";
import "wands.js";
  
// if (!(entity instaceof Player)) return;

world.afterEvents.itemUse.subscribe(e => {
  const item = e.itemStack;
  if (item.typeId == "bw:bewitched_book") {
    createForm("bewitched_grimoire_page", e.source);
  }
});