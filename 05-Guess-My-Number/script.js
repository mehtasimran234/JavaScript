"use strict";

let secretNumber = Math.ceil(Math.random() * 20);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.ceil(Math.random() * 20);

  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
});

document.querySelector(".check").addEventListener("click", () => {
  const guessNumber = Number(document.querySelector(".guess").value);

  if (!guessNumber) {
    // When there is no input
    displayMessage("⛔ No number!");
  } else if (guessNumber === secretNumber) {
    // When player wins the game
    displayMessage("🎉 Correct number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (highScore < score) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else {
    // When the guess is too high
    if (score > 1) {
      displayMessage(
        guessNumber < secretNumber ? "👇 Too low!" : "👆 Too high!"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😔 You lost the game.");
      document.querySelector(".score").textContent = 0;
    }
  }
});
