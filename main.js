function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

let playerPoints = (0);
let computerPoints = (0);

function playGame() {
    const userChoice = prompt("Choose your weapon: Rock, Paper, Scissors").toLowerCase();
    const computerChoice = getComputerChoice();

    console.log(`You choose: ${userChoice}`);
    console.log(`Computer choose: ${computerChoice}`);

    if (userChoice === computerChoice) {
        return "It's a tie!"     
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        playerPoints++;
        return ("You win!");  
    } else {
        computerPoints++
        return ("You lose :(");
    }
}

let roundsPlayed = (1);

function game() {
    while (roundsPlayed <= 5) {
        const result = playGame()
        console.log(result);
        roundsPlayed++;
    }
    
    console.log(`Player Points: ${playerPoints}`);
    console.log(`Computer Points: ${computerPoints}`);

    const gameResult = winner();
    console.log(gameResult);
}

function winner() {
    if (playerPoints > computerPoints) {
        return "Player Wins!";
    } else if (computerPoints > playerPoints) {
        return "Computer Wins";
    } else {
        return "It's a tie!";
    }
}

game();

