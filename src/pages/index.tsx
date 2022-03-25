import React from 'react'
import { PokemonNextApiResponse } from '../types/pokemon'
import { pokemons } from '../../public/pokemons'

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
	return {
		props: {
			pokemons,
		},
	}
}

export default HomePage
