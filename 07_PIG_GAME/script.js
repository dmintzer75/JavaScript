"use strict";

// SELECTING ELEMENTS
const score0Element = document.getElementById("score--0");
const score1Element = document.getElementById("score--1");
const diceElement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const currentEl0 = document.getElementById("current--0");
const currentEl1 = document.getElementById("current--1");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

// STARTING CONDITIONS
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// ROLLING DICE FUNCTIONALITY
function rollDice() {
  // 1. Generate random dice roll
  const number = Math.floor(Math.random() * 6) + 1;

  // 2. Display dice
  diceElement.classList.remove("hidden");
  diceElement.src = `dice-${number}.png`;

  // 3. Check for rolled 1: if yes, switch player
  if (number !== 1) {
    currentScore += number;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`score--${activePlayer}`).textContent =
      currentScore;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
    // Switch Player
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;

    // scores[activePlayer] = currentScore;
  }
  return number;
}

btnRoll.addEventListener("click", rollDice);
