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

function getPlayerChoice() {
    let playerChoice = prompt("Please choose rock, paper, or scissors: ");
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === ("rock") || ("paper") ||  ("scissors")) {
        return playerChoice;
    } 
    else {
        return "Invalid entry.";
    }
}

function playRound () {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    if (playerChoice === computerChoice) {
        return `You both chose ${playerChoice}. It's a draw!`;
    } 
    else if ((playerChoice === "rock" && computerChoice === "scissors") 
    || (playerChoice === "paper" && computerChoice === "rock") 
    || (playerChoice === "scissors" && computerChoice === "paper")) {
        return `You chose ${playerChoice}, while your opponent chose ${computerChoice}. You win!`;
    } 
    else {
        return `You chose ${playerChoice}, while your opponent chose ${computerChoice}. You lose...`;
    }
}