import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { pokemons } from '../../public/pokemons'
import { PokemonDetail } from '../components/Templates/PokemonDetail'

import { PokemonDetailData } from '../types/pokemon'

const Pokemon = ({ ...pokemon }: PokemonDetailData) => {
	const router = useRouter()
	const { name } = router.query

	useEffect(() => {
		console.log(pokemon)
	}, [pokemon])

	return <PokemonDetail {...pokemon} />
}

export async function getStaticPaths() {
	const paths = pokemons.map(pokemon => ({
		params: {
			name: pokemon.name,
		},
	}))

	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
	const data = await res.json()

	const pokemonData = pokemons.filter(
		pokemon => pokemon.name === params.name
	)[0]

	const pokemon = {
		...pokemonData,
		...data,
	}

	return {
		props: {
			...pokemon,
		},
	}
}

export default Pokemon
