// obtener elementos HTML
const btn_encriptar = document.querySelector(".btn_encriptar");
const btn_desencriptar = document.querySelector(".btn_desencriptar")
const btn_limpiar = document.querySelector(".btn_limpiar");


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


function encriptar() {
    document.getElementById("muneco").style.display = "none";
    document.getElementById("ningun_msn").style.display = "none";
    document.getElementById("btn_copiar").style.display = "initial";
}

function desencriptar() {
    document.getElementById("muneco").style.display = "none";
    document.getElementById("ningun_msn").style.display = "none";
    document.getElementById("btn_copiar").style.display = "initial";
}

function limpiar() {
    document.getElementById("muneco").style.display = "initial";
    document.getElementById("ningun_msn").style.display = "initial";
    document.getElementById("btn_copiar").style.display = "none";
}


limpiar();
btn_encriptar.addEventListener('click', encriptar);
btn_desencriptar.addEventListener('click', desencriptar);
btn_limpiar.addEventListener('click', limpiar);