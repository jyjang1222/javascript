const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// 사용자 입력을 받아옴
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// 계산 로그 생성과 출력
function createAndWriteOutput(operater, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operater} ${calcNumber}`;
  outputResult(currentResult, calcDescription); //vender.js 에서 옴
}

// 로그생성후 logEntries배열에 추가
function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
  const logEntry = {
    operation: operationIdentifier, //연산유형
    prevResult: prevResult, //이전결과
    number: operationNumber, //입력값
    result: newResult //이후결과
  };
  logEntries.push(logEntry);
}

function add() {
  const enteredNumber = getUserNumberInput();
  // console.log(enteredNumber, currentResult);
  const initialResult = currentResult; //초기결과
  currentResult += enteredNumber; //현재결과에 입력값 더함
  createAndWriteOutput('+', initialResult, enteredNumber);
  writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
  writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
  writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
