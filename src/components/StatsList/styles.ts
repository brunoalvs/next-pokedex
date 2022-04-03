import styled from 'styled-components'

export const Container = styled.ul`
	margin: 1rem 0;

	> li {
		display: grid;
		grid-template-columns: 3rem auto 1fr;
		gap: 1rem;

		.name {
			color: var(--text-title);
			font-weight: bold;
			text-transform: uppercase;
		}

		.base {
			color: var(--text-body);
		}
	}
`

export const Progress = styled.div<{
	percent: number
	bgColor: string
}>`
	width: 100%;
	height: 10px;
	background-color: #f0f0f0;
	border-radius: 10px;
	position: relative;

	> .progress-bar {
		width: ${props => props.percent}%;
		height: 100%;
		background: linear-gradient(
			to right,
			${props => props.bgColor},
			${props => `${props.bgColor.replace(')', ', 0.7)')}`}
		);
		border-radius: 10px;
		position: absolute;
		left: 0;
		top: 0;
		transition: all 0.5s ease-in-out;
	}
`
