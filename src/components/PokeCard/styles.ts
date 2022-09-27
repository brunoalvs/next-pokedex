import styled from 'styled-components';

export const Container = styled('a')`
  background-color: ${({ theme }) => theme.shape};
  border-radius: 1rem;
  cursor: pointer;
	padding: 1rem;
	text-align: center;
  transition: filter 0.2s, background-color 0.5s;

  &:hover {
		filter: brightness(90%);
	}

  &:active {
    filter: brightness(110%);
  }
`;

export const Title = styled('h2')`
  font-size: 1rem;
  text-transform: capitalize;
  word-break: break-all;
  margin: .5rem 0;

  @media (min-width: 600px) {
		font-size: 1.75rem;
  }
`;

export const Text = styled('p')`
  font-size: 0.8rem;
  margin: 0;
  opacity: 0.95;

  @media (min-width: 600px) {
    font-size: 1.35rem;
	}
`;

export const Cover = styled('figure')`
  margin: 0;
`;
