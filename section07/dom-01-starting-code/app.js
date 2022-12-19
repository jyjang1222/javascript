const ul = document.querySelector('ul');
const h1 = document.querySelector('h1');
h1.className = 'blue';

const button = document.querySelector('button');
button.addEventListener('click', () => {
    ul.classList.toggle('visible');
    ul.classList.toggle('invisible');
})

const section = document.querySelector('section');
section.style.backgroundColor = 'lightgreen';
// section.innerHTML = '<h2>New title</h2>'
// ul.innerHTML += '<li>item 4</li>';
const div = document.querySelector('div');
// div.innerHTML += '<p>Something went wrong!</p>';
div.insertAdjacentHTML('beforeend', '<p>Something</p>');

const newLi = document.createElement('li');
newLi.textContent = 'item 4';
