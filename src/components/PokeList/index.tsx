import { Pokemon } from '@/types/pokemons'
import PokeCard from '../PokeCard'

interface PokeListProps {
  pokemons: Pokemon[]
}
export const PokeList: React.FC<PokeListProps> = ({
  pokemons,
}: PokeListProps) => {
  return (
    <>
      {pokemons.map((pokemon) => (
        <PokeCard
          key={pokemon.id}
          pokemon={pokemon}
        />
      ))}
    </>
  )
}
