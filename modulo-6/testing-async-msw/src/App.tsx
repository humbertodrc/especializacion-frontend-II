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

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		getCharacters(search).then((data) => setCharacters(data));
		setSearch("");
	};

	useEffect(() => {
		const fetchData = async () => {
			const data = await getCharacters();
			setCharacters(data);
		};

		fetchData();
	}, []);

	return (
		<div className="App">
			<div>
				<h1>Testing</h1>
				<div className='search'>
					<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Search..."
						value={search}
						onChange={handleSearch}
						/>
						<button type="submit">Search</button>
					</form>
				</div>
				<div className="grilla">
					{characters && characters.map((character: any) => (
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
