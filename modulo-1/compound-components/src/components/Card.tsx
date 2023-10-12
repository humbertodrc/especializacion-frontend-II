import { FC } from 'react';
import { Character } from '../types';

interface CardProps {
	character: Character;
}

const Card = ({character}: CardProps) => {
	return (
		<article>
			<div>
				<h2>{character.title}</h2>
				<p>{character.desc}</p>
				<img src={character.image} alt={character.alt} />
				<h3>{character.status}</h3>
			</div>
		</article>
	);
};

export default Card;
