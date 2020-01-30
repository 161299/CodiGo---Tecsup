import {url_backend} from './../environment/environment' 
import * as SecureStore from 'expo-secure-store';
import base64 from 'base-64'

export class AuthService {
    token;

    constructor() {
       this.cargarToken();  
                        
    }
    
    cargarToken(){
      SecureStore.getItemAsync('token').then((token)=>{
         if(token){
            this.token = token
         }
      })                 
    }

    guardarToken(token){
       this.token = token;  
       SecureStore.setItemAsync('token', token)                              
    }     
    
    isLogged(){
       try {
          if(this.token){
            let payload = this.token.split('.')[1];  
            // window.atob lo reemplaza base64.decode
            let payloadDecodificado = base64.decode(payload);
            let payloadJSON = JSON.parse(payloadDecodificado);
            if(payloadJSON.exp > new Date()/1000){
               return true;        
            }else{
               console.log('el token ah expirado');
               SecureStore.deleteItemAsync('token');                 
               return false                 
            }        
                     
          }else{
            return false;                  
          }                 

       } catch(error){
          SecureStore.deleteItemAsync('token') ;
          return false                 
       }                 
    }

      async iniciarSesion(correo, password){
       let misHeaders = {
         'content-type': 'application/json'
       }                
       let config = {
         method: 'POST',
         headers: misHeaders,    
         body: JSON.stringify({correo: correo, password: password})            
       }
       let response = await fetch(`${url_backend}/login`, config);
       let rpta = await response.json();
       console.log(rpta.token);               
       return rpta
      
                  
    }
    
    cerrarSesion(){
      SecureStore.deleteItemAsync('token')
      this.token = null;                 
    }
}