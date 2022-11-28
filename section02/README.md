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
<pre><code>`(${defaultResult} + 10) * 3 / 2 - 1`  </code></pre> 

* 이러한 과정을 **템플릿 리터럴** 이라고 부른다

### 코드 스타일, 컨벤션 & 구문
* 여러 줄에 걸쳐 긴 표현식을 구조화하여 더 읽기 쉽게 만들 수 있습니다
<pre><code>let someResult = 5 + 10 - 3 + 22 - 10000 + 5.344 * 1200;</code></pre>
<pre><code>let someResult = 5 +
                 10 - 3 + 22 - 10000 + 5.344 *
                 1200;
</code></pre>  
  
* 자바스크립트는 첫 번째 줄 문자열의 끝을 찾을 수 없고 - 다른 줄에서는 찾지 않는다. 문자열은 항상 한 줄에 있어야 한다.

<pre><code>let someLongString = 'Hi, this is going to be a bit longer, ' +
                     'so maybe split it across multiple lines by ' +
                     'concatenating multiple strings!';
</code></pre>

<pre><code>let someLongString = 'Hi, this is going to be a bit longer, 
                      so maybe split it across multiple lines by 
                      concatenating multiple strings!';
<!-- 오류구문 -->
</code></pre>

### 기타 조언
1. 끝에 ;을 사용하는 것은 선택이지만 다른 프래그래밍 언어에서는 끝에 ;이 필수인 언어가 많으므로 끝에 ;을 사용하는 것이 좋다.
2. 함수와 같이 중괄호 뒤에는 세미콜론을 사용하지 않는다.