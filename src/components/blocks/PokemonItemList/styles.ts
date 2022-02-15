import styled, { css, keyframes } from 'styled-components'

export const Container = styled.div<{
	bgColor?: string
}>`
	background-color: ${props => props.bgColor || `var(--shape)`};
	border-radius: 1.25rem;
	padding: 2rem;

	display: grid;
	grid-template-rows: 1fr auto auto;
	grid-template-columns: 1fr;
	gap: 0.5rem;

	text-align: center;

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
		color: #848692;
		font-size: 1.25rem;
		font-weight: 300;
	}
`
