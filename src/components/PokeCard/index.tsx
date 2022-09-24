import { memo } from 'react'
import Image from 'next/image'
import { Pokemon } from '@/types/pokemons'
import { Container, Cover } from './styles'
import Link from 'next/link'

interface PokeCardProps {
  pokemon: Pokemon
}

const PokeCard: React.FC<PokeCardProps> = ({ pokemon }: PokeCardProps) => {
  return (
    <Link
      href={`/pokemon/${pokemon.name}`}
    >
      <Container data-testid={`pokecard-${pokemon.id}`}>
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
        <h3>{pokemon.name}</h3>
        <p>{`#${pokemon.id?.toString().padStart(3, '0')}`}</p>
      </Container>
    </Link>
  )
}

PokeCard.displayName = 'PokeCard'

export default memo(PokeCard)
