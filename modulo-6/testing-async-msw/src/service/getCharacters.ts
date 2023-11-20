import { URL_BASE } from '../api/urlApi';
import { Character } from '../types/character.types';

export const getCharacters = async (nombre?:string): Promise<Character[]> => {
  
  let params = "?";
  if (nombre) {
    params += `name=${nombre}`;
  }
  
  try {
    console.log('Antes de la solicitud');
    const response = await fetch(`https://rickandmortyapi.com/api/character/${params}`);
    console.log('Después de la solicitud');
    // if (!response.ok) throw new Error('Error al obtener los datos');
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching characters:', error);
    return []; // Devuelve una respuesta vacía en caso de error
  }

}

