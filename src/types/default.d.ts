export type NamedAPIResource = {
  name: string
  url: string
}

export type GetPokemonsResponse = {
  results: {
    name: string
    url: string
  }[]
}

export type GetPokemonInfoToCardResponse = {
  id: number
  name: string
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
}
