window.onload = () =>{

    let fruit = ['apple','banana'];
    // imprime la cantidad de espacios que hay en nuestro array
    console.log(fruit.length);

    // aqui le indico que estoy imprimiendo la posicion 1 que en este caso seria banana
    console.log(fruit[1]);

    // aqui imprimo el array commpleto
    console.log(fruit)
    
    // imprimo  el contenido de la posicion 0 
    let first = fruit[0];
    console.log(first);

    // Otra manera de imprimir el contenido de la posicion 0
    let otro = fruit[fruit.length-2]
    console.log(otro);
    

    for (let i = 0; i < fruit.length; i++) {
        
        console.log(fruit[i]);
        
        
    }
    
    // loop over an array
    // Recorriendo un array
    // fruit.forEach(function(item,index,array){
    //     console.log(item,index);
        
    // })

    
    


        
}
