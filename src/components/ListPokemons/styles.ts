import styled from 'styled-components'

export const Container = styled.div`
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
