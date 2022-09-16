import { render, screen } from '@testing-library/react'
import { mocked } from 'jest-mock'

import Home, { getStaticProps } from '@/pages/index'
import { results } from '@/tests/mock/pokemons'

import { getPokemons } from '../../pages/api/pokemons'

jest.mock('../../pages/api/pokemons')

describe('Home Page', () => {
  it('renders correctly', () => {
    render(<Home pokemons={results} />)
    expect(screen.getByTestId('homepage')).toBeInTheDocument()
  })

  it('initial', async () => {
    const getPokemonsMocked = mocked(getPokemons)
    getPokemonsMocked.mockResolvedValue(results)

    const response = await getStaticProps()
    expect(response).toEqual(
      expect.objectContaining({
        props: {
          pokemons: results,
        },
      })
    )
  })
})
