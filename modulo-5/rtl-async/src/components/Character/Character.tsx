import {url} from "../../api/endPoint";
import {useApiCharacter} from "../../hooks/useApiCharacter";
import "./style.css";

export interface CharacterI {
	id: number;
	image: string;
	name: string;
	status: string;
	species: string;
	gender: string;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
const Character = () => {
	
	const {character, isLoading, error} = useApiCharacter(url);

	return (
		<section>
			{isLoading && <p>Loading...</p>}
			{error && <p>En estos momentos no podemos procesar su solicitud</p>}
			{character.map((data: CharacterI) => {
				return (
					<article key={data.id} className="character">
						<img src={data.image} alt="personaje" />
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
