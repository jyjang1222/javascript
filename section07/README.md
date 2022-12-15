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
- 브라우저는 HTML 코드를 분석해서 그에 대한 구조화된 객체 표현(DOM)을 생성한다.
- 모든 HTML 요소에 대해 요소 노드(Element Node)가 생성된다.
- 이 노드들간의 관계는 부모와 자식 노드로 불린다.
- 결국 브라우저는 HTML 요소들의 부모자식 관계로 된 노드트리를 만들어 추적한다.
- 브라우저는 HTML 태그를 가져와서 객체를 생성할 뿐만 아니라 텍스트 노드도 생성한다.
- | 는 줄바꿈을 표시하고 _ 공백을 표시한다.