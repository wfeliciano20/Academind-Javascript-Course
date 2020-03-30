const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';
let gameIsRunning = false;

11
const getPlayerChoice = function() {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS) {
        alert('Invalid choice! We choose Rock for you!');
        return DEFAULT_USER_CHOICE;
    }
    return selection;

};

const getComputerChoice = function() {
    const randomValue = Math.floor(Math.random() * 3) + 1;
    console.log(randomValue);
    if (randomValue === 1) {
        return ROCK;
    } else if (randomValue === 2) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

const getWinner = (computerChoise, playerChoice = DEFAULT_USER_CHOICE) => {
    return computerChoise === playerChoice ?
        RESULT_DRAW : (computerChoise === ROCK && playerChoice === SCISSORS) ||
        computerChoise === PAPER && playerChoice === ROCK ||
        computerChoise === SCISSORS && playerChoice === PAPER ?
        RESULT_COMPUTER_WINS : RESULT_PLAYER_WINS;
    // if (computerChoise === ROCK && playerChoice === SCISSORS) {
    //     return RESULT_COMPUTER_WINS;
    // } else if (computerChoise === PAPER && playerChoice === ROCK) {
    //     return RESULT_COMPUTER_WINS;
    // } else if (computerChoise === SCISSORS && playerChoice === PAPER) {
    //     return RESULT_COMPUTER_WINS;
    // } else if (computerChoise === playerChoice) {
    //     return RESULT_DRAW;
    // } else {
    //     return RESULT_PLAYER_WINS;
    // }
};

startGameBtn.addEventListener('click', function() {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerSelection = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const result = getWinner(computerChoice, playerSelection);
    alert(`Player ${playerSelection} vs Computer ${computerChoice}\n result ${result}`);
    gameIsRunning = false;
});

// Not related to game

const sumUp = (numbers) => {
    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;
    };

    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}

console.log(sumUp([1, 5, 10, -3, 6, 10]));