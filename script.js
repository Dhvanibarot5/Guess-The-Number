let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector(".guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    guess = parseInt(userInput.value);
    validGuess(guess);
  });
}

function validGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter valid Number..");
  } else if (guess < 1) {
    alert("Please enter number more than 1");
  } else if (guess > 100) {
    alert("Please enter number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMsg(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMsg(`You guessed it correct..`);
    endGame();
  } else if (guess < randomNumber) {
    displayMsg(`Number is Too low`);
  } else if (guess > randomNumber) {
    displayMsg(`Number id Too high`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess},   `;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess}`;
}

function displayMsg(msg) {
  lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disable", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector("#newGame").addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disable");
    startOver.removeChild(p);
    playGame = true;
  });
}
