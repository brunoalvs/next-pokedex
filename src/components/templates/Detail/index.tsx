import Image from 'next/image'
import { useEffect } from 'react'
import { colours } from '../../../services/type-colours'
import { Container, Header, Content, TypeLabel } from './styles'

type DetailPageProps = {
	isOpen: boolean
	onClose: () => void
	pokemon: {
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
}

export const Detail = ({ isOpen, onClose, pokemon }: DetailPageProps) => {
	useEffect(() => {
		window.addEventListener('keydown', {
			handleEvent: (e: KeyboardEvent) => {
				if (e.key === 'Escape') {
					onClose()
				}
			},
		})
	}, [])

	return (
		<Container isOpen={isOpen}>
			<Header>
				<button
					onClick={() => {
						onClose()
					}}
				>
					Back / Close
				</button>
				<section className="pokemon-detail">
					<h2>{pokemon.name}</h2>
					<p>{pokemon.id.toString().padStart(3, '0')}</p>
				</section>
			</Header>
			<Content>
				<figure>
					<Image
						src={pokemon.sprites.other['official-artwork'].front_default}
						alt={pokemon.name}
						width={300}
						height={300}
						layout="responsive"
					/>
				</figure>
				<section className="pokemon-types">
					{pokemon.types.map(type => (
						<TypeLabel key={type.slot} typePokemon={colours[type.type.name]}>
							{type.type.name}
						</TypeLabel>
					))}
				</section>

				<div className="stats">
					{pokemon.stats.map(stat => (
						<div key={stat.stat.name} className="stat">
							<p>{stat.stat.name}</p>
							<p>{stat.base_stat}</p>
						</div>
					))}
				</div>
			</Content>
		</Container>
	)
}
