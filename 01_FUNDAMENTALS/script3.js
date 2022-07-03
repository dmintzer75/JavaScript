"use strict";

// 1.
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// 2.
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins);
console.log(avgKoalas);
console.log(avgDolphins > 2 * avgKoalas);
// 3.

const checkWinner = function (avgDolphins, avgKoalas) {
  let winner;
  if (avgDolphins > 2 * avgKoalas) {
    winner = "Dolphins";
  } else if (avgKoalas > 2 * avgDolphins) {
    winner = "Koalas";
  } else {
    return "No team wins!";
  }
  return `${winner} win (${avgDolphins} vs ${avgKoalas})`;
};

console.log(checkWinner(avgDolphins, avgKoalas));
