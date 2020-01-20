import React, { Component , Fragment} from 'react'
import Header from "./components/Header";
import Productos from "./components/Productos";
import Formulario from './components/Formulario';

export default class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      productos : [
        {id: 1, nombre: "Laptop Gamer", precio : 4000.00},
        {id: 2, nombre: "Laptop Oficina", precio : 4000.00}
        ]
    }

    console.log("Constructor de App")
  }
  // ciclo de vida
  componentDidMount(){
    console.log("ComponentDidMount de App");
  }

  generarProductoAleatorio = () => {
    let objProducto = {
      id: (Math.random() * (100 - 50) - 50).toFixed(0),
      nombre: "Producto aleatorio",
      precio: (Math.random() * (5000 - 1000) + 1000).toFixed(2),
    };
    // (1)
    // let productosAntiguos = [...this.state.productos];
    // productosAntiguos.push(objProducto)

    // this.setState({
    //   productos : productosAntiguos
    // })
    this.setState({
      productos: [...this.state.productos, objProducto]
    })
    
  }

  agregarProducto = (objProducto) => {
    console.log('Agregando un producto');
    console.log(objProducto);
    this.setState({
      productos: [...this.state.productos, objProducto]
    })
  };



  



  render() {
    console.log("render de App")
    let titulo = "Aplicación de Productos";
    let marca = 'Codigo - ReactJS';
  
    // logica o controlador
    return (
      <Fragment>
        <Header _pMarca={marca}/>
        <main className="container mt-4">
          <h1 className="display-4">{titulo}</h1>
          <hr/>
          <button className="btn btn-outline-success" onClick={this.generarProductoAleatorio} >
            Generar Producto Aleatorio
          </button> 
          <hr/>
          <div className="row justify-content-center">
            <div className="col-6 my-3">
            <Formulario _pAgregarProducto = {this.agregarProducto} />
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <Productos _pProductos = {this.state.productos}/>
            </div>
          </div>
        </main>
      </Fragment>
    );
  }
}




// import React, {Fragment} from "react";
// import "./App.css";
// import Header from "./components/Header";
// function App() {
//   let titulo = "Aplicación de Productos";
//   let marca = 'Codigo - ReactJS';

//   // logica o controlador
//   return (
//     <Fragment>
//       <Header _pMarca={marca}/>
//       <div className="container">
//         <h1>{titulo}</h1>
//       </div>
//     </Fragment>
//   );
// }

// export default App;
