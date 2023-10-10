import React from 'react';
export interface KelvinInterface {
	value: number;
}

const Kelvin : React.FC<KelvinInterface> = ({value = 0}) => {
	return <div className='temp'>{value +  273.15}K</div>;
};

export default Kelvin;
