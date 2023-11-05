import React from 'react';
export interface ButtonProps {
	children: React.ReactNode;
}

const Button : React.FC<ButtonProps> = ({children}) => {
	return <button>{children }</button>;
};

export default Button;
