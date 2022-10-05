import { getPokemonSpecies } from './get-pokemon-species'

import type { PokemonSpeciesReturn, PokemonSpeciesResponseFromApi } from './get-pokemon-species'

const MockResponseRequest: PokemonSpeciesResponseFromApi = {
  flavor_text_entries: [
    {
      flavor_text: 'The plant blooms\n' +
        'when it is\n' +
        'absorbing solar\fenergy. It stays\n' +
        'on the move to\n' +
        'seek sunlight.',
      language: {
        name: 'en'
      }
    },
  ],
  is_legendary: false,
  names: [
    {
      name: 'Bulbasaur',
      language: {
        name: 'en'
      }
    },
    {
      name: 'フシギダネ',
      language: {
        name: 'ja'
      }
    },
  ]
}

const MockResultExpected: PokemonSpeciesReturn = {
  flavor_text: MockResponseRequest.flavor_text_entries.find((item) => item.language.name === 'en')?.flavor_text || '',
  is_legendary: false,
  names: MockResponseRequest.names.filter((item) => item.language.name === 'en' || item.language.name === 'ja')
}

beforeAll(() => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(MockResponseRequest),
    })
  )
})

describe('getPokemonSpecies:', () => {
  it('should returns json correctly', async () => {
    const pokemonIdNumber = 1
    const result = await getPokemonSpecies(pokemonIdNumber)

    expect(result).toEqual(MockResultExpected)
  })

})
