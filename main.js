const pcChoices = ["rock", "paper", "scissors"];

function pcChoice() {
    const randomIndex = Math.floor(Math.random() * 3); 
    return pcChoices[randomIndex];
}

let playerPoints = 0;
let pcPoints = 0;

const choiceWeapons = document.querySelectorAll('.choice');

choiceWeapons.forEach((element) => {
    element.addEventListener('click', () => {
        const playerChoice = element.id;
        const computerChoice = pcChoice();
        
        playRound(playerChoice, computerChoice);
    });
});

function playRound(playerChoice, computerChoice) {
    const resultDisplay = document.getElementById('round-result');
    const userScoreDisplay = document.getElementById('user-score');
    const computerScoreDisplay = document.getElementById('computer-score');

    if (playerChoice === computerChoice) {
        resultDisplay.textContent = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') 
    ) {
        resultDisplay.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. You Win!!`;
        playerPoints++;  
    } else if (
        (playerChoice === 'rock' && computerChoice === 'paper') ||   
        (playerChoice === 'paper' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'rock')
    ) {
        resultDisplay.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. You Lose :C`;
        pcPoints++;  
    }

    userScoreDisplay.textContent = playerPoints;
    computerScoreDisplay.textContent = pcPoints;

    if (playerPoints === 5) {
        alert("Congratulations! You won the game!");
    } else if (pcPoints === 5) {
        alert("Computer wins. Better luck next time!");
    } else {
        // Continue the game
        requestAnimationFrame(game);
    }
}

// Start the game
function startGame() {
    game();
}
