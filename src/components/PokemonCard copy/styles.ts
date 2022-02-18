import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  100% {
    transform: translateX(100%);
  }
`

export const SkeletonBox = styled.span`
	width: 100%;
	height: 20em;
	background-color: #dddbdd;

	display: inline-block;
	border-radius: 0.5rem;
	position: relative;
	overflow: hidden;

	&:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-image: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0) 0,
			rgba(255, 255, 255, 0.2) 20%,
			rgba(255, 255, 255, 0.5) 60%,
			rgba(255, 255, 255, 0)
		);

		transform: translateX(-100%);
		animation: ${shimmer} 2s linear infinite;
	}
`

export const Container = styled.section<{
	cardIsOpen: boolean
}>`
	border-radius: 1rem;
	display: grid;
	gap: 1rem;
	padding: 1.5rem 1rem;
	background-color: var(--shape);

	transition: filter 0.2s, background-color 0.5s;

	&:hover {
		cursor: pointer;
		filter: brightness(110%);
	}

	${({ cardIsOpen }) =>
		cardIsOpen &&
		`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
  `}
`

export const Content = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	> h2 {
		color: #0a0a0a;
		font-size: 1.5rem;
		text-transform: capitalize;
	}

	> p {
		color: #0a0a0a;
		font-size: 1.2rem;
	}
`
