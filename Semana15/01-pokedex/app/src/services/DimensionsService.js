import {Dimensions} from 'react-native';

export default class DimensionsService {
   static get getWidth(){
      let {width} = Dimensions.get('window') 
      return width;                
   }



}