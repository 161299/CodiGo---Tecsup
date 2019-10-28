// ARRAYS ASOCIATIVOS
// arreglo["Persona"]="Cristhian";
// arreglo["Apellido"]="Laurente";

// console.log(arreglo["Apellido"])

// let productos = [];
// let prod1 = [];
// prod1["Codigo"] = 1000;
// prod1["Nombre"] = "SS Disk 512GB";
// prod1["Precio"]=700.00;

// productos.push(prod1)

// console.log(productos);

// Hacer un algoritmo para que el usuario le indique al sistema cuantos productos ingresar, al final de ingresarlos todos, el sistema debe mostrar todos los productos

let productos = [];

let producto = +prompt("Ingresar cantidad de productos")
for (let i = 0; i < producto; i++) {
    
    let nombre = prompt(`Ingrese el nombre del prducto ${i+1}`);
    let codigo = prompt(`Ingrese el codigo del prducto ${i+1}`);
    let precio = prompt(`Ingrese el precio del prducto ${i+1}`);

    let productoTmp = [];

    productoTmp["nombre"] = nombre;
    productoTmp["codigo"] = codigo;
    productoTmp["precio"] = precio;

    productos.push(productoTmp);
}
console.log(productos);

// Funcion que imprime nombre y precio del array que recibe por parametros
let imprimirNombres = (arreglo) =>{
    for (let i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i]["codigo"]+ " => " + arreglo[i]["precio"]);
    
    }
}
imprimirNombres(productos);