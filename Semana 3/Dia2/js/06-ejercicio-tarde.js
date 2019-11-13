// var nombres=["Eduardo","Juan", "Renzo"]
// do{
//     let palabra= prompt("Escriba un nombre o buscar salir para terminar")
//     let encontrado="";
//     for (let i = 0; i < nombres.length; i++) {
//         if(nombres[i]==palabra)
//             encontrado=nombres[i];
//     }
//     if(encontrado!=""){
//         console.log(`Bienvenido ${encontrado}`);
//     }else{
//         console.log(`No se encuentra en la lista`);
        
//     }
// }while(palabra!="salir");

// --------------------------------------------------

// EJERCICIOS DE TAREA
// var salario=1500;
// var total=0;
// for (let anio = 1; anio <= 6; anio++) {
//     salario= salario*1.10;
//     console.log(`El salario en el año #${anio} es ${salario}`);
//     total=total+salario
    
    
// }
// console.log(`El profesor recibio despues de 6 año la cantidad de ${total}`);

// --------------------------------------------------------------
// 4.13

// let nVentas = [10000, 9000, 15000, 16000, 2000];
// let global = 0;
// let global2 = 0;

// for (let i = 0; i < nVentas.length; i++) {
//     if(nVentas[i]<10000){
//         global = global + nVentas[i];
//     }else{
//         if(nVentas[i]>10000 && nVentas[i]<20000){
//             global2= global2 + nVentas[i]
//         }
         
//     }   
// }
// console.log(` TOTAL es : ${global}`);
// console.log(` TOTAL es : ${global2}`);
// console.log(` TOTAL es : ${global+global2}`);

// 4.16

// let nN = [1,2,3,4,5,6,7,8,9,10];
// let cubo = 0;
//  for (let i = 0; i < nN.length; i++) {
//      if(nN[i]>0){
//         cubo= nN[i]*nN[i]*nN[i];
//         console.log(`el cubo es: ${cubo}`)
//      }

//  }

//  4.18

//  console.log(Math.pow((1+0.15),58)*1500);

//  4.19
// let p = [30, 50, 60];
// let clave= [1,2,3];
// let carrito= [A,B,C]
 



let numero = [10,5,18,50,24,42];
let k=0;

for (let i = 0; i < numero.length; i++) {
    k=numero[i];
    if(numero[i] > numero[i+1] ){
       numero[i] = numero[i+1];
       numero[i+1] = k;
       i=0;
    }
}
console.log(numero)

