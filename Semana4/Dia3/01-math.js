// Constante PI
let pi = Math.PI;
// Constante de EULER
let euler = Math.E;
console.log(pi);
console.log(euler);

// Redondea al piso
let piso = Math.floor(3.45);
console.log(piso)

// Redondea al techo
let techo = Math.ceil(3.6);
console.log(techo);

console.log(Math.sqrt(64));

console.log(Math.random());


function randomConParametros(min, max) { 
    return Math.random() * (max - min ) + min;
    
 }
let aleatorio = randomConParametros(2,6);
console.log(Math.floor(aleatorio));





