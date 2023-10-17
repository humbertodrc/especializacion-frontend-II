import React from "react";
export interface HeaderInterface {}

const Header: React.FC<HeaderInterface> = () => {
	return (
		<header className='w-full py-6'>
			<h1 className="text-4xl text-white text-center">
				DRY, KISS y Manejo de errores
			</h1>
		</header>
	);
};

export default Header;
