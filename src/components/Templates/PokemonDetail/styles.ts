import styled from 'styled-components'

export const Container = styled.div<{
	bgColor: string
}>`
	width: 100%;
	min-height: 100vh;

	display: grid;
	grid-template-rows: auto 1fr;
`

export const Header = styled.header`
	display: grid;
	grid-template-columns: 70px 1fr 70px;
	grid-template-rows: auto;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	padding-top: 2rem;

	.details {
		padding: 1rem 0;
		text-align: center;

		.title {
			color: var(--text-title);
			font-size: 2.5rem;
			text-transform: capitalize;
		}

		.pokemon-id {
			color: var(--text-title);
			opacity: 0.95;
			font-size: 1.2rem;

			@media (min-width: 600px) {
				font-size: 1.5rem;
			}
		}
	}
`

export const Content = styled.div<{
	bgColor: string
}>`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;
	align-items: center;
	padding: 2rem;

	> figure {
		max-height: 640px;
		border-radius: 2rem;
		display: flex;
		justify-content: center;
		background-color: ${props =>
			`${props.bgColor.replace(')', ', 0.45)')}` || '#fff'};
		padding: 2rem;

		img {
			width: 100%;
			max-width: 540px;
			max-height: 540px;
			object-fit: contain;
		}
	}

	> .pokemon-info {
		width: 100%;
		height: 100%;
		padding: 1.5rem 0;
		font-size: 1.25rem;
		background-color: ${props => props.bgColor.replace(')', ', 0.05)')};

		h3 {
			color: var(--text-title);
			margin-top: 1rem;
			margin-bottom: 0.5rem;
		}

		ul {
			list-style: none;
		}

		p {
			color: var(--text-body);
		}

		.dimensions {
			display: grid;
			grid-template-columns: repeat(2, max-content);
			gap: 1.25rem;

			p {
				display: flex;
				flex-direction: column-reverse;
				color: var(--text-body);
				margin-bottom: 1rem;
				font-weight: bold;
				font-size: 1.25rem;

				> span {
					font-size: 1.5rem;
					font-weight: normal;
				}
			}
		}

		@media (min-width: 768px) {
			border-radius: 2rem 0 0 2rem;
			padding: 1.5rem;
		}
	}

	@media (min-width: 768px) {
		grid-template-columns: 1fr 2fr;
	}
`
