//variables
const minNum = document.querySelector('#min-num');
const maxNum = document.querySelector('#max-num');
const resultNum = document.querySelector('#result-num');
const btnCalculate = document.querySelector('#calculate');

btnCalculate.addEventListener('click', (e) => {
    e.preventDefault();
    if(minNum.value == '' || maxNum.value == ''){
        resultNum.value = 'تمامی مقادیر را کامل نمائید!'
        return;
    }
    resultNum.value = calculateRnd(parseInt(minNum.value), parseInt(maxNum.value));
})

function calculateRnd(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
