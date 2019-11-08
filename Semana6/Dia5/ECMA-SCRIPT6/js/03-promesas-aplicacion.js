window.onload = () =>{
    console.log("funcionando");
    
    // ===========js puro ================================0
    // let buscarPorId =(id)=>{
    //     // colocar codigo AJAX

    //     console.log(id);
        
    //     let ajax = new XMLHttpRequest();
    //     ajax.onreadystatechange= () =>{
    //         console.log("onredu")
    //         if(ajax.readyState === 4){
    //             console.log(ajax.responseText);     
    //         };
    //     };   
    //         ajax.onerror = (error) =>{
    //             console.log("UPS! ERROR");     
    //         }
    //         ajax.open ("GET",`https://5dc1953d6ca10a0014d5d97d.mockapi.io/lrnt/vehiculo/${id}`);
    //         ajax.send(null)
            
       
    // };

    // let btnBuscarId = document.getElementById("btnBuscarId");
    // btnBuscarId.onclick =() =>{
    //     let inputId = document.getElementById("inputId")
    //     console.log("se hizo click");
    //     buscarPorId(inputId.value)
    // }
    
    // =========Jquery==================
    let buscarPorId = (id) =>{

        return new Promise((resolve,reject)=>{
            $.ajax({
                type: 'GET',
                url: `https://5dc1953d6ca10a0014d5d97d.mockapi.io/lrnt/vehiculo/${id}`,
                timeout: 2000,
                data: null,
                success: function (respuesta) {
                  // equivale a un readyState 4
                  // la data ya llegó en el objeto respuesta
                  //   console.log(respuesta);
                  // console.log(respuesta);
                  // console.log(xhr.status);
                    resolve(respuesta)

                }, 
                complete: function(xhr){
                    // xhr -> es un evento que nos muestra todas las propiedades hijos se puede sacar en este caso  estamos sacando el status

                    // console.log(xhr);
                    
                    // console.log(xhr.status);
                    
                    if(xhr.statusText === "Not Found"){
                        reject("No existe ese producto")
                    }
                }

                
            })


        })
    }    

    $("#btnBuscarId").click(()=>{
        // console.log("se hizo click");
        buscarPorId($("#inputId").val()).then((rpta)=>{
            console.log("Exito");            
            console.log(rpta);
            
        }).catch((error)=>{
            console.log("error");
            console.log(error);         
        })
    })


    


}