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