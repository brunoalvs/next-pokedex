import { Pokemon } from '@/types/pokemons'
import { fetchPokemons } from './fetch-pokemons'

export const getPokemonByName = async ( name: string): Promise<Pokemon> => {
  const data: Pokemon = await fetchPokemons(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  )

  return {
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
    stats: data.stats,
    types: data.types,
    height: data.height,
    weight: data.weight,
  }
}
