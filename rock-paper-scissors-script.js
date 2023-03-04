const getComputerChoice = function() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

const playRound = function(playerChoice) {
    const computerChoice = getComputerChoice();
    if (playerChoice === computerChoice) {
        resultInfoDisplay.textContent = `You both chose ${playerChoice}. The round is a draw!`;
    }
    else if ((playerChoice === 'rock' && computerChoice === 'scissors') 
    || (playerChoice === 'paper' && computerChoice === 'rock') 
    || (playerChoice === 'scissors' && computerChoice === 'paper')) {
        resultInfoDisplay.textContent = `You chose ${playerChoice} while your opponent chose ${computerChoice}. You win the round!`;
        playerScore++;
    }
    else {
        resultInfoDisplay.textContent = `You chose ${playerChoice} while your opponent chose ${computerChoice}. You lose the round.`
        computerScore++;
    }
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
};

let playerScore = 0;
let computerScore = 0;
const playerScoreDisplay = document.querySelector('#playerScore');
const computerScoreDisplay = document.querySelector('#computerScore');
const resultInfoDisplay = document.querySelector('.roundReadout');
const gameButtons = document.querySelectorAll('button.gameButton');
gameButtons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});
