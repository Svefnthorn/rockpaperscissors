let compchoice;

function getComputerChoice () {
    let x = Math.random();
    if (x > .67) {
        compchoice = "rock";
    } else if (x < .33) {
        compchoice = "paper";
    } else {
        compchoice = "scissors";
    } return compchoice;
}

let humanchoice;

function getHumanChoice() {
    let x = prompt("Enter Rock, Paper, or Scissors");
    if (x.toLowerCase() === "rock") {
        humanchoice = "rock";
    } else if (x.toLowerCase() === "paper") {
        humanchoice = "paper";
    } else if (x.toLowerCase() === "scissors") {
        humanchoice = "scissors";
    } else {
        humanchoice = null;
    } return humanchoice;
}
let humanScore = 0;
let compScore = 0;
const humanselection = getHumanChoice();
const compselection = getComputerChoice();

function playRound(humanselection,compchoice) {
    if (humanselection === "paper" && compchoice === "rock" ||
        humanselection === "rock" && compchoice === "scissors" ||
        humanselection === "scissors" && compchoice === "paper"
    ) {console.log('You Win!');
        ++humanScore;
        console.log('Your score is ', humanScore, 'Computer score is ', compScore);
    } else if (humanselection === "paper" && compchoice === "scissors" ||
               humanselection === "scissors" && compchoice === "rock" || 
               humanselection === "rock" && compchoice === "paper" ) {
                console.log("You lose")
                ++compScore;
                console.log('Your score is ',humanScore ,'Computer score is ', compScore);
               }
}