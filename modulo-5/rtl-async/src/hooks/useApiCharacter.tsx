import {useEffect, useState} from "react";
import {CharacterI} from "../components/Character/Character";

export const useApiCharacter = (url: string) => {
	const [character, setCharacter] = useState<CharacterI[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);

	const getCharacter = async () => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			setCharacter(data.results);
			setIsLoading(false);
		} catch (error) {
			setError(true);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getCharacter();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [url]);

	return {character, isLoading, error};
};
