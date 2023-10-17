import { useApi } from "../../hooks/useApi";

export interface CardListInterface {}

const CardList: React.FC<CardListInterface> = () => {

	const {data, error} = useApi();

	return (
		<>
			{error.hasError && <p className='text-white'>{error.errorMessage}</p>}
			<section className="grid grid-cols-12 gap-6">
				{data.map((character) => (
					<div
						key={character.id}
						className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-2 bg-slate-700 rounded-xl p-4"
					>
						<img
							className="w-full object-cover"
							src={character.image}
							alt={character.name}
						/>
						<h4 className="text-2xl text-white">{character.name}</h4>
						<p className="text-base text-white">{character.species}</p>
						<span className="text-sm text-white">{character.status}</span>
					</div>
				))}
			</section>
		</>
	);
};

export default CardList;
