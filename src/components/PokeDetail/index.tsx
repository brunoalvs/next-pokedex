import { PokemonStat, PokemonType } from '@/types/pokemons'
import Image from 'next/image'
import { PokemonName } from '../PokemonName'
import { PokemonTypeLabel } from '../PokemonTypeLabel'
import { PokemonTypeList } from '../PokemonTypeList'
import { Container, Figure, PokeId } from './styles'

interface PokeDetailProps {
  id: number
  name: string
  jpname: string
  sprite: string
  height: number
  weight: number
  flavorText: string
  stats: PokemonStat[]
  types: PokemonType[]
}

export const PokeDetail = ({ id, name, jpname, sprite, types }: PokeDetailProps) => {
  return (
    <Container>
      <PokeId>{id.toString().padStart(4, '#00')}</PokeId>
      <Figure>
        <Image
          width={300}
          height={300}
          src={sprite}
          alt={`${name} sprite`}
          layout='responsive'
        />
      </Figure>
      <PokemonName name={name} jpname={jpname} />

      <PokemonTypeList types={types} />
    </Container>
  )
}
