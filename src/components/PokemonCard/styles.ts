import styled from 'styled-components'

export const Container = styled.div`
	background-color: var(--shape);
	cursor: pointer;
	transition: filter 0.2s, background-color 0.5s;

	&:hover {
		filter: brightness(80%);
	}
`
