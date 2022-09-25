import { PokemonStat, PokemonType } from '@/types/pokemons'
import { PokemonName } from '../PokemonName'
import { Container } from './styles'

interface PokeDetailProps {
  name: string
  jpname: string
  height: number
  weight: number
  flavorText: string
  stats: PokemonStat[]
  types: PokemonType[]
}

export const PokeDetail = ({ name, jpname }: PokeDetailProps) => {
  return (
    <Container>
      <PokemonName name={name} jpname={jpname} />
    </Container>
  )
}
