import {comentarios} from './data.js'


/**
 * Funcion que busca en el arreglo de comentarios el comentario que tenga el id entregado y retorna todo el objeto comentario, si no encuentra el id retorna un objeto de forma:
 * {
 * error: 'No se encontró el comentario'
 * }
 * @param {number} id 
 * @return objComentario 
 */
// let searchCommentById = (id) => {
    //Solucion con FOR    
//     for (let i = 0; i < comentarios.length; i++) {
//         if(id == comentarios[i].id){
//             return comentarios[i];
            
//         }    
//     }

//     let rpta = {
//         error: `No se encontro el comentario`
//     }
// SOLUCION CON FILTER
//    let rpta =  comentarios.filter((comentario) => {
//         return id == comentario.id;
//     })
//     console.log(rpta);

// SOLUCION CON FIND
    // let rpta = comentarios.find((comentario,i) => {
    //     return comentario.id == id;
    // });
//  lo que significa este if = > si esque el tipo de dato es undefined 
//     if(typeof rpta == 'undefined'){
//         // significa que no se econtro el comentario
//         let mensaje = {error: "No se encontro el comentario"}      
//         return mensaje
//     }else{
//         return rpta;
//     }  
// }
// console.log(searchCommentById(6));

/**
 * Funcion que retorna un arreglo todos los elementos cuyo correo(email) termina en '.biz'
 */
// let getAllBiz = () => {

//     let resultado = comentarios.filter((correo) =>{
//         return correo.email.endsWith(".biz")
//     });
//     return resultado;
// }
// console.log(getAllBiz());



/**
 * Funcion que retorna un arreglo de objetos con el 'email' y el 'name' de los registros cuyo 'body' contenga la palabra buscada en la variable word
 * @param {*} word la palabra buscada dentro del campo body
 */

//  creando un arreglo vacio de resultados
let getNameEmailByWordInBody = (word) =>{
    let resultado = [];
// iterando el arreglo de comentarios
    comentarios.forEach((elemento) => {
        // preguntar si el texto de la variable 'word', existe en alguna posicion del campo 'body' 
        if(elemento.body.indexOf(word) != -1){
            // si el elemento contiene la palabra buscada/
            // creo un objeto temporal con la cipia de los 2 campos requeridos solamente
            let objTmp ={
                email: elemento.email,
                name: elemento.name
            }
            // agrego ese objeto temporal al arreglo resultado
            resultado.push(objTmp)
        }
    })
    // terminado el ciclo forEach retorno  ek arregki resultado
    return resultado
};
let palabra = prompt("Ingrese palabra")
console.log(getNameEmailByWordInBody(palabra));









