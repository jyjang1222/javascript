const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(usrInput.value);
}

function createDescAndOutput(prevResult, operater, inputNumber) {
  calcDescription = `${prevResult} ${operater} ${inputNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = getUserNumberInput();
  initialResult = currentResult;
  //   const calcDescription = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  //   outputResult(currentResult, calcDescription);
  createDescAndOutput(initialResult, '+', enteredNumber);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  //   const calcDescription = `${currentResult} - ${enteredNumber}`;
  currentResult = currentResult - enteredNumber;
  //   outputResult(currentResult, calcDescription);
  createDescAndOutput(initialResult, '-', enteredNumber);
}
