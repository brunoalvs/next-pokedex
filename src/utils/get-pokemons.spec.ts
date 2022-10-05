import { results as mockPokemonsList } from '@/tests/mock/get-pokemons-response'
import { getPokemons } from '@/utils/get-pokemons'

beforeAll(() => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockPokemonsList),
    })
  )
})

afterAll(() => (global.fetch = global.fetch))

describe('getPokemons', () => {
  it('should use fetch when the function is called', () => {
    getPokemons()
    expect(fetch).toHaveBeenCalledTimes(1)
  })

  it('should return a list of pokemons', async () => {
    const result = await getPokemons()
    expect(result).toEqual(mockPokemonsList)
  })
})
