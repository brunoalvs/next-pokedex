import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { PokemonDataResponse } from '../types/pokemon'
import { Home } from '../components/Templates/Home'
import { PokemonList } from '../components/PokemonList'

function HomePage({ pokemonsData }: { pokemonsData: PokemonDataResponse[] }) {
	const [pokemons, setPokemons] = useState(pokemonsData)

	return (
		<Home>
			<PokemonList pokemons={pokemons} />
		</Home>
	)
}

export async function getStaticProps() {
	let res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
	let data = await res.json()

	return {
		props: {
			pokemonsData: data.results,
		},
		revalidate: 3 * 24 * 60 * 60, // Revalidating every 3 days
	}
}

export default HomePage
