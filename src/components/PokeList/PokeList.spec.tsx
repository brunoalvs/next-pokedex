import { render, screen } from '@testing-library/react'
import { result } from '@/mock/pokemons'

import { PokeList } from './'

describe('PokeList', () => {
  it('should render correctly', () => {
    render(<PokeList pokemons={result} />)

    expect(screen.getByTestId('poke-list')).toBeTruthy()
  })
})
