import styled from 'styled-components'

export const Container = styled.main`
	width: 100%;
	max-width: 100vw;
	padding: 2rem;

	> header {
		display: grid;
		gap: 1rem;
		padding-bottom: 3rem;

		p {
			font-size: 1.25rem;
			color: var(--text-body);
		}
	}

	.title {
		font-size: 3.5rem;
		color: var(--text-title);
	}

	.infinite-scroll {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;

		@media (min-width: 768px) {
			grid-template-columns: repeat(3, 1fr);
		}

		@media (min-width: 1024px) {
			grid-template-columns: repeat(4, 1fr);
		}

		@media (min-width: 1280px) {
			grid-template-columns: repeat(5, 1fr);
		}
	}
`
