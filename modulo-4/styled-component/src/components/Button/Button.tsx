import React from "react";
import {ButtonStyled, ButtonStyledOutline} from "./Button.style";
export interface ButtonProps {
	children: React.ReactNode;
	isPrimary?: boolean;
	onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({children, isPrimary, onClick}) => {
	return (
		<ButtonStyled isPrimary={isPrimary} onClick={onClick}>
			{children}
		</ButtonStyled>
		// <ButtonStyledOutline isPrimary={isPrimary} onClick={onClick}>
		// 	{children}
		// </ButtonStyledOutline>
	);
};

export default Button;
