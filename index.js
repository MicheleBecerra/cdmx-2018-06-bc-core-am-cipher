//En la primera sección se obtiene el mensaje y se encripta.

// Introducir offset(desplazamiento) para cifrar
const intdespl=()=>{
  offset = parseInt(document.getElementById('introKey').value) ;
 }
// Aquí se jala la cadena de texto que se desea cifrar.
  const  getText=()=>{
    const string = document.getElementById('ingresarTxt').value ;
  }
// Aquí te imprime tu mensaje cifrado
  const encrypMessage =()=>{
 document.getElementById('msgCriptado').innerHTML = (cipher.encode(back));
   }
// En esta sección se introduce el mensaje encriptado y obtienes el mensaje
//decifrado.
// Se introduce offset para poder decifrar
const desplaza=()=>{
  offset = parseInt(document.getElementById('introKey').value) ;
 }
 // Se introduce mensaje encripatdo
  const desenCryp=()=>{
  const string = document.getElementById('decifMsg').value ;
}
// Se imprime el mensaje decifrado
  const decrypMessage=()=>{
   document.getElementById('msgDecifrado').innerHTML = (cipher.encode(outText));
}
