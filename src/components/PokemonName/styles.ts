import styled from 'styled-components';

export const Container = styled.section`
  border: 1px dashed hotpink;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const JapaneseName = styled.h2`
  font-size: 6rem;
  font-weight: bold;
  color: ${({ theme }) => theme.shape};
  position: absolute;
`;

export const EnglishName = styled.h1`
  font-size: 4rem;
  color: ${({ theme }) => theme.text};
  isolation: isolate;
`;
