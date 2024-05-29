function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*(3)) + 1;
    if (computerChoice === 1){
        return "rock";
    }else if (computerChoice === 2){
        return "paper";
    }else{
        return "scissors";
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice){
        const selected = document.querySelector(".selection");
        selected.textContent = `Player selected: ${humanChoice} || Computer selected: ${computerChoice}`;

        const display = document.querySelector("div");
        const hscore = document.querySelector(".hscore");
        const csore = document.querySelector(".cscore");

        if (computerChoice == humanChoice){
            display.textContent= "Draw";
        }else if (computerChoice == "paper" && humanChoice == "scissors"){
            display.textContent = "You Won! Scissors beats paper";
            humanScore++;
            hscore.textContent = `Your Score: ${humanScore}`;
        }else if (computerChoice == "scissors" && humanChoice == "paper"){
            display.textContent = "You lost! Scissors beats paper.";
            computerScore++;
            csore.textContent = `Computer Score: ${computerScore}`;
        }else if (computerChoice == "paper" && humanChoice == "rock"){
            display.textContent = "You Won! rock beats paper";
            humanScore++;
            hscore.textContent = `Your Score: ${humanScore}`;
        }else if (computerChoice == "rock" && humanChoice == "paper"){
            display.textContent = "You lost! rock beats paper.";
            computerScore++;
            csore.textContent = `Computer Score: ${computerScore}`;
        }else if (computerChoice == "scissors" && humanChoice == "rock"){
            display.textContent = "You Won! rock beats scissors";
            humanScore++;
            hscore.textContent = `Your Score: ${humanScore}`;
        }else{
            display.textContent = "You lost! rock beats scissors.";
            computerScore++;
            csore.textContent = `Computer Score: ${computerScore}`;
        }
        if (humanScore == 5 && computerScore < 5){
            const results = document.querySelector("#results");
            const hscore = document.querySelector(".hscore");
            const csore = document.querySelector(".cscore");
            const display = document.querySelector("div");

            display.textContent = "";

            results.textContent = "You Won!";

            humanScore = 0;
            computerScore = 0;
            hscore.textContent = "Your Score: ";
            csore.textContent = "Computer Score: ";
        }
        if(humanScore < 5 && computerScore == 5){
            const results = document.querySelector("#results");
            const hscore = document.querySelector(".hscore");
            const csore = document.querySelector(".cscore");

            display.textContent = "";

            results.textContent = "You Lost!";

            humanScore = 0;
            computerScore = 0;
            hscore.textContent = "Your Score: ";
            csore.textContent = "Computer Score: ";
        }
    }


    document.addEventListener('DOMContentLoaded', (event) => {
        const rockbtn = document.querySelector("#rock");
        const paperbtn = document.querySelector("#paper");
        const scissorsbtn = document.querySelector("#scissors");


        rockbtn.addEventListener("click", function(){
            const computerSelection = getComputerChoice();
            playRound("rock", computerSelection);
        });
        paperbtn.addEventListener("click", function(){
            const computerSelection = getComputerChoice();
            playRound("paper", computerSelection);
        });
        scissorsbtn.addEventListener("click", function(){
            const computerSelection = getComputerChoice();
            playRound("scissors", computerSelection);

        });


    });

};



playGame();


