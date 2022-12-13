const startGameBtn = document.getElementById('start-game-btn');

const getPlayerChoice = function () {
  const selection = prompt('가위, 바위, 보 중 하나를 입력하세요.', '');
  if (selection !== '가위' && selection !== '바위' && selection !== '보') {
  }
};

startGameBtn.addEventListener('click', function () {
  console.log('Game is starting...');
});
