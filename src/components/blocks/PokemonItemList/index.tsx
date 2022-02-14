type PokemonItemListProps = {
	pokemon: {
		id: number
		name: string
	}
}
export const PokemonItemList = ({ pokemon }: PokemonItemListProps) => {
	return (
		<div>
			<h2>{pokemon.name}</h2>
			<p>{pokemon.id}</p>
		</div>
	)
}
