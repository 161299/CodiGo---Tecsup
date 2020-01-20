// Clases Antiguas
let Alumno = function (nom, ape){
    let a ={
        nombre: nom,
        apellido:ape,
        mostrarInfo: function (){
            console.log(`${this.nombre} -> ${this.apellido}`)
        }
    }
    return a;

}
 
let objCristhian = new Alumno('Cristhian','Laurente');
objCristhian.mostrarInfo();

// =========LA NUEVA FORMA DE CREAR CLASES ===================0

// LAS CLASES SON PLANTILLAS QUE NO SE PUEDEN MODIFICAR A COMPARACION DE LOS OBJETOS ELLOS SON TANGIBLES Y SE PUEDEN MODIFICAR
class Prosor{

    nombre;
    apellido;
// constructor es como decir -> function (nom, ape) <-   pero esa es la forma antigua ahora para clases tan solo colocamos  la palabra especial CONSTRUCTOR(nom,ape){}
    constructor(nom, ape){
      this.nombre = nom;
      this.apellido = ape  
    }
    // creamos esta function mostrarInfo para mandar a imprimir es necesario para que se imprima en la consola
    mostrarInfo(){
        console.log(`${this.nombre} ${this.apellido}`);
        
    }
};
//  profe1 -> estamos enviando los datos a constructor ->  si no hay constructor  no es necesario poner los datos aqui
let profe1 = new Prosor('Cristhian','Laurente');

profe1.mostrarInfo();
console.log(profe1.nombre);

// ==========================================================================

