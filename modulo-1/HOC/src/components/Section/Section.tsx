import React from "react";
export interface SectionInterface {
	title: string;
	description: string;
}

const Section: React.FC<SectionInterface> = ({title, description}) => {
	return (
		<section>
			<h1>{title}</h1>
			<p>{description}</p>
		</section>
	);
};

export default Section;
