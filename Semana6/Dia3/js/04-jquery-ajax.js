let getRecursos =() =>{

    $.ajax({
        type: 'GET', 
        url: 'SU RUL EN MOCKAPI',
        timeout: 4000,
        data: null,
        success: function(respuesta){
            // equivale a un readyState 4 en pocas palabras la data ya llegó en el objeto respuesta
            console.log(respuesta);
            
        },
        error: function(error){
            console.log(error);
            
        },
        beforeSend: function (){
            // Aquí podriamos configurar un GIF de carga
        }
    })

}

let postRecurso = () =>{

    // Cómo obtener el value de un input
    // ejemplo =>  $("#inputEmail").val();
    // como se settea el value de un input
    // $("#inputEmail").val('el valor del input')

    $.ajax({
        type: 'POST', 
        url: 'SU RUL EN MOCKAPI',
        timeout: 4000,
        // data:/* AQUI SE MANDA UN JSON en string (stringify)*/,
        success: function(respuesta){
            // equivale a un readyState 4 en pocas palabras la data ya llegó en el objeto respuesta
            console.log(respuesta);
            
        },
        error: function(error){
            console.log(error);
            
        },
        beforeSend: function (){
            // Aquí podriamos configurar un GIF de carga
        }
    })
}
