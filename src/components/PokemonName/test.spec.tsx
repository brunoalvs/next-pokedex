import { render, screen } from '@testing-library/react';
import { PokemonName } from '@/components/PokemonName';
import type { PokemonNameProps } from '@/components/PokemonName';

const defaultProps: PokemonNameProps = {
  name: 'Bulbasaur',
  jpname: 'フシギダネ',
};

describe('PokemonName:', () => {
  beforeEach(() => {
    render(
      <PokemonName {...defaultProps} />
    )
  })

  it('should be render the component and show name in English', () => {
    const english = screen.getByRole('heading', { name: defaultProps.name })
    expect(english).toBeInTheDocument()
  })

  it('should be render the component and show name in Japanese', () => {
    const japanese = screen.getByRole('heading', { name: defaultProps.jpname })
    expect(japanese).toBeInTheDocument()
  })
})
