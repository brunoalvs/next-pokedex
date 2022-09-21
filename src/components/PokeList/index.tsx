import { Pokemon } from '@/types/pokemons'
import PokeCard from '../PokeCard'

import { Container } from './styles'

interface PokeListProps {
  pokemons: Pokemon[]
}
export const PokeList: React.FC<PokeListProps> = ({
  pokemons,
}: PokeListProps) => {
  return (
    <Container data-testid='poke-list'>
      {pokemons.map((pokemon) => (
        <PokeCard
          key={pokemon.id}
          pokemon={pokemon}
        />
      ))}
    </Container>
  )
}
