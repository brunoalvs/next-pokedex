import ColorThief from 'colorthief'
import { useEffect, useState, memo } from 'react'
import { default as NextImage } from 'next/image'

import { PokemonType } from '../../types/pokemon'
import { Container, SkeletonBox, Content } from './styles'

function PokemonCard({ ...props }: PokemonType) {
	const [isLoading, setIsLoading] = useState(true)
	const [pokemonBgColor, setPokemonBgColor] = useState<string>()
	const [pokemonImage] = useState<string>(
		props.sprites.other['official-artwork'].front_default
	)

	const [cardIsOpen, setCardIsOpen] = useState(false)

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
		return <SkeletonBox />
	}

	return (
		<>
			<Container
				cardIsOpen={cardIsOpen}
				onClick={() => {
					window.alert('OPEN')
					setCardIsOpen(true)
				}}
				style={{
					backgroundColor: `rgba(${pokemonBgColor}, 0.45)`,
				}}
			>
				<figure
					style={{
						width: '100%',
						borderRadius: '5px',
						overflow: 'hidden',
						border: '1px dashed #f30',
					}}
				>
					<NextImage
						width={300}
						height={300}
						src={pokemonImage}
						alt={`An image of ${props.name}`}
						layout="responsive"
						priority={props.id < 9 ? true : false}
						className="pokemon-image"
					/>
				</figure>
				<Content>
					<h2>{props.name}</h2>
					<p>{props.id.toString().padStart(3, '0') ?? '000'}</p>
				</Content>
			</Container>
		</>
	)
}

export default memo(PokemonCard)
