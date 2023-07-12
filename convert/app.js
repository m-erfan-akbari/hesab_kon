//variables
const inputElement = document.querySelector('.input-value');
const outputElement = document.querySelector('.output-value');
const inputUnit = document.querySelector('.input-unit');
const outputUnit = document.querySelector('.output-unit');

let distanceObj = {
    m: 'متر',
    km: 'کیلومتر',
    mile: 'مایل',
    inch: 'اینچ',
    foot: 'پا (فوت)',
    yard: 'یارد',
    dm: 'دسی متر',
    cm: 'سانتی متر',
    mm: 'میلی متر'
}

let temperatureObj = {
    tempC: 'سلسیوس (سانتی گراد)',
    tempK: 'کلوین',
    tempF: 'فارنهایت',
}

let angleObj = {
    deg: 'درجه',
    rad: 'رادیان',
    grad: 'گراد',
}

let inputNum, integratedUnit, outputValue, inputUnitName, outputUnitName;

// clear hash when page load
window.addEventListener('load', () => {
    window.location.hash = '';
})

window.addEventListener('hashchange', () => {
    document.querySelector('.warning-choose-type').setAttribute('hidden', '');
    router();
})

// check hash
function router(){
    switch(location.hash){
        case '#distance':
            render('distance');
            break;
        case '#temperature':
            render('temperature');
            break;
        case '#angle':
            render('angle');
            break;
        case '#area':
            render('area');
            break;
        case '#volume':
            render('volume');
            break;
    }
    inputElement.value = '';
    outputElement.setAttribute('hidden','');
}

function render(data){
    switch (data) {
        case 'distance':
            createNewSelect(distanceObj, inputUnit);
            createNewSelect(distanceObj, outputUnit);
            break;
        case 'temperature':
            createNewSelect(temperatureObj, inputUnit);
            createNewSelect(temperatureObj, outputUnit);
            break;
        case 'angle':
            createNewSelect(angleObj, inputUnit);
            createNewSelect(angleObj, outputUnit);
            break;
        default:
            break;
    }
}

// create list with an object
function createNewSelect(obj, selectElement){
    selectElement.innerHTML = '';
    for (const key in obj) {
        let option = document.createElement('option');
        option.value = key;
        option.textContent = obj[key];
        selectElement.appendChild(option);
    };
}

// check input is a number
inputElement.addEventListener('beforeinput', (e) => {
    if(parseFloat(e.data) != e.data && e.data != '.' && e.data != null){
        e.preventDefault();
    }
    if(window.location.hash == ''){
        document.querySelector('.warning-choose-type').removeAttribute('hidden');
        e.preventDefault();
    }
});

// set input value
inputElement.addEventListener('keyup', (e) => {
    if(e.target.value === ''){
        outputElement.setAttribute('hidden','');
    }
    else{
        outputElement.removeAttribute('hidden');
    }
    inputNum = e.target.value;

    outputElement.textContent = update();
});

inputUnit.addEventListener('change', (e) => {
    outputElement.textContent = update();
});

outputUnit.addEventListener('change', (e) => {
    outputElement.textContent = update();
});

function inputConvert(element){
    switch (element.value) {
        case 'm':
            integratedUnit = inputNum;
            inputUnitName = 'متر';
            break;
        case 'km':
            integratedUnit = inputNum * 1000;
            inputUnitName = 'کیلو متر';
            break;
        case 'mile':
            integratedUnit = inputNum * 1609.3439798948;
            inputUnitName = 'مایل';
            break;
        case 'inch':
            integratedUnit = inputNum * 0.0254;
            inputUnitName = 'اینچ';
            break; 
        case 'yard':
            integratedUnit = inputNum * 0.9144;
            inputUnitName = 'یارد';
            break;
        case 'foot':
            integratedUnit = inputNum * 0.3048;
            inputUnitName = 'پا';
            break;
        case 'cm':
            integratedUnit = inputNum * 0.01;
            inputUnitName = 'سانتی متر';
            break;
        case 'dm':
            integratedUnit = inputNum * 0.1;
            inputUnitName = 'دسی متر';
            break; 
        case 'mm':
            integratedUnit = inputNum * 0.001;
            inputUnitName = 'میلی متر';  
            break;
        
        case 'tempC':
            integratedUnit = inputNum;
            inputUnitName = 'سلسیوس (سانتی گراد)';
            break;

        case 'tempK':
            integratedUnit = parseFloat(inputNum) - 273.15;
            inputUnitName = 'کلوین';
            break;
        
        case 'tempF':
            integratedUnit = (inputNum - 32) / (1.8);
            inputUnitName = 'فارنهایت';
            break;
        case 'deg':
            integratedUnit = inputNum;
            inputUnitName = 'درجه';
            break;
        case 'rad':
            integratedUnit = (inputNum * (180 / Math.PI));
            inputUnitName = 'رادیان';
            break;
        case 'grad':
            integratedUnit = (inputNum * (180/200));
            inputUnitName = 'گرادیان';
            break;
    }
}

function outputConvert(element){
    switch (element.value) {
        case 'm':
            outputValue = integratedUnit;
            outputUnitName = 'متر';
            break;
        case 'km':
            outputValue = integratedUnit * 0.001;
            outputUnitName = 'کیلو متر';
            break;
        case 'mile':
            outputValue = integratedUnit * 0.0006213712;
            outputUnitName = 'مایل';
            break;
        case 'inch':
            outputValue = integratedUnit * 39.37007874;
            outputUnitName = 'اینچ';
            break; 
        case 'yard':
            outputValue = integratedUnit * 1.0936132983;
            outputUnitName = 'یارد';
            break;
        case 'foot':
            outputValue = integratedUnit * 3.280839895;
            outputUnitName = 'پا';
            break;
        case 'cm':
            outputValue = integratedUnit * 100;
            outputUnitName = 'سانتی متر';
            break;
        case 'dm':
            outputValue = integratedUnit * 10;
            outputUnitName = 'دسی متر';
            break; 
        case 'mm':
            outputValue = integratedUnit * 1000;
            outputUnitName = 'میلی متر';  
            break;

        case 'tempC':
            outputValue = integratedUnit;
            outputUnitName = 'سلسیوس (سانتی گراد)';
            break;

        case 'tempK':
            outputValue = parseFloat(integratedUnit) + 273.15;
            outputUnitName = 'کلوین';
            break;
        
        case 'tempF':
            outputValue = integratedUnit * 1.8 + 32;
            outputUnitName = 'فارنهایت';
            break;
        case 'deg':
            outputValue = integratedUnit;
            outputUnitName = 'درجه';
            break;
        case 'rad':
            outputValue = (integratedUnit * (Math.PI / 180));
            outputUnitName = 'رادیان';
            break;
        case 'grad':
            outputValue = (integratedUnit * (200/180));
            outputUnitName = 'گرادیان';
            break;
    }
}

function update(){
    inputConvert(inputUnit);
    outputConvert(outputUnit);
    if(inputUnitName == outputUnitName){
        return `${inputNum} ${inputUnitName} برابر است با ${inputNum} ${outputUnitName}`;
    }
    else{
        return `${inputNum} ${inputUnitName} برابر است با ${outputValue} ${outputUnitName}`;;
    }
}

