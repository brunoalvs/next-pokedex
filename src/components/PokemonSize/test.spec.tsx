import { PokemonSize } from '@/components/PokemonSize';
import type { PokemonSizeProps } from '@/components/PokemonSize';
import { render, screen } from '@testing-library/react';

const defaultProps: PokemonSizeProps = {
  type: 'Type',
  value: 'Value',
};

describe('components/PokemonSize:', () => {
  it('should renders the Pokemon size data properly', () => {
    render(<PokemonSize {...defaultProps} />);

    expect(screen.getByText(defaultProps.type)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.value)).toBeInTheDocument();
  });
});
