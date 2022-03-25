import Image from 'next/image'
import { PokemonNextApiResponse } from '../../types/pokemon'

import { Container } from './styles'
interface PokeCardProps {
	pokemon: PokemonNextApiResponse
}

function PokeCard({ pokemon }: PokeCardProps) {
	return (
		<>
			<Container
				style={{
					backgroundColor: `${pokemon.bgColor.replace(')', ', 0.45)')}`,
				}}
			>
				<Image
					src={pokemon.image}
					alt=""
					width={300}
					height={300}
					layout="responsive"
					priority={pokemon.id > 3 ? false : true}
				/>
				<p className="pokemon-name">{pokemon.name}</p>
				<p className="pokemon-id">{pokemon.id.toString().padStart(3, '0')}</p>
			</Container>
		</>
	)
}

export default PokeCard
