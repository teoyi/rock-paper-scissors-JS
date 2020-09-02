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
        return "It's a Tie!";

    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock!";
    
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats scissors!";
  
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats paper!";
    
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats scissors";
   
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats rock!";

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats paper!";

    };
};

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log('nope');
    });
});

// // Actual Game 
// function game() {
//     //for (let step = 0; step < 5; step++){

//         // Setting variables of player's and computer's hand
//         let computerSelection = computerPlay();
//         let buttons = document.querySelectorAll('button');
//         buttons.forEach((button) => {
//             button.addEventListener('click', () => {
//                 alert(button.id);
//             })
//         })
// }

// game();
