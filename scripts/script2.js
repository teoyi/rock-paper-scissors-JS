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
