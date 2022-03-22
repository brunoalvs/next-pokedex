import React from 'react'
import { PokemonNextApiResponse } from '../types/pokemon'

import { Home } from '../components/Templates/Home'
import { PokemonList } from '../components/PokemonList'

function HomePage({ pokemons }: { pokemons: PokemonNextApiResponse[] }) {
	return (
		<Home>
			<PokemonList pokemons={pokemons} />
		</Home>
	)
}

export async function getStaticProps() {
	let res = await fetch('http://localhost:3000/api/pokemons')
	let pokemons = await res.json()

	return {
		props: {
			pokemons,
		},
		revalidate: 3 * 24 * 60 * 60, // Revalidating every 3 days
	}
}

export default HomePage
