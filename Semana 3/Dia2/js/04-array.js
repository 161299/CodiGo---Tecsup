// let notas = [13, 14 ,5, 17];
// let nombres = ["Jorgito", "Carlitos", "Estrellita", "Paloma"];

// console.log(notas);
// console.log(nombres.join(" | "));
// Propiedades de los arrays
//  array.length -> cantidad de elementos que tiene el array

// console.log(nombres.length)

// recorriendo un array

// for (let i = 0; i < nombres.length; i++) {
//     console.log(nombres[i])
//     console.log(i)  
// }

// algoritmo para ver el alumbo con menor nota
//  1- asumo que la nota menor es la primera

// let notas = [13, 14 ,5, 1];
// let nombres = ["Jorgito", "Carlitos", "Estrellita", "Paloma"];
// let notaMenor = notas[0];
// let posicionMenor = 0;

// for (let i = 0; i < notas.length; i++) {

//     if(notaMenor>notas[i]){
//         notaMenor = notas[i]
//         posicionMenor = i;
//     }
// }
//  console.log(`La nota menor es : ${notaMenor}` );
//  console.log(`La posicion del menor es ${nombres[posicionMenor]}`);

//  dado un arreglo de numeros, contar la cnatidad de positivos, negativos y numeros iguales a cero.

// let numeros = [1,2,3,4,-1,-2,-3,0,0]
// let cc=0;
// let cn=0;
// let cp=0;

// for(let i=0; i<numeros.length; i++){

//     if(numeros[i]>0){
//         cp++;
//     }else{
//         if(numeros[i]<0){
//             cn++;
//         }else{
//             cc++;
//         }
//     }   
// }
// console.log(`Total positivos ${cp}`)
// console.log(`Total negativos ${cn}`)
// console.log(`Total ceros ${cc}`)
 

let CantidadDeVentas = +prompt("Ingrese la cantidad de ventas");


for (let i = 0; i < CantidadDeVentas.length; i++) {
   if(N>0){
     let numeroVentas = +prompt("Ingrese tal cantidad");
     let mayor = numeroVentas;
     switch(true){
         case numeroVentas[i]>1000:
             console.log(`fueron mayores a 1000 : ${mayor}`)
     }

   }
    
}