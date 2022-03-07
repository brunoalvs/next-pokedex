import { useEffect, useState, memo } from 'react'
import { default as NextImage } from 'next/image'
import ColorThief from 'colorthief'

import { PokemonType } from '../../types/pokemon'
// import { PokemonCardShimmer } from '../PokemonCardShimmer'
import { Container } from './styles'
import PokemonDetail from '../../componentsOLD/PokemonDetail'

interface PokemonCardProps {
	pokemon: PokemonType
}

function PokemonCard({ pokemon, ...props }: PokemonCardProps) {
	const [isLoading, setIsLoading] = useState(true)
	const [pokemonBgColor, setPokemonBgColor] = useState<string>()
	const [pokemonImage] = useState<string>(
		pokemon.sprites.other['official-artwork'].front_default
	)
	const [pokemonDetailIsOpen, setPokemonDetailIsOpen] = useState(false)

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

	const handleOpenPokemonDetail = () => {
		setPokemonDetailIsOpen(true)
	}

	const handleClosePokemonDetail = () => {
		setPokemonDetailIsOpen(false)
	}

	useEffect(() => {
		getPokemonBgColor().then(() => {
			setIsLoading(false)
		})
	}, [getPokemonBgColor])

	if (isLoading) {
		return <p>Loading...</p>
		// return <PokemonCardShimmer />
	}

	return (
		<>
			<PokemonDetail
				pokemon={pokemon}
				isOpen={pokemonDetailIsOpen}
				handleClosePokemonDetail={handleClosePokemonDetail}
			/>
			<Container
				onClick={() => handleOpenPokemonDetail()}
				style={{
					backgroundColor: `rgba(${pokemonBgColor}, 0.45)`,
				}}
			>
				<img
					id="pokemon-card"
					src={pokemonImage}
					alt={`An image of ${name}`}
					style={{
						width: '100%',
					}}
				/>
				<h2>{pokemon.name}</h2>
				<p>{pokemon.id.toString().padStart(3, '0')}</p>
			</Container>
		</>
	)
}

export default memo(PokemonCard)
