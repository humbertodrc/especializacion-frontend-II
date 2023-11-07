import React from "react";
import {createUseStyles} from "react-jss";

export interface ButtonProps {
	children: React.ReactNode;
	onClick: () => void;
	backgroundColor: string;
	spacing: string;
	labelColor: string;
	fontWeight: number;
	fontStyle: string;
	fontSize: string;
}

// Playground para ver como funcionan los estilos en React, despues estiliar con la libreria JSS

// Usando react-jss
interface ButtonStylesProps {
	backgroundColor: string;
	spacing: string;
	labelColor: string;
	fontWeight: number;
	fontStyle: string;
	fontSize: string;
}

const useStyles = createUseStyles({
	myButton: {
		padding: (props: ButtonStylesProps) => props.spacing,
		backgroundColor: (props: ButtonStylesProps) => props.backgroundColor,
	},
	myLabel: {
		display: "block",
		color: (props: ButtonStylesProps) => props.labelColor,
		fontWeight: (props: ButtonStylesProps) => props.fontWeight,
		fontStyle: (props: ButtonStylesProps) => props.fontStyle,
		fontSize: (props: ButtonStylesProps) => props.fontSize,
	},
});

const Button: React.FC<ButtonProps> = ({
	children,
	spacing,
	labelColor,
	fontWeight,
	fontStyle,
	backgroundColor,
	fontSize,
	onClick,
}) => {
	
	const classes = useStyles({
		spacing,
		labelColor,
		fontWeight,
		fontStyle,
		backgroundColor,
		fontSize,
	});

	return (
		<button className={classes.myButton} onClick={onClick}>
			<span className={classes.myLabel}>{children}</span>
		</button>
	);
};

export default Button;
