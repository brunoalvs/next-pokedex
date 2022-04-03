import styled from 'styled-components'

export const Container = styled.button`
	border-radius: 50%;
	background-color: transparent;
	border: 0;
	margin: 0.5rem;
	padding: 0.5rem;
	transition: transform 0.2s ease;
	transform: scale(1.05);

	> svg {
		width: 3rem;
		height: 3rem;
		fill: var(--text-title);
		filter: drop-shadow(0 0 0.2rem rgba(255, 255, 255, 0.5));
	}

	&:hover {
		cursor: pointer;
		filter: brightness(0.9);
		transform: scale(1.1);
	}
`
