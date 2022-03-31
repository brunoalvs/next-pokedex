import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { pokemons } from '../../public/pokemons'

type PokemonPageProps = {
	pokemon: {
		id: number
		name: string
		image: string
		height: number
		weight: number
		bgColor: string
		stats: {
			base_stat: number
			effort: number
			stat: {
				name: string
			}
		}[]
		types: {
			slot: number
			type: {
				name: string
			}
		}[]
		abilities: {
			is_hidden: boolean
			ability: {
				name: string
			}
		}[]
	}
}

const Pokemon = ({ pokemon }: PokemonPageProps) => {
	const router = useRouter()
	const { name } = router.query

	useEffect(() => {
		console.table([pokemon])
	}, [pokemon])

	return (
		<div
			style={{
				backgroundColor: `${pokemon.bgColor.replace(')', ', 0.45)')}`,
			}}
		>
			<header>
				<button onClick={() => router.push('/')}>Back</button>
			</header>
			<section>
				<figure>
					<img src={pokemon.image} alt={pokemon.name} />
				</figure>
				<article>
					<h1>{pokemon.name}</h1>
					<p>{pokemon.id.toString().padStart(3, '0')}</p>
					<p>
						{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)} is a{' '}
						{pokemon.types.map((type, index) => (
							<span key={index}>
								{pokemon.types.length > 1 && index >= 1 ? '/' : ' '}
								{type.type.name}
							</span>
						))}{' '}
						type Pokemon.
					</p>
					<p>Height: {pokemon.height / 10}m</p>
					<p>Weight: {pokemon.weight / 10}kg</p>
					<h3>Type</h3>
					<ul>
						{pokemon.types.map((type, index) => (
							<li key={index}>
								{type.type.name} - {type.slot}
							</li>
						))}
					</ul>
					<h3>Stats</h3>
					<ul>
						{pokemon.stats.map((stat, index) => (
							<li key={index}>
								{stat.stat.name}: {stat.base_stat}
							</li>
						))}
					</ul>
					<h3>Abilities</h3>
					<ul>
						{pokemon.abilities.map((ability, index) =>
							ability.is_hidden ? null : (
								<li key={index}>{ability.ability.name}</li>
							)
						)}
					</ul>
				</article>
			</section>
		</div>
	)
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
	const pokemon = await res.json()

	const pokemonData = pokemons.filter(
		pokemon => pokemon.name === params.name
	)[0]
	const data = {
		...pokemonData,
		...pokemon,
	}

	return {
		props: {
			pokemon: data,
		},
	}
}

export default Pokemon
