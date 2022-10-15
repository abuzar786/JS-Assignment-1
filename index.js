/* 
Main JS Assignment
*/

/* Initialize the Computer and Player Score and Message */
const computerSelectionArray = ["Rock", "Paper", "Scissors"];
totalRounds = 5;
let playerSore = 0;
let computerScore = 0;
let result = "";

/*
 Computer function where computer choosing a random option from array.
 */
function computerPlay() {
  let randomComputerChoice = Math.floor(
    Math.random() * computerSelectionArray.length
  );
  return computerSelectionArray[randomComputerChoice];
}

/*
 
 */
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return (result = "Draw");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return (result = `Player Won! ${playerSelection} beats ${computerSelection}`);
  } else if (playerSelection === "paper" && computerSelection === "rock")
    return (result = `Player Won! ${playerSelection} beats ${computerSelection}`);
  else if (playerSelection === "scissors" && computerSelection === "paper")
    return (result = `Player Won! ${playerSelection} beats ${computerSelection}`);
  else
    return (result = `Computer Won! ${computerSelection} beats ${playerSelection}`);
}

/*
game function is a loop function and it runs 5 times
  */
function game() {
  for (let i = 0; i < totalRounds; i++) {
    let playerSelection = prompt(
      "Pleae select ande write your input: Rock, Paper, or Scissors."
    );
    if (computerSelectionArray.includes(playerSelection)) {
      console.log(`Player Selected ${playerSelection}`);
    } else {
      i--;
      console.log(`Invalid input`);
      continue;
    }
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.includes("Player Won")) {
      playerSore++;
      console.log(
        `Player score: ${playerSore} Computer score: ${computerScore}`
      );
    } else if (result.includes("Computer Won")) {
      computerScore++;
      console.log(
        `Player score: ${playerSore} Computer score: ${computerScore}`
      );
    } else {
      console.log(
        `Player score: ${playerSore} Computer score: ${computerScore}`
      );
    }
  }
  /*
   */

  playerSore > computerScore
    ? console.log(
        `Player win the game! Player score: ${playerSore} Computer score: ${computerScore}`
      )
    : console.log(
        `Computer win the game! Player score: ${playerSore} Computer score: ${computerScore}`
      );
  return result;
}
game();
