import "./App.css";
import { Button } from './components/Button';
import { ButtonAlert } from './components/ButtonAlert';


// Si creamos un componente que sea RedButton y por ejemplo que herede el comportamiento de Button (ojo no estamos trabajando con clases), este debemos poder cambiarlo por Button en cualquier parte de la app, respetando la sustitucion de Liskov
function App() {
	return (
		<div className="App">
      <h1>Principio de sustitución de Liskov (LSP) 👀</h1>
			<Button color="primary" size="medium">Button</Button>
			<ButtonAlert />
		</div>
	);
}

export default App;
