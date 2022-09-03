var textoEntrante = document.querySelector(".texto-entrante");
var textoResuelto = document.querySelector(".texto-resuelto");

// Las "llaves" de encriptación que utilizaremos son las siguientes:

// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

var llaves = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

function limpiarMensaje() {
    document.getElementById("mensaje").hidden=true;
    document.getElementById("copiado").hidden=true;
}

function agregarImagen() {
    document.getElementById("texto").hidden=true;
}

function traerTexto() {
    document.getElementById("texto").hidden=false;
    document.getElementById("copiar").hidden=false;
}

function agregarTexto() {
    document.getElementById("copiado").hidden=false;
    document.getElementById("copiar").hidden=true;
}

function btnEncriptar() { 
    const encriptado = encriptar(textoEntrante.value);
    textoResuelto.value = encriptado;
    limpiarMensaje();
    traerTexto();
    textoEntrante.value = "";
    textoEntrante.focus();
}

function encriptar(codigoEncriptado) {

    codigoEncriptado = codigoEncriptado.toLowerCase();
    for(var i = 0; i < llaves.length; i++) {
        if (codigoEncriptado.includes(llaves[i][0])) {
            codigoEncriptado = codigoEncriptado.replaceAll(llaves[i][0],llaves[i][1]);
         }
    }
    return codigoEncriptado;

}
 
function btnDesencriptar() {
    const desencriptado = desencriptar(textoEntrante.value);
    textoResuelto.value = desencriptado;
    textoEntrante.value = " ";
    textoEntrante.focus();
    limpiarMensaje();
    traerTexto();
}

function desencriptar(codigoDesencriptado) {

    codigoDesencriptado = codigoDesencriptado.toLowerCase();
    for(var i = 0; i < llaves.length; i++) {
        if (codigoDesencriptado.includes(llaves[i][0])) {
            codigoDesencriptado = codigoDesencriptado.replaceAll(llaves[i][1],llaves[i][0]);
         }
    }
    return codigoDesencriptado;

}

function btnCopiar() { 
    navigator.clipboard.writeText(textoResuelto.value);
    textoResuelto.value = " ";
    agregarImagen();
    agregarTexto();
}