import { colours } from 'src/helpers/type-colours'
import { Container } from './styles'

interface PokemonTypeLabelProps {
  children: React.ReactNode
  colorName: string
}

export const PokemonTypeLabel = ({ children, colorName }: PokemonTypeLabelProps) => {
  const color = colours[colorName as keyof typeof colours]

  return (
    <Container color={color}>
      {children}
    </Container>
  )
}
