var costoTraje = +prompt("Ingrese costo del Traje");
if (costoTraje > 2500){
    var de = costoTraje *0.15;
} else{
    var de = costoTraje * 0.08;
}

var pf = costoTraje - de;
console.log(`Precio Final S/. ${pf}`)
console.log(`Descuento  S/. ${de}`)
