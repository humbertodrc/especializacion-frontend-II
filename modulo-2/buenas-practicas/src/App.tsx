import "./App.css";
import { CardList } from './components/CardList';
import { Header } from './components/Header';

function App() {
	return (
		<div className='bg-black min-h-screen w-full p-8'>
      <Header />
      <CardList />
		</div>
	);
}

export default App;
