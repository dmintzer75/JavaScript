"use strict";

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

console.log(mark.calcBMI());
console.log(john.calcBMI());

console.log(
  mark.calcBMI() > john.calcBMI()
    ? `John's BMI(${john.calcBMI()}) is higher than Mark's`
    : `Mark's BMI(${mark.calcBMI()}) is higher than John's`
);

for (let rep = 1; rep <= 10; rep++) {
  console.log(`rep ${rep}`);
}

const jonas = ["Jonas", "daro", "teacher", 29, true];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i]);
}

console.log(`--- ONLY STRINGS ---`);

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue; //exits the current iteration

  console.log(jonas[i]);
}

console.log(`--- BREAK WITH NUMBER ---`);

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break; //exits the current iteration

  console.log(jonas[i]);
}

let rep = 1;
while (rep <= 10) {
  console.log(`rep ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) console.log(`loop has ended`);
}
