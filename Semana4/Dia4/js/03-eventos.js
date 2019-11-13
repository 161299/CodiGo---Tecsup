// Los eventos son funciones que se desencadenan cuando un elemento es afectdo por una accion 
// Esta accion puede ser por ejemplo:  
/**
 * Click, mouse encima, cuando mouse se mueve en el elemento
 * etc 
 */


 let btnTema = document.getElementById("btnTema")
//  FORMAS DE ASIGNAR UN  EVENTO

/**
 * FORMA 1: Mediante la funcion addEventListener
 * addEventListener("evento",funcion anonima)
 */

// btnTema.addEventListener('click', ()=>{
//     console.log("Me hicieron click");
// });

/**
 * FORMA 2: Mediante la propiedad del elemento como evento 
 * elemento.evento = funcion;
 * NOTA => A todos los eventos como propiedad se le agrega el prefijo 'on' por ejemplo:
 * elemento.onclick 
 */

//  btnTema.onclick = () => {
//      console.log("Me hicieron click aqui");
//  }

// let hacerClick= () =>{
//     let link = documnet.getElementById("estilos");
//     // getAttribute("atributo")
//     // Obtiene el valor del atributo de un elemento
//     if(link.getAttribute("href") == "./../css/03-eventos-tema1.css"){
//         link.setAttribute("href","./../css/03-eventos-tema1.css")
//     }else{
//         link.setAttribute("href","./../css/03-eventos-tema2.css")
//     }
// }

 btnTema.onclick = () =>{
    let link = document.getElementById("estilos");
    // getAttribute("atributo")
    // Obtiene el valor del atributo de un elemento
    console.log("aqui click");
    
    if(link.getAttribute("href") == "./../css/03-eventos-tema1.css"){
        
        
        link.setAttribute("href","./../css/03-eventos-tema2.css")
    }else{
        link.setAttribute("href","./../css/03-eventos-tema1.css")
    }
}

 