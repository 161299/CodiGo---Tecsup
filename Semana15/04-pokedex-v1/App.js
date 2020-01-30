import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PokeHome from './src/screens/PokeHome'
import PokedexStackNavigator from './src/navigations/PokedexStackNavigator'
import PokeDrawerNavigator from './src/navigations/PokeDrawerNavigator'
import { AuthService } from './src/services/Auth'
import PokeLogin from './src/screens/PokeLogin'

import Login from './src/loggin2/Login'

const App = () => {

  let _sAuth = new AuthService();
  const [isLogged,setIsLogged] = useState(false)


  const loggin = (email, password) => {
    _sAuth.iniciarSesion(email,password).then((rpta)=>{
      if(rpta.ok){
        setIsLogged(true)
        console.log(rpta)
        _sAuth.guardarToken()
      }
    }).catch((error)=>{
      console.log(error)
    }) 
  }

  useEffect(() => {
    if(_sAuth.isLogged()){
      setIsLogged(true);
    }
  }, []);


  const logout = () => {
    console.log('cerrando sesión');
    
    _sAuth.cerrarSesion()
    setIsLogged(false)
  }


  return (


    isLogged ? 
      <View  style={misEstilos.contenedor} >
        <PokeDrawerNavigator    screenProps={{logout: logout}}  />
      </View> :
      <View style={misEstilos.contenedor}  >
        <PokeLogin   loggin={loggin} />
      </View>

    // <Login />


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



