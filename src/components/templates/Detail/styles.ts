import styled from 'styled-components'

export const Container = styled.section<{
	isOpen: boolean
}>`
	width: 100%;
	min-height: 100vh;
	height: 100%;
	overflow-y: auto;

	background: var(--background);
	color: var(--text-body);

	padding: 2rem;

	position: fixed;
	top: 0;
	left: 0;
	opacity: 0;
	border-radius: 100%;
	transform: scale(0);
	transition: all 0.2s;

	${props =>
		props.isOpen &&
		`
    border-radius: 0;
    opacity: 1;
    transform: scale(1);
  `}
`

export const Header = styled.header`
	position: relative;
	padding: 2rem;

	> button {
		width: 3rem;
		height: 3rem;
		position: absolute;
		left: 0rem;
		top: 3rem;
	}

	> .pokemon-detail {
		text-align: center;
		padding: 0 3rem;

		h2 {
			font-size: 3rem;
			color: var(--text-title);
			text-transform: capitalize;
		}

		p {
			font-size: 2rem;
			font-weight: 600;
		}
	}
`

export const Content = styled.article`
	display: flex;
	flex-direction: column;

	> figure {
		max-width: 100%;
		padding: 6rem 2rem;
		background: var(--shape);
		border-radius: 2.5rem;
	}

	.pokemon-types {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
		gap: 1rem;
		padding: 1rem;
	}
`

export const TypeLabel = styled.span<{
	typePokemon?: string
}>`
	background: ${props => props.typePokemon || '#000'};
	color: white;
	border-radius: 2.5rem;
	padding: 0.5rem 2rem;

	text-transform: capitalize;
`
