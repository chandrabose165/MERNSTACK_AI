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
        input.textContent = "Error";
      }
    } else {
      input.textContent += button.textContent;
    }
  });
});
