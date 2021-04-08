let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
  }
  
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDifference = Math.abs(targetGuess - humanGuess)
    const computerDifference = Math.abs(targetGuess - computerGuess)
    return humanDifference <= computerDifference;
  }
  
const updateScore = winner => {
    switch(winner) {
    case 'human':
      humanScore += 1;
      break;
    case 'computer': 
      computerScore += 1;
      break;
  }
  }
  
const advanceRound = () => currentRoundNumber++;