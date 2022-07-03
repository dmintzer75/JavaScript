"use strict";

// SELECTING ELEMENTS
// document.querySelector(".message");

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct NUMBER!🪢";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 90;
// document.querySelector(".guess").value = 12;

// SETTING UP EVENTS

function generateSecretNumber() {
  return Math.floor(Math.random() * 20 + 1);
}

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

let secretNumber = generateSecretNumber();
let score = 20;
let highscore = 0;

function giveValue() {
  const guess = Number(document.querySelector(".guess").value);

  // WHEN THER IS NOT INPUT
  if (!guess) {
    document.querySelector(".message").textContent =
      "⛔️ Please select a number!";

    // WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    displayMessage("Correct!");
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#76BA99";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }

    // GUESS IS WRONG
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? "Too High!" : "Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("Game Over...");
    }
  }
}

function againPressed() {
  score = 20;
  displayMessage("Start guessing!");
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#A5BECC";
  secretNumber = generateSecretNumber();
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
}

document.querySelector(".check").addEventListener("click", giveValue);

document.querySelector(".again").addEventListener("click", againPressed);
