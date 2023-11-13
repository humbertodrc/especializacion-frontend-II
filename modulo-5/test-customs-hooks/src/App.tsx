import useToggle from "./hooks/useToggle";
import "./App.css";
import { Modal } from './components/Modal';
import { Sidebar } from './components/Sidebar';

function App() {
	const {
		isOpen: modalIsOpen,
		close: closeModal,
		toggle: toggleModal,
	} = useToggle();
	const {
		isOpen: sidebarIsOpen,
		close: closeSidebar,
		toggle: toggleSidebar,
	} = useToggle();

	return (
		<div className="App">
			<div className="container">
				<Sidebar visible={sidebarIsOpen} close={closeSidebar} />
				<h1>useToggle custom hook</h1>
				<div className="button-container">
					<button onClick={toggleSidebar}>Open sidebar</button>
					<button onClick={toggleModal}>Open modal</button>
				</div>
				<Modal visible={modalIsOpen} close={closeModal} />
			</div>
		</div>
	);
}

export default App;
