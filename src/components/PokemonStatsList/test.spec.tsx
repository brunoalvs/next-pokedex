import { PokemonStatsList } from '@/components/PokemonStatsList';
import type { PokemonStatsListProps } from '@/components/PokemonStatsList';
import { render, screen } from '@testing-library/react';

const defaultProps: PokemonStatsListProps = {
  stats: [
    {
      base_stat: 45,
      effort: 0,
      stat: {
        name: 'hp',
        url: 'https://pokeapi.co/api/v2/stat/1/',
      },
    },
    {
      base_stat: 49,
      effort: 0,
      stat: {
        name: 'attack',
        url: 'https://pokeapi.co/api/v2/stat/2/',
      },
    },
    {
      base_stat: 49,
      effort: 0,
      stat: {
        name: 'defense',
        url: 'https://pokeapi.co/api/v2/stat/3/',
      },
    },
    {
      base_stat: 65,
      effort: 1,
      stat: {
        name: 'special-attack',
        url: 'https://pokeapi.co/api/v2/stat/4/',
      },
    },
    {
      base_stat: 65,
      effort: 0,
      stat: {
        name: 'special-defense',
        url: 'https://pokeapi.co/api/v2/stat/5/',
      },
    },
    {
      base_stat: 45,
      effort: 0,
      stat: {
        name: 'speed',
        url: 'https://pokeapi.co/api/v2/stat/6/',
      },
    },
  ],
};

describe('Components/PokemonStatsList:', () => {
  it('should render the component and show the stats', () => {
    render(<PokemonStatsList {...defaultProps} />);

    expect(screen.getByText('hp')).toBeInTheDocument();
    expect(screen.getByText('attack')).toBeInTheDocument();
  });
});
