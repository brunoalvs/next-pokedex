import React, { useEffect } from 'react'
import Link from 'next/link'

import { PokemonDataResponse } from '../types/pokemon'
import { Layout } from '../components/Layout'

function HomePage({ pokemonsData }: { pokemonsData: PokemonDataResponse[] }) {
	return (
		<Layout>
			{pokemonsData.map((pokemon, index) => (
				<Link key={index} href={pokemon.name}>
					<a>
						<img
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
								index + 1
							}.png`}
							alt={`${pokemon.name} illustration`}
						/>
						<p>{pokemon.name}</p>
						<p>{index.toString().padStart(3, '0')}</p>
					</a>
				</Link>
			))}
		</Layout>
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
