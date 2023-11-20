import {useEffect, useState} from "react";
import "./App.css";
import {getCharacters} from "./service/getCharacters";
import {Character} from "./types/character.types";

function App() {
	const [characters, setCharacters] = useState<Character[]>([]);
	const [search, setSearch] = useState<string>("");

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	};

	useEffect(() => {
		const fetchCharacters = async () => {
			try {
				const data = await getCharacters(search);
				setCharacters(data);
			} catch (error) {
				console.log("Error fetching characters:", error);
			}
		}

		fetchCharacters();
	}, [search]);

	return (
		<div className="App">
			<div>
				<h1>Rick and Morty</h1>
				<div className='search'>
					<input
						type="text"
						placeholder="Search..."
						value={search}
						onChange={handleSearch}
					/>
				</div>
				<div className="grilla">
					{characters.map((character: any) => (
						<div key={character.id} className="card">
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
