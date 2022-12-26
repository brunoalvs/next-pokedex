import { Pokemon } from '@/types/pokemons'
import { getPokemonByName } from './get-pokemon-by-name'

const MockResponseRequest: Pokemon = {
  id: 1,
  name: 'bulbasaur',
  sprites: {
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    other: {
      'official-artwork': {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      },
    },
  },
  stats: [
    {
      base_stat: 45,
      effort: 0,
      stat: {
        name: 'hp',
        url: 'https://pokeapi.co/api/v2/stat/1/',
      },
    },
  ],
  types: [
    {
      slot: 1,
      type: {
        name: 'grass',
        url: 'https://pokeapi.co/api/v2/type/12/',
      },
    },
  ],
  height: 7,
  weight: 69,
}

beforeAll(() => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(MockResponseRequest),
    })
  )
})

describe('getPokemonByName:', () => {
  it('should returns json correctly', async () => {
    const pokemonName = 'bulbasaur'
    const result = await getPokemonByName(pokemonName)

    expect(result.name).toEqual(pokemonName)
  })
})
