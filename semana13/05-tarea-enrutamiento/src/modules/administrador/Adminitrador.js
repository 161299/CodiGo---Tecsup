import React, {Fragment} from 'react';
import {Switch, Route} from 'react-router-dom'
import Dashborad from './pages/Dashborad';
import Perfil from './pages/Perfil';
import Header from './components/Header'

const Adminitrador = () => {
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <Switch>
        <Route path="/admin/perfil" render={()=>(<Perfil/>)} />
        <Route path="/" render={()=>(<Dashborad/>)} />
      </Switch>
    </Fragment>
  );
}

export default Adminitrador;

