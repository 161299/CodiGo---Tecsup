import MapView from "react-native-maps";
import { Header } from "react-native-elements";
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

const App = () => {
  const [markes, setMarkes] = useState([]);

  const onMapPress = e => {
    console.log(e);
    let objMarker = {
      coordinate: {
        longitude: e.nativeEvent.coordinate.longitude,
        latitude: e.nativeEvent.coordinate.latitude
      }
    };
    let tmpMarkers = markes;
    tmpMarkers.push(objMarker);
    setMarkes(tmpMarkers);
  };

  return (
    <View style={{ flex: 1 }}>
      <Header
        centerComponent={{
          text: "Cristhian Laurente Developer",
          style: { color: "#fff" }
        }}
      />
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          longitude: -71.5174103,
          latitude: -16.4320659,
          latitudeDelta: 0.0,
          longitudeDelta: 0.0
        }}
        onPress={e => {
          onMapPress(e);
        }}
      >
        {markes.map(m => (
          <MapView.Marker coordinate={marker.coordinate} />
        ))}
      </MapView>
    </View>
  );
};

export default App;
