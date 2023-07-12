//variables
const stopwatch_duration = document.querySelector('.stopwatch-duration');
const lapListContainer = document.querySelector('.lapListContainer');
const btnStart = document.querySelector('.stopwatch-start');
const btnPause = document.querySelector('.stopwatch-pause');
const btnLap = document.querySelector('.stopwatch-lap');

let chornometer = new StopWatch(stopwatch_duration);

btnStart.addEventListener('click',() => {
    btnStart.textContent = 'شروع';
    btnPause.textContent = 'وقفه';
    chornometer.start();
});
btnPause.addEventListener('click', () => {
    if(chornometer.pause()){
        btnStart.textContent = 'شروع';
        const lapElements = document.querySelectorAll('.lap');
        lapElements.forEach(element =>{
            element.remove();
        })
    }
    else{
        btnStart.textContent = 'ادامه';
        btnPause.textContent = 'ریست';
    }
});
btnLap.addEventListener('click', () => {
    let li = document.createElement('li');
    li.classList.add('lap');
    li.textContent = chornometer.now();
    lapListContainer.appendChild(li);
})

// StopWatch object
function StopWatch(element) {
    let startTime = 0, elapsedTime = 0, stopWatchString = "00:00:00" , paused = true, seconds, minutes, hours, Interval;

    this.start = () => {
        if(paused){
            paused = false;
            startTime = Date.now() - elapsedTime;
            Interval = setInterval(this.updateTime, 1000);
        }
    }

    this.updateTime = () => {
        elapsedTime = Date.now() - startTime;
        
        seconds = Math.floor((elapsedTime / 1000) % 60);
        minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
        hours = Math.floor((elapsedTime / (1000 * 3600)) % 60);
        
        seconds = pad(seconds);
        minutes = pad(minutes);
        hours = pad(hours);

        stopWatchString = `${hours}:${minutes}:${seconds}`;
        element.textContent = stopWatchString;

        function pad(unit){
            return (("0") + unit).length > 2 ? unit : "0" + unit;
        }
    }

    this.pause = () => {
        if(!paused){
            paused = true;
            elapsedTime = Date.now() - startTime;
            clearInterval(Interval);
            return false;
        }
        else{
            startTime = 0;
            elapsedTime = 0;
            seconds = 0;
            minutes = 0;
            hours = 0;
            stopWatchString = `00:00:00`
            element.textContent = stopWatchString;
            return true;
        }
    }

    this.now = () => {
        return stopWatchString;
    }
}