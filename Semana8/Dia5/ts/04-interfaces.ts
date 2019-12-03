interface iPersona{
    nombre: string;
    apellido: string;
    edad: number;
    apodo?: string;
}

let imprimirDatosPersonales = (persona :iPersona)=>{
   console.log(` Apellido : ${persona.apellido}`);
   console.log(` Nombre : ${persona.nombre}`);
    
}

let objCristhian: iPersona = {
    nombre: "Cristhian",
    apellido: "Laurente",
    edad: 19,
}