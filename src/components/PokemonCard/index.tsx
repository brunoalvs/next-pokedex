import { useEffect, useState, memo } from 'react'
import { default as NextImage } from 'next/image'
import ColorThief from 'colorthief'

import { PokemonType } from '../../types/pokemon'
import { PokemonCardShimmer } from '../PokemonCardShimmer'
import { Container } from './styles'

function PokemonCard({ id, name, sprites, ...props }: PokemonType) {
	const [isLoading, setIsLoading] = useState(true)
	const [pokemonBgColor, setPokemonBgColor] = useState<string>()
	const [pokemonImage] = useState<string>(
		sprites.other['official-artwork'].front_default
	)

	async function getPokemonBgColor() {
		return new Promise((resolve: (value: string) => void, reject) => {
			const image = new Image()
			image.crossOrigin = 'Anonymous'
			image.src = pokemonImage
			image.onload = () => {
				const colorThief = new ColorThief()
				const rgb = colorThief.getColor(image)
				let color = `${rgb[0]},${rgb[1]},${rgb[2]}`
				setPokemonBgColor(rgb)
				resolve(color)
			}
			image.onerror = () => {
				reject(new Error('Could not get image'))
			}
		})
	}

	useEffect(() => {
		getPokemonBgColor().then(() => {
			setIsLoading(false)
		})
	}, [])

	if (isLoading) {
		return <PokemonCardShimmer />
	}

	return (
		<>
			<Container
				style={{
					backgroundColor: `rgba(${pokemonBgColor}, 0.45)`,
				}}
			>
				<img
					src={pokemonImage}
					alt={`An image of ${name}`}
					style={{
						width: '100%',
					}}
				/>
				<h2>{name}</h2>
				<p>{id.toString().padStart(3, '0')}</p>
			</Container>
		</>
	)
}

export default memo(PokemonCard)
