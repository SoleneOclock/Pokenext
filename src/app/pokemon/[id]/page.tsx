// cette page sera rendu si l'url est /pokemon/unID
// c'est un route avec paramètre dynamique 
// automatiquement on va avoir la valeur du pram dynamique dans les props du composant
// props params => { id: '12' }

import { Pokemon as IPokemon } from '@/@types/pokemon';

interface PokemonProps {
  params: {
    id: number;
  }
}

const getPokemonData = async (id: number) => {
  console.log('On est dans l\'environnement : ', process.env.NODE_ENV);
  console.log('Voici la clé secrete', process.env.API_SECRET_KEY);
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pokemon/${id}`);
  const json = await response.json();
  return json as IPokemon;
}

export default async function Pokemon({ params }: PokemonProps) {

  // on recup l'id pour faire un fetch pour recup les données du pokemon ayant cet id
  const idOfPokemonToDisplay = params.id;
  const data = await getPokemonData(idOfPokemonToDisplay);

  return (
    <main className="p-4">
      <h1 className="text-2xl text-tahiti">{data.name.fr}</h1>
      <img src={data.sprites.regular} alt={data.name.fr} className="w-52" />
      <h2 className='text-xl'>{data.category}</h2>
      <p>
        {data.talents.map(talent => <span key={talent.name}>{talent.name}</span>)}
      </p>
    </main>
  )
}