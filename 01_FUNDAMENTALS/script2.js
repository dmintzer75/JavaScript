"use strict";

let driversLicense = false;
const passTest = true;
const happy = `yes!`;
if (passTest) driversLicense = true;
if (driversLicense) console.log(`i can drive ${happy}`);

function logger() {
  console.log(`my name is daro!`);
}

logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);

  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

// Function declaration
function calcAge(birthYear) {
  return 2022 - birthYear;
}
const age = calcAge(1993);

// Function expression
const age3 = function (birthYear) {
  return 2022 - birthYear;
};

// Arrow function
const age4 = (birthYear, height) => (2037 - birthYear) / height;

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1993, "Daro"));
// If different format
const age2 = age > 20 ? `menor de 20` : `mayor de 30`;

console.log(age2);
