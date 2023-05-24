// declaramos las variables a utilizar en nuestro proyecto
let inputMensaje = document.getElementById('inputMensaje');
let btnEncriptar = document.getElementById('btnEncriptar');
let btnDesencriptar = document.getElementById('btnDesencriptar');
let mensajeFinal = document.getElementById('mensajeFinal');

//se crea una funcion para encriptar el texto que le pasamos como parametro
function encriptadorTexto(texto) {
  texto = texto.replace(/e/g, 'enter');
  texto = texto.replace(/i/g, 'imes');
  texto = texto.replace(/a/g, 'ai');
  texto = texto.replace(/o/g, 'ober');
  texto = texto.replace(/u/g, 'ufat');
  //retornamos nuestro valor encriptado
  return texto;
}

//se hace funcion para desencriptar el texto que pasamos como parametro
function desencriptarTexto(texto) {


  texto = texto.replace(/enter/g, 'e');
  texto = texto.replace(/imes/g, 'i');
  texto = texto.replace(/ai/g, 'a');
  texto = texto.replace(/ober/g, 'o');
  texto = texto.replace(/ufat/g, 'u');
  //retornamos nuestro valor desencriptado
  return texto;

}


//evento para boton de Encriptar, tomamos el valor del texarea
btnEncriptar.addEventListener('click', ()=>{
  console.log(desencriptarTexto(inputMensaje.value));

  mensajeFinal.innerText = encriptadorTexto(inputMensaje.value);
});

//evento para boton de Desencriptar, tomamos el valor del texarea
btnDesencriptar.addEventListener('click', ()=>{
  console.log(desencriptarTexto(inputMensaje.value));

  mensajeFinal.innerText = encriptadorTexto(inputMensaje.value);
});