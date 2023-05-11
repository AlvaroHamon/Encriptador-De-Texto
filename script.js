// obtener elementos HTML
const btn_encriptar = document.querySelector(".btn_encriptar");
const btn_desencriptar = document.querySelector(".btn_desencriptar")
const btn_limpiar = document.querySelector(".btn_limpiar");
const btn_copiar = document.querySelector(".copiar")
const text_area = document.querySelector(".text_area");
const mensaje = document.querySelector(".mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

const convertir = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]

function encriptar() {
    document.getElementById("muneco").style.display = "none";
    document.getElementById("ningun_msn").style.display = "none";
    document.getElementById("btn_copiar").style.display = "initial";
    mensaje.innerHTML = text_area.value;

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
    mensaje.innerHTML = "";
    text_area.value = "";
    text_area.focus();
}

function copiar() {
    mensaje.select();
    document.execCommand("copy");
    text_area.focus();
}

limpiar();
btn_encriptar.addEventListener('click', encriptar);
btn_desencriptar.addEventListener('click', desencriptar);
btn_limpiar.addEventListener('click', limpiar);
btn_copiar.addEventListener("click", copiar);