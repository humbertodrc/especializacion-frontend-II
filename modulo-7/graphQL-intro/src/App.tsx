import {useQuery} from "@apollo/client";
import "./App.css";
import {CharacterData, CharactersData} from "./types/character.types";
import {GET_ALL_CHARACTERS, GET_CHARACTER_BY_ID} from "./querys";
import { useState } from 'react';

function App() {

  const [id, setId] = useState<number | null>(1)

  const { loading, error, data } = useQuery<CharactersData>(GET_ALL_CHARACTERS);
  const { loading: isLoading, error: isError, data: datos } = useQuery<CharacterData>(GET_CHARACTER_BY_ID, {
    variables: {
      id
    },
    skip: !id
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    setId(isNaN(value) ? null : value)
  }

	return (
    <>
      <h1>GraphQL</h1>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={id || ""}
            onChange={handleChange}
          />
        </label>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error :(</p>}
        {datos && datos.character && (
          <div className="card" key={datos.character.id}>
            <img src={datos.character.image} alt={datos.character.name} />
            <div className="container">
              <h4>{datos.character.name}</h4>
              <p>{datos.character.species}</p>
            </div>
          </div>
          )}
      </div>

			<div className="container">
				{loading && <p>Loading...</p>}
				{error && <p>Error :(</p>}
				{data &&
					data.characters.results.slice(0, 2).map((character) => (
						<div className="card" key={character.id}>
							<img src={character.image} alt={character.name} />
							<div className="container">
								<h4>{character.name}</h4>
								<p>{character.species}</p>
							</div>
						</div>
					))}
			</div>
		</>
	);
}

export default App;
