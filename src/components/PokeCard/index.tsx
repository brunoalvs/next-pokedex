import { memo } from 'react'
import Image from 'next/legacy/image';
import { Pokemon } from '@/types/pokemons'

import { Container, Cover, Title, Text } from './styles'

interface PokeCardProps {
  pokemon: Pokemon
}

const PokeCard: React.FC<PokeCardProps> = ({ pokemon }: PokeCardProps) => {
  return (
    <Container data-testid={`pokecard-${pokemon.id}`} href={`/pokemon/${pokemon.name}`}>
      <Cover>
        <Image
          data-testid={`pokemon-image-${pokemon.id}`}
          width={300}
          height={300}
          layout='responsive'
          src={pokemon.sprites?.other?.['official-artwork']?.front_default}
          alt={`A ${pokemon.name} official artwork`}
        />
      </Cover>
      <Title>{pokemon.name}</Title>
      <Text>{`#${pokemon.id?.toString().padStart(3, '0')}`}</Text>
    </Container>
  )
}

PokeCard.displayName = 'PokeCard'

export default memo(PokeCard)
