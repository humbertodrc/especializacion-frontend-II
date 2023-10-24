import React from "react";
import styles from "./styles/Title.module.css";

export interface TitleProps {
	children?: React.ReactNode;
	title: string;
}

// No cumple con el principio Open-Closed ya que se debe modificar el componente para agregar un nuevo tipo de título con button o link, crear un componente WhithButtonTitle y WithLinkTitle al ser mas específicos y no tener que modificar el componente Title

const Title: React.FC<TitleProps> = ({children, title}) => {
	return (
		<div className={styles.title}>
			<h1>{title}</h1>
			{children}
		</div>
	);
};

export default Title;
