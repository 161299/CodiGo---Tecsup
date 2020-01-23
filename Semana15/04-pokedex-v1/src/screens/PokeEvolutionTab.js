
import React , {useState, useEffect}from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'
import { GLobal } from '../services/Global'

const PokeEvolutionTab = () => {

  const [nameInit, setNameInit] = useState('')
  const [nameSecond, setNameSecond] = useState('')
  const [nameTercer, setNameTercer] = useState('')
  let global = GLobal.getInstance();


  const getEvolution =  async () => {
    let endpoint = `https://pokeapi.co/api/v2/evolution-chain/${global.pokemonId}/`;
    let rpta = await axios(endpoint);
    rpta.data.chain.evolves_to.map(e => {
      setNameSecond(e.species.name)
      e.evolves_to.map(ev => {
        setNameTercer(ev.species.name)
      });
    });
    setNameInit(rpta.data.chain.species.name) 
  }

  useEffect(() => {
    getEvolution()
  }, []);

  return (
    <View>
      <Text>{nameInit}</Text>
      <Text>{nameSecond}</Text>
      <Text>{nameTercer}</Text>
    </View>
  )
}

export default PokeEvolutionTab

