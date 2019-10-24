var principal = document.getElementById("principal");
// createelement([elemento])=>crea un elemento nuevo en el html PERO no lo coloca
var parrafo = document.createElement("p");
parrafo.innerHTML = "Soy un elemento creado en JavaScript";
parrafo.style.color = "Blue";
// Para agregarlo a nuestro documento HTML, primero debemos indicar donde lo vamos a poner una vez que tengamos donde lo queremos usamos el metodo principal.appendChild(parrafo)
// Agregar a su nuevo hijo al final de todos sus hijos
principal.appendChild(parrafo);
for (let i = 0; i < 5; i++) {
    let miParrafo = document.createElement("p");
    miParrafo.innerHTML = `Soy el Parrafo ${i+1} creado en JavaScript`;
    miParrafo.style.color = "black"
    principal.appendChild(miParrafo)
}

// Crear una tabla por n elementos ingresados por prompt, cada fila tendra los campos:
// Nro. (numeracion automatica)
// cantidad(ingresada por el usuario)
// Descripcion(Ingresada por el usuario)
// P. Unitario(Inresado por el Usuario)
// P. Total(Ingresado por el sistema)
// Disgregar su IGV (18% de la valor total)
// Al final de la tabla mostrar el total de la compra
// y luego un parrafo que indique si es mayo de 50 soles puede pagar en efectivo o con tarjeta
// y si es menor de 50 soles, solo puede pagar con efectivo





var seccion = document.createElement("miSeccion");
// let cantidad = +prompt("Ingrese cantidad de ele  mentos")
var table = document.createElement("table");
var cabeceraText= ["Nro","Cantidad","Descripcion","P.Unitario","Total"]
var cabecera = document.createElement("tr")
// var descripcion = prompt("Ingrese descripcion");
var Nro = [+prompt("Ingrese nro")]
var nrofila = document.createElement("tr")
var arrayNro = [Nro]




for (let i = 0; i < cabeceraText.length; i++) {
    var th= document.createElement("th");
    th.innerHTML=cabeceraText[i];
    cabecera.appendChild(th);
    table.appendChild(cabecera)
    
    var td= document.createElement("td");
    td.innerHTML=arrayNro
    nrofila.appendChild(td)
    table.appendChild(nrofila)

    
}
principal.appendChild(table)








