import { GetPokemonsResponse } from '@/types/default'
import { fetchPokemons } from './fetch-pokemons'

export const getPokemons = async (): Promise<GetPokemonsResponse> => {
  const res: GetPokemonsResponse = await fetchPokemons('https://pokeapi.co/api/v2/pokemon/')
  return res
}
