let selected;
const allButtons = document.querySelectorAll('#choice button');


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

function userInput(e) {
  allButtons.forEach(button => button.classList.remove('selected'));
  console.log(e.target.classList.toggle('selected'));
  selected = e.target.id;
}

function rockPaperScissors(computer, user) {

  console.log('playing');

  console.log('user selected ' + user);

  if (user != "rock" && user != "scissors" && user != "paper") {
    console.log('Select your sign');
    return;
  }

 // console.log('function continued')

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

  allButtons.forEach(button => button.classList.remove('selected'));
}

/*
function game() {
    let r = prompt("How many rounds would you like to play?");
    let userScore = 0;
    let computerScore = 0;

    for (i = 0; i < r; i++) {
        let result = rockPaperScissors(getComputerChoice(), selected);
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

*/



document.querySelectorAll('#choice button').forEach(button => button.addEventListener('click', button => userInput(button)));
playButton = document.getElementById('play');
playButton.addEventListener('click', () => rockPaperScissors(getComputerChoice(), selected));