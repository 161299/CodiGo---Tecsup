import React, {useState, useEffect} from 'react';


function App() {
  
  let [contador, setContador] = useState(0);
  let [texto, setTexto] = useState(''); 

// componentDidUpdate
  useEffect(()=>{return console.log('Ejecutando el useEffect')  }, [contador])
  useEffect(()=>{return console.log('Ejecutando el useEffect del input')  }, [texto])


  return (
    <div>
      <span>El contador esta en : {contador} </span>
      <button  onClick={() => {setContador(contador+1)}}  >Incrementar Contador.!</button>
      <form action="">
        <input type="text" value={texto}  onChange={(e)=>{setTexto(e.target.value)}}  />
        <span>{texto}</span>
      </form>
    </div>
  );
}

export default App;
