const head = document.head;
const body = document.body;
const html = document.documentElement;
body.style.backgroundColor = 'lightblue';

const header = document.getElementById('header');
const h1 = header.querySelector('h1');
h1.style.color = 'navy';

const container = document.querySelector('.container');
const fruitList = document.querySelector('.fruits_list');
const fruitListH2 = document.querySelector('.fruits_list_wrap h2');
fruitListH2.textContent = 'Fruits List';

const fruitsName = ['banana', 'apple', 'pear', 'peach', 'grape'];

for (let i = 0; i < fruitsName.length; i++) {
    const li = document.createElement('li');
    li.textContent = fruitsName[i];
    fruitList.append(li);
}

const buyInput = document.createElement('input');
fruitList.after(buyInput);
buyInput.setAttribute('placeholder', 'enter something');
buyInput.style.marginRight = '4px';

const buyInputH3 = document.createElement('h3');
buyInputH3.textContent = '구입하고싶은 과일 입력';
buyInput.before(buyInputH3);

const buyBtn = document.createElement('button');
buyBtn.textContent = '구입하기';
buyInput.after(buyBtn);

const buyListH3 = document.createElement('h3');
buyListH3.textContent = '구입한 과일';
buyBtn.after(buyListH3);

// 과일 구입하기 기능 구현
const buyList = document.createElement('ul');
const buyLi = document.createElement('li');

const buyFruitsLog = [{
    // 'name': '',
    // 'quantity': 0
}];

const clearBuyInput = () => {
    buyInput.value = '';
    buyInput.setAttribute('value', buyInput.value);
};

const buyFruit = input => {
    let userInput = input;
    // 해당 과일이 있는지 체크
    let chkFruit = false;
    const fruitsLi = fruitList.querySelectorAll('li');
    // const buyLog = {};
    let buyFruitName = '';

    for (const li of fruitsLi) {
        let fruitName = li.textContent;
        if (fruitName === userInput) {
            chkFruit = true;
            buyFruitName = fruitName;
        }
    }


    if (chkFruit) {
        // 구입목록에 이미 있는지 체크
        let chk = false;
        for (const log of buyFruitsLog) {
            if (buyFruitName in log) {
                chk = true;
                log['quantity'] += 1;
            }
        }
        // 
        if (chk) {
            
        }
    } else {
        alert('없는 과일입니다.');
    }
    clearBuyInput();
};

buyBtn.addEventListener('click', buyFruit.bind(buyInput.value));