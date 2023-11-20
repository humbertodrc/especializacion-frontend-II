import {useEffect, useState} from "react";
import "./App.css";
import { getCharacters } from './service/getCharacters';
import { Character } from './types/character.types';

function App() {
	const [characters, setCharacters] = useState<Character[]>([]);
	// const [error, setError] = useState(false);
	// const [loading, setLoading] = useState(false);

	// const getCharacters = async () => {
	// 	setLoading(true);
	// 	try {
	// 		const response = await fetch("https://rickandmortyapi.com/api/character");
	// 		if (!response.ok) throw new Error("Error en la llamada");
	// 		const data = await response.json();
	// 		setCharacters(data.results);
	// 	} catch (error) {
	// 		setError(true);
	// 	} finally {
	// 		setLoading(false);
	// 	}
	// };

	useEffect(() => {
		getCharacters().then((data) => setCharacters(data))
	}, []);

	return (
		<div className="App">
			<div>
				<h1>Rick and Morty</h1>
				{/* {loading && <p>Loading...</p>}
				{error && <p>Error</p>} */}
				<div className='grilla'>
					{characters.map((character: any) => (
						<div key={character.id} className='card'>
							<h2>{character.name}</h2>
							<img src={character.image} alt={character.name} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
