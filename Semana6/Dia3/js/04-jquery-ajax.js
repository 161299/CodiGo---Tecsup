

$(document).ready(function(){

    // let formulario = $("#formulario")
    $("#btnAgregarDatos").click(()=>{
        
        $(".formulario").toggleClass("formulario")
        
    })
    let dibujarTabla = (usuario) =>{
        tbody.innerHTML = "";
        // for (let i = 0; i < usuario.length; i++) {
        //     let tr = document.createElement("tr");
        //     tr.innerHTML = `<td>${usuario[i].id}</td><td>${usuario[i].marca}</td><td>${usuario[i].modelo}</td><td>${usuario[i].anio}</td><td>${usuario[i].placa}</td><td>${usuario[i].motor}</td><td>${usuario[i].peso}</td><td>${usuario[i].nro_de_asientos}</td><td>${usuario[i].color}</td>`;
        //     tbody.appendChild(tr) 
        // }
        usuario.forEach((element) => {
            let fila = document.createElement("tr");
            fila.innerHTML= `<td>${element.id}</td><td>${element.marca}</td><td>${element.modelo}</td><td>${element.anio}</td><td>${element.placa}</td><td>${element.motor}</td><td>${element.peso}</td><td>${element.nro_asientos}</td><td>${element.color}</t>`
            tbody.appendChild(fila)
        });
    }    


    $("#mostrarData").click((event)=>{
        console.log("esta funcionando");
        event.preventDefault()

        $.ajax({
            type: 'GET', 
            url: 'https://5dc1953d6ca10a0014d5d97d.mockapi.io/lrnt/vehiculo',
            timeout: 4000,
            data: null,
            success: function(respuesta){
                // equivale a un readyState 4 en pocas palabras la data ya llegó en el objeto respuesta
                console.log(respuesta);
                // let jsonRpta = JSON.parse(ajax)
                dibujarTabla(respuesta)
                
            },
            error: function(error){
                console.log(error);
                
            },
            beforeSend: function (){
                // Aquí podriamos configurar un GIF de carga
            }
        })
    })    



    // let btnSubmit  = $("#btnSubmit")
    let inputModelo = document.getElementById("inputModelo")
    let inputMarca = document.getElementById("inputMarca")
    let inputPlaca = document.getElementById("inputPlaca")
    let inputMotor = document.getElementById("inputMotor")
    let inputPeso = document.getElementById("inputPeso")
    let inputAsientos = document.getElementById("inputAsientos")
    let inputColor = document.getElementById("inputColor")

    $("#btnSubmit").click((evento) =>{
        console.log('se hi clicl');
        evento.preventDefault()

                let objVehiculo = {            
                    marca: inputMarca.value,
                    modelo: inputModelo.value,
                    anio: inputAnio.value,
                    placa: inputPlaca.value,
                    nro_asientos: inputAsientos.value,
                    peso: inputPeso.value,
                    motor: inputMotor.value,
                    color: inputColor.value,
            }

            $.ajax({
                type: 'POST', 
                url: 'https://5dc1953d6ca10a0014d5d97d.mockapi.io/lrnt/vehiculo',
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


    btnDel.onclick=()=>{
        var postman = new XMLHttpRequest();
        let inputDelId = document.getElementById("inputDelId");
        console.log(inputDelId.value);
        
        let url = `https://5dc1953d6ca10a0014d5d97d.mockapi.io/lrnt/vehiculo/${inputDelId.value}`;
        console.log(url);
        
        postman.open("DELETE", url );
        postman.send();

    


    }


})