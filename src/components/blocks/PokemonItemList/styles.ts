import styled, { css, keyframes } from 'styled-components'

export const Container = styled.div<{
	bgColor?: string
}>`
	background-color: ${props => `rgba(${props.bgColor}, 0.5)` || `var(--shape)`};
	border-radius: 1.25rem;
	cursor: pointer;
	padding: 2rem;
	text-align: center;

	display: grid;
	grid-template-rows: 1fr auto auto;
	grid-template-columns: 1fr;
	gap: 0.5rem;

	transition: filter 0.2s;

	&:hover {
		filter: brightness(0.9);
	}

	> img {
		width: 100%;
		height: 100%;
		object-fit: contain;

		max-width: 100%;
	}

	> h2 {
		color: var(--text-title);
		font-size: 2rem;
		text-transform: capitalize;
	}

	p {
		color: var(--text-title);
		font-size: 1.5rem;
		font-weight: 300;
	}
`
