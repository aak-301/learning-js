"use strict";

// document.querySelector(".message");
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 30;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
console.log(secretNumber);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No Number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector("body").style.backgroundColor = '#60b437';
  } else if (secretNumber < guess) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost the Game";
      document.querySelector(".score").textContent = 0;
    }
  } else {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost the Game";
      document.querySelector(".score").textContent = 0;
    }
  }
});
