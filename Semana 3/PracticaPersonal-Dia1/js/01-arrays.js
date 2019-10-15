// ARRAYS []
// personas: 5 contador:4
// var array = ["Cristhian", "Carlos", "Diego"];

// .push() -> eEMPUJAR
// var array = ["Cristhian", "Carlos", "Diego"];
// para agregar un elemento mas en nuestro array escribimos el siguiente code
// array.push("John", "Andy", "Lizbeth")
// console.log(array)
// RESULTADO
// Cristhian, Carlos, Diego, John, Andy, Lizbeth

// .length 
// var array = ["Cristhian", "Carlos", "Diego"];
// ->   .length  -> nos permite mostrar el numero de elementos que tenemos dentro de nuestro array(amigos)
// console.log("Tienes " + array.length+" amigos");
// RESULTADO 
// Tienes 3 amigos

// .pop();
// var array = ["Cristhian", "Carlos", "Diego"];
// para eliminar el ultimo elemento de nuestro array colocamos POP();
// array.pop();
// RESULTADO
// Cristhian, Carlos


// .concat();
// Concatenando 2 arrays
// var array = ["Cristhian", "Carlos", "Diego"];
// var array2 = ["Erick", "Brando"];
// empezamos a concatenar / es un array que puede ser igual que ->  var array3 = ["Cristhian", "Carlos", "Diego", "Erick", "Brando"]
// lO UTILIZAMOS MAYORMENTE CUANDO QUEREMOS TRABAJAR CON MAS DE UN ARRAY
// var array3 = array.concat(array2);
// RESULTADO
// Cristhian, Carlos, Diego, Erick, Brando

// .join();
// var array = ["Cristhian", "Carlos", "Diego"];
// var numero = 52
// este metodo lo que recibe es un parametro ya sea letra, numero lo que nosotros quedramos
// array.join(" elemento que quedramos agregarle ")
// console.log(array.join(` ${numero} `));
// RESULTADO
// Cristhian 52 Carlos 52 Diego
// TAMBIEN PODREMOS ESCRIBIRLE ASI
// var array = ["Cristhian", "Carlos", "Diego"];
// var array2 = array.join(" 52 ")
// console.log(array2)
// RESULTADO
// Cristhian 52 Carlos 52 Diego
 

// .sort();  -> ORDENAR ALFABETICAMENTE ELEMENTOS DE NUESTRO ARRAY
//  var array = ["Diego", "Cristhian", "Lizbeth"];
//  var ordenados = array.sort();
// console.log(ordenados);
// RESULTADO
// "Cristhian", "Diego", Lizbeth

// .reverse() -> NOS PERMITE PONER AL REVEZ NUESTROS ELEMENTOS
// var array = ["Diego", "Cristhian", "Lizbeth"];
// var revertir = array.reverse();
// console.log(revertir);
// RESULTADO
// "Lizbeth", "Cristhian", "Diego"
