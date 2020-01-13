import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Formulario from './components/Formulario'
import Clima from './components/Clima'
import Historial from './components/Historial'
import uuid from 'uuid/v1'
import moment from 'moment'
import Usuarios from "./components/Usuarios";


export default class App extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
      historial: [],
      resultado : {}
    }
    console.log('constructor');
    
  }
 


  buscarClima =  async (ciudad, pais) => {
    let key = '1b629fdbc12f5239767c4f6f4ddf2d63';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${key}&units=metric`;
    let response =   await  fetch(url);
    let rpta = await response.json();
    console.log(rpta);

    // let historialAntiguo = [...this.state.historial];
    let fecha = moment().format('YYYY-MM-DD h:mm:ss a');
    // historialAntiguo.push({
    //   id:uuid(),
    //   ciudad: ciudad,
    //   pais: pais,
    //   fecha: fecha
    // }) 

    this.setState({
      resultado: rpta,
      // historial: historialAntiguo
      historial : [...this.state.historial, 
                    {
                      id: uuid(),
                      ciudad: ciudad,
                      pais: pais,
                      fecha: fecha
                    }
                  ]     
    },()=>{
      localStorage.setItem('historial', JSON.stringify(this.state.historial));      
    } )
    
  }



  eliminar=(id)=>{
    console.log(id);
    
    let historial = [...this.state.historial] ;
    historial = historial.filter(data => {
      if(data.id !== id){
        return data
      }
    })
    this.setState({
        historial : historial 
    }, () => {
      localStorage.setItem('historial', JSON.stringify(this.state.historial));      
    })

  }

  componentDidMount(){
    console.log('componentDidMount de APP');
    let historialStorage = localStorage.getItem('historial')
    if(historialStorage){
      console.log('llego el historial storage');
      
      this.setState({
        historial: JSON.parse(historialStorage)
      })
    }
    
  }
  // componentDidUpdate(){
  //   console.log('componentDidUpdate de App');
  //   localStorage.setItem('historial', JSON.stringify(this.state.historial)); 

  // }


  
  render() {
    console.log('render');
    
    return (
      <Fragment>
        <Header />
        <h1 className="display-4 my-2 text-center">Buscador de Clima</h1>
        <main className="container-fluid">

          <div className="row">
            <div className="col-12">
              <div className="card">
                  <div className="card-body">
                    <Formulario  _pBuscarClima ={this.buscarClima} />
                  </div>
              </div>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-md-4">
               <div className="card">
                 <div className="card-body">
                    <Historial _pHistorial={this.state.historial} _pEliminar={this.eliminar} />
                 </div>
               </div>
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  {this.state.resultado.cod ? 
                    <Clima _pResultado={this.state.resultado} /> :
                    <div>Busca una ciudad</div>
                  }
                </div>
              </div>
            </div>
          </div>

          <hr/>
          <div className="row">
            <h2>Cargando datos desde una API</h2><br/>
            <Usuarios  />
          </div>
        </main>
      </Fragment>
    );
  }
}
