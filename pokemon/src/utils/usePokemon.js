import { useState, useEffect } from "react";

const usePokemon = (id) => {
  console.log("id", id)
  const [pokemon, setPokemon] = useState();

  useEffect(()=> {
    getPokemonInfo();
  }, [])
  // console.log("https://pokeapi.co/api/v2/pokemon/"+id)
  async function getPokemonInfo() {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon/"+id)
    const json = await data.json();
    setPokemon(json);
  }
  return pokemon;
}

export default usePokemon;