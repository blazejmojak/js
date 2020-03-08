
const div = document.querySelector("div");
const input = document.querySelector("input");
const passwords = ["jedEN", "DwA"];
const messages = ["super", "działa!"];



const showMessage = (e) => {

    div.textContent = '';

    let text = e.target.value;
    text = text.toLowerCase();
    console.log(text);

    passwords.forEach((password, index) => {
        password = password.toLowerCase();
        if (password === text) {
            console.log(`Password is ${password}, Input is ${text}`);
            div.textContent = messages[index];
        }
    });
}


input.addEventListener("input", showMessage);
