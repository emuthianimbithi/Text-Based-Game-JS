const rooms = {
    room1: {
      name: "Room 1",
      description: "You are in Room 1.",
      creatures: [],
      items: [],
      exits: {
        east: "room2",
      },
    },
    room2: {
      name: "Room 2",
      description: "You are in Room 2. There is a key on the table.",
      creatures: [],
      items: ["key"],
      exits: {
        west: "room1",
        east: "room3",
      },
    },
    room3: {
      name: "Room 3",
      description: "You are in Room 3. There is a door to the north.",
      creatures: [],
      items: [],
      exits: {
        west: "room2",
        north: "room4",
        south: "room5",
        east: "room6"
      },
    },
    room4: {
        name: "Room 4",
        description: "You are in Room 4. It's full of lions. What do you do?",
        creatures: ["lions"],
        items: [],
        exits: {
          west: "room8",
          east: "room6",
          north: "room7",
          south: "room3",
        },
      },
      room5: {
        name: "Room 5",
        description: "You are in Room 5. You see a sword.",
        creatures: [],
        items: ["sword"],
        exits: {
          west: "room2",
          north: "room3",
          south: "room9",
        },
      },
      room6: {
        name: "Room 6",
        description: "You are in Room 6. It's a dead end!! But you see a doll. what do you do?",
        creatures: [],
        items: ["Doll"],
        exits: {
          west: "room3",
        },
      },
      room7: {
        name: "Room 7",
        description: "The lions chase you and you die.",
      },
      room8: {
        name: "Room 8",
        description: "You are safe. You see a shield what do you do?",
        creatures: [],
        items: ["shield"],
        exits: {
          west: "room10",
        },
      },
      room9: {
        name: "Room 9",
        description: "You fall down a pit and die!!!",
        playerStatus: false
      },
      room10: {
        name: "Room 10",
        description: "You are in Room 3. Its full of zombies! What do you do?",
        creatures: ["Zombies"],
        items: [],
        exits: {
          west: "room2",
          north: "room4",
        },
      },
  };

  module.exports = rooms;