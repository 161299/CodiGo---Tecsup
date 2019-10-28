// PROGRAMACION ORIENTADO A OBJETOS

// let crearVehiculo = () => {

// }

// let objVehiculo = {
//     placa: 'WMF3-123',
//     marca: 'Mazda',
//     modelo: 'CX-9',
//     mostrarDatos: function(){
//         console.log(`${this.marca} ${this.modelo}`);       
//     }
// };

//  las funciones flechas no soportan la variable this
// La palabra this hace referencia al nombre del objeto en este caso objVehiculo
// objVehiculo.mostrarDatos(); 

// ==========ejemplo============================
// let crearVehiculo = () => {

//     let claseVehiculo = {
//         placa: 'WMF3-123',
//         marca: 'Mazda',
//         modelo: 'CX-9',
//         mostrarDatos: function(){
//             console.log(`${this.marca} ${this.modelo}`);       
//         }  
//     }
//     return claseVehiculo; 
// };

// let objVehiculo1= crearVehiculo();
// objVehiculo1.marca = 'Toyota';
// let objVehiculo2 = crearVehiculo();

// objVehiculo1.mostrarDatos();
// objVehiculo2.mostrarDatos();

// =============================================

let Playa = function(dir, nro, pph){

    let clasePlaya= {
        direccion: dir,
        nroEspacios: nro,
        precioPoRHora: pph,
        imprimirDatos: function (){
            console.log(`direccion -> ${this.direccion} precio por hora -> ${this.precioPoRHora} nro de espacios es -> ${this.nroEspacios} `)
        }
    };

    return clasePlaya;
};
// para crear una instancia debemos declarar la palabra new -> si usamos new la funcion tiene que ser anonima pero no tipo flecha
let  playa1 = new Playa('Av. Luna Pizarro',10,5);
playa1.imprimirDatos();
let playa2 = new Playa('Av. Brasil',13,4.3);
playa2.imprimirDatos();


