
let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

const playerDisplay = document.getElementById("playerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const computerDisplay = document.getElementById("computerDisplay");

const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerDisplay");

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let gameResult = "";

  if (playerChoice === computerChoice) {
    gameResult = "IT'S A DRAW";
  } else {
    switch (playerChoice) {
      case "rock":
        gameResult = (computerChoice === "scissors") ? "WINNER" : "LOOSER";
        break;
      case "paper":
        gameResult = (computerChoice === "rock") ? "WINNER" : "LOOSER";
        break;
      case "scissors":
        gameResult = (computerChoice === "paper") ? "WINNER" : "LOOSER";
        break;
    }
  }

  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = gameResult;

  resultDisplay.classList.remove("greenText", "redText");

  switch (gameResult) {
    case "WINNER":
      resultDisplay.classList.add("greenText");
      playerScore++;
      break;
    case "LOOSER":
      resultDisplay.classList.add("redText");
      computerScore++;
      break;
  }

  playerScoreDisplay.textContent = playerScore;
}