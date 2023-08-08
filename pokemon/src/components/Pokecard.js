import React from 'react';

const Pokecard = ({ pokemonData }) => {
  // console.log(pokemonData);

  return (
    <div className='flex flex-wrap'>
      {pokemonData && pokemonData.map((poke) => (
        <div key={poke.id} className="w-[300px] p-2 m-2 shadow-lg bg-pink-50">
          <img alt={poke?.name} src={poke?.sprites?.front_default} />
          <h4>{poke.id}</h4>
          <h4 className="font-bold text-xl text-center">{poke?.name}</h4>
        </div>
      ))}
    </div>
  );
}

export default Pokecard;
