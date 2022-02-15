import styled from 'styled-components'

export const Container = styled.main`
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
`
