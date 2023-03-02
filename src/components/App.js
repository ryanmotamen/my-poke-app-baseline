import React from "react";
import styles from "../styles.css";
import PokemonCreator from "./PokemonCreator.js";
import PokemonDisplay from "./PokemonDisplay";
import { useState } from "react";

const App = () => {

  const [pokemonList, addPokemonList] = useState([]);

  const handleAddPokemon = (pokemon) => {
    async function fetchPokemon() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon/" + pokemon
        );
        const data = await response.json();
        console.log(data)
        addPokemonList(pokemonList => [...pokemonList, data]);
      }
      catch(e){
        console.error(e);
      }
      }
      fetchPokemon();
  }

  return (
    <div>
      <h1>Pokemon Team Builder</h1>
      <PokemonCreator handleAddPokemon = {handleAddPokemon}/>
      <PokemonDisplay pokemonList={pokemonList} /> 
    </div>
  );
};

export default App;
