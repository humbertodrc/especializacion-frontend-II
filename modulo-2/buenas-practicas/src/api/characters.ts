import { ApiResponse} from '../types/character';

export const getCharacters = async(): Promise<ApiResponse> => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

