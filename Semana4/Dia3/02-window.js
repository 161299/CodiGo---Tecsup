// Da la informacion acerca del origen del documento
// Se puede usar como una propiedad para declarar la URL del documento


// window.location  = "https://www.google.com"
console.log(window.location);

// Da informacion acerca de donde se esta corriendo la pagina web
console.log(window.navigator);


// Document => da acceso a los objetos que representan los elementos en el html
window.document.getElementById("span")

// Propiedad que devuelve el ancho de la ventana en pixeles
console.log(window.innerWidth);
// Propiedad que devuelve el alto de la ventana
console.log(window.innerHeight);
// propiedad que muestra un mesaje de alerta al usuario
window.alert("Esta es una alerta");
// Propiedad que pide al usuario ingresar un dato por merio de un cuadro emergente
window.prompt("Ingrese un valor")

// Propiedad q  ue sirve para confirmar al usuario de algun suceso
let rpta = window.confirm("Estas seguro que deseas eliminar los cambios")
console.log(rpta);


// Espera a que pase un tiempo definido en miliseggundos para ejecutar una accion
window.setTimeout(
    () => {
        console.log("Hola")
    }, 1000
);

// Que se realiza indeterminadamente despues de un periodo de tiempo
window.setInterval(
    () => {
        console.log("Me ejecuto");
    }, 2000
);

window.onclick(() => console.log("Me dijiste que"));
