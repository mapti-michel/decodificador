const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

const btnCriptar = document.querySelector(".btn-encriptar");
const btnDescriptar = document.querySelector(".btn-copiar");
const btnCopiar = document.querySelector(".btn-copiar");

const info = document.querySelector(".informacao-busca");
const infoBaixo = document.querySelector(".informacao-busca-baixo");

//mensagem.style.backgroundImage = "url('/assets/imgBusca.png')";

btnCriptar.style.disabled = true;
btnDescriptar.style.disabled = true;
btnCopiar.style.disabled = true;

btnCopiar.style.display = 'none';

function ativaBotao(){
    if (textArea.value.length > 0){
        btnCriptar.style.disabled = false;
    }
}

function btEncriptar(){

    if (textArea.value != ""){
        const textoEncriptado = encriptografar(textArea.value);
        mensagem.value = textoEncriptado;
        mensagem.style.backgroundImage = "url('')";
        info.style.display = 'none';
        infoBaixo.style.display = 'none'
        textArea.value = "";
        btnCopiar.style.display = 'block';
    }
}

function btDesencriptar(){
    if (textArea.value != ""){
        const textoEncriptado = desencriptografar(textArea.value);
        textArea.value = textoEncriptado;
//        mensagem.style.backgroundImage = "url('/assets/imgBusca.png')";
        mensagem.value = "";
        btnCopiar.style.display = 'none';
    }
}


function encriptografar(textMensagem){
    textMensagem = textMensagem.toLowerCase();

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

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
    info.style.display = 'block';
    infoBaixo.style.display = 'block'

}