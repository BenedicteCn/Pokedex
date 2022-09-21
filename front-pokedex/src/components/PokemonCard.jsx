import React from 'react'
import { useState, useEffect } from "react";
import "./PokemonCard.css";
import axios from 'axios'

function PokemonCard( { pokemon } ) {
    const [pokemonDescription, setPokemonDescription] = useState("")
    let id = pokemon.url.split('/')[6]

    useEffect(() => {
        axios.get(`http://localhost:3000/${id}/`).then(({data}) => {
            setPokemonDescription(data.data.pokemon.sprites)
            console.log(data.data)
        })
    }, []);

  return (
    <div key={id} className="pokemon-card">
        <a id="pokemon-card-a" href={`/${id}`}>
        <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
        <img src={pokemonDescription.front_default} className="product-card-image" alt={pokemonDescription.id}  />
        </a>
    </div>
  )
}

export default PokemonCard