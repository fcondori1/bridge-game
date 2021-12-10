/*----- constants -----*/
const PLAYER = {
	playerOne: 'black',
    playerTwo: 'o',
};

/*----- app's state (variables) -----*/
let path;
let playerLives;
let currentPlayer;

/*----- cached element references -----*/
const gameBridge = document.querySelector('#grid');
// const boxTile = document.querySelector('.tile');
const currentLives = document.querySelector('h2');
const modal = document.getElementById('modal');
const startGameButton = document.querySelector('#startGameButton');
const startingPoint = document.querySelector('.start');
const endingPoint = document.querySelector('.end');


/*----- event listeners -----*/
gameBridge.addEventListener('click', handleClick);

function handleClick(event) {
    console.log('hello');
    updateGameBridge(event);
}

currentPlayer = PLAYER.playerOne

function updateGameBridge(event) {
    if (event.target.classList.contains('#north, #south')) {
        event.target.backgroundColor = currentPlayer;
    }
}


/*----- functions -----*/
function init() {
	playersLives = PLAYER.playerOne;
}
init()

// /*----- modals -----*/
startGameButton.onclick = function () {
    modal.style.display = 'none';
}

// startingPoint => give it currentPlayer;
// funtion of ending position 
    // if event.target.classList.contains('.end') && currentPlayer
        //end 'win' modal screen
        

// function of the game path 
    // if '#north(math.floor(math.random() * 2) === 0)
        //give it an element that is 'weak'
    // else 
        // give '#south' element that is 'weak'
            //weak = event.target.remove


// fucntion of game over
    // if playerLives === 0 
        //end 'lose' modal screen
