// while

// while (condition) {
    // codigo a ejecutarse mientras que se cumpla la condicion
// }

// var mascota = "";
// var rpta = "si";
// while(rpta=="si"){
//     var mascota =prompt("Ingrese nombre de tu mascota")
//     rpta = prompt("Quieres ingresar otro nombre")
//     console.log(`nombre de tu mascota es: ${mascota}`)
// }

// console.log("FIN DEL PROGRAMA")

// un programa para calcular la multiplicacion de dos numero sin usar el operador (*)

// var primerNumero = +prompt("Ingrese el primer valor");
// var segundoNumero = +prompt("Ingrese el segundo valor");
// var rpta = 0;

// // debugger;
// while (primerNumero > 0){
    
//     rpta = rpta + segundoNumero ;
//     primerNumero = primerNumero - 1;
// }
// console.log(`TOTAL ${rpta}`)

// un programa para calcular la division  exacta de dos numeros utilizando sumas y restas mostrar ademas el cociente y el residuo

var a = +prompt("Ingrese el divisor");
var b = +prompt("Ingrese el dividendo");

var q = 0;

while((a-b) >= 0){
    q++;
    a = a -b

}

console.log(`division ${q}`)
console.log(`residuo es ${a}`)

//  la regla de la division es Divisor- dividendo igual a 0

/*a = 10
b = 3
q = 0;

  10 | 4
  -4 |
   6 
  -4 
   2

   0/*

