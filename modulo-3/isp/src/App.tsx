import "./App.css";
import {VideoList} from "./components/VideoList";
import {liveStream, videoThumbnail} from "./data/data";

function App() {

	// Problema: tenemos un componente que muestra una lista de videos, pero no todos los videos tienen la misma información. nos piden usar el mismo componente para una lista de streaming ¿Cómo podemos hacerlo?

	return (
		<div className="App">
			<h1>Principio de segregación de interfaz (ISP)</h1>
			<VideoList items={videoThumbnail} />
			<VideoList items={liveStream} />
		</div>
	);
}

export default App;
