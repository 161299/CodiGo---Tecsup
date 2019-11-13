
  let buscarPorCiudad = ciudad => {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: "GET",
        url: `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=1b629fdbc12f5239767c4f6f4ddf2d63`,
        timeout: 2000,
        data: null,
        success: function(respuesta) {
          // console.log(respuesta);
          resolve(respuesta);
        },
        complete: function(jqxhr, textStatus) {

          if (jqxhr.status == 404) {
            reject("No se encontro la URL introducida");
          }
        }
      });
    });
  };

  /**
   * formatea la data y retorna la informacion de la ciudad buscada en un proceso asincrono
   * @param {*} jsonWeather 
   */

  let obtenerInfo = ({city: {country, name, population, coord: {lat, lon} } })=>{     
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let objInfo = {
                ciudad: name,
                pais: country,
                poblacion: population,
                latitud: lat,
                longitud: lon
            }
            resolve(objInfo)
        },1000)
    })
  }



  $("#btnBuscar").click(() => {
    buscarPorCiudad($("#inputBusqueda").val())
      .then(respuesta => {
        console.log(`Parametros de la ciudad ${$("#inputBusqueda").val()}`);
        let jsonRpta =respuesta
        return obtenerInfo(jsonRpta)
        }).then((objInfo)=>{
            console.log(objInfo);  
        }).catch((error)=>{
        console.log(error);
    })       
  });

  


