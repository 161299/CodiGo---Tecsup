window.onload = () =>{


    console.log("funcionando");

    // La promesas es un objeto qie en conclusion hacen sincrono el proceso ASINCRONO
    // tienen un proceso 
    // un proceso Asincrono significa que puede demorar  un poco en la base de datos
    // este proceso asincrono recibe dos parametros en si son dos Callbakcs   (1) resolve() cuando todo este bien  y lo atrapamos en una funcion then()  | (2) reject() cuando el proceso hallá fallado  y lo atrapamos con la funcion catch() | solo se puede usar una de las dos

    // configuracion de la promesa  y consumo de la promesa son dos partes que tiene la PROMESA

    // Configuracion                              
    // la promesa ejecuta un proceso asincrono    
    //   resolve()        reject()
    // resolve() => la promsesa se ha ejecuta con una respuesta correcta o valida
    // reject() => La promesa indica que ha habido un error

    // Consumo
    // En el consumo, no importa cuál es la estructura de una promesa, lo que debemos saber es que si la promesa se cumple correctamente, se ejecuta la función then(), si el proceso falla se ejecuta la función catch()
    //   then()          catch()


//  EMPEZEMOS CON LOS EJEMPLOS =================================

    let buscarPeronaPorNombre = (nombre)=>{
        // (1) Creando una promesa
        // essta promesa  recibe un callback con el resolve y el reject
        return new Promise((resolve, reject)=>{
            // HACER UN PROCESOASINCRONO
            setTimeout(()=>{
                resolve(nombre);
            },1500);
        });      
    }

    // Consumiendo una promesa
    // en los dos casos se manda un callback
    // un callback es  -->    () => {}
    buscarPeronaPorNombre("Juan").then((mensaje)=>{
        console.log(mensaje);
        
        console.log("La promesa se resolvio");
        
    }).catch(()=>{
        console.log("La promesa tuvo un error");
        
    });




    
}