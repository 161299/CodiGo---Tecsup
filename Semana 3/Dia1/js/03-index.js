// var horas = +prompt("Ingrese cantidad de horas");

// if( horas>10){
//     console.log(`Total es ${37 + ((horas-10)*2)}`);
// }else{
//     if(horas>5){
//         console.log(`Total es ${22 + ((horas-5)*3)}`);
//     }else{
//         if(horas>2){
//             console.log(`Total es ${10 + ((horas-2)*4)}`);
//         }else{
//             console.log(`Total es ${horas*5}`);
//         }
//     }
// }


// es bisiestro cuando es divisible por 4 pero no por 100
// es bisiesto cuando es divisible por 400
// cualquier otro caso, no es divisible

// var año = +prompt("Ingrese el año")
// if(año%4==0 && año%100!=0){
//    console.log(`Si es bisiesto`);
// }else{
//     if(año%400==0){
//         console.log(`Si es bisiesto`)
//     }else{
//         console.log(`No es bisiesto`)
//     }
// }


// 3.2

// var horas = +prompt("Ingrese horas Trabajadas");
// var PH = +prompt("Ingrese el pago por hora");


// if(horas>40){
//     console.log(`el pago total es ${(horas*PH)+PH}`)
// }else{
//     console.log(`${PH*horas}`)
// }

// 3.9

var costo = +prompt("Ingrese costo");

var alcohol = 0;
var lentes = 0;
var enfermedad = 0;

var persona = prompt(`consume alcohol?`);
if(persona=="si"){
    alcohol= 0.10*costo
}
var persona = prompt(`usa lentes?`);
if(persona=="si"){
    
    lentes=0.05*costo
}
var persona = prompt(`tiene laguna enfermedad?`);
if(persona=="si"){
    
    enfermedad =0.05*costo
}
var persona = prompt(`es mayor de 40?`);
if(persona=="si"){
    edad = costo*0.10;
}else{
    edad = costo*0.20;
}

var costototal = (alcohol+lentes+enfermedad+edad)+costo

console.log(`le cuesta ${costototal}`)



