// inicializando un array

let numeros = new Array();
console.log(numeros);

// Propiedades de los arrays
// push(elemento) => recibe un elemento y lo inserta al final de un array
numeros.push(5,6,7,8,9);
console.log(numeros);
// pop() => extrae el ultimo elemento de un array y modifica el array original
numeros.pop()
console.log(numeros);

// concat(arreglo) => devuelve la concatenacion del arreglo actual con el arreglo recibido en la función OJO el arreglo original, no se modifica
console.log(numeros.concat([9,10,11,12]));
;
console.log(numeros);


// splice(posicion, nroElementos, ?ValoresAInyectar)
// Elimina 'nroElementos' desde la 'posicion' dada y devuelve un arreglo de elementos eliminados,
// OJO el arreglo original SI es modificado
// Si se envia el parametro valoresAInyectar(que puede ser mas de un valor), inyecta esos valores en la posicion indicada
console.log(numeros.splice(2,1));
console.log(numeros);

// indexOf // mismo compartimiento que la funcion de los strings

//==============================================================
// filter(function) => retorna un arreglo de elementos que cumplan con cierta condicion
// definicion2 => retorna ele lemento de la iteracion en la que cumpla la condicion

let notas = [10,11,14,20,5,8,20,14];

// let miFuncion = (elemento,indice);

let notasPares =notas.filter((elemento,i) => {
    if(elemento % 2 == 0){
        
        return elemento 
    }
});
console.log(notasPares);

// let notasPares =notas.filter((elemento,i) => (elemento % 2 == 0));
// console.log(notasPares)

// =============================================================



// =====================forEach(() => {}) =========================
// forEach(() => {}) funcion que itera el arreglo de items y recibe el callback() al cual envia hasta 3 parametros (elemento,indice,arregloCompleto)
//  OJO NO RETORNA VALORES

notas.forEach((comodeseo, i)=>{
  console.log(`Posicion =>  ${i}`);
  console.log(`Elemento =>  ${comodeseo}`);
  
});

// map(() =>{}) -> es una funcion para aplicar una formula a cada elemento del arreglo y retornan un nuevo arreglo con los elementos modificados

let   dobles  = notas.map((elemento,i) => {
    return elemento % 2 == 0

}) 
console.log(dobles);

    

