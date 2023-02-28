var mivariable;
let nombre;
const IVA= 21;

let longitud = 16; //numero
let apellido = "Johson" //String: Cadena de Texto
let x = {nombre:"John", apellido:"Doe"}; //objeto

/**Practica de Funciones */
var edad = 18;
if (edad >= 18){
    console.log("La persona es mayor de edad");
} else {
    console.log("La persona es menor de edad");
}

/**practicas del for */
var y = 0;
for (y; y < 5; y++) {
    console.log("El valor de y es:"+y);
}


/*En estas variables preacticamos JS y dejamos tanto variables como constantes, estas ultimas deben tener un valor inicial debido a que son valores que nunca cambiaran durante la funcion de nuestro programa.*/

if (true)
{
    console.log("hola");
}
window.onload = function (){
    document.getElementById('boton').onclick = function() {
    console.log("Hicimos Click");
    document.getElementById("demo").innerHTML="Estamos probando nuestro primer JS";
}
}

var z=10;
while (z > 0) {
    console.log("Mi variable vale"+z);
    z--;
}


/*
Practica del do
*/
var zz=10;

do{
    console.log("mi varible es:"+zz) //sentencia
}while (zz>10);

/**Practica del Break */
var yy = 10;

for (yy; yy > 0; yy--){
    if (yy==5){
        break;
    }
    console.log("El valor de x es:"+yy);
}

//Definimos la funcion hola mundo
function holamundo() {
    console.log("Hola Mundo");
}
holamundo();

//suma

function sumar(a,b) {

    var resultado= a+b;
    return resultado;
}

suma = sumar(3,4);
console.log(suma);