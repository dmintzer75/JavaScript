let js = "amazing";
console.log(typeof js);

let year = 1002;
const year2 = 1000;

let dario = `dario`;
let julian = `julian` + `sddasd`;

let age = 2001;

let century; //para usar la variable dentro de una funcion y luego poder llamarla

if (age >= 2000) {
  century = 21;
} else {
  century = 20;
}

const inputYear = "1991";
console.log(inputYear + 19);
console.log(Number(inputYear) + 10);
console.log(typeof NaN);

const edad = Number(prompt("input a number"));
if (edad === 12) {
  console.log("tengo 12");
} else if (edad > 13) {
  console.log("tengo mas de 12");
} else {
  console.log("menos de 12");
}

// && AND
// || OR

const day = "monday";

switch (day) {
  case "monday":
    console.log(`plan course`);
    break;
  case "tuesday":
    console.log(`prepare gym`);
    break;
}
