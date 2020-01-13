import React, { Component, Fragment } from "react";
import uuidv1 from "uuid/v1";

let generarIdRandom = () => {
  return uuidv1();
};
let stateVacio = {
  id: generarIdRandom(),
  nombre: "",
  precio: 0
};

export default class Formulario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      datos: {
        ...stateVacio
      },
      error: false
    };
  }

  handleChange = e => {
    let atributos = e.target.name;

    this.setState({
      datos: {
        ...this.state.datos,
        [atributos]: e.target.value
      }
    });
    //       console.log(this.state)
  };

  handleSubmit = e => {
    e.preventDefault();
    let objProducto = { ...this.state.datos };

    if (objProducto.nombre === "" || objProducto.precio === "0") {
      this.setState({
        error: true
      });
      return;
    }

    this.props._pAgregarProducto(objProducto);
    this.setState({
      datos: {
        ...stateVacio,
        id: generarIdRandom(),
      },
      error: false
    });
  };

  render() {
    console.log("render");
    
    return (
      <Fragment>

        {
          this.state.error ? (
                <div className="alert alert-danger">
                  Todos los campos son obligatorios siñorsh
                </div>
          ): null
        }

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="id">ID :</label>
            <input
              type="text"
              name="id"
              className="form-control"
              value={this.state.datos.id}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="nombre">Nombre :</label>
            <input
              type="text"
              name="nombre"
              className={`form-control ${this.state.error ? 'is-invalid' : ''}`}
              onChange={this.handleChange}
              value={this.state.datos.nombre}
            />
          </div>
          <div className="form-group">
            <label htmlFor="precio">Precio :</label>
            <input
              type="number"
              name="precio"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.datos.precio}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-outline-primary btn-block">
              Crear Producto
            </button>
          </div>
        </form>
      </Fragment>
    );
  }
}
