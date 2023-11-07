import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {Button} from "./components/Button";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		{/* Aplicar estilos a App con JSS */}
		<App />

		{/* Playground para aplicar estilos en React luego pasar a JSS */}
		{/* <Button
			backgroundColor="#00beab"
			labelColor="#000"
			fontWeight={400}
			fontStyle="italic"
			spacing="0.8rem 2rem"
			fontSize="18px"
			onClick={() => {}}
		>
			Click me
		</Button> */}
	</React.StrictMode>
);
