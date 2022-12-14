# 섹션2: 기초: 변수, 자료형, 연산&함수

## 변수의 이름 규칙

1. 맨처음 글자에 **$** 와 **\_** 를 제외한 특수문자와 숫자를 사용해서는 안된다.
2. 소문자로 시작하고 대문자로 구분하는 카멜표기법을 사용한다.
3. **공백** 이 있어서는 안된다.

## 변수와 상수

- let
  - 동일한 이름의 변수 재선언은 불가하다.
  - 값의 변경이 가능하다.
- const
  - 동일한 이름의 변수 재선언과 값의 변경이 불가하다.
  - 상수라고 불린다.
  - 표기법은 모두 대문자로 쓰고 \_로 구분하는 스네이크표기법이 암묵적인 규칙이다.
- var
  - 동일한 이름의 변수 재선언이 가능하다.
  - 최근에는 잘쓰이지 않는다.

```javascript
let userName = 'Minsu';
let userName = 'Minjae'; // 오류
const pi = 3.14;
pi = 3.15; // 오류
var userPw = '1234';
var userPw = '1235';
```

## 연산자의 종류

- +더하기
- -빼기
- \*곱하기
- /나누기
- % 나머지
- \*\* 제곱
- = 할당

## 복합대입연산자

```javascript
currentResult = currentResult + enteredNumber;
currentResult += enteredNumber;
```

- +=
- -=
- \*=
- /=
- %=
- \*\*=

## 증감연산자

```javascript
currentResult = currentResult + 1;
currentResult++;
// 위와 같은 기능
```

- ++
- \-\-

```javascript
currentResult = currentResult + 1;
currentResult++;
// 수정 전 변수의 값을 반환
++currentResult;
// 수정된 값을 반환
```

```javascript
a = 1;
alert(a++); // 1
alert(a); // 2
alert(++a); // 3
alert(a); // 3
```

## 자료형

- Number
  - 2 35 3.14
- String
  - '' "" ``
- Boolean
  - true false
- Object
  - {name: 'Max', age: 31}
- Array
  - [1, 3, 5]

## null / undefined / NaN

- null 과 undefined는 값인 동시에 데이터 유형이다.
- Undefined 는 초기화 되지 않은 변수의 기본값을 의미한다.
  - 변수를 초기화할 때 Undefined 로 초기화하는 방법은 옳지않다.
- null 은 빈데이터를 의미한다.
- NaN (Not a Number)은 숫자 타입이 아닌 데이터를 연산하면 나오는 오류코드이다.

## typeof

- typeof 를 사용하면 해당하는 값의 데이터타입을 확인할수있다.
- 배열과 null은 객체의 한 종류이다.
- NaN은 Number타입이다.

## 이스케이프 문자

- 이스케이프 문자 백슬래시\ 는 특별한 의미를 갖는다.
  - \\' '출력, \\" "출력, \\n 줄바꿈, \\\\ \출력

## 템플릿 리터럴

- 백틱`을 활용하면 문자열안에 표현식을 적을 수 있다.
- 표현식은 ${}로 둘러싼다. ${expression}

```javascript
`(${defaultResult} + 10) * 3 / 2 - 1`;
```

- 이러한 과정을 **템플릿 리터럴** 이라고 부른다

## 코드 스타일, 컨벤션 & 구문

- 여러 줄에 걸쳐 긴 표현식을 구조화하여 더 읽기 쉽게 만들 수 있다.

```javascript
let someResult = 5 + 10 - 3 + 22 - 10000 + 5.344 * 1200;
```

```javascript
let someResult = 5 + 10 - 3 + 22 - 10000 + \n
                 5.344 * 1200;
```

- 자바스크립트는 첫 번째 줄 문자열의 끝을 찾을 수 없고 - 다른 줄에서는 찾지 않는다. 문자열은 항상 한 줄에 있어야 한다.

```javascript
let someLongString =
  'Hi, this is going to be a bit longer, ' +
  'so maybe split it across multiple lines by ' +
  'concatenating multiple strings!';
```

- 아래의 구문은 오류가 발생한다.

```javascript
let someLongString = 'Hi, this is going to be a bit longer,
                      so maybe split it across multiple lines by
                      concatenating multiple strings!';
```

## 함수의 기본

```javascript
function add(num1, num2) {
  const result = num1 + num2;
  return result;
}
```

1. function 키워드와 함수의 이름, 이름옆에 괄호() 와 {}를 작성하여 함수를 정의한다.
2. () 괄호 안에는 함수내에 사용될 인자(arguments)로 매개변수를 넣는다. 매개변수가 필요하지 않은 경우 빈 괄호를 추가한다.
3. return 키워드를 사용하여 함수를 **종료**하고 외부에 값을 반환(전달)이 가능하다.

## 함수의 실행 add() vs add

- 함수를 바로 실행하고 싶지 않을 때가 있다. 자바스크립트에 미래의 어느 시점에(예: 일부 이벤트가 발생할 때) 어떤 기능이 실행되길 원할 수도 있다.

```javascript
someButton.addEventListener('click', add);
```

1. 위 코드는 자바스크립트에게 이렇게 지시한다. "이 버튼이 클릭되면 add를 실행해".

```javascript
someButton.addEventListener('click', add());
```

2. 위의 코드는 스크립트가 실행되면 즉시 add를 실행하기 때문에 위의 코드는 오답이다.

## 전역 / 지역 변수

1. 전역(global) 변수는 함수의 외부에서 선언된 변수를 의미한다.
2. 전역 변수는 함수 내에서도 참조(사용)가 가능하다.
3. 함수내에 선언된 변수는 지역(local) (스코프) 변수로 불리며 함수외부에서 사용이 불가하다.
4. 변수의 참조(사용) 가능한 유효(가능) 범위를 **스코프**(scope)라고 한다.

- 전역변수와 지역변수에 동일한 변수를 선언한다면?

```javascript
let userName = 'Max';
function greetUser(name) {
  let userName = name;
  alert(userName);
}
userName = 'Manu';
greetUser('Max');
// 'Max'알람
```

서로 다른 스코프에서 변수를 생성하기 때문에 변수를 덮어쓰거나 제거하지않고 동일한 이름의 전역변수와 지역변수는 공존하게 된다.

```javascript
let userName = 'Max';
let userName = 'Manu';
// 구문 오류
```

만일 동일 스코프에서 동일한 이름의 변수를 선언하게되면 오류가 발생하게 된다.

```javascript
function add() {
  const enteredNumber = getUserNumberInput();
}

function subtract() {
  const enteredNumber = getUserNumberInput();
}
```

이러한 경우는 변수의 유효범위(스코프)가 다르기 때문에 동일한 이름의 변수 선언이 가능하다.

## 자료형 변환

- HTML입력에서 무엇을 가져오든 간에 항상 문자열 데이터타입을 가져온다.

```javascript
currentResult = currentResult.toString() + parseInt(userInput.value);
```

1. parseInt() 함수는 괄호안의 값을 정수형타입으로 변환해준다. 이 과정에서 소숫점이하는 버려진다.
2. toString() 함수는 숫자를 문자열로 변환해준다. 잘 사용되지는 않으며 문자열 연결연산자인 +가 잘 사용된다.
3. 1 + '' 이렇게 빈배열을 더해주면 숫자에서 문자열로 자동형변환이 이루어진다.

- toString() 함수는 null이나 undefined가 들어오면 타입에러가 뜨지만 String() 함수는 뜨지않아서 **String()** 함수를 쓰는것이 좋다고한다.

## 코드 리팩터링 예시

- 리팩터링 이전의 코드

```javascript
const getWinner = function(playerCho, comCho) {
  let res = RES_COM_WIN;
  if (playerCho === comCho) {
    res = RES_DRAW;
  } else if (playerCho === SCISSORS && comCho === PAPER) {
    res = RES_PLAYER_WIN;
  } else if (playerCho === ROCK && comCho === SCISSORS) {
    res = RES_PLAYER_WIN;
  } else if (playerCho === PAPER && comCho === ROCK) {
    res = RES_PLAYER_WIN;
  }
  return res;
```

- 리팩터링 이후의 코드

```javascript
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
```

## 주석

- 한줄 주석 //
- 블럭 주석 /\* \*/

## 배열의 기본

```javascript
let logArr = [];
logArr.push(1);
logArr.push(2);
logArr.push(3);
```

1. [] 대괄호를 사용해서 정의한다.
2. 인덱스번호를 이용해서 배열을 참조할수있다. logArr[0]
3. 인덱스번호는 0부터 시작한다.
4. push()를 이용하면 배열 끝에 요소를 추가할수있다. (파이썬에서는 append)

## 객체의 기본

```javascript
const user = {
  name: 'Max',
  age: 30
};
```

1. {} 를 사용하여 "데이터 그룹화"를 수행할 수 있다 - 닫히는 } 뒤에 세미콜론(;)이 사용된다. 일반적으로 {} 가 등호= 오른쪽에 있는 경우 {} 뒤에 세미콜론이 사용된다.
2. 키-값 쌍은 세미콜론이 아닌 쉼표(,)로 구분된다. 객체 내부(즉 {} 사이)에 세미콜론을 쓰면 구문 오류이다.
3. 값은 등호(=)가 아니라 콜론(:)으로 키/프로퍼티에 할당된다. 객체 내부(즉 {} 사이)에 등호를 쓰면 구문 오류이다.
4. 객체의 요소에서 왼쪽은 키(key) 또는 속성(property)으로 불리며 오른쪽은 값(value)으로 불린다.
5. 객체의 속성에 접근하려면 .을 활용한다. user.age

## script를 body밑에 작성하는 것과 head에 작성하는것 차이

- 전자의 경우, html구문분석과 렌더링이 다되면 스크립트 분석과 실행이 이루어진다.
  - html문서가 크다면 스크립트의 분석과 실행이 늦어지게된다.
- 후자의 경우, html구문분석 중간에 html구문분석을 일시정지하고 스크립트를 다운로드해서 스크립트 구문분석과 실행이 이루어진다.
  - 스크립트를 미리 다운로드한건 좋지만 html문서가 렌더링되기전에 실행이 돼서 스크립트 작동이 안될 수가 있다.

## defer / async 스크립트 태그 속성

- defer
  - head에 작성해서 생기는 문제의 해결방법은 스크립트 태그끝에 **defer** 를 추가하는 것이다.
  - **defer** 는 스크립트를 바로 다운로드 하지만 html 구문분석도 정지가 안되게 해서 구문분석이 계속 이루어지게 해준다.
  - 스크립트를 미리 다운로드 하고 html 구문분석이 완료되면 스크립트가 실행되도록 해준다.
  - 스크립트의 실행순서는 먼저 로드가 되는 순서지만 defer를 사용하면 실행 순서가 정해져있다.
    - 아래쪽의 스크립트가 로드가 먼저되도 defer가 쓰여진 위쪽의 스크립트가 먼저 실행이 된다.
- async
  - 스크립트가 html코드에 의존하지 않는다면 async 속성을 사용한다.
  - async는 브라우저에 최대한 빨리 스크립트를 로딩하도록 한다.
    - 이때 html구문분석 정지되지않고 분석이 계속 이루어진다.
  - 스크립트가 다운로드가 완료되면 바로 실행이 된다.
    - 스크립트가 실행될때는 html구문분석이 일시정지 된다.
- defer와 async는 외부 스크립트에서만 사용이 가능하다.

## 기타 조언

1. 끝에 ;을 사용하는 것은 선택이지만 다른 프래그래밍 언어에서는 끝에 ;이 필수인 언어가 많으므로 끝에 ;을 사용하는 것이 좋다.
2. 함수와 같이 중괄호 뒤에는 세미콜론을 사용하지 않는다.
3. 브라우저는 스크립트를 실행하기 전에 자동으로 모든 함수를 등록한다. 그러기 때문에 자바스크립트는 함수 선언을 밑에서 해도 위에서 호출이 가능하다. (함수 정의는 파일위쪽에 하는 것이 가독성에 좋다)
