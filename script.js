/*----- constants -----*/
const PLAYER = {
	playerOne: 'rgba(255, 0, 0, 0)',
};
// SEIR 115 tic-tac-toe reference

/*----- app's state (variables) -----*/
let path;
let playerLives = 10;
let currentPlayer;

/*----- cached element references -----*/
const gameBridge = document.querySelector('#grid');
const northTile = document.querySelector('.north');
const southTile = document.querySelector('.south');
const currentLives = document.querySelector('h2');
const modal = document.getElementById('modal');
const winnerModal = document.getElementById('winModal');
const loserModal = document.getElementById('loseModal');
const startGameButton = document.querySelector('#startGameButton');
const resetWinButton = document.querySelector('#reset-win');
const resetLoseButton = document.querySelector('#reset-lose');
const startingPoint = document.querySelector('.start');
const endingPoint = document.querySelector('.end');
const north1 = document.querySelector('.tile-1');
const north2 = document.querySelector('.tile-2');
const north3 = document.querySelector('.tile-3');
const north4 = document.querySelector('.tile-4');
const north5 = document.querySelector('.tile-5');
const north6 = document.querySelector('.tile-6');
const north7 = document.querySelector('.tile-7');
const north8 = document.querySelector('.tile-8');
const north9 = document.querySelector('.tile-9');
const north10 = document.querySelector('.tile-10');
const north11 = document.querySelector('.tile-11');
const north12 = document.querySelector('.tile-12');
const north13 = document.querySelector('.tile-13');
const north14 = document.querySelector('.tile-14');
const north15 = document.querySelector('.tile-15');
const south1 = document.querySelector('.tiles-1');
const south2 = document.querySelector('.tiles-2');
const south3 = document.querySelector('.tiles-3');
const south4 = document.querySelector('.tiles-4');
const south5 = document.querySelector('.tiles-5');
const south6 = document.querySelector('.tiles-6');
const south7 = document.querySelector('.tiles-7');
const south8 = document.querySelector('.tiles-8');
const south9 = document.querySelector('.tiles-9');
const south10 = document.querySelector('.tiles-10');
const south11 = document.querySelector('.tiles-11');
const south12 = document.querySelector('.tiles-12');
const south13 = document.querySelector('.tiles-13');
const south14 = document.querySelector('.tiles-14');
const south15 = document.querySelector('.tiles-15');

const winGame = () => {
	modal.style.display = 'none';
};
/*----- event listeners -----*/
gameBridge.addEventListener('click', handleClick);
winnerModal.addEventListener('click', winGame);

function handleClick(event) {
	updateGameBridge(event);
}

const openWinnerModal = () => {
	winnerModal.style.display = 'block';
};

endingPoint.addEventListener('click', openWinnerModal);

/*----- functions -----*/
function init() {
	currentPlayer = PLAYER.playerOne;
}
init();

function randomNum() {
	return Math.floor(Math.random() * 2);
}
failOdds = randomNum();

function randomTile1() {
	if (randomNum() === 0) {
		north1.classList.add('weak');
	} else {
		south1.classList.add('weak');
	}
}
randomTile1();

function randomTile2() {
	if (randomNum() === 0) {
		north2.classList.add('weak');
	} else {
		south2.classList.add('weak');
	}
}
randomTile2();

function randomTile3() {
	if (randomNum() === 0) {
		north3.classList.add('weak');
	} else {
		south3.classList.add('weak');
	}
}
randomTile3();

function randomTile4() {
	if (randomNum() === 0) {
		north4.classList.add('weak');
	} else {
		south4.classList.add('weak');
	}
}
randomTile4();

function randomTile5() {
	if (randomNum() === 0) {
		north5.classList.add('weak');
	} else {
		south5.classList.add('weak');
	}
}
randomTile5();

function randomTile6() {
	if (randomNum() === 0) {
		north6.classList.add('weak');
	} else {
		south6.classList.add('weak');
	}
}
randomTile6();

function randomTile7() {
	if (randomNum() === 0) {
		north7.classList.add('weak');
	} else {
		south7.classList.add('weak');
	}
}
randomTile7();

function randomTile8() {
	if (randomNum() === 0) {
		north8.classList.add('weak');
	} else {
		south8.classList.add('weak');
	}
}
randomTile8();

function randomTile9() {
	if (randomNum() === 0) {
		north9.classList.add('weak');
	} else {
		south9.classList.add('weak');
	}
}
randomTile9();

function randomTile10() {
	if (randomNum() === 0) {
		north10.classList.add('weak');
	} else {
		south10.classList.add('weak');
	}
}
randomTile10();

function randomTile11() {
	if (randomNum() === 0) {
		north11.classList.add('weak');
	} else {
		south11.classList.add('weak');
	}
}
randomTile11();

function randomTile12() {
	if (randomNum() === 0) {
		north12.classList.add('weak');
	} else {
		south12.classList.add('weak');
	}
}
randomTile12();

function randomTile13() {
	if (randomNum() === 0) {
		north13.classList.add('weak');
	} else {
		south13.classList.add('weak');
	}
}
randomTile13();

function randomTile14() {
	if (randomNum() === 0) {
		north14.classList.add('weak');
	} else {
		south14.classList.add('weak');
	}
}
randomTile14();

function randomTile15() {
	if (randomNum() === 0) {
		north15.classList.add('weak');
	} else {
		south15.classList.add('weak');
	}
}
randomTile15();

const checkForLoser = () => {
	if (playerLives === -1) {
		setTimeout(function () {
			loserModal.style.display = 'block';
		}, 600);
	}
};

function updateGameBridge(event) {
	if (event.target.classList.contains('weak')) {
		event.target.style.backgroundColor = currentPlayer;
		event.target.style.border = '10px solid rgba(255, 0, 0, 0)';
		livesLeft = playerLives--;
		currentLives.innerText = `${livesLeft} lives left`;
		checkForLoser();
	}
}

// /*----- modals -----*/
startGameButton.onclick = function () {
	modal.style.display = 'none';
};
