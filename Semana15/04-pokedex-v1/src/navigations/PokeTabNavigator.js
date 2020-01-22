
import { createMaterialTopTabNavigator} from 'react-navigation-tabs'
import PokeAboutTab from "../screens/PokeAboutTab";
import PokeStatsTab from "../screens/PokeStatsTab";
import PokeEvolutionTab from "../screens/PokeEvolutionTab";
import  {createAppContainer} from 'react-navigation'

const PokeTabNavigator = createMaterialTopTabNavigator(
  {
    PokeAboutTabScreem: {
                        screen: PokeAboutTab,
                        navigationOptions: {
                           title: 'Información'                 
                        }
                    },
    PokeStatsTabScreem: {
                        screen: PokeStatsTab,
                        navigationOptions: {
                            title: 'Estadísticas'            
                        }
                    },
    PokeEvolutionTabScreem: {
                        screen: PokeEvolutionTab,
                        navigationOptions: {
                            title: 'Evoluciones'                
                        }
                    }               
  },
  {
     tabBarOptions: {
       activeTintColor: '#666',
       inactiveTintColor: '#ccc',
       style: {
          backgroundColor: 'transparent',
       },
       indicatorStyle:{
           backgroundColor: '#ccc'        
       }               
     }                 
  }

);

export default createAppContainer(PokeTabNavigator);
