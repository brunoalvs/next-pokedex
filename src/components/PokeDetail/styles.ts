import styled from 'styled-components';

export const Container = styled.section`
  border: 1px dashed green;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-auto-rows: 1fr;
  gap: 2rem;
  padding: 2rem;
`;

export const ContentColumn = styled.div`
  border: 1px dashed blue;
`;

export const PokeId = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
`;

export const Figure = styled.figure`
  border: 1px dashed hotpink;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const Sizes = styled.div`
  border: 1px dashed red;
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
`;
