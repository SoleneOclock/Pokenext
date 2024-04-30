"use client";

import { Pokemon } from '@/@types/pokemon';
import Link from 'next/link';
import { useState } from 'react';

interface PokemonCardProps {
  pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  // attention pour les statefull components on doit les rendre coté client, pour ça on ajoute en haut du fichier la ligne 'use client' qui indique que ce composant sera rendu coté client
  const [nbLikes, setNbLikes] = useState(0);

  return (
    <Link className="rounded-md bg-tahiti p-4 w-[31%]" href={`/pokemon/${pokemon.pokedex_id}`}>
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
    </Link>
  )
}