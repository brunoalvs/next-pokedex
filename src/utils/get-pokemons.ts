import { GetPokemonsResponse } from '@/types/default'
import { fetchPokemons } from './fetch-pokemons'

export const getPokemons = async (pokeLenght: number): Promise<GetPokemonsResponse> => {
  const res: GetPokemonsResponse = await fetchPokemons(`https://pokeapi.co/api/v2/pokemon/?offset=${pokeLenght}&limit=20`)
  return res
}
