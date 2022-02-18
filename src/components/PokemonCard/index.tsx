import ColorThief from 'colorthief'
import { useEffect, useState, memo } from 'react'
import { default as NextImage } from 'next/image'

import { Pokemon } from '../../types/pokemon'

import { Container, SkeletonBox } from './styles'

function PokemonCard({ ...props }: Pokemon) {
	const [isLoading, setIsLoading] = useState(true)
	const [pokemonBgColor, setPokemonBgColor] = useState<string>()
	const [pokemonImage] = useState<string>(
		props.sprites.other['official-artwork'].front_default
	)

	const [detailIsOpen, setDetailIsOpen] = useState(false)

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
				console.log('resolvehere!')
				resolve(color)
			}
			image.onerror = () => {
				reject(new Error('Could not get image'))
			}
		})

		// let imagePokemon = props.sprites.other['official-artwork'].front_default

		// if (imagePokemon) {
		// 	const colorThief = new ColorThief()
		// 	const img = new Image()

		// 	img.crossOrigin = 'Anonymous'
		// 	img.src = imagePokemon

		// 	img.addEventListener('load', function () {
		// 		const rgb = colorThief.getColor(img)
		// 		setPokemonBgColor(`${rgb[0]},${rgb[1]},${rgb[2]}`)
		// 	})
		// }
	}

	useEffect(() => {
		console.log('🔥')
		getPokemonBgColor().then(() => {
			setIsLoading(false)
			console.log('🔥')
		})
		// .then(() => {
		// 	isLoading && setIsLoading(false)
		// 	console.log('loading end here!')
		// })
	}, [])

	if (isLoading) {
		return (
			<div>
				<SkeletonBox />
			</div>
		)
	}

	return (
		<>
			<Container
				style={{
					backgroundColor: `rgba(${pokemonBgColor}, 0.45)`,
				}}
			>
				<NextImage
					width={300}
					height={300}
					src={pokemonImage}
					alt={`An image of ${props.name}`}
					layout="responsive"
					priority={props.id < 6 ? true : false}
					className="pokemon-image"
				/>
				<div className="pokemon-info">
					<h2>{props.name}</h2>
					<p>{props.id.toString().padStart(3, '0') ?? '000'}</p>
				</div>
			</Container>
		</>
	)
}

export default memo(PokemonCard)
