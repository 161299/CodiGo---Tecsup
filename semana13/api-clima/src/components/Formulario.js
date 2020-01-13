import React, { Component } from "react";

export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pais: "",
      ciudad: ""
    };
  }

  actualizarState = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  submit = (e) =>{
     e.preventDefault();
//      console.log(this.state)
     this.props._pBuscarClima(this.state.ciudad, this.state.pais)
  }



  render() {
    return (
      <form onSubmit={this.submit}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="ciudad">Ciudad :</label>
              <input
                className="form-control"
                type="text"
                placeholder="Escriba el nombre de la ciudad"
                name="ciudad"
                id="ciudad"
                onChange={this.actualizarState}
                value={this.state.ciudad}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="pais">Pais :</label>
              <select
                name="pais"
                id="pais"
                className="form-control"
                onChange={this.actualizarState} 
                value={this.state.pais}
                >
                <option value="" >Seleccione un país</option>
                <option value="PE" >Perú</option>
                <option value="EU" >Estados Unidos</option>
                <option value="AR" >Argentina</option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-group">
          <button className="btn btn-dark btn-block" type="submit">
            Buscar
          </button>
        </div>
      </form>
    );
  }
}
