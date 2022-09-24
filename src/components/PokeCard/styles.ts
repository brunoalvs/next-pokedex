import styled from 'styled-components';

export const Container = styled('a')`
  background-color: #f7f7f7;
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

export const Cover = styled('figure')`
  margin: 0;
`;
