let roundNumber = 0;
let playerPoints = 0;
let computerPoints = 0;
let roundResult;
let resultShown = 0;
let totalWinsPlayer = 0;
let totalWinsComputer = 0;


document.getElementById("rock").addEventListener("click", rock);
document.getElementById("paper").addEventListener("click", paper);
document.getElementById("scissors").addEventListener("click", scissors);
document.getElementById("resetButton").addEventListener("click", resetGame);

function rock() {
  playRound("rock");
}

function paper() {
  playRound("paper");
}

function scissors() {
  playRound("scissors");
}

function playRound(input) {
  let playerInput = input;
  let computerInput = computerPlay();
  console.log(playerInput);
  console.log(computerInput);

  if ((playerInput === "rock" && computerInput === "paper") || (playerInput === "paper" && computerInput === "scissors") || (playerInput === "scissors" && computerInput === "rock")) {
    computerPoints++
    console.log("computer wins this round");
    console.log("computerPoints", computerPoints);
    console.log("playerPoints", playerPoints);
    roundResult = `Computer's ${computerInput} beats player's ${playerInput}`
    console.log(roundResult);

  } else if ((computerInput === "rock" && playerInput === "paper") || (computerInput === "paper" && playerInput === "scissors") || (computerInput === "scissors" && playerInput === "rock")) {
    playerPoints++;
    console.log("player wins this round");
    console.log("computerPoints", computerPoints);
    console.log("playerPoints", playerPoints);
    roundResult = `Player's ${playerInput} beats computer's ${computerInput}`
    console.log(roundResult);

  } else {
    console.log("Its a tie!");
    console.log("computerPoints", computerPoints);
    console.log("playerPoints", playerPoints);
    roundResult = `Player's ${playerInput} ties computer's ${computerInput}`
    console.log(roundResult);

  }
  roundNumber++;
  console.log("Round number is:", roundNumber);

  showResult(playerInput, computerInput, roundResult)
}


function showResult(playerInput, computerInput, roundResult) {

  if (resultShown === 1) {
    clear();
  }

  const resultDiv = document.getElementById("resultDiv");
  const result = document.createElement("div");
  result.id = "result"
  let resultOut;


  if (computerPoints !== 5 && playerPoints !== 5) {
    resultOut = `Round number: ${roundNumber} <br> Computer choice is: ${computerInput} <br><br> ${roundResult} <br><br>Scores<br>Computer: ${computerPoints}<br>Player: ${playerPoints}`;
  } else if (computerPoints === 5 || playerPoints === 5) {
      if (computerPoints === 5) {
        totalWinsComputer++;
        resultOut = `Total wins for player: ${totalWinsPlayer}<br>Total wins for computer: ${totalWinsComputer}<br><br>Computer beat you! ${computerPoints} to ${playerPoints}<br>Computer's ${computerInput} won player's ${playerInput} last game`
        resetGame();
    } else if (playerPoints === 5) {
        totalWinsPlayer++;
        resultOut = `Total wins for player: ${totalWinsPlayer}<br>Total wins for computer: ${totalWinsComputer}<br><br>You beat the computer ${playerPoints} to ${computerPoints}<br>Player's ${playerInput} won computer's ${computerInput} last game`
      resetGame();
    }
    playerPoints = 0;
    computerPoints = 0;
  }
  result.innerHTML = resultOut;
  resultDiv.appendChild(result);
  resultShown = 1;
}

function computerPlay() {
  const getCompChoiceValue = Math.floor(Math.random() * Math.floor(max = 3));

  if (getCompChoiceValue === 0) {
    return "rock";
  
  } else if (getCompChoiceValue === 1) {
    return "paper";
  }
    return "scissors";
}

function clear() {
  let removeResultDiv = document.getElementById("resultDiv");
  let removeGeneratedDiv = document.getElementById("result");
  if (removeGeneratedDiv !== null) {
    removeResultDiv.removeChild(removeGeneratedDiv);
  }
}

function resetGame() {
  if (resultShown === 1) {
    clear();
  }
  roundNumber = 0;
  playerPoints = 0;
  computerPoints = 0;
  resultShown = 0;
}