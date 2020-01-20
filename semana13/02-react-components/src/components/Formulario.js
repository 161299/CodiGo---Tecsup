import React, { Component } from "react";
import uuidv1 from "uuid/v1";

let generarId = () => {
  return uuidv1();
};

let stateVacio = {
  id: generarId(),
  marca: '',
  color: '',
  precio: 0
};

export default class Formulario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      datos: {
        ...stateVacio
      }
    };
  }

  cambiarChangle = e => {
    console.log(e);
  };

  render() {
    return (
      <div>
        {/* <form>
          <div className="form-group">
            <label htmlFor="id">Id :</label>
            <input type="text" 
                    className="form-control" 
                    name="id" 
                    value={this.state.datos.id} readOnly/>
          </div>
          <div className="form-group">
            <label htmlFor="marca">Marca :</label>
            <input type="text" 
                    className="form-control" 
                    name="marca" 
                    onChange={this.cambiarChangle}  
                    value={this.state.datos.marca}/>
          </div>
          <div className="form-group">
            <label htmlFor="color">Color :</label>
            <input type="text" 
                    className="form-control" 
                    name="color" 
                    onChange={this.cambiarChangle}  value={this.state.datos.color}/>
          </div>
          <div className="form-group">
            <label htmlFor="precio">Precio :</label>
            <input type="number" 
                    className="form-control" 
                    name="precio" 
                    onChange={this.cambiarChangle}  value={this.state.datos.precio}/>
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block">
                    Crear Vehiculo
            </button>
          </div>
        </form> */}
        <form>
          <div className="form-group">
            <label htmlFor=""></label>
            <input type="text" 
                    className="form-control" 
                    name="id" 
                    value={this.state.datos.id} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor=""></label>
            <input type="text" 
                    className="form-control" 
                    name="marca" 
                    onChange={this.cambiarChangle} />
          </div>
          <div className="form-group">
            <label htmlFor=""></label>
            <input type="text" 
                    className="form-control" 
                    name="color" 
                    onChange={this.cambiarChangle} />
          </div>
          <div className="form-group">
            <label htmlFor=""></label>
            <input type="number" 
                    className="form-control" 
                    name="precio" 
                    onChange={this.cambiarChangle}  />
          </div>
        </form>
      </div>
    );
  }
}
