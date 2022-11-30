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
