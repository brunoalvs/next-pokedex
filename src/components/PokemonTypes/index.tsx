import React from 'react'
import { colours } from '../../helpers/type-colours'

import { Container, Type } from './styles'

interface TypesProps {
	types: {
		slot: number
		type: {
			name: string
		}
	}[]
}

export const PokemonTypes = ({ types }: TypesProps) => {
	return (
		<Container>
			{types.map(type => (
				<Type key={type.slot} backgroundColor={colours[type.type.name]}>
					{type.type.name}
				</Type>
			))}
		</Container>
	)
}
