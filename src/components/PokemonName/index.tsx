import { Container, EnglishName, JapaneseName } from './styles'

interface PokemonNameProps {
  name: string
  jpname: string
}

export const PokemonName = ({ name, jpname }: PokemonNameProps) => {
  return (
    <Container>
      <JapaneseName>{jpname}</JapaneseName>
      <EnglishName>{name}</EnglishName>
    </Container>
  )
}
