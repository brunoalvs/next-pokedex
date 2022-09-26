import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
`;

export const JapaneseName = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.shape};
  position: absolute;

  @media (min-width: 768px) {
    font-size: 6rem;
  }
`;

export const EnglishName = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
  isolation: isolate;
  text-transform: capitalize;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;
