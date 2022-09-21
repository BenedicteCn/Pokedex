import React from 'react'
import "./PokemonDescription.css";
import axios from 'axios'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function PokemonDescription() {
    const params = useParams();
    const [onePokemon, setOnePokemon] = useState([])

    useEffect(() => {
        axios
          .get(
            `http://localhost:3000/${params.id}/`
          )
          .then((response) => {
            setOnePokemon(response.data.data.pokemon)
          })
          .catch((err) => {
            console.error(err);
          });
      }, [params.id]);

  return (
    <div className="pokemon-description-card">
        <div className="pokemon-description">
            <h3 id="pokemon-name">{onePokemon.name}</h3>
            <p>Poids: {onePokemon.weight} kg</p>
            <p>Taille: {onePokemon.height} cm</p>
            <p>Expérience: {onePokemon.base_experience}</p>
            <a id="a-back-home" href={'/'}>Retour à l'accueil</a>
        </div>
    </div>
  )
}

export default PokemonDescription