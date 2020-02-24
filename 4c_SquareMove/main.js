const div = document.querySelector('div');
let divX = 150;
let divY = 50;
div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

let drawActive = false;

//jak daleko od krawędzi elementu div
let insertDivX;
let insertDivY;

div.addEventListener('mousedown', (e) => {
    drawActive = true;

    insertDivX = e.offsetX;
    insertDivY = e.offsetY;

    console.log(insertDivX, insertDivY);
    console.log(`mouseDown and ${drawActive}`);
})

div.addEventListener('mousemove', (e) => {
    if (drawActive) {
        divX = e.clientX - insertDivX;
        divY = e.clientY - insertDivY;
        div.style.left = `${divX}px`;
        div.style.top = `${divY}px`;
    }
})

div.addEventListener('mouseup', () => {
    console.log('mouseUp');
    drawActive = false;
    console.log(drawActive)

})