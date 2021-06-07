function advanceToProperty(player, room, propertyId) {
  const events = [
    {
      type: 'ADVANCE',
      playerId: player._id,
      tile: propertyId,
    }
  ];

  if (room.properties[propertyId] && room.properties[propertyId].ownerId) {
    events.push({
      type: 'RENT',
      playerId: player._id,
      propertyOwner: room.properties[propertyId].ownerId,
      propertyId: propertyId
    });
  }

  return events;
}

  const CHANCE = [
    {
      id: 0,
      text: 'Gene wants to see you. Advance to Bruinwalk.',
      getEvents: (player, room) => {
        return [
          {
            type: 'ADVANCE',
            playerId: player._id,
            tile: 0
          },
          {
            type: 'CHANGE_MONEY',
            playerId: player._id,
            moneyChange: 200
          }
        ]
      }
    },
    {
      id: 1,
      text: "You're hungry. Advance to Royce or Powell. If owned by someone else, roll die and pay 10 times the amount rolled",
      getEvents: (player, room) => {
        const utilityId = (player.currentTile <= 28 && player.currentTile > 12) ? 28 : 12;
        return advanceToProperty(player, room, utilityId);
      }
    },
    {
      id: 2,
      text: "It's time to see some art! Advance to the Fowler Museum.",
      getEvents: (player, room) => {
        const fowlerId = 39;
        return advanceToProperty(player, room, fowlerId);
      }
    },
    {
      id: 3,
      text: "You've got a final coming up. Advance to YRL.",
      getEvents: (player, room) => {
        const yrlId = 34;
        return advanceToProperty(player, room, yrlId);
      }
    },
    {
      id: 4,
      text: 'You want some new UCLA merch! Advance to Ackerman.',
      getEvents: (player, room) => {
        const ackermanId = 21;
        return advanceToProperty(player, room, ackermanId);
      }
    },
    {
      id: 5,
      text: 'Go to Academic Probation. Go directly to Academic Probation. Do not pass Bruinwalk, do not collect $200.',
      getEvents: (player, room) => {
        return [
          {
            type: 'GO_TO_JAIL',
            playerId: player._id,
          }
        ]
      }
    },
    {
      id: 6,
      text: 'Textbook fees: pay $100.',
      getEvents: (player, room) => {
        return [
          {
            type: 'CHANGE_MONEY',
            playerId: player._id,
            moneyChange: -100,
          }
        ]
      }
    },
    {
      id: 7,
      text: 'Go back three spaces.',
      getEvents: (player, room) => {
        return advanceToProperty(player, room, player.currentTile - 3);
      }
    },
    {
      id: 8,
      text: "You're stopped by Andre on Bruinwalk. You're feeling generous and give him some money. Pay $10.",
      getEvents: (player, room) => {
        return [
          {
            type: 'CHANGE_MONEY',
            playerId: player._id,
            moneyChange: -10,
          }
        ]
      }
    },
    {
      id: 9,
      text: "You just failed a final. Pay $50 for all the food and drink you're going to need to drown your sorrows.",
      getEvents: (player, room) => {
        return [
          {
            type: 'CHANGE_MONEY',
            playerId: player._id,
            moneyChange: -50,
          }
        ]
      }
    },
    {
      id: 10,
      text: "You contracted food poisoning after eating a salad at Covel. Pay $50 because you don't have UCSHIP.",
      getEvents: (player, room) => {
        return [
          {
            type: 'CHANGE_MONEY',
            playerId: player._id,
            moneyChange: -50,
          }
        ]
      }
    },
    {
      id: 11,
      text: "You lost your BruinCard. Pay $25 for a replacement.",
      getEvents: (player, room) => {
        return [
          {
            type: 'CHANGE_MONEY',
            playerId: player._id,
            moneyChange: -25,
          }
        ]
      }
    },
    {
      id: 12,
      text: "Your clothes were destroyed by a washing machine. Pay $50.",
      getEvents: (player, room) => {
        return [
          {
            type: 'CHANGE_MONEY',
            playerId: player._id,
            moneyChange: -50,
          }
        ]
      }
    },
    {
      id: 13,
      text: "You get lost in Boelter Hall and ending up sleeping in a hallway. When you wake up, your wallet is gone. Lose $20.",
      getEvents: (player, room) => {
        return [
          {
            type: 'CHANGE_MONEY',
            playerId: player._id,
            moneyChange: -20,
          }
        ]
      }
    }
  ];
  
export default CHANCE;
  