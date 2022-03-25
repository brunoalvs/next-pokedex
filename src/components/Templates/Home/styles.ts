import styled from 'styled-components'

export const Container = styled.section`
	width: 100vw;
	max-width: 100%;
	min-height: 100vh;
	padding: 2rem;
`

export const HeaderApp = styled.header`
	display: grid;
	gap: 1rem;
	padding-bottom: 3rem;

	.title {
		color: var(--text-title);
		font-size: 3.5rem;
	}

	p {
		color: var(--text-body);
		font-size: 1.25rem;
	}
`

export const InputSearch = styled.input`
	background-color: #ebf3f5;
	border: 0;
	border-radius: 0.8rem;
	color: #b1b8c5;
	outline: 1px solid #ebf3f5;
	font-size: 1.1rem;
	padding: 0.8rem 1rem;

	&:focus,
	&:hover {
		outline: 1px solid #a9afb0;
	}

	&::placeholder {
		color: #b1b8c5;
	}
`
