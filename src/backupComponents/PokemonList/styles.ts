import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
`

export const Container = styled.section`
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

export const LoadMoreButton = styled.button`
	background-color: var(--text-title);
	border: 1px solid var(--blue);
	border-radius: 4px;
	padding: 0.8rem 1.6rem;
	color: var(--white);
	font-size: 1.5rem;

	transition: background-color 0.2s;

	&:hover {
		background-color: var(--blue);
	}
`
