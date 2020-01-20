import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Invitado from './modules/invitado/Invitado'
import Logeado from './modules/logeado/Logeado'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={"/logged"}  render={()=>(<Logeado/> )} />
          <Route path={"/"}  render={()=>(<Invitado/>)} />
          <Route render={()=>{
            return <Redirect to={"/"} />
          }} />
        </Switch>
      </Router>
    )
  }
}

