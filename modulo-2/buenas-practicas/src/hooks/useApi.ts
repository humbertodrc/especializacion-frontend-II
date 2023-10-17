import { useEffect, useState } from 'react';
import { getCharacters } from '../api/characters';
import { Character } from '../types/character';

interface IError{
  hasError: boolean;
  errorMessage: string;
}

export const useApi = () => {
  const [data, setData] = useState<Character[]>([]);
  const [error, setError] = useState<IError>({
    hasError: false,
    errorMessage: '',
  });

  const getData = async () => {
    try {
      const response = await getCharacters();
      setData(response.results);
    } catch (error) { 
      console.log(error);
      setError({
        hasError: true,
        errorMessage: "Error al obtener los datos",
      })
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return { data, error };
}