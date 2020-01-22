import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PokeHome from '../screens/PokeHome';
import PokeInfo from '../screens/PokeInfo';

const PokedexStackNavigator = createStackNavigator(
  {
    PokeHomeScreem: {screen:  PokeHome },
    PokeInfoScreem: {screen: PokeInfo  }                  
  } ,
  {
    initialRouteName: 'PokeHomeScreem',
    headerMode: 'none'                  
  }                 
);
export default createAppContainer(PokedexStackNavigator);