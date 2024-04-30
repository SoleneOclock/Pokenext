import Image from "next/image";
import PokemonCard from './components/PokemonCard';
import { Pokemon } from '@/@types/pokemon';

const getPokemonsFromAPI = async () => {
  // cette fonction sera executé coté serveur, elle va fetch les pokemons, on pourra direct les utiliser dans le JSX pour construire la page avant de l'envoyer au client
  const response = await fetch(`https://tyradex.vercel.app/api/v1/gen/1`);
  const jsonData = await response.json();
  // on renvoie la liste des pokemons
  return jsonData;
}

export default async function Home() {
  
  // par defaut tous les composants avec Next sont des serveur components, c'est à dire qu'il s'execute coté server (donc attention les console.log se font dans le terminal du serveur et NON dans la console du navigateur)
  console.log('execution du composant Home');

  // on veut fetch une liste de pokemons pour faire un map dessus et afficher un composant PokemonCard pour chaque pokemon
  const pokemonList = await getPokemonsFromAPI() as Pokemon[];

  return (
    <main className="p-4">
      <h1 className="text-2xl text-tahiti">Pokedex</h1>

      <p className="bg-cyan-200">ici la liste des pokemons</p>
      <div className='flex flex-wrap gap-1 justify-center'>
        {
          pokemonList.map(pokemon => (
            <PokemonCard 
              pokemon={pokemon}
              key={pokemon.pokedex_id}
            />
          ))
        }
      </div>
    </main>
  );
}
