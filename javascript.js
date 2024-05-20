let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*(3-1+1)) + 1;
    if (computerChoice === 1){
        return "rock";
    }else if (computerChoice === 2){
        return "paper";
    }else{
        return "scissors";
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Enter you choice: \nrock or paper or scissors ");
    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    if (computerChoice == humanChoice){
        console.log("Draw");
    }else if (computerChoice == "paper" && humanChoice == "scissors"){
        console.log("You Won! Scissors beats paper");
        humanScore++;
        console.log(humanScore)
    
    }else if (computerChoice == "scissors" && humanChoice == "paper"){
        console.log("You lost! Scissors beats paper.");
        computerScore++;
    }else if (computerChoice == "paper" && humanChoice == "rock"){
        console.log("You Won! rock beats paper");
        humanScore++;
        console.log(humanScore)
    
    }else if (computerChoice == "rock" && humanChoice == "paper"){
        console.log("You lost! rock beats paper.");
        computerScore++;
    }else if (computerChoice == "scissors" && humanChoice == "rock"){
        console.log("You Won! rock beats scissors");
        humanScore++;
        console.log(humanScore)
    
    }else{
        console.log("You lost! rock beats scissors.");
        computerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


