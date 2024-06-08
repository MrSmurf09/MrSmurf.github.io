function Inicio(){
    window.open("https://mrsmurf09.github.io/MrSmurf.github.io/", "_self");
}

function Gojo(){
    window.open("https://mrsmurf09.github.io/MrSmurf.github.io/Gojosukuna/GojovsSukuna", "_self");
}

function Sukuna(){
    window.open("https://mrsmurf09.github.io/MrSmurf.github.io/Sukuna/SukunavsMahoraga", "_self");
}

function Toji(){
    window.open("https://mrsmurf09.github.io/MrSmurf.github.io/Toji/TojivsGojo", "_self");
}

function Vivy(){
    window.open("https://mrsmurf09.github.io/MrSmurf.github.io/vivy/vivy", "_self");
}

function menu(){
    let menu = document.getElementsByClassName("menu");
    let menu2 = document.getElementsByClassName("menu_2");
    for (let i = 0; i < menu.length; i++) {
        menu[i].classList.toggle("desaparecer");
    }
    
    for (let i = 0; i < menu2.length; i++) {
        menu2[i].classList.toggle("desaparecer");
    }
}