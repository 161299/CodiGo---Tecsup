// Creando un objeto date con la fecha actual
let hoy = new Date();
console.log(hoy)

// Enero tiene el valor de '0'
// Diciembre '11'
let navidad = new Date(2019,11, 25);
console.log("Navidad")
console.log(navidad)

let haloweed = new Date("October 30 2019")
console.log(haloweed)

// ////////////////////////////////////////////7
// Obtener el año de una fecha

console.log(navidad.getFullYear())

// Obtener el numero del dia de una fecha del mes
console.log(navidad.getDate());

// Obtener el numero de la posicion del mes de una fecha
console.log(navidad.getMonth());
// Obtener la hora de un dia en este caso el de navidad
console.log(navidad.getHours());

// restando 2 fechas

let respuesta = navidad - haloweed
console.log(respuesta);

// imprimir la cantidad de semanas que hay entre hallo y navidad

let mlSeg = 86400000
let semana = 7
console.log((respuesta/mlSeg)/ semana)

