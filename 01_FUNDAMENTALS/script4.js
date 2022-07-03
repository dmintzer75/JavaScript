"use strict";

const years = new Array(1, 2, 3);
//or
const friends = ["sd", "123", "123"];

const length = friends.length;

// Array methods
friends.push("Daro"); //inserts at end
console.log(friends);

friends.unshift("Daro"); //inserts at start
console.log(friends);

friends.pop(); //takes out the last

friends.shift();
console.log(friends); //takes out the first

friends.indexOf("asd"); //gives you the index of the element

friends.includes("Daro"); // true if it is included

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(bills);
console.log(tips);

// Objects

const jonas = {
  firstName: "Jonas",
  lasName: "Min",
  zipCode: "1432",
  friends: ["daro", "asd", "asdf"],
  birthYear: 1993,

  calcAge: function () {
    return 2022 - this.birthYear;
  },
};

// const interest = prompt("What co you want to know?");

// console.log(interest);

console.log(jonas.friends.length);

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);

console.log(jonas.calcAge(1993));
