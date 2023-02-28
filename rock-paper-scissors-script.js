const getComputerChoice = function() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch(computerChoice) {
        case 0:
            return computerChoice = 'rock';
        case 1:
            return computerChoice = 'paper';
        case 2:
            return computerChoice = 'scissors';
        }
};

const playRound = function() {
    let playerChoice = prompt('Please choose rock, paper, or scissors: ');
    const computerChoice = getComputerChoice();
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === computerChoice) {
        console.log(`You both chose ${playerChoice}. The round is a draw!`);
    }
    else if ((playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'paper' && computerChoice === 'rock') || (playerChoice === 'scissors' && computerChoice === 'paper')) {
        console.log(`You chose ${playerChoice} while your opponent chose ${computerChoice}. You win the round!`);
        return true;
    }
    else {
        console.log(`You chose ${playerChoice} while your opponent chose ${computerChoice}. You lost the round...`);
        return false;
    }
};

const runGame = function() {
    let playerScore = 0;
    let computerScore = 0;
    let endMessage = "";
    for (let i = 0; i < 5; i++) {
        switch(playRound()) {
            case true:
                playerScore++;
                break;
            case false:
                computerScore++;
                break;
        }
    }
    switch (playerScore > computerScore) {
        case true:
            endMessage = 'You won! Congratulations!';
            break;
        case false:
            endMessage = 'You lost. Too bad!';
            break;
    }
    console.log(`You won ${playerScore} games while your oppnent won ${computerScore}. ${endMessage}`);
};