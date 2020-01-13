import React, {Fragment} from "react";
import {Switch, Route, Redirect} from 'react-router-dom'
import Bienvenido from "../components/Bienvenido";

const Home = () => {
  return (
      <Fragment>
        <Bienvenido/>
      </Fragment>
  );
};

export default Home;
