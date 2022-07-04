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

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// SWITCH PLAYER
function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
  currentScore = 0;
}

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
    switchPlayer();
  }
}

function hold() {
  // 1. Add current score to active player's score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  // 2. check if player's score >= 100
  if (scores[activePlayer] >= 100) {
    //finish game
  } else {
    switchPlayer();
  }
}

function newGame() {
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  diceElement.classList.add("hidden");

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
}

btnRoll.addEventListener("click", rollDice);
btnHold.addEventListener("click", hold);
btnNew.addEventListener("click", newGame);
// scores[activePlayer] += currentScore;
//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];
