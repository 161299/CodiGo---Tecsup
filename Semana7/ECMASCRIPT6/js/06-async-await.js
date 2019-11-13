// tan solo al colocar async la funcion se convierte en una promesa
// resolve es equivalente a la palabra return 
// async => transforma una funcion normal, en una promesa
// throw es equivalente a reject
let buscarCiudad = async (nombre)=>{
    if(nombre === "Puno,pe") {
        console.log("return es equivalente a resolve");
        return "Correcto se recibio Puno"
    }else{
        console.log("throw es equivalente a reject");      
        throw "No se recibio Puno"  
    }
};
buscarCiudad("Punso,pe").then(rpta =>{
    console.log("then"); 
    console.log(rpta);
}).catch(error => {
    console.log("throw");
    console.log(error);
})

// ============================================

let consultarAPI = async (numero) =>{
    switch (numero) {
        case 1:
            return "Uno"
        case 2:
            return "Dos"
        case 3:
            return "Tres"
        default:
            throw "error!"
    }
}

let otraFuncion = async (condicion)=>{
    if (condicion == "Uno") {
        let otroNumero = "RESULTADO CORRECTO"
        return otroNumero
    }
}
// await => captura lo que esta promesa responda
// no puede existir la funcion await si no esta dentro de una funcion asyncrona
// cuando nosotros tenemos mas de una APIS nos sirve e await
let devolverMAYUSCULAS = async (palabra)=>{
    return palabra.toUpperCase();
}

let consumirAPIS = async()=>{
    let x = await consultarAPI(1)
    let mayus = await devolverMAYUSCULAS(x);
    let otro = await otraFuncion(x)
    let objTmp = {
        primeraFuncion : x,
        SegundaFuncion : mayus,
        TerceraFuncion: otro
    }
    return objTmp
}
consumirAPIS().then((respuesta)=>{
    console.log(respuesta); // {PimeraFuncion: "Uno", SegundaFuncion: "UNO", terceraFuncion: "RESULTADO CORRECTO"}
    
})
