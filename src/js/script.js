const playerText = document.getElementById('playerText');
const computerText = document.getElementById('computerText');
const resultText = document.getElementById('resultText');
const choiseBtn = document.querySelectorAll('.choiseBtn');

let player;
let computer;
let result;

choiseBtn.forEach(button => {
    button.addEventListener('click', () => {
        player = button.textContent;
        computerTurn();
        playerText.textContent = `Player : ${player}`;
        computerText.textContent = `Computer : ${computer}`;
        resultText.textContent = checkWinner();

    })
});

function computerTurn() {
    const randNum  = Math.floor(Math.random() * 3) + 1

    switch(randNum) {
        case 1: 
        computer = 'ROCK ✊🏻';
        break;
        case 2: 
        computer = 'PAPER ✋🏻';
        break;
        case 3: 
        computer = 'SCISSORS ✌🏻';
        break;
    }
}

function checkWinner() {
    if(player == computer) {
        return 'Draw!';
    }
    else if(computer == 'ROCK ✊🏻') {
        return (player == 'PAPER ✋🏻') ? 'You Win!' : 'You Lose!'
    }

    else if(computer == 'SCISSORS ✌🏻') {
        return (player == 'ROCK ✊🏻') ? 'You Win!' : 'You Lose!'
    }

    else if(computer == 'PAPER ✋🏻') {
        return (player == 'SCISSORS ✌🏻') ? 'You Win!' : 'You Lose!'
    }
}
