import { useEffect, useState } from "react";
import { Result } from '../types/pokemon.types';
import useApi from '../hooks/useApi';
import { PokemonItem } from './PokemonItem';

// Single-responsibility principle: Este principio establece que una clase o modulo debe tener una única razón para cambiar. Debe tener una sola responsabilidad. 
// En el siguiente componente estamos violando el principio SRP
// Debemos identificar que logica podemos extrar en un nuevo componente
// para mejorar nuestro codigo

const PokemonList = () => {
  
  const {data:pokemons} = useApi();

  return (
    <section>
      <h1>SRP 👨‍💻</h1>
      {pokemons.map((pokemon: Result) => (
          <PokemonItem key={pokemon.name} name={pokemon.name} />
        ))}
    </section>
  );
};

export default PokemonList;
