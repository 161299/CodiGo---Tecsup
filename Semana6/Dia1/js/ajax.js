window.onload = () =>{

  let ruta = document.location.href;

  if(ruta.indexOf("post") >=0) {
    console.log("estoy en POST ");
 let inputPostTitle= document.getElementById("inputPostTitle")
 let inputPostBody= document.getElementById("inputPostBody")
 let selectUserId= document.getElementById("selectUserId")
 let btnSumit= document.getElementById("btnSumit")
    
  }
  if(ruta.indexOf("get") >=0){
    console.log("estoy en GET");
    let btnTraerDatos = document.getElementById("btnTraerDatos");
    let tbody = document.getElementById("tbody")
    let dibujarTabla = (usuario) =>{
        tbody.innerHTML = "";
        // usuario.forEach((element) => {
        //     let fila = document.createElement("tr");
        //     fila.innerHTML= `<td>${element.id}</td><td>${element.name}</td><td>${element.phone}</td><td>${element.email}</td><td>${element.username}</td><td>${element.website}</td>`
        //     tbody.appendChild(fila)
        // });

        for (let i = 0; i < usuario.length; i++) {
            let tr = document.createElement("tr");
            tr.innerHTML = `<td>${usuario[i].id}</td><td>${usuario[i].name}</td><td>${usuario[i].phone}</td><td>${usuario[i].email}</td><td>${usuario[i].username}</td><td>${usuario[i].website}</td>`;
            tbody.appendChild(tr) 
        }
    }


    btnTraerDatos.onclick = () =>{

        
    // Creando u objeto ajax
    // let miBoton = document.getElementById("miBoton")
    // (1)
    let ajax = new XMLHttpRequest();

    // OJO => Antes de disparar la petición HTPP, se deben configurar los estados por los cuales pasa nuestra variable AJAX o postman(en este caso)

    // esta funcion siempre va a recorrer 4 
    // (2)
    // onreadystatechange => funcion que se ejecuta cada vez que cambia el estado dle objeto AJAX
    ajax.onreadystatechange = () =>{
        // readyState => es el atributo del objeto AJAX que cambia cada vez que cambia el estado del objeto AJAX
        switch(ajax.readyState){
            case 1:
                console.log("Se llamo a OPEN");
                
                break;
            case 2:
                console.log("Se llamo a SEND");
                
                break;
            case 3:
                console.log("Esperando respuesta del servidor");
                break;
            case 4:
                console.log("La data ya esta aqui");
                // responseText => el cuerpo de lo que responde el servidor
                // si fuera un JSON, es un JSON en formato STRING
                console.log(ajax.responseText);
                // jsonRpta => La misma respuesta del servidor pero en formato JSON (en un objeto JSON)
                let jsonRpta = JSON.parse(ajax.responseText)
                console.log(jsonRpta);
                dibujarTabla(jsonRpta)
                
                break;
        }
        
    }


    // onproogress => función que se ejecuta tantas veces como bytes tenga la data de respuesta del servidor
    ajax.onprogress = (event) =>{
        // preguntando si el evento o la data del evento es medible
        if(event.lengthComputable){
            console.log("si es medible");
            
            let progreso = (event.loaded / event.local) * 100;
            console.log(progreso);
            
        }else{
            console.log("no es medible");
            
        }
    }


    // (3)
    // open => recibe dos parametros (1) metodo (2) url
    // configurando el metodo y la URL
    ajax.open("GET","https://jsonplaceholder.typicode.com/users");

    // para hacer el POST
    // ¿Cómo configurar los HEADERS?
    // ajax.setRequestHeader("content-type","application/json")
    
    // la función send() hace 2 acciones
    // 1.- Establece el body o el contenido que va a enviar al servidor
    // 2.- Dispara la petición HTTP
    // (4)
    // como es un metodo GET no enviamos nada haci que pondremos NULL
    ajax.send(null);

    }


  }  


}