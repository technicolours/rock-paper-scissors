function getComputerChoice() {
    let random = Math.floor(Math.random()*3 + 1);
    let computerChoice = "Nothing";

    if (random == 1) {
        computerChoice = "Rock"
    } else if (random == 2) {
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissors"
    };

    return computerChoice;
}

function rockPaperScissors(getComputerChoice) {
    let user = "Rock";
    let computer = getComputerChoice;

    if 
}

console.log(getComputerChoice());