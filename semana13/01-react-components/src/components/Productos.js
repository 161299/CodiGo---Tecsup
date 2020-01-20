import React from "react";
import Producto from './Producto'

const Productos = (props) => {
 let {_pProductos} = props;
 let contenido = _pProductos.map(prod => {
    return (
       <Producto _pProducto={prod} key={prod.id} />                 
    )
 });

 return (
         <div className="row">{contenido}</div>
       );
 };

export default Productos;



