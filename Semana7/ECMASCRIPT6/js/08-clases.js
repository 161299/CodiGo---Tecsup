// Encapsulamiento de Campos
class Persona {
    _nombre;
    _apellido;
    _edad;
   
    constructor(nom, ape, ed){
        this._nombre = nom;
        this._apellido = ape;
        this._edad = ed;
    }
    // esta es una funcion
    // get  asignar variables  y set para obtener variable
    get nombre(){
        return this._nombre
    }
    // la ventaja de set y get es que se puede repetir el mismo nombre de funcion y no pasa nada
    set nombre(nom){
       this._nombres = nom;
    }

    
    static imprimirAnioActual(){
        console.log((new Date()).getFullYear());
    }
}

let objJuan = new Persona("Juan","Rodriguez", 23);
console.log(objJuan.nombre); //Juan
let x = objJuan.nombre = "Cristhian"
console.log(x); //Cristhian

// esto solo es posible si la funcion es estatica en la linea 23
Persona.imprimirAnioActual(); //2019



