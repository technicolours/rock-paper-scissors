function getComputerChoice() {
  let random = Math.floor(Math.random() * 3 + 1);
  let computerChoice;

  if (random == 1) {
    computerChoice = "rock";
  } else if (random == 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  return computerChoice;
}

function userInput() {
  let userChoice = prompt("Rock, paper or scissors?");
  let lower = userChoice.toLowerCase;
  return userChoice.toLowerCase();
}

function rockPaperScissors(computer, user) {
//   console.log(computer);
//   console.log(user);

  while (user != "rock" && user != "scissors" && user != "paper") {
    console.log
    user = userInput();
  }

  if (user == computer) {
    return "tie";
  } else {

    switch (user) {
      case "rock":
        if ((computer == "scissors")) {
          return "User wins";
        } else {
          return "Computer wins";
        }
        break;
      case "paper":
        if ((computer == "rock")) {
          return "User wins";
        } else {
          return "Computer wins";
        }
        break;
      case "scissors":
        if ((computer == "paper")) {
          return "User wins";
        } else {
          return "Computer wins";
        }
    }
  }
}

function game() {
    let r = prompt("How many rounds would you like to play?");
    let userScore = 0;
    let computerScore = 0;

    for (i = 0; i < r; i++) {
        let result = rockPaperScissors(getComputerChoice(), userInput());
        console.log(result);

        switch(result){
            case "User wins":
                userScore++
                break;
            case "Computer wins":
                computerScore++
        }

    }

    if (userScore > computerScore) {
        return "User wins the game!";
    } else if (computerScore > userScore) {
        return "Computer wins the game!";
    } else {
        return "It's a tie!";
    }
}

console.log(game());