const textoAEncriptar = document.querySelector(".texto-a-encriptar");
const textoADesencriptar = document.querySelector(".texto-a-encriptar");

const muestraTextoEncriptado = document.querySelector(".texto-encriptado");
let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];


function btnEncriptar() {
const textoEncriptado = encriptarTexto(textoAEncriptar.value)
muestraTextoEncriptado.value = textoEncriptado;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptarTexto(textoADesencriptar.value)
    muestraTextoEncriptado.value = textoDesencriptado;
    }

function encriptarTexto(textoAEncriptar) {
    textoAEncriptar = textoAEncriptar.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (textoAEncriptar.includes(matrizCodigo[i][0])) {
            textoAEncriptar = textoAEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return textoAEncriptar;
}


function desencriptarTexto(textoADesencriptar) {


    for (let i = 0; i < matrizCodigo.length; i++) {
        if (textoADesencriptar.includes(matrizCodigo[i][1])) {
             textoADesencriptar = textoADesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return textoADesencriptar;
}

function copiar() {
}