import React, { Component, Fragment } from "react";

export default class Usuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cargando: true
    };
  }

  cargarUsuarios = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let usuarios = await response.json();
    console.log(usuarios);
    this.setState({
      cargando: false,
      usuarios: usuarios
    });
  };

  componentDidMount() {
    this.cargarUsuarios();
  }


  render() {
    return (
      <Fragment>
        <div className="col-md-12">
          {this.state.cargando ? (
            <div className="alert alert-success" role="alert">
              <h4 className="alert-heading">Cargando</h4>
              <p className="display-3">Cargando datos del servidor...</p>
              <p className="mb-0"></p>
            </div>
          ) : (
            <div>otro mensaje</div>
          )}
        </div>
        <div className="col-md-12">                 
        </div>
      </Fragment>
    );
  }
}
