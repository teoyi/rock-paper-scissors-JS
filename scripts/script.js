function computerPlay() {
    let choice = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * choice.length);
    console.log(choice[random])
}

let playerSelection = prompt("What hand would you like to play?");
let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) { 
    
}