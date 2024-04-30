"use client";

import { Pokemon } from '@/@types/pokemon';
import { useState } from 'react';

interface PokemonCardProps {
  pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  // attention pour les statefull components on doit les rendre coté client, pour ça on ajoute en haut du fichier la ligne 'use client' qui indique que ce composant sera rendu coté client
  console.log('execution du composant PokemonCard');

  const [nbLikes, setNbLikes] = useState(0);

  return (
    <div className="rounded-md bg-tahiti p-4 w-[31%]">
      <img src={pokemon.sprites.regular} alt={pokemon.name.fr} />
      <h2 className='text-xl'>{pokemon.name.fr}</h2>
      <p>{pokemon.category}</p>
      <button 
        onClick={() => {
          setNbLikes(nbLikes + 1);
        }}
      >
        {nbLikes} ❤️
      </button>
    </div>
  )
}