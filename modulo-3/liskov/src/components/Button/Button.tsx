import React from "react";
import "./styles/Button.css";
export interface ButtonProps {
	children: React.ReactNode;
	color: "primary" | "secondary";
	size: "small" | "medium";
}

const Button: React.FC<ButtonProps> = ({children, color, size}) => {
	return (
		<button
			className={`${
				color === "primary" ? "button__primary" : "button__secondary"
			} ${size === "medium" ? "button__size-medium" : "button__size-small"}`}
		>
			{children}
		</button>
	);
};

export default Button;
