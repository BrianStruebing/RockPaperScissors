
const paragraph = document.getElementById("scoreMessage");
const rockButton = document.getElementById("rockBtn");
const paperButton = document.getElementById("paperBtn");
const scissorButton = document.getElementById("scissorBtn");
// const playerSelection = prompt("Choose between 'Rock', 'Paper' or 'Scissors'");
const playerSign = document.getElementById("playerSign");
const ComputerSign = document.getElementById("computerSign");
const scoreInfo = document.getElementById("scoreInfo");
const playerScorePara = document.getElementById("playerScore");
const computerScorePara = document.getElementById("computerScore");

let playerScore = 0;
let computerScore = 0;
let gameWinner = "";

rockButton.addEventListener("click", () => handleClick("ROCK"));
paperButton.addEventListener("click", () => handleClick("PAPER"));
scissorButton.addEventListener("click", () => handleClick("SCISSOR"));


function computerPlay (){
    const computerChoice = ["ROCK", "PAPER", "SCISSOR"];
    const computerSel = computerChoice[Math.floor(Math.random() * computerChoice.length)]
    return computerSel;
}






function resetGame(){

    if (playerScore === 5 || computerScore === 5){
        computerScore = 0;
        playerScore = 0;
        computerScorePara.textContent = `Computer: ${computerScore}`;
        playerScorePara.textContent = `Player: ${playerScore}`;
        scoreInfo.textContent = "Game has been reset!"
    }
}




function playRound(computerSelection, playerSelection){

    if(playerSelection === computerSelection){
        gameWinner = "tie"
    }
    else if (
        (playerSelection === "ROCK" && computerSelection === "PAPER") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSOR" && computerSelection === "ROCK") ||
        (playerSelection === "PAPER" && computerSelection === "SCISSOR")
    ){
        computerScore++;
        gameWinner = "computer";
    } else if (
        (computerSelection === "ROCK" && playerSelection === "PAPER") ||
        (computerSelection === "PAPER" && playerSelection === "ROCK") ||
        (computerSelection === "SCISSOR" && playerSelection === "ROCK") ||
        (computerSelection === "PAPER" && playerSelection === "SCISSOR")
    ){
        playerScore++;
        gameWinner = "player";
    }

    

}       


function updateScore (){
    if (gameWinner === "tie"){
        scoreInfo.textContent = "Its a Tie!";
    } else if (gameWinner === "player"){
        scoreInfo.textContent = "You Win!";
    } else if (gameWinner === "computer"){
        scoreInfo.textContent = "The computer wins!";
    }

    playerScorePara.textContent = `Player: ${playerScore}`;
    computerScorePara.textContent = `Computer: ${computerScore}`;
}

function handleClick (playerSelection){
    const computerSelection = computerPlay();
    playRound(computerSelection, playerSelection);
    updateScore();
    console.log(playerSelection, computerSelection)
    
    
}


paperButton.addEventListener("click", resetGame)
rockButton.addEventListener("click", handleClick);




