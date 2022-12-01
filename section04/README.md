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

## 기타

- 배열이나 객체는 참조형이기 때문에 값이 아니라 메모리 주소를 저장한다.
- 리터럴값을 넣어 하드코딩한 const 변수명은 값이 변경되지 않음을 강조하기 위해 모두 대문자로 작성하고 스네이크 표기법으로 쓰는 것이 일반적이다.
- 강사는 이벤트핸들러와 연관된 함수일 때는 함수명 끝에 'Handler'를 추가하는 명명규칙을 사용하는데 참고해서 따라할지 자기만의 규칙을 정할지 하자..

```javascript
function attackHandler() {}
attackBtn.addEventListener('click', attackHandler);
```
