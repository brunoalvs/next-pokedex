import Link from 'next/link'
import { useEffect } from 'react'

import { PokemonNextApiResponse } from '../../types/pokemon'
import PokeCard from '../PokeCard'

import { Wrapper, Container } from './styles'

interface PokemonListProps {
	pokemons: PokemonNextApiResponse[]
}

export function PokemonList({ pokemons }: PokemonListProps) {
	useEffect(() => {
		console.log(pokemons[0])
	}, [])

	return (
		<Wrapper>
			<Container>
				{pokemons.map(pokemon => (
					<PokeCard key={pokemon.id} pokemon={pokemon} />
				))}
			</Container>
		</Wrapper>
	)
}
