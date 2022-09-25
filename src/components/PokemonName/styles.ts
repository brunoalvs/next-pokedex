import styled from 'styled-components';

export const Container = styled.section`
  border: 1px dashed hotpink;
  display: flex;
  align-items: center;
  justify-content: center;
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
    font-size: 4rem;
  }
`;
