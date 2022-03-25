import React from 'react'
import { PokemonNextApiResponse } from '../types/pokemon'
import { pokemons } from '../../public/pokemons'

import { Home } from '../components/Templates/Home'
import { PokemonList } from '../components/PokemonList'

function HomePage({ pokemons }: { pokemons: PokemonNextApiResponse[] }) {
	const [list, setList] = React.useState(pokemons)
	const [search, setSearch] = React.useState('')

	return (
		<Home
			search={{
				value: search,
				onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
					const value = event.target.value

					if (value.length > 0) {
						const filteredList = pokemons.filter(pokemon => {
							return pokemon.name.toLowerCase().includes(value.toLowerCase())
						})

						setSearch(value)
						setList(filteredList)
					} else {
						setSearch('')
						setList(pokemons)
					}
				},
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
