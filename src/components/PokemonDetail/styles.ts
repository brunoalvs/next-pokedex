import styled from 'styled-components'

export const Container = styled.div<{
	isOpen: boolean
}>`
	position: fixed;
	left: 0;
	top: 0;

	width: 100vw;
	min-height: 100vh;
	background-color: var(--background);

	opacity: 0;
	padding: 2rem;
	transform: translateX(100%);
	transition: transform 0.2s, opacity 0.2s;
	z-index: 1;

	${props =>
		props.isOpen &&
		`
    opacity: 1;
    transform: translateX(0);
  `}
`

export const Header = styled.header`
	border: 1px dashed darkblue;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	position: relative;

	button {
		cursor: pointer;
		border: 0;
		background-color: var(--background);
		position: absolute;
		top: calc(50% - 1rem);
		left: 0;
		transition: filter 0.2s;

		> svg {
			width: 2rem;
		}

		&:hover {
			filter: brightness(0.8);
		}
	}

	.title {
		color: var(--text-title);
		font-size: 2.5rem;
		text-transform: capitalize;
	}
`
export const Figure = styled.figure`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	background-color: rgba(106, 25, 106, 0.5);
`
export const Content = styled.section`
	background-color: rgba(34, 105, 65, 0.5);
	padding: 1rem;
`
