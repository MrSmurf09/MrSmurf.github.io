function Inicio(){
    window.open("http://127.0.0.1:5500/tarea2Josver/index.html", "_self");
}

function Gojo(){
    window.open("http://127.0.0.1:5500/tarea2Josver/Gojosukuna/GojovsSukuna.html", "_self");
}

function Sukuna(){
    window.open("http://127.0.0.1:5500/tarea2Josver/Sukuna/SukunavsMahoraga.html", "_self");
}

function Toji(){
    window.open("http://127.0.0.1:5500/tarea2Josver/Toji/TojivsGojo.html", "_self");
}

function Vivy(){
    window.open("http://127.0.0.1:5500/tarea2Josver/vivy/vivy.html", "_self");
}

function menu(){
    let menu = document.getElementsByClassName("menu");
    for (let i = 0; i < menu.length; i++) {
        menu[i].classList.toggle("desaparecer");
        
    }
}