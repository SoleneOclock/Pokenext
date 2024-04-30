// si on a un composant serveur asynchrone on peut ajouter un composant Loading
// dans un fichier loading.tsx : il sera automatiquement rendu au client en attendant que la promesse soit fulfilled

export default function Loading() {
  return <div>veuillez patienter ...</div>
}