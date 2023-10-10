import React, {useState} from "react";
export interface InputInterface {}

const Input: React.FC<InputInterface> = () => {
	const [value, setValue] = useState<string>("");

	return (
		<input
			type="text"
			value={value}
			onChange={(e) => setValue(e.target.value)}
			placeholder="Temperatura en C°"
		/>
	);
};

export default Input;
