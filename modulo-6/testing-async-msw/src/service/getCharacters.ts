import { Character } from '../types/character.types';

export const getCharacters = async (nombre?:string): Promise<Character[]> => {
  
  let params = '?';
  if (nombre) params += `name=${nombre}&`;

  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${params}`);
    if (!response.ok) throw new Error('Error al obtener los datos');
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw new Error("Error al obtener los datos");
  }

}

