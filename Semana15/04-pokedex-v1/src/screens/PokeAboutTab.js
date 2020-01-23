import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GLobal } from "../services/Global";
import axios from "axios";
import { Dimensions } from "react-native";

const misEstilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    paddingTop: 10
  },
  descripcionView: {
    marginBottom: 20
  },
  pesoTallaView: {
    marginLeft: 60,
    marginEnd: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    width: (Dimensions.get('window').width / 1.6 ),
    // height: 100,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
                        width: 0,
                        height: 1,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 4,
    justifyContent: "space-around",
    flexDirection: 'row'
  },
  generoView: {
    flex: 1
  },
  talla:{
    justifyContent: 'center',
    width: 150,
    paddingLeft: 15,
    justifyContent: 'center'
  },
  peso:{
    justifyContent: 'center',
    paddingLeft: 15,
    width: 150,
    justifyContent: 'center'
  },
  negrita: {
    fontWeight: '700',
    color: '#ccc',
    justifyContent: 'center',
    marginLeft: 35
  },
  bold: {
    color: '#000',
    marginLeft: 18
  }
});

const PokeAboutTab = props => {
  const [cargando, setCargando] = useState(true);
  const [descripcion, setDescripcion] = useState("");
  const [peso, setPeso] = useState(0)
  const [talla, setTalla] = useState(0)
  let global = GLobal.getInstance();
  //   console.log(global)
  


  const obtenerCastellano = especies => {
    let castellano = especies.filter(e => e.language.name === "es");
    return castellano[0].flavor_text;
  };
  const getEspecies = async () => {
    let endpoint = `https://pokeapi.co/api/v2/pokemon-species/${global.pokemonId} `;
    let rpta = await axios(endpoint);
    let endpoint2 = `https://pokeapi.co/api/v2/pokemon/${global.pokemonId} `;
    let rpta2  = await axios(endpoint2)
    let {height, weight} = rpta2.data
    let objDescripcion = obtenerCastellano(rpta.data.flavor_text_entries);
    setCargando(false);
    setDescripcion(objDescripcion);
    setTalla(height)
    setPeso(weight)
  };

  useEffect(() => {
    getEspecies();
    console.log(props)
  }, []);

  return (
    <View style={misEstilos.contenedor}>
      <View style={misEstilos.descripcionView}>
        {cargando ? null : <Text>{descripcion}</Text>}
      </View>
      <View style={misEstilos.pesoTallaView}>
        <View style={misEstilos.talla} >
          <Text  style={misEstilos.negrita} >Talla:</Text>
          <Text  style={misEstilos.bold} > {(talla * 10).toFixed(2)} cm </Text>
        </View>
        <View style={misEstilos.peso}  >
          <Text  style={misEstilos.negrita} >Peso:</Text>
          <Text  style={misEstilos.bold} > {(peso /10 ).toFixed(2)} kg </Text>
        </View>
      </View>
      <View style={misEstilos.generoView}>
        <Text>asd</Text>
      </View>
    </View>
  );
};

export default PokeAboutTab;
