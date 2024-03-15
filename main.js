const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();

  playerChoiceDisplay.textContent = `You chose: ${playerChoice}`;
  computerChoiceDisplay.textContent = `Computer chose: ${computerChoice}`;

  let winner;
  if (playerChoice === computerChoice) {
    winner = 'Tie';
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    winner = 'You Win!';
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    winner = 'You Win!';
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    winner = 'You Win!';
  } else {
    winner = 'You Lose!';
  }

  resultDisplay.textContent = winner;
}

rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));
