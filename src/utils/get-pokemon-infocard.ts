type GetPokemonInfoToCardResponse = {
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
}

export const getPokemonInfoToCard = async (
  name: string
): Promise<GetPokemonInfoToCardResponse> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  const data = await res.json()

  const result: GetPokemonInfoToCardResponse = {
    id: data.id,
    name: data.name,
    sprites: {
      front_default: data.sprites.front_default,
      other: {
        'official-artwork': {
          front_default: data.sprites.other['official-artwork'].front_default,
        },
      },
    },
  }

  return result
}
