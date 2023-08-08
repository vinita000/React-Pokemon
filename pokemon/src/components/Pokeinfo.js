import React, { useState, useEffect } from "react";
import Pokecard from "./Pokecard";


const Pokeinfo = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();


  useEffect(() => {
    getPokemons();
  }, [url]);

  async function getPokemons() {
    const data = await fetch(url);
    const json = await data.json();
    setPrevUrl(json.previous);
    setNextUrl(json.next);
    getPokemon(json.results);
    console.log("json", json.previous);
  }

  // const getPokemon = async (res) => {
  //   let resultData = []
  //   res.map(async (item) => {
  //     console.log("res",res)
  //     const result = await fetch(item.url);
  //     const jsonResult = await result.json();
  //     // const isDuplicate = pokemonData.some(pokemon => pokemon.id === jsonResult.id);
  //     // console.log(isDuplicate);
  //     console.log("jsonResult",jsonResult);
  //     resultData.push(jsonResult);
  //   })
  //   setPokemonData(resultData)
  //     // state.sort((a,b)=>a.id > b.id ? 1: -1);
  //     console.log("resultData", resultData)
  // }

  const getPokemon = async (res) => {
    const resultData = await Promise.all(
      res.map(async (item) => {
        const result = await fetch(item.url);
        const jsonResult = await result.json();
        return jsonResult;
      })
    );

    setPokemonData(resultData);
    console.log("resultData", resultData);
  };

  // console.log("pokemonData", pokemonData);
  return (
    <div>
      <div>
        <h1 className='font-bold text-xl p-5 text-center'>Pokemon List</h1>
        <Pokecard pokemonData={pokemonData} />
      </div>
      <div className="flex justify-center mt-4">
        {
          prevUrl && 
          <button
          className="flex items-center px-10 mx-4 bg-sky-500 hover:bg-sky-700 text-white rounded-lg"
          onClick={() => {
            setUrl(prevUrl);
          }}
        >
          Previous
        </button>
        }
        {
          nextUrl && 
          <button
          className="flex items-center px-10 mx-4 bg-sky-500 hover:bg-sky-700 text-white rounded-lg"
          onClick={() => {
            setUrl(nextUrl);
          }}
        >
          Next
        </button>
        }
        
      </div>
    </div>
  );
};

export default Pokeinfo;
