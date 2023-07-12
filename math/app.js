//variables
const display = document.querySelector('.display');
const btnNumbers = document.querySelectorAll('.btn-number');
const btnClear = document.querySelector('.btn-clear');
const btnDelete = document.querySelector('.btn-delete');
const btnEqual = document.querySelector('.btn-equal');

btnNumbers.forEach(element => {
    element.addEventListener('click', (e) => {
        if(display.textContent.length < 20){
            display.textContent += e.target.textContent;
        }
    })
});

btnClear.addEventListener('click', () => {
    display.textContent = '';
});

btnDelete.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
});

btnEqual.addEventListener('click', () => {
    if(display.textContent === '')return;
    display.textContent = eval(display.textContent);
});

