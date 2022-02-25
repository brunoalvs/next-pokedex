import Image from 'next/image'
import { memo, useEffect } from 'react'
import { PokemonType } from '../../types/pokemon'
import { PokemonTypes } from '../PokemonTypes'

import { Container, Header, Content, Figure, Details } from './styles'

interface PokemonDetailProps {
	pokemon: PokemonType
	isOpen: boolean
	handleClosePokemonDetail?: () => void
}

function PokemonDetail({
	pokemon,
	isOpen,
	handleClosePokemonDetail,
}: PokemonDetailProps) {
	useEffect(() => {
		window.addEventListener('keydown', {
			handleEvent: (e: KeyboardEvent) => {
				if (e.key === 'Escape') {
					handleClosePokemonDetail()
				}
			},
		})
	}, [])

	useEffect(() => {
		if (isOpen) {
			console.log('Pokemon', pokemon)
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
	}, [isOpen])

	return (
		<Container isOpen={isOpen}>
			<Header>
				<button onClick={handleClosePokemonDetail}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path d="M0 0h24v24H0z" fill="none" />
						<path
							d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
							fill="#0a0a0a"
						/>
					</svg>
				</button>
				<p className="number">#{pokemon.id.toString().padStart(3, '0')}</p>
			</Header>
			<Content>
				<Figure>
					<img
						src={pokemon.sprites.other['official-artwork'].front_default}
						alt={pokemon.name}
						width={350}
						height={350}
					/>
				</Figure>
				<Details>
					<h2 className="title">{pokemon.name}</h2>
					<PokemonTypes types={pokemon.types} />
				</Details>
			</Content>
		</Container>
	)
}

export default memo(PokemonDetail)
