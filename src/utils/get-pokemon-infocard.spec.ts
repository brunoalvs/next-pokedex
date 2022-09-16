// import { results as mockPokemonsList } from '@/mock/get-pokemons-response'

import { getPokemonInfoToCard } from '@/utils/get-pokemon-infocard'

const POKEMON_NAME: string = 'bulbasaur'
const MockResponseRequest = {
  id: 1,
  name: 'bulbasaur',
  sprites: {
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    other: {
      'official-artwork': {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      },
    },
  },
}

beforeAll(() => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(MockResponseRequest),
    })
  )
})

afterAll(() => (global.fetch = global.fetch))

describe('getPokemonInfoToCard', () => {
  it('should use fetch when the function is called', () => {
    getPokemonInfoToCard(POKEMON_NAME)
    expect(fetch).toHaveBeenCalledTimes(1)
  })

  it('should return a list of pokemons', async () => {
    const result = await getPokemonInfoToCard(POKEMON_NAME)
    expect(result).toEqual(MockResponseRequest)
  })
})
