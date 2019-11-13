window.onload = () =>{

    console.log("funcionando");

    // destructuración de arreglos

    // no se puede poner  ...resto al inicio
    let numeros = [100,20,300,4,5,6];
    let [,,tres ,...resto] = numeros
    console.log(tres);  //nos imprime    300
    console.log(resto);  //nos imprime el resto del array [4,5,6]

    let matriz = [100,5,[7,9],90];
    let [,,[siete,nueve]] = matriz;
    console.log(siete);


    // destructurando los 2 primeros elementos del arreglo que llegue a la funcion
    let sumarLosDosPrimeros = ([a,b]) =>{
        console.log(a+b);   
        // nos imprime 120    del array de numeros su primer numero es 100 y el segundo es 20   
    }
    sumarLosDosPrimeros(numeros);
    
    // segundo ejemplo
    let sumarNumeros = ([a,b]) =>{
        console.log(a+b);   
    }
    sumarNumeros(matriz)

    // ============================================================00

    // destructuracion de objetos

    let objPersona = {

        nombre: 'Cristhian',
        apellido: 'Laurente',
        dni: '123413256',
        edad: 19,
        nacionalidad: {
            pais: 'peru',
            gentilicio: 'Peruano'
        },
        coloresFavoritos: ['Azul','Negro','Rojo']

    };

    // destructurando el nombre
    let {nombre }= objPersona;
    console.log(nombre);
    
    // destructurar el 'nombre' con un nuevo nombre de variable
    let {nombre:nom} =objPersona;
    console.log(nom);

    // destructurar varias variables a la vez

    let {edad,dni} = objPersona;
    console.log(`Edad: ${edad} y DNI: ${dni}`);
    
    // destructurando un objeto que tiene como padre un objeto objPersona
    let { nacionalidad:{gentilicio}} = objPersona
    console.log(gentilicio);
    
    // destructurando un array que tiene como padre un objeto objPersona
    let {coloresFavoritos:[,black]} =objPersona
    console.log(black);

    let imprimirDni = ({dni})=>{
        console.log(dni);          
    }
    imprimirDni(objPersona);
    
}