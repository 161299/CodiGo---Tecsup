window.onload = () =>{

    let ruta = document.location.href;

    if(ruta.indexOf("get") >= 0){
        let btnTraerDatos = document.getElementById("btnTraerDatos")
        let tbody = document.getElementById("tbody")
        let btnDel = document.getElementById("btnDel");
    let dibujarTabla = (usuario) =>{
        tbody.innerHTML = "";
        for (let i = 0; i < usuario.length; i++) {
            let tr = document.createElement("tr");
            tr.innerHTML = `<td>${usuario[i].id}</td><td>${usuario[i].marca}</td><td>${usuario[i].modelo}</td><td>${usuario[i].anio}</td><td>${usuario[i].placa}</td><td>${usuario[i].motor}</td><td>${usuario[i].peso}</td><td>${usuario[i].nro_de_asientos}</td><td>${usuario[i].color}</td>`;
            tbody.appendChild(tr) 
        }
    }
        btnTraerDatos.onclick =() =>{
            console.log("se hizo un click");
            
            let ajax = new XMLHttpRequest();
    
            ajax.onreadystatechange = () =>{
                switch(ajax.readyState){
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3:
                        break;
                    case 4:
                        let jsonRpta = JSON.parse(ajax.responseText)
                        console.log(jsonRpta);
                        console.log("sdsfs");
                        dibujarTabla(jsonRpta)
                        break;
                        
                }
            }
    
            ajax.open("GET","https://5dc1a7896ca10a0014d5daeb.mockapi.io/Vehiculo");
    
            ajax.send(null);
        }

        btnDel.onclick=()=>{
            var postman = new XMLHttpRequest();
            let inputDelId = document.getElementById("inputDelId");
            console.log(inputDelId.value);
            
            let url = `https://5dc1a7896ca10a0014d5daeb.mockapi.io/Vehiculo/${inputDelId.value}`;
            console.log(url);
            
            postman.open("DELETE", url );
            postman.send();
        }
    };
    if(ruta.indexOf("post") >=0){
        
        let inputModelo = document.getElementById("inputModelo")
        let inputMarca = document.getElementById("inputMarca")
        let inputAño = document.getElementById("inputAño")
        let inputPlaca = document.getElementById("inputPlaca")
        let inputMotor = document.getElementById("inputMotor")
        let inputPeso = document.getElementById("inputPeso")
        let inputAsientos = document.getElementById("inputAsientos")
        let inputColor = document.getElementById("inputColor")
        let selectUserId = document.getElementById("selectUserId")
        let btnSubmit  = document.getElementById("btnSubmit")

        btnSubmit.onclick = (event) =>{
            event.preventDefault()

            let objVehiculo = {
                marca: inputMarca.value,
                modelo: inputModelo.value,
                año: inputAño.value,
                placa: inputPlaca.value,
                nroAsientos: inputAsientos.value,
                peso: inputPeso.value,
                motor: inputMotor.value,
                color: inputColor.value,
                // id: selectUserId.value
            }
            let vehiculo = new XMLHttpRequest();
            vehiculo.timeout = 4000;
            vehiculo.ontimeout= () =>{
                alert("El Servidor no responde")
            }

            vehiculo.onreadystatechange = () =>{
                if(vehiculo.readyState == 4){
                    console.log(JSON.parse(vehiculo.responseText));
                    console.log(vehiculo.status);
                };
            }

            vehiculo.open("POST","https://5dc1a7896ca10a0014d5daeb.mockapi.io/Vehiculo"),
            vehiculo.setRequestHeader("Content-type","application/json");
            vehiculo.send(JSON.stringify(objVehiculo));
        }
    };
    if(ruta.indexOf("put") >=0){
        let inputId = document.getElementById("inputId")
        let btnBuscarId = document.getElementById("btnBuscarId")
        let inputModelo = document.getElementById("inputModelo")
        let inputMarca = document.getElementById("inputMarca")
        let inputAño = document.getElementById("inputAño")
        let inputPlaca = document.getElementById("inputPlaca")
        let inputMotor = document.getElementById("inputMotor")
        let inputPeso = document.getElementById("inputPeso")
        let inputAsientos = document.getElementById("inputAsientos")
        let inputColor = document.getElementById("inputColor")
        // let selectUserId = document.getElementById("selectUserId")
        let btnSubmit  = document.getElementById("btnSubmit")
        
        // if(inputId == btnBuscarId.id){
            btnBuscarId.onclick =(event) =>{
                event.preventDefault();
                console.log("se hizo un click");
                
                let ajax = new XMLHttpRequest();
                
                ajax.onreadystatechange = () =>{
                    switch(ajax.readyState){
                        case 1:
                            break;
                            case 2:
                                break;
                                case 3:
                                    break;
                                    case 4:
                                        let jsonRpta = JSON.parse(ajax.responseText)
                                        console.log(jsonRpta);
                                        console.log("sdsfs");
                                        inputMotor.value = `${jsonRpta.motor}`
                                        inputMarca.value = `${jsonRpta.marca}`
                                        inputModelo.value = `${jsonRpta.modelo}`
                                        inputAño.value = `${jsonRpta.anio}`
                                        inputPlaca.value = `${jsonRpta.placa}`
                                        inputMotor.value = `${jsonRpta.motor}`
                                        inputPeso.value = `${jsonRpta.peso}`
                                        inputAsientos.value = `${jsonRpta.nro_de_asientos}`
                                        inputColor.value = `${jsonRpta.color}`
                                        // llenarFormulario(jsonRpta)
                                        break;
                                        
                                    }
                                }
                                
                                ajax.open("GET",`https://5dc1a7896ca10a0014d5daeb.mockapi.io/Vehiculo/${inputId.value}`);
                                
                                ajax.send(null);
                                
                            }

        // --------------------------------------------------


        // if(btnBuscarId.id == btnSubmit.value){
            btnSubmit.onclick = (event) =>{
                event.preventDefault()
    
                let objVehiculo = {
                    marca: inputMarca.value,
                    modelo: inputModelo.value,
                    anio: inputAño.value,
                    placa: inputPlaca.value,
                    nroAsientos: inputAsientos.value,
                    peso: inputPeso.value,
                    motor: inputMotor.value,
                    color: inputColor.value,
                    // id: selectUserId.value
                }
                let vehiculo = new XMLHttpRequest();
                vehiculo.timeout = 4000;
                vehiculo.ontimeout= () =>{
                    alert("El Servidor no responde")
                }
    
                vehiculo.onreadystatechange = () =>{
                    if(vehiculo.readyState == 4){
                        console.log(JSON.parse(vehiculo.responseText));
                        console.log(vehiculo.status);
                    };
                }
    
                vehiculo.open("PUT",`https://5dc1a7896ca10a0014d5daeb.mockapi.io/Vehiculo/${inputId.value}`),
                vehiculo.setRequestHeader("Content-type","application/json");
                vehiculo.send(JSON.stringify(objVehiculo));
    
    
            }
    
        }





}


        

