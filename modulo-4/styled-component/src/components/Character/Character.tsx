import { Status, useApi } from '../../hooks/useApi';
import './style.css';

interface Character {
	id: number;
	image: string;
	name: string;
	status: string;
	species: string;
	gender: string;
}

const Character = ({status}: Status) => {
	
	const {character} = useApi({status});

	return (
		<section>
			{character.map((data: Character) => {
				return (
					<article key={data.id} className="character">
						<img src={data.image} />
						<div>
							<h2>{data.name}</h2>
							<p>Status: {data.status}</p>
						</div>
					</article>
				);
			})}
		</section>
	);
};

export default Character;

