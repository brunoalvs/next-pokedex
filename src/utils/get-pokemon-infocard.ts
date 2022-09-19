import { GetPokemonInfoToCardResponse } from '@/types/default'

export const getPokemonInfoToCard = async (
  name: string
): Promise<GetPokemonInfoToCardResponse> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  const data = await res.json()

  const result: GetPokemonInfoToCardResponse = {
    id: data.id,
    name: data.name,
    sprites: {
      other: {
        'official-artwork': {
          front_default: data.sprites.other['official-artwork'].front_default,
        },
      },
    },
  }

  return result
}
