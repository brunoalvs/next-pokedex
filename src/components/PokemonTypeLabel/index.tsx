import { Container } from './styles'

interface PokemonTypeLabelProps {
  children: React.ReactNode
}

export const PokemonTypeLabel = ({ children }: PokemonTypeLabelProps) => {
  return (
    <Container>
      {children}
    </Container>
  )
}
