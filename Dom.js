"USE STRICT";
// console.log(document.querySelector(".message").textContent);
//document.querySelector(".message").textContent = "correct number!";
// document.querySelector(".counting").textContent = 13;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// const secretNumber = 15;
let highscore = 0;
let score = 20;

// document.querySelector(".counting").textContent = number;
document.querySelector(".check").addEventListener("click", function (reset) {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
    document.querySelector(".counting").textContent = guess;
  } else if (guess === secretNumber) {
    document.querySelector(".counting").textContent = guess;
    document.querySelector(".message").textContent = "congratzzz! you won";
    document.querySelector(".highscore").textContent = score;
    document.querySelector(".counting").textContent = guess;
    document.querySelector("body").style.backgroundImage =
      "url('https://media1.giphy.com/media/5nmNO4kFHvgqF1wnPg/source.gif')";
    document.querySelector("body").style.backgroundSize = "contain";
    document.querySelector(".counting").style.width = "230px";
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Too high";
      document.querySelector(".counting").textContent = guess;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Game Over...";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Too low";
      document.querySelector(".counting").textContent = guess;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Game Over...";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "start guessing.....";
  document.querySelector(".counting").textContent = "?";
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").textContent = "";
  document.querySelector("body").style.backgroundImage =
    "url('https://wallpaperaccess.com/full/9187.jpg')";
  document.querySelector(".counting").style.width = "200px";
});
