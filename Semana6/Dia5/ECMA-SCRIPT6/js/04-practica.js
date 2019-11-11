window.onload = () => {
  console.log("funcionando");

  let buscarId = ciudad => {
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
          // console.log(xhr);
          // console.log(textStatus);
          // if(xhr.status == 404){
          //     console.log("No se encotro URL");
          // }
          if (textStatus == "error") {
            reject("No se encontro la URL introducida");
          }
        }
      });
    });
  };

  $("#btnBuscarId").click(() => {
    buscarId($("#inputId").val())
      .then(respuesta => {
        console.log(`Parametros de la ciudad ${$("#inputId").val()}`);
        console.log(respuesta);
        let { list } = respuesta;
        // console.log(list[0].dt);

        // console.log(dia);

        let hoy = new Date();
        console.log(hoy);
        let dia = hoy.getDate();
        console.log(dia);

        for (let i = 0; i < list.length; i++) {
          let dia1 = new Date(list[i].dt * 1000);

          if (dia1.getDate() == dia) {
            console.log("hola");

            console.log(dia1);
            
            $("#fila").append(
              $(`<div class="col">
                    <div class="card-panel teal">
                    <span class="white-text">${dia1.getHours()} horas</span><hr>
                    <span class="white-text">${
                      list[i].weather[0].description
                    }</span>
                    
                    </div></div>`)
            );
            switch (list[i].weather[0].description) {
              case "scattered clouds":
                  $("#fila").append(
                    $(`<div class="col">
                          <div class="card-panel teal">
                          <span class="white-text">${dia1.getHours()} horas</span><hr>
                          <span class="white-text">${
                            list[i].weather[0].description
                          }</span>
                          <span class="white-text"><i class="fas fa-cloud"></i></span>
                          </div></div>`)
                  );
                  break;
                    case "broken clouds":
                        $("#fila").append(
                            $(`<div class="col">
                                <div class="card-panel teal">
                                <span class="white-text">${dia1.getHours()} horas</span><hr>
                                <span class="white-text">${
                                    list[i].weather[0].description
                                }</span>
                                <span class="white-text"><i class="fas fa-cloud-meatball"></i></i></span>
                                </div></div>`)
                        );
                    break;          
                  default:
                break;
            }
          } else {
            console.log("qwerty");
          }
        }

        // let lasCuatro =new Date(list[0].dt *1000);
        // console.log(lasCuatro);
        // let lasSiete =new Date(list[1].dt *1000);
        // console.log(lasSiete);
        // let lasNueve =new Date(list[2].dt *1000);
        // console.log(lasNueve);
        // let lasDoce =new Date(list[3].dt *1000);
        // console.log(lasDoce);

        // console.log(lasCuatro.getHours());
        // console.log(lasCuatro.getDate());
        // console.log();

        // let lasSiete =new Date(list[1].dt *1000);
        // console.log(lasSiete.getHours());
        // let lasOnce =new Date(list[2].dt *1000);
        // console.log(lasOnce.getHours());
      })
      .catch(cualquierParametro => {
        console.log(cualquierParametro);
      });
  });

  var instance = M.Carousel.init({
    fullWidth: true
  });

  // Or with jQuery

  $(".carousel.carousel-slider").carousel({
    fullWidth: true
  });
};
