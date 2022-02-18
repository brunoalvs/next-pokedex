import styled, { keyframes } from 'styled-components'

const shake = keyframes`
  0% {
    transform: rotate(-10deg) scale(1);
  }
  50% {
    transform: rotate(10deg) scale(1.1);
  }
  100% {
    transform: rotate(-10deg) scale(1);
  }
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	animation: ${fadeIn} 1s, ${shake} 0.5s infinite;
`
