import React,{useState, useEffect} from "react";
import { View, Text,Dimensions, StyleSheet , Image, ImageBackground } from "react-native";
import fondocards from './../../assets/fondocards.png'
import * as Font from 'expo-font';
import axios from 'axios';

const PokeCard = ({pokemon: {name, url}}) => {

   const [fuenteCargada, setFuenteCargada] = useState(false);
   const [info, setInfo] = useState('')                  

  useEffect(() => {
     const cargarFuentes = async () => {
        Font.loadAsync({'roboto-thin': require('./../../assets/fonts/Roboto-Thin.ttf') })  
        setFuenteCargada(true);               
     }
     const getInfo = async () => {
         let infoTmp = await axios(url);
         setInfo(infoTmp.data.sprites);
         
     }
     
     cargarFuentes()  
     getInfo()            
  }, []);                  




  return (
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
               <Image  source={ {uri : info.front_default}} 
                  style={{ width: 120, height: 120}}  />                                                   
         </View>     
         <View  style={{justifyContent: 'center', flexDirection: 'row'}} >
              <Text  style={{backgroundColor: 'rgba(0,0,0,0.8)', borderRadius: 20, color: '#fff', padding: 4}} >Leyenda</Text>                                      
         </View>          
         </ImageBackground>              

    </View>
  );
};

export default PokeCard;

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
