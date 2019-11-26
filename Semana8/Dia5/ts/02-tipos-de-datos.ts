// string

let nombre: string;
nombre = 'Cristhian';
nombre = "Eduardo"
// number
let edad : number;
edad = 19;
// booleanos
let activo: boolean;
activo = true;
// declaracion directa
let apellido: string = "Laurente";

// arreglos
let libros: Array<string>;
libros.push("La Biblia");

// arreglos forma 2
let precios :  Number[];
precios.push(90);
let string: String[];
string.push("hola");

// Tupo de dato 'ANY' -> cualquiera
let objeto: any;
objeto = "sad";
objeto = 90;

// Arreglo any
let arregloAny: any[];
arregloAny.push(89);
arregloAny.push("prueba");

// Variables de 2 tipos de datos
//    | ->  significa que puede ser uno o otro  en este caso  puede ser string o number
let alfaNumerico: string | number
alfaNumerico = "tres";
alfaNumerico = 3;

// arreglos de 2 tipos de datos
let arreglo2: [string | number];
arreglo2.push("texto");
arreglo2.push(3);

// =============================
let sumar = (a: number , b: number )=>{
    console.log(a+b);
}
sumar(10,3)