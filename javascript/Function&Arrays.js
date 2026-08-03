// Function
function addition(Num1, Num2) {
  console.log(Num1 + Num2);
}
addition(12, 12);

function subtrition(Num1, Num2) {
  console.log(Num2 - Num1);
}
subtrition(10, 12);

function Mult(Num1, Num2) {
  console.log(Num1, Num2);
}
Mult(2, 5);

function div(Num1, Num2) {
  console.log(Num1 / Num2);
}
div(10, 5);

function rem(Num1, Num2) {
  console.log(Num1 % Num2);
}
rem(15, 5);

// Arrays
let bio = [
  "chandrabose",
  "varisa",
  7893259524,
  "varisachandrabose20@gmail.com",
  "01/04/2003",
];
console.log(bio);

// update the value form specific indexing
bio[0] = "CHANDRABOSE";
console.log(bio);

// remove the value form the array using pop keyword
bio.pop();
console.log(bio);

// slice the element for specific indexing
console.log(bio.slice(1, 2));

// push Code

bio.push(22);
console.log(bio);
// shif method
bio.shift();
console.log(bio);

//  keep the particular element in the first
bio.unshift(7893259524);

console.log(bio);
