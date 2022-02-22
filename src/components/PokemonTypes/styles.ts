import styled from 'styled-components'

export const Container = styled.section`
	display: flex;
	justify-content: center;
	border: 1px dashed orangered;
	display: flex;
	gap: 1rem;
`

export const Type = styled.span<{
	backgroundColor?: string
}>`
	background: ${props => props.backgroundColor || '#000'};
	color: white;
	border-radius: 2.5rem;
	padding: 0.5rem 2rem;

	text-transform: capitalize;
`
