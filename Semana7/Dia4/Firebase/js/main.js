import { firebaseConfig } from "./config/config.js";
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
// Instanciar la base de datos
// firebase.databse() => hace referencia a clientes en la pagina firebase
let database = firebase.database();

let postCliente = cliente => {
  // console.log(cliente);
  // database.ref("clientes/xyz")
  // obtener una llave unica para el nodo canchas
  let keyId = database.ref("clientes").push().key;
  // inyectar el objeto en el nodo chanchas/key
  database
    .ref("clientes").child(keyId).set(cliente).then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Cliente registrado",
        showConfirmButton: false,
        timer: 1500
      });
      $("#modalCrearCliente").modal("hide");
    //   hide -> el modal se cierre automaticamente despues de activar el submit
    // reset -> limpia el formulario
      document.getElementById("frmCrearCliente").reset();

    })
    .catch(() => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Se ha producido un error!",
        footer: "<a href>Why do I have this issue?</a>"
      });
    });
};

// script para clientes.html
if (document.location.href.indexOf("clientes.html") != -1) {
  // Estoy en la pagina Clientes.html
  $("#btnAbrirModal").click(function() {
    $("#modalCrearCliente").modal("show");
  });

  $("#frmCrearCliente").submit(function(e) {
    e.preventDefault();
    console.log(e);
    let objCliente = {
      ip: $("#inputIp").val(),
      nombre: $("#inputNombre").val(),
      direccion: $("#inputDireccion").val(),
      saldo: $("#inputSaldo").val(),
      pago: $("#inputPago").val(),
      caducidad: $("#inputCaducidad").val()
    };
    // console.log(objCliente);
    postCliente(objCliente);
  });

  let dibujarTabla = (e)=>{  
    $("#tablitaClientes").DataTable({
        data: e,
        // destroy, para reinicilizar el datable cada vez que se llame a la funcion nuevamente
        destroy: true,
        columns: [
        //   { title: "ID", data: "id" },
          { title: "IP", data: "ip" },
          { title: "Nombre", data: "nombre" },
          { title: "Direccion", data: "direccion" },
          { title: "Saldo", data: "saldo" },
          { title: "Pago", data: "pago" },
          { title: "Caducidad", data: "caducidad" }
        ]
      });

  }
  let traerDatos = () => {
    // dataSnapshot => captura de datos
    // =============CON LA FUNCION ONCE >>> Que solo trae la data una vez=============
    // database.ref("clientes").once("value").then(dataSnapshot => {
    //     console.log(dataSnapshot.key); //clientes
    //     let arrayClientes = [];
    //     dataSnapshot.forEach(usuarios => {
    //       // console.log(usuarios.key);
    //       // usuarios.key -> me imprime todos los id
    //       arrayClientes.push({ ...usuarios.val(), id: usuarios.key });
    //       // console.log(usuarios.val())
    //       // usuarios.val()  => me imprime todo el contenido dentro de los id
    //     });
    //     dibujarTabla(arrayClientes)
    // ============ CON LA FUNCION ON >>> Que escucha cualquier evento de camvio en la DB==========
    database.ref("clientes").on("value",(dataSnapshot) => {
            console.log("se detectaron cambios");
            
            console.log(dataSnapshot.key); //clientes
            let arrayClientes = [];
            dataSnapshot.forEach(usuarios => {
              // console.log(usuarios.key);
              // usuarios.key -> me imprime todos los id
              arrayClientes.push({ ...usuarios.val(), id: usuarios.key });
              // console.log(usuarios.val())
              // usuarios.val()  => me imprime todo el contenido dentro de los id
            });
            dibujarTabla(arrayClientes)

        console.log(arrayClientes);
      });
  };

  traerDatos();
}

// ANOTACIONES======================================
// la funcion once lee los datos solo una vez
// la funcion on lee una vez y queda escuchando los cambios
