"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

console.log("--- BANKIST APP ---");

// ADDING MOVEMENTS ROWS
function displayMovements(movements) {
  containerMovements.innerHTML = "";

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type} </div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}</div>
        </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
}
displayMovements(account1.movements);

// ADDING BALANCE
function calcDisplayBalance(account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov);
  labelBalance.textContent = `${account.balance} EUR`;
}
calcDisplayBalance(account1);
console.log(account1);

function calcDisplaySummary(movements) {
  const income = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov);
  labelSumIn.textContent = `${income} €`;

  const outcome =
    movements.filter((mov) => mov < 0).reduce((acc, mov) => acc + mov) * -1;
  labelSumOut.textContent = `${outcome} €`;

  const interest = movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * 1.2) / 100)
    .filter((int) => int >= 1)
    .reduce((acc, int) => acc + int);

  labelSumInterest.textContent = `${interest} €`;
}
calcDisplaySummary(account1.movements);

// ADDING USERNAME
function getUsername(accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((word) => word[0])
      .join("");
  });
}
getUsername(accounts);
console.log(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
console.log(`--- LECTURE ---`);
// Slice
let arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1));
// Splice
console.log(arr.splice(3));
console.log(`This is arr now: ${arr} `);
// Reverse
let arr2 = [1, 2, 3, 4, 5];
console.log(arr2.reverse());
// Concat
const arr3 = arr.concat(arr2);
console.log(arr3);
// Join
console.log(arr3.join("-"));

// AT
console.log(arr3.at(-1));

// For Each
console.log(`--- FOR EACH ---`);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements.forEach(function (movement, index, array) {
  movement > 0
    ? console.log(`you deposited ${movement}, index: ${index}`)
    : console.log(`you extracted ${movement}`);
});

// MAP
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// SET

const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}`);
});

console.log(`--- CHALLENGE 1 ---`);

// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets
HINT: Use tools from all lectures in this section so far 😉
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
*/

let dogsJulia = [9, 16, 6, 8, 3];
let dogsKate = [10, 5, 6, 1, 4];

function checkDogs(dogsJulia, dogsKate) {
  dogsJulia = dogsJulia.slice(1, -2);
  const allDogs = dogsJulia.concat(dogsKate);
  allDogs.forEach(function (dogAge, i) {
    const ageString =
      dogAge < 3 ? "still a puppy 🐶" : `an adult, and is ${dogAge} years old`;
    console.log(`Dog number ${i + 1} is ${ageString}`);
  });
}
checkDogs(dogsJulia, dogsKate);

console.log("--- MAP METHOD ---");

const movementsEUR = [200, 450, -400, 3000, -650, -130, 70, 1300];

const movementsUSD = movementsEUR.map((mov) => mov * 1.1);

console.log(movementsUSD);

const movementsDesc = movementsEUR.map((mov, i) => {
  return mov > 0
    ? `you deposited ${mov}, index: ${i}`
    : `you extracted ${mov}, index: ${i}`;
});
console.log(movementsDesc);

console.log("--- FILTER METHOD ---");

const deposits = movementsEUR.filter((x) => x > 0);
console.log(deposits);

console.log("--- REDUCE METHOD ---");
console.log(movementsEUR);
const balance = movementsEUR.reduce((acc, cur, i, arr) => {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
});
console.log(balance);

console.log("--- FIND METHOD ---");
console.log(movements.find((mov) => mov < 0)); // first withdrawal

const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);

console.log(`--- CHALLENGE 2 ---`);

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/

console.log(dogsKate);
// const movementsUSD = movementsEUR.map((mov) => mov * 1.1);
// console.log(calcAverageHumanAge(dogsJulia));
// function calcAverageHumanAge(ages) {
//   // use map to calculate human ages
//   const humanAges = ages.map((dogAge) =>
//     dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4
//   );
//   console.log(humanAges);
//   // filter ages less than 18
//   const adults = humanAges.filter((x) => x > 18);
//   console.log(adults);
//   // calculate avg.
//   const avgHumanAge =
//     adults.reduce((acc, cur, i, arr) => {
//       return acc + cur;
//     }) / adults.length;
//   return avgHumanAge;
// }

const calcAverageHumanAge = (ages) =>
  // use map to calculate human ages
  ages
    .map((dogAge) => (dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4))
    .filter((x) => x > 18)
    .reduce((acc, years, i, arr) => acc + years / arr.length, 0);

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

// // PIPELINE
// console.log(movements);
// console.log(
//   movements
//     .filter((mov) => mov > 0)
//     .map((mov) => mov * 1.1)
//     .reduce((acc, mov) => acc + mov)
// );
