import "./App.css";
import {VideoList} from "./components/VideoList";
import {videoThumbnail} from "./data/data";

function App() {
	return (
		<div className="App">
			<h1>Principio de segregación de interfaz (ISP)</h1>
			<VideoList items={videoThumbnail} />
		</div>
	);
}

export default App;
