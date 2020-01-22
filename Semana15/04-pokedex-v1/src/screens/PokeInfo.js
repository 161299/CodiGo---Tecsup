import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet , Image, StatusBar, ImageBackground, InteractionManager} from "react-native";
import circle from './../../assets/icon-02.png'
import {Icon} from 'react-native-elements'
import PokeTabNavigator from "../navigations/PokeTabNavigator";
import { GLobal } from "../services/Global";

const misEstilos = StyleSheet.create({
  contenedor : {
    flex: 1,
    backgroundColor: '#000',
    marginTop: StatusBar.currentHeight
  },
  contTop: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  contTopHeader: {
    flex : 5.6,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 350
  },
  contTopNombre: {
    flex: 5.6
  },
  contTopTipoContainer: {
    flex: 16.6,
  },

  contBottom: {
    flex: 2.3,
    paddingTop: 140,
    backgroundColor: '#fff',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    zIndex: -1,
    paddingHorizontal: 10
  }
})


const PokeInfo = (props) => {

  
  let info = props.navigation.getParam('pokemon')
  const [pokemon,setPokemon] = useState({})
  // console.log(info)
  
  const global = GLobal.getInstance();
  global.pokemonId = info.id


  useEffect(() => {

  }, []);

  return (
    <View  style={misEstilos.contenedor} >
      <View  style={misEstilos.contTop} >
          <View  style={misEstilos.contTopHeader}  > 
              <Icon  name={"arrow-back"} color={'#fff'}  />
              <Icon  name={"favorite"} color={'#fff'}  />
          </View>
          <View  style={misEstilos.contTopNombre}  > 
              <Text style={{color: '#fff', fontSize: 30, zIndex: 4}}  >CP 100</Text>
          </View>
          <View  style={misEstilos.contTopTipoContainer}  > 
            <Text>asdsa</Text>
          </View>
          <Image  source={{uri: 'https://thumbs.gfycat.com/ColorlessAcceptableEider-max-1mb.gif'}} style={{width: 300, height: 300, position: 'absolute', bottom: -140, rotation: 120}} />
          <Image source={{uri: info.sprites.front_default} } 
                 style={{width: 250, height: 250, position: 'absolute', bottom: -120}} />
          <Text  style={{color: '#fff', position: 'relative', bottom: -150, fontSize: 30, fontWeight: 'bold'}}  >{info.name}</Text> 

      </View>
      <View  style={misEstilos.contBottom} >
          <PokeTabNavigator   pokemonId={info.id} />

      </View>
    </View>
  );
};

export default PokeInfo;
