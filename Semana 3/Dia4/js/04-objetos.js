// objeto
// creando un objeto
// let vehiculo = {
//     placa: 'EMD-123',
//     color:  'Rojo',
//     marca:  'Mazda',
//     modelo: 'CX-3'
// };

// console.log(vehiculo.modelo);
// =====================================
// modificando sus propiedades
// vehiculo.color = "Azul";
// console.log(vehiculo);

// ==============================
// let persona = {
//     nombre : "Cristhian",
//     apellido:   "Laurente",
//     coloresFavoritos: ["Azul","Negro","Rosa"]
// };
// console.log(persona.coloresFavoritos);

// =====================================
// let album = {
//     año: 2019,
//     autor: "Gian Marco",
//     nombre: "Resistir",
//     canciones: [
//     {
//         titulo: 'Canción 1',
//         duración: 4.20
//     },
//     {
//         titulo: 'Canción 2',
//         duración: 5.00
//     },
//     ]
// };
//  imprimiendo el titulo de la cancion 2
// console.log(album.canciones[1].titulo);

// =========================================
// let restaurant = {
//     nombre  : 'La Panchita',
//     direccion: 'Av. Siempre Viva',
//     tenedores: 5,
//     mostrarpedidos: ()=>{
//         console.log(`Mostrando pedidos`);

//         console.log(restaurant.pedidos)
//     },
//     pedidos : [
//         {
//             id: 1,
//             plato: 'Lomo Saltado'
//         },
//         {
//             id: 2,
//             plato: 'Chaufita'
//         }
//     ]
// };

// restaurant.mostrarpedidos();

// ==============================================

let libro = {

    autor: "Clorinda Mato de Turner",
    titulo: 'Aves sin nido',
    editorial: {
        nombre: 'Editorial 1',
        anioPub: 2019
    }
};
console.log(libro.editorial.anioPub);

// ===============================================
//  Cree un objeto de nombre 'objFactura', que tenga la estructura de una factura 
// propiedades seran :  
/**
 * 1. cabecera (objeto)
 * 1.1. ruc (string)
 * 1.2. razonSocial (string)
 * 1.3. fecha (string),
 * 1.4. nro (string)
 * 2
 */

 let objFactura ={
     cabecera: {
         ruc: "9821212",
         razonSocial: "iiiiii",
         fecha: "16.12.99",
         nro: "1"
     },
     detalle: [
         {
            cant: 1,
            descripcion: "esta es una descripcion",
            precioUnit: 1,
            total: 1
         },
         {
            cant: 1,
            descripcion: "esta es una descripcion",
            precioUnit: 1,
            total: 1
         }
        
     ],
     totalFactura: 0,
     agregarDetalle: () =>{
         objFactura.detalle.push({})
    }
 };

 console.log(objFactura);
 objFactura.agregarDetalle();
 console.log(objFactura);
 
 




