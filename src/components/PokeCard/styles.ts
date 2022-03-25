import styled from 'styled-components'

export const Container = styled.a`
	cursor: pointer;
	background-color: var(--shape);
	border-radius: 1rem;
	padding: 2rem 1rem;
	text-align: center;
	transition: filter 0.2s, background-color 0.5s, background 0.5s;

	&:hover {
		filter: brightness(80%);
	}

	.pokemon-id {
		color: var(--text-title);
		opacity: 0.95;
		font-size: 1.2rem;

		&::before {
			content: '#';
		}

		@media (min-width: 600px) {
			font-size: 1.5rem;
		}
	}

	.pokemon-name {
		padding: 1rem 0 0.5rem;
		font-size: 1.5rem;
		font-weight: bold;
		color: var(--text-title);
		text-transform: capitalize;
		word-break: break-all;

		@media (min-width: 600px) {
			font-size: 1.8rem;
		}
	}
`
