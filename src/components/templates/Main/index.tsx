import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

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
			<section>
				<InfiniteScroll
					className="infinite-scroll"
					dataLength={pokemonsList.length}
					next={getPokemons}
					hasMore={true}
					loader={<h4>Loading...</h4>}
					endMessage={
						<p style={{ textAlign: 'center' }}>
							<b>Yay! You have seen it all</b>
						</p>
					}
				>
					{pokemonsList.map((pokemon, index) => (
						<PokemonItemList
							key={index}
							name={pokemon.name}
							url={pokemon.url}
						/>
					))}
				</InfiniteScroll>
			</section>
		</Container>
	)
}
