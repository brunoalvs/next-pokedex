import { GetStaticProps } from 'next'
import React, { useCallback, useEffect, useState } from 'react'

import { Pokemon, PokemonDataResponse } from '../types/pokemon'
import { Layout } from '../components/templates/Layout'
import { ListPokemons } from '../components/ListPokemons'
import { PokeBallLoader } from '../components/PokeballLoader'

interface HomeProps {
	pokemonsData: PokemonDataResponse[]
}

export default function Home({ pokemonsData }: HomeProps) {
	const [isLoading, setIsLoading] = useState(true)
	const [pokemons, setPokemons] = useState<Pokemon[]>([])

	const getPokemonData = useCallback(async () => {
		const pokemonPromises = pokemonsData.map(async pokemon => {
			const pokemonData = await fetch(pokemon.url)
				.then(response => response.json())
				.catch(error => {
					console.error(error)
				})

			return pokemonData
		})

		const pokemonData = await Promise.all(pokemonPromises)

		setPokemons(pokemonData)
	}, [pokemonsData])

	useEffect(() => {
		getPokemonData().then(() => {
			setIsLoading(false)
		})
	}, [])

	if (isLoading) {
		return (
			<Layout>
				<PokeBallLoader />
			</Layout>
		)
	}

	return (
		<>
			<Layout>
				<ListPokemons pokemons={pokemons} />
			</Layout>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch(
		'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
	)
	const data = await res.json()

	const pokemonsData = data.results

	return {
		props: {
			pokemonsData,
		},
		// revalidate: 60 * 60 * 24 * 30 // 30 days
	}
}
