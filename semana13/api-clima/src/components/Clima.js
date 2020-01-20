import React, { Fragment } from "react";

const Clima = props => {
  if (props._pResultado.cod === "404") {
    return (
      <div className="alert alert-danger">
        No existe resultados para la búsqueda
      </div>
    );
  }

  return (
    <Fragment>
      <h2 className="card-title text-center">
        Temperatura en: <strong>{props._pResultado.name}</strong>{" "}
      </h2>
      <h3 className="card-text text-center">
        <span>{props._pResultado.main.temp}</span>
        <span>&#8451;</span>
      </h3>
      <div className="row">
        <div className="col-md-6">
          Temperatura Mínima: <span>{props._pResultado.main.temp_min} &#8451; </span>
        </div>
        <div className="col-md-6">
          Temperatura Máxima: <span>{props._pResultado.main.temp_max} &#8451; </span>
        </div>
      </div>
    </Fragment>
  );
};

export default Clima;
