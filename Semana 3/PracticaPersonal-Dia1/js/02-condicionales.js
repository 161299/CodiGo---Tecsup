// CONDICIONALES
//  Una condición es una sentencia de la cual nuestro codigo va a poder tomar una decision dependiendo si se cumple o no cierta CONDICION

//   if/else
// if(condicion){
//     //instrucciones
// }else{
//     // instrucciones
// }

// EJEMPLO 1
// var nombre = "Cristhian",
//     edad = 19;

// if(nombre == "Cristhian"){
//     console.log(`Bienvenido ${nombre}`)
// }else{
//     console.log(`Bienvenido Anonimo`)
// }
// RESULTADO
// Bienvenido Cristhian

// var nombre = "Eduardo",
//     edad = 19;
// if(nombre == "Cristhian"){
//     console.log(`Bienvenido ${nombre}`)
// }else{
//     console.log(`Bienvenido Anonimo`)
// }
// RESULTADO
// Bienvenido Anonimo

// EJEMPLO 2
// var nombre = "Cristhian",
//     edad = 19;
// if(edad == 18){
//     console.log(`Bienvenido ${nombre} tienes 18 años`)
// }else if(nombre == "Cristhian"){
//     console.log(`Bienvenido ${nombre}`)
// }else{
//     console.log("Datos Incorrectos")
// }

// TAMBIEN SE PODRIA ESCRIBIR ASI
// if(edad ==18){
//     console.log(`Bienvenido ${nombre} tienes 18 años`)
// }else{
//     if(nombre == "Cristhian"){
//         console.log(`Bienvenido ${nombre}`)
//     }else{
//         console.log("Datos Incorrectos")
//     }
// }


//EJEMPLO 3

// OPERADORES DE COMPARACION
//  > menor que
//  < mayor que
//  >= mayor o igual
//  <= menor o igual
//  == igual que
// != distinto de
// TAMBIEN PODREMOS ENCONTRARNOS ASI
//  === igual que

// var nombre = "Cristhian",
//     edad = 18;

    // ==== al usar esto el valor que estamos igualando tiene que ser de la misma variable  (numerico === string = FALSE)/ (numerico === numerico = TRUE) 
//     if(edad === 20){
//         console.log("OK")
//     }else{
//         console.log("False");   
//     }

// RESPUESTA
// False