// Backend for rock paper scissors game
/////////////////////////////////////////

// Scores for user and computer
let pscore = 0;
let cscore = 0;

// Randomizing computer's hand 
function computerPlay() {
    let choice = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * choice.length);
    return result = choice[random]
}

// Game Logic 
function playRound(playerSelection, computerSelection) { 
    
    if (playerSelection === computerSelection) {
        alert("It's a Tie!");
        return pscore+0, cscore+0;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        alert ("You Lose! Paper beats Rock!")
        return cscore+1;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        alert ("You Win! Rock beats scissors!")
        return pscore+1;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert ("You Win! Scissors beats paper!")
        return pscore+1;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert ("You Lose! Rock beats scissors")
        return cscore+1;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        alert ("You Win! Paper beats rock!")
        return pscore+1;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert ("You Lose! Scissors beats paper!")
        return cscore+1
    }
}

// // Actual Game 
// function game() {
//     //for (let step = 0; step < 5; step++){

//         // Setting variables of player's and computer's hand
//         let computerSelection = computerPlay();
//         let playerSelection = prompt("What hand would you like to play?");
//         playerSelection = playerSelection.toLowerCase();

//         let valid = false;
//         while (!valid) {
//             if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
//                 valid = true; 
//             } else {
//                 playerSelection = prompt("Sorry, that is not an option! Please choose from rock, paper or scissors!");
//             }
//         }
//         console.log(playerSelection);
//         //Displaying results 
//         console.log(playRound(playerSelection, computerSelection));
//     //}
// }

// game();

