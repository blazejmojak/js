let possible = ['możliwość jeden', 'możliwość dwa'];
const add = document.querySelector('button.add');
const clean = document.querySelector('button.clean')
const showAdvice = document.querySelector('button.showAdvice');
const showOptions = document.querySelector('button.showOptions');


const addAdvice = (e) => {
    e.preventDefault();

    const input = document.querySelector('input');
    let newAdvice = input.value;
    let flague = true;

    if (newAdvice) {
        possible.forEach((poss) => {
            if (poss == newAdvice) {
                console.log(poss + ' --- ' + newAdvice);
                flague = false;
                return;
            } 
        });

        if(flague == true) {
            possible.push(newAdvice); 
        }

        input.value = '';
       
    }
}

const cleanAdvices = (e) => {
    e.preventDefault();

    possible = [];
}

const showAdviceFunction = (e) => {
    e.preventDefault();

    if (possible.length === 0) {
        return;
    }

    const randomNumber = Math.floor(Math.random() * possible.length);
    console.log(randomNumber);
    const h1 = document.querySelector('h1');
    advice = h1.textContent = possible[randomNumber];
    console.log(advice);
}

const showOptionsFunction = (e) => {

    alert(possible.join(" --- "));
}



add.addEventListener('click', addAdvice);
clean.addEventListener('click', cleanAdvices);
showAdvice.addEventListener('click', showAdviceFunction);
showOptions.addEventListener('click', showOptionsFunction);

