import {FC} from "react";
import {Home} from "../types";

interface ProductItemProps {
	home: Home;
}

export const ProductItem: FC<ProductItemProps> = ({home}) => {
	return (
		<div className="flex flex-col p-4 shadow-md rounded-md w-[300px] h-full m-4">
			<div className="relative h-[200px] w-full">
				<img alt={home.city} src={home.image} height="200px" />
			</div>
			<div className="px-4">
				<h3 className="mb-1">{home.name}</h3>
				<span className="text-gray-500 text-sm">
					{home.city},{home.state}
				</span>
				<h3 className="text-2xl font-bold mt-2 mb-1 text-pink-500">
          $ {new Intl.NumberFormat("es-AR").format(home.price)}
				</h3>
				<span className="text-gray-500 text-sm">
					{home.floors} floor, {home.rooms} rooms, {home.sqft}ft
				</span>
			</div>
		</div>
	);
};
