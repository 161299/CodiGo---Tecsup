$(".cuadrado").draggable();

$("#contenido").draggable();

$("#contenedor").resizable();

$("#contenedor").droppable(
    {
        // drop => evento que se dispara cuando un elemento es soltado en el area del contenedor
    drop: function (event, ui){

        let hijo = ui.draggable[0];
        console.log("UF! Soltaron un elemento");
        console.log(hijo.getAttribute("colorcito"));
        alert(hijo.getAttribute("colorcito"))
        
        
    }
    }
);