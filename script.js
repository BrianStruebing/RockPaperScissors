
const paragraph = document.getElementById("scoreMessage");
const rock = document.getElementById("rockBtn");
const paper = document.getElementById("paperBtn");
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
const computerSelection = computerPlay();


function playRound(computerSelection, playerSelection){

    if(playerSelection == computerSelection){
        gameWinner = "Tie"
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

    updateScore();

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

console.log(playRound(computerSelection, playerSelection))




