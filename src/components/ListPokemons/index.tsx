import { useState } from 'react'
import { PokemonType } from '../../types/pokemon'

import PokemonCard from '../PokemonCard'
import { Container, LoadMoreButton, Wrapper } from './styles'

interface ListPokemonsProps {
	pokemons: PokemonType[]
}

export function ListPokemons({ pokemons }: ListPokemonsProps) {
	const [list, setList] = useState(pokemons.slice(0, 20))

	return (
		<Wrapper>
			<Container>
				{list.map(pokemon => (
					<PokemonCard key={pokemon.id} pokemon={pokemon} />
				))}
			</Container>
			{list.length < pokemons.length && (
				<LoadMoreButton
					onClick={() => {
						setList([...list, ...pokemons.slice(list.length, list.length + 20)])
					}}
				>
					Load More
				</LoadMoreButton>
			)}
		</Wrapper>
	)
}
