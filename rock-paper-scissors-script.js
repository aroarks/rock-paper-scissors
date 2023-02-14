function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        computerChoice = "rock";
        return computerChoice;
    } 
    else if (computerChoice === 1) {
        computerChoice = "paper";
        return computerChoice;
    } 
    else {
        computerChoice = "scissors";
        return computerChoice;
    }
}

function playRound() {
    let playerChoice = prompt("Please choose rock, paper, or scissors: ");
    const computerChoice = getComputerChoice();
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === computerChoice) {
        console.log(`You both chose ${playerChoice}. The round is a draw!`);
    }
    else if (((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper"))) {
        console.log(`You chose ${playerChoice} while your opponent chose ${computerChoice}. You win the round!`);
        return true;
    }
    else {
        console.log(`You chose ${playerChoice} while your opponent chose ${computerChoice}. You lost the round...`);
        return false;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let victMessage;
    for (let i = 0; i < 5; i++) {
        let roundResult = playRound();
        if (roundResult === true) {
        playerScore = playerScore + 1;
        }
        else if (roundResult === false) {
        computerScore = computerScore + 1;
        }
    }
    if (playerScore > computerScore) {
        victMessage = "You won. Congratulations!";
    }
    else {
        victMessage = "You lost. Too bad!";
    }
    console.log(`You won ${playerScore} rounds while your opponent won ${computerScore} rounds. ${victMessage}`);
}
