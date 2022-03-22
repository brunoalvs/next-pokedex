import { PokemonNextApiResponse } from '../types/pokemon'

function Pokemon({ props }) {
	return (
		<div>
			<h2>pokemonData.name'</h2>
			<p>pokemonData.id.toString().padStart(3, '0')'</p>
			<img
				src="/images/4.png"
				alt="{`an illustration of pokemon named ${pokemonData.name}`}"
			/>
		</div>
	)
}

export const getStaticProps = async ({ params }) => {
	// const res = await fetch(`${props.params.url}`)
	// const data = await res.json()

	console.log(params)

	return {
		props: {
			pokemonData: {
				name: 'pikachu',
				id: 25,
			},
		},
	}
}

export const getStaticPaths = async () => {
	let res = await fetch('http://localhost:3000/api/pokemons')
	const pokemons: PokemonNextApiResponse[] = await res.json()

	const paths = pokemons.map(pokemon => {
		return {
			params: {
				id: pokemon.name,
				url: pokemon.url,
			},
		}
	})

	return {
		paths,
		fallback: false,
	}
}

// export const getStaticProps = async ({ params }) => {
// 	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
// 	const data = await res.json()

// 	return {
// 		props: {
// 			pokemonData: data,
// 		},
// 	}
// }

export default Pokemon
