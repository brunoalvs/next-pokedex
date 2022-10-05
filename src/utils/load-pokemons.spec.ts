import { mocked } from 'jest-mock'
import { getPokemons } from './get-pokemons'
import { getPokemonInfoToCard } from './get-pokemon-infocard'
import { loadPokemons } from './load-pokemons'
import { results as getPokemonsResults } from '@/tests/mock/get-pokemons-response'
import { waitFor } from '@testing-library/dom'

const MockResponseRequest = {
  id: 1,
  name: 'bulbasaur',
  sprites: {
    other: {
      'official-artwork': {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      },
    },
  },
}

jest.mock('./get-pokemons')
jest.mock('./get-pokemon-infocard')

describe('loadPokemons', () => {
  it('should use fetch when the function is called', async () => {
    const getPokemonsMocked = mocked(getPokemons)
    getPokemonsMocked.mockResolvedValueOnce(getPokemonsResults)

    const getPokemonInfoToCardMocked = mocked(getPokemonInfoToCard)
    getPokemonInfoToCardMocked.mockResolvedValueOnce(MockResponseRequest)

    loadPokemons()

    expect(getPokemonsMocked).toHaveBeenCalledTimes(1)
    waitFor (() => {
      expect(getPokemonInfoToCardMocked).toHaveBeenCalledTimes(1)
    })
  })

  it('should return a error whent the function catch a error', async () => {
    const getPokemonsMocked = mocked(getPokemons)
    getPokemonsMocked.mockRejectedValueOnce(new Error('error'))

    const getPokemonInfoToCardMocked = mocked(getPokemonInfoToCard)
    getPokemonInfoToCardMocked.mockResolvedValueOnce(MockResponseRequest)

    loadPokemons()

    expect(getPokemonsMocked).toHaveBeenCalled()
    waitFor (() => {
      expect(getPokemonInfoToCardMocked).toHaveBeenCalledTimes(1)
    })
  })
})
