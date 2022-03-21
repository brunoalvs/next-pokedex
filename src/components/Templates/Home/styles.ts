import styled from 'styled-components'

export const Container = styled.section`
	width: 100vw;
	max-width: 100%;
	min-height: 100vh;
	padding: 2rem;
`

export const HeaderApp = styled.header`
	display: grid;
	gap: 1rem;
	padding-bottom: 3rem;

	.title {
		color: var(--text-title);
		font-size: 3.5rem;
	}

	p {
		color: var(--text-body);
		font-size: 1.25rem;
	}
`
