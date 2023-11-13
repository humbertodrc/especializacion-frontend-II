import "./App.css";
import Character from "./components/Character/Character";
import logo from "./logo.svg";

function App() {
	return (
		<div className="App">
			<div className='logo'>
				<img src={logo} alt="logo" className="logo-princial" />
			</div>
			<Character />
		</div>
	);
}

export default App;
