import React from "react";
import Vehiculo from './Vehiculo'
const Vehiculos = (props) => {
  let {_pVehiculos} = props; 
  let content = _pVehiculos.map(vehiculo => {
       return <Vehiculo _pVehiculo = {vehiculo} key={vehiculo.id} />               
  })          
       return (
       <div className="row">{content}</div>
       );
};

export default Vehiculos;
