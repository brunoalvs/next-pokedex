import React from 'react'
import { PokemonNextApiResponse } from '../types/pokemon'
import { pokemons } from '../../public/pokemons'

import { Home } from '../components/Templates/Home'
import { PokemonList } from '../components/PokemonList'

function HomePage({ pokemons }: { pokemons: PokemonNextApiResponse[] }) {
	const [list, setList] = React.useState(pokemons)
	const [search, setSearch] = React.useState('')

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		setSearch(value)

		const filteredPokemonByName = pokemons.filter(pokemon =>
			pokemon.name.toLowerCase().includes(value.toLowerCase())
		)
		const filteredPokemonById = pokemons.filter(pokemon =>
			pokemon.id.toString().includes(value)
		)

		if (value.length === 0) {
			setList(pokemons)
		} else if (filteredPokemonByName.length > 0) {
			setList(filteredPokemonByName)
		} else if (filteredPokemonById.length > 0) {
			setList(filteredPokemonById)
		}

		console.log(filteredPokemonByName, 'filteredPokemonByName')
		console.log(filteredPokemonById, 'filteredPokemonById')
	}

	return (
		<Home
			search={{
				value: search,
				onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
					handleSearch(event),
			}}
		>
			<PokemonList pokemons={list} />
		</Home>
	)
}

export async function getStaticProps() {
	return {
		props: {
			pokemons,
		},
	}
}

export default HomePage
