
function mostrar(mensaje){
  
    document.querySelector("#resultado").innerHTML=mensaje;
}

function actualizarPantalla(){
    
    document.querySelector("#vacio").style.display="none";
    document.querySelector("#imagenSinMensaje").style.display="none";
    document.querySelector("#sinMensaje").style.display="none";
    document.querySelector("#descpripcionSinMensaje").style.display="none";
    document.querySelector("#resultado").style.display="inline-block";
    document.querySelector("#copiar").style.display="inline-block";

}

function encriptarMensaje(){
    var mensaje = document.querySelector("#texto").value;
    var secreto="";

    if(mensaje!="" && !/[A-Z]/g.test(mensaje) && !/[á-ú]/g.test(mensaje) && mensaje.trim().length){
        for(var i=0;i<mensaje.length;i++){
            switch(mensaje[i]){
                case "a":
                    secreto+="ati";
                    break;
                case "e":
                    secreto+="estrih";
                    break;
                case "i":
                    secreto+="irohd";
                    break;
                case "o":
                    secreto+="obtag";
                    break;
                case "u":
                    secreto+="ufsvl";
                    break;
                default:
                    secreto+=mensaje[i];
            }
        }

        actualizarPantalla();
        mostrar(secreto);
        document.querySelector('#texto').value='';
    }

    else alert("ingresa el texto en minúsculas y sin acentos");
}

function desencriptarMensaje(){
    var mensaje = document.querySelector("#texto").value;
    var codigos= [/ati/g, /estrih/g, /irohd/g, /obtag/g, /ufsvl/g];
    var letras = ['a','e','i','o','u'];
    
    if(mensaje!="" && !/[A-Z]/g.test(mensaje) && !/[á-ú]/g.test(mensaje) && mensaje.trim().length){
        for(var i=0;i<5;i++){
            mensaje=mensaje.replaceAll(codigos[i], letras[i]);
        }

        actualizarPantalla();
        mostrar(mensaje);
        document.querySelector('#texto').value='';
    }

    else alert("ingresa el texto en minúsculas y sin acentos");
    
}

function copiarTexto(){
    var texto = document.querySelector("#resultado");
    texto.select();
    texto.setSelectionRange(0, 99999); /* Para dispositivos mobiles*/
    navigator.clipboard.writeText(texto.value);
}

var encriptar = document.querySelector("#encriptar");
var desencriptar = document.querySelector("#desencriptar");
var copiar = document.querySelector("#copiar");
document.querySelector(".astro").addEventListener("click", function(){
    document.body.classList.toggle("modooscuro");
})

copiar.onclick = copiarTexto;
encriptar.onclick = encriptarMensaje;
desencriptar.onclick = desencriptarMensaje;
