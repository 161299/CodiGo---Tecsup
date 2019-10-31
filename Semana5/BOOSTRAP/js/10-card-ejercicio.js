import { productos } from './../js/productos.js';
console.log(productos);
for (let i = 0; i < productos.length; i++) {
    console.log(productos);
    
    
}
let producto = document.getElementById("producto")

productos.forEach = (()=>{
    
    let div = document.createElement("div")
    div.classList="col-4"
    div.innerHTML = `<div class ="card">
                        <div></div>
    
    
    
                    </div>`
})
