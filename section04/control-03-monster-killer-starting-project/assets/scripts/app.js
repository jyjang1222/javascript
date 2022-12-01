const PLAYER_ATTACK_VALUE = 10; //최대공격력 설정
const PLAYER_STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20; //최대힐 설정

let chosenMaxLife = 100; //최대생명력 설정
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

// 공격진행 및 결과체크
function actAndChkResult(actType) {
  let attackType = PLAYER_ATTACK_VALUE;
  if (actType === 'STRONG_ATTACK') {
    attackType = PLAYER_STRONG_ATTACK_VALUE;
  }
  if (actType === 'ATTACK' || actType === 'STRONG_ATTACK') {
    // 플레이어의 공격
    const monsterDamage = dealMonsterDamage(attackType);
    currentMonsterHealth -= monsterDamage; //현재 남은 몬스터체력에 데미지 적용
  }
  
  //힐
  if (actType == 'HEAL') {
    let healValue = HEAL_VALUE;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
      healValue = chosenMaxLife - currentPlayerHealth;
      currentPlayerHealth = chosenMaxLife;
    } else {
      currentPlayerHealth += HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
  }
  // 몬스터의 반격
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  // 결과체크
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You win');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lose');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('draw');
  }
}

// 공격
function attackHandler() {
  actAndChkResult('ATTACK');
}

//강공격
function strongAttackHandler() {
  actAndChkResult('STRONG_ATTACK');
}

//힐
function healHandler() {
  actAndChkResult('HEAL');
}

// 이벤트리스너
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healHandler);
