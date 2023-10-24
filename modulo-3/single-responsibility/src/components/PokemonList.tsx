import { useEffect, useState } from "react";
import { Result } from '../types/pokemon.types';

// Single-responsibility principle: Este principio establece que una clase debe tener una única razón para cambiar. Debe tener una sola responsabilidad.
// En el siguiente componente estamos violando el principio SRP
// Debemos identificar que logica podemos extrar en un nuevo componente
// para mejorar nuestro codigo

const PokemonList = () => {
  const [pokemons, setPokemons] = useState<Result[]>([]);

  useEffect(() => {
    async function getPokemons() {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10"
      );
      const firstTen = await response.json();
      setPokemons(firstTen.results);
    }
    getPokemons();
  }, []);

  const renderPokemons = () => {
    return pokemons.map((pokemon: Result) => {
      return <li key={pokemon.url}>{pokemon.name}</li>;
    });
  };

  return (
    <section>
      <h1>SRP 👨‍💻</h1>
      <ul>{renderPokemons()}</ul>
    </section>
  );
};

export default PokemonList;
