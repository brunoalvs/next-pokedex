import styled from 'styled-components';

export const Container = styled('a')`
  background-color: #f7f7f7;
  border-radius: 1rem;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
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
  color: #2e3057; //var(--text-title);
  font-size: 1.5rem;
  text-transform: capitalize;
  word-break: break-all;
  margin: .5rem 0;

  @media (min-width: 600px) {
		font-size: 2rem;
  }
`;

export const Text = styled('p')`
  color: #2e3057; //var(--text-title);
  font-size: 1.2rem;
  margin: .2rem 0 .5rem;
  opacity: 0.95;

  @media (min-width: 600px) {
    font-size: 1.5rem;
	}
`;

export const Cover = styled('figure')`
  margin: 0;
`;
