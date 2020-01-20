import React , {Fragment} from "react";
import {Switch, Route, Router} from 'react-router-dom'
import Proyectos from './pages/Proyectos'
import Contacto from "./pages/Contacto";
import Home from "./pages/Home";
import Header from './components/Header'

const Invitado = () => {
  return (
      <Fragment>  
            <header>
            <Header />
            </header>
         <Switch>
            <Route exact path={"/proyectos"}  render={()=>(<Proyectos />)}/>                    
                              {/* proyecto/:id  */}
            <Route  path={"/contacto"}  render={()=>(<Contacto />)}/>  
            <Route  path={"/"}  render={()=>(<Home />)}/>                    
            {/* <Route  render={()=>(<Redirect to={'/'} />)}/>                     */}
         </Switch>                 
      </Fragment>              
  );
};

export default Invitado;
