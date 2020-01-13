import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Invitado from './modules/invitado/Invitado'
import Adminitrador from './modules/administrador/Adminitrador'
import Logged from './modules/login/Logged'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
        <Switch>
          <Route path="/loggin" render={()=>(<Logged />)} />
          <Route path="/admin" render={()=>(<Adminitrador />)} />
          <Route path="/" render={()=>(<Invitado />)} />
          <Route render={()=>{
            return <Redirect to={"/"} />
          }} />
        </Switch>
        </Router>
      </Fragment>
    )
  }
}

