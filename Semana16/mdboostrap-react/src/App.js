import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MDBBtn} from 'mdbreact';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Chart from './pages/Chart'

function App() {
  return (
    <Router>
      <Switch>
        <Route  path="/charts"  render={()=>(<Chart /> )}   />
      </Switch>
    </Router>
  );
}

export default App;
