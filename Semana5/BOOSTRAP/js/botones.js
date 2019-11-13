let btnGuardar = document.getElementById("btnGuardar")
let icoGuardar = document.getElementById("icoGuardar")

btnGuardar.onclick = () =>{

    btnGuardar.setAttribute("disabled", "disabled");
    icoGuardar.classList.add("fa-spin");
    setTimeout(() =>{
        btnGuardar.removeAttribute("disabled");
        icoGuardar.classList.remove("fa-spin")
    }, 1900);

}
btnGuardar()