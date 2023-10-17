import {ApiResponse} from "../types/character";

export const getCharacters = async (): Promise<ApiResponse> => {
	return fetch("https://rickandmortyapi.com/api/character")
		.then((response) => {
			if (!response.ok) {
				throw new Error(response.statusText);
			}

			return response.json();
		})
		.catch((error) => console.log(error));
};

// Ahora con try catch
export const getCharacters2 = async (): Promise<ApiResponse> => {
	try {
		const response = await fetch("https://rickandmortyapi.com/api/character");
		if (!response.ok) {
			throw new Error(response.statusText);
		}
    const data = await response.json();
    return data;

	} catch (error) {
		throw new Error('Network error');
	}
};

