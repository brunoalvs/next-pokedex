import Link from 'next/link'

import { PokemonDataResponse } from '../../types/pokemon'

import { Wrapper, Container, PokeCard } from './styles'

interface PokemonListProps {
	pokemons: PokemonDataResponse[]
}

export function PokemonList({ pokemons }: PokemonListProps) {
	return (
		<Wrapper>
			<Container>
				{pokemons.map((pokemon, index) => (
					<Link
						key={index + 1}
						href={pokemon.name}
						children={
							<PokeCard>
								<img
									src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
										index + 1
									}.png`}
									alt={`${pokemon.name} illustration`}
								/>
								<p>{pokemon.name}</p>
								<p>{index.toString().padStart(3, '0')}</p>
							</PokeCard>
						}
					></Link>
				))}
			</Container>
		</Wrapper>
	)
}
