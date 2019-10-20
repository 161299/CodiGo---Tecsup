// var añoNacimiento = +prompt("Ingresar año de nacimiento")
// var año = añoNacimiento
// var añoActual = 2019
// var rpta = añoActual - añoNacimiento
// var cumplisteAños = prompt("Cumpliste año")

// if (cumplisteAños == "si" ){
//     console.log(`Tu edad es ${rpta}`)
// } else{
//     console.log(`Tu edad es ${rpta-1}`)
// }

// var num1 = 40
// var num2 = 10
// var num3 = 80

// if ( num1 > num2){
//     var a = num1
//     if(num1 > num3){
//         console.log(`El mayor es ${num1}`)
//     }else{
//         console.log(`El mayor es ${num3}`);
        
//     }
// }else{
//     var a = num2
//     if( num2 > num3){
//         console.log(`el mayor es ${num2}`)
//     }else{
//         console.log(`el mayor es ${num3}`);
        
//     }
// }

var monto = +prompt("Ingrese monto");
var M = monto
var descuento = 0.15
var IVA = 0.18
var accedeDescuento = prompt("Usted accede al descuento")
var total = 0;
if (accedeDescuento == "si"){
    var montoDescontado = monto - descuento
}else{
    if( accedeDescuento == "no"){
        descuento = 0
        var montoDescontado = monto - descuento
    }
}

total = montoDescontado * IVA
console.log(`el monto final es ${total}`)
