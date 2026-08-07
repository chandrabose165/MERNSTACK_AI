// const student = {
//   Fname: "chandrabose",
//   LName: "varisa",
//   age: 23,
//   emailId: "varisachandrabose20@gmail.com",
//   phone: 7893259524,
// };
// // Access the propertie in the object
// console.log("Name: " + student.Fname);
// console.log("age: " + student["age"]);

// // Adding the data in the Object
// student.color = "red";
// console.log(student);

// // using loop to print the element in separate line
// for (let i in student) {
//   console.log(i + ":" + student[i] + " -> " + typeof student[i]);
// }

// // changing the values in data
// student.age = 25;
// console.log(student);

// // delete the specific properties in object using delete method it was
// {
//   const student = {
//     Fname: "chandrabose",
//     LName: "varisa",
//     age: 23,
//     emailId: "varisachandrabose20@gmail.com",
//     phone: 7893259524,
//   };
//   delete student.color;
//   console.log(student);
// }
// this Keywords
let studentinfo = {
  fname: "bose",
  lname: "chandra",
  fullname: function () {
    return `${this.lname}${this.fname}`;
  },
};
console.log(studentinfo.fullname());
// // function calling
// function greet(greeting) {
//   console.log(greeting + " welcome " + this.name);
// }
// let profile = {
//   name: "bose",
// };
// greet.call(profile, "hello");
