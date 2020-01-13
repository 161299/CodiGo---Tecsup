// import React, {Fragment} from 'react';
// import logo from './logo.svg';
import './App.css';

import React, { Component , Fragment} from 'react'
import Vehiculos from './components/Vehiculos'
import Formulario from './components/Formulario';
export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      vehiculos : [
        {id: 1, marca: "Toyota", color: "azul", precio: 50000},
        {id: 2, marca: "mit", color: "rojo", precio: 50000}
      ]  
    };
    
  }

  componentDidMount(){
    console.log("componentDidMount")
  }

  generarNuevoVehiculo = () => {
    let objVehiculo = {
      id : (Math.random() * (100 - 50) - 50).toFixed(0),
      marca: "Hyundai",
      color: "aleatorio",
      precio: (Math.random() * (5000 - 1000) + 1000).toFixed(2)
    };

    this.setState({
      vehiculos : [...this.state.vehiculos, objVehiculo]
    })
  }

  agregarVehiculo = () => {
    console.log('Agregando un producto');
    
  }
  
  render() {
    let title = "Vehiculois"
    return (
      <Fragment>
        <main className="container mt-4">
          <h1 className="display-4">{title}</h1>
          <hr/>
          <button className="btn btn-danger" onClick = {this.generarNuevoVehiculo}>
            Generar Nuevo Vehiculo
          </button>
          <div className="row justify-content-center">
            {/* formulario para agregar un nuevo vehiculo */}
            <div className="col-md-6">
              <Formulario _pAgregarVehiculo = {this.agregarVehiculo} />
            </div>
          </div>
          <div className="card">
            <div className="card-body" >
              <Vehiculos _pVehiculos = {this.state.vehiculos}/>
            </div>
          </div>
        </main>
      </Fragment>
    );
 }
}
