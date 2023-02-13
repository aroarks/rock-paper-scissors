function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        computerChoice = "rock";
        return computerChoice;
    } else if (computerChoice === 1) {
        computerChoice = "paper";
        return computerChoice;
    } else {
        computerChoice = "scissors";
        return computerChoice;
    }
}

function getPlayerChoice() {
    let playerChoice = prompt("Please choose rock, paper, or scissors: ");
    playerChoice = playerChoice.toLowerCase()
    if (playerChoice === ("rock") || ("paper") ||  ("scissors")) {
        return playerChoice;
    } else {
        return "Invalid entry.";
    }
}