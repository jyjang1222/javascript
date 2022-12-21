# 섹션7: 자바스크립트 DOM으로 작업하기

## DOM (Document Object Model) 이란

- 문서 객체 모델(DOM)은 HTML 문서에 접근하기 위한 일종의 인터페이스이다.
- DOM 은 문서의 구조화된(계층화된) 표현(structured representation)을 제공하며 프로그래밍 언어(javascript)가 DOM 구조에 접근할 수 있는 방법을 제공하여 그들이 문서 구조, 스타일, 내용 등을 변경할 수 있게 돕는다.
- DOM 은 nodes와 objects로 문서를 표현하고 이들은 웹 페이지를 스크립트 또는 프로그래밍 언어들에서 사용될 수 있게 연결시켜주는 역할을 담당한다.

## document & window 객체
- window 객체는 브라우저에 있는 최상위 전역 객체이고 window 객체의 요소들을 사용할때 자동으로 window. 을 추가한다.
- document 는 window 에 속해있어서 document만 입력해도 접근이 가능하다.
- window는 현재 로드된 탭이고 다른 탭의 웹페이지에서 정보를 가져오는 것은 보안상 불가능하다.

## DOM 노드 트리
```javascript
/*
HTML  - Element Node
|____  - Text Node
    HEAD
    |____
        TITLE
        The DOM
    BODY
    |____
        HEADER
        |________
            H1
            header
        MAIN
        |________
            P
            paragraph
*/
```

- **브라우저는 HTML 코드를 분석해서 그에 대한 구조화된 객체 표현(DOM)을 생성한다**
- 모든 HTML 요소에 대해 **요소 노드(Element Node)**가 생성된다.
- 이 노드들간의 관계는 부모와 자식 노드로 불린다.
- 결국 브라우저는 HTML 요소들의 부모자식 관계로 된 노드트리를 만들어 추적한다.
- 브라우저는 HTML 태그를 가져와서 객체를 생성할 뿐만 아니라 **텍스트 노드**도 생성한다.
- | 는 줄바꿈을 표시하고 _ 공백을 표시한다.

## DOM 요소 노드 선택하기

### head, body, html 선택하기

```javascript
document.body // <body> 요소 노드를 선택
document.head // <head> 요소 노드를 선택
document.documentElement // <html> 요소 노드를 선택
```

### querySelector()

```javascript
// document의 자식노드 중 css선택자에 대응하는 첫번째 요소를 찾는다
const header = document.querySelector('header'); //typeof(header) == object
document.querySelector('.list-item');
document.querySelector('#main-title');
document.querySelector('ul li:last-of-type');
header.querySelector('p');
```
```javascript
element.querySelector(selector)
```

- querySelector() 는 css선택자에 대응하는 첫번째 요소를 반환한다.
- 요소를 찾을 수 없는 경우에는 null을 반환한다.
- 변수에 해당 요소 노드의 주소를 할당할 수있다.
- elem의 자식 요소 중 주어진 CSS 선택자에 대응하는 요소 모두를 반환한다

### querySelectorAll()

```javascript
document.querySelectorAll('.list-item');
```

- querySelectorAll 은 css선택자에 대응하는 모든 요소를 **NodeList**로 반환한다.
- 요소를 찾을 수 없는 경우에는 **빈 NodeList**을 반환한다.

### getElementById()

```javascript
// document의 자식노드 중 id가 main-title을 찾는다
document.getElementById('main-title');
```

- getElementById 는 특정 id값을 가진 요소를 반환한다.
- 요소를 찾을 수 없는 경우에는 null을 반환한다.

### getElementsByClassName()
```javascript
document.getElementsByClassName('list-item');
```

- 클래스명과 일치하는 요소를 가져와서 **HTMLCollection**을 반환한다.
- 일치하는 요소가 없으면 **빈 HTMLCollection**을 반환한다.

### getElementsByTagName()

```javascript
document.getElementsByClassName('li');
```

- 클래스명과 일치하는 요소를 가져와서 **HTMLCollection**을 반환한다.
- 일치하는 요소가 없으면 **빈 HTMLCollection**을 반환한다.

## HTMLCollection vs NodeList

```html
<!DOCTYPE html>
  <head>
    <style>
      .red {
        color: red;
      }
      .blue {
        color: blue;
      }
    </style>
  </head>
  <body>
    <ul id="fruits">
      <li class="red">Apple</li>
      <li class="red">Banana</li>
      <li class="red">Orange</li>
    </ul>
  </body>
</html>
```

### HTMLCollection
- HTMLCollection은 **getElementsByClassName** 과 **getElementsByTagName** 메서드를 통해 얻을수 있는 유사 배열 객체이다.
- HTMLCollection은 일반적인 배열과 다르게 내부 요소(노드)에 변화가 생기면 이를 즉시 반영(**live**)한다.
```javascript
const $fruits = document.getElementsByClassName("red");

for (let i = 0; i < $fruits.length; i++) {
// li 요소들의 클래스명을 "blue" 로 변경합니다.
$fruits[i].className = "blue";
} 
```
```javascript
// A. class="red" 인 요소의 HTMLCollection 을 획득합니다.
// $fruits = [li.red, li.red, li.red]
const $fruits = document.getElementsByClassName("red");

// B. 1번째 루프 : HTMLCollection의 0번째 노드의 클래스명을 "blue" 로 변경합니다.
// 따라서 살아 있는 객체인 $fruits의 1번째 요소는 HTMLCollection에서 제거됩니다.
// $fruits = [li.red, li.red], i = 1

// C. 2번째 루프 : i는 1이므로 [li.red, li.red]의 두 번째 요소의 클래스명 "blue"로 변경합니다.
// $fruits = [li.red], i = 1
// 따라서 $fruits에는 [li.red]가 하나 남은 채로 루프가 종료됩니다.
for (let i = 0; i < $fruits.length; i++) {
  $fruits[i].className = "blue";
}
```
```html
<!-- 결과값 -->
<ul id="fruits">
    <li class="blue">Apple</li>
    <li class="red">Banana</li>
    <li class="blue">Orange</li>
</ul>
```
- 이처럼 HTMLCollection의 내부 요소들을 실시간(live)으로 감지해 반영하는 특성으로 HTMLCollection에 반복문을 사용할 때는 주의해야한다.

### NodeList

- NodeList 객체는 **querySelectorAll** 메서드가 반환하는 객체로 HTMLCollection이 갖고 있던 부작용을 해결하기 위해 등장했다
- 요소(노드)의 변경을 실시간으로 감지하지 않는다(**non-live**)는 특징을 가진 유사 배열 객체이다.
- - HTMLCollection 보다 유연하고 다양한 쿼리를 사용가능해서 더 자주쓰인다.

```javascript
const $fruits = document.querySelectorAll(".red");

for (let i = 0; i < $fruits.length; i++) {
  $fruits[i].className = "blue";
}
```
```html
<!-- 모두 blue로 변경된 모습 -->
<ul id="fruits">
    <li class="blue">Apple</li>
    <li class="blue">Banana</li>
    <li class="blue">Orange</li>
</ul>
```
- 하지만 항상 querySelectorAll 이 옳은 것은 아니다.
- NodeList 역시 항상 정적인 객체임을 보장하지는 않는데, childNodes 속성 통해 얻은 NodeList는 HTMLCollection과 동일하게 요소노드들을 실시간으로 감지해서 이런 경우에는 NodeList 역시 HTMLCollection 이 갖고 있던 부작용을 그대로 갖게 된다..

### 해결법

```javascript
const $fruits = document.querySelectorAll(".red");
const fruits = Array.from($fruits)
fruits.forEach(fruitDom => fruitDom.className = "blue")
// 또는 [$fruits].forEach(fruitDom => fruitDom.className = "blue")
```

- 가장 좋은 해결책은 getElementsByClassName 이나 querySelectorAll 을 사용해 얻은 DOM 컬렉션을 배열로 치환하는 방법이다.
- Array.from 또는 분해 할당을 사용해 컬렉션을 배열로 치환하면 언제나 내부 요소가 정적임이 보장됨과 동시에, forEach 등 배열의 프로토타입이 제공하는 여러 고차 함수를 활용할 수 있다.

## DOM 프로퍼티

```javascript
const h1 = document.querySelector('#main-title');
h1.textContent;
// 'header'
h1.className;
// ''
h1.id;
// 'main-title'
h1.textContent = 'New Header';
h1.className = 'title';
h1.style.color = 'gold';
h1.style.backgroundColor = 'dodgerblue';
// console.dir(h1);
```

- 생성된 DOM 객체는 자동으로 프로퍼티가 추가된다.
- 변수에 탐색한 요소 노드를 할당할 수 있다.
- 요소노드가 할당된 변수는 HTML요소에 관련된 DOM 속성을 사용할 수 있다.
- 속성의 종류는 많고 mdn사이트나 console.dir 메서드를 활용하면 사용할 수 속성 목록을 조회 가능하다.

### elem.className
- 해당 요소 노드의 클래스명을 가져오거나 설정할 수 있다.
### elem.id
- 해당 요소 노드의 아이디명을 가져오거나 설정할 수 있다.
### elem.textContent
- 해당 요소 노드의 텍스트 노드를 가져오거나 설정할 수 있다.
### elem.style.cssProperty
- 해당 요소 노드의 css속성값를 가져오거나 설정할 수 있다.
### elem.getAttribute('attrName')
- 해당 요소 노드의 html속성값을 가져올 수 있다.
### elem.setAttribute('attrName', 'value')
- 해당 요소 노드의 html속성값을 설정할 수 있다.

## 속성(Attribute) vs 프로퍼티(Property)

- HTML 코드에서 작성된 속성은 속성(Attribute)로 불린다.
- 속성 혹은 프로퍼티(property)는 HTML 코드를 기반으로 생성된 객체에 저장된 값이다.
- 한국어로는 둘다 속성으로 부를 수 있지만 구분할때는 속성(Attribute)과 프로퍼티(Property)로 부른다.
- 속성(attribute)값을 바꾸면 프로퍼티값도 바뀌며 실시간 동기화가 이루어진다, 반대로도 마찬가지이다.
- 속성(attribute)명과 프로퍼티명은 항상 동일하지는 않다.

```html
<input type="text" id="input" class="input-style" value="enter text..">
```
```javascript
const input = document.querySelector('input');
input.id = 'inputId';  //html속성도 변경됨
input.className = 'Input-Style';  //html속성도 변경됨
input.value = 'New input text';  //UI와 프로퍼티는 바뀌지만 html속성은 바뀌지 않는다.
input.setAttribute('value', 'New input text') //html속성값을 바꿀수 있으며 UI는 실시간변경이 되지않고 속성값도 변경하지 않는다.
input.value = input.getAttribute('value');
```
- 하지만 **value**의 경우에는 value 프로퍼티를 사용해 값을 변경해도 html속성에는 실시간 동기화가 적용되지 않는다.
- 그래서 **setAttribute()** 메서드를 사용하여 html문서에도 변경사항을 적용해주거나 **getAttribute()** 메서드를 사용하여 프로퍼티에도 값을 적용해주면 된다.

## DOM 탐색(Traversing)
```html
<body>
  <ul>
    <li class="list-item red">item 1</li>
    <li class="list-item red">item 2</li>
    <li class="list-item red">item 3</li>
  </ul>
</body>
<!--
li 은 body의 후손 이고 ul의 자식이자 후손이다
body 는 li의 조상 이고 ul의 부모이자 조상이다
-->
```
- 자식(Child), 후손(Descendant), 부모(Parent), 조상(Ancestor)

### 자식노드 선택하기

```javascript
const ul = document.querySelector('ul');
ul.children // 자식 노드 중 요소 노드만을 선택 (텍스트 노드 제외)
// HTMLCollection(3) [li.list-item.red, li.list-item.red, li.list-item.red]
ul.childNodes // 모든 자식 노드를 선택
// NodeList(7) [text, li.list-item.red, text, li.list-item.red, text, li.list-item.red, text]
ul.firstChild //자식 노드 중 첫째
ul.firstElementChild //자식 요소 노드 중 첫째
ul.lastChild
ul.lastElementChild
```

### 부모노드 선택하기

```javascript
const li = document.querySelector('li');

li.parentNode // 부모 노드를 선택
li.parentElement // 부모 요소 노드를 선택

document.documentElement.parentElement // null
document.documentElement.parentNode // > #document

li.closest('body') // 아무 조상 중에서 인자로 넣은 요소 선택
```

- parentNode와 parentElement는 결과가 거의 동일하다. 요소 노드만이 자식 노드를 가질 수 있기 때문이다.
- document.documentElement는 parentNode와 parentElement의 결과가 유일하게 다르다. 하지만 document.documentElement.parentNode 이런식으로 쓸일은 거의 없다..

### 형제노드 선택하기

```javascript
const ul = document.querySelector('ul');

ul.previousSibling // > #text   바로 이전 형제 노드 선택
ul.previousElementSibling // header   바로 이전 형제 요소 노드 선택
ul.nextSibling // 바로 이후 형제 노드 선택
ul.nextElementSibling // 바로 이후 형제 요소 노드 선택
```

## DOM 탐색 속성 vs 쿼리 메서드

- querySelector로 모든 요소 노드를 선택이 가능하지만 문서의 모든 요소를 탐색하기때문에 탐색 효율은 떨어진다.
- 하지만 그렇다고 탐색 속성을 많이쓰면 가독성이 떨어지거나 html요소가 변경되면 스크립트 코드도 바꿔야하는 불상사가 생길 수 도 있다.
- html코드를 수정하더라도 관계가 보장될때 탐색 속성을 쓰는 것이 좋다.
- 어쩔수없이 관계가 바뀐다면 js 코드도 수정해야한다.

## DOM 요소 스타일링하기

```javascript
const ul = document.querySelector('ul');
ul.style.backgroundColor = 'lightgreen';
const h1 = document.querySelector('h1');
h1.className = 'blue';
const button = document.querySelector('button');
button.addEventListener('click', () => {
    ul.classList.toggle('visible');
    ul.classList.toggle('invisible');
})
```

1. style 속성을 사용해서 인라인 스타일 직접 추가 또는 수정하기
2. **className** 프로퍼티를 이용해서 클래스이름을 직접 작성해 추가제거해서 스타일 적용하기
3. **classList** 객체의 메서드를 이용해서 css클래스들을 추가 혹은 제거하기

### contains()
- 해당 클래스가 있는지 유무를 확인해서 true false 반환
### add()
- 클래스 넣기
### remove()
- 클래스 제거
### toggle()
- 해당 클래스명이 있으면 제거하고 없으면 추가
### replace() 
- replace(변경할클래스명, 치환할클래스명)

## 요소를 추가하고 삽입하는 방법

1. 자바스크립트로 요소 노드의 프로퍼티나 메서드를 이용해 HTML 코드를 문자열로 직접 작성해서 추가하기
2. document객체의 createElement 메서드로 새로운 노드를 생성한후 삽입메서드를 이용해 수동으로 삽입하기

## 요소노드의 innerHTML 프로퍼티로 요소 추가하기
```javascript
section.innerHTML = '<h2>New title</h2>'
ul.innerHTML += '<li>item 4</li>'
//li를 하나만 추가해도 추가한 li 요소 형제들의 콘텐츠를 다시 렌더링한다.
```

- 지정 요소의 자식 요소로 추가된다.
- 추가한것 외의 바뀌지않은 형제 컨텐츠들을 다시 렌더링해서 성능면에서 좋지 않다
- 추가하는 곳에 input같은 사용자입력값을 받는 태그가 있다면 사용자입력값이 초기화된다.

## 요소노드의 insertAdjacentHTML()로 요소 추가하기
```html
<!-- beforebegin -->
<p>
<!-- afterbegin -->
foo
<!-- beforeend -->
</p>
<!-- afterend -->
```
```javascript
p.insertAdjacentHTML()
```

```javascript
element.insertAdjacentHTML(position, text)
```

- position에는 beforebegin, afterbegin, beforeend, afterend 만 사용가능하다.
- innerHTML프로퍼티와 달리 이미 사용중인 요소들을 다시 렌더링하지 않는다.
- HTML 코드를 문자열로 직접 작성해서 추가하는 방식은 유지보수에 좋지않다.

## createElement() 메서드로 요소 생성하기

```javascript
let element = document.createElement(tagName[, options]);
```
```javascript
const newLi = document.createElement('li');
newLi.textContent = 'item 5';
ul.appendChild(newLi);
newLi.style.backgroundColor = 'blue';
```

- **createElement()**로 만든 요소는 객체 속성과 메소드 들을 사용할 수 있어 매우 용이하다.

## DOM 요소 삽입하기

### appendChild(), append()
```javascript
var p = document.createElement("p");
document.body.appendChild(p);

let div = document.createElement("div")
div.append("Some text", p)
```
- **appendChild()** 메서드는 한 특정 부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙인다.
- **append()** 는 appendChild()와 달리 텍스트 노드를 추가할 수 있고 한 번에 여러 개의 노드를 마지막 자식으로 추가할 수 있다.
- appendChild()는 ie에 쓰이던 메서드로 주로 append() 를 사용하게 된다.

### prepend()

- 부모 노드의 자식 노드 리스트 중 첫번째 자식으로 붙인다, append와 기능은 동일하다.
- prependChild는 존재하지 않는다.

### replaceWith()

```javascript
const div = document.createElement("div");
const p = document.createElement("p");
div.appendChild(p);
// "<div><p></p></div>"
const span = document.createElement("span");

p.replaceWith(span);

console.log(div.outerHTML);
// "<div><span></span></div>"
```

- 선택한 요소를 지우고 요소, 텍스트 노드로 교체한다.

### before() & after()

```javascript
let div = document.createElement("div");
let p = document.createElement("p");
div.appendChild(p);

let span = document.createElement("span");
let span2 = document.createElement("span");
p.before(span);
p.after(span2);

console.log(div.outerHTML);
// "<div><span></span><p></p><span></span></div>"
```

- **before()** 은 선택한 요소 바로 앞에 요소, 텍스트 노드를 추가한다.
- **after()** 은 선택한 요소 바로 뒤에 요소, 텍스트 노드를 추가한다.

### 삽입시 주의점

```html
<ul>
  <!-- item 4 삽입 -->
  <li>item 4</li>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
```
```javascript
const ul = document.querySelector('ul');
const newLi = document.createElement('li');
newLi.textContent = 'item 4';
ul.prepend(newLi);
```
```javascript
ul.lastElementChild.before(newLi);
```
```html
<ul>
  <li>item 1</li>
  <li>item 2</li>
  <!-- 이전에 삽입했던 것이 이동하게된다. -->
  <li>item 4</li>
  <li>item 3</li>
</ul>
```

- 동일한 요소로 삽입하려 하면 새로 요소를 복사하여 삽입하지 않고 위치만 변경된다.
- 대부분의 경우는 텍스트 노드는 삽입하지않고 단일 요소만 추가해서 유연성을 높인다.

## DOM 요소 복제하고 삭제하기

### cloneNode()

```javascript
const copiedNode = node.cloneNode(boolean);
```

- 해당 node의 children(텍스트노드 포함) 까지 복제하려면 true, 해당 node 만 복제하려면 false

### remove()

```javascript
const ul = document.querySelector('ul');
ul.remove(); //선택한 요소가 삭제된다.
```