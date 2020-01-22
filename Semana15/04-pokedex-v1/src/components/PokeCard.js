import React,{useState, useEffect} from "react";
import { View, Text,Dimensions, StyleSheet , ImageBackground, TouchableOpacity, ActivityIndicator, Image  } from "react-native";
import fondocards from './../../assets/fondocards.png'
import * as Font from 'expo-font';
import axios from 'axios';
import {withNavigation} from 'react-navigation'


const PokeCard = (props) => {

   let  {name, url} = props.pokemon
   // console.log(props.navigation.actions.popToTop());
   

   const [fuenteCargada, setFuenteCargada] = useState(false);
   const [info, setInfo] = useState('')                  

  useEffect(() => {
     const cargarFuentes = async () => {
        Font.loadAsync({'roboto-thin': require('./../../assets/fonts/Roboto-Thin.ttf') })  
        setFuenteCargada(true);               
     }
     const getInfo = async () => {
         let infoTmp = await axios(url);
         setInfo(infoTmp.data);
         
     }
     
     cargarFuentes()  
     getInfo()            
  }, []);                  

  const goInfo = () => {
     props.navigation.navigate('PokeInfoScreem', {pokemon: {...info}});   
  }



  return (

   <TouchableOpacity   onPress={goInfo}  >

    <View  style={misEstilos.card} >
        <ImageBackground  source={fondocards}  style={{flex: 1, backgroundColor: '#fff'}} >                         
         <View  style={misEstilos.viewNombre}  >
             {
               fuenteCargada ? 
               <Text style={misEstilos.nombreText}  >{name}</Text> :
               null                  
             }                
         </View>               
         <View  style={misEstilos.viewInfo}  >
               {
                  info.sprites ?
                  <Image  source={ {uri : info.sprites.front_default}} 
                        style={{ width: 120, height: 120}}        
                          /> 
                  : null
               }                                                  
         </View>     
         <View  style={{justifyContent: 'center', flexDirection: 'row'}} >
              <Text  style={{backgroundColor: 'rgba(0,0,0,0.8)', borderRadius: 20, color: '#fff', padding: 4}} >Leyenda</Text>                                      
         </View>          
         </ImageBackground>              

    </View>
   </TouchableOpacity >   
   
  );
};

export default withNavigation(PokeCard);

const misEstilos = StyleSheet.create({
   card: {               
     backgroundColor: '#fff',
     borderRadius: 20,
     width: (Dimensions.get('window').width / 2)-20,
     margin: 10  ,
     height: 200,
     padding: 10,
     shadowColor: "#000",
     shadowOffset: {
                         width: 0,
                         height: 3,
     },
     shadowOpacity: 0.29,
     shadowRadius: 4.65,
     elevation: 7,
   },
   viewNombre: {
      flex: 1 ,
      width:  Dimensions.get('window').width /  2.3   ,
      alignItems: 'center'   ,  
      justifyContent: 'center'    
   },
   nombreText: {
     fontSize: 20  ,
     fontFamily: 'roboto-thin',
     color: '#000'             
   }  ,
   viewInfo: {
      flex: 4,
      paddingLeft: 22,
      flexDirection: 'row'             
   }                          
})
