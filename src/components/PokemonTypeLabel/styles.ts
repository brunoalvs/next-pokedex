import styled from 'styled-components';

export const Container = styled.label<{
  color?: string;
}>`
  background-color: ${({ color, theme }) => color || theme.text};
  border-radius: 2rem;
  color: ${({ theme }) => theme.body};
  font-size: 0.75rem;
  padding: 0 1rem;
  text-transform: uppercase;
`;
