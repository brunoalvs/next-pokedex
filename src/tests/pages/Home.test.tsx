import { render, screen } from '@testing-library/react'
import { mocked } from 'jest-mock'

import Home, { getStaticProps } from '@/pages/index'
import { results } from '@/tests/mock/pokemons'
import { loadPokemons } from '@/utils/load-pokemons'

jest.mock('../../utils/load-pokemons')

describe('Home Page', () => {
  it('renders correctly', () => {
    render(<Home pokemons={results} />)
    expect(screen.getByTestId('homepage')).toBeInTheDocument()
  })

  it('initial', async () => {
    const getPokemonsMocked = mocked(loadPokemons)
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
