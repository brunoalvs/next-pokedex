import styled from 'styled-components'
import { colours } from '../../helpers/type-colours'

export const Container = styled.label<{
	typeColor: string
}>`
	background-color: ${props => props.typeColor};
	border-radius: 5px;
	color: black;
	display: inline-block;
	padding: 0.5rem 1rem;
	text-transform: capitalize;

	&:not(:last-child) {
		margin-right: 0.5rem;
	}
`

interface LabelPokemonTypeProps {
	type: string
}

export const LabelPokemonType = ({ type }: LabelPokemonTypeProps) => {
	return <Container typeColor={colours[type]}>{type}</Container>
}
