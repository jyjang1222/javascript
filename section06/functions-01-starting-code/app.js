const startGameBtn = document.getElementById('start-game-btn');

const SCISSORS = '가위';
const ROCK = '바위';
const PAPER = '보';
const DEFAULT_USER_CHOICE = ROCK;

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

startGameBtn.addEventListener('click', function () {
  console.log('Game is starting...');
  const playerSelection = getPlayerChoice();
  console.log(playerSelection);
});
