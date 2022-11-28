# 섹션2: 기초: 변수, 자료형, 연산&함수
## 학습내용
### 변수의 이름 규칙
1. 맨처음에 숫자와 **$** 와 **_** 를 제외한 특수문자를 사용해서는 안된다.
2. 소문자로 시작하고 대문자로 구분하는 카멜표기법을 사용한다.
3. **공백** 이 있어서는 안된다.

### 변수의 종류
* let
  - let userName = 'Minsu';
* const
  - const pi = 3.14
const를 자주 사용하자

### 연산자의 종류
* +더하기
* -빼기
* *곱하기
* /나누기
* % 나머지
* ** 제곱
* = 할당

### 자료형
* Numbers
  - 2 35 3.14
* Strings
  - '' "" ``

### 이스케이프 문자
* 이스케이프 문자 백슬래시\ 는 특별한 의미를 갖는다.
  - \\' '출력, \\" "출력, \\n 줄바꿈, \\\\ \출력

### 템플릿 리터럴
* 백틱`을 활용하면 문자열안에 표현식을 적을 수 있다.  
```javascript
`(${defaultResult} + 10) * 3 / 2 - 1`
```

* 이러한 과정을 **템플릿 리터럴** 이라고 부른다

### 코드 스타일, 컨벤션 & 구문
* 여러 줄에 걸쳐 긴 표현식을 구조화하여 더 읽기 쉽게 만들 수 있습니다
```javascript
let someResult = 5 + 10 - 3 + 22 - 10000 + 5.344 * 1200;
```
```javascript
let someResult = 5 +
                 10 - 3 + 22 - 10000 + 5.344 *
                 1200;
```
  
* 자바스크립트는 첫 번째 줄 문자열의 끝을 찾을 수 없고 - 다른 줄에서는 찾지 않는다. 문자열은 항상 한 줄에 있어야 한다.

```javascript
let someLongString = 'Hi, this is going to be a bit longer, ' +
                     'so maybe split it across multiple lines by ' +
                     'concatenating multiple strings!';
```

* 아래의 구문은 오류가 발생한다.
```javascript
let someLongString = 'Hi, this is going to be a bit longer, 
                      so maybe split it across multiple lines by 
                      concatenating multiple strings!';
```

### 전역 / 지역 변수
1. 전역(global) 변수는 함수의 외부에서 선언된 변수를 의미한다.
2. 전역 변수는 함수 내에서도 참조(사용)가 가능하다.
3. 함수내에 선언된 변수는 지역(local) (스코프) 변수로 불리며 함수외부에서 사용이 불가하다.
4. 변수의 참조(사용) 가능한 유효(가능) 범위를 스코프(scope)라고 한다.

* 전역변수와 지역변수에 동일한 변수를 선언한다면?
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
```
만일 동일 스코프에서 동일한 이름의 변수를 선언하게되면 오류가 발생하게 된다.

### 기타 조언
1. 끝에 ;을 사용하는 것은 선택이지만 다른 프래그래밍 언어에서는 끝에 ;이 필수인 언어가 많으므로 끝에 ;을 사용하는 것이 좋다.
2. 함수와 같이 중괄호 뒤에는 세미콜론을 사용하지 않는다.
3. 브라우저는 스크립트를 실행하기 전에 자동으로 모든 함수를 등록한다. 그러기 때문에 자바스크립트는 함수 선언을 밑에서 해도 위에서 호출이 가능하다. (함수 정의는 파일위쪽에 하는 것이 가독성에 좋다)