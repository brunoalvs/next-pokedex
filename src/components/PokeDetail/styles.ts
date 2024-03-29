import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    padding: 2rem;
    gap: 2rem;
  }
`;

export const ContentColumn = styled.div`
  padding-bottom: 1rem;
`;

export const PokeId = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
`;

export const Figure = styled.figure`
  /* padding: 2rem; */
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

export const Sizes = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

export const Description = styled.p`
  font-size: 1.25rem;
  padding: 2rem 1rem;
  text-align: center;
`;
