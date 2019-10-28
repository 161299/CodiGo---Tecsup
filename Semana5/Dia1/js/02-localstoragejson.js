window.onload =() => {

    
 let inputNombre = document.getElementById("inputNombre");
 let inputApellido = document.getElementById("inputApellido");
 let inputColor = document.getElementById("inputColor");
 let botonGuardar = document.getElementById("botonGuardar");
    
botonGuardar.onclick = (event) =>{
    event.preventDefault();
    let objPreferencias = {
        nombre: inputNombre.value,
        apellido: inputApellido.value,
        color: inputColor.value
    };
    
    // La funcion JSON.stringify(objeto|arreglo) => puede recibir (objeto|arreglo) => devuelve el valor en string del json pasado como parametros
    let preferenciasString = JSON.stringify(objPreferencias);
    console.log(preferenciasString);
    localStorage.setItem("Preferencias",preferenciasString)
    
}

 let cargarPreferencias =() =>{
     let preferenciasString = localStorage.getItem("Preferencias");
    //  JSON.parse(JSON string) =>  devuelve un objeto JSON a partir de un string pasado por parametros.
     let objPreferencias = JSON.parse(preferenciasString);
    inputNombre.value = objPreferencias.nombre;
    inputApellido.value = objPreferencias.apellido;
    inputColor.value = objPreferencias.color;

     
 }

 cargarPreferencias();
 

}