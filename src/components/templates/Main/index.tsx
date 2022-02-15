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
		await fetch(
			`https://pokeapi.co/api/v2/pokemon?offset=${pokemonsList.length}`
		)
			.then(response => response.json())
			.then(data => {
				setPokemonsList([...pokemonsList, ...data.results])
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

	// When user scrolls to the bottom of the page, fetch more data
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (
				window.innerHeight + window.scrollY >=
				document.body.offsetHeight - 500
			) {
				console.log('bottom reached')
				getPokemons()
			}
		})
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
