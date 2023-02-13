function getComputerChoice() {
    let a = Math.floor(Math.random() * 3);
    if (a === 0) {
        a = "rock";
        return a;
    } else if (a === 1) {
        a = "paper";
        return a;
    } else {
        a = "scissors";
        return a;
    }
}