class Persona {
    _nombre : string;
    _apellido: string;
    _edad : number;
    _dni : number;

    constructor(nombre : string, apellido: string , edad: number,dni: number){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._dni = dni
    }
}

class Trabajador extends Persona{
    _cargo : string;
    constructor(nombre : string, apellido: string , edad: number,dni: number, cargo?: string){
        // para reemplazar el constructor de Persona debemos de hacer con el Super()  -> super constructor
        super(nombre,apellido,edad,dni );
        this._cargo= cargo;
    }   
}

let objTrabajador = new Trabajador("Cristhian", "Laurente",19, 75076838);
console.log(objTrabajador._nombre);
