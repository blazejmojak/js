const button = document.querySelector("button");
const li = document.querySelectorAll("li");
//lub stworzymy tablicę za pomocą parametru REST
// const li = [...document.getElementsByTagName("li")];
let size = 10;
let maxSize = false;
let increaseValue = 5;
let minSizeValue = 20;
let maxSizeValue = 50;

            
function changeCss(item) {

    item.style.display = "block";
    item.style.fontSize = `${size}px`;
}

const liFunction = function () {

    if (maxSize == false) {


        li.forEach(changeCss);

        size += increaseValue;

        if (size > maxSizeValue) {

            maxSize = true;
        }

    } else {

        li.forEach(changeCss);

        size -= increaseValue;

        if (size < minSizeValue) {

            maxSize = false;
        }
    }
}

button.addEventListener("click", liFunction);