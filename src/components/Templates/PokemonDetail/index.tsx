import { PokemonDetailData } from '../../../types/pokemon'

export const PokemonDetail = ({ ...pokemon }: PokemonDetailData) => {
	return (
		<div>
			<h1>{pokemon.name}</h1>
		</div>
	)
}
