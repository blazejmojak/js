let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement('button');
    const ul = document.createElement('ul');
    document.body.appendChild(btn);
    document.body.appendChild(ul);
    btn.innerText = "Dodaj 10 elementów listy";

    btn.addEventListener("click", createLiElements);
        
}

const createLiElements = () => {
    
    const list = document.querySelector("ul");

    for (i = 1; i <= 10; i++) {
        const li = document.createElement('li');
        list.appendChild(li);
        li.textContent = `Element nr ${orderElement}`;
        li.style.fontSize = `${size++}px`;
        orderElement++;      
      }  


}

init()