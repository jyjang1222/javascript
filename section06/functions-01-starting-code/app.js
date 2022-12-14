const startGameBtn = document.getElementById('start-game-btn');

const SCISSORS = '가위';
const ROCK = '바위';
const PAPER = '보';
const DEFAULT_USER_CHOICE = ROCK;
const RES_PLAYER_WIN = 'player'
const RES_COM_WIN = 'com'
const RES_DRAW = 'draw';

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(`${SCISSORS}, ${ROCK}, ${PAPER} 중 하나를 입력하세요.`, '');
  if (
    selection !== SCISSORS &&
    selection !== ROCK &&
    selection !== PAPER
    ) {
    alert(`잘못입력했습니다. ${DEFAULT_USER_CHOICE}가 선택됩니다.`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComChoice = function() {
  const r = parseInt(Math.random() * 3);
  if (r === 0) {
    return SCISSORS;
  } else if (r === 1) {
    return ROCK;
  } else {
    return PAPER;
  }
};

const getWinner = (playerCho, comCho) => {
  let res = RES_COM_WIN;
  // if (playerCho === comCho) {
  //   res = RES_DRAW;
  // } else if (playerCho === SCISSORS && comCho === PAPER) {
  //   res = RES_PLAYER_WIN;
  // } else if (playerCho === ROCK && comCho === SCISSORS) {
  //   res = RES_PLAYER_WIN;
  // } else if (playerCho === PAPER && comCho === ROCK) {
  //   res = RES_PLAYER_WIN;
  // }
  if (playerCho === comCho) {
    res = RES_DRAW;
  } else if (
    playerCho === SCISSORS && comCho === PAPER ||
    playerCho === ROCK && comCho === SCISSORS ||
    playerCho === PAPER && comCho === ROCK
    ) {
    res = RES_PLAYER_WIN
  }
  return res;
};

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const comChoice = getComChoice();
  const winner = getWinner(playerChoice, comChoice);
  console.log(`player: ${playerChoice} com: ${comChoice} winner: ${winner}`);
  gameIsRunning = false;
});
