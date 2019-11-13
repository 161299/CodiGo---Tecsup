
// let getMayor = (elementos) =>{
//     let mayor = elementos[0];
//     for (let i = 0; i < elementos.length; i++) {
//         if (elementos[i]>mayor){
//             mayor = elementos[i];
//         }
        
//     }
//     return mayor;
// }
// console.log(getMayor([3,5,1,-5,40])) 

//  SPREAD OPERATOR
// La posibilidad que nos da Spread Operator 
// let frutas = (a,b, ...resto)=>{

//     console.log(a);
//     console.log(b);
//     console.log(resto);  
// }
// frutas('mango','melon','papaya','pera','manzana');

// PARAMETROS POR DEFECTO

let crearUsuario = (nombre="sin-nombre",apellido="sin-apellido") =>{

    console.log(`${nombre}`);
    console.log(`${apellido}`);

}
crearUsuario();
crearUsuario('Jorge')
crearUsuario('Cristhian','Laurente')