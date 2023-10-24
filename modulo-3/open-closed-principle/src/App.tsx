import {Title} from "./components/Title";

function App() {

  const onCLick = () => {
    console.log("withButton")
  }

	return (
		<div className="App">
			<Title title='Hola Camada 1 🙂❤' type={'default'}   />
		</div>
	);
}

export default App;
