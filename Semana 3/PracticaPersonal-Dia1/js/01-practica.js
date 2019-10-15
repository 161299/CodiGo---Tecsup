var menor=0;
var igual=0;
var mayor=0;
var cantidad =+prompt("Ingrese cantidad de numeros");

for(let i=0; i<cantidad; i++){

    if(cantidad>0){
        var m=+prompt("Ingrese numero")
        menor=m;
        igual=m;
        mayor=m;
        switch(true){
            case igual=== 0:
                console.log(`Igual a cero son : ${m}`);
                break;
            case mayor>0:
                console.log(`Mayor a cero son ${m}`)
                break;
            default:
                    console.log(`Menor a cero son ${m}`)
        }
    }
}