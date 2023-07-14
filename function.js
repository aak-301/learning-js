"user strict";
// this is how to use strict mode

let age = 10;
if (age == "10") {
  console.log("10 age");
}

// functions

// how o write a function in js
function calling() {
  console.log("Calling function");
}

calling();

// passing parameter in function
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
processedJuice = fruitProcessor(1, 2);
console.log(processedJuice);

// different ways of writting function:

// 1st way
function calcAge(birthYEar) {
  return 2021 - birthYEar;
}

const res = calcAge(1991);
console.log(res);

// 2nd way
// anonymous function
const calcAge2 = function (birthYEar) {
  return 2021 - birthYEar;
};

const res2 = calcAge2(1991);
console.log(res2);

// 3rd wayof writting function
// arrow function
const calcAge5 = (birthYear) => 2037 - birthYear;
console.log(calcAge5(1991));

const yearsOfRetirement = (birthYEar) => {
  const age = 2023 - birthYEar;
  return 65 - age;
};

console.log(yearsOfRetirement(2001));

// one big issue

// const res3 = calcAge3(1991);
// // this is correct since we can call a function befor defining
// // here function is treated as a value

// function calcAge3(birthYEar) {
//     return 2021 - birthYEar;
//   }

//   console.log(res3);

//   const res4 = calcAge4(1991);
// // this is not correct since we cannot call a function befor defining
// // here function is treated as a expression (hoisting issue)

//   const calcAge4 = function (birthYEar) {
//     return 2021 - birthYEar;
//   };

//   console.log(res4);


