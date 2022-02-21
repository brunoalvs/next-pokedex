import styled from 'styled-components'

export const Container = styled.div`
	cursor: pointer;
	background-color: var(--shape);
	border-radius: 1rem;
	padding: 2rem 1rem;
	text-align: center;
	transition: filter 0.2s, background-color 0.5s;

	&:hover {
		filter: brightness(80%);
	}

	h2 {
		padding: 1rem 0 0.5rem;
		font-size: 1.5rem;
		color: var(--text-title);
		text-transform: capitalize;
		word-break: break-all;
	}

	p {
		color: var(--text-title);
		opacity: 0.95;
		font-size: 1.2rem;
	}

	@media (min-width: 600px) {
		h2 {
			font-size: 2rem;
		}

		p {
			font-size: 1.5rem;
		}
	}
`
