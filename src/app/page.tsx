import Image from "next/image";
import PokemonCard from './components/PokemonCard';

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl text-tahiti hover:text-pink">Pokedex</h1>

      <p>ici la liste des pokemons</p>
      <div className='flex'>
        <PokemonCard name="pikachu" desc="pokemon eclair" />
        <PokemonCard name="pikachu" desc="pokemon eclair" />
        <PokemonCard name="pikachu" desc="pokemon eclair" />
      </div>
    </main>
  );
}
