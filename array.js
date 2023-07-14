"use strict";

const friend = ["Aakash", "Aman", "Nandan"];
console.log(friend);

const year = new Array(1991, 1992, 2001, 2002);
console.log(year);

console.log(year[0]);

// const keyword only works with the primitive value and we cannot mutate those values.
// but arrays is not a primitive so its element can be changed
year[0] = 2019;
console.log(year);

// this cannot be done:
// year=[2020,2021]
// console.log(year);

const list = ["data", "pc", 2019, "apple"];
// a list can have any tpe of data in it
console.log(list);

const arra = [10, 20, 30];
console.log(10 + arra);
// adding a variable in array changes the array elemnet to string and the value is appneded depending on which side the '+' operation is taking place

// add elements at last
arra.push(300);
console.log(arra);

// add element in begining
arra.unshift(200);
console.log(arra);

// removing last element
arra.pop(); // returns removed element
console.log(arra);

// removing first element
arra.shift(); // returns removed element
console.log(arra);

//get the index of element in array
console.log(arra.indexOf(20));

// to check whether the element is there or not in array
console.log(arra.includes(30));
