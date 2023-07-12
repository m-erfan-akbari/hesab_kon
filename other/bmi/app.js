//variables
const bmiHeight = document.querySelector('#bmi-height');
const bmiWeight = document.querySelector('#bmi-weight');
const bmiResult = document.querySelector('#bmi-result');
const btnCalculate = document.querySelector('#calculate');
const shapes = document.querySelectorAll('.shape')

btnCalculate.addEventListener('click', (e) => {
    e.preventDefault();
    if(bmiHeight.value == '' || bmiWeight.value == ''){
        bmiResult.value = 'تمامی مقادیر را کامل نمائید!'
        return;
    }
    if(bmiHeight.value <= 0 || bmiWeight.value <= 0){
        bmiResult.value = 'مقادیر اشتباه!'
        return
    }
    shapes.forEach(element => {
        element.classList.remove('shapeAnimation');
    });
    bmiResult.value = calculateBMI(bmiHeight.value, bmiWeight.value);
})

function calculateBMI(height, weight){
    height/=100;
    return Math.floor((weight / (Math.pow(height, 2))));
}