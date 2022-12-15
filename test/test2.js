// 학생이 푼것

/*
    아래 배열을 출력하는데 다음과 같은 조건으로 출력한다. 
    각각의 배열값 뒤에 있는 값을 전부 출력한다. 
    해당되는 값을 임시배열에 담아서 출력하면된다.
    [예시]
        10 => 30, 40, 50, 30, 20, 10
        30 => 40, 50, 30, 20, 10
        40 => 50, 30, 20, 10
        50 => 30, 20, 10
        30 => 20, 10
        20 => 10
        10 => 
        
*/

arr = [10, 30, 40, 50, 30, 20, 10]
for (var i = 0; i < arr.length; i++) {
    var a = [];
    var ai = 0;
    for (var j = i + 1; j < arr.length; j++) {
        a[ai] = arr[j]
        ai += 1;
    }
    console.log(a);
}



/*
    아래 배열을 출력하는데 다음과 같은 조건으로 출력한다. 
    각각의 배열값보다 큰값들을  찾아서 전부 출력한다. 
    해당되는 값을 임시배열에 담아서 출력하면된다.
    [예시]
        10 => 30, 40, 50, 30, 20
        30 => 40, 50, 
        40 => 50
        50 => 
        30 => 40, 50
        20 => 30, 40, 50, 
        10 => 30, 40, 50, 30, 20 
        
*/
console.log("[문제1]")
arr = [10, 30, 40, 50, 30, 20, 10]
for (var i = 0; i < arr.length; i++) {

    var a = [];
    var ai = 0;
    for (var j = 0; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            a[ai] = arr[j];
            ai++
        }
    }
    console.log(a);
}



/*
    아래 배열을 출력하는데 다음과 같은 조건으로 출력한다. 
    각각의 배열값보다 앞에 있는 값을 전부 출력한다. 
    해당되는 값을 임시배열에 담아서 출력하면된다.

    [예시]
        10 => 
        30 => 10
        40 => 10, 30
        50 => 10, 30, 40
        30 => 10, 30, 40, 50
        20 => 10, 30, 40, 50, 30
        10 => 10, 30, 40, 50, 30 , 20 
*/
console.log("[문제2]")
arr = [10, 30, 40, 50, 30, 20, 10]

for (var i = 0; i < arr.length; i++) {

    var a = [];
    var ai = 0;
    for (var j = 0; j < i; j++) {
        a[ai] = arr[j];
        ai++
    }
    console.log(a);
}



/*
    [문제1]
        numList , nameList , scoreList 는 한쌍으로 각각 번호 이름 점수이다. 

        searchList는 학생들이 본인 점수를 위해 검색한 순서이다. 
        각 순서에 맞는 이름과 점수를 출력해주시오. 
        단 , 없는 번호인 경우는 "x" 를 출력하시오.
    [예시]
        1001 => "김철수" , 100
        1003 => "조영희" , 65
        1006 => "이정아" , 90
        1003 => "조영희" , 65
        1007 => "x"
        1002 => "이만수" , 32
*/
console.log("[문제3]")
numList = [1001, 1002, 1003, 1004, 1005, 1006];
nameList = ["김철수", "이만수", "조영희", "주정민", "김소희", "이정아"];
scoreList = [100, 32, 65, 77, 12, 90]

searchList = [1001, 1003, 1006, 1003, 1007, 1002];

for (var i = 0; i < searchList.length; i++) {

    var check = false;
    for (var j = 0; j < numList.length; j++) {
        if (searchList[i] == numList[j]) {
            var idx = j;
            check = true;
        }
    }
    if (check == true) {
        console.log(searchList[i] + " ==> " + nameList[idx] + ", " + scoreList[idx]);
    } else {
        console.log(searchList[i] + " ==> x");
    }
}



/*
    [문제]
        랜덤으로 3~5 사이의 숫자를 저장후 다음과 같은 규칙으로 출력하시오. 
        [1] 배열의 맨앞에서 부터 랜덤숫자만큼씩 만 임시배열에 담아서 출력한다.
        [2] 한칸씩 전진하면서 1번을 반복한다.      
        [3] 단 출력할숫자가 랜덤숫자보다 부족하면 종료한다. 
        해당되는 값을 임시배열에 담아서 출력하면된다.
    [예시]
        r = 4

        [1,3,3,6]
        [3,3,6,5]
        [3,6,5,6]
        [6,5,6,1]
*/
console.log("[문제4]")
arr = [1, 3, 3, 6, 5, 6, 1];

var r = parseInt(Math.random() * 3) + 3
r = 4
console.log("r = " + r);

for (var i = 0; i < arr.length - r + 1; i++) {
    var a = [];
    var ai = 0
    for (var j = 0; j < r; j++) {
        a[ai] = arr[i + j]
        ai++;
    }
    console.log(a);
}



/*
    [문제]
        [1] 랜덤숫자 1~6을 저장후 arr 에서 랜덤숫자에 해당하는값은 전부 0으로 만든다. 
        [2] arr의 모든 숫자가 0이될때까지 1번을 반복한다. 

    [예시]
        r = 4  [1,3,3,6,5,6,1]
        r = 6  [1,3,3,0,5,0,1]
        r = 2  [1,3,3,0,5,0,1]
        r = 1  [0,3,3,0,5,0,0]
        ...
        ...
        [0,0,0,0,0,0,0] 종료.

*/
console.log("[문제5]")
arr = [1, 3, 3, 6, 5, 6, 1];

while (true) {
    var r = parseInt(Math.random() * 6) + 1;
    for (var i = 0; i < arr.length; i++) {
        if (r == arr[i]) {
            arr[i] = 0;
        }
    }
    console.log("r = " + r + " [" + arr + "]");

    var check = true;
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] != 0) {
            check = false;
        }
    }

    if (check == true) {
        break;
    }
}
