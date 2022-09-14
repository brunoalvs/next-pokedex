import { fetchPokemons } from '@/pages/api/pokemon'
import { result } from '@/tests/mock/pokemons'

const unmockedFetch = global.fetch

beforeAll(() => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(result),
    })
  )
})

afterAll(() => {
  global.fetch = unmockedFetch
})

describe('Get Pokemon function', () => {
  it('should fetch Pokemon', async () => {
    const pokemons = await fetchPokemons()

    expect(pokemons).toEqual(result)
    expect(fetch).toHaveBeenCalledTimes(1)
  })
})
