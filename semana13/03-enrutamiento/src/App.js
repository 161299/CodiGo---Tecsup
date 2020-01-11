import React, { Component, Fragment } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
  Redirect
} from "react-router-dom";
import Navbar from './components/Navbar'
import Nosotros from './paginas/Nosotros';
import Home from './paginas/Home';
import NotFound from './paginas/NotFound';
import Consulta from './paginas/Consulta';


export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Navbar/>
          {/* Switch es el contenedor de todas las rutas */}
          <Switch>
            <Route path={"/"} exact render={()=>(Home)}><Home/></Route>
            <Route path={"/inicio"} exact render={()=>{
              return (<Redirect to="/" />)
            }} />

            <Route path="/nosotros" component={Nosotros} />
            <Route path="/consulta/:texto" component={Consulta} />
            <Route path="/notfound" component={NotFound}/>

            <Route render={()=>{return ( <Redirect  to="/notfound"/>)}}/>
          </Switch>
        </Router>
      </Fragment>
    )
  }
}

