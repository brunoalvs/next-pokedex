import React, { useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div``

function HomePage({ pokemonsData }) {
	const [title, setTitle] = React.useState('Home')

	useEffect(() => {
		console.log(pokemonsData)
	}, [pokemonsData])

	return (
		<Container>
			<h2>{title}</h2>
			{pokemonsData.map((pokemon, index) => (
				<React.Fragment key={index}>
					<img
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`}
						alt={`${pokemon.name} illustration`}
					/>
					<p>{pokemon.name}</p>
					<p>{index.toString().padStart(3, '0')}</p>
				</React.Fragment>
			))}
		</Container>
	)
}

export async function getStaticProps() {
	// Call an external API endpoint to get list pokemons.
	let res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')

	// Get the response body (the article text)
	let data = await res.json()

	return {
		props: {
			pokemonsData: data.results,
		},
	}
}

export default HomePage
