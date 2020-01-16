class Persona {
    constructor(nombre, apellido, edad, dni) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._dni = dni;
    }
}
class Trabajador extends Persona {
    constructor(nombre, apellido, edad, dni, cargo) {
        // para reemplazar el constructor de Persona debemos de hacer con el Super()  -> super constructor
        super(nombre, apellido, edad, dni);
        this._cargo = cargo;
    }
}
let objTrabajador = new Trabajador("Cristhian", "Laurente", 19, 75076838);
console.log(objTrabajador._nombre);
