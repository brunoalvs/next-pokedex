import { useEffect, useState } from 'react'
import { default as NextImage } from 'next/image'
import Link from 'next/link'
import ColorThief from 'colorthief'

import { PokemonDataResponse } from '../../types/pokemon'
import { Container } from './styles'

interface PokeCardProps {
	pokemonData: PokemonDataResponse
	index: number
}

function PokeCard({ pokemonData, ...props }: PokeCardProps) {
	const [bgColor, setBgColor] = useState<string>()
	const [pokemonImage] = useState<string>(
		`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
			props.index + 1
		}.png`
	)

	async function getBgColor() {
		return new Promise((resolve: (value: string) => void, reject) => {
			const image = new Image()
			image.crossOrigin = 'Anonymous'
			image.src = pokemonImage
			image.onload = () => {
				const colorThief = new ColorThief()
				const rgb = colorThief.getColor(image)
				let color = `${rgb[0]},${rgb[1]},${rgb[2]}`
				setBgColor(rgb)
				resolve(color)
			}

			image.onerror = () => {
				reject(new Error('Could not get image'))
			}
		})
	}

	useEffect(() => {
		getBgColor()
	}, [])

	return (
		<Link href={pokemonData.name}>
			<Container
				style={{
					backgroundColor: `rgba(${bgColor}, 0.45)`,
				}}
			>
				<p className="pokemon-id">
					{`${props.index + 1}`.toString().padStart(3, '0')}
				</p>
				<NextImage
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
						props.index + 1
					}.png`}
					alt=""
					width={300}
					height={300}
					layout="responsive"
					priority={props.index + 1 > 3 ? false : true}
				/>
				<p className="pokemon-name">{pokemonData.name}</p>
			</Container>
		</Link>
	)
}

export default PokeCard
