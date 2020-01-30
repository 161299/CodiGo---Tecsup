import React, { Fragment } from "react";
import Contexto from "../../Contexto";


const ProdClient = (props) => {
  console.log(Contexto.Consumer.$$typeof)
  return (
    <Contexto.Consumer>
      {
        ({activarAuth})=>(
          <Fragment>
            <div>Componente Productos</div>
            <button  onClick={activarAuth} >
               Logeate ..!!
            </button>
          </Fragment>

        )
      }
    </Contexto.Consumer>
  );
};

export default ProdClient;
