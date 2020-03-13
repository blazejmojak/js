// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3']



let index = 0;
let currentText = '';
let currentTextIndex = 0;


const addSomething = () => {
    setTimeout(functionOne, 2000);
}

const functionOne = () => {
    currentText = txt[index];
    setTimeout(functionTwo, 500);
    index++;
    if (index < txt.length) {
        addSomething();
    }
}

const functionTwo = () => {
    spnText.textContent = currentText[currentTextIndex];

}




addSomething();




// let activeText = 0;
// let activeLetter = 0;


// // Implementacja
// const addLetter = () => {
//  // Użyj w środku setTimeout
//  spnText.textContent += txt[activeText][activeLetter];
//  activeLetter++;
//  if(activeLetter === txt[activeText].length) {
//      activeText++;
//      if(activeText === txt.length) return;
//      return setTimeout(() => {
//         activeLetter = 0;
//         spnText.textContent = '';
//         addLetter();
//      }, 2000);


//  }
//  setTimeout(addLetter, 200);

// }




// addLetter(); //pierwsze wywołanie



// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);