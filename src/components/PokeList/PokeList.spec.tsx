import { render, screen } from '@testing-library/react'
import { results } from '@/tests/mock/pokemons'

import { PokeList } from './'

describe('PokeList', () => {
  it('should render correctly', () => {
    render(<PokeList pokemons={results} />)

    expect(screen.getByTestId('poke-list')).toBeTruthy()
  })
})
