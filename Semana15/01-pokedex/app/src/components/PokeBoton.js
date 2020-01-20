import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import pokebola from "./../../../assets/pokemon-01.png";
import DimensionsService from "../services/DimensionsService";

const PokeBoton = () => {
  return (

    <TouchableOpacity>
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.9)",
        width: DimensionsService.getWidth / 3,
        justifyContent: "space-around",
        padding: 10,
        marginTop: 85,
        borderRadius: 50,
        overflow: 'hidden'
      }}
    >
      <Image source={pokebola}  style={{marginRight: 0, width: 50, height: 50}}  />
    </View>
    </TouchableOpacity>                

  );
};

export default PokeBoton;
