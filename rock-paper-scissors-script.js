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
        console.log(`you both chose ${playerChoice}. The round is a draw!`);
    }
    else if ((playerChoice === 'rock' && computerChoice === 'scissors') 
    || (playerChoice === 'paper' && computerChoice === 'rock') 
    || (playerChoice === 'scissors' && computerChoice === 'paper')) {
        console.log(`you chose ${playerChoice} while your opponent chose ${computerChoice}. You win the round!`);
    }
    else {
        console.log(`you chose ${playerChoice} while your opponent chose ${computerChoice}. You lose the round...`);
    }
};

const buttons = gameButtons.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});