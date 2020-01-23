import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import axios from 'axios';
import PokeCard from "../components/PokeCard";
import {Button} from 'react-native-elements';


const PokeHome = (props) => {

   const [pokemones, setPokemones] = useState([]);                 
   const [next , setNext] = useState('')
   const [ant, setAnt] = useState('')
   const siguiente = (e) => {
     getPokemones(e)
   }  
   const anterior = (e) => {
     getPokemones(e)
   }
   const getPokemones = async (url) => {
     //en caso de que sea el metodo get  tan solo colocamos axios(rutadelaAPI)
     let endpoint = url;      
     let listaPokemones = await axios(endpoint);      
     setPokemones(listaPokemones.data.results)
     setNext(listaPokemones.data.next)
     setAnt(listaPokemones.data.previous)
   }
   

   useEffect(()=>{               
     getPokemones("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
   }, [])                 


  return (
    <View style={misEstilos.contenedor}  >
        <View style={misEstilos.titulo}  >
             <Text  style={{fontSize: 50, color: '#fff', fontWeight: 'bold'}} >Pókedex</Text> 
        </View>  
        <View  style={{flexDirection: 'row', justifyContent: 'space-between'}}  >
             <Button  title="atras"  type="outline"  buttonStyle={{width: 100, backgroundColor: '#ddd'}}
                      onPress={()=>{
                         anterior(ant)
                      }}    />
             <Button  title="next"   type="outline"  buttonStyle={{width: 100, backgroundColor: '#ddd'}}
                      onPress={()=>{
                         siguiente(next)
                      }}   />
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