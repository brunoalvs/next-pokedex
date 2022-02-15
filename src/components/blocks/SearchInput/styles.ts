import styled from 'styled-components'

export const Container = styled.div``

export const Input = styled.input`
	border: 0;
	cursor: pointer;

	width: 100%;

	background-color: var(--input-bg);
	border-radius: 0.75em;
	font-size: 1.25rem;
	padding: 1.25rem 1.5rem;
	transition: all 0.2s ease-in-out;

	&::placeholder {
		color: var(--text-body);
		font-weight: 300;
		opacity: 1;
	}

	&::-webkit-input-placeholder {
		color: var(--text-body);
		font-weight: 300;
	}
	&::-moz-placeholder {
		color: var(--text-body);
		font-weight: 300;
	}
	&:-ms-input-placeholder {
		color: var(--text-body);
		font-weight: 300;
	}

	&:focus {
		cursor: text;
		outline: 1px solid var(--input-border);
	}

	&:hover {
		filter: brightness(0.9);
	}

	&:active {
		filter: brightness(0.7);
	}
`
