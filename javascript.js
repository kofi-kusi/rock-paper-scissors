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


