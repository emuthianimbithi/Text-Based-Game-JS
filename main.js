const readline = require("readline");
const player = require("./player");
const {
  moveToRoom,
  useItem,
  fightCreature,
  takeItem,
  blockArrows,
  displayRoomInfo,
} = require("./functions");

// Handle player input
function handleInput(input) {
  const command = input.toLowerCase().split(" ")[0];
  const argument = input.toLowerCase().split(" ")[1];

  switch (command) {
    case "go":
      moveToRoom(argument);
      break;
    case "fight":
      fightCreature(argument);
      break;
      case "block":
      blockArrows();
      break;
    case "take":
      takeItem(argument);
      break;
    case "use":
      useItem(argument);
      break;
    case "look":
      displayRoomInfo();
      break;
    case "quit":
      player.isAlive = false;
      console.log("Game over.");
      break;
    default:
      console.log("Invalid command.");
  }
}

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Start the game
console.log("Welcome to the Adventure Game!");

displayRoomInfo();

// Game loop
rl.on("line", (input) => {
  handleInput(input);
});
