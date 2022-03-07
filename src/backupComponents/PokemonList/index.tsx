import { useState } from 'react'
import { PokemonType } from '../../types/pokemon'

import PokemonCard from '../../backupComponents/PokemonCard'
import { Button } from '../../components/Button'

import { Wrapper, Container } from './styles'

interface PokemonListProps {
	pokemons: PokemonType[]
}

export function PokemonList({ pokemons }: PokemonListProps) {
	const [list, setList] = useState(pokemons.slice(0, 20))

	return (
		<Wrapper>
			<Container>
				{list.map(pokemon => (
					<PokemonCard key={pokemon.id} pokemon={pokemon} />
				))}
			</Container>

			{list.length < pokemons.length && (
				<Button
					onClick={() =>
						setList([...list, ...pokemons.slice(list.length, list.length + 20)])
					}
				>
					Load More
				</Button>
			)}
		</Wrapper>
	)
}
