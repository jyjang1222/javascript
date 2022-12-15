# 함수 더 배우기

## 함수의 특징

- 함수도 하나의 객체이다. (함수에 관련된 메서드를 사용가능 .bind())

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
const loadPerson = pName => ({name: pName });
```
<pre><code>(arg1, arg2) => { ... }
() => { ... }
arg => { ... }
</code></pre>

- function 키워드를 대체 한다.
- 화살표함수를 썼을때의 장점은 조금이라도 코드가 줄어든다..
- 함수가 객체를 반활할때는 구문이 겹쳐서 추가 괄호()가 필요하다.

## 함수의 기본 인자

```javascript
const add2 = (a, b = 0, c = 0) => a + b + c;
add2(1); // 1
const add = (a, b = a < 0 ? -a : a) => a + b;
add(-1); // 0
```

- 자바스크립트는 함수를 호출할 때 인수의 갯수와 매개변수의 갯수를 달리해도 오류가 발생하지 않는다.
- 매개변수에 기본 인수를 설정할 수 있다.
- 기본인수는 인수가 **undefined**인 경우에만 사용된다. (다른 falsy X)
- 보통 기본인수는 뒤쪽 매개변수에 할당하게 된다. 왜냐하면 인수가 전달되는 순서는 바뀌지않아서 호출할때 뒤의 인수는 생략할수 있기 때문이다.

## Rest 매개변수

```javascript
// 들어올 인수의 갯수를 모를때..
const sumUp = (...numbers) => {
  let sum = 0;
  for (const i of numbers) {
    sum += i;
  }
  return sum;
};
// Rest매개변수의 기능이 추가 되기전에 쓰이던 방법..
const subtractUp = function() {
  let calc = 0;
  for (const i of arguments) {
    calc -= i;
  }
  return calc;
};

sumUp(1, 5, 10, -3, 6, 10);
sumUp(1, 5, 10, -3, 6, 10, 25, 28);
subtractUp(4,67,43,5)
```

- 여러 인수로 함수를 호출해야 할 때 사용
- 매개변수 앞에 ...을 추가해서 함수 안에 배열을 설계할 수 있다.
- ...의 대상은 항상 마지막 매개변수여야 한다.
- arguments는 함수안에서만 사용할 수 있고 Rest연산자와 동일한 기능을 한다. 
- arguments는 화살표함수에서는 작동이 안되기때문에 사용하지 않는 것이 좋다.

## 함수내에서 함수 생성하기
```javascript
const sumUp = (...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  for (const i of numbers) {
    sum += validateNumber(i);
  }
  return sum;
};
console.log(sumUp(1, 2, 3, 'abcd'));
```

- 당장은 함수안에 함수를 생성하는 경우는 잘 없지만 이런 사례도 있으니 이런게 있다는 것 정도만 알아두자..

## 콜백 함수

### 콜백함수 미사용

```javascript
const repeatNoCallback = num => {
    for (let i = 0; i < num; i++) {
        printString('hello world');
    }
}

const printString = string => {
    console.log(string);
}

repeatNoCallback(5);
```

### 콜백함수 사용

```javascript
const repeatCallback = (num, callback) => {
    for (let i = 0; i < num; i++) {
        callback("hello world");
    }
}

const printString = string => {
    console.log(string);
}

repeatCallback(5, printString);
```

- 자바스크립트는 함수를 인자로 받는 것이 가능하며 이를 콜백함수라 부른다.

## bind() 메서드

```javascript
const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  for (const i of numbers) {
    if (operation === 'ADD') {
      sum += validateNumber(i);
    } else {
      sum -= validateNumber(i);
    }
  }
  // bind메서드가 먼저 실행되기 때문에 '모든 수를 더하면:' 이 첫인자로 오고 그 다음 인자로 sum이 오게된다..
  resultHandler(sum);
};

const showResult = (messageText, result) => {
  console.log(messageText + ' ' + result);
};

// ()가 없기때문에 showResult를 즉시실행하진 않는다.
combine(showResult.bind(this, '모든 수를 더하면:'), 'ADD', 1, 5, 10, -3, 6, 10);
combine(showResult.bind(this, '모든 수를 빼면:'), 'SUBTRACT', 1, 5, 10, -3, 6, 10);
```
- bind() 메소드가 호출되면 새로운 함수를 생성한다. 
- 받게되는 첫 인자의 값은 this 키워드를 설정하고, 이어지는 인자들은 바인드된 함수의 인수에 제공된다.
- bind() 메서드는 최소 두 개의 인자를 사용한다.

### bind() 예제
<pre><code>Function.bind(thisArg, [arg1, arg2, ...])</code></pre>

```javascript
mySite = {
  name: 'webisfree',
  getSite: function() {
    return this.name;
  }
}
mySite.getSite(); // 'webisfree'

getYourSite = mySite.getSite;
getYourSite(); // undefined

getMySite = getYourSite.bind(mySite);
getMySite(); // 'webisfree'
```

- bind()를 사용하면 this가 어떤 인스턴스를 가리킬 것인지 선택할 수 있다.

```javascript
function calculate(operation) {
  if (operation === 'ADD') {
    currentResult += enteredNumber;
  } else if (operation === 'SUBTRACT') {
    currentResult -= enteredNumber;
  }
}

// calculate가 즉시실행돼서 인자를 전달할수 없다..
// addBtn.addEventListener('click', calculate('ADD'));
// addBtn.addEventListener('click', calculate('SUBTARCT'));
// bind메서드를 사용해서 즉시실행되지 않기 때문에 인자를 전달 가능
addBtn.addEventListener('click', calculate.bind(this, 'ADD'));
addBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT'));
```

- bind() 메서드를 사용해서 즉시실행하지않고 인자를 전달해서 특정 시점에 함수를 실행하고 싶을때도 사용된다..

## call() & apply()

