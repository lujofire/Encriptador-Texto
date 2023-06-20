let texto = "";// contiene el texto en minusculas
var tamanoString;// contien el tamaño de mi mensaje
let arrayTexto = [];// contiene cada letra de mi mensaje 
let textoEncriptado;// contiene mi texto encriptado


const getValueInput = () => {
   let inputValue = document.getElementById("mensaje").value;// capturo el mensaje
   recorrerString(inputValue);// mando el mensaje a mi funcion recorrer String

   //------- mensaje cuando el input esta vacio ----------
   if (inputValue === '') {
      return alert('Complete Fields Please');
   }

}
 /* funcion recorrer Strign  */
function recorrerString(inputValue) {
   texto = inputValue.toLowerCase();// me convierte mayusculas a minusculas
   tamanoString = texto.length;// me da el tamaño de mi texto en numero
   console.log(arrayTexto);
   reemplazarTexto(tamanoString, texto);// envio el tamaño del texto length y envio el texto en minusculas
   document.getElementById("mensaje").value = "";// limpio el input del mensaje escrito
  textoEncriptado = document.getElementById("valueInput").innerHTML = arrayTexto.toString().replaceAll(',',''); //imprimo el mensaje encrpitado al textarea
}

/* esta funcion Encripta mi mensaje */
function reemplazarTexto(tamanoString, texto) {
   for (var x = 0; x < tamanoString; x++) {
      var caracter = texto.charAt(x);
      //console.log(caracter+", posicion:"+x.toString());
      //arrayTexto.push(caracter);
      //arrayTexto = [texto.charAt(x)];
      if (caracter != 'a' && caracter != 'e' && caracter != 'i' && caracter != 'o' && caracter != 'u') {
         arrayTexto.push(caracter);
      }
      if (caracter == 'a') {
         arrayTexto.push("ai");
      }
      if (caracter == 'e') {
         arrayTexto.push("enter");
      }
      if (caracter == 'i') {
         arrayTexto.push("imes");
      }
      if (caracter == 'o') {
         arrayTexto.push("ober");
      }
      if (caracter == 'u') {
         arrayTexto.push("ufat");
      }
      /*if(arrayTexto == 'e'){
         indice_array = arrayTexto.indexOf('e');
         arrayTexto[indice_array] = e;
            
      }
      if(arrayTexto == 'i'){
         indice_array = arrayTexto.indexOf('i');
         arrayTexto[indice_array] = i;
            
      }*/

      /*
      if(arrayTexto == 'u'){
         indice_array = arrayTexto.indexOf('u');
         arrayTexto[indice_array] = u;
            
      }*/
   }// fin for

   console.log(arrayTexto);
   //console.log(arrayTexto);
}


const getCopyOutput = () => {
   let outPutValue = document.getElementById("valueInput").value;
   console.log(outPutValue);
}


