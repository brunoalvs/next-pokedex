import { useEffect, useState } from 'react'
import { Container } from './styles'

type PokemonItemListProps = {
	name: string
	url: string
}

export const PokemonItemList = ({ name, url }: PokemonItemListProps) => {
	const [isLoading, setIsLoading] = useState(true)
	const [pokemon, setPokemon] = useState<any>({})

	async function getPokemonData() {
		await fetch(url)
			.then(response => response.json())
			.then(data => {
				setPokemon(data)
				return data
			})
			.catch(error => {
				console.error(error)
			})
	}

	useEffect(() => {
		getPokemonData().then(() => setIsLoading(false))
	}, [])

	if (isLoading) {
		return <div>Loading...</div>
	}

	return (
		<Container>
			<img
				src={pokemon.sprites.other['official-artwork'].front_default}
				alt={`An image of ${pokemon.name}`}
			/>
			<h2>{name}</h2>
			<p>{pokemon.id.toString().padStart(3, '0')}</p>
		</Container>
	)
}
