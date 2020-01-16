// El objeto document sirve para manipular cualquier elemento del DOM
// Captura un elemento por su ID definido entre parentesis id=> string
//  nos va a devolver un unico o si hemos escrito mal el primer elemento que coincida con ese ID
var parrafo01 = document.getElementById("parrafo");
parrafo01.style.color = "blue"
//======================================================
//GetElementByClassName([nombre de la clase])
// devuelve un arreglo de los elementos con ese nombre de la clase
var claseRojo= document.getElementsByClassName("rojo")
console.log(claseRojo);
// ====================================================
// GetElementByTagName([nombre de la etiqueta])
// deuelve un arreglo de los elementos  que son de la misma especie
var divs = document.getElementsByTagName("div")
console.log(divs);
// querySelector([Selector como en CSS3 o EMMET])
// Obtiene un elemento que coincida con el selector como si estariamos en css3
var claseRojoCSS3 = document.querySelector(".rojo")
console.log(claseRojoCSS3);
// querySelectorAll([Selector como en CSS3])
// devuelve un arreglo con todos los elelemtnos que coincidan con el selector como si estarimos en CSS3

var classRojoCSS3Todos = document.querySelectorAll(".rojo");
console.log(classRojoCSS3Todos);

