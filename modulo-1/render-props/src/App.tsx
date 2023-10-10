import "./App.css";
import {Fahrenheit, Input, Kelvin} from "./components";

function App() {
	return (
		<div className="App">
			<h1>Convertidor de Temperatura⛅</h1>
			<Input
				render={(value) => (
					<>
						<Kelvin value={value} />
						<Fahrenheit value={value} />
					</>
				)}
			/>
		</div>
	);
}

export default App;
