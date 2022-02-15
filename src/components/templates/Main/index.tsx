import { useEffect, useState } from 'react'
import { SearchInput } from '../../blocks/SearchInput'
import { PokemonItemList } from '../../blocks/PokemonItemList'

import { Container } from './styles'

interface PokemonDataResponse {
	name: string
	url: string
}

export const Main = () => {
	const [pokemonsList, setPokemonsList] = useState<PokemonDataResponse[]>([])
	const [searchText, setSearchText] = useState('')

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

	function filterPokemonList(searchText: string) {
		return pokemonsList.filter(pokemon =>
			pokemon.name.toLowerCase().includes(searchText.toLowerCase())
		)
	}

	useEffect(() => {
		getPokemons()
	}, [])

	return (
		<Container>
			<header>
				<h1 className="title">Pokédex</h1>
				<p>
					Search for a Pokémon by name or using its National Pokédex number.
				</p>

				<SearchInput
					onChange={setSearchText}
					onSubmit={() => {
						filterPokemonList(searchText)
					}}
					value={searchText}
					placeholder="Search for a Pokémon"
				/>
			</header>
			<section
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(2, 1fr)',
					gap: '2rem',
				}}
			>
				{pokemonsList.map((pokemon, index) => (
					<PokemonItemList key={index} name={pokemon.name} url={pokemon.url} />
				))}
			</section>
		</Container>
	)
}
