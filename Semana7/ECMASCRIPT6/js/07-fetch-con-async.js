let getClimaByCiudad = async (ciudad) =>{
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=1b629fdbc12f5239767c4f6f4ddf2d63`;
    let response = await fetch(url);
    let miJson = await response.json();
    return miJson
}

$("#btnBuscar").click(()=>{
    getClimaByCiudad($("#inputBusqueda").val()).then((json)=>{
        console.log(json);   
    }).catch(()=>{
        console.log();  
    })
})

