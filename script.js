
const paragraph = document.getElementById("scoreMessage");
const rockButton = document.getElementById("rockBtn");
const paperButton = document.getElementById("paperBtn");
const scissor = document.getElementById("scissorBtn");
// const playerSelection = prompt("Choose between 'Rock', 'Paper' or 'Scissors'");
const playerSign = document.getElementById("playerSign");
const ComputerSign = document.getElementById("computerSign");
const scoreInfo = document.getElementById("scoreInfo");
const playerScorePara = document.getElementById("playerScore");
const computerScorePara = document.getElementById("computerScore");

let playerScore = 0;
let computerScore = 0;
let gameWinner = "";



function computerPlay (){
    const computerChoice = ["Rock", "Paper", "Scissor"];
    const computerSel = computerChoice[Math.floor(Math.random() * computerChoice.length)]
    return computerSel;
}

const playerSelection = "Rock"



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
        (playerSelection === "Rock" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissor" && computerSelection === "Rock")
    ){
        computerScore++;
        gameWinner = "computer";
    } else if (
        (computerSelection === "Rock" && playerSelection === "Paper") ||
        (computerSelection === "Paper" && playerSelection === "Rock") ||
        (computerSelection === "Scissor" && playerSelection === "Rock")
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

function handleClick (){
    const computerSelection = computerPlay();
    playRound(computerSelection, playerSelection);
    updateScore();
    console.log(playerSelection, computerSelection)
    
    
}


paperButton.addEventListener("click", resetGame)
rockButton.addEventListener("click", handleClick);




