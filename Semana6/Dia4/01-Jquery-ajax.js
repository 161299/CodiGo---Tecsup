document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    // var instances = M.Modal.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.modal').modal();
  });


  
//   var instance = M.Modal.getInstance(elem);

  /* jQuery Method Calls
    You can still use the old jQuery plugin method calls.
    But you won't be able to access instance properties.

    $('.modal').modal('methodName');
    $('.modal').modal('methodName', paramName);
  */

 class CRUDProductos {
    endpoint = "https://5dc1953d6ca10a0014d5d97d.mockapi.io/lrnt/";
    getRecursos(callback) {
      $.ajax({
        type: 'GET',
        url: this.endpoint + "/vehiculo",
        timeout: 2000,
        data: null,
        success: function (respuesta) {
          // equivale a un readyState 4
          // la data ya llegó en el objeto respuesta
          // console.log(respuesta);
          callback(respuesta);
          $("#articleLoading").attr("hidden", "hidden");
          $("#articleTabla").removeAttr("hidden");
        },
        error: function (error) {
          console.log(error);
        },
        beforeSend: function () {
          // Aquí podriamos configurar un GIF de carga
          $("#articleLoading").removeAttr("hidden");
          $("#articleTabla").attr("hidden", "hidden");
        },
      })
    }


     /**
   * Función que eliminar un recurso de la BD
   * @param {*} idProducto 
   * @param {*} callback => función callback que se ejecuta
   * cuando un producto se ha eliminado correctamente
   */
  deleteRecursoById(idProducto, callback) {
    let rpta = confirm("¿Está seguro de eliminar el recurso?");
    if (rpta) {
      $.ajax({
        type: 'DELETE',
        url: this.endpoint + "/vehiculo/" + idProducto,
        timeout: 2000,
        data: null,
        success: function (respuesta) {
          // equivale a un readyState 4
          // la data ya llegó en el objeto respuesta
          // console.log(respuesta);
          console.log(respuesta);
          callback();

        },
        error: function (error) {
          console.log(error);
        },
        beforeSend: function () {
          // Aquí podriamos configurar un GIF de carga
        },
      })
    }
  }


  }
  
  class Utils {
  
    cuerpoTabla;
  
    constructor() {
      this.cuerpoTabla = $("#cuerpoTabla");
    }
    dibujarTabla(productos) {
      // borrando el contenido del cuerpo de la tabla
      this.cuerpoTabla.html("");
      productos.forEach((vehiculo, i) => {
        let tr = $(`<tr>
                      <td>${vehiculo.id}</td>
                      <td>${vehiculo.marca}</td>
                      <td>${vehiculo.modelo}</td>
                      <td>${vehiculo.anio}</td>
                      <td>${vehiculo.placa}</td>
                      <td>${vehiculo.nro_asientos}</td>
                      <td>${vehiculo.peso}</td>
                      <td>${vehiculo.motor}</td>
                      <td>${vehiculo.color}</td>
                    </tr>`);
        let tdAcciones = $("<td></td>");
        let btnAcciones = $(`<button class="btn btn-danger">
                              <i class="fas fa-trash"></i>
                                Eliminar
                            </button>`);

       // configurar el evento Click del boton
      this.configurarBotonEliminar(btnAcciones, vehiculo.id);

        tdAcciones.append(btnAcciones);
        tr.append(tdAcciones);
        this.cuerpoTabla.append(tr);
      })
    }
  
    configurarBotonEliminar(boton, idProducto) {
        boton.click(() => {
          let objCRUD = new CRUDProductos();
          objCRUD.deleteRecursoById(idProducto, () => {
            // si éste callback se ejecuta, significa que 
            // el producto se ha eliminado
            objCRUD.getRecursos((productos) => {
              this.dibujarTabla(productos);
            })
          });
        });
      }

  }
  
  
  
  let objUtils = new Utils();
  let objCRUD = new CRUDProductos();
  
  $("#btnTraerDatos").click(() => {
    objCRUD.getRecursos((vehiculo) => {
      objUtils.dibujarTabla(vehiculo);
    });
  })


  $("#btnSubmit").click((evento) =>{
    console.log('se hizo click');
    evento.preventDefault()

            let objVehiculo = {            
                marca: $("#inputMarca").val(),
                modelo: $("#inputModelo").val(),
                anio: $("#inputAnio").val(),
                placa: $("#inputPlaca").val(),
                nro_asientos: $("#inputAsientos").val(),
                peso: $("#inputPeso").val(),
                motor: $("#inputMotor").val(),
                color: $("#inputColor").val(),
        }

        $.ajax({
            type: 'POST', 
            url: 'https://5dc1953d6ca10a0014d5d97d.mockapi.io/lrnt/vehiculo/',
            timeout: 4000,
            /* AQUI SE MANDA UN JSON en string (stringify)*/
            data: objVehiculo,
        
            success: function(respuesta){   
                console.log(respuesta);
                

                        
                // equivale a un readyState 4 en pocas palabras la data ya llegó en el objeto respuesta          
                
            },
            error: function(error){
                console.log(error);
                
            },
            beforeSend: function (){
                // Aquí podriamos configurar un GIF de carga
            }
    
        })
});



// let btnSubmit  = $("#btnSubmit")


$("#btnBuscarId").click((event)=>{
    event.preventDefault();
    $.ajax({
        type: 'GET',
        url: `https://5dc1953d6ca10a0014d5d97d.mockapi.io/lrnt/vehiculo/${$("#inputId").val()}`,
        timeout: 2000,
        data: null,
        success: function (respuesta) {
          // equivale a un readyState 4
          // la data ya llegó en el objeto respuesta
          // console.log(respuesta);
            console.log(respuesta);
            // let jsonRpta = JSON.stringify(respuesta)
            $("#inputMarca2").attr("value",`${respuesta.marca}`)
            $("#inputMotor2").attr("value",`${respuesta.motor}`)
            $("#inputModelo2").attr("value",`${respuesta.modelo}`)
            $("#inputAsientos2").attr("value",`${respuesta.nro_asientos}`)
            $("#inputAnio2").attr("value",`${respuesta.anio}`)
            $("#inputPlaca2").attr("value",`${respuesta.placa}`)
            $("#inputPeso2").attr("value",`${respuesta.peso}`)
            $("#inputColor2").attr("value",`${respuesta.color}`)


            

        },
        error: function (error) {
          if(error.status == 404){
            //   Ingresaron un id que no existe en la DB
            $("#articleLoading").removeAttr("hidden")
          }
        },
        beforeSend: function () {
          // Aquí podriamos configurar un GIF de carga
        },
      })
})




$("#btnActualizar").click((evento) =>{
    console.log('se hi clicl');
    evento.preventDefault()
    let objVehiculo = {            
      marca: $("#inputMarca2").val(),
      modelo: $("#inputModelo2").val(),
      anio: $("#inputAnio2").val(),
      placa: $("#inputPlaca2").val(),
      nro_asientos: $("#inputAsientos2").val(),
      peso: $("#inputPeso2").val(),
      motor: $("#inputMotor2").val(),
      color: $("#inputColor2").val(),
}

  


      $.ajax({
        type: 'PUT', 
        url: `https://5dc1953d6ca10a0014d5d97d.mockapi.io/lrnt/vehiculo/${inputId.value}`,
        timeout: 4000,
        /* AQUI SE MANDA UN JSON en string (stringify)*/
        data: objVehiculo,
    
<<<<<<< HEAD
        })
});

=======
        success: function(respuesta){   
            console.log(respuesta);
            

                    
            // equivale a un readyState 4 en pocas palabras la data ya llegó en el objeto respuesta          
            
        },
        error: function(error){
            console.log(error);
            
        },
        beforeSend: function (){
            // Aquí podriamos configurar un GIF de carga
        }

    })

});
>>>>>>> 980dd0f49b525a2443ff6780d5e8c5ad5ef56e8d
