import { PokemonType } from '../../types/pokemon'

import PokemonCard from '../PokemonCard'
import { Container } from './styles'

interface ListPokemonsProps {
	pokemons: PokemonType[]
}

export function ListPokemons({ pokemons }: ListPokemonsProps) {
	return (
		<Container>
			{pokemons.map(pokemon => (
				<PokemonCard key={pokemon.id} pokemon={pokemon} />
			))}
		</Container>
	)
}
