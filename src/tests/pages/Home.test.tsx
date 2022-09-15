import Home from '@/pages/index'
import { render, screen } from '@testing-library/react'

import { result } from '../mock/pokemons'

import { getPokemons } from '../../pages/api/pokemons'

jest.mock('../../pages/api/pokemons')

describe('Home Page', () => {
  it('renders correctly', () => {
    render(<Home pokemons={result} />)

    expect(screen.getByTestId('homepage')).toBeInTheDocument()
  })

  it.todo('loads initial data')
})
