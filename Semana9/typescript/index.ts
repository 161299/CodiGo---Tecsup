// importando las funcion y el array de el archivo variables
// si quiero importar las variables del otro archivo solamrente las variables.... esas variables tienen que tener export
// capturando por nombre de las variables
// Importando variables y funciones con nombres iguales
import {arregloDeNumeros, imprimirSaludo} from './variables';
// Importando un default, y si quiero llamar una variable por su nombre ponemos lo siguiente despues de la coma
import nombres, {correo} from './variables2'
// Importar varias variables en una sola
import * as abc from './variables3'


console.log(arregloDeNumeros);
imprimirSaludo()
// ==============================
console.log(nombres);
console.log(correo);
// ================================
console.log(abc.a);
console.log(abc.b);
console.log(abc.c);



