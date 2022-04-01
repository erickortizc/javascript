var texto = 'Ximmena Zamora';
let edad=0;
//edad ="nome la se";
///alert("Hola Mundo");
let titulo= document.getElementById('titulo');
let mensaje = 'Mi crush es: '+texto + ' y su edad es '+  (edad+23);

console.log('Hola mundo');
console.log(mensaje);
titulo.innerHTML= mensaje;
titulo.style.color = "blue";
titulo.style.textTransform = 'uppercase';

titulo.onclick = function() {
    titulo.innerHTML= "Le diste clic y ya no te quiere";
    titulo.style.textTransform = 'lowercase';
};