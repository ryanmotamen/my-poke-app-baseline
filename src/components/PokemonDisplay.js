import React from "react";
import { useState } from "react";

export default function PokemonDisplay({ pokemonList }) {

  function listDestructor() {
    return pokemonList.map((pokemon, index) => {
      const moveArray = pokemon.moves.map((move) => move.move.name);
      const {name, types, sprites, stats, moves} = pokemon;
      // const [move1, setMove1] = useState(moves[0].move.name); // maintain the selected value of move1 dropdown
      // const [move2, setMove2] = useState(moves[1].move.name); // maintain the selected value of move2 dropdown
      // const [move3, setMove3] = useState(moves[2].move.name); // maintain the selected value of move3 dropdown
      // const [move4, setMove4] = useState(moves[3].move.name); // maintain the selected value of move4 dropdown
      // const moveOptions = moves.map((move) => (
      //   <option key={move.move.name} value={move.move.name}>
      //     {move.move.name}
      //   </option>
      // ));

      return (
        <div key={index} className="cardDiv">
          <h2>{name[0].toUpperCase() + pokemon.name.substring(1)}</h2>
          <h3>
            {types[0].type.name[0].toUpperCase() +
              types[0].type.name.substring(1)}
          </h3>
          <div className="sprites-div">
            <img className="pokemon-img" src={sprites.front_shiny} />
            <img className="pokemon-img" src={sprites.back_shiny} />
          </div>

          <div className="stats">
            <ul>
              <li className="hp">HP: {stats[0].base_stat}</li>
              <li className="attack">Attack: {stats[1].base_stat}</li>
              <li className="defense">
                Defense: {stats[2].base_stat}{" "}
              </li>
              <li className="special-attack">
                Special Attack: {stats[3].base_stat}
              </li>
              <li className="special-defense">
                Special Defense: {stats[4].base_stat}
              </li>
              <li className="speed">Speed: {stats[5].base_stat}</li>
            </ul>
          </div>
          <div className="moves">
            <select
            className="move1">
              {moveArray.map((move) => (
                <option key={move} value={move}>
                  {move}
                </option>
              ))}
            </select>
            <select
            className="move2">
              {moveArray.map((move) => (
                <option key={move} value={move}>
                  {move}
                </option>
              ))}
            </select>
            <select
            className="move3">
              {moveArray.map((move) => (
                <option key={move} value={move}>
                  {move}
                </option>
              ))}
              
            </select>
            <select 
            className="move4">
              {moveArray.map((move) => (
                <option key={move} value={move}>
                  {move}
                </option>
              ))}
            </select>
          </div>
        </div>
      );
    });
  }
  return (
    // <div className = 'pokemon-display-div'>
      <div className = 'pokemon-display-div'>{listDestructor()}</div>
    // </div>
  );
}
