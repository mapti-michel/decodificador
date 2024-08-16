const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

const btnCopiar = document.querySelector(".btn-copiar");


mensagem.style.backgroundImage = "url('/assets/imgBusca.png')";

btnCopiar.style.display = 'none';
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"


function btEncriptar(){
    const textoEncriptado = encriptografar(textArea.value);
    mensagem.value = textoEncriptado;
    mensagem.style.backgroundImage = "url('')";
    textArea.value = "";
    btnCopiar.style.display = 'block';
}

function btDesencriptar(){
    const textoEncriptado = desencriptografar(textArea.value);
    textArea.value = textoEncriptado;
    mensagem.style.backgroundImage = "url('/assets/imgBusca.png')";
    mensagem.value = "";
    btnCopiar.style.display = 'none';
}


function encriptografar(textMensagem){
    textMensagem = textMensagem.toLowerCase();

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    //console.table(matrizCodigo); // Verificação se está tudo correto

    for(let i = 0; i < matrizCodigo.length; i++){
        if(textMensagem.includes(matrizCodigo[i][0])){
            textMensagem = textMensagem.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    console.table(textMensagem)
    return textMensagem;
    
}

function desencriptografar(textDesencriptar){
    textDesencriptar = textDesencriptar.toLowerCase();

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

//    console.table(matrizCodigo);  // Verificação se está tudo correto

    for(let i = 0; i < matrizCodigo.length; i++){
        if(textDesencriptar.includes(matrizCodigo[i][1])){
            textDesencriptar = textDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    console.table(matrizCodigo)
    return textDesencriptar;

}

function btCopy(){
    textArea.value = mensagem.value;
    mensagem.style.backgroundImage = "url('/assets/imgBusca.png')";
    mensagem.value = "";
    btnCopiar.style.display = 'none';

}