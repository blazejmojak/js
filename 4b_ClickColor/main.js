// KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNE

// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony

document.body.addEventListener('click', function(e){
    console.log("move");

    const x = e.clientX;
    const y = e.clientY;

    const sum = x + y;
    console.log

    if (x % 2 == 0 && y % 2 == 0) {
        document.body.style.background = `red`;
        console.log(x,y);
    }
    else if ((x % 2 != 0 && y % 2 == 0 ) || (x % 2 == 0 && y % 2 != 0)) {
        document.body.style.background = `blue`;
        console.log(x,y);
    }
    else 
    {
        document.body.style.background = `green`
        console.log(x,y);

    }
})