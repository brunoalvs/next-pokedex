import '@/pages/api/pokemons'

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

describe('Api Routes Pokemons', () => {
  it('should return a list of pokemons', async () => {
    const response = await fetch('http://localhost:3000/api/pokemons')
    const data = await response.json()

    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          sprites: expect.objectContaining({
            other: expect.objectContaining({
              'official-artwork': expect.objectContaining({
                front_default: expect.any(String),
              }),
            }),
          }),
        }),
      ])
    )
  })
})
