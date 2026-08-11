// function add(Num1, Num2) {
//   console.log(Num1 + Num2);
// }
// function sub(Num1, Num2) {
//   console.log(Num1 - Num2);
// }
// function Mult(Num1, Num2) {
//   console.log(Num1 * Num2);
// }
// function div(Num1, Num2) {
//   console.log(Num1 / Num2);
// }
// function square(Num1, Num2) {
//   console.log(Num1 ** Num2);
// }
// function MOD(Num1, Num2) {
//   console.log(Num1 % Num2);
// }

let buttons = document.querySelectorAll(".btn");
let input = document.querySelector("#display");
let output = document.querySelector("#history");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "C") {
      input.textContent = "";
      output.textContent = "";
    } else if (button.textContent === "=") {
      try {
        let res = eval(input.textContent);
        output.textContent += res;
      } catch {
        input.textContent = "error";
      }
    } else {
      input.textContent += button.textContent;
    }
  });
});
