const PLAYER_ATTACK_VALUE = 10; //최대공격력 설정
const PLAYER_STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20; //최대힐 설정

const MODE_ATTACK = 'ATTACK'; //MODE_ATTACK = 0
const MODE_STRONG_ATTACK = 'STRONG_ATTACK'; //MODE_STRONG_ATTACK = 1
const MODE_HEAL = 'HEAL';

const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

const enteredValue = prompt('enter maximum life', '100');

let chosenMaxLife = parseInt(enteredValue); //최대생명력 설정
let battleLog = [];

//입력받은 값이 숫자가 아닌 경우 기본값 사용
if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(ev, val, monsterHealth, playerHealth) {
  let logEntry = {
    event: ev,
    value: val,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth
  };
  if (ev === LOG_EVENT_PLAYER_ATTACK || ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
    logEntry.target = 'MONSTER';
  } else if (ev === LOG_EVENT_MONSTER_ATTACK || ev === LOG_EVENT_PLAYER_HEAL) {
    logEntry.target = 'PLAYER';
  }
  battleLog.push(logEntry);
}

// 게임 리셋
function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

// 공격진행 및 결과체크
function act(actType) {
  let attackType = PLAYER_ATTACK_VALUE;
  let monsterDamage;
  let eventType = LOG_EVENT_PLAYER_ATTACK;

  if (actType === MODE_STRONG_ATTACK) {
    attackType = PLAYER_STRONG_ATTACK_VALUE;
    eventType = LOG_EVENT_PLAYER_STRONG_ATTACK;
  }
  if (actType === MODE_ATTACK || actType === MODE_STRONG_ATTACK) {
    // 플레이어의 공격
    monsterDamage = dealMonsterDamage(attackType);
    currentMonsterHealth -= monsterDamage; //현재 남은 몬스터체력에 데미지 적용
  }

  //힐
  let healValue = HEAL_VALUE;
  if (actType == MODE_HEAL) {
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
      healValue = chosenMaxLife - currentPlayerHealth;
    }
    currentPlayerHealth += healValue;
    increasePlayerHealth(healValue);
    eventType = LOG_EVENT_PLAYER_HEAL;
  }

  const initialPlayerHealth = currentPlayerHealth; //이전체력 저장
  // 몬스터의 반격
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  // 플레이어행동 로그
  if (actType === MODE_HEAL) {
    writeToLog(eventType, healValue, currentMonsterHealth, currentPlayerHealth);
  } else {
    writeToLog(
      eventType,
      playerDamage,
      currentMonsterHealth,
      currentPlayerHealth
    );
  }

  //몬스터 공격 로그
  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    monsterDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );

  //보너스라이프 사용 (몬스터공격 한번 무효화)
  if (currentPlayerHealth <= 0 && hasBonusLife) {
    alert('use bonus life');
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
  }

  if (
    currentMonsterHealth <= 0 ||
    (currentPlayerHealth <= 0 && hasBonusLife === false)
  ) {
    chkResult(actType);
  }
}

// 승부결과체크
function chkResult(actMode) {
  let resMsg;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    resMsg = 'You win';
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    resMsg = 'You lose';
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    resMsg = 'draw';
  }
  alert(resMsg);
  writeToLog(actMode, resMsg, currentMonsterHealth, currentPlayerHealth);
  reset();
}

// 공격
function attackHandler() {
  act(MODE_ATTACK);
}

//강공격
function strongAttackHandler() {
  act(MODE_STRONG_ATTACK);
}

//힐
function healHandler() {
  act(MODE_HEAL);
}

//로그보기
function printLogHandler() {
  console.log(battleLog);
}

// 이벤트리스너
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healHandler);
logBtn.addEventListener('click', printLogHandler);
