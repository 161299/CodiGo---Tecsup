// que NO retorna valor 
    // NO recibe parametros
// FUNCIONES
// son porciones de codigo cuando nosotros quedramos llamar a esa funciones
// function nombre (     ){

// }

// function saludar(){
//     console.log("Saludando")
// }
// saludar();
// saludar();

// -----------------------------------

// Que NO retorna valor
// Que si recibe parametros

// function parametro(nro, otro){
//     console.log("con parametro");
//     console.log(`llego el ${nro * otro}`);
    
// }
// parametro(2,5);
// parametro(100,9);
// parametro("string",43);

// function sumar(uno, dos){
//     console.log(` la suma tota es ${uno+dos}`)
// }
// sumar(3,5)
// sumar(5,5)

// -------------------------------------
// Que si retorna valor
// Que si recibe parametros

// function nombre(a,b){
//     let sumar = a+b;
//     return sumar;
//     // return devuelve la variable suma a donde se invoc+o la funcion
//     // return finzaliza la ejecion de una funcion
    
// }
// nombre(5,6);
// console.log(nombre(5,6))

// RETO ---> 
// en una linea  usando la funcion anterior sumar 4 numeros
/*function nombre(a,b){
    let sumar = a+b;
    return sumar;
}
console.log(nombre(nombre(2,5),nombre(4,6)));/*

// RETO2
// una funcion que se llame getPares
/**
 * Función que recibe un arreglo de números y retorna un 
 * subarreglo de los numeros pares solamente
 * @param {*} numeros arreglo de núnmeros
 */

//  function getPares(numeros){
//     let rpta = [];
//     for (let i = 0; i < numeros.length; i++) {
//         if(numeros[i] % 2 == 0){
//             rpta.push(numeros[i]);
//         }
//     }
//     return rpta;
// }
// let arreglo = [1,2,4,2,76,77,0,1,44];
// let pares =getPares(arreglo);
// console.log(pares);


/**
 * Funcion que recibe un arreglo de nombres y un nombre a buscar
 * Si el nombre buscado, se encuentra en el arreglo, la funcion retornara
 * la posicion en la que se encuentre el nombre buscado en caso que no se encuentre el nombre, la
 * funcion retornara -1
 * @param {String[]} nombres  Arreglo de nombres
 * @param {String} busqueda El nombre buscado
 */
function buscarNombre(nombres,busqueda){
    

    for (let i = 0; i < nombres.length; i++) {
        if(nombres[i]==busqueda){
            return i;
        }
             
    }
    return -1;   
}

// let ingrese = prompt("Ingrese nombre")
// let nombre = ["Cristhian","Erick","Diego"];
// let b = buscarNombre(nombre,ingrese)
// if(b != -1){
//     console.log(`Nombre encontrado en la posicion ${b}`);
    
// }else{
//     console.log(`No se encontro el nombre buscado`);
// }

// Se tiene la siguiente estructura
/**
 * Funcion que IMPRIME la lista de curso que un alumno lleva dado el nombre del alumno
 * @param {*} nombre 
 * @param {STRING} busqueda 
 */

let alumnos =['Jorge','Carlos','Ximena'];
// let cursos = [['algoritmos','poo'],['algoritmos'],['algoritmos','poo','calculo']];
// let notas = [[12,13],[9],[14,5,20]];
// function getCursos(nombre){

//     let pos = -1;
//     for (let i = 0; i < alumnos.length; i++) {
//         if(alumnos[i]==nombre){
//             pos = i;
//             break;
//         }
             
//     }
//     if(pos != -1){
//         console.log(`los cursos de ${nombre}`)
//         console.log(cursos[pos])
//     }else{
//         console.log(`No hay cursos para esa persona`);        
//     }   
// }
// getCursos('Ximena')

/**
 * Funcion que modifica el nombre de un alumno
 * Al final, la funcion imprime la nueva lista de alumnos
 * @param {*} nombreAntiguo el nombre antiguo del alumno
 * @param {*} nuevoNombre el nuevo nombre del alumno
 */

 let newName = ["Cristhian","Diego","Lizbeth"]
function modificarNombre(nombreAntiguo, nuevoNombre){
    let a = buscarNombre(newName,nombreAntiguo)
             newName[a]= nuevoNombre
    
    console.log("Arreglo de alumnos")
    console.log(newName)
}
modificarNombre("Cristhian","otro")







