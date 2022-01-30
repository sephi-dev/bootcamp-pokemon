import { Card } from "../component/card-pokemon";
import { api } from "../services/pokemon";
import useSWR from "swr";
// Fonction qui va taper dans l'api pokenode-ts les 151 premiers pokemon en commençant par le premier
const fetcher = () => api.listPokemons(0, 151);

export function Home() {
  // https://swr.vercel.app/
  const { data, error } = useSWR("/pokemons", fetcher);
  // si pas de data aficher "loading" au lieu de l'erreur
  if (!data) return "loading";
  return (
    <>
      <h1 className="text-3xl font-bold">Pokedex</h1>
      {/* On fait un map des résultats dans data qui nous retourne le pokemon et en argument sa position*/}
      {data.results.map((pokemon, i) => (
        // On affiche dans Card le nom et la position de chaque pokemon
        <Card name={pokemon.name} key={pokemon.name} i={i + 1} />
      ))}
    </>
  );
}
