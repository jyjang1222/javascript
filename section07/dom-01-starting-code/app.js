const ul = document.querySelector('ul');
ul.style.backgroundColor = 'lightgreen';
const h1 = document.querySelector('h1');
h1.className = 'blue';
const button = document.querySelector('button');
button.addEventListener('click', () => {
    ul.classList.toggle('visible');
    ul.classList.toggle('invisible');
})