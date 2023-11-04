import { useState, useEffect } from 'react';

export interface Status {
	status: string;
}


export const useApi = ({status}:Status) => {
  const [character, setCharacter] = useState([]);

	useEffect(() => {
		const fetchCharacter = (status: string) =>
			fetch(
				`https://rickandmortyapi.com/api/character?name=rick&status=${status}`
			)
				.then((response) => response.json())
				.then((character) => {
					setCharacter(character.results);
				});
		fetchCharacter(status);
  }, [status]);
  
  return { character };
}