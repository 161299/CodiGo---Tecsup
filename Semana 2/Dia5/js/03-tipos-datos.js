// Datos numericos (enteros y decimales)
var edad = 28;
var promedio = 17.5;
var numero = 28;
// Cadenas de Texto (Strings)
var nombre = 'Cristhian Eduardo';
var apellido = "Laurente Lopez";
var numero = "28"
// Datos booleanos (verdadero o falso)
var aprobado = false;
var error = true;
// Variable sin inicializar
var x;

console.log(edad);
console.log(nombre);
console.log(error);
console.log(numero);
console.log(x)
// Concatenando(+) un string con un numerico
var mensaje = "Mi edad es " + edad + " " + aprobado;
var mensaje2 = `Mi edad es ${edad} ${aprobado}`;
console.log(mensaje);
console.log(mensaje2);
console.log(edad + "100"); 
// tambien se le puede escribir asi con el ECMASCRIPT6
console.log(`${edad}100`)
