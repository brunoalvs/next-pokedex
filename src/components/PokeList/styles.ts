import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-gap: 0.75rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    grid-gap: 1.5rem;
  }
`
