import { useEffect, useState } from 'react'
import { PokemonItemList } from '../../blocks/PokemonItemList'

export const Main = () => {
	const [pokemonList, setPokemonList] = useState([])

	const getPokemon = async () => {
		await fetch('https://pokeapi.co/api/v2/pokemon/')
			.then(response => response.json())
			.then(data => data.results)
			.then(data => setPokemonList(data))
		// now add image to each pokemon
	}

	useEffect(() => {
		getPokemon()
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
				{pokemonList.map((pokemon, index) => (
					<PokemonItemList
						key={index}
						pokemon={{
							id: index,
							name: pokemon.name,
						}}
					/>
				))}
			</section>
		</div>
	)
}
