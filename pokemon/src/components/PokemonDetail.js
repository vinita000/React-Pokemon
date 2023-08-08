import React from 'react'
import usePokemon from '../utils/usePokemon';
import { useParams } from "react-router-dom";


const PokemonDetail = () => {
const params = useParams();

const pokemon = usePokemon(params.id)

console.log("pokemon", pokemon);

return (
  <div className="flex flex-col items-center justify-center h-screen">
    <h1 className='font-bold text-xl p-5 text-center'>Pokemon Details</h1>
    <img className="h-28" alt={pokemon?.name} src={pokemon?.sprites?.front_shiny} />
    <h1 className="font-bold text-2xl my-2">Name: {pokemon?.name}</h1>
    <div className="flex font-bold my-2">
      <h1 className="text-2xl mr-2">Abilities:</h1>
      <h3>{pokemon?.abilities.map((ability) => ability?.ability?.name).join(', ')}</h3>
    </div>
    <h1 className="font-bold text-2xl my-2">Species: {pokemon?.species?.name}</h1>
    <div className="flex font-bold my-2">
      <h1 className="text-2xl mr-2">Stats:</h1>
      <h3>{pokemon?.stats.map((stat) => stat?.stat?.name).join(', ')}</h3>
    </div>
    <div className="flex font-bold my-2">
      <h1 className="text-2xl mr-2">Types:</h1>
      <h3>{pokemon?.types.map((type) => type?.type?.name).join(', ')}</h3>
    </div>
  </div>
);
}
export default PokemonDetail
