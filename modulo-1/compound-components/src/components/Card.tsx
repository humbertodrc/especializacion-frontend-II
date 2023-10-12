import {ReactNode} from "react";
import {Character} from "../types";

interface CardProps {
	children?: ReactNode;
	src?: string;
	alt?: string;
}

const Card = ({children}: CardProps) => {
	return (
		<article>
			{children}
		</article>
	);
};

const CardBody = ({ children }: CardProps) => <div>{children}</div>;

const CardTitle = ({ children }: CardProps) => <h2>{children}</h2>;

const CardDescription = ({ children }: CardProps) => <p>{children}</p>;

const CardImage = ({ src, alt }: CardProps) => <img src={src} alt={alt} />;

const CardStatus = ({ children }: CardProps) => <h3>{children}</h3>;

Card.Body = CardBody;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Image = CardImage;
Card.Status = CardStatus;


export default Card;
