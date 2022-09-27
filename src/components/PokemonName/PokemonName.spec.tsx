import { render, screen } from '@testing-library/react';
import { PokemonName } from '.';

const EnglishName = 'Bulbasaur';
const JapaneseName = 'フシギダネ';

describe('PokemonName:', () => {
  beforeAll(() => {
    render(
      <PokemonName name={EnglishName} jpname={JapaneseName} />
    )
  })

  it('should be render the component and show name in English and Japanese', () => {
    expect(screen.getByText(JapaneseName)).toBeInTheDocument()
    expect(screen.getByText(EnglishName)).toBeInTheDocument()
  })
})
