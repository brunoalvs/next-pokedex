import { GetStaticProps } from 'next'
import React, { useCallback, useEffect, useState } from 'react'
import { Layout } from '../components/templates/Layout'
import PokemonCard from '../components/templates/PokemonCard'
import { Pokemon, PokemonDataResponse } from '../types/pokemon'

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

	useEffect(() => {
		if (pokemons.length <= 0) {
			console.error('No pokemons found')
			return
		}
		console.log('pokemonsData', pokemons)
	}, [pokemons])

	if (isLoading) {
		return (
			<Layout>
				<p>Loading...</p>
			</Layout>
		)
	}

	return (
		<>
			<Layout>
				<h1>Home</h1>
				{pokemons.map((pokemon, index) => (
					<PokemonCard key={index} {...pokemon} />
				))}
			</Layout>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const response = await fetch(
		'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
	)
	const data = await response.json()

	const pokemonsData = data.results

	return {
		props: {
			pokemonsData,
		},
		// revalidate: 60 * 60 * 24 * 30 // 30 days
	}
}
