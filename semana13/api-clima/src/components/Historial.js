import React from "react";

const Historial = props => {

  return (
    <ul className="list-group">
      {props._pHistorial.map(h => (
        <li className="list-group-item my-1" key={h.id}>
          Ciudad : <strong>{h.ciudad}</strong> <br />
          Pais : <strong>{h.pais}</strong> <br />
          Fecha de búsqueda: : <strong>{h.fecha}</strong>
          <button
            className="btn btn-outline-danger btn-block"
            onClick={()=>{
                 props._pEliminar(h.id)               
            }}
          >
            Eliminar
            <i className="fa fa-trash" aria-hidden="true" key={h.id}></i>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Historial;
