"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, adress }) {
    console.log(starterIndex, mainIndex, time, adress);
  },
};

restaurant.orderDelivery({
  time: "22",
  adress: "ech",
  mainIndex: 2,
  starterIndex: 2,
});

// const arr = [1, 2, 3];
// const [x, y, z] = arr;
// console.log(x, y, z);

// SWITCHING VARIABLES
let [main, secondary] = restaurant.categories;

[main, secondary] = [secondary, main];

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(nested);

// DESTRUCTURING OBJECTS
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// UNPACKING WITH SPREAD OPERATOR
const arr = [7, 8, 9];
const newArr = [1, 2, 3, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, "gnocci"];
const mainMenuCopy = [...restaurant.mainMenu];
console.log(newMenu, mainMenuCopy);

// JOIN 2 ARRAYS

const newMenu2 = [...newMenu, ...mainMenuCopy];
console.log(newMenu2);

// const ingredients = [prompt("ing1?"), prompt("ing2?"), prompt("ing3?")];
// console.log(ingredients);

// REST OPERATOR

const add = function (...numbers) {
  let summatory = 0;
  for (let i = 0; i < numbers.length; i++) {
    summatory += numbers[i];
  }
  console.log(summatory);
};

add(1, 2);
add(1, 2, 3, 4, 5);

// SHORT-CIRCUITING
// OR
console.log(undefined || "" || 0 || "Hello"); //All false values will not be display, and the first true will be.

// AND
console.log("---AND---");
console.log(0 && "Helo"); // First false value will be display
console.log(1 && "Hello");
