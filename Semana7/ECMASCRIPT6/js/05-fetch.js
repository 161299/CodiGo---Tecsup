let url = "https://api.openweathermap.org/data/2.5/forecast?q=Arequipa,pe&appid=1b629fdbc12f5239767c4f6f4ddf2d63";

// Consumiento una API con fecth y el verbo GET
fetch(url).then((response)=>{
    console.log(response);
    return response.json();
}).then((objJson)=>{
    console.log(objJson);
})

// ----------FETCH CON POST------------------
let urlPost = "https://reqres.in/api/users"
fetch(urlPost,{
    method: 'POST',
    headers: {
        "Content-type" : "application/json"
    },
    body: JSON.stringify({name: 'Cristhian', job: 'Developer'})
}).then((response)=>{
    console.log(response);
    return response.json();
}).then(data=>{
    console.log(data);
});