import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios'
import PokemonCard from './PokemonCard';
import "./PokemonList.css";


function PokemonList() {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/').then(({data}) => {
            setPokemons(data.data.pokemon.results)
            console.log(data.data.pokemon.results)
        })
    }, []);
    
  return (
    <>
    <h2>Retrouve tous tes pokemons dans ta pokedex !</h2>
    <div className="pokemon-list">
        {pokemons.map((pokemon) => (
            <PokemonCard pokemon={pokemon} />
        ))}
    </div>
    </>
  )
}

export default PokemonList