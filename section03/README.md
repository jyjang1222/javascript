# 섹션3:효율적인 개발 & 디버깅

## 효율적인 개발 팁

- 효율적인 코딩 방법
  - 에디터의 설정을 손본다
  - 자동완성 & 단축키를 사용
  - 코드를 작성할때 나오는 hint를 활용
  - 에디터 확장 플러그인을 활용
- 해결법 찾기
  - MDN 사이트를 활용
  - 구글링 하는 법을 배우자
  - 시행착오를 겪기
- 디버깅
  - 에러메세지를 읽자
  - 로그를 활용하자(파이썬이라면print 자스라면console)
  - 디버깅 도구(크롬)를 활용

## 오류메세지 해결 팁

1. 에디터에 오류가 뜨지 않는 경우

- 다른 파일에 정의된 함수라면 에러가 뜨지않는다.
  - 예) parse(); - 오타, outputResult() - 다른 파일에서 정의;
  - 브라우저의 개발자도구에서 오류 확인가능

2. 브라우저 개발자도구에서도 오류가 뜨지 않는 경우

- 코드 중간에 console.log()를 활용하여 과정 지켜보기
- 개발자 도구를 활용

## 개발자 도구를 활용한 디버깅

1. 중단점(Breakpoints)을 활용

- source 카테고리 소스파일에서 멈추고자하는 라인 번호를 클릭하면 중단점 설정이 가능하다.
- 중단점을 설정하면 해당 코드의 실행이 멈추고 현재의 값을 확인가능하다.

```javascript
// 개발자도구 화면
function add() {
  const enteredNumber = getUserNumberInput(); //enteredNumber = "6"
  console.log(enteredNumber, currentResult);
  const initialResult = currentResult; //initialResult = "04"
  currentResult += enteredNumber; //enteredNumber = "6"
  createAndWriteOutput('+', initialResult, enteredNumber);
  writeToLog('ADD', initialResult, enteredNumber, currentResult);
}
```

2. 개발자도구 제어 버튼

- Resume script execution
  - 모든 코드를 수행시키고 디버그 종료
- Step over next function call
  - 코드 한줄 수행, 함수(function)를 만날 경우에는 함수는 수행하나 함수 안으로 들어가지 않음
- Step into next function call
  - 코드 한줄 수행, 함수를 만날 경우에는 해당 함수 안으로 들어가 수행 과정을 보여줌
- Step out of current function
  - 현재 함수에서 빠져나오기

3. 호출스택(Call Stack) - 호출된 모든 함수 목록

- 함수를 호출하면 호출스택에 표시된다.
  - 표시된 함수를 클릭하면 해당 함수로 이동할 수 있다.
- 나중에 실행된 함수가 위로 가기때문에 코드 실행 순서를 알 수 있다.

4. Scope & Watch

- 호출스택 오른쪽 **scope** 창에는 사용할 수있는 변수와 현재값 확인이 가능하다.
  - 현재값을 임의로 입력해 변경해서 테스트해보는 것도 가능하다.
- 호출스택 오른쪽 **watch** 창에는 값을 감시할 변수 혹은 표현식을 설정하여 코드가 실행될때마다 결과를 확인이 가능하다.
  - 코드 실행 중 변경사항을 추적하는데 유용하다.
- 페이지를 새로고침하거나 함수가 종료되면 호출스택에서 내려가기 때문에 scope나 watch에 입력한 사항은 초기화된다.

5. 조건부 중단점(conditional breakpoint) 설정

- source 카테고리 소스파일에서 멈추고자하는 라인번호에 오른쪽 클릭 add conditional breakpoint를 클릭하면 조건부 중단점 설정이 가능하다.
  - 예) getUserNumberInput() > 99 - 입력값이 99초과인 경우 중단하여 디버깅

6. 이벤트 리스너 중단점(Event Listener Breakpoints)

   - 멈추고자하는 해당 이벤트에 체크하고 해당 이벤트가 일어나면 일시정지 된다.
     - 예를들면 마우스클릭에 중단점을 체크하면 모든 마우스 클릭이 중단이 되는것이 아니라 코드에서 클릭 이벤트를 등록한 것만 중단이 된다.

7. 개발자도구에서 직접 코드 변경해서 테스트

   - 테스트 하고자하는 소스파일에 개발자도구에서 직접 코드를 변경해 저장하여 테스트해볼 수 있다.(로컬저장x)
   <!-- 테스트해보니 적용안돼서 확인필요 -->
