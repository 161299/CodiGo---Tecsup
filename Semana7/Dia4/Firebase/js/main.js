import {firebaseConfig} from  './config/config.js';
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
// Instanciar la base de datos
let database = firebase.database();


let postCliente = (cliente)=>{
    console.log(cliente);
    
}

// script para clientes.html
if(document.location.href.indexOf("clientes.html") != -1){
    // Estoy en la pagina Clientes.html
    $("#btnAbrirModal").click(function(){
        $("#modalCrearCliente").modal("show")
    })

    $("#frmCrearCliente").submit(function(e){
        e.preventDefault()
        console.log(e);
        let objCliente = {
            ip: $("#inputIp").val(),
            nombre: $("#inputNombre").val(),
            direccion: $("#inputDireccion").val(),
            saldo: $("#inputSaldo").val(),
            pago: $("#inputPago").val(),
            caducidad: $("#inputCaducidad").val(),
        }

        console.log(objCliente);
        
        
    })
}

