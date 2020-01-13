import React from "react";

const Vehiculo = props => {
  let { _pVehiculo } = props;
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">
            <p className="card-text">Nombre: {_pVehiculo.marca} </p>
            <p className="card-text">Color: S/. {_pVehiculo.color} </p>
            <p className="card-text">Precio: S/. {_pVehiculo.precio} </p>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Vehiculo;
