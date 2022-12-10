# 섹션4: if문, 반복문, 오류처리

## boolean 값을 얻는 법

1. == 같은가
2. != 다른가
3. === & !==
4. \> & <
5. \>= & <=
6. !

- ==, != 는 값만을 비교하고 타입은 비교하지않는다.
- ===, !== 는 값과 타입 둘다 비교한다.

- ===, !== 를 사용하는 것이 좋다.

## 문자열비교

- 문자열도 비교연산자를 통해 비교가 가능하다.
- 자바스크립트는 유니코드 값을 사용하여 표준 사전순에 따라 문자열을 비교한다.
- 대문자는 소문자보다 작은 것으로 간주된다.

```javascript
'ab' > 'aa'; // true
'a' > 'B'; // true
'a' > 'b'; // false
```

## 제어문

### if문

```javascript
// 괄호안의 등식을 만족(true) 할 경우 if문 이후의 중괄호 실행
// 불만족(false) 할 경우 else문 이후의 중괄호 실행
if (calcType === 'ADD') {
  currentResult += enteredNumber;
  mathOperator = '+';
} else {
  currentResult -= enteredNumber;
  mathOperator = '-';
}
```

### else if문

```javascript
// 괄호안의 등식을 만족(true) 할 경우 if문 이후의 중괄호 실행
// 불만족(false) 할 경우 다음 else if문의 등식을 체크후 해당 중괄호 실행
if (calcType === 'ADD') {
  currentResult += enteredNumber;
  mathOperator = '+';
} else if (calcType === 'SUBTRACT') {
  currentResult -= enteredNumber;
  mathOperator = '-';
}
```

### switch & case문

```javascript
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
switch (ev) {
  case LOG_EVENT_PLAYER_ATTACK:
    logEntry.target = 'MONSTER';
    break;
  case LOG_EVENT_PLAYER_STRONG_ATTACK:
    logEntry = {
      event: ev,
      value: val,
      target: 'MONSTER',
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
    };
    break;
  default:
    logEntry = {};
  // 위와 동일한 코드이다.
  // if (ev === LOG_EVENT_PLAYER_ATTACK) {
  //   logEntry.target = 'MONSTER';
  // } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
  //   logEntry = {
  //     event: ev,
  //     value: val,
  //     target: 'MONSTER',
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth
}
```

- switch 키워드는 값을 받는다.
- case에는 비교할 값을 넣는다.
- break키워드를 사용해서 조건을 만족하면 탈출하도록 해줘야한다.
- switch문 끝에는 else처럼 default키워드를 사용할수있다.
- 위 코드처럼 문자열 단순비교일때 사용하면 코드의 가독성이 좋아진다.
- 복잡한 조건이 필요하면 당연히 if문을 사용하는것이 좋다.

## 논리연산자

- && (AND)
- || (OR)

## 연산자 우선순위

- 기본적으로 수학의 규칙을 따르고 대입연산자인 = 가 순위가 제일 낮아서 대입은 마지막에 이루어진다.

## Falsy, Truthy 값

- false로 취급되는 값
  - 0
  - '' (빈 문자열)
  - null, undefined, NaN
- true로 취급되는 값
  - 0을 제외한 수
  - 빈문자열''을 제외한 문자열
  - {}, [] (빈 객체, 빈 배열)

## Falsy, Truthy 값 응용

```javascript
//truthy, falsy가 아닌 boolean값 얻기
!!''; //false
!!1; //true

//첫번째 truthy값이 반환된다.
const someInput = '';
const name = someInput || 'Max'; // 'Max'
//모두 참 또는 truthy 이면 마지막값 반환
let isLoggedIn = true;
const shoppingCart = isLoggedIn && ['Books']; // ['Books']
```

1. 논리부정 ! 2번 쓰기
2. ||을 활용해 기본값 할당하기

- 추후에 **기본값 매개변수**를 활용하면 ||를 활용하여 기본값을 할당하는 방식은 쓰지않게 된다.. 유지보수를 해야하니 알아는 둬야함.

```javascript
//ES6 이전 문법
function printPersonInfo(height, weight, age) {
  var height = height || 180;
  var weight = weight || 60;
  var age = age || 66;

//모던한 문법
function foo(param1 = 1, param2 = {}, param3 = 'korean') {
  console.log(param1, param2, param3);
};
```

## || && 추가사항

```javascript
if(true || false)
if(false && true)
```

- or은 첫번째조건이 참이면 두번째 조건에 대해서는 확인하지 않는다.
- and는 첫번째조건이 거짓이면 두번째 조건에 대해서는 확인하지 않는다.

## prompt()

- prompt(msg, default_value)
- 사용자의 입력을 받을 수 있는 함수이다.

## isNaN()

- 입력된 값이 NaN이면 true 아니면 false
- 예외처리를 할때 잘 쓰인다.

## 삼항연산자

```javascript
// 구문 오류
const userName = if (isLogin) {
  return 'Max';
} else {
  return null;
}

const userName = isLogin ? 'Max' : null;
```

- boolean ? true면 실행 : false면 실행
- 조건식을 통해서 변수에 값을 할당할때 좋다.
- 중첩도 가능하지만 읽기 어려워질 수 있으므로 지양하는 것이 좋다.

## 표현식(expression)과 문장(statement)의 개념

```javascript
// 표현식(Expression)입니다.
'hello' + 'world';
!true;
assignedVariable * 4;
```

- 표현식(Expression)은 주로 식별자, 연산자, 리터럴 등으로 구성되고 하나의 값으로 표현된다.
- 값이 들어가야 할 곳에 사용이 가능하면 표현식이다.
- 표현식은 반드시 상태(state)를 바꿀 필요는 없다.

```javascript
let a, b; // 변수를 선언하는 문장.
let c = 1; // 선언과 초기화를 한 번에 하는 문장.

// 조건을 판별하는 if문장
if (a > b) {
  console.log('a가 b 보다 큽니다.');
}

a = b; // 대입 문장
c = a + b; // 계산 문장

//문장은 값으로 넣을수 없으므로 if문은 문장이다.
const userName = if (isLogin) {
  return 'Max';
} else {
  return null;
}
```

- 문장(Statement)은 기본적으로 무언가를 수행한다.
- 문장은 값이 들어가야 할 곳에 들어갈 수 없다.

## 반복문

### for문

```javascript
for (let i = 0; i < 3; i++) {
  console.log(i);
}
for (let i = 0; i < battleLog.length; i++) {
  console.log(i);
}
```

- 기본형은 카운터변수와 반복을 탈출할 증감연산자가 존재한다.
- 증감연산자 대신 i += 2 같은 문장도 사용 가능 하다.
- **length속성**을 사용해서 배열의 길이나 문자열의 길이를 가져오는 것도 가능하다.

### for of문

```javascript
for (const el of arr) {
  console.log(el);
}
```

- 배열의 값을 참조할때 사용된다.

### for in문

```javascript
for (const el in obj) {
  console.log(key);
  console.log(obj[key]);
}
```

- 객체의 키(속성)를 참조할때 사용된다.

### while & do while문

```javascript
while (isLoggedIn) {
  ...
}

let j = 3;
do {
  console.log(j)
  j++;
} while (j < 3);
```

- 카운터가 있는 경우는 for문을 주로 사용해서 카운터는 잘 사용되지않는다.
- 반복횟수를 모르거나 무한반복을 돌릴때 주로 사용된다.
- 특정 시점에 무한반복이 중단될 불리언 혹은 break키워드가 사용된다.
- do while문은 조건을 나중에 확인해서 코드를 무조건 한번은 실행하게된다.
- do while문의 끝에는 ;을 붙이는 것이 좋다.

### break & continue 키워드

```javascript
for (let i = 1; i++) {
  if (i % 2 === 0)
    continue
  console.log(i) //홀만 출력
  if (i === 101)
    break
}
```

- 반복문을 제어하는데 사용된다.
- break 키워드는 반복문을 탈출할때 사용된다.
- continue 키워드 아래의 코드를 실행하지않고 다음 반복으로 넘어갈때 사용된다.
- 중첩반복문일 경우에는 자신이 속한 반복문 하나만 해당된다.

```javascript
outerFor: for (let i = 1; i <= 2; i++) {
    console.log(i);
    for (let j = 1; j <= 3; j++) {
        console.log(j);
        if (i === 2 && j === 2) {
            break outerFor;
        }
    }
}
```

- 반복문에 레이블(label)을 달아서 외부반복문을 제어할 수 있다.
- 레이블은 사용할 일이 거의 없다. 이런 기능이 있다는 것만 알아두자..

## 오류를 의도적으로 발생시키기
### throw 키워드
- 자바스크립트는 매우 관대해서 오류가 잘 발생하지않는다.
- 자바스크립트로 개발을 할때 여러 파일에 걸쳐있는 애플리케이션을 작성할 수 있는데, 이때 테스트를 위해 애플리케이션의 일부에 의도적으로 오류를 발생시켜 코드 여러 군데에 if 문을 작성하는 대신 공식 오류 관리 도구를 사용해 오류를 처리할 수 있다.
```javascript
// parseInt가 오류를 발생시키지 않아서 오류를 임의로 발생시켜보는 예시
let inputNumber = parseInt(prompt("I'm Number"));
// 사용자가 숫자대신 문자를 입력해도 오류가 뜨지않고 NaN을 반환한다.

function getInputNumber() {
  const inputNumber = parseInt(prompt("I'm Number"));
  if (isNaN(inputNumber) || inputNumber <= 0) {
    throw {message: 'Invalid user input, not a number'} //오류메세지를 임의로 직접 설정
  }
  return inputNumber;
}
/*
커스텀 오류를 발생시켜 스크립트 실행이 중단된다.
Uncaught
{message: 'Invalid user input, not a number'} : Object
*/
```
- **throw** 키워드는 새로운 오류를 만드는 키워드로 무엇이든 오류가 될 수 있다.

### try & catch 키워드
```javascript
//throw키워드의 예시 코드에서 이어짐..
let inputNumber;

try {
  //오류가 발생하면 함수처럼 이 코드는 실행되지 않는다. 대신 catch부분이 실행된다.
  inputNumber = getInputNumber();
} catch (error) {
  console.log(error); //임의로 작성한 오류메세지가 뜬다.
  inputNumber = 99; //기본값설정
  alert('wrong value') //오류발생시의 처리로직 예시
}
```
- try 키워드로 랩핑할때 전체 스크립트를 랩핑하는 것은 좋지않다.
- try 중괄호 내에는 어떠한 입력을 할지 알수없는 사용자입력처럼 제어할 수 없는 부분을 랩핑한다.
- catch 괄호 내에는 매개변수 이름을 작성한다.
- 중괄호 내에서는 catch에 의해 잡힌 오류를 사용할 수 있다.

## 기타

- 배열이나 객체는 참조형이기 때문에 값이 아니라 메모리 주소를 저장한다.
- 리터럴값을 넣어 하드코딩한 const 변수명은 값이 변경되지 않음을 강조하기 위해 모두 대문자로 작성하고 스네이크 표기법으로 쓰는 것이 일반적이다.
- 전역상수는 파일 맨위에 정의해 놓으면 코드분석하기가 쉬워진다.
- 강사는 이벤트핸들러와 연관된 함수일 때는 함수명 끝에 'Handler'를 추가하는 명명규칙을 사용하는데 참고해서 따라할지 자기만의 규칙을 정할지 하자..

```javascript
function attackHandler() {}
attackBtn.addEventListener('click', attackHandler);
```

- 식별자로 문자열을 하드코딩해서 사용하는것은 오타가 생길 수 있으므로 좋지않다.

```javascript
const MODE_ATTACK = 'ATTACK';
// 오타가 생길수 있어 아래코드는 좋지않다
if (actType === 'ATTACK') {
}
// 상수의 이름은 잘못 입력하기가 쉽지않아서 좋다
if (actType === MODE_ATTACK) {
}
```
