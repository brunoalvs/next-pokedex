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

export const InputSearch = styled.div`
	display: grid;
	grid-template-columns: 1.25rem 1fr;
	gap: 1rem;
	background-color: #ebf3f5;
	border-radius: 0.8rem;
	padding: 0.8rem 1.2rem;
	position: relative;

	img {
		width: 1.25rem;
		height: 1.25rem;
	}

	input {
		width: 100%;
		height: 100%;
		background-color: transparent;
		border: 0;
		border-radius: 0.8rem;
		color: #b1b8c5;
		font-size: 1.1rem;
		position: absolute;
		top: 0;
		left: 0;
		padding-left: 3rem;
		outline: 1px solid #ebf3f5;

		&:focus,
		&:hover {
			outline: 1px solid #a9afb0;
		}

		&::placeholder {
			color: #b1b8c5;
		}
	}
`
