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
let isPlaying, scores, currentScore, activePlayer;
function init() {
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  currentEl0.textContent = 0;
  currentEl1.textContent = 0;
  diceElement.classList.add("hidden");
  isPlaying = true;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;

  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");

  player0.classList.add("player--active");
  player1.classList.remove("player--active");
}

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
  if (isPlaying) {
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
}

function hold() {
  if (isPlaying) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. check if player's score >= 100
    if (scores[activePlayer] >= 10) {
      //finish game
      isPlaying = false;
      diceElement.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");

      document.getElementById(`current--${activePlayer}`).textContent = 0;
    } else {
      switchPlayer();
    }
  }
}

function newGame() {
  init();
}
init();
btnRoll.addEventListener("click", rollDice);
btnHold.addEventListener("click", hold);
btnNew.addEventListener("click", newGame);
// scores[activePlayer] += currentScore;
//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];
