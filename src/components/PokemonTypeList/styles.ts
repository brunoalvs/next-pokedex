import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  border: 1px dashed red;
  padding: 0.25rem;

  @media (min-width: 600px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
`;
