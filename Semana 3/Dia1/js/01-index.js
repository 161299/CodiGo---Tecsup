var n1 = +prompt("Ingresa el Primer Valor")
var n2 = +prompt("Ingrese el segundo valor")
var n3 = +prompt("Ingrese el tercer Valor")

if (n1>n2 && n1>n3){
    console.log(`el mayor es ${n1}`);
}else{
    if (n2>n3 && n2>n1){
        console.log(`el mayor es ${n2}`);
    }else{
        console.log(`el mayor es ${n3}`);
    }
}



