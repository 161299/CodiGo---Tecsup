var x1 = +prompt("Ingrese valor de X1");
var y1 = +prompt("Ingrese valor de y1");
var y2 = +prompt("Ingrese valor de y2");
var x2 = +prompt("Ingrese el valor de x2");

var x = x2 - x1;
var y = y2 - y1;
var d = Math.sqrt(x * x + y * y );

console.log(`Distancia entre los puntos`);
console.log(d);