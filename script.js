
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
const resetButton = document.getElementById("resetBtn");


let playerScore = 0;
let computerScore = 0;
let gameWinner = "";

rockButton.addEventListener("click", () => handleClick("ROCK"));
paperButton.addEventListener("click", () => handleClick("PAPER"));
scissorButton.addEventListener("click", () => handleClick("SCISSOR"));
resetButton.addEventListener("click", () => resetGame());

// Chooses Rock, Paper or Scissors at random
function computerPlay (){
    const computerChoice = ["ROCK", "PAPER", "SCISSOR"];
    const computerSel = computerChoice[Math.floor(Math.random() * computerChoice.length)]
    return computerSel;
}

 function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorButton.disabled = true;
}


// Checks if the game winning score has been reached
function isGameFinished (){
    if (playerScore === 5 || computerScore === 5){
        scoreInfo.textContent = `The Game is over, the ${gameWinner} wins!`;
        disableButtons();
    } 
}


function resetGame(){
        computerScore = 0;
        playerScore = 0;
        computerScorePara.textContent = `Computer: ${computerScore}`;
        playerScorePara.textContent = `Player: ${playerScore}`;
        scoreInfo.textContent = "Game has been reset!"
        paragraph.textContent = "";
        rockButton.disabled = false;
        paperButton.disabled = false;
        scissorButton.disabled = false;
}



// Checks what case is true right now, if the player wins or computer wins the their score is incremented by 1 
function playRound(computerSelection, playerSelection){

    if(playerSelection === computerSelection){
        gameWinner = "tie"
    }
    else if (
        (playerSelection === "ROCK" && computerSelection === "PAPER") ||
        (playerSelection === "SCISSOR" && computerSelection === "ROCK") ||
        (playerSelection === "PAPER" && computerSelection === "SCISSOR")
    ){
        computerScore++;
        gameWinner = "computer";
    } else if (
        (computerSelection === "ROCK" && playerSelection === "PAPER") ||
        (computerSelection === "SCISSOR" && playerSelection === "ROCK") ||
        (computerSelection === "PAPER" && playerSelection === "SCISSOR")
    ){
        playerScore++;
        gameWinner = "player";
    }

    

}       


// Checks who the gameWinner is and updates the scoreInfo and Score accordingly
function updateScore (playerSelection, computerSelection){
    if (gameWinner === "tie"){
        scoreInfo.textContent = "Its a Tie";
        paragraph.textContent = `You both choose ${playerSelection}`;
    } else if (gameWinner === "player"){
        scoreInfo.textContent = "You Win!";
        paragraph.textContent = `The Computer choose ${computerSelection}`;
    } else if (gameWinner === "computer"){
        scoreInfo.textContent = "The computer wins!";
        paragraph.textContent = `The Computer choose ${computerSelection}`;
    }

    
    playerScorePara.textContent = `Player: ${playerScore}`;
    computerScorePara.textContent = `Computer: ${computerScore}`;
    
}


// The click event when someone presses on the signs, calls the functions to check whatever event is true
function handleClick (playerSelection){
    const computerSelection = computerPlay();
    playRound(computerSelection, playerSelection);
    updateScore(playerSelection, computerSelection);
    isGameFinished();
    console.log(playerSelection, computerSelection)
    
}





