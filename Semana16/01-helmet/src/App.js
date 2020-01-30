import React, { Fragment } from 'react';
// BrowserRouter le pones un alias llamado Router
import {BrowserRouter as Router  , Switch} from 'react-router-dom';
import AppRoute from './routers/AppRoute';
import ProdClient from './components/client/ProdClient';
import AdminLayout from './layouts/AdminLayout';
import ClientLayout from './layouts/ClientLayout';
import Users from './components/admin/Users';
import Context from './Contexto';


const App = () => {
  return (
    <Fragment>
        <Router>
          <Switch>
            <AppRoute  exact path="/" component={ProdClient}  layout={ClientLayout }   title="React Ventas" subtitle="Con react puedes imlpementar tus ventas"/>
            
            <Context.Consumer>
              {({isAuth})=>(
                isAuth ? 
                <AppRoute exact path="/admin/users" component={Users}  layout={AdminLayout }  />
                :
                <div>No hay acceso</div>
                )}
            </Context.Consumer>
            
          </Switch>
        </Router>
    </Fragment>
  );
}

export default App;

