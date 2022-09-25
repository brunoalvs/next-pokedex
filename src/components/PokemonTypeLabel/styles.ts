import styled from 'styled-components';

export const Container = styled.label`
  background-color: ${({ theme }) => theme.text};
  border-radius: 2rem;
  color: ${({ theme }) => theme.body};
  padding: 0 0.875rem;
  text-transform: uppercase;
`;
