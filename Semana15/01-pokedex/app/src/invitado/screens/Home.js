import React, { Component } from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";
import fondo from './../../../../assets/fondo.jpg';
import {Button} from 'react-native-elements';
import DimensionsService from './../../services/DimensionsService'
import Icon from 'react-native-vector-icons/FontAwesome5'


const misEstilos = StyleSheet.create({
   contenedor: {
        flex: 1            
   },
   contenedorView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'                 
   }                 
})




export default class Home extends Component {
  render() {
     console.log(DimensionsService.getWidth);
     
    return (
       <ImageBackground  source={fondo}  style={misEstilos.contenedor} >
          
           <View  style={misEstilos.contenedorView} >
                <Button  buttonStyle={{width: DimensionsService.getWidth / 2,
                         backgroundColor: '#eee',
                         marginTop: 140
                          }}   
                         title={'Iniciar Sesión'}
                         type="outline" 
                         icon = {
                                 <Icon  
                                    name={'arrow-right'}
                                    size={13}
                                    color={"#128AC2"} 
                                    style={{marginRight: 10}}  />
                                 }
                         />  
                <Button  buttonStyle={{width: DimensionsService.getWidth / 2,
                         backgroundColor: '#eee',
                         marginTop: 8
                          }}   
                         title={'Registrarme'}
                         type="outline" 
                         icon = {
                                 <Icon  
                                    name={'user-plus'}
                                    size={13}
                                    color={"#128AC2"} 
                                    style={{marginRight: 10}}  />
                                 }
                         />  
                <Button  buttonStyle={{width: DimensionsService.getWidth / 2,
                        //  backgroundColor: '#eee',
                         marginTop: 150
                          }}   
                         title={'Facebook'}
                         type="solid" 
                         icon = {
                                 <Icon  
                                    name={'facebook'}
                                    size={13}
                                    color={"#fff"} 
                                    style={{marginRight: 10}}  />
                                 }
                         />  
           </View>                
       </ImageBackground>             
    );
  }
}
