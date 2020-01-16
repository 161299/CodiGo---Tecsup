//==========EJERCICIO==============
// Crear un menú
// que le pida escoger al cliente entre 3 opciones si el cliente marca cualquiera de las 3 el programa mostrar un mensaje distinto en la consola.
// si el cliente decide salir, el programa finalizará

// let escoger = prompt("Ingrese opciones X,Y,Z o salir para salir del programa")

//     if(escoger == "x"){
//         console.log("Escogio la opcion 1")
//     }else if(escoger == "y"){
//             console.log("Escogio la opcion 2");
//     }else if(escoger == "z"){
//         console.log("Escogio la opcion 3")
//     }else{
//         console.log("SALIR")
//     }

// ============EJERCICIO 2 ==============

class Restaurant {
    nombre;
    direccion;
    platos;
    constructor(nom, dir){
        this.nombre = nom;
        this.direccion = dir;
        this.platos = [];
    } 
    mostrarInfo (){
        console.log(`nombre : ${this.nombre}, direccion : ${this.direccion}`);
        
    }
}

let ingreseNombre = prompt("Ingrese el nombre del Restaurante");
let ingreseDireccion = prompt("Ingrese la direccion del Restaurante");


let agregarPlatos = function(nom,cal,pc){
    let obtenerDetalle = {
        nombre: nom,
        calorias: cal,
        precio: pc
    };
    añadirDetalle:() => {
        console.log(`nombre del plato :${nombre} -> calorias del plato ${calorias} -> precio del plato ${precio}`)
    }
    
}
let namePlato = prompt("Ingrese nombre del plato");
let calPlato = +prompt("Ingrese calorias del Plato")
let pcPlato = +prompt("Ingrese el precio del plato")

agregarPlatos(namePlato,calPlato,pcPlato);






let defecto = new Restaurant(ingreseNombre,ingreseDireccion);

defecto.mostrarInfo();

















// class Prosor{

//     nombre;
//     apellido;
// constructor es como decir -> function (nom, ape) <-   pero esa es la forma antigua ahora para clases tan solo colocamos  la palabra especial CONSTRUCTOR(nom,ape){}
    // constructor(nom, ape){
    //   this.nombre = nom;
    //   this.apellido = ape  
    // }
    // creamos esta function mostrarInfo para mandar a imprimir es necesario para que se imprima en la consola
//     mostrarInfo(){
//         console.log(`${this.nombre} ${this.apellido}`);
        
//     }
// };
//  profe1 -> estamos enviando los datos a constructor ->  si no hay constructor  no es necesario poner los datos aqui
// let profe1 = new Prosor('Cristhian','Laurente');

// profe1.mostrarInfo();
// console.log(profe1.nombre);
    

