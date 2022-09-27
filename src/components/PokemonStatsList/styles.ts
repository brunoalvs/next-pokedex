import styled from 'styled-components'

export const Container = styled.ul`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: .8rem;
  list-style: none;
`;

export const StatItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1rem;
  align-items: center;
`;

export const StatName = styled.p`
  text-transform: ${props => props.children === 'hp' ? 'uppercase' : 'capitalize'};
`;

export const Progress = styled.progress`
  width: 100%;
  height: 1rem;
  border-radius: 1rem;
  overflow: hidden;

  &[value] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    &::-moz-progress-bar {
      background-color: ${({ theme }) => theme.text};
      border-radius: .5rem;
    }

    &::-webkit-progress-bar {
      background-color: ${({ theme }) => theme.shape};
      border-radius: .5rem;
    }

    &::-webkit-progress-value {
      background-color: ${({ theme }) => theme.text};
      border-radius: .5rem;
    }
  }
`;
