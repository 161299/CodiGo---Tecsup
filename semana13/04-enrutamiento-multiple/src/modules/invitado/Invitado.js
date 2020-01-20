import React, { Component, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Nosotros from "./pages/Nosotros";
import Portafolio from "./pages/Portafolio";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";

export default class Invitado extends Component {
  render() {
    return (
      <Fragment>
        <header>
        <Navbar />                   
        </header>                  
        <Switch>
          <Route path={"/nosotros"}   render={() => (<Nosotros/>)} />
          <Route path={"/portafolio"}   render={() => (<Portafolio/>)} />
          <Route exact render={() => (<Landing />)} />
        </Switch>                           
      </Fragment>              
    );
  }
}
