
interface PokemonItemProps {
  name: string;
}

export const PokemonItem = ({ name }:PokemonItemProps) => {
  return (
    <li>{name}</li>
  )
}