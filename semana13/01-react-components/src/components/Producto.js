import React from "react";

const Producto = props => {
  let { _pProducto } = props;

  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">
              <p className="card-text">Nombre:  {_pProducto.nombre} </p>               
              <p className="card-text">Precio: S/. {_pProducto.precio} </p>               
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Producto;
