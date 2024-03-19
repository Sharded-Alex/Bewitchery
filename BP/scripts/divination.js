import {world, MolangVariableMap, system, ItemStack, BlockPermutation, Vector} from "@minecraft/server";
import {randomize} from "./castRitual.js";

const fortunes = [
  [
    5, 
    {
      "tag": "prophecy:undeadSummon",
      "prophecy":  "Rotting flesh and bones lay littered at your feet. There are monsters nearby.",
      "condition": "duration",
      "timer": 6000
    }
  ],
  [
    5, 
    {
      "tag": "prophecy:coalCache",
      "prophecy":  "You stare up at houses of... coal?",
      "condition": "mineBlock",
      "blocks": [ 
        "minecraft:coal_ore",
        "minecraft:deepslate_coal_ore"
      ],
      "event": "spawnCoal"
    }
  ],
  [
    5,
    {
      "tag": "prophecy:ironCache",
      "prophecy":  "Metallic grey nuggets fall from the sky, and you see yourself dancing beneath their showers.",
      "condition": "mineBlock",
      "blocks": [ 
        "minecraft:iron_ore",
        "minecraft:deepslate_iron_ore"
      ],
      "event": "spawnIron"
    }
  ],
  [
    5,
    {
      "tag": "prophecy:goldCache",
      "prophecy":  "You see yourself sparkle and shine with a lustre like gold.",
      "condition": "mineBlock",
      "blocks": [ 
        "minecraft:gold_ore",
        "minecraft:deepslate_gold_ore"
      ],
      "event": "spawnGold"
    }
  ],
  [
    5, 
    {
      "tag": "prophecy:poisonedFood",
      "prophecy":  "You sit before a banquet of fresh raw food and eat. Suddenly, you are overcome with nausea, and the food becomes rotten and sickening.",
      "condition": "eatFood",
      "items": [
        "minecraft:potato",
        "minecraft:apple",
        "minecraft:beetroot",
        "minecraft:carrot",
        "minecraft:mutton",
        "minecraft:chicken",
        "minecraft:beef",
        "minecraft:porkchop",
        "minecraft:rabbit"
      ],
      "event": "nauseate"
    }
  ],
  [
    5, 
    {
      "tag": "prophecy:wolfGaurdian",
      "prophecy":  "The forest embraces you warmly, and a wolf lays its head upon your lap.",
      "condition": "onAttacked",
      "event": "conjureWolfAlly"
    }
  ],
  [
    5,
    {
      "tag": "prophecy:forestEnemy",
      "prophecy":  "You are being hunted through the forest, and your pursuers will not be dissuaded.",
      "condition": "onAttack",
      "victims": [
        "minecraft:pig",
        "minecraft:cow",
        "minecraft:chicken",
        "minecraft:sheep",
        "minecraft:cat",
        "minecraft:wolf",
        "minecraft:parrot",
        "minecraft:horse",
        "minecraft:donkey",
        "minecraft:mule",
        "minecraft:llama",
      ],
      "event": "conjurePack"
    }
  ],
  [
    45,
    {
      "tag": "prophecy:lightningRod",
      "prophecy":  "You see yourself run through the rain, and all goes white.",
      "condition": "weather",
      "lightning": true,
      "event": "lightningStrike"
    }
  ],
  /*
  [
    5, 
    {
      "tag": "prophecy:death",
      "prophecy":  "Death whispers into your ear, \"Your time is near...\"",
      "condition": "death"
    }
  ]
  */
];

world.afterEvents.playerBreakBlock.subscribe(brk => {
  let player = brk.player;
  let block = brk.block;
  let bBlock = brk.brokenBlockPermutation;
  
  for (let fortune of fortunes) {
    if (player.hasTag(fortune[1].tag) && fortune[1].condition == "mineBlock") {
      if (fortune[1].blocks.includes(bBlock.type.id)) {
        switch (fortune[1].event) {
          case "spawnCoal": {
            block.dimension.spawnItem(new ItemStack("minecraft:coal", 15), block.location);
            player.runCommandAsync(`tag @s remove ${fortune[1].tag}`);
            break;
          }
          case "spawnIron": {
            block.dimension.spawnItem(new ItemStack("minecraft:raw_iron", 15), block.location);
            player.runCommandAsync(`tag @s remove ${fortune[1].tag}`);
            break;
          }
          case "spawnGold": {
            block.dimension.spawnItem(new ItemStack("minecraft:raw_gold", 15), block.location);
            player.runCommandAsync(`tag @s remove ${fortune[1].tag}`);
            break;
          }
        }
      }
    }
  }
});

world.afterEvents.playerInteractWithBlock.subscribe(e => {
  const item = e.itemStack;
  const player = e.player;
  const playerInv = player.getComponent('inventory').container;
  const ball = e.block;
  
  if (ball.typeId == "minecraft:glass") {
    if (item != undefined && item.typeId == "minecraft:spider_eye" && !player.getTags().some(tag => tag.startsWith("prophecy:"))) {
      let prophecy = randomize(fortunes);
      player.runCommandAsync(`tag @s add ${prophecy.tag}`);
      player.runCommandAsync(`tellraw @s {\"rawtext\": [{\"text\": \"§d${prophecy.prophecy}§r\"}]}`);
    }
    
    if (item != undefined && item.typeId == "minecraft:spider_eye" && player.getTags().some(tag => tag.startsWith("prophecy:"))) {
      player.runCommandAsync(`tellraw @s {\"rawtext\": [{\"text\": \"§cYou've already gleaned your future. It must come to pass for you to glean it again...§r\"}]}`);
    }
  }
});

world.afterEvents.itemCompleteUse.subscribe(eat => {
  let player = eat.source;
  let item = eat.itemStack;
  
  for (let fortune of fortunes) {
    if (player.hasTag(fortune[1].tag) && fortune[1].condition == "eatFood") {
      if (fortune[1].items.includes(item.typeId)) {
        switch (fortune[1].event) {
          case "nauseate": {
            player.runCommandAsync(`effect @s nausea 25 0`);
            player.runCommandAsync(`effect @s poison 15 0`);
            player.runCommandAsync(`effect @s hunger 15 0`);
            player.runCommandAsync(`tag @s remove ${fortune[1].tag}`);
            break;
          }
        }
      }
    }
  }
});

world.afterEvents.entityHitEntity.subscribe(e => {
  let entityHit = e.damagingEntity;
  let hitEntity = e.hitEntity;
  
  if (hitEntity.typeId == "minecraft:player") {
    for (let fortune of fortunes) {
      if (hitEntity.hasTag(fortune[1].tag) && fortune[1].condition == "onAttacked") {
        switch (fortune[1].event) {
          case "conjureWolfAlly": {
            let wolf = world.getDimension(hitEntity.dimension.id).spawnEntity("minecraft:wolf", hitEntity.location);
            wolf.runCommandAsync(`damage @s 2 entity_attack entity @e[rm=1, c=1, type=${entityHit.typeId}, name="${entityHit.nameTag}"]`);
            hitEntity.runCommandAsync(`tag @s remove ${fortune[1].tag}`);
            system.runTimeout(r => {
              if (wolf.isValid) {
                wolf.remove();
              }
            }, 200);
            break;
          }
        }
      }
    }
  }
  
  if (entityHit.typeId == "minecraft:player") {
    for (let fortune of fortunes) {
      if (entityHit.hasTag(fortune[1].tag) && fortune[1].condition == "onAttack") {
        if (fortune[1].victims.includes(hitEntity.typeId)) {
          switch (fortune[1].event) {
            case "conjurePack": {
              for (let w = 0; w < 5; w++) {
                let wolf = world.getDimension(hitEntity.dimension.id).spawnEntity("minecraft:wolf", hitEntity.location);
                wolf.runCommandAsync(`damage @s 2 entity_attack entity @e[rm=1, c=1, type=${entityHit.typeId}, name="${entityHit.nameTag}"]`);
                entityHit.runCommandAsync(`tag @s remove ${fortune[1].tag}`);
                system.runTimeout(r => {
                  if (wolf.isValid) {
                    wolf.remove();
                  }
                }, 200);
              }
              break;
            }
          }
          
        }
      }
    }
    
  }
});

world.afterEvents.weatherChange.subscribe(wthr => {
  let dim = wthr.dimension;
  let players = world.getDimension(dim).getPlayers();
  
  for (let player of players) {
    for (let fortune of fortunes) {
      if (player.hasTag(fortune[1].tag) && fortune[1].condition == "weather" && wthr.lightning == fortune[1].lightning) {
        switch (fortune[1].event) {
          case "lightningStrike": {
            player.runCommandAsync(`summon lightning_bolt ~~~`);
            player.runCommandAsync(`tag @s remove ${fortune[1].tag}`);
            break;
          }
        }
      }
    }
  }
});