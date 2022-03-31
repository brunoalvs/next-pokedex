import Image from 'next/image'
import Link from 'next/link'
import { PokemonNextApiResponse } from '../../types/pokemon'

import { Container } from './styles'
interface PokeCardProps {
	pokemon: PokemonNextApiResponse
}

function PokeCard({ pokemon }: PokeCardProps) {
	return (
		<Link href={pokemon.name}>
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
					priority={pokemon.id <= 3 ? true : false}
				/>
				<p className="pokemon-name">{pokemon.name}</p>
				<p className="pokemon-id">{pokemon.id.toString().padStart(3, '0')}</p>
			</Container>
		</Link>
	)
}

export default PokeCard
