let inputNombre = document.getElementById('inputNombre');
let div = document.getElementById('div')

// onfocus => cuando el cursor o el tabindex esta sobre un elemento
inputNombre.onfocus = () =>{
    inputNombre.classList.add('input-focus');
}

// onblur => cuando el cursor o el tabindex abandona el elemento
inputNombre.onblur = () =>{
    inputNombre.classList.remove('input-focus')
}

// onkeyup => cuando 
inputNombre.onkeyup= (evento) =>{
    console.log(evento.key);
    console.log(inputNombre.value);
    div.style.color = 'blue'
    div.style.textAlign = 'center'
    div.innerHTML = ` Le quedan ${20 - inputNombre.value.length}  caracteres`
    
}