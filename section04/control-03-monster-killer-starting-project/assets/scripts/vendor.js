const monsterHealthBar = document.getElementById('monster-health');
const playerHealthBar = document.getElementById('player-health');
const bonusLifeEl = document.getElementById('bonus-life');

const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('strong-attack-btn');
const healBtn = document.getElementById('heal-btn');
const logBtn = document.getElementById('log-btn');

function adjustHealthBars(maxLife) {
  monsterHealthBar.max = maxLife;
  monsterHealthBar.value = maxLife;
  playerHealthBar.max = maxLife;
  playerHealthBar.value = maxLife;
}

// 스테이터스바 데미지 적용후 데미지값 반환
function dealMonsterDamage(damage) {
  const dealtDamage = parseInt(Math.random() * damage);
  monsterHealthBar.value -= dealtDamage;
  return dealtDamage;
}

function dealPlayerDamage(damage) {
  const dealtDamage = parseInt(Math.random() * damage);
  playerHealthBar.value -= dealtDamage;
  return dealtDamage;
}

function increasePlayerHealth(healValue) {
  playerHealthBar.value += healValue;
}

function resetGame(value) {
  playerHealthBar.value = value;
  monsterHealthBar.value = value;
}

function removeBonusLife() {
  bonusLifeEl.parentNode.removeChild(bonusLifeEl);
}

function setPlayerHealth(health) {
  playerHealthBar.value = health;
}
