export type NamedAPIResource = {
  name: string
  url: string
}

export type Pokemon = {
  id: number
  name: string
  sprites: {
    front_default: string
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
};
