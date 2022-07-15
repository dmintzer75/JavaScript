"use strict";
// // Coding Challenge #2

// /*
// Let's continue with our football betting app!
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }
// GOOD LUCK 😀
// */

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }
// console.log("--- 2. ---");
// // 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// let avg = 0;
// const odds = Object.values(game.odds);
// for (const odd of odds) {
//   //   console.log(odd);
//   avg += odd;
// }
// avg /= odds.length;
// console.log(avg);

// // 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
// //       Odd of victory Bayern Munich: 1.33
// //       Odd of draw: 3.25
// //       Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// console.log("--- 3. ---");
// // console.log(`${game.}`)

// // for (const i of Object.keys(game.odds)) {
// //   if (i == "team1") {
// //     console.log(`Odd of victory ${game.team1}: ${game.odds[i]}`);
// //   } else if (i === "team2") {
// //     console.log(`Odd of victory ${game.team2}: ${game.odds[i]}`);
// //   } else {
// //     console.log(`Odd of draw: ${game.odds[i]}`);
// //   }
// // }

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === "x" ? "draw" : `Victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${odd}`);
// }

// // SETS
// const ordersSet = new Set(["pasta", "pizza", "pasta", "risotto"]);
// console.log(ordersSet);
// console.log(ordersSet.size);
// console.log(ordersSet.has("pizza"));
// ordersSet.add("Garlic");
// console.log(ordersSet);
// ordersSet.delete("Garlic");
// console.log(ordersSet);
// // ordersSet.clear("Garlic");
// // console.log(ordersSet);
// for (const order of ordersSet) {
//   console.log(order);
// }
// // EXAMPLE
// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

// console.log(
//   new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
// );

// console.log(new Set("asdasdaafgeggrhtsds").size); // how many different strings

// // MAPS
// const rest = new Map();
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenze");
// rest.set(2, "Lisbon");

// rest
//   .set("categories", ["pizza", "vegan", "meat"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are open!")
//   .set(false, "We are close");
// console.log(rest);
// // console.log(rest.get(true));

// const time = 21;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
// console.log(rest.has("categories"));
// console.log(rest.size);
// rest.delete(2);
// console.log(rest.size);
// rest.clear();
// console.log(rest);

// const arr = [1, 2];
// rest.set(arr, "daro");
// console.log(rest);
// console.log(rest.get(arr));

// console.log("--- MAP ITERATIONS ---");

// const question = new Map([
//   ["question", "What is the best programming language?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "JavaScript"],
//   ["correct", 3],
//   [true, "Correct!"],
//   [false, "Try again!"],
// ]);
// console.log(question);

// // Convert Object to Map
// const gameMap = new Map(Object.entries(game.odds));
// console.log(gameMap);

// // Question app
// console.log(question.get("question"));
// for (const [key, value] of question) {
//   if (typeof key === "number") {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// // const answer = Number(prompt("Your answer?"));
// // console.log(answer);

// // console.log(question.get(answer === question.get("correct")));

// // // Convert Map to Array
// // console.log([...question]);

// ///////////////////////////////////////
// // Coding Challenge #3

// // Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
// // 1. Create an array 'events' of the different game events that happened (no duplicates)
// // 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// // 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// // 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF] 17: ⚽️ GOAL

// const gameEvents = new Map([
//   [17, "⚽️ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽️ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽️ GOAL"],
//   [80, "⚽️ GOAL"],
//   [92, "🔶 Yellow card"],
// ]);
// console.log("--- CODING CHALLENGE 3 ---");
// // 1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);
// // 2.
// gameEvents.delete(64);
// console.log(gameEvents);
// // 3.
// let totalTime = [...gameEvents.keys()].pop();

// let avgMin = Math.round(totalTime / gameEvents.size);
// console.log(`An event happened, on average, every ${avgMin} minutes`);

// // 4.

// let halfString = "";

// for (const [min, event] of gameEvents) {
//   halfString = min > 45 ? "SECOND HALF" : "FIRST HALF";
//   console.log(`[${halfString}] ${min}: ${event}`);
// }

// STRINGS
console.log("--- STRINGS ---");
const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Portugal"));

console.log(airline.slice(4));
console.log(airline.slice(0, 4));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(2, -1));

function checkMiddleSeat(seat) {
  console.log(
    seat.includes("B") || seat.includes("E") ? "Middle Seat" : "Other"
  );
}

checkMiddleSeat("45B");

console.log(airline.toLowerCase());
console.log("    new string".trim()); // gets rid of blank space

const normalizedEmail = "  Hello@Jonas.IO".toLowerCase().trim();
console.log(normalizedEmail);

// REPLACING
const priceGB = "288,97$";
const priceUS = priceGB.replace("$", "%").replace(",", ".");
console.log(priceUS);

const phrase = "door, asdjnasf ajsnda snd door";
console.log(phrase.replace(/door/g, "gate"));

// Boleans
airline.includes("A");
airline.endsWith("S");
airline.startsWith("D");

// SPLIT
console.log("a+new+string");
console.log("a+new+string".split("+"));

const [firstName, lastName] = "dario mintzer".split(" ");
const newName = ["Mr.", firstName, lastName].join(" ");
console.log(newName);

function capitalize(name) {
  const names = name.split(" ");
  console.log(names);
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
}
capitalize(newName);

// Padding
console.log("Jonas".padStart(21, "+"));

console.log("dario".repeat(3));
