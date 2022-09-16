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
