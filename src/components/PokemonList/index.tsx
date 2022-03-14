import Link from 'next/link'

import { PokemonDataResponse } from '../../types/pokemon'
import PokeCard from '../PokeCard'

import { Wrapper, Container } from './styles'

interface PokemonListProps {
	pokemons: PokemonDataResponse[]
}

export function PokemonList({ pokemons }: PokemonListProps) {
	return (
		<Wrapper>
			<Container>
				{pokemons.map((pokemon, index) => (
					<PokeCard key={index} pokemonData={pokemon} index={index} />
				))}
			</Container>
		</Wrapper>
	)
}
