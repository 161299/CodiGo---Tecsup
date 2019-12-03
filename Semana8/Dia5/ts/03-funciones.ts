let retornaSumatoria =(numeros: number[]): number =>{
    let suma : number = 0;
    for (const numero of numeros) {
       suma += numero;
    }
    return suma;
}

console.log(retornaSumatoria([4,65,6]));

// ======================================= //
let imprimirObjeto = (objeto: Object): void =>{
    for (const key in objeto) {
        console.log(`Atributo => ${key} | valor =>  ${objeto[key]}`);
    }
}

let objProducto = {
    descripcion: "Leche",
    marca: "Gloria",
    precio: 25.3
}

imprimirObjeto(objProducto)



let json = {"-LtjwrpsdH4frvwsSD_F":{"direccion":"","lat":"1","lng":"5","nombre":"","nrocanchas":"1","telefono":""},"-Ltjwvd8DBXlj7FfhVLk":{"direccion":"Calle Blondell 105","lat":"1","lng":"5","nombre":"Bola 8","nrocanchas":"1","telefono":"974204853"},"-LtjxVWJCQwDlIMIzaRY":{"direccion":"Dolores","lat":"4","lng":"6","nombre":"Jarawa","nrocanchas":"4","telefono":"83948793"},"-LtjxjTYI9frhgrXrkc6":{"direccion":"slkdfmlskmdflksmd","lat":"8","lng":"10","nombre":"Jarawalskdflsdkflsdkmlskdml","nrocanchas":"7","telefono":"83948793"},"-Ltjy5ZHO21Dta6KYz-w":{"direccion":"slkdfmlskmdflksmdasdas","lat":"8","lng":"10","nombre":"Jarawalskdflsdkflsasdasdasdasdasd","nrocanchas":"7","telefono":"83948793"},"-LtjyuVmi5PibeJj8j4f":{"direccion":"Calle Blondell 105","lat":"1","lng":"6","nombre":"Bola 8","nrocanchas":"12222","telefono":"974204853"},"-LtjzTiHDCt3ZIAj4yGY":{"direccion":"direccion","lat":"12","lng":"12","nombre":"Nombre","nrocanchas":"3","telefono":"974204853"},"-Ltk-Cxv8S8XQW9H7BHu":{"direccion":"Calle Blondell 105","lat":"4","lng":"4","nombre":"Bola 8","nrocanchas":"6","telefono":"974204853"},"-Ltk0JgYiwoCBNOTNj8D":{"direccion":"ppppp","lat":"4","lng":"3","nombre":"pppp","nrocanchas":"4","telefono":"974204853"}}

let ejercicio = (objeto : {}) => {
    let newArray: {}[] = []
    for (const i in objeto) {
        newArray.push(
            {
                key : i,
                ...objeto[i]
            }
        )
    }
    console.log(newArray);
    
}
ejercicio(json)


