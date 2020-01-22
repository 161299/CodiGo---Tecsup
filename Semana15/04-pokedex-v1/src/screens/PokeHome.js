import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import axios from 'axios';
import PokeCard from "../components/PokeCard";
import {Button} from 'react-native-elements';


const PokeHome = (props) => {

   const [pokemones, setPokemones] = useState([]);                 

   useEffect(()=>{               
     const getPokemones = async () => {
       //en caso de que sea el metodo get  tan solo colocamos axios(rutadelaAPI)
       let endpoint = "https://pokeapi.co/api/v2/pokemon";      
       let listaPokemones = await axios(endpoint);      
       setPokemones(listaPokemones.data.results)
     }
     getPokemones();
   }, [])                 


  return (
    <View style={misEstilos.contenedor}  >
        <View style={misEstilos.titulo}  >
             <Text  style={{fontSize: 50, color: '#fff', fontWeight: 'bold'}} >Pókedex</Text> 
        </View>  
        <ScrollView  style={misEstilos.cardsContainerScroll}  >
             <View style={misEstilos.cardsContainer}  >
                  {
                     pokemones.map(pokemon => {
                          return (<PokeCard  key={pokemon.name}
                                   pokemon={pokemon}       />)               
                     })                    
                  }               
             </View>  

        </ScrollView>                
    </View>
  );
};

export default PokeHome;

const misEstilos = StyleSheet.create({
     contenedor: {
        flex: 1 , 
        justifyContent: 'center',
        alignContent: 'center'
     },
     titulo: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
     },
     cardsContainer: {
//          flex: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
//         justifyContent: 'center',
//         backgroundColor: 'red'                 
     } ,
     cardsContainerScroll: {
          flex: 1               
     }              
})