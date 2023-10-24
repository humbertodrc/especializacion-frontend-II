import {Title} from "./components/Title";
import { WithLinkTitle } from './components/WithLinkTitle';
import { WithButtonTitle } from './components/WithButtonTitle';

function App() {

  const onCLick = () => {
    console.log("withButton")
  }

	return (
		<div className="App">
			<Title title='Hola Camada 1 🙂❤'>
				<WithLinkTitle href="https://www.google.com" buttonText="Link" />
			</Title>

			<Title title='Hola Camada 1 🙂❤'>
				<WithButtonTitle onClick={onCLick} buttonText="Button" />
			</Title>
		</div>
	);
}

export default App;
