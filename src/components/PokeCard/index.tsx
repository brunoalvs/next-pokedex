// import { useEffect, useState } from 'react'
import Image from 'next/image'
import { memo } from 'react'
import { Pokemon } from 'src/types'

interface PokeCardProps {
  pokemon: Pokemon
}

const PokeCard = memo(({ pokemon }: PokeCardProps) => {

  return (
    <div>
      <p>{`#${pokemon.id?.toString().padStart(3, '0')}`}</p>
      <Image
        data-testid="pokemon-image"
        width={300}
        height={300}
        src={pokemon.sprites?.other?.['official-artwork']?.front_default}
        alt={`${pokemon.name} official artwork`}
      />
      <h3>{pokemon.name}</h3>
    </div>
  )
})

PokeCard.displayName = 'PokeCard'

export { PokeCard }
