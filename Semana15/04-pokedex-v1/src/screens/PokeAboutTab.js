import React, {  useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GLobal } from "../services/Global";
import axios from 'axios';

const misEstilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    paddingTop: 10
  },
  descripcionView: {
    flex: 1
  },
  pesoTallaView: {
    flex: 1
  },
  generoView: {
    flex: 1
  }
});

const PokeAboutTab = (props) => {

  const [especie, setEspecie] = useState([])  
  const [cargando, setCargando] = useState(true)
  const [descripcion, setDescripcion] = useState('')
  let global = GLobal.getInstance()
//   console.log(global)
  

const obtenerCastellano = (especies) =>{               
    let castellano = especies.filter(e => (e.language.name === "es"))
    return castellano[0].flavor_text;               
};                 
const getEspecies = async () => {
    let endpoint = `https://pokeapi.co/api/v2/pokemon-species/${global.pokemonId} `;      
    let rpta = await axios(endpoint);      
    let objDescripcion = obtenerCastellano(rpta.data.flavor_text_entries)
    setCargando(false)
    setDescripcion(objDescripcion)
};



  useEffect(() => {
     getEspecies()
  }, []);

  return (
    <View style={misEstilos.contenedor}>
      <View style={misEstilos.descripcionView}>
          {
             cargando ? null :
             <Text>
                  {
                      descripcion                
                  }               
             </Text>                 
          }          
      </View>
      <View style={misEstilos.pesoTallaView}>
        <Text>asd</Text>
      </View>
      <View style={misEstilos.generoView}>
        <Text>asd</Text>
      </View>
    </View>
  );
};

export default PokeAboutTab;
