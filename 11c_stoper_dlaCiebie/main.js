// http://websamuraj.pl/examples/js/projekt11/

const start = document.querySelector('button.main');
const reset = document.querySelector('button.reset');
const div = document.querySelector('div div');

let milliseconds = 0;
let seconds = 0;
let startPause = "Start";
let interval;


const changeName = () => {
    if (startPause === "Start") {
        start.textContent = "Pause";
        startPause = "Pause";
    } else if (startPause === "Pause") {
        start.textContent = "Start";
        startPause = "Start";
    }
}


const startCount = () => {
    if (milliseconds % 10 === 0) {
        seconds++;
        seconds = seconds < 10 ? `0${seconds}` : seconds;
    }

    milliseconds = milliseconds % 10;
    div.textContent = `${seconds}.${milliseconds}`;
    milliseconds += 1;
}


const startStoper = () => {
    if (startPause === "Start") {
        interval = setInterval(startCount, 100);
    } else if (startPause === "Pause") {
        clearInterval(interval);
    }
    changeName();
}


const resetFunction = () => {
    milliseconds = 0;
    seconds = 0;
    startPause = "Start";
    clearInterval(interval);
    div.textContent = `${seconds}.${milliseconds}`;
    start.textContent = startPause;
}



start.addEventListener('click', startStoper);
reset.addEventListener('click', resetFunction);
