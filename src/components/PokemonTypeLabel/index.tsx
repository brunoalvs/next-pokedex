import { Container } from './styles'

interface PokemonTypeLabelProps {
  children: React.ReactNode
  colorName: string
}

export const PokemonTypeLabel = ({ children, colorName }: PokemonTypeLabelProps) => {

  return (
    <Container color={colorName}>
      {children}
    </Container>
  )
}
