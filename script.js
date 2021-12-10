/*----- constants -----*/
const PLAYER = {
	playerOne: 'rgba(255, 0, 0, 0)',
};

/*----- app's state (variables) -----*/
let path;
let playerLives;
let currentPlayer;

/*----- cached element references -----*/
const gameBridge = document.querySelector('#grid');
const northTile = document.querySelector('.north');
const southTile = document.querySelector('.south');
const currentLives = document.querySelector('h2');
const modal = document.getElementById('modal');
const startGameButton = document.querySelector('#startGameButton');
const startingPoint = document.querySelector('.start');
const endingPoint = document.querySelector('.end');

/*----- event listeners -----*/
gameBridge.addEventListener('click', handleClick);

function handleClick(event) {
	// console.log('hello');
	updateGameBridge(event);
}

/*----- functions -----*/
function init() {
	currentPlayer = PLAYER.playerOne;
}
init();

function updateGameBridge(event) {
	if (
		event.target.classList.contains('north') ||
		event.target.classList.contains('south')
	) {
		console.log('clicked on tile', event.target);
		event.target.style.backgroundColor = currentPlayer;
		event.target.style.border = '10px solid rgba(255, 0, 0, 0)';
	}
}

// /*----- modals -----*/
startGameButton.onclick = function () {
	modal.style.display = 'none';
};

// gamelogic

function randomNum() {
	return Math.floor(Math.random() * 2);
}
failOdds = northTile.randomNum();
// console.log(number);

function pathing() {
	if (fallOdds === 0) {
		// let updateGameBridge color in the tile 
	}else{
        // let 
    }
}

// funtion of ending position
// if event.target.classList.contains('.end') && currentPlayer
//end 'win' modal screen
// function endGame(event) {
//     if (event.target.classList.contains('.end') && currentPlayer)
// }

// function of the game path
// if '#north(math.floor(math.random() * 2) === 0)
//give it an element that is 'weak'
// else
// give '#south' element that is 'weak'
//weak = event.target.remove or background color rgba clear

// fucntion of game over
// if playerLives === 0
//end 'lose' modal screen
