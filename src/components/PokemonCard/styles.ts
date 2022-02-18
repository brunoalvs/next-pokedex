import styled from 'styled-components'

export const Container = styled.section`
	border-radius: 1rem;
	display: grid;
	gap: 1rem;
	padding: 1rem 0.5rem;

	transition: filter 0.2s;

	&:hover {
		cursor: pointer;
		filter: brightness(110%);
	}

	.pokemon-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		> h2 {
			color: #0a0a0a;
			font-size: 1.5rem;
			text-transform: capitalize;
		}

		> p {
			color: #0a0a0a;
			font-size: 1.2rem;
		}
	}
`
