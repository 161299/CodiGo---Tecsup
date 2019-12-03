<<<<<<< HEAD
<<<<<<< HEAD
import { firebaseConfig } from "./config/config.js";
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
// Instanciar la base de datos
// firebase.databse() => hace referencia a clientes en la pagina firebase
let database = firebase.database();
let updateCliente = (objCliente)=>{

}
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

  $("#frmEditarCliente").submit(function(event){
    event.preventDefault();
    let objCliente = {
      ip: $("#inputIp").val(),
      nombre: $("#inputNombre").val(),
      direccion: $("#inputDireccion").val(),
      saldo: $("#inputSaldo").val(),
      pago: $("#inputPago").val(),
      caducidad: $("#inputCaducidad").val()
    };

    console.log("SE EJECUTO FRM SUB");
    
    $("#btnEliminarCliente").click(function(event){
      console.log("SE EJECUTO ELIMINAR");
      
    })
    $("#btnEditarPost").click(function(event){
      console.log("SE EJECUT EDITAR");     
    })
  })

  let dibujarTabla = (e)=>{  
     var tabla = $("#tablitaClientes").DataTable({
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
          { title: "Caducidad", data: "caducidad" },
          { title: "Acciones", defaultContent: '<button class= "btn btn-secondary">Acciones</button>'}
        ]
      });
      // console.log(tabla.rows().data());
      // console.log(tabla);
      //                        evento elementohtml y funcion
      $("#tablitaClientes").on('click','button',function(){
        let data = tabla.row($(this).parents('tr')).data()
        console.log(data);
        $("#idCliente").text(data.id);
        $("#modalEditarCliente").modal("show");
        $("#EditinputIp").val(data.ip)
        $("#EditinputNombre").val(data.nombre)
        $("#EditinputDireccion").val(data.direccion)
        $("#EditinputSaldo").val(data.saldo)
        $("#EditinputPago").val(data.pago)
        $("#EditinputCaducidad").val(data.caducidad)

        
        
      })
      
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
=======
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
>>>>>>> 7b137489e70defc63443af449a17c1b032c30c14
=======
import { firebaseConfig } from "./config/config.js";
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
// Instanciar la base de datos
// firebase.databse() => hace referencia a clientes en la pagina firebase
let database = firebase.database();
let storage = firebase.storage();
// =================================================================================
let updateCliente = objCliente => {
  let id = $("#idCliente").text();
  console.log(id);
  database.ref("clientes/" + id).set(
    {
      ip: objCliente.ip,
      nombre: objCliente.nombre,
      direccion: objCliente.direccion,
      saldo: objCliente.saldo,
      pago: objCliente.pago,
      caducidad: objCliente.caducidad
    },
    function(error) {
      if (error) {
        console.log(error);
      } else {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        $("#modalEditarCliente").modal("hide");
        console.log("Coleccion actualizada con exito!");
      }
    }
  );
};

let deleteCliente = idCliente => {
  database
    .ref("clientes/" + idCliente)
    .remove()
    .then(function() {
      console.log("se elimino cliente");
      Swal.fire({
        title: 'Seguro que desea Eliminar?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    })
    .catch(function(error) {
      console.log(error);
    });
};

let postCliente = cliente => {
  // console.log(cliente);
  // database.ref("clientes/xyz")
  // obtener una llave unica para el nodo canchas
  let keyId = database.ref("clientes").push().key;
  // inyectar el objeto en el nodo chanchas/key
  database
    .ref("clientes")
    .child(keyId)
    .set(cliente)
    .then(() => {
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

//============================================================================================
let subirArchivo = (objCliente)=>{
  let storageRef = storage.ref();
  let archivo = $("#inputFoto").prop('files')[0];
  let nombreArchivo = archivo.name;
  // para que no hayga problemas en subir el mismo nombre del archivo
  let nombreFinal = +(new Date())+'-'+nombreArchivo;
  // metada no dise que tipo de extension tiene el archivo
  let metadata = {
    contentType: archivo.type
  }     
                                    // esto nos retorna una promesa
  storageRef.child("clientitos/"+nombreFinal).put(archivo,metadata).then((respuesta)=>{
    // esto nos sirve para obtener la url de descarga de la imagen
    // nos devuelve otra promesa
    return respuesta.ref.getDownloadURL();
  }).then((url)=>{
    console.log(url);
    objCliente.url = url
    postCliente(objCliente)
  }).catch((error)=>{
    console.log(error);  
  })
}
// ============================================================================000
// script para clientes.html
if (document.location.href.indexOf("clientes.html") != -1) {
  // Estoy en la pagina Clientes.html
  $("#btnAbrirModal").click(function() {
    $("#modalCrearCliente").modal("show");
  });
  // =========================================0
  $("#frmCrearCliente").submit(function(e) {
    e.preventDefault();
    console.log(e);
    let objCliente = {
      ip: $("#inputIp").val(),
      nombre: $("#inputNombre").val(),
      direccion: $("#inputDireccion").val(),
      saldo: $("#inputSaldo").val(),
      pago: $("#inputPago").val(),
      caducidad: $("#inputCaducidad").val(),
      // url: "<img src='url'/>",
    };
    // console.log(objCliente);
    subirArchivo(objCliente);
    // postCliente(objCliente);
  });

  // =============================================
  $("#frmEditarCliente").submit(function(event) {
    event.preventDefault();
    let objCliente = {
      ip: $("#inputIp").val(),
      nombre: $("#inputNombre").val(),
      direccion: $("#inputDireccion").val(),
      saldo: $("#inputSaldo").val(),
      pago: $("#inputPago").val(),
      caducidad: $("#inputCaducidad").val()
    };

    console.log("SE EJECUTO FRM SUB");
  });
  // ===================================================
  $("#btnEliminarCliente").click(function(event) {
    event.preventDefault();
    let id = $("#idCliente").text();
    deleteCliente(id);
   
  });
  $("#btnEditarPost").click(function(event) {
    let objCliente = {
      ip: $("#EditinputIp").val(),
      nombre: $("#EditinputNombre").val(),
      direccion: $("#EditinputDireccion").val(),
      saldo: $("#EditinputSaldo").val(),
      pago: $("#EditinputPago").val(),
      caducidad: $("#EditinputCaducidad").val()
    };
    console.log(objCliente);
    event.preventDefault();
    console.log("SE EJECUTO EDITAR");
    updateCliente(objCliente);
  });
// ========================================================
  let dibujarTabla = e => {

    var tabla = $("#tablitaClientes").DataTable({
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
        { title: "Caducidad", data: "caducidad" },
        {title: "Image",  data: 'url', 'render' : function(data, type, row) {
            return   `<img src='${data}' width='400px'/>`
        }},
        {
          title: "Acciones",
          defaultContent: '<button class= "btn btn-secondary">Acciones</button>'
        },
        
        
      ]
    });
    // console.log(tabla.rows().data());
    // console.log(tabla);
    //                        evento elementohtml y funcion
    $("#tablitaClientes").on("click", "button", function() {
      let data = tabla.row($(this).parents("tr")).data();
      console.log(data);
      $("#modalEditarCliente").modal("show");
      $("#idCliente").text(data.id);
      $("#EditinputIp").val(data.ip);
      $("#EditinputNombre").val(data.nombre);
      $("#EditinputDireccion").val(data.direccion);
      $("#EditinputSaldo").val(data.saldo);
      $("#EditinputPago").val(data.pago);
      $("#EditinputCaducidad").val(data.caducidad);
    });
  };
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
    database.ref("clientes").on("value", dataSnapshot => {
      console.log("se detectaron cambios");

      console.log(dataSnapshot.key); //clientes
      let arrayClientes = [];
      dataSnapshot.forEach(usuarios => {
        // console.log(usuarios.key);
        // usuarios.key -> me imprime todos los id
        console.log(usuarios.val().url);
        
        arrayClientes.push({ ...usuarios.val(), id: usuarios.key });
        // console.log(usuarios.val())
        // usuarios.val()  => me imprime todo el contenido dentro de los id
      });
      dibujarTabla(arrayClientes);

      console.log(arrayClientes);
    });
  };

  traerDatos();
}

// ANOTACIONES======================================
// la funcion once lee los datos solo una vez
// la funcion on lee una vez y queda escuchando los cambios
>>>>>>> 7c3d1b1d6695a160453d2300608cb7cba3aea021
