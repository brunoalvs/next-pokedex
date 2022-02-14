type PokemonItemListProps = {
	name: string
	url: string
}

export const PokemonItemList = ({ name, url }: PokemonItemListProps) => {
	return (
		<div>
			<h2>{name}</h2>
			<p>{url}</p>
		</div>
	)
}
