var div1 = document.getElementById("div1")
// modificar los estilos de ese elemento
// elemento.style.[estilo]=> para alterar o añadir estilos por medio del JS

div1.style.color = "orange";
div1.style.padding = "10px";
div1.style.border = "1px solid red";
div1.style.opacity= "0.5"
// como vemos le podemos dar todos los estilos que quedramos a nuestro html
// Si un estilo en css tiene una sola palabra
// EJEMPLO: 'padding'
// entonces en js es style.padding
// pero si un estilo esta conformado por dos palabras como por EJEMPLO: background-image
// entonces en js es style.backgroundImage
// Se elimina el "-" y se usa Camel Case
// OTRAS PROPIEDADES DE LOS ELEMENTOS

// clientWidth => obtiene el ancho del elemento
console.log(`el ancho del div es ${div1.clientWidth}`);
// clientHeight => se obtiene la altura del elemento
console.log(`el ancho del div es ${div1.clientHeight}`);
// offsetTop => cantidad de pixeles de desplazo desde techo de su contenedor
console.log(`offseTop ${div1.offsetTop}`);
// offsetLeft => Cantidad de pixeles de desplazo desde la izquierda de  su contenedor
console.log(`offseTop ${div1.offsetLeft}`);
// classname => devuele o asigna el nombre de la clase que tiene el elemento

console.log(`clase del div ${div1.className}`);
// div1.className = "celeste"
// console.log(`clase del div ${div1.className}`);
// ==============================================00
// classList => devuelve un arreglo con todas las clases de ese elemento
console.log(div1.classList);
// propiedad de classList // => classList.add([nombre de la clase])=> agrega a la LISTA de clases 
div1.classList.add("celeste");
// Si queremos eliminar una clase de la LISTA DE CLASES // classList.remove
// div1.classList.remove("celeste")
// classList.contains([nombre de la clase])=> verifica si nuestro elemento tiene dentro de su lista esa clase y devuelve un Booleano TRUE or FALSE
console.log(div1.classList.contains("contenedor"));
// classList.toggle([nombre de la clase])=> verifica si esta la clase, si esta, lo quita, y sino esta, la agrega
setInterval(()=>{
    div1.classList.toggle("celeste")
}, 5);

// MODIFICANDO SU CONTENIDO
// innerHTML => Declara o devuelve el contenido de un elemento
// <elemento>SOY SU CONTENIDO</elemento>
console.log(div1.innerHTML);
div1.innerHTML = "<p>AHORA YO SOY EL TEXTO</p>" //=> crhome lo reconoce como una etiqueta html 
div1.innerText = "<p>AHORA YO SOY EL TEXTO</p>" //=> crhome lo reconoce como un texto 

