import { PokemonType } from '@/types/pokemons'
import { PokemonTypeLabel } from '../PokemonTypeLabel'
import { Container } from './styles'

interface PokemonTypeListProps {
  types: PokemonType[]
}

export const PokemonTypeList = ({ types }: PokemonTypeListProps) => {
  return (
    <Container>
      {types.map((type) => (
        <PokemonTypeLabel key={type.slot} colorName={type.type.name}>
          {type.type.name}
        </PokemonTypeLabel>
      ))}
    </Container>
  )
}
