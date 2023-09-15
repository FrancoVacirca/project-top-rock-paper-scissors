//pc choses a random number
const pcRandomNumber = Math.floor(Math.random() * 3) + 1;

//get the pc random number and changes it to rock, paper, scissors
function getComputerChoice(pcObject) {
    if (pcRandomNumber === 1) {
        return "Rock!"
    } else if (pcRandomNumber === 2) {
        return "Paper!"
    } else {
        return "Scissors!"
    }
}

console.log("The computer choice: ",getComputerChoice());

//TODO store the pc object