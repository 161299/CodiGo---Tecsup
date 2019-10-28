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


// Las propiedades set sirven para modificar nuestra variable de tipo Date

let hoyMiercoles = new Date(2018, 11, 01)
console.log(hoyMiercoles);
hoyMiercoles.setFullYear(1999);
hoyMiercoles.setDate(hoyMiercoles.getDate()+5)
console.log(hoyMiercoles);


// let nueva_navidad = navidad.setFullYear(2015);
// let nueva_navidad = navidad.setMonth(5);
// console.log(nueva_navidad);


// Sabiendo que entre los dias 25 a 28 de octubre va a ver un CyberDay se desea ver que si la fecha del usuario esta dentro de esos dias mostrar que hay un dscto de 10% en toda la cuenta

let dia_usuario1 = new Date(2019,09,26,10,29)
let dia_usuario2 = new Date(2019,09,24,14,38)
let dia1 = new Date(2019,09,25)
let dia2 = new Date(2019,09,28)
let respuesta;

if(dia_usuario1 >= dia1 && dia_usuario1 <= dia2){
    if(dia_usuario2 >= dia2 && dia_usuario2 <= dia2){
        
        console.log("Si tienes descuento");
    }
    
}else{
    console.log("No tienes descuento")
}


