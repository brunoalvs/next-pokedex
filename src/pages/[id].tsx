function Pokemon({ pokemonData }) {
	return (
		<div>
			<h2>{pokemonData.name}</h2>
			<p>{pokemonData.id.toString().padStart(3, '0')}</p>
			<img
				src={pokemonData.sprites.other['official-artwork'].front_default}
				alt={`an illustration of pokemon named ${pokemonData.name}`}
			/>
		</div>
	)
}

export const getStaticPaths = async () => {
	const res = await fetch(
		'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
	)
	const data = await res.json()

	const paths = data.results.map(pokemon => {
		return {
			params: {
				id: pokemon.name,
			},
		}
	})

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps = async ({ params }) => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
	const data = await res.json()

	return {
		props: {
			pokemonData: data,
		},
	}
}

export default Pokemon
