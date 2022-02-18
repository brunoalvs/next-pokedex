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
