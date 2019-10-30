window.onload = () =>{

let table = document.getElementById("table")
let striped = document.getElementById("striped")
let bordered = document.getElementById("bordered")
let hover = document.getElementById("hover")
let sm = document.getElementById("sm")
let dark = document.getElementById("dark")

    striped.onclick = () =>{

        table.classList.add("table-striped")
    }

    bordered.onclick = () =>{
        table.classList.add("table-bordered")
    }

    hover.onclick= () =>{
        table.classList.add("table-hover")
    }

    sm.onclick = () =>{
        table.classList.add("table-sm")
    }

    dark.onclick = () =>{
        table.classList.add("table-dark")
    }
}