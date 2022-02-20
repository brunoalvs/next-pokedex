import { memo, useEffect } from 'react'
import { PokemonType } from '../../types/pokemon'

import { Container, Header, Figure, Content } from './styles'

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
			console.log('open')
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
				<h2 className="title">{pokemon.name}</h2>
				<p>{pokemon.id.toString().padStart(3, '0')}</p>
			</Header>
			<Figure>
				<img
					src={pokemon.sprites.other['official-artwork'].front_default}
					alt={pokemon.name}
				/>
			</Figure>
			<Content></Content>
		</Container>
	)
}

export default memo(PokemonDetail)
