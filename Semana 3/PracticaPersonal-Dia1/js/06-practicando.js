var añoNacimiento = +prompt("Ingresar año de nacimiento")
var año = añoNacimiento
var añoActual = 2019
var rpta = añoActual - añoNacimiento
var cumplisteAños = prompt("Cumpliste año")

if (cumplisteAños == "si" ){
    console.log(`Tu edad es ${rpta}`)
} else{
    console.log(`Tu edad es ${rpta-1}`)
}