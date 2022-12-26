import styled from 'styled-components';

export const Container = styled.label<{
  color?: string;
}>`
  background-color: ${({ color, theme }) => color !== undefined ? theme.colors.types[color as keyof typeof theme.colors.types] : theme.colors.types.normal};
  border-radius: 2rem;
  color: ${({ theme }) => theme.body};
  font-size: 1rem;
  padding: 0 1rem;
  text-transform: uppercase;

  @media (min-width: 600px) {
    font-size: 0.80rem;
  }
`;
