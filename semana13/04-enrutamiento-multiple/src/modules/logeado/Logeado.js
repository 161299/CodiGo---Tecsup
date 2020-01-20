import React, { Component , Fragment} from "react";
import {Switch, Route} from 'react-router-dom'
import Dashboard from "./pages/Dashboard";
import Perfil from "./pages/Perfil";
import Navbar from "./pages/Navbar";

export default class Logeado extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <Navbar />
        </header>
        <Switch>
          <Route  path="/logged/usuario" render={()=>(<Perfil />)}  />
          <Route  render={()=>(<Dashboard />)}  />
        </Switch>        
      </Fragment>
    );
  }
}
