// var cantidad = +prompt("Ingrese la cantidad de dinero")

// if(cantidad>0){
//     switch(cantidad){
//         case 10:
//             console.log("Puedo comprar una gaseosa");
//             break;
//         case 15:    
//             console.log("Puedo comprar un Sanguche y una Gaseosa");
//             break;
//         case 20:
//             console.log("Puedo comprar un pollo a la brasa sin papas");
//             break;
//         case 25:
//             console.log("Puedo comprar un pollo a la brasa con papas y gaseosa");
//             break;
//         default:
//             console.log("Puedo comprar lo que sea");
//             break;  
//     }
// }else{
//     console.log("Se produjo un error no se aceptan negativos");
    
// }

// var capital = +prompt("Ingrese capital")

//     switch(true){
//         case capital>=500 && capital<800:
//             console.log("Puedes viajar a Cusco");
//             break;
//         case capital>=800 && capital<1200:
//             console.log("Puedes viajar a la Selva");
//             break;
//         case capital>=1200 && capital<2000:
//             console.log("Puedes viajar al exterior");
//             break;
//         case capital>=2000:
//             console.log("Puedes viajar a europa");  
//             break;
//         case capital>0 && capital<500:
//             console.log("Dinero insuficiente");
//             break;
//         case capital<0:
//             console.log("No se aceptan negativos");
//             break;
//         default:
//             console.log("carecteres no validos");
//     }


// var numero = +prompt("Ingrese numero");

// console.log(`${(numero-5)}; ${numero-4}; ${numero-3}; ${numero-2}; ${numero-1}; ${numero}`);


var concatenar = +prompt("Ingrese numero");
var numeros= "";

for(let i=concatenar-5 ; i<concatenar; i++){
    numeros+=i+",";
}

console.log(numeros);
for (let i = concatenar-10; i < concatenar; i++){
    if(i%2===0){
        numerospares += i+",";
    }
}
console.log(numerospares);

               
                    
