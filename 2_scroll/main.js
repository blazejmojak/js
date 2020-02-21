document.body.style.height = 10000 + "px";

const div = document.createElement('div');

document.body.appendChild(div);

let size = 0;
let grow = true;

div.style.width = 100 + "%";
div.style.height = size + "px";
div.style.position = "fixed";
div.style.left = 0;
div.style.top = 0;
div.style.backgroundColor = "green";

const maxHeight = window.innerHeight / 2;


const changeHeight = function() {

    if(grow) {
        
        size += 5;

    }

    else {

        size -= 5;
    }

    if(size > maxHeight) {

        grow = false;
        div.style.backgroundColor = "red";

    }

    else if(size == 0) {
        
        grow = true;
        div.style.backgroundColor = "green";

    }

    div.style.height = size + "px";
}



window.addEventListener("scroll", changeHeight);





// const square = document.createElement('div');

// document.body.appendChild(square);

// let grow = true;

// let size = 100;
// square.style.width = size + "px";
// square.style.height = size + "px";
// square.style.backgroundColor = "red";

// window.addEventListener("scroll", function() {
   
//    if(grow == true) {
//     size += 10;
//     square.style.width = size + "px";
//     square.style.height = size + "px";
//    }

//    else {
//     size -= 10;
//     square.style.width = size + "px";
//     square.style.height = size + "px";
//    }

//    if(size >= window.innerWidth /2) {
//        grow = false;
//    }
//    else if(size == 0) {
//        grow = true;
//    }
// })