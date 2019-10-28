let paises = [
    { 
      idPais: 1, 
      nombrePais: 'Perú', 
    },
    { 
      idPais: 2, 
      nombrePais: 'Bolivia', 
    },
    { 
      idPais: 3, 
      nombrePais: 'Brasil', 
    }
];

let ciudades = [
    { idCiudad: 1, idPais: 1, nombreCiudad: "Lima" },
    { idCiudad: 2, idPais: 1, nombreCiudad: "Puno" },
    { idCiudad: 3, idPais: 2, nombreCiudad: "La Paz" },
    { idCiudad: 4, idPais: 2, nombreCiudad: "Cochabamba" },
    { idCiudad: 5, idPais: 3, nombreCiudad: "Sao Paulo" },
    { idCiudad: 6, idPais: 3, nombreCiudad: "Brasilia" },
]

let pais = document.getElementById("pais");
let ciudad = document.getElementById("ciudad")
let botoncito = document.getElementById("botoncito")

paises.forEach((objPais) =>{
    let option = document.createElement('option');
    option.innerText = objPais.nombrePais;
    pais.appendChild(option);
})

ciudades.forEach((objCiudad) =>{
    let optionCiudad = document.createElement('option');
    optionCiudad.innerText = objCiudad.nombreCiudad;
    ciudad.appendChild(optionCiudad);
})
















