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

## if문 else if문

- if문

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

- else if문

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
//2
//첫번째 truthy값이 반환된다.
const name = someInput || 'Max';
//모두 참 또는 truthy 이면 마지막값 반환
const name = isLoggedIn && 'MAX';
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
// 상수의 이름은 잘못 입력하기가 쉽지않아서 괜찮다
if (actType === MODE_ATTACK) {
}
```
