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
    return humanChoice.toLowerCase;
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice){
        if (computerChoice == humanChoice){
            console.log("Draw");
        }else if (computerChoice == "paper" && humanChoice == "scissors"){
            console.log("You Won! Scissors beats paper");
            humanScore++;
        }else if (computerChoice == "scissors" && humanChoice == "paper"){
            console.log("You lost! Scissors beats paper.");
            computerScore++;
        }else if (computerChoice == "paper" && humanChoice == "rock"){
            console.log("You Won! rock beats paper");
            humanScore++;
        }else if (computerChoice == "rock" && humanChoice == "paper"){
            console.log("You lost! rock beats paper.");
            computerScore++;
        }else if (computerChoice == "scissors" && humanChoice == "rock"){
            console.log("You Won! rock beats scissors");
            humanScore++;
        }else{
            console.log("You lost! rock beats scissors.");
            computerScore++;
        }
    }

    for( let round=0; round < 5; round++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        }
        console.log(`Game scores\nYou -> ${humanScore}: Computer -> ${computerScore}`);
    if (computerScore == humanScore){
        console.log("TIE!")
    }else if (computerScore>humanScore){
        console.log("YOU LOST!");
    }else {
        console.log("YOU WON!");
    }
}

playGame();


