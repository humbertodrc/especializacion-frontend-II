import { Pokemons } from '../types/pokemon.types';

export const getData = async (): Promise<Pokemons> => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Network error');
  }
};
