/**
 * SISTEMA PARA CREAR UN PABELLON DE UN CEMENTERIO
 * - El usuario ingresara la cantidad de filas y columnas del pabellon.
 * -El usuario ingresara el nombre del pabellon
 * -El usuario ingresara el tipo de numeracion
 * 
 * -Cada nicho debe tener centrado el numero que le corresponde.
 * -Cada nicho mide 70px x 70px
 * -Cada nicho representa aun objeto con los siguientes campos
 *  -nroNicho
 *  -fila
 *  -columna
 *  -estado(por defecto con el valor  'libre')
 */

//  var filas = +prompt("Ingrese la cantidad de filas");
//  var columnas = +prompt("Ingrese la cantidad de columnas");
//  var namePabellon = prompt("Ingrese nombre del pabellon");
//  var tipo= prompt("Ingrese tipo 'A' o 'B'")
// //  let nicho = [ ];
//  let tabla = document.createElement("table");
//  let thead = document.createElement("thead")
//  let tbody = document.createElement("tbody");

//  tabla.style.fontFamily = "Arial"
//  tabla.border = 1;
// //  tabla.innerHTML = `<thead><th colspan='5'>${namePabellon}</th></thead>`


//  let contenido = "";

//  for (let i = 0; i < filas; i++) {
//     let filaTmp = document.createElement("tr");
//     for (let j = 0; j < columnas; j++) {
//         let columnaTmp= document.createElement("td") 
//         columnaTmp.innerHTML= (i*columnas) + j+1;
//         columnaTmp.classList.add("nicho")
//         // columnaTmp.innerHTML= (i*columnas) + columnas-j;
//         let objNichoTmp ={
//             fila: i+1,
//             columna: j+1,
//             nroNicho: (i*columnas) + j+1,
//             estado: "libre"
//         };
//         nichos.push(objNichoTmp);
//         filaTmp.appendChild(columnaTmp);  
//     }
//     tbody.appendChild(filaTmp)
//  }
//  tabla.appendChild(tbody);
//  tabla.appendChild(thead)
// let miBody = document.getElementById("miBody")
// miBody.prepend(tabla);

/**
 * SISTEMA PARA CREAR UN PABELLON DE UN CEMENTERIO
 * - El usuario ingresará la cantidad de filas y columnas
 *   del pabellon.
 * - El usuario ingresará el nombre del pabellón
 * - El usuario ingresará el tipo de numeración
 * 
 * - Cada nicho debe tener centrado el número que le 
 *   corresponde.
 * - Cada nicho mide 70px x 70px
 * - Cada nicho representa a un objeto con los siguientes
 *   campos
 *   - nroNicho
 *   - fila
 *   - columna
 *   - estado(por defecto con el valor 'libre')
 */


let filas = +prompt("Ingrese el número de filas");
let columnas = +prompt("Ingrese el número de columnas");
let nombre = prompt("Ingrese el nombre del pabellon");

let tabla = document.createElement("table");
tabla.innerHTML = `<thead>
                      <tr>
                        <th colspan="${columnas}">
                            ${nombre}
                        </th>
                      </tr>
                  </thead>`



let tbody = document.createElement("tbody");
let nichos = [];

for (let i = 0; i < filas; i++) {

  let filaTmp = document.createElement("tr");

  for (let j = 0; j < columnas; j++) {

    let tdTmp = document.createElement("td");
    tdTmp.innerHTML = (i * columnas) + j + 1;
    tdTmp.classList.add("nicho");
    let objNichoTmp = {
      fila: i + 1,
      columna: j + 1,
      nroNicho: (i * columnas) + j + 1,
      estado: 'libre',
    };
    nichos.push(objNichoTmp);

    filaTmp.appendChild(tdTmp);
  }

  tbody.appendChild(filaTmp);

}

tabla.appendChild(tbody);

let miBody = document.getElementById("miBody");
miBody.prepend(tabla);

