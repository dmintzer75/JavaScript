"use strict";

const bookings = [];

function createBooking(
  flightNum,
  numPassangers = 1,
  price = 199 * numPassangers
) {
  // sets defaults values
  const booking = {
    flightNum,
    numPassangers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
}
createBooking("12", 2);

const flight = "LJ123";
const jonas = {
  name: "Jonas Schmidt",
  passport: 12345,
};
function checkIn(flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 12345) {
    // alert("Check In");
  } else {
    alert("Wrong Passport");
  }
}

checkIn(flight, jonas);

console.log("--- Higher Order Functions ---");

function oneWord(str) {
  return str.replace(/ /g, "").toLowerCase();
}

function upperFirstWord(str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
}

// This is the Higher order function
function transformer(str, fn) {
  console.log(str);
  console.log(fn(str));
  console.log(`Transformed by: ${fn.name}`);
}

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

console.log("--- Functions Returning Functions ---");

function greet(greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
}

const greeterHey = greet("Hey!");

greeterHey("Dario");
greeterHey("Ari");
greet("Hey!")("dario");

//the same but with arror functions
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArr("Hi")("daro");

console.log("--- This Keyword ---");

const lufthansa = {
  airline: "Luft",
  iatacode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iatacode}${flightNum}, ${name}` });
  },
};
const book = lufthansa.book;

lufthansa.book(129, "Dario");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iatacode: "EW",
  bookings: [],
};

// THIS KEYWORD MANUALLY
book.call(lufthansa, 23, "Dario");
book.call(eurowings, 23, "Dario");

// APPLY METHOD
const flightData = [543, "Ariel"];
book.apply(eurowings, flightData); // NOT USED ANYMORE
book.call(eurowings, ...flightData); // BETTER

// BIND METHOD
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
bookEW(23, "Daruuuuuu");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("GARO");

// WITH EVENT LISTENER
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this);
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial Application

const addTax = (rate, value) => value + value * rate;

console.log(addTax(10, 200));

const addArg = addTax.bind(null, 0.23);

console.log(addArg(200));

function addTaxRate(rate) {
  return function (value) {
    return value + value * rate;
  };
}

const addArg2 = addTaxRate(0.23);
console.log(addArg2(200));
console.log(addTaxRate(0.23)(200));

console.log(`--- Challenge 1 ---`);
// CHALLENGE 1

// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
//         What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)

//   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
// HINT: Use many of the tools you learned about in this and the last section 😉

const poll = {
  question: "What is your favorite programming language?",
  options: ["0: JS", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answerNumber = Number(
      prompt(`What is your favourite programming language?
              0: JavaScript
              1: Python
              2: Rust
              3: C++
              (Write option number)`)
    );

    typeof answerNumber === "number" &&
      answerNumber < this.answers.length &&
      this.answers[answerNumber]++;

    // if ([0, 1, 2, 3].includes(Number(answerNumber))) {
    //   console.log(answerNumber);
    //   this.answers[answerNumber] += 1;
    // } else {
    //   console.log("Wrong input!");
    // }
    this.displayResults("string");
  },

  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(
        `Poll results are ${this.answers[0]}, ${this.answers[1]}, ${this.answers[2]}, ${this.answers[3]}.`
      );
    } else {
      console.log("wrong input!");
    }
  },
};

document
  .querySelector(`.poll`)
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

console.log(`--- Closures ---`);

let f;

const g = function () {
  const a = 21;
  f = function () {
    console.log(a * 2);
  };
};

g();
f();
