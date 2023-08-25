let selected;
const allButtons = document.querySelectorAll('#choice button');
userDisplay = document.getElementById('user-score');
compDisplay = document.getElementById('comp-score');
infoDisplay = document.getElementById('info')
newGame = document.getElementById('new');
let userScore = 0;
let compScore = 0;
let won = false;

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

function userWin(computer) {
  userScore ++;
  console.log(userScore);
  userDisplay.innerHTML = userScore;
  infoDisplay.innerHTML = `Computer chose ${computer}. You won!`;
}

function computerWin(computer) {
  compScore ++;
  console.log(compScore);
  compDisplay.innerHTML = compScore;
  infoDisplay.innerHTML = `Compuer chose ${computer}. Computer won :(`
}

function tie(computer) {
  infoDisplay.innerHTML = `Computer also chose ${computer}. It's a tie!`
}

function startNewGame() {
  infoDisplay.innerHTML = `You started a new game. Make your choice!`
  compScore = 0;
  userScore = 0;
  compDisplay.innerHTML = compScore;
  userDisplay.innerHTML = userScore;
};

function rockPaperScissors(computer, user) {

  console.log('playing');

  console.log('user selected ' + user);

  if (user != "rock" && user != "scissors" && user != "paper") {
    console.log('Select your sign');
    return;
  }

 // console.log('function continued')
  if (user == computer) {
    tie(computer);
  } else {

    switch (user) {
      case "rock":
        if ((computer == "scissors")) {
          userWin(computer);
        } else {
          computerWin(computer);
        }
        break;
      case "paper":
        if ((computer == "rock")) {
          userWin(computer);
        } else {
          computerWin(computer);
        }
        break;
      case "scissors":
        if ((computer == "paper")) {
          userWin(computer);
        } else {
          computerWin(computer);
        }
    }
  }

  allButtons.forEach(button => button.classList.remove('selected'));

  while (!won) {
    if (compScore == 5) {
      infoDisplay.innerHTML = 'Computer won the game. Continue or start a new game.'
      won = true;
    } else if (userScore == 5) {
      infoDisplay.innerHTML = 'You won the game! Continue or start a new game.'
      won = true;
    }
    break;
  }

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
newGame.addEventListener('click', () => startNewGame());