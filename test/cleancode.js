/*
가위 = 0
바위 = 1
보 = 2
*/

// 리팩터링 전
철수 = parseInt(Math.random() * 3);
영희 = parseInt(Math.random() * 3);

if (철수 === 영희) {
    console.log(철수, 영희, 'draw')
} else if (철수 === 0 && 영희 === 2) {
    console.log(철수, 영희, 'win')
} else if (철수 === 1 && 영희 === 0) {
    console.log(철수, 영희, 'win')
} else if (철수 === 2 && 영희 === 1) {
    console.log(철수, 영희, 'win')
} else {
    console.log(철수, 영희, 'lose')
}


// 리팩터링 후
const SCISSORS = 0;
const ROCK = 1;
const PAPER = 2;
let result = 'lose';

if (철수 === 영희) {
    result = 'draw';
} else if (
    철수 === SCISSORS && 영희 === PAPER ||
    철수 === ROCK && 영희 === SCISSORS ||
    철수 === PAPER && 영희 === ROCK
) {
    result = 'win';
}
console.log(철수, 영희, result);