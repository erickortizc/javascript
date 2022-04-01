var texto = 'Erick Ortiz';
let edad=0;
//edad ="nome la se";
///alert("Hola Mundo");
let titulo= document.getElementById('titulo');
let mensaje = 'Mi nombre es '+texto + ' y  tengo '+  (edad+21) + 'años';

console.log('Hola mundo');
console.log(mensaje);
titulo.innerHTML= mensaje;
titulo.style.color = "blue";
titulo.style.textTransform = 'uppercase';

titulo.onclick = function() {
    titulo.innerHTML= "Le diste clic y ya se cambio de texto";
    titulo.style.textTransform = 'lowercase';
};