import styled from 'styled-components'

export const Container = styled.div<{
	isOpen: boolean
}>`
	position: fixed;
	left: 0;
	top: 0;

	width: 100vw;
	min-height: 100vh;
	height: 100%;
	overflow-y: auto;
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

	@media (min-width: 900px) {
		/* display: flex;
		flex-wrap: wrap; */
	}
`

export const Header = styled.header`
	width: 100%;
	height: 5rem;
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
		top: calc(50% - 1.5rem);
		left: 0;
		transition: filter 0.2s;

		> svg {
			width: 3rem;
			height: 3rem;
			border: 1px dashed darkblue;
		}

		&:hover {
			filter: brightness(0.8);
		}
	}

	.number {
		color: var(--text-title);
		font-size: 2.5rem;
		font-weight: bold;
		text-transform: capitalize;
	}
`
export const Content = styled.div`
	display: flex;
	flex-wrap: wrap;
`

export const Figure = styled.figure`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px dashed rgba(106, 25, 106, 0.5);

	@media (min-width: 900px) {
		width: 40%;
	}
`
export const Details = styled.section`
	width: 100%;
	border: 1px dashed rgba(34, 105, 65, 0.5);
	padding: 1rem;

	.title {
		color: var(--text-title);
		font-size: 2.5rem;
		text-align: center;
		text-transform: capitalize;
	}

	@media (min-width: 900px) {
		width: 60%;
	}
`
