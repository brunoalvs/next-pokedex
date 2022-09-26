import { PokemonStat, PokemonType } from '@/types/pokemons'
import { decimetresToMeters, hectogramToKg } from '@/utils/SizeUtils'
import Image from 'next/image'
import { PokemonName } from '../PokemonName'
import { PokemonSize } from '../PokemonSize'
import { PokemonTypeList } from '../PokemonTypeList'
import { Container, ContentColumn, Figure, PokeId, Sizes } from './styles'

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

export const PokeDetail = ({ id, name, jpname, sprite, types, height, weight }: PokeDetailProps) => {
  return (
    <Container>
      <ContentColumn>
        <PokeId>{id.toString().padStart(4, '#00')}</PokeId>
        <Figure>
          <Image
            width={300}
            height={300}
            src={sprite}
            alt={`${name} sprite`}
            layout='intrinsic'
            objectFit='contain'
          />
        </Figure>
        <Sizes>
          <PokemonSize type='Height' value={decimetresToMeters(height)} />
          <PokemonSize type='Weight' value={hectogramToKg(weight)} />
        </Sizes>
      </ContentColumn>
      <ContentColumn>
        <PokemonName name={name} jpname={jpname} />
        <PokemonTypeList types={types} />
      </ContentColumn>
    </Container>
  )
}
