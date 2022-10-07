import { Container } from './styles'

export interface PokemonTypeLabelProps {
  colorName?: string
}

export const PokemonTypeLabel = ({ colorName = 'normal' }: PokemonTypeLabelProps) => {

  return (
    <Container color={colorName}>
      {colorName}
    </Container>
  )
}
