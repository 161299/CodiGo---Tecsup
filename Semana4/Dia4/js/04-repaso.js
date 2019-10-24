let btnTema = document.getElementById("btnTema");
btnTema.onclick = () => {
    
    let estilo = document.getElementById("estilo");
    console.log("Me hicieron click");
    if(estilo.getAttribute("href") == "./../css/04-repaso-tema1.css"){
        estilo.setAttribute("href","./../css/04-repaso-tema2.css")
    }else{
        estilo.setAttribute("href","./../css/04-repaso-tema1.css")
    }
}
