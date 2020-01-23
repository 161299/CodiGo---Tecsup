import SafeAreaView from 'react-native-safe-area-view';
import { DrawerItems } from 'react-navigation-drawer';
import { View , StyleSheet,ScrollView, Image } from 'react-native';
import React from 'react';
import perfil from './../../assets/perfil.png'
const CustomDrawer = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <View  style={styles.headerContainer} >    
          <View style={styles.circulo}  >  
          <Image  source={perfil}  style={{width: 120, height: 120}}  />
          </View>                        
      </View>

      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee'
  },
  headerContainer:{
    height: 200,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  circulo:{
     height: 150,
     width: 150,
     borderRadius: 75,
     borderColor: '#ddd',
     borderWidth: 2,
     justifyContent: 'center',
     alignItems: 'center'
  }
});

export default CustomDrawer;