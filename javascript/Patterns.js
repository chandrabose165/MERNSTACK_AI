// task 1
// let Num = 5;

// for (let i = 1; i <= Num; i++) {
//   let x = "";
//   for (let j = 1; j < i + 1; j++) {
//     x += "* ";
//   }
//   console.log(x);
// }

// task 2

// let right = 5;
// for (let i = 1; i <= right; i++) {
//   let row = "";
//   for (let j = i; j < right; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row += "* ";
//   }
//   console.log(row);
// }

// task-3
// let box = 5;
// for (let i = 1; i <= box; i++) {
//   let row = "";
//   for (let j = 1; j <= box; j++) {
//     if (i === 1 || i === box || j === 1 || j === box) {
//       row += "* ";
//     } else {
//       row += "  ";
//     }
//   }
//   document.write(row + "<br>");
// }

// task -4

// let right = 5;
// for (let i = right; i >= 1; i--) {
//   let row = "";
//   for (let j = i; j < right; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row += "* ";
//   }
//   console.log(row);
// }
// task 5
let top1 = 5;
for (let i = 1; i < top1; i++) {
  let row = "";
  for (let j = i; j < top1; j++) {
    row += " ";
  }
  for (let k = 1; k <= i; k++) {
    row += "* ";
  }
  console.log(row);
}
// task 6
let bottom = 5;
for (let i = bottom; i >= 1; i--) {
  let row = "";
  for (let j = i; j < bottom; j++) {
    row += " ";
  }
  for (let k = 1; k <= i; k++) {
    row += "* ";
  }
  console.log(row);
}
let box = 5;
document.write("<pre>");
for (let i = 1; i <= box; i++) {
  let row = "";
  // LETTER B
  for (let j = 1; j <= box; j++) {
    if (i === 1 || i === box - 2 || j === 1 || j === box) {
      row += "*";
    } else if (i == box) {
      row += "*";
    } else {
      row += " ";
    }
  }
  row += "  ";
  // LETTER O
  for (let j = 1; j <= box; j++) {
    if (i == 1 || i === box || j == 1 || j == box) {
      row += "*";
    } else {
      row += " ";
    }
  }
  row += "  ";
  // LETTER S
  for (let j = 1; j <= box; j++) {
    if (
      i === 1 ||
      i === 3 ||
      i === box ||
      (j === 1 && i === 2) ||
      (j === box && i === box - 1)
    ) {
      row += "*";
    } else {
      row += " ";
    }
  }
  row += "  ";
  // LETTTER E
  for (let j = 1; j <= box; j++) {
    if (i === 1 || i === box - 2 || j === 1) {
      row += "*";
    } else if (i === box) {
      row += "*";
    } else {
      row += " ";
    }
  }
  document.write(row + "<br>");
}
// document.write("<pre>");
