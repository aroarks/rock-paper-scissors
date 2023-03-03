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
    const computerChoice = getComputerChoice()
    if (playerChoice === computerChoice) {
        resultInfo.textContent = `You both chose ${playerChoice}. The round is a draw!`;
    }
    else if ((playerChoice === 'rock' && computerChoice === 'scissors') 
    || (playerChoice === 'paper' && computerChoice === 'rock') 
    || (playerChoice === 'scissors' && computerChoice === 'paper')) {
        resultInfo.textContent = `You chose ${playerChoice} while your opponent chose ${computerChoice}. You win the round!`;
        playerScore++;
    }
    else {
        resultInfo.textContent = `You chose ${playerChoice} while your opponent chose ${computerChoice}. You lose the round...`;
        computerScore++;
    }
};

const buttons = gameButtons.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
        scoreInfo.textContent = `Your Score: ${playerScore}   Opponent Score: ${computerScore}`;
    });
});

const scoreInfo = document.querySelector('#scoreInfo');
const resultInfo = document.querySelector('#resultInfo');
let playerScore = 0;
let computerScore = 0;