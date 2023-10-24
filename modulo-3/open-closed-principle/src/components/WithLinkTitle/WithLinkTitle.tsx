import { FC } from 'react';

interface WithLinkTitleProps {
  href: string;
  buttonText: string;
}

export const WithLinkTitle:FC<WithLinkTitleProps> = ({href, buttonText}) => {
	return (
		<div>
			<a href={href}>{buttonText}</a>
		</div>
	);
};
