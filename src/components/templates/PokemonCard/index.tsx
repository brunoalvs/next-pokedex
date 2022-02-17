import ColorThief from 'colorthief'
import { useEffect, useState, memo } from 'react'
import { default as NextImage } from 'next/image'

import { Pokemon } from '../../../types/pokemon'

function PokemonCard({ ...props }: Pokemon) {
	const [isLoading, setIsLoading] = useState(true)
	const [pokemonBgColor, setPokemonBgColor] = useState<string>()

	const [detailIsOpen, setDetailIsOpen] = useState(false)

	async function getPokemonBgColor() {
		let imagePokemon = props.sprites.other['official-artwork'].front_default

		if (imagePokemon) {
			const colorThief = new ColorThief()
			const img = new Image()

			img.crossOrigin = 'Anonymous'
			img.src = imagePokemon

			img.addEventListener('load', function () {
				const rgb = colorThief.getColor(img)
				setPokemonBgColor(`${rgb[0]},${rgb[1]},${rgb[2]}`)
			})
		}
	}

	useEffect(() => {
		getPokemonBgColor().finally(() => {
			isLoading && setIsLoading(false)
		})
	}, [])

	if (isLoading) {
		return <div>Pokemon Loading...</div>
	}

	return (
		<>
			<div
				style={{
					backgroundColor: `rgba(${pokemonBgColor}, 0.45)`,
				}}
			>
				<NextImage
					width={300}
					height={300}
					layout="responsive"
					src={props.sprites?.other?.['official-artwork'].front_default}
					alt={`An image of ${props.name}`}
				/>
				<h2>{props.name}</h2>
				<p>{props.id.toString().padStart(3, '0') ?? '000'}</p>
			</div>
		</>
	)
}

export default memo(PokemonCard)