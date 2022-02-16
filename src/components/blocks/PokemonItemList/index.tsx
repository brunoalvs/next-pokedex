import { useEffect, useState } from 'react'
import { Detail } from '../../templates/Detail'
import ColorThief from 'colorthief'

import { Container } from './styles'

type PokemonItemListProps = {
	name: string
	url: string
}

interface Pokemon {
	id: number
	name: string
	sprites: {
		other: {
			['official-artwork']: {
				front_default: string
			}
		}
	}
	stats: [
		{
			base_stat: number
			effort: number
			stat: {
				name: string
				url: string
			}
		}
	]
	types: [
		{
			slot: number
			type: {
				name: string
			}
		}
	]
}

export const PokemonItemList = ({ name, url }: PokemonItemListProps) => {
	const [isLoading, setIsLoading] = useState(true)
	const [pokemon, setPokemon] = useState<Pokemon>()
	const [pokemonBgColor, setPokemonBgColor] = useState<string>()

	const [detailIsOpen, setDetailIsOpen] = useState(false)

	async function getPokemonData() {
		await fetch(url)
			.then(response => response.json())
			.then(data => {
				setPokemon(data)
				return data
			})
			// .then(() => {
			// 	const colorThief = new ColorThief()
			// 	const img = new Image()

			// 	if (img.complete) {
			// 		colorThief.getColor(img)
			// 	} else {
			// 		img.addEventListener('load', function () {
			// 			console.log('color', colorThief.getColor(img))
			// 			colorThief.getColor(img)

			// 			const rgb = colorThief.getColor(img)
			// 			const hex = rgb
			// 				.map(x => {
			// 					return x.toString(16).padStart(2, '0')
			// 				})
			// 				.join('')

			// 			setPokemonBgColor(`#${hex}`)
			// 		})
			// 	}

			// 	img.crossOrigin = 'Anonymous'
			// 	img.src = pokemon?.sprites?.other?.['official-artwork'].front_default
			// })
			.catch(error => {
				console.error(error)
			})
			.finally(() => {})
	}

	useEffect(() => {
		getPokemonData().then(() => setIsLoading(false))
	}, [])

	useEffect(() => {
		const imagePokemon =
			pokemon?.sprites?.other?.['official-artwork'].front_default

		if (imagePokemon) {
			const colorThief = new ColorThief()
			const img = new Image()

			img.crossOrigin = 'Anonymous'
			img.src = imagePokemon

			img.addEventListener('load', function () {
				const rgb = colorThief.getColor(img)
				const hex = rgb
					.map(x => {
						return x.toString(16).padStart(2, '0')
					})
					.join('')

				setPokemonBgColor(`${rgb[0]},${rgb[1]},${rgb[2]}`)
			})
		}
	}, [pokemon])

	useEffect(() => {
		if (detailIsOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
	}, [detailIsOpen])

	if (isLoading) {
		return <div>Loading...</div>
	}

	return (
		<>
			<Container
				bgColor={pokemonBgColor}
				onClick={() => {
					setDetailIsOpen(true)
				}}
			>
				<img
					src={pokemon.sprites.other['official-artwork'].front_default}
					alt={`An image of ${pokemon.name}`}
				/>
				<h2>{name}</h2>
				<p>{pokemon.id.toString().padStart(3, '0')}</p>
			</Container>
			<Detail
				pokemon={pokemon}
				isOpen={detailIsOpen}
				onClose={() => setDetailIsOpen(false)}
			/>
		</>
	)
}
