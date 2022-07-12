"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// CODING CHALLENGE
//1.
const [players1, players2] = game.players;

// console.log(players1);

//2.
const [gk1, ...fieldPlayers1] = players1;
// console.log(fieldPlayers1);

//3.
const [...allPlayers] = [...players1, ...players2];
// console.log(allPlayers);

//4.
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

//5.
const {
  odds: { team1, x, team2 },
} = game;
// console.log(team1, draw, team2);

//6.
function printGoals(...players) {
  console.log(`total goals: ${players.length}`);
  players.forEach((element) => {
    console.log(element);
  });
}

printGoals("Thiago", "Coutinho", "Perisic");

//7.

team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");

// A Different WAY FOR LOOPING
const menu = [1, 2, 43, 4, 5, 6, 6, 8];
for (const item of menu) console.log(item); // FOR OF LOOP
for (const item of menu.entries()) console.log(item);
// THE SAME BUT DESTRUCTURED
for (const [i, el] of menu.entries()) console.log(i, el);

console.log("---object literals");
const weekdays = ["mon", "tue", "wed", "fri"];

const openingHours = {
  [weekdays[0]]: {
    open: 12,
    close: 23,
  },
  [weekdays[1]]: {
    open: 12,
    close: 23,
  },
  [weekdays[2]]: {
    open: 12,
    close: 23,
  },
};

const restaurant = {
  name: "Darios",
  openingHours,
};
console.log(restaurant.openingHours.mon);

// WITH OPTIONAL CHAINING

console.log(restaurant.openingHours?.fri?.open); // does opening hours exist? and fri?
// this prevents the error if they dont exist

for (const day of weekdays) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day} we open at ${open}`);
}

// WITH OPTIONAL CHAINING arrays

const users = [
  {
    name: "Dario",
    mail: "dmintzer",
  },
];

console.log(users[0]?.name ?? "user not defined");

// LOOPING OVER OBJECTS
console.log("---looping over objects---");
for (const day of Object.keys(openingHours)) {
  console.log(day);
}
// entire object
for (const day of Object.entries(openingHours)) {
  console.log(day);
}
