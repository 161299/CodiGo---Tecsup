// let boton1 = document.getElementById("boton1");
// let boton2 = document.getElementById("boton2");

// let clickGlobal=  (evento) =>{
//     evento.target.style.color = '#ff7777';
//     if(evento.target.getAttribute('id') == 'boton1'){
//         console.log('click al boton1');
//     }else{
//         console.log('click al boton2');
//     }   
// };
// boton1.onclick = clickGlobal;
// boton2.onclick = clickGlobal;
// evento => tiene toda la informacion respecto del evento que se ha desencadenado

// Hacer un evento click al body para dibujar un circulo de 10px * 10px de color rojo donde sea que se le haya hecho click

let miBody = document.getElementById("miBody")


miBody.onclick = (evento) =>{
    let coordenadaX = evento.offsetX;
    let coordenadaY = evento.offsetY;
    let div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.left= coordenadaX  + 'px';
    div.style.top= coordenadaY + 'px';
    div.style.zIndex = '-1';
    div.style.width = '20px';
    div.style.height= '20px';
    div.style.borderRadius = '50%'
    div.style.backgroundColor = 'red'
    miBody.appendChild(div)   
}
