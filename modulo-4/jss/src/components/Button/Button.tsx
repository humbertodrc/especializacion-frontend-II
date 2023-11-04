import React from "react";


export interface ButtonProps {
	children: React.ReactNode;
}

// Playground para ver como funcionan los estilos en React, despues estiliar con la libreria JSS

const Button: React.FC<ButtonProps> = ({children}) => {
	return (
		<button>
			<span>{children}</span>
		</button>
	);
};

export default Button;
