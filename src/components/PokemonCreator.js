import React from "react";
import { useState } from "react";

export default function PokemonCreator({handleAddPokemon}) {
  const [pokemonName, setPokemonName] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(pokemonName);
    setPokemonName("");
    handleAddPokemon(pokemonName.toLowerCase());
  }
  return (
    <div id='submit-poke-form'>
      <form onSubmit={handleFormSubmit}>
        <label>
          <input
            name='pokemonAdd'
            id='pokemon-text-input'
            value={pokemonName}
            onChange={(e) => {
              setPokemonName(e.target.value)
            }
          }
          />
        </label>
        <label>
          <button 
            name='pokemonSubmit' 
            type="submit"
            id= 'pokemon-submit-btn'
          >
          Submit
          </button>
        </label>
      </form>
    </div>
  );
}


