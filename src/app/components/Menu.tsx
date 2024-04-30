// j'importe le composant Link de Next pour faire des liens de navigation coté client
// un peu comme ceux de react-router-dom
import Link from 'next/link';

export default function Menu() {
  return (
    <div className='flex p-4 gap-2 bg-tahiti'>
      <Link className=" hover:text-pink" href="/">Home</Link>
      <Link className=" hover:text-pink" href="/about">About</Link>
    </div>
  );
}