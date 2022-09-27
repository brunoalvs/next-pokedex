import styled from 'styled-components';

export const Container = styled.h2`
  color: #2e3057; //var(--text-title);
  display: inline;
  font-size: 1.5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  transition: filter 0.2s ease;

  &:hover {
    cursor: pointer;
    filter: brightness(1.3);
  }

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
`;
