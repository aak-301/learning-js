// 'use strict';

// // variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = "Aakash";
// let job = "Developer";
// const year = 2001;

// function

console.log(addDecl(2, 3));
console.log(adExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const adExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;
