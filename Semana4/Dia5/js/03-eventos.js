let paises = [
    {
        nombre : 'Peru',
        clave : 51
    },
    {
       nombre : 'Argentina',
       clave : 28 
    }
];

let listaPaises = document.getElementById("listaPaises")

// Poblar la lista de paises con la data del arreglo paises
// <option value => "clave" > nombre del pais </option>




paises.forEach((objPais)=>{
    let optTmp = document.createElement("option") 
    optTmp.innerText = objPais.nombre;
    optTmp.setAttribute("value", objPais.clave);
    listaPaises.appendChild(optTmp)
})


// onchange => 
listaPaises.onchange = function() {
// this => hace referencia al elemento en el que se encuentra la funcion
// this => solo funciona cuando la funcion anonima no es funcion flecha
    
// value => el atributo value del option seleccionado
console.log(this.value);
// selectedIndex => la posicion del option seleccionado
console.log(this.selectedIndex);
// children => arreglo de options que contiene el select
console.log(this.children);
// obtener el texto del option seleccionado
console.log(this.children[this.selectedIndex].innerHTML);    
}
    
let google = document.getElementById('google');
google.style.textDecoration = 'none'
google.style.fontFamily = 'arial'
google.style.color = '#fff'

google.onclick = (evento) =>{
    // preventDefault() => cancela cualquier comportamiento por defecto que desencadene el evento
    evento.preventDefault();
    console.log('Se hizo click al link');    
}

// oncontextmenu => evento que se desencadena cuando hacen anteclick sobre el elemento
google.oncontextmenu = (evento) =>{
    evento.preventDefault();
}

// Establecer el contextmenu para el body
// en cualquier lugar que hagan click derecho sobre el body, se dibujara un div>ul>li*2
// El texto del li 1 será = Opcion1
// El texto del li 2 será = Opcion


let body = document.getElementById("body")
let borrar = document.getElementsByClassName("borrar")


body.oncontextmenu = (evento) =>{
    evento.preventDefault();
    let coordenadaX = evento.offsetX;
    let coordenadaY = evento.offsetY;
    let div = document.createElement("div")
    let ul = document.createElement("ul")
    let li1 = document.createElement("li")
    let li2 = document.createElement("li")
    li1.innerText = "Option 1"
    li2.innerText = "Option 2"
    ul.appendChild(li1)
    ul.appendChild(li2)
    li1.style.listStyle = "none"
    li2.style.listStyle = "none"
    div.appendChild(ul)
    div.style.borderRadius = "20px"
    div.style.backgroundColor = "blue"
    div.style.zIndex = "-1"
    div.style.position = 'absolute';
    div.style.left= coordenadaX  + 'px';
    div.style.top= coordenadaY + 'px';
    body.appendChild(div)

}




// TAREITA
let paises = [
 { idPais: 1, nombrePais: 'Perú'},    
 { idPais: 1, nombrePais: 'Perú'},    
 { idPais: 1, nombrePais: 'Perú'}
]

