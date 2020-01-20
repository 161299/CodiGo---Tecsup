import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Home from './app/src/invitado/screens/Home';
import PokemonLista from './app/src/invitado/screens/PokemonLista';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      // <Home/>
      <PokemonLista/>
    );
  }
}


