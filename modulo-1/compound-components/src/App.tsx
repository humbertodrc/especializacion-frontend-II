import "./App.css";
import Card from './components/Card';
import {characters} from "./data";

function App() {
	return (
		<>
			<h1>Compound Components</h1>
			<main>
				{characters.map((character) => (
					<Card key={character.id} character={character} />
				))}
			</main>
		</>
	);
}

export default App;
