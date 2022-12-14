# 함수 더 배우기

## 함수의 특징

- 함수도 하나의 객체이다.

## 매개변수와 인자

- **매개변수**는 함수를 정의할 때 괄호 안에 지정하는 변수
- **인수**는 함수를 호출할 때 함수에 전달하는 구체적인 값

## 함수 vs 메서드

```javascript
const startGameBtn = document.getElementById('start-game-btn');
// typeof startGameBtn : object
function startGame() {
  console.log('Game is starting...');
}

const person = {
  name: 'Max',
  greet: function greet() {
    console.log('hello there');
  }
};
person.greet();
//person객체의 greet메서드
startGameBtn.addEventListener('click', startGame);
// .addEventListener는 startGameBtn의 메서드라고 볼수있다
```

- 객체에도 함수를 저장할 수 있으며 객체에 저장되는 함수는 메서드라고 불린다.
- 호출시에는 객체.메서드이름() 으로 사용하면 된다.

## 변수에 함수 저장하기

```javascript
const start = function () {
  console.log('Game is starting...');
};
startGameBtn.addEventListener('click', start);
```

- 변수에 함수를 저장할 수 있다.
- 변수명을 통해서 저장된 함수를 호출 할 수 있고 저장된 함수명을 생략할수있다.
- 이름이 생략된 함수는 익명 함수로 불린다.

## 함수 선언 vs 표현식으로 쓰인 함수

```javascript
function multiply(a, b) {
  return a * b;
}
const multiply = function (a, b) {
  return a * b;
};
```

- 일반적으로 선언한 함수는 호이스팅(hoisting)에 의해 자동등록돼 선언위치에 상관없이 호출을 어디서나 가능하다.
- 하지만 표현식으로 변수에 저장된 함수의 경우는 변수가 초기화 되지않은 상태로 호이스팅이 이루어지기 때문에 함수를 호출하기전에 함수를 정의하고 초기화된 상태여야 호출이 가능하다.
- 다른 프로그래밍 언어의 경우 함수를 우선 정의한후에 호출을 하는 방식을 채택하기 때문에 후자의 경우가 선호된다.

## 익명함수

```javascript
startGameBtn.addEventListener('click', function () {
  console.log('Game is starting...');
}); //함수안에 함수를 정의
// 뒤에서 정의된 함수는 호출시 새로운 함수가 계속 생성된다
// 뒤에 ()가 없으니 스크립트실행시에 바로 호출되지는 않는다.
startGameBtn.addEventListener('click', (function () {
    console.log('Game is starting...');
  })()
);
// 즉시실행하고자 한다면 함수를 ()로 감싼뒤에 ()를 붙여준다.
```

- 익명함수를 쓰는 이유는 가령 코드를 봤을때 참조한 변수를 찾을 수고가 사라지게 된다.
- 이벤트리스너 또는 함수에서 또 다른 함수를 참조하는 경우에 잘 쓰인다.
- 함수를 익명으로 정의했을때의 단점은 오류가 발생했을때 'HTMLElement.<anonymous>'로 이름없는 함수의 오류가 나온다.
- 익명함수는 함수명을 생략가능하지만 오류가 발생했을 때를 대비하여 이름을 작성하는 것을 고려할 수 있다.

## 화살표 함수
```javascript
const add = function(a, b) {
  return a + b;
}
const add2 = (a, b) => a + b; //표현식이 하나인경우 중괄호 생략가능
const calc = (a, b) => {
  a *= 2;
  return a + b;
}
```
<code><pre>(arg1, arg2) => { ... }
() => { ... }
arg => { ... }
</pre></code> 

- function 키워드를 대체 한다.
- 화살표함수를 썼을때의 장점은 조금이라도 코드가 줄어든다..