import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function Card({ name, i }) {
  // Fonction pour aller chercher l'image du pokemon
  const pokemonPicture = (number) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${number}.svg`;
  console.log(i);
  return (
    <>
      {/* link qui redirige vers un composant qui permet de récupérer les info de chaque via son nom*/}
      <Link to={`/pokemons/${name}`}>
        <img src={pokemonPicture(i)} alt="" />
        <h2>{name}</h2>
      </Link>
    </>
  );
}

Card.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }),
  i: PropTypes.number,
};
