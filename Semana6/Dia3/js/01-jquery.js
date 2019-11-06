// El simbolooo objeto que representa a JQuery es el $ 

// esto es igual que window.onload
$(document).ready(function () {

    // Selectores al estilo CSS
    // (1) esto referencia a document.getElementById("btnCambiarColor")
    let btnCambiarColor =  $("#btnCambiarColor");
    
    // Eventos a los elementos
    // Los eventos van sin el prefijo 'on'
    // ejemplo: onlick => click
    btnCambiarColor.click(function (event) {
        // imprimiendo el evento
        console.log(event);
        
        // ========================================
        // addClass => agrega una clase al elemento de tipo JQuery
        // $("#headerAccion").addClass("bg-dark text-white");


        // if($(".card-header").hasClass("bg-dark")){
        //     $(".card-header").removeClass("bg-dark text-white")
        // }else{
        // $(".card-header").addClass("bg-dark text-white")

        // Equivalencia con JS
        // document.querySelectorAll(".car-header").forEach(e =>{
        //      e.classList.add("bg-dark")
        //      e.classList.add("text-while")
        // })
        // }

        // esto hace referencia del if de arriba
        $(".card-header").toggleClass("bg-dark text-white")
        

    })
     
    
    $("#btnAgregarParrafo").click(() =>{
        // Creando elementos con JQuery
        // Creando un parrago
        let parrafo = $("<p></p>");
        parrafo.html("Texto de prueba de Parrafo 1");
        // => appendChild
        // seleccionando el segundo elemento que tenga la clase 'card-body'
        // .claseDelElemento:eq(posicionQueEmpiezaDesde0)
        $(".card-body:eq(1)").append(parrafo)   
    })

    $("#btnModificarCss").click(() =>{
        // se le pone un punto para seguir aumentando clases de css

        $(".cuadrado").css("borderRadius","50%").css("backgroundColor","#000").css("transform","scale(1.4)").css("transition","1.5s")

    })

    $("#btnToggleClass").click(function () {
        // selecciona o se refiere al eleemnto en que estoy modificando la funcion actual, en este caso, al boton
        // toggle => mutar
        // toggleClass => muta en las clases
        $(this).toggleClass("btn-lg");
    
    })

    $("#btnDisabled").click(function(){
        // setAttribute => attr("atributo","valor")
        // getAttribute => attr("atributo")
        $("#inputBuscar").attr("disabled","disabled")  
    });
    
    // find(selector) => se usa para obtener los hijos que coincidan con el seleector a partir de un elemento
    let botonesDelPrimerCard = $(".card:eq(0)").find("button")
    console.log(botonesDelPrimerCard);

    // ------ esta es otra forma de obtener el boton dentro del primer card (:eq(position))
    console.log($(".card:eq(0) button"));
    
    


});