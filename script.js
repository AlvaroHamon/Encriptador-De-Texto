// obtener elementos HTML
const btn_limpiar = document.querySelector(".btn_limpiar");
const btn_copiar = document.querySelector(".copiar")
const text_area = document.querySelector(".text_area");
const mensaje = document.querySelector(".mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btn_encriptar() {
    const msnEncriptado = encriptar(text_area.value);
    mensaje.value = msnEncriptado;
}

function btn_desencriptar() {
    const msnDesencriptado = desencriptar(text_area.value);
    mensaje.value = msnDesencriptado;
    
}

function encriptar(strEncrip) {

    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    strEncrip = strEncrip.toLowerCase();

    for (let i = 0; i < matriz.length; i++) {
        if (strEncrip.includes(matriz[i][0])) {
            strEncrip = strEncrip.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }

    document.getElementById("muneco").style.display = "none";
    document.getElementById("ningun_msn").style.display = "none";
    document.getElementById("btn_copiar").style.display = "initial";
    return strEncrip;

}

function desencriptar(strDesencrip) {

    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    strDesencrip = strDesencrip.toLowerCase();

    for (let i = 0; i < matriz.length; i++) {
        if (strDesencrip.includes(matriz[i][1])) {
            strDesencrip = strDesencrip.replaceAll(matriz[i][1], matriz[i][0]);
        }
    }
    document.getElementById("muneco").style.display = "none";
    document.getElementById("ningun_msn").style.display = "none";
    document.getElementById("btn_copiar").style.display = "initial";
    return strDesencrip;

}

function limpiar() {
    document.getElementById("muneco").style.display = "initial";
    document.getElementById("ningun_msn").style.display = "initial";
    document.getElementById("btn_copiar").style.display = "none";
    mensaje.value = "";
    text_area.value = "";
    text_area.focus();
}

function copiar() {
    mensaje.select();
    document.execCommand("copy");
    text_area.select();
    text_area.focus();
}

limpiar();
btn_limpiar.addEventListener('click', limpiar);
btn_copiar.addEventListener("click", copiar);