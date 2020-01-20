// La manera mas practica para escribir un string
let nombre = new String("Tecsup Arequipa Codigo");
console.log(nombre);

// Propiedades de los string

// 1.- length => indica el numero de caracteres del string
console.log(nombre.length);
// 2.- toLowerCase() => devuelve el valor en miniscula del string
console.log(nombre.toLocaleLowerCase()),
// 3.- toUpperCase() => devuelve el valor en mayusculas del string
console.log(nombre.toUpperCase());
// 4.- trim() => quita los espacios en blanco a los extremos del string
// Ejm: " Bienvenidos a Codigo  "
// trim() => "Bienvenidos a Codigo"
console.log(nombre.trim());
// substr(inicio, nroletras) => devuelve una subcadena a partir del string original
// inicio => posicion en la que inicia la subcadena
// nroletras => la cantidad de espacios luego del inicio
console.log(nombre.substr(4,6));
// substring(inicio,final) => Devuelve una subcadena a partir del string original
// inicio => posición en la que inicica la subcadena
// final => posicion +1 en la que termina la cadena

// NOTA =>Si no se especifica el finalla subcadena termina en el final de la cadena
console.log(nombre.substring(5,9));

// imprimir los 5 ultimos caracteres del string

console.log(nombre.substring(nombre.length-5));

// startsWith(cadena) => devuelve true en caso de que el string inicie con el contenido de la variable cadena
console.log(nombre.toLowerCase().startsWith("tEc".toLowerCase()));

// endsWith(cadena) => analogo a startsWith, pero se analiza que el string finalice con la cadena.
console.log(nombre.endsWith("go"));

// indexOf(cadena) => devuelve la posicion en la que una subcadena iniciar. Si la subcadena no existe, devuelve -1
console.log(nombre.indexOf("e"));

// charAt(position) => Devuelve la letra que se encuentra en posicion(numero) dada.
console.log(nombre.charAt(2));


// EJERCICIOS CLASICASOS
// Cada ejercicio es una funcion que recibe un string
// ejm

// let cuentaVocales = () =>{

// }

// 1.- Determinar el numero de vocales en un string 
// 2.- Determinar el numero de palabras en un string
// 3.- Determinar si una cadena es un palíndromo
// Ejm: 'oso'
// Ejm: 'anita lava la tina'


// 1.-
// let cuentaVocales = () =>{
//     palabra = prompt("Ingrese palabra")

// }


// 2.-
// let palabraNum = new String(prompt("Ingrese Palabra"));
// let numeroString = () =>{
//     palabraNum = palabraNum.length
//     return palabraNum
// }
// console.log(palabraNum)

// 3-


// let reverseString = (str) => {

//     let splitString = str.split ("");
//     let reverseArray = splitString.reverse();
//     let joinArray = reverseArray.join("");

//     if(joinArray == str){
//         console.log(`Si es una palabra palindromo ${joinArray}` )
//     }else{
//         console.log(`No es una palabra Polindroma`)
//     }
//     return joinArray;
// }

// let ingresar = prompt("Ingrese palabra Polindroma")
// str = ingresar
// reverseString(str)

// 3.-
let esPalindromo = (cadena) => {
    let cadena2 = "";
    // Quitar los espacios en blanco
    for (let i = 0; i < cadena.length; i++) {
        if(cadena[i] != " "){
            cadena2 = cadena2 + cadena2[i];
            console.log("Si es una palabra polindroma");
            
        }
    }
    // ver si la cadena es par o impar para determinar su numero de comparaciones
    let nroVueltas =0;
    if(cadena2.length % 2 == 0){
        nroVueltas = cadena2.length / 2;
    }else{
        nroVueltas = cadena2.length / 2 - 0.5;
    }
    
    rpta = true
    for (let j = 0; j < nroVueltas.length; j++) {
        if(cadena2[j] != cadena2[cadena2.length -1 -j]) {
            rpta = false;
            break;
        }
        rpta=true
    }
    
    if(rpta){
        console.log("Es palindromo");        
    }else{
        console.log("NO ES PALINDROMO");   
    }
}
let palabra = prompt("Ingrese palabra")
cadena = palabra
esPalindromo(palabra)