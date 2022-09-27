import styled from 'styled-components';

export const Container = styled.h2`
  font-size: 1.5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  color: #2e3057; //var(--text-title);

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
`;
