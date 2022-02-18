import styled, { keyframes } from 'styled-components'

export const Container = styled.section`
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

	.pokemon-info {
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
	}
`

const shimmer = keyframes`
  100% {
    transform: translateX(100%);
  }
`

export const SkeletonBox = styled.span`
	width: 100%;

	display: inline-block;
	border-radius: 0.5rem;
	height: 5em;
	padding-bottom: 100%;
	position: relative;
	overflow: hidden;
	background-color: #dddbdd;

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
