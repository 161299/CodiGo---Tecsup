// onload  => se ejecuta automaticamente que despues de todos los recursos o elementos internos se hayan cargado por completo

// localstorage es un objeto de javascript que hace una persistencia de datos. funciona como una base de datos como el navegador -> tener cuidado con guardar datos importantes por que es una base de datos para la parte del frontend.
window.onload = () =>{
    console.log('Los elementos internos de windows se han cargado');
    let miBoton = document.getElementById("miBoton");
    miBoton.innerText = "Guardar Storage"
    miBoton.onclick= () =>{
        // guardar un elemento en el local stotage
        // La funcion setItem recibe dos parametros   setItem(key,value)
        // Recordar que todo el elemento guardado en el localStorage es un string,
        localStorage.setItem('color', '#45CFA6');
    }
    
    
    /**
     * Funcion que verifica si existe la clave 'color' en el localStorage, si existe, cambia el color de fondo con el valor de dicha clave, sino, se queda con el color de fondo por default
     */
    let verificarStorage = () => {
        // getItem => funcion que obtiene el valor de una clave guardada en el localStorage
        let color = localStorage.getItem('color')
        // Evaluar / o ver si exista el valor de la clave color
        if(color){
           console.log(color);
        // Capturando al body
        let body = document.getElementById("budi");
        body.style.backgroundColor = color
        }else{
            console.log('no existe la clave color');
            
        }
    }
    verificarStorage()

    let inputNombre = document.getElementById("inputNombre");
    let inputApellido= document.getElementById("inputApellido");
    let inputColor = document.getElementById("inputColor");    
    let botonGuardar = document.getElementById("botonGuardar");

    botonGuardar.onclick= (evento) =>{
        evento.preventDefault();
        // guardar el key y la clave
        localStorage.setItem("nombre",inputNombre.value)
        localStorage.setItem("apellido",inputApellido.value)
        localStorage.setItem("colorFavorito",inputColor.value)
    }

    let verificarPreferencias = () =>{
        let nombreStorage = localStorage.getItem("nombre")
        let apellidoStorage = localStorage.getItem("apellido")
        let colorFavoritoStorage = localStorage.getItem("colorFavorito")

        if(nombreStorage){
            inputNombre.value = nombreStorage;
        }
        if(apellidoStorage){
            inputApellido.value = apellidoStorage;
        }
        if(colorFavoritoStorage){
            inputColor.value = colorFavoritoStorage;
        }
    }
    verificarPreferencias()




}


// =================================================================



