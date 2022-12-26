import { fetchPokemons } from './fetch-pokemons'

const MockResponseRequest = {
  count: 1118,
  next: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
  previous: null,
  results: [
    {
      name: 'bulbasaur',

      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    },
  ],
}

beforeAll(() => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(MockResponseRequest),
    })
  )
})

afterAll(() => (global.fetch = global.fetch))

describe('fetchPokemons', () => {
  it('should use fetch when the function is called', () => {
    fetchPokemons('https://pokeapi.co/api/v2/pokemon')
    expect(fetch).toHaveBeenCalledTimes(1)
  })

  it('should return a list of pokemons', async () => {
    const result = await fetchPokemons('https://pokeapi.co/api/v2/pokemon')
    expect(result).toEqual(MockResponseRequest)
  })
})
