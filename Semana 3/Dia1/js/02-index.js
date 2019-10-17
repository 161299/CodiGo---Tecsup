var n1 = +prompt("Ingrese el primer valor")
var n2 = +prompt("Ingrese el segundo valor")
var n3 = +prompt("Ingrese el tercer Valor")

if(n1>n2){
    if(n1>n3){
        console.log(`El mayor es n1`);
        if(n2>n3){
            console.log("EL medio es n2");
            console.log("EL menor es n3");
        }else{
            console.log("EL medio es n3");
            console.log("EL menor es n2"); 
        }
    }else{
        console.log("el mayor es n3");         
        console.log("el medio es n1");         
        console.log("el menor es n2") ;        
    }
}else{
    if(n3>n2){
        console.log("el mayor es n3");
        console.log("el del medio es n2");
        console.log("el mEnor es n1");
    }else{
        if(n3>n1){
            console.log("el mayor es n2");
            console.log("el del medio es n3");
            console.log("el menor es n1");
        }
        else{
            console.log("el mayor es n2");
            console.log("el del medio es n1");
            console.log("el menor es n3");         
        }
    }
}