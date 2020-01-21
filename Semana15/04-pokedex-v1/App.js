import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PokeHome from './src/screens/PokeHome'
import PokedexStackNavigator from './src/navigations/PokedexStackNavigator'


const App = () => {
  return (
    <View  style={misEstilos.contenedor} >
      <PokedexStackNavigator />

    </View>
  )
}

export default App

const misEstilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center'
  }
})



