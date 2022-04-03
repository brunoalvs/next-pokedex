import styled from 'styled-components'

export const Container = styled.div<{
	bgColor: string
}>`
	width: 100%;
	min-height: 100vh;

	display: grid;
	grid-template-rows: auto 1fr;
`

export const Header = styled.header``

export const Content = styled.div<{
	bgColor: string
}>`
	width: 100%;
	border: 1px dashed #f5f34f;
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;
	align-items: center;
	padding: 2rem;

	> figure {
		max-height: 640px;
		border-radius: 2rem;
		display: flex;
		justify-content: center;
		background-color: ${props =>
			`${props.bgColor.replace(')', ', 0.45)')}` || '#fff'};

		img {
			width: 100%;
			max-width: 540px;
			max-height: 540px;
			object-fit: contain;
		}

		@media (max-width: 768px) {
			transform: translateY(15%);
		}
	}

	> article {
		padding: 2.5rem 1.5rem;
		border-radius: 3rem 3rem 0 0;

		@media (min-width: 768px) {
			border-radius: 2rem 0 0 2rem;
		}
	}

	@media (min-width: 768px) {
		grid-template-columns: 1fr 2fr;
	}
`
