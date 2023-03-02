import React from "react";
import { useState, useEffect } from "react";

export default function PokemonDisplay({ pokemonList }) {
  const pokemonArray = [];
  function listDestructor() {
    return pokemonList.map((pokemon, index) => (
      <div key={index} className="cardDiv">
       <h2>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</h2>
       <h3>{pokemon.types[0].type.name[0].toUpperCase() + pokemon.types[0].type.name.substring(1)}</h3>
       <div className = 'sprites-div'>
       <img className = 'pokemon-img' src = {pokemon.sprites.front_shiny}/>
       <img className = 'pokemon-img' src = {pokemon.sprites.back_shiny}/>
       </div>
       
       <div className='stats'>
        <ul>
          <li>HP: {pokemon.stats[0].base_stat}</li>
          <li>Attack: {pokemon.stats[1].base_stat}</li>
          <li>Defense: {pokemon.stats[2].base_stat} </li>
          <li>Special Attack: {pokemon.stats[3].base_stat}</li>
          <li>Special Defense: {pokemon.stats[4].base_stat}</li>
          <li>Speed: {pokemon.stats[5].base_stat}</li>
        </ul>
        </div>
      </div>
    ));
  }

  return (
    <div>
      <div>{listDestructor()}</div>
    </div>
  );
}
