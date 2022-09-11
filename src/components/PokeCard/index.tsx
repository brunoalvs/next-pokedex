import { memo } from 'react'
import Image from 'next/image'
import { Pokemon } from '@/types/pokemons'
import { Container } from './styles'

interface PokeCardProps {
  pokemon: Pokemon
}

const PokeCard = ({ pokemon }: PokeCardProps) => {
  return (
    <Container data-testid={`pokecard-${pokemon.id}`}>
      <p>{`#${pokemon.id?.toString().padStart(3, '0')}`}</p>
      <figure
        style={{
          width: '300px',
        }}
      >
        <Image
          data-testid={`pokemon-image-${pokemon.id}`}
          width={300}
          height={300}
          src={pokemon.sprites?.other?.['official-artwork']?.front_default}
          alt={`${pokemon.name} official artwork`}
        />
      </figure>
      <h3>{pokemon.name}</h3>
    </Container>
  )
}

PokeCard.displayName = 'PokeCard'

export default memo(PokeCard)
