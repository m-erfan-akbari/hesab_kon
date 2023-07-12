// Variables
var dataPicker = document.getElementById('date-picker');
var chooseDate = document.getElementById('choose-date');

var age_container = document.getElementById('calculate');

var age_year = document.getElementById('year');
var age_month = document.getElementById('month');
var age_day = document.getElementById('day');
var age_hour = document.getElementById('hour');
var age_minute = document.getElementById('minute');
var age_second = document.getElementById('second');

//date picker
jalaliDatepicker.startWatch();

// hide calucate
dataPicker.addEventListener('focus', function(){
    age_container.classList.remove('show');
    age_container.style.height = "0";
})

// show calucate
dataPicker.addEventListener('change', function(){

    var persianDOB = `${dataPicker.value.slice(0,4)}/${dataPicker.value.slice(5,7)}/${dataPicker.value.slice(8,10)}`;
    var gregorianDOB = moment.from(persianDOB, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
    var gregorianDOBDashed = `${gregorianDOB.slice(0,4)}-${gregorianDOB.slice(5,7)}-${gregorianDOB.slice(8,10)}`;
    var options = {year: 'numeric', month: 'long', day: 'numeric'};
    var selectDate = new Date(gregorianDOBDashed);
    var DOB = selectDate.toLocaleDateString('fa-IR', options);
    chooseDate.innerHTML = DOB;
    var miliseconds_DOB = Date.parse(selectDate.toLocaleDateString('en-EG', options));
    var miliseconds_now = Date.now();
    var miliseconds_age = miliseconds_now - miliseconds_DOB;
    
    if(miliseconds_age >= 0){
        var person_age = {
            second: miliseconds_age / 1000
        }
        person_age.minute = person_age['second'] / 60;
        person_age.hour = person_age['minute'] / 60;
        person_age.day = person_age['hour'] / 24;
        person_age.month = person_age['day'] / 30;
        person_age.year = person_age['day'] / 365;
        
        age_container.classList.add('show');
        age_container.style.height = "auto";
    
        age_second.innerHTML = Math.floor(person_age.second);
        age_minute.innerHTML = Math.floor(person_age.minute);
        age_hour.innerHTML = Math.floor(person_age.hour);
        age_day.innerHTML = Math.floor(person_age.day);
        age_month.innerHTML = Math.floor(person_age.month);
        age_year.innerHTML = Math.floor(person_age.year);
        dataPicker.blur();
    }
    else{
        alert('سن وارد شده اشتباه است.');
    }

})


const animated = document.querySelector('.container');
const hidden_elements = document.querySelectorAll('.visually-hidden');
const hideByOpacity_elements = document.querySelectorAll('.opacity-0');

// unroll by mouse hover
animated.addEventListener('mouseover', () =>{
    animated.style.width = "100%";
    setTimeout(() => {
        hidden_elements.forEach(element => {
            element.classList.remove('visually-hidden');
        })
        hideByOpacity_elements.forEach(element => {
            element.classList.remove('opacity-0');
        })

    }, 900)
})