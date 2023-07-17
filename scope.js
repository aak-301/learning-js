"use strict";

function calcAge(birtYear) {
  const age = 2037 - birtYear;
  function printAge() {
    let output = `${firstName},you are ${age}, born in ${birtYear}`;
    console.log(output);

    if (birtYear >= 1991 && birtYear <= 1996) {
      var millenia = true;
      const str = `Oh, and you're a millenia, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      // two case when we have let varible in parent andwe have the acces in child:
      // 1. output = "NEW String"; // this will overwrite the output variable data of parent
      // 2. let output = "New Output"; // this will create a new variable in if block scope and not overwrite the parent
    }
    console.log(output);
    // console.log(str); // no access
    // console.log(add(2, 3)); // no access in strict mode, but run when there is no strict mode
    console.log(millenia); // scope of millenia is whole function as it is var declared
  }
  printAge();
  return age;
}

const firstName = "Aakash";
calcAge(1995);

// console.log(age); // no access
// printAge() // no access
