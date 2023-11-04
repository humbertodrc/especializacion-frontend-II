import "./App.css";

import logo from "./assets/logo.svg";
import {Character} from "./components/Character";
import {Modal} from "./components/Modal";
import useModal from "./hooks/useModal";

function App() {
	const {isShowing: isAliveShowed, toggle: toggleAlive} = useModal();
	const {isShowing: isDeadShowed, toggle: toggleDead} = useModal();

	return (
		<div className="App">
			<img src={logo} />
			<div>
				{/* Cambia estilos a JSS */}
				<button onClick={toggleAlive}>
					<p className="ButtonAliveRicks">Rick's vivos</p>
				</button>

				{/* Cambia estilos a JSS */}
				<button onClick={toggleDead}>
					<p className="ButtonDeadsRicks">Rick's vivos</p>
				</button>
			</div>

			{/* Cambia estilos a JSS */}
			<Modal isShowing={isAliveShowed} hide={toggleAlive} title="Rick's vivos">
				{/* Cambia estilos a JSS */}
				<Character status="alive" />
			</Modal>

			{/* Cambia estilos a JSS */}
			<Modal isShowing={isDeadShowed} hide={toggleDead} title="Rick's muertos">
				{/* Cambia estilos a JSS */}
				<Character status="dead" />
			</Modal>
		</div>
	);
}

export default App;
