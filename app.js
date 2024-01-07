let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreParagraph = document.querySelector("#user-score");
const computerScoreParagraph = document.querySelector("#comp-score");

const genrateComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

const playGame = (userChoice) => {
  const computerChoise = genrateComputerChoice();

  if (userChoice === computerChoise) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice == "rock") {
      userWin = computerChoise === "paper" ? false : true;
    } else if (userChoice == "paper") {
      userWin = computerChoise === "scissors" ? false : true;
    } else {
      userWin = computerChoise === "rock" ? false : true;
    }
    showWiner(userWin, userChoice, computerChoise);
  }
};

const showWiner = (userWin, userChoice, computerChoise) => {
  if (userWin) {
    msg.innerText = `You Win! Your ${userChoice} beats ${computerChoise}`;
    msg.style.backgroundColor = "green";
    userScore++;
    userScoreParagraph.innerText = userScore;
  } else {
    msg.innerText = `You Lost. Computer ${computerChoise} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
    compScore++;
    computerScoreParagraph.innerText = compScore;
  }
};
const drawGame = () => {
  msg.innerText = "Draw Game";
  msg.style.backgroundColor = "#081b31";
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
