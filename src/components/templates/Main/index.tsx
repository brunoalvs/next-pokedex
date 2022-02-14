import { useEffect, useState } from 'react'
import { PokemonItemList } from '../../blocks/PokemonItemList'

interface PokemonDataResponse {
	name: string
	url: string
}

export const Main = () => {
	const [pokemonsList, setPokemonsList] = useState<PokemonDataResponse[]>([])

	async function getPokemons() {
		await fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
			.then(response => response.json())
			.then(data => {
				setPokemonsList(data.results)
			})
			.catch(error => {
				console.error(error)
			})
	}

	useEffect(() => {
		getPokemons()
	}, [])

	return (
		<div>
			<header>
				<h1>Pokédex</h1>
				<p>
					Search for a Pokémon by name or using its National Pokédex number.
				</p>

				<form action="/search" method="get">
					<input type="text" name="q" placeholder="Search" />
					<button type="submit">Search</button>
				</form>
			</header>
			<section>
				{pokemonsList.map((pokemon, index) => (
					<PokemonItemList key={index} name={pokemon.name} url={pokemon.url} />
				))}
			</section>
		</div>
	)
}
