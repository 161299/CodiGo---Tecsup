// DOWHILE

// do{
//     // codigo a ejecutarse mientras la condicion se cumpla
// }while(condicion);

var pass = "123";
var intento = "";
var c = 0;
var acceso = false;
do{
    intento = prompt("ingresa el password")
    c++;
    if(intento == pass){
        console.log("Bienvenido");
        acceso = true;
    }


}while(c <3 && acceso == false);

console.log(`exediste el numero de intentos`)

