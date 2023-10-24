import { FC } from 'react';

interface WithButtonTitleProps {
  onClick: () => void;
  buttonText: string;
}

export const WithButtonTitle:FC<WithButtonTitleProps> = ({onClick, buttonText}) => {
  return (
    <button onClick={onClick}>{buttonText}</button>
  )
}