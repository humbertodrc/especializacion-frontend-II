import "./App.css";
import Card from "./components/Card";
import {characters} from "./data";

function App() {
	return (
		<>
			<h1>Compound Components</h1>
			<main>
				{characters.map(({id, title, desc, image, alt, status}) => (
					<Card key={id}>
						<Card.Body>
							<Card.Title>{title}</Card.Title>
							<Card.Description>{desc}</Card.Description>
							<Card.Image src={image} alt={alt} />
							<Card.Status>{status}</Card.Status>
						</Card.Body>
					</Card>
				))}
			</main>
		</>
	);
}

export default App;
