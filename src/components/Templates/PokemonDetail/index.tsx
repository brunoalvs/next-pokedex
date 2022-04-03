import { useRouter } from 'next/router'
import { PokemonDetailData } from '../../../types/pokemon'
import { BackButton } from '../../BackButton'

import { Container, Content, Header } from './styles'
import { StatsList } from '../../StatsList'
import { LabelPokemonType } from '../../LabelPokemonType'

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
				<div className="details">
					<h1 className="title">{pokemon.name}</h1>
					<p className="pokemon-id">{pokemon.id.toString().padStart(3, '0')}</p>
				</div>
			</Header>
			<Content bgColor={pokemon.bgColor}>
				<figure>
					<img src={pokemon.image} alt={pokemon.name} />
				</figure>
				<section className="pokemon-info">
					<article className="stats">
						<h3>Stats</h3>
						<StatsList stats={pokemon.stats} bgColor={pokemon.bgColor} />
					</article>
					<article className="dimensions">
						<p>
							Height: <span>{pokemon.height / 10}m</span>
						</p>
						<p>
							Weight: <span>{pokemon.weight / 10}kg</span>
						</p>
					</article>
					<article className="types">
						<h3>Type</h3>
						<ul>
							{pokemon.types.map((type, index) => (
								<LabelPokemonType key={index} type={type.type.name} />
							))}
						</ul>
					</article>
				</section>
			</Content>
		</Container>
	)
}
