const rooms = require("./rooms");
const player = require("./player");
let currentRoom = rooms.room1;

function displayRoomInfo() {
  console.log(currentRoom.description);
}

function die() {
    console.log("You died!");
    player.inventory = [];
    currentRoom = rooms.room1;
    displayRoomInfo();
  }


const fightCreature = (creature) => {
  if (currentRoom.creatures.includes(creature)) {
    if (player.inventory.includes("sword")) {
      console.log(
        `You attack the ${creature} with your sword. You defeated it!`
      );
      currentRoom.creatures = currentRoom.creatures.filter(
        (c) => c !== creature
      );
    } else {
      console.log(
        `You don't have a weapon to fight the ${creature}.`
      );
      die();
    }
  } else {
    console.log(`There is no ${creature} in this room.`);
  }
}

const blockArrows = () => {
  if (currentRoom.creatures.includes("archer")) {
    if (player.inventory.includes("shield")) {
      console.log("You raise your shield and successfully block the arrows!");
    } else {
      console.log(
        "You don't have a shield to block the arrows. You are hit and you die"
      );
      player.isAlive = false;
      console.log("Game over.");
    }
  } else {
    console.log("There are no arrows being shot in this room.");
  }
}

const takeItem = (item) => {
  if (currentRoom.items.includes(item)) {
    player.inventory.push(item);
    console.log(`You took the ${item}. It will come in handy or not ;)`);
    currentRoom.items = currentRoom.items.filter((i) => i !== item);
  } else {
    console.log("There is no such item in this room.");
  }
}


const useItem= (item)=> {
  if (player.inventory.includes(item)) {
    if (item === "antidote") {
      if (currentRoom.creatures.includes("snake")) {
        console.log("You used the antidote and cured the snake bite!");
        currentRoom.creatures = currentRoom.creatures.filter(
          (c) => c !== "snake"
        );
      } else {
        console.log("There is no need to use the antidote right now.");
      }
    } else {
      console.log("You cannot use that item.");
    }
  } else {
    console.log("You don't have that item.");
  }
}

const moveToRoom = (direction) => {
  const nextRoom = currentRoom.exits[direction];
  if (nextRoom) {
    currentRoom = rooms[nextRoom];
    if(currentRoom.name!== "Room 9"){
        displayRoomInfo();
    }else{
        die();
    }
  } else {
    console.log("You cannot go that way.");
  }
}


module.exports = {
    moveToRoom,
    useItem,
    fightCreature,
    takeItem,
    blockArrows,
    displayRoomInfo,
}