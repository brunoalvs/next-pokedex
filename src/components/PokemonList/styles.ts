import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
`

export const Container = styled.section`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;

	@media (min-width: 600px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (min-width: 900px) {
		grid-template-columns: repeat(4, 1fr);
	}

	@media (min-width: 1200px) {
		grid-template-columns: repeat(5, 1fr);
	}

	@media (min-width: 1600px) {
		grid-template-columns: repeat(6, 1fr);
	}

	@media (min-width: 2100px) {
		max-width: 90vw;
		grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
		margin: 0 auto;
	}
`

export const PokeCard = styled.div`
	cursor: pointer;
	background-color: var(--shape);
	border-radius: 1rem;
	padding: 2rem 1rem;
	text-align: center;
	transition: filter 0.2s, background-color 0.5s;

	img {
		width: 100%;
	}

	&:hover {
		filter: brightness(85%);
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
