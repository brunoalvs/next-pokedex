import { useRouter } from 'next/router'
import { PokemonDetailData } from '../../../types/pokemon'
import { BackButton } from '../../BackButton'

import { Container, Content, Header } from './styles'

export const PokemonDetail = ({ ...pokemon }: PokemonDetailData) => {
	const router = useRouter()

	return (
		<Container bgColor={pokemon.bgColor}>
			<Header>
				<BackButton
					onClick={() => {
						router.push('/')
					}}
				/>
			</Header>
			<Content>
				<figure>
					<img src={pokemon.image} alt={pokemon.name} />
				</figure>
				<article>
					<h1>{pokemon.name}</h1>
					<p>{pokemon.id.toString().padStart(3, '0')}</p>
					<p>
						{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)} is a{' '}
						{pokemon.types.map((type, index) => (
							<span key={index}>
								{pokemon.types.length > 1 && index >= 1 ? '/' : ' '}
								{type.type.name}
							</span>
						))}{' '}
						type Pokemon.
					</p>
					<p>Height: {pokemon.height / 10}m</p>
					<p>Weight: {pokemon.weight / 10}kg</p>
					<h3>Type</h3>
					<ul>
						{pokemon.types.map((type, index) => (
							<li key={index}>
								{type.type.name} - {type.slot}
							</li>
						))}
					</ul>
					<h3>Stats</h3>
					<ul>
						{pokemon.stats.map((stat, index) => (
							<li key={index}>
								{stat.stat.name}: {stat.base_stat}
							</li>
						))}
					</ul>
					<h3>Abilities</h3>
					<ul>
						{pokemon.abilities.map((ability, index) =>
							ability.is_hidden ? null : (
								<li key={index}>{ability.ability.name}</li>
							)
						)}
					</ul>
				</article>
			</Content>
		</Container>
	)
}
