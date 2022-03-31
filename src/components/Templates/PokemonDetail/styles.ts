import styled from 'styled-components'

export const Container = styled.div<{
	bgColor: string
}>`
	width: 100%;
	min-height: 100vh;
	background-color: ${props =>
		`${props.bgColor.replace(')', ', 0.8)')}` || '#fff'};
`

export const Header = styled.header``

export const Content = styled.div`
	border: 1px dashed white;
`
