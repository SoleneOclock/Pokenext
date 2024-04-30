import Image from "next/image";
import PokemonCard from './components/PokemonCard';

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl text-tahiti">Pokedex</h1>

      <p className="bg-cyan-200">ici la liste des pokemons</p>
      <div className='flex'>
        <PokemonCard name="pikachu" desc="pokemon eclair" />
        <PokemonCard name="pikachu" desc="pokemon eclair" />
        <PokemonCard name="pikachu" desc="pokemon eclair" />
      </div>
    </main>
  );
}
