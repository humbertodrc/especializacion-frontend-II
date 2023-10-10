import React from "react";
export interface FahrenheitInterface {
	value: number;
}

const Fahrenheit: React.FC<FahrenheitInterface> = ({value = 0}) => {
	return <div className='temp'>{(value * 9) / 5 + 32}°F</div>;
};

export default Fahrenheit;
