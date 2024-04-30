interface PokemonCardProps {
  name: string;
  desc: string;
}

export default function PokemonCard({ name, desc }: PokemonCardProps) {
  return (
    <div className="rounded-md bg-tahiti p-4 mr-4">
      <h2 className='text-xl'>{name}</h2>
      <p>{desc}</p>
    </div>
  )
}