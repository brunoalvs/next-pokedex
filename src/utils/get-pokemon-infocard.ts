import { GetPokemonInfoToCardResponse } from '@/types/default'
import { fetchPokemons } from './fetch-pokemons'

export const getPokemonInfoToCard = async (
  name: string
): Promise<GetPokemonInfoToCardResponse> => {
  const data = await fetchPokemons(`https://pokeapi.co/api/v2/pokemon/${name}`)

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
