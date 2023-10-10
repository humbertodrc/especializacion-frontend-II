import React, { ReactNode, useState } from "react";

export interface InputInterface {
	render: (value: number) => ReactNode;
}

const Input: React.FC<InputInterface> = ({render}) => {
	const [value, setValue] = useState<number>(0);

	return (
		<>
			<input
				type="text"
				value={value}
				onChange={(e) => setValue(Number(e.target.value))}
				placeholder="Temperatura en C°"
			/>
			{render(value)}
		</>
	);
};

export default Input;
