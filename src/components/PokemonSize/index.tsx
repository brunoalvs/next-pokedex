import { Container, Type, Value } from './styles'

export interface PokemonSizeProps {
  type: string
  value: string
}

export const PokemonSize = ({ type, value }: PokemonSizeProps) => {
  return (
    <Container>
      <Type>{type}</Type>
      <Value>{value}</Value>
    </Container>
  )
}
