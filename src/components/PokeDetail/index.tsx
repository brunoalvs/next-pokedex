import { PokemonStat, PokemonType } from '@/types/pokemons'
import { decimetresToMeters, hectogramToKg } from '@/utils/SizeUtils'
import Image from 'next/image'
import { PokemonName } from '../PokemonName'
import { PokemonSize } from '../PokemonSize'
import { PokemonTypeList } from '../PokemonTypeList'
import { Container, ContentColumn, Description, Figure, PokeId, Sizes } from './styles'

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

export const PokeDetail = ({ ...pokemon }: PokeDetailProps) => {
  return (
    <Container>
      <ContentColumn>
        <PokeId>{pokemon.id.toString().padStart(4, '#00')}</PokeId>
        <Figure>
          <Image
            width={300}
            height={300}
            src={pokemon.sprite}
            alt={`${name} sprite`}
            layout='intrinsic'
            objectFit='contain'
          />
        </Figure>
        <Sizes>
          <PokemonSize type='Height' value={decimetresToMeters(pokemon.height)} />
          <PokemonSize type='Weight' value={hectogramToKg(pokemon.weight)} />
        </Sizes>
      </ContentColumn>
      <ContentColumn>
        <PokemonName name={pokemon.name} jpname={pokemon.jpname} />
        <PokemonTypeList types={pokemon.types} />
        <Description>
          {pokemon.flavorText}
        </Description>
      </ContentColumn>
    </Container>
  )
}
