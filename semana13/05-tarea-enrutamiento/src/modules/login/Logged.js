import React , {Fragment}from "react";
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Recuperar from './pages/Recuperar'


const Logged = () => {
  return (
    <Fragment>
      <Switch>
        <Route path={"/loggin/recuperarpassword"} render={()=>(<Recuperar />)} />
        <Route path={"/loggin/registrar"} render={()=>(<Register />)} />
        <Route path={"/loggin"} render={()=>(<Login/>)} />
      </Switch>
    </Fragment>
  );
};

export default Logged;
