import './../css/styles.css'


document.body.innerHTML= '<p>Holiwi</p>'

let caja = document.createElement("div")
let getUser = () => {
    return new Promise((resolve, reject) =>{
         fetch("https://reqres.in/api/users?page=2") 
              .then((rpta)=>{
                  return rpta.json()  
              }).then((usuarios)=>{
                  resolve(usuarios)                
              }).catch(err => {
                   reject(`Error algo paso con :( , ${err})`)               
              })              

    } )
                    
}

// getUser().then(usuarios => {
//     console.log(usuarios.data);
//     caja.innerHtml = JSON.stringify(usuarios.data)
//     document.body.appendChild(caja);
// })

async function mostrarUsuarios (){
    let rpta = await getUser();
    console.log(rpta.data);                
}
mostrarUsuarios()