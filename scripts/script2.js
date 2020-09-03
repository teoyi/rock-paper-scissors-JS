// Backend for rock paper scissors game
/////////////////////////////////////////

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

function game(playerSelection, computerSelection) {
    for (let step=0; step < 5; step++) {
        results = playRound(playerSelection, computerSelection);
    }
}

// Getting score from html body 
let currentpscore = 0;
let currentcscore = 0;

// Adding DOM element 
let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerSelection = button.id;
        console.log(playerSelection);
        let computerSelection = computerPlay();
        game(playerSelection, computerSelection);

        // let results = playRound(playerSelection, computerSelection);
        // console.log(results[4])

        // Embedding results into numerical value 
        if (results === "It\'s a Tie!") {
            currentpscore+0;
        } else if (results[4] === "W") {
            currentpscore++;
        } else if (results[4] === "L") {
            currentcscore++;
        }
        console.log(currentcscore);
        console.log(currentpscore);
    })
})




//     //for (let step = 0; step < 5; step++){
    


