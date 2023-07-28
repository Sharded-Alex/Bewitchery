import {ActionFormData, ActionFormResponse, MessageFormData, ModalFormData} from "@minecraft/server-ui";
import {world, system} from "@minecraft/server";
import { formStuff } from "./pages.js";


function runCmd(loot, target){
  let players = world.getPlayers();
  for (let player of players) {
    player.runCommand(`loot give @a[name="${target}"] loot "${loot}"`);
  }
}

function doAction(action, player) {
  let playerName = player.nameTag;
  for (let a in action) {
    let formID = action[a].value;
    switch (action[a].open_form) {
      case true:
        createForm(formID, player);
        break;
      case false:
        runCmd(formID, playerName);
        break;
    }
  }
}

export function createForm(formInfo, player) {
  let bookPage = formStuff[formInfo];
  //Gets JSON from FormInfo ^^^
  const witchForm = new ActionFormData();
  witchForm.title(bookPage.title);
  witchForm.body(bookPage.body);
  //Pull form title and body from FormInfo
  
  let buttons = bookPage.buttons;
  for (let x in buttons) {
    let aButton = buttons[x];
    if (aButton.buttonIcon != undefined || aButton.buttonIcon != '') {
      witchForm.button(aButton.buttonName, aButton.buttonIcon);
    } else {
      witchForm.button(aButton.buttonName);
    }
  }
  
  witchForm.show(player).then(display => {
    if (display.selection != undefined) {
      doAction(buttons[display.selection].onClick, player);
    } else if (bookPage.onClose != undefined) {
      return;
    }
  });
}

